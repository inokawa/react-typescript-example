/*! For license information please see 910.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_typescript_example=self.webpackChunkreact_typescript_example||[]).push([[910],{9910:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}}),r(3757),r(9318),r(4664),r(8136),r(4126),r(7235),r(8666),r(9180),r(7498),r(5994),r(75),r(1401),r(6159),r(9053),r(1788),r(2821),r(9024),r(1278),r(4514),r(7228),r(9163),r(9557),r(4674),r(5316);var n,o,i=r(5232),a=r(2047),c=r(809),u=r(8971),l=function(t){var e=t.size,r=void 0===e?"md":e,n=t.label,o=t.onClick;return(0,u.jsx)("button",{onClick:o,style:{fontSize:"sm"===r?"0.5rem":"lg"===r?"1.5rem":"1.0rem"},children:n})};function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var f,h,p=(0,a.iv)(n||(n=s(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n"]))),y=(0,a.iv)(o||(o=s(["\n  flex: 1;\n  margin: 10px;\n"]))),v=function(t){var e=t.label,r=t.name,n=t.type,o=t.value,i=t.onChange;return(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("label",{htmlFor:r,children:e}),(0,u.jsx)("input",{className:y,name:r,type:n,onChange:i,value:o})]})},d=r(7740),m=r(119),g=r(3312),w=r(7671);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function x(){x=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:S(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",d={};function m(){}function g(){}function w(){}var j={};l(j,a,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(z([])));E&&E!==r&&n.call(E,a)&&(j=E);var O=w.prototype=m.prototype=Object.create(j);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==b(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,r,n){var o=h;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:p,l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function z(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(b(e)+" is not iterable")}return g.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},_(k.prototype),l(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(O),l(O,u,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=z,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:z(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function j(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var E=(0,a.iv)(f||(f=L(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n"]))),O=(0,a.iv)(h||(h=L(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]))),_=function(){var t,e,r=(0,i.s0)(),n=(0,g.b9)(w.f),o=(0,c.TA)({initialValues:{name:"",password:""},onSubmit:(t=x().mark((function t(e){var o;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.z)(e.name,e.password);case 2:(o=t.sent)instanceof Error||(n(o),r(m.Z.HOME));case 4:case"end":return t.stop()}}),t)})),e=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){j(i,n,o,a,c,"next",t)}function c(t){j(i,n,o,a,c,"throw",t)}a(void 0)}))},function(t){return e.apply(this,arguments)})});return(0,u.jsx)("div",{className:E,children:(0,u.jsxs)("div",{className:O,children:[(0,u.jsx)(v,{label:"name",name:"name",type:"text",onChange:o.handleChange,value:o.values.name}),(0,u.jsx)(v,{label:"password",name:"password",type:"password",onChange:o.handleChange,value:o.values.password}),(0,u.jsx)(l,{onClick:o.submitForm,label:"Sign in"})]})})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUzJJLEVBQU9tQixXQUFZL0osTUFBTSxnQkFJbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9CdXR0b24udHN4Iiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtZXhhbXBsZS8uL3NyYy9jb21wb25lbnRzL0Zvcm0udHN4Iiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtZXhhbXBsZS8uL3NyYy9wYWdlcy9TaWduSW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSBcInNtXCIgfCBcIm1kXCIgfCBcImxnXCI7XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblByb3BzID0ge1xuICBzaXplPzogQnV0dG9uU2l6ZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBzaXplID0gXCJtZFwiLCBsYWJlbCwgb25DbGljayB9OiBCdXR0b25Qcm9wcykgPT4gKFxuICA8YnV0dG9uXG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBzdHlsZT17e1xuICAgICAgZm9udFNpemU6IHNpemUgPT09IFwic21cIiA/IFwiMC41cmVtXCIgOiBzaXplID09PSBcImxnXCIgPyBcIjEuNXJlbVwiIDogXCIxLjByZW1cIixcbiAgICB9fVxuICA+XG4gICAge2xhYmVsfVxuICA8L2J1dHRvbj5cbik7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5cbmV4cG9ydCB0eXBlIEZvcm1Qcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+W1widHlwZVwiXTtcbiAgdmFsdWU6IFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD5bXCJ2YWx1ZVwiXTtcbiAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IGlucHV0U3R5bGUgPSBjc3NgXG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gKHsgbGFiZWwsIG5hbWUsIHR5cGUsIHZhbHVlLCBvbkNoYW5nZSB9OiBGb3JtUHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9e2lucHV0U3R5bGV9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG4iLCJpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtXCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwiLi4vdXNlY2FzZXMvYXV0aFwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uL3JvdXRlcy9cIjtcbmltcG9ydCB7IHVzZVNldEF0b20gfSBmcm9tIFwiam90YWlcIjtcbmltcG9ydCB7IGF1dGhTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5jb25zdCB3cmFwcGVyU3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMwMHB4O1xuYDtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBzZXRUb2tlbiA9IHVzZVNldEF0b20oYXV0aFN0YXRlKTtcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgICBvblN1Ym1pdDogYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbkluKHZhbHVlcy5uYW1lLCB2YWx1ZXMucGFzc3dvcmQpO1xuICAgICAgaWYgKCEocmVzIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgIHNldFRva2VuKHJlcyk7XG4gICAgICAgIG5hdmlnYXRlKFJPVVRFUy5IT01FKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Zvcm1pay5zdWJtaXRGb3JtfSBsYWJlbD1cIlNpZ24gaW5cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwibGFiZWwiLCJvbkNsaWNrIiwiX2pzeCIsInN0eWxlIiwiZm9udFNpemUiLCJjaGlsZHJlbiIsImNzcyIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJpbnB1dFN0eWxlIiwiX3RlbXBsYXRlT2JqZWN0MiIsIkZvcm0iLCJuYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJfanN4cyIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsImNhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwic3RyaW5ncyIsInJhdyIsImZyZWV6ZSIsImRlZmluZVByb3BlcnRpZXMiLCJ3cmFwcGVyU3R5bGUiLCJmbiIsIl9vblN1Ym1pdCIsIm5hdmlnYXRlIiwidXNlTmF2aWdhdGUiLCJzZXRUb2tlbiIsInVzZVNldEF0b20iLCJhdXRoU3RhdGUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsIl9jYWxsZWUiLCJyZXMiLCJfY29udGV4dCIsInNpZ25JbiIsIlJPVVRFUyIsIkhPTUUiLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX3giLCJoYW5kbGVDaGFuZ2UiLCJzdWJtaXRGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==