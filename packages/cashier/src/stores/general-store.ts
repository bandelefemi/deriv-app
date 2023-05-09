import { action, computed, observable, reaction, when, makeObservable } from 'mobx';
import { isCryptocurrency, routes } from '@deriv/shared';
import Constants from 'Constants/constants';
import BaseStore from './base-store';
import PaymentAgentStore from './payment-agent-store';
import type { TRootStore, TWebSocket } from '../types';

export default class GeneralStore extends BaseStore {
    constructor(public WS: TWebSocket, public root_store: TRootStore) {
        super({ root_store });

        makeObservable(this, {
            calculatePercentage: action.bound,
            cashier_route_tab_index: observable,
            deposit_target: observable,
            has_set_currency: observable,
            init: action.bound,
            is_cashier_onboarding: observable,
            is_crypto: computed,
            is_deposit: observable,
            is_loading: observable,
            onMountCashierOnboarding: action.bound,
            onMountCommon: action.bound,
            onRemount: observable,
            percentage: observable,
            percentageSelectorSelectionStatus: action.bound,
            payment_agent: observable,
            setAccountSwitchListener: action.bound,
            setActiveTab: action.bound,
            setCashierTabIndex: action.bound,
            setDepositTarget: action.bound,
            setHasSetCurrency: action.bound,
            setIsCashierOnboarding: action.bound,
            setIsDeposit: action.bound,
            setLoading: action.bound,
            setOnRemount: action.bound,
            setShouldShowAllAvailableCurrencies: action.bound,
            should_percentage_reset: observable,
            should_show_all_available_currencies: observable,
        });

        when(
            () => this.root_store.client.is_logged_in,
            () => {
                this.setHasSetCurrency();
            }
        );

        reaction(
            () => [
                this.root_store.client.switched,
                this.root_store.client.is_logged_in,
                this.root_store.client.currency,
            ],
            () => {
                this.init();
            }
        );
    }

    active_container: keyof typeof Constants.containers = Constants.containers.deposit;
    cashier_route_tab_index = 0;
    deposit_target = '';
    has_set_currency = false;
    is_cashier_onboarding = true;
    is_deposit = false;
    is_loading = false;
    is_populating_values = false;
    onRemount: VoidFunction = () => this;
    percentage = 0;
    payment_agent: PaymentAgentStore | null = null;
    should_percentage_reset = false;
    should_show_all_available_currencies = false;

    setOnRemount(func: VoidFunction): void {
        this.onRemount = func;
    }

    get is_crypto(): boolean {
        const { currency } = this.root_store.client;
        return !!currency && isCryptocurrency(currency);
    }

    setHasSetCurrency(): void {
        const { account_list, has_active_real_account } = this.root_store.client;

        this.has_set_currency =
            account_list.filter(account => !account.is_virtual).some(account => account.title !== 'Real') ||
            !has_active_real_account;
    }

    async onMountCashierOnboarding() {
        const { account_prompt_dialog } = this.root_store.modules.cashier;

        if (!this.has_set_currency) {
            this.setHasSetCurrency();
        }
        this.setIsCashierOnboarding(true);
        account_prompt_dialog.resetIsConfirmed();
    }

    calculatePercentage(amount = this.root_store.modules.cashier.crypto_fiat_converter.converter_from_amount): void {
        const { client, modules } = this.root_store;
        const { account_transfer } = modules.cashier;

        if (this.active_container === account_transfer.container) {
            this.percentage = Number(
                ((Number(amount) / Number(account_transfer.selected_from.balance)) * 100).toFixed(0)
            );
        } else {
            this.percentage = Number(((Number(amount) / Number(client.balance)) * 100).toFixed(0));
        }
        if (!isFinite(this.percentage)) {
            this.percentage = 0;
        }
    }

    percentageSelectorSelectionStatus(should_percentage_reset: boolean): void {
        this.should_percentage_reset = should_percentage_reset;

        if (should_percentage_reset) {
            this.percentage = 0;
        }
    }

    setIsDeposit(is_deposit: boolean): void {
        this.is_deposit = is_deposit;
    }

    setShouldShowAllAvailableCurrencies(value: boolean): void {
        this.should_show_all_available_currencies = value;
    }

    setIsCashierOnboarding(is_cashier_onboarding: boolean): void {
        this.is_cashier_onboarding = is_cashier_onboarding;
    }

    setDepositTarget(target: string): void {
        this.deposit_target = target;
    }

    setAccountSwitchListener(): void {
        // cashier inits once and tries to stay active until switching account
        // since cashier calls take a long time to respond or display in iframe
        // so we don't have any unmount function here and everything gets reset on switch instead
        this.disposeSwitchAccount();
        this.onSwitchAccount(this.accountSwitcherListener);
    }

    async init() {
        if (this.root_store.modules.cashier) {
            const {
                client: { is_logged_in, switched },
                modules,
            } = this.root_store;
            const { payment_agent, withdraw } = modules.cashier;

            // wait for client settings to be populated in client-store
            await this.WS.wait('get_settings');

            if (is_logged_in) {
                if (!switched) {
                    payment_agent.setPaymentAgentList().then(payment_agent.filterPaymentAgentList);
                    // check if withdrawal limit is reached
                    // if yes, this will trigger to show a notification
                    await withdraw.check10kLimit();
                }
            }
        }
    }

    async onMountCommon(should_remount?: boolean) {
        const { client, common, modules } = this.root_store;
        const { is_from_derivgo, routeTo } = common;
        const { account_transfer, onramp, payment_agent, transaction_history } = modules.cashier;

        if (client.is_logged_in) {
            // avoid calling this again
            if (this.is_populating_values) {
                return;
            }

            this.is_populating_values = true;

            if (should_remount) {
                this.setOnRemount(this.onMountCommon);
            }
            // we need to see if client's country has PA
            // if yes, we can show the PA tab in cashier
            this.setLoading(true);
            await payment_agent.setPaymentAgentList();
            await payment_agent.filterPaymentAgentList();
            this.setLoading(false);

            if (!account_transfer.accounts_list.length) {
                account_transfer.sortAccountsTransfer(null, is_from_derivgo);
            }

            if (!payment_agent.is_payment_agent_visible && window.location.pathname.endsWith(routes.cashier_pa)) {
                routeTo(routes.cashier_deposit);
            }

            if (!onramp.is_onramp_tab_visible && window.location.pathname.endsWith(routes.cashier_onramp)) {
                routeTo(routes.cashier_deposit);
            }

            if (
                !transaction_history.is_crypto_transactions_visible &&
                window.location.pathname.endsWith(routes.cashier_crypto_transactions)
            ) {
                routeTo(routes.cashier_deposit);
                transaction_history.setIsCryptoTransactionsVisible(true);
                transaction_history.onMount();
            }
        }
    }

    setCashierTabIndex(index: number): void {
        this.cashier_route_tab_index = index;
    }

    setLoading(is_loading: boolean): void {
        this.is_loading = is_loading;
    }

    setActiveTab(container: string): void {
        this.active_container = container as keyof typeof Constants.containers;
    }

    accountSwitcherListener() {
        const { client, modules } = this.root_store;
        const { iframe, payment_agent } = modules.cashier;
        const container = Constants.map_action[this.active_container as keyof typeof Constants.map_action];

        client.setVerificationCode('', container);
        iframe.clearIframe();

        this.payment_agent = payment_agent;
        if (payment_agent.active_tab_index === 1 && window.location.pathname.endsWith(routes.cashier_pa)) {
            payment_agent.setActiveTab(1);
        }

        this.is_populating_values = false;

        this.onRemount();

        return Promise.resolve();
    }
}
