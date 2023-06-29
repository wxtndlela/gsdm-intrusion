!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return i};var i={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function l(t,i,e){return Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[i]}try{l({},"")}catch(z){l=function(t,i,e){return t[i]=e}}function d(t,i,e,n){var o=i&&i.prototype instanceof h?i:h,r=Object.create(o.prototype),s=new j(n||[]);return r._invoke=function(t,i,e){var n="suspendedStart";return function(o,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw r;return L()}for(e.method=o,e.arg=r;;){var s=e.delegate;if(s){var a=x(s,e);if(a){if(a===p)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=c(t,i,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}(t,e,s),r}function c(t,i,e){try{return{type:"normal",arg:t.call(i,e)}}catch(z){return{type:"throw",arg:z}}}i.wrap=d;var p={};function h(){}function m(){}function u(){}var f={};l(f,r,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==e&&n.call(b,r)&&(f=b);var v=u.prototype=h.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(i){l(t,i,(function(t){return this._invoke(i,t)}))}))}function w(t,i){var e;this._invoke=function(o,r){function s(){return new i((function(e,s){!function e(o,r,s,a){var l=c(t[o],t,r);if("throw"!==l.type){var d=l.arg,p=d.value;return p&&"object"==typeof p&&n.call(p,"__await")?i.resolve(p.__await).then((function(t){e("next",t,s,a)}),(function(t){e("throw",t,s,a)})):i.resolve(p).then((function(t){d.value=t,s(d)}),(function(t){return e("throw",t,s,a)}))}a(l.arg)}(o,r,e,s)}))}return e=e?e.then(s,s):s()}}function x(t,i){var e=t.iterator[i.method];if(void 0===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=void 0,x(t,i),"throw"===i.method))return p;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=c(e,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,p;var o=n.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=void 0),i.delegate=null,p):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,p)}function k(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function O(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var i=t[r];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function i(){for(;++e<t.length;)if(n.call(t,e))return i.value=t[e],i.done=!1,i;return i.value=void 0,i.done=!0,i};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=u,l(v,"constructor",u),l(u,"constructor",m),m.displayName=l(u,a,"GeneratorFunction"),i.isGeneratorFunction=function(t){var i="function"==typeof t&&t.constructor;return!!i&&(i===m||"GeneratorFunction"===(i.displayName||i.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,l(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},i.awrap=function(t){return{__await:t}},y(w.prototype),l(w.prototype,s,(function(){return this})),i.AsyncIterator=w,i.async=function(t,e,n,o,r){void 0===r&&(r=Promise);var s=new w(d(t,e,n,o),r);return i.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},y(v),l(v,a,"Generator"),l(v,r,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),i.keys=function(t){var i=[];for(var e in t)i.push(e);return i.reverse(),function e(){for(;i.length;){var n=i.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},i.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function e(e,n){return s.type="throw",s.arg=t,i.next=e,n&&(i.method="next",i.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],s=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var a=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(a&&l){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(t,i){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=i&&i<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=i,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(s)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),p},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),p}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,e){return this.delegate={iterator:S(t),resultName:i,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},i}function i(t,i,e,n,o,r,s){try{var a=t[r](s),l=a.value}catch(d){return void e(d)}a.done?i(l):Promise.resolve(l).then(n,o)}function e(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var s=t.apply(e,n);function a(t){i(s,o,r,a,l,"next",t)}function l(t){i(s,o,r,a,l,"throw",t)}a(void 0)}))}}function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function o(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function r(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,i,e){return i&&r(t.prototype,i),e&&r(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{MGMP:function(i,r,a){"use strict";a.r(r),a.d(r,"ion_item_option",(function(){return h})),a.d(r,"ion_item_options",(function(){return u})),a.d(r,"ion_item_sliding",(function(){return f}));var l=a("wEJo"),d=a("E/Mt"),c=a("74mu"),p=a("W6o/"),h=function(){function t(i){o(this,t),Object(l.o)(this,i),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=function(t){t.target.closest("ion-item-option")&&t.preventDefault()}}return s(t,[{key:"render",value:function(){var t,i=this.disabled,e=this.expandable,o=void 0===this.href?"button":"a",r=Object(d.b)(this),s="button"===o?{type:this.type}:{download:this.download,href:this.href,target:this.target};return Object(l.j)(l.c,{onClick:this.onClick,class:Object(c.a)(this.color,(t={},n(t,r,!0),n(t,"item-option-disabled",i),n(t,"item-option-expandable",e),n(t,"ion-activatable",!0),t))},Object(l.j)(o,Object.assign({},s,{class:"button-native",part:"native",disabled:i}),Object(l.j)("span",{class:"button-inner"},Object(l.j)("slot",{name:"top"}),Object(l.j)("div",{class:"horizontal-wrapper"},Object(l.j)("slot",{name:"start"}),Object(l.j)("slot",{name:"icon-only"}),Object(l.j)("slot",null),Object(l.j)("slot",{name:"end"})),Object(l.j)("slot",{name:"bottom"})),"md"===r&&Object(l.j)("ion-ripple-effect",null)))}},{key:"el",get:function(){return Object(l.k)(this)}}]),t}();h.style={ios:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",md:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"};var m,u=function(){function i(t){o(this,i),Object(l.o)(this,t),this.ionSwipe=Object(l.g)(this,"ionSwipe",7),this.side="end"}var r;return s(i,[{key:"fireSwipeEvent",value:(r=e(t().mark((function i(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.ionSwipe.emit({side:this.side});case 1:case"end":return t.stop()}}),i,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var t,i=Object(d.b)(this),e=Object(p.n)(this.side);return Object(l.j)(l.c,{class:(t={},n(t,i,!0),n(t,"item-options-"+i,!0),n(t,"item-options-start",!e),n(t,"item-options-end",e),t)})}},{key:"el",get:function(){return Object(l.k)(this)}}]),i}();u.style={ios:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}",md:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"};var f=function(){function i(t){o(this,i),Object(l.o)(this,t),this.ionDrag=Object(l.g)(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.closestContent=null,this.initialContentScrollY=!0,this.state=2,this.disabled=!1}var r,c,h,u,f;return s(i,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(f=e(t().mark((function i(){var e=this;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.item=this.el.querySelector("ion-item"),this.closestContent=this.el.closest("ion-content"),t.next=4,this.updateOptions();case 4:return t.next=6,Promise.resolve().then(a.bind(null,"KF81"));case 6:this.gesture=t.sent.createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function(t){return e.canStart(t)},onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged();case 8:case"end":return t.stop()}}),i,this)}))),function(){return f.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,m===this.el&&(m=void 0)}},{key:"getOpenAmount",value:function(){return Promise.resolve(this.openAmount)}},{key:"getSlidingRatio",value:function(){return Promise.resolve(this.getSlidingRatioSync())}},{key:"open",value:(u=e(t().mark((function i(e){var n,o=this;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.item){t.next=2;break}return t.abrupt("return");case 2:(n=this.getOptions(e))&&(void 0===e&&(e=n===this.leftOptions?"start":"end"),e=Object(p.n)(e)?"end":"start",this.openAmount<0&&n===this.leftOptions||this.openAmount>0&&n===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame((function(){o.calculateOptsWidth(),m=o.el,o.setOpenAmount("end"===e?o.optsWidthRightSide:-o.optsWidthLeftSide,!1),o.state="end"===e?8:16}))));case 4:case"end":return t.stop()}}),i,this)}))),function(t){return u.apply(this,arguments)})},{key:"close",value:(h=e(t().mark((function i(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setOpenAmount(0,!0);case 1:case"end":return t.stop()}}),i,this)}))),function(){return h.apply(this,arguments)})},{key:"closeOpened",value:(c=e(t().mark((function i(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",void 0!==m&&(m.close(),m=void 0,!0));case 1:case"end":return t.stop()}}),i)}))),function(){return c.apply(this,arguments)})},{key:"getOptions",value:function(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}},{key:"updateOptions",value:(r=e(t().mark((function i(){var e,n,o,r,s;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.el.querySelectorAll("ion-item-options"),n=0,this.leftOptions=this.rightOptions=void 0,o=0;case 4:if(!(o<e.length)){t.next=18;break}if(void 0===(r=e.item(o)).componentOnReady){t.next=12;break}return t.next=9,r.componentOnReady();case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0=r;case 13:s=t.t0,"start"==(Object(p.n)(s.side)?"end":"start")?(this.leftOptions=s,n|=1):(this.rightOptions=s,n|=2);case 15:o++,t.next=4;break;case 18:this.optsDirty=!0,this.sides=n;case 19:case"end":return t.stop()}}),i,this)}))),function(){return r.apply(this,arguments)})},{key:"canStart",value:function(t){return!(("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)||(m&&m!==this.el&&this.closeOpened(),!this.rightOptions&&!this.leftOptions))}},{key:"disableContentScrollY",value:function(){null!==this.closestContent&&(this.initialContentScrollY=this.closestContent.scrollY,this.closestContent.scrollY=!1)}},{key:"restoreContentScrollY",value:function(){null!==this.closestContent&&(this.closestContent.scrollY=this.initialContentScrollY)}},{key:"onStart",value:function(){this.item=this.el.querySelector("ion-item"),this.disableContentScrollY(),m=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}},{key:"onMove",value:function(t){this.optsDirty&&this.calculateOptsWidth();var i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+.55*(e-i):e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+.55*(e-i)),this.setOpenAmount(e,!1)}},{key:"onEnd",value:function(t){this.restoreContentScrollY();var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide,n=this.openAmount>0==!(i<0),o=Math.abs(i)>.3,r=Math.abs(this.openAmount)<Math.abs(e/2);g(n,o,r)&&(e=0);var s=this.state;this.setOpenAmount(e,!0),0!=(32&s)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&s)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}},{key:"calculateOptsWidth",value:function(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}},{key:"setOpenAmount",value:function(t,i){var e=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var n=this.item.style;if(this.openAmount=t,i&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.gesture&&this.gesture.enable(!1),this.tmr=setTimeout((function(){e.state=2,e.tmr=void 0,e.gesture&&e.gesture.enable(!0)}),600),m=void 0,void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform="translate3d(".concat(-t,"px,0,0)"),this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}}},{key:"getSlidingRatioSync",value:function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}},{key:"render",value:function(){var t,i=Object(d.b)(this);return Object(l.j)(l.c,{class:(t={},n(t,i,!0),n(t,"item-sliding-active-slide",2!==this.state),n(t,"item-sliding-active-options-end",0!=(8&this.state)),n(t,"item-sliding-active-options-start",0!=(16&this.state)),n(t,"item-sliding-active-swipe-end",0!=(32&this.state)),n(t,"item-sliding-active-swipe-start",0!=(64&this.state)),t)})}},{key:"el",get:function(){return Object(l.k)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),i}(),g=function(t,i,e){return!i&&e||t&&i};f.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"}}])}();