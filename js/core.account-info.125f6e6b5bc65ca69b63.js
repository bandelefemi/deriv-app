(self.webpackChunk=self.webpackChunk||[]).push([[521],{38030:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var a=n(40841),c=n.n(a),i=n(60216),r=n.n(i),o=n(32735),l=n(4390),s=n(77395),_=n(20374),u=n(48680),d=n(13799),m=n(78568),g=n(75672),p=n(37781),y=function(e){var t=e.currency;return e.is_virtual?o.createElement(_.Localize,{i18n_default_text:"Demo"}):t?(0,u.getCurrencyName)(t):o.createElement(_.Localize,{i18n_default_text:"No currency assigned"})},b=function(e){var t,n,a=e.has_error,i=e.market_type,r=e.sub_account_type,l=e.server,d=e.is_dark_mode_on;return a?o.createElement("div",null,o.createElement(s.Text,{color:"disabled",size:"xs"},o.createElement(_.Localize,{i18n_default_text:"Unavailable"})),(null==l||null===(t=l.server_info)||void 0===t?void 0:t.geolocation)&&("gaming"===i||"synthetic"===i)&&o.createElement(s.Text,{color:"less-prominent",size:"xxs",className:"badge-server badge-server--disabled"},l.server_info.geolocation.region," ",1!==l.server_info.geolocation.sequence?l.server_info.geolocation.sequence:"")):o.createElement("div",null,(0,u.getMT5AccountDisplay)(i,r),(null==l||null===(n=l.server_info)||void 0===n?void 0:n.geolocation)&&("gaming"===i||"synthetic"===i)&&o.createElement(s.Text,{color:d?"general":"colored-background",size:"xxs",className:c()("badge-server",{"badge-server-bot":(0,u.isBot)()})},l.server_info.geolocation.region," ",1!==l.server_info.geolocation.sequence?l.server_info.geolocation.sequence:""))};const f=function(e){var t=e.balance,n=e.currency,a=e.currency_icon,i=e.display_type,r=e.has_balance,l=e.has_error,d=e.has_reset_balance,m=e.is_disabled,g=e.is_virtual,p=e.loginid,f=e.market_type,h=e.onClickAccount,v=e.onClickResetVirtualBalance,w=e.selected_loginid,E=e.server,k=e.is_dark_mode_on,A=e.sub_account_type;if(m&&!n)return null;var x=n?a:"IcCurrencyUnknown";return o.createElement(o.Fragment,null,o.createElement("div",{id:"dt_".concat(p),className:c()("acc-switcher__account",{"acc-switcher__account--selected":p===w,"acc-switcher__account--disabled":m}),onClick:m?void 0:h},o.createElement("span",{className:"acc-switcher__id"},o.createElement(s.Icon,{icon:g?"IcCurrencyVirtual":x,className:"acc-switcher__id-icon",size:24}),o.createElement("span",null,"currency"===i?o.createElement(y,{is_virtual:g,currency:n}):o.createElement(b,{market_type:f,sub_account_type:A,server:E,has_error:l,is_dark_mode_on:k}),o.createElement("div",{className:c()("acc-switcher__loginid-text",{"acc-switcher__loginid-text--disabled":l})},p)),d?o.createElement(s.Button,{is_disabled:m,onClick:function(e){e.stopPropagation(),v()},className:"acc-switcher__reset-account-btn",secondary:!0,small:!0},(0,_.localize)("Reset balance")):r&&o.createElement(s.Text,{size:"xs",color:"prominent",styles:{fontWeight:"inherit"},className:"acc-switcher__balance"},n&&o.createElement(s.Money,{currency:(0,u.getCurrencyDisplayCode)(n),amount:(0,u.formatMoney)(n,t,!0),should_format:!1,show_currency:!0})))))};var h=function(e){var t=e.children,n=e.header,a=e.is_visible,c=e.toggleVisibility;return o.createElement(s.ContentExpander,{className:"acc-switcher",title:n,is_expanded:a,onToggle:c,is_title_spaced:!0},t)};h.propTypes={children:r().node,header:r().oneOfType([r().object,r().string]),is_visible:r().bool,toggleVisibility:r().func};const v=h;function w(e,t,n,a,c,i,r){try{var o=e[i](r),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,c)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var i=e.apply(t,n);function r(e){w(i,a,c,r,o,"next",e)}function o(e){w(i,a,c,r,o,"throw",e)}r(void 0)}))}}function k(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,c=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw i}}return n}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var C=function(e){var t,n=A(o.useState(!e.is_virtual||e.should_show_real_accounts_list?0:1),2),a=n[0],i=n[1],r=A(o.useState(!0),2),l=r[0],d=r[1],g=A(o.useState(!0),2),y=g[0],b=g[1],h=A(o.useState(!0),2),w=h[0],x=h[1],N=A(o.useState(!1),2),C=N[0],T=N[1],z=o.useRef(),D=o.useRef(null);o.useEffect((function(){D.current&&C&&D.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[C]);var M=function(e){switch(e){case"demo_deriv":return d(!l);case"demo_dmt5":return x(!w);case"real_deriv":return b(!y);case"real_dmt5":return T(!C);default:return!1}},S=function(){I(),e.is_positions_drawer_on&&e.togglePositionsDrawer(),e.logoutClient().then((function(){e.routeBackInApp(e.history)}))},I=function(){e.toggleAccountsDialog(!1)};(0,s.useOnClickOutside)(z,I,(function(t){return e.is_visible&&!t.target.classList.contains("acc-info")}));var j=function(t){I(),e.history.push("".concat(u.routes.mt5,"#").concat(t))},R=e.is_fully_authenticated&&function(){if(!e.account_settings)return!1;var t=e.account_settings,n=t.citizen,a=t.tax_identification_number,c=t.tax_residence;return!!(n&&a&&c)}(),L=function(){j("real")},B=function(){j("demo")},V=function(e){return"demo"===e.account_type},O=function(t){var n,a,c=F("gaming",null===(n=e.landing_companies)||void 0===n?void 0:n.mt_gaming_company,t,e.trading_servers),i=F("financial",null===(a=e.landing_companies)||void 0===a?void 0:a.mt_financial_company,t,e.trading_servers);return[].concat(k(c),k(i))},F=function(e,t,n,a){var c=[];return t&&Object.keys(t).forEach((function(t){var i=n.find((function(n){return n.sub_account_type===t&&n.market_type===e}));i&&(a.filter((function(t){return t.supported_accounts.includes(e)&&!t.disabled})).length&&"real"===i.account_type&&(i=!1));if(!i){var r=(0,u.getMT5AccountKey)(e,t);r&&c.push({icon:(0,u.getMT5Account)(e,t),title:(0,u.getMT5AccountDisplay)(e,t),type:r})}})),c},W=function(){var t=E(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(I(),e.account_loginid!==n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.switchAccount(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=E(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(),e.resetVirtualBalance();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=0===a,q=function(){return e.account_list.slice().sort((function(t,n){var a=e.accounts[t.loginid].currency,c=e.accounts[n.loginid].currency,i=(0,u.isCryptocurrency)(a),r=(0,u.isCryptocurrency)(c),o=!i,l=!r;return t.is_virtual||n.is_virtual?t.is_virtual?1:-1:i&&r||o&&l?a<c?-1:1:o&&r?-1:1}))},$=function(){return e.mt5_login_list.slice().sort((function(e,t){var n=V(e),a=V(t);return n&&!a?1:a&&!n||"gaming"===e.market_type||"synthetic"===e.market_type?-1:"financial"===e.sub_account_type?"gaming"===t.market_type||"synthetic"===t.market_type?1:-1:1}))},G=function(){return $().filter(V)},H=function(){return $().filter((function(e){return!V(e)}))},K=function(){return e.available_crypto_currencies.length<1&&!e.has_fiat||!e.is_virtual},Z=e.is_eu&&("malta"===e.landing_company_shortcode||"iom"===e.landing_company_shortcode&&0!==e.upgradeable_landing_companies.length),J=function(t){if(e.is_eu){var n=(0,u.getAccountTypeFields)({category:"real",type:t});return e.isAccountOfTypeDisabled(null==n?void 0:n.account_type)}return!e.has_active_real_account};if(!e.is_logged_in)return!1;var Q,X,Y,ee,te=e.is_mt5_allowed?(0,_.localize)("Total assets in your Deriv and DMT5 demo accounts."):(0,_.localize)("Total assets in your Deriv demo accounts."),ne=e.is_mt5_allowed?(0,_.localize)("Total assets in your Deriv and DMT5 real accounts."):(0,_.localize)("Total assets in your Deriv real accounts."),ae=U?ne:te,ce=o.createElement("div",{className:"acc-switcher__list-wrapper"},o.createElement(v,{header:(0,_.localize)("Deriv Accounts"),is_visible:l,toggleVisibility:function(){M("demo_deriv")}},o.createElement("div",{className:"acc-switcher__accounts"},q().filter((function(e){return e.is_virtual})).map((function(t){return o.createElement(f,{is_dark_mode_on:e.is_dark_mode_on,key:t.loginid,balance:e.accounts[t.loginid].balance,currency:e.accounts[t.loginid].currency,currency_icon:"IcCurrency-".concat(t.icon),display_type:"currency",has_balance:"balance"in e.accounts[t.loginid],has_reset_balance:e.accounts[e.account_loginid].is_virtual,is_disabled:t.is_disabled,is_virtual:t.is_virtual,loginid:t.loginid,onClickAccount:t.is_disabled?void 0:function(){return W(t.loginid)},onClickResetVirtualBalance:P,selected_loginid:e.account_loginid})})))),e.is_mt5_allowed&&o.createElement(o.Fragment,null,o.createElement("div",{className:"acc-switcher__separator acc-switcher__separator--no-padding"}),o.createElement(v,{header:(0,_.localize)("DMT5 Accounts"),is_visible:w,toggleVisibility:function(){M("demo_dmt5")}},e.is_loading_mt5?o.createElement("div",{className:"acc-switcher__accounts--is-loading"},o.createElement(p._z,{speed:3})):o.createElement(o.Fragment,null,!!G().length&&o.createElement("div",{className:"acc-switcher__accounts"},G().map((function(t){return o.createElement(f,{is_dark_mode_on:e.is_dark_mode_on,key:t.login,market_type:t.market_type,sub_account_type:t.sub_account_type,balance:t.balance,currency:t.currency,currency_icon:"IcMt5-".concat((0,u.getMT5Account)(t.market_type,t.sub_account_type)),has_balance:"balance"in t,has_error:t.has_error,loginid:t.display_login,onClickAccount:B})}))),O(G()).map((function(t){return o.createElement("div",{key:t.title,className:"acc-switcher__new-account"},o.createElement(s.Icon,{icon:"IcMt5-".concat(t.icon),size:24}),o.createElement(s.Text,{size:"xs",color:"general",className:"acc-switcher__new-account-text"},t.title),o.createElement(s.Button,{onClick:function(){return e=t.type,sessionStorage.setItem("open_mt5_account_type","demo.".concat(e)),void B();var e},className:"acc-switcher__new-account-btn",is_disabled:e.mt5_disabled_signup_types.demo,secondary:!0,small:!0},(0,_.localize)("Add")))})))))),ie=o.createElement("div",{ref:D,className:"acc-switcher__list-wrapper"},o.createElement(o.Fragment,null,o.createElement(v,{header:(0,_.localize)("Deriv Accounts"),is_visible:y,toggleVisibility:function(){M("real_deriv")}},o.createElement("div",{className:"acc-switcher__accounts"},q().filter((function(e){return!e.is_virtual})).map((function(t){return o.createElement(f,{is_dark_mode_on:e.is_dark_mode_on,key:t.loginid,balance:e.accounts[t.loginid].balance,currency:e.accounts[t.loginid].currency,currency_icon:"IcCurrency-".concat(t.icon),display_type:"currency",has_balance:"balance"in e.accounts[t.loginid],is_disabled:t.is_disabled,is_virtual:t.is_virtual,is_eu:e.is_eu,loginid:t.loginid,onClickAccount:t.is_disabled?void 0:function(){return W(t.loginid)},selected_loginid:e.account_loginid})}))),(e.is_eu||e.is_virtual||!K()||Z?e.upgradeable_landing_companies:[]).map((function(t,n){return o.createElement("div",{key:n,className:"acc-switcher__new-account"},o.createElement(s.Icon,{icon:"IcDeriv",size:24}),o.createElement(s.Text,{size:"xs",color:"general",className:"acc-switcher__new-account-text"},(0,m.GH)(t,{account_residence:e.client_residence})),o.createElement(s.Button,{id:"dt_core_account-switcher_add-new-account",onClick:function(){e.openRealAccountSignup(t)},className:"acc-switcher__new-account-btn",secondary:!0,small:!0},(0,_.localize)("Add")))})),!(e.is_virtual&&e.can_upgrade_to)&&K()&&(!e.is_eu||e.is_eu&&e.can_change_fiat_currency)&&o.createElement(s.Button,{className:"acc-switcher__btn",secondary:!0,onClick:e.account_list.filter((function(e){return!e.is_virtual})).some((function(e){return"Real"!==e.title}))?function(){return e.openRealAccountSignup("manage")}:function(){I(),e.toggleSetCurrencyModal()}},e.has_fiat&&0===(null===(t=e.available_crypto_currencies)||void 0===t?void 0:t.length)?(0,_.localize)("Manage account"):(0,_.localize)("Add or manage account")))),e.is_mt5_allowed&&o.createElement(o.Fragment,null,o.createElement("div",{className:"acc-switcher__separator acc-switcher__separator--no-padding"}),o.createElement(v,{header:(0,_.localize)("DMT5 Accounts"),is_visible:C,toggleVisibility:function(){M("real_dmt5")}},e.is_loading_mt5?o.createElement("div",{className:"acc-switcher__accounts--is-loading"},o.createElement(p._z,{speed:3})):o.createElement(o.Fragment,null,!!H().length&&o.createElement("div",{className:"acc-switcher__accounts"},H().map((function(t){return o.createElement(f,{is_dark_mode_on:e.is_dark_mode_on,key:t.login,market_type:t.market_type,sub_account_type:t.sub_account_type,balance:t.balance,currency:t.currency,currency_icon:"IcMt5-".concat((0,u.getMT5Account)(t.market_type,t.sub_account_type)),has_balance:"balance"in t,has_error:t.has_error,loginid:t.display_login,onClickAccount:L,server:(n=t,a=n.error?n.error.details.server:n.server,e.mt5_login_list.length>1?e.mt5_login_list.find((function(e){return e.server===a})):null)});var n,a}))),O(H()).map((function(t){return o.createElement("div",{key:t.title,className:c()("acc-switcher__new-account",{"acc-switcher__new-account--disabled":e.mt5_login_list_error})},o.createElement(s.Icon,{icon:"IcMt5-".concat(t.icon),size:24}),o.createElement(s.Text,{size:"xs",color:"general",className:"acc-switcher__new-account-text"},t.title),o.createElement(s.Button,{onClick:function(){return n=t.type,a="synthetic"===n?e.has_malta_account:e.has_maltainvest_account,void(e.is_eu&&!a?(I(),e.openAccountNeededModal("synthetic"===n?e.standpoint.gaming_company:e.standpoint.financial_company,"synthetic"===n?(0,_.localize)("Deriv Synthetic"):(0,_.localize)("Deriv Financial"),"synthetic"===n?(0,_.localize)("DMT5 Synthetic"):(0,_.localize)("DMT5 Financial"))):(R?sessionStorage.setItem("open_mt5_account_type","real.".concat(n,".set_password")):sessionStorage.setItem("open_mt5_account_type","real.".concat(n)),L()));var n,a},className:"acc-switcher__new-account-btn",secondary:!0,small:!0,is_disabled:e.mt5_disabled_signup_types.real||J(t.type)||"financial_stp"===t.type&&(e.is_pending_authentication||!!e.mt5_login_list_error)},(0,_.localize)("Add")))}))))));return o.createElement("div",{className:"acc-switcher__list",ref:z},o.createElement(s.Tabs,{active_index:a,className:"acc-switcher__list-tabs",onTabItemClick:function(e){return i(e)},top:!0},o.createElement("div",{label:(0,_.localize)("Real"),id:"real_account_tab"},o.createElement(s.DesktopWrapper,null,o.createElement(s.ThemedScrollbars,{height:"354px"},ie)),o.createElement(s.MobileWrapper,null,o.createElement(s.Div100vhContainer,{className:"acc-switcher__list-container",max_autoheight_offset:"234px"},ie))),o.createElement("div",{label:(0,_.localize)("Demo"),id:"dt_core_account-switcher_demo-tab"},o.createElement(s.DesktopWrapper,null,o.createElement(s.ThemedScrollbars,{height:"354px"},ce)),o.createElement(s.MobileWrapper,null,o.createElement(s.Div100vhContainer,{className:"acc-switcher__list-container",max_autoheight_offset:"234px"},ce)))),o.createElement("div",{className:c()("acc-switcher__separator",{"acc-switcher__separator--auto-margin":e.is_mobile})}),o.createElement("div",{className:"acc-switcher__total"},o.createElement(s.Text,{line_height:"s",size:"xs",weight:"bold",color:"prominent"},o.createElement(_.Localize,{i18n_default_text:"Total assets"})),o.createElement(s.Text,{size:"xs",color:"prominent",className:"acc-switcher__balance"},o.createElement(s.Money,{currency:U?e.obj_total_balance.currency:"USD",amount:(0,u.formatMoney)(U?e.obj_total_balance.currency:"USD",U?(ee=e.mt5_login_list.filter((function(e){return!V(e)})).reduce((function(e,t){return e.balance+=t.balance,e}),{balance:0}),e.obj_total_balance.amount_real+(e.obj_total_balance.amount_mt5>0?e.obj_total_balance.amount_mt5:ee.balance)):(Q=e.account_list.find((function(e){return e.is_virtual})).loginid,X=e.accounts[Q]?e.accounts[Q].balance:0,Y=e.mt5_login_list.filter((function(e){return V(e)})).reduce((function(e,t){return e.balance+=t.balance,e}),{balance:0}),Array.isArray(e.mt5_login_list)?Y.balance+X:X),!0),show_currency:!0,should_format:!1}))),o.createElement(s.Text,{color:"less-prominent",line_height:"xs",size:"xxxs",className:"acc-switcher__total-subtitle"},ae),o.createElement("div",{className:"acc-switcher__separator"}),o.createElement("div",{className:"acc-switcher__footer"},e.is_uk&&e.has_any_real_account&&o.createElement(s.Button,{className:"acc-switcher__compare",type:"button",has_effect:!0,onClick:function(){I(),e.toggleAccountTypesModal(!0)},text:(0,_.localize)("Compare"),secondary:!0}),o.createElement("div",{id:"dt_logout_button",className:"acc-switcher__logout",onClick:S},o.createElement(s.Text,{color:"prominent",size:"xs",align:"left",className:"acc-switcher__logout-text"},(0,_.localize)("Log out")),o.createElement(s.Icon,{icon:"IcLogout",className:"acc-switcher__logout-icon drawer__icon",onClick:S}))))};C.propTypes={available_crypto_currencies:r().array,account_list:r().array,account_loginid:r().string,accounts:r().object,can_change_fiat_currency:r().bool,can_upgrade_to:r().string,has_fiat:r().bool,has_any_real_account:r().bool,has_active_real_account:r().bool,is_eu:r().bool,is_fully_authenticated:r().bool,is_loading_mt5:r().bool,is_logged_in:r().bool,is_mt5_allowed:r().bool,is_pending_authentication:r().bool,is_positions_drawer_on:r().bool,is_uk:r().bool,is_virtual:r().bool,is_visible:r().bool,landing_company_shortcode:r().string,logoutClient:r().func,mt5_disabled_signup_types:r().object,mt5_login_list:r().array,obj_total_balance:r().object,openRealAccountSignup:r().func,switchAccount:r().func,resetVirtualBalance:r().func,toggleAccountsDialog:r().func,toggleAccountTypesModal:r().func,togglePositionsDrawer:r().func,toggleSetCurrencyModal:r().func,updateMt5LoginList:r().func};var T=(0,d.withRouter)((0,g.$j)((function(e){var t=e.client,n=e.common,a=e.ui;return{available_crypto_currencies:t.available_crypto_currencies,account_loginid:t.loginid,accounts:t.accounts,account_settings:t.account_settings,can_change_fiat_currency:t.can_change_fiat_currency,account_list:t.account_list,can_upgrade_to:t.can_upgrade_to,client_residence:t.residence,is_dark_mode_on:a.is_dark_mode_on,is_eu:t.is_eu,is_fully_authenticated:t.is_fully_authenticated,is_loading_mt5:t.is_populating_mt5_account_list,is_logged_in:t.is_logged_in,is_mt5_allowed:t.is_mt5_allowed,is_pending_authentication:t.is_pending_authentication,is_uk:t.is_uk,is_virtual:t.is_virtual,has_fiat:t.has_fiat,has_any_real_account:t.has_any_real_account,landing_company_shortcode:t.landing_company_shortcode,mt5_disabled_signup_types:t.mt5_disabled_signup_types,mt5_login_list:t.mt5_login_list,mt5_login_list_error:t.mt5_login_list_error,obj_total_balance:t.obj_total_balance,switchAccount:t.switchAccount,resetVirtualBalance:t.resetVirtualBalance,isAccountOfTypeDisabled:t.isAccountOfTypeDisabled,has_malta_account:t.has_malta_account,has_maltainvest_account:t.has_maltainvest_account,has_active_real_account:t.has_active_real_account,openAccountNeededModal:a.openAccountNeededModal,logoutClient:t.logout,landing_companies:t.landing_companies,upgradeable_landing_companies:t.upgradeable_landing_companies,updateMt5LoginList:t.updateMt5LoginList,routeBackInApp:n.routeBackInApp,standpoint:t.standpoint,is_positions_drawer_on:a.is_positions_drawer_on,openRealAccountSignup:a.openRealAccountSignup,trading_servers:t.trading_servers,toggleAccountsDialog:a.toggleAccountsDialog,toggleAccountTypesModal:a.toggleAccountTypesModal,togglePositionsDrawer:a.togglePositionsDrawer,toggleSetCurrencyModal:a.toggleSetCurrencyModal,should_show_real_accounts_list:a.should_show_real_accounts_list,toggleShouldShowRealAccountsList:a.toggleShouldShowRealAccountsList}}))(C)),z=function(e){var t=e.disableApp,n=e.enableApp,a=e.is_visible,i=e.is_upgrade_enabled,r=e.toggle;return o.createElement(s.Modal,{id:"dt_account_switcher_modal",className:"accounts-switcher",enableApp:n,is_open:a,is_vertical_top:!0,disableApp:t,has_close_icon:!1,toggleModal:r,height:"auto",width:"calc(100vw - 32px)"},o.createElement(s.Div100vhContainer,{className:c()("acc-switcher__wrapper","acc-switcher__wrapper--is-mobile"),max_autoheight_offset:"48px"},o.createElement(T,{is_mobile:!0,is_visible:!0,toggle:r,is_upgrade_enabled:i})))};z.propTypes={children:r().any,onClose:r().func,title:r().string,visible:r().bool,wrapperClassName:r().string};const D=z;var M=function(e){var t=e.is_disabled,n=e.disabled_message,a=e.children;return t&&n?o.createElement(s.Popover,{alignment:"bottom",message:n,zIndex:99999},a):o.createElement(o.Fragment,null,a)},S=function(e){var t=e.is_virtual,n=e.currency;return o.createElement(s.Icon,{icon:"IcCurrency-".concat(t?"virtual":n||"Unknown"),className:"acc-info__id-icon acc-info__id-icon--".concat(t?"virtual":n),size:24})},I=function(e){var t=e.acc_switcher_disabled_message,n=e.balance,a=e.currency,i=e.disableApp,r=e.enableApp,d=e.is_dialog_on,m=e.is_virtual,g=e.toggleDialog,p=e.is_disabled,y=a.toLowerCase();return o.createElement("div",{className:"acc-info__wrapper"},o.createElement("div",{className:"acc-info__separator"}),o.createElement(M,{is_disabled:p,disabled_message:t},o.createElement("div",{id:"dt_core_account-info_acc-info",className:c()("acc-info",{"acc-info--show":d,"acc-info--is-virtual":m,"acc-info--is-disabled":p}),onClick:p?void 0:function(){return g()}},o.createElement("span",{className:"acc-info__id"},o.createElement(s.DesktopWrapper,null,o.createElement(S,{is_virtual:m,currency:y})),o.createElement(s.MobileWrapper,null,(m||a)&&o.createElement(S,{is_virtual:m,currency:y}))),(void 0!==n||!a)&&o.createElement("p",{className:c()("acc-info__balance",{"acc-info__balance--no-currency":!a&&!m})},a?"".concat(n," ").concat((0,u.getCurrencyDisplayCode)(a)):o.createElement(_.Localize,{i18n_default_text:"No currency assigned"})),p?o.createElement(s.Icon,{icon:"IcLock"}):o.createElement(s.Icon,{icon:"IcChevronDownBold",className:"acc-info__select-arrow"}))),o.createElement(s.MobileWrapper,null,o.createElement(D,{is_visible:d,disableApp:i,enableApp:r,toggle:g})),o.createElement(s.DesktopWrapper,null,o.createElement(l.Z,{in:d,timeout:200,classNames:{enter:"acc-switcher__wrapper--enter",enterDone:"acc-switcher__wrapper--enter-done",exit:"acc-switcher__wrapper--exit"},unmountOnExit:!0},o.createElement("div",{className:"acc-switcher__wrapper"},o.createElement(T,{is_visible:d,toggle:g})))))};I.propTypes={acc_switcher_disabled_message:r().string,account_type:r().string,balance:r().string,currency:r().string,is_dialog_on:r().bool,is_disabled:r().bool,is_virtual:r().bool,loginid:r().string,toggleDialog:r().func};const j=I}}]);