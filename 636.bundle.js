/*! For license information please see 636.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_typescript_example=self.webpackChunkreact_typescript_example||[]).push([[636],{4636:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}}),r(7042),r(3371),r(3321),r(8674),r(9070),r(2526),r(1817),r(2165),r(8783),r(2443),r(3680),r(3706),r(2703),r(489),r(5581),r(2490),r(4514),r(4747),r(8304),r(1703),r(6992),r(1539),r(3948);var n,o,i=r(2473),a=r(7265),c=r(3869),u=r(4899),l=function(t){var e=t.size,r=void 0===e?"md":e,n=t.label,o=t.onClick;return(0,u.jsx)("button",{onClick:o,style:{fontSize:"sm"===r?"0.5rem":"lg"===r?"1.5rem":"1.0rem"},children:n})};function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var f,h,p=(0,a.iv)(n||(n=s(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n"]))),v=(0,a.iv)(o||(o=s(["\n  flex: 1;\n  margin: 10px;\n"]))),d=function(t){var e=t.label,r=t.name,n=t.type,o=t.value,i=t.onChange;return(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("label",{htmlFor:r,children:e}),(0,u.jsx)("input",{className:v,name:r,type:n,onChange:i,value:o})]})},y=r(7786),m=r(1142),g=r(1380),w=r(7528);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function v(){}var d={};u(d,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,i)&&(d=m);var g=v.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==b(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(j.prototype),u(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function j(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var E=(0,a.iv)(f||(f=L(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n"]))),O=(0,a.iv)(h||(h=L(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]))),_=function(){var t,e,r=(0,i.s0)(),n=(0,g.Zl)(w.f),o=(0,c.TA)({initialValues:{name:"",password:""},onSubmit:(t=x().mark((function t(e){var o;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.z)(e.name,e.password);case 2:(o=t.sent)instanceof Error||(n(o),r(m.Z.HOME));case 4:case"end":return t.stop()}}),t)})),e=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){j(i,n,o,a,c,"next",t)}function c(t){j(i,n,o,a,c,"throw",t)}a(void 0)}))},function(t){return e.apply(this,arguments)})});return(0,u.jsx)("div",{className:E,children:(0,u.jsxs)("div",{className:O,children:[(0,u.jsx)(d,{label:"name",name:"name",type:"text",onChange:o.handleChange,value:o.values.name}),(0,u.jsx)(d,{label:"password",name:"password",type:"password",onChange:o.handleChange,value:o.values.password}),(0,u.jsx)(l,{onClick:o.submitForm,label:"Sign in"})]})})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjM2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzZaQVFhQSxFQUFTLFNBQUgsV0FBTUMsS0FBQUEsT0FBSSxJQUFHLE9BQUksRUFBRUMsRUFBSyxFQUFMQSxNQUFPQyxFQUFPLEVBQVBBLFFBQU8sT0FDbEQsbUJBQ0VBLFFBQVNBLEVBQ1RDLE1BQU8sQ0FDTEMsU0FBbUIsT0FBVEosRUFBZ0IsU0FBb0IsT0FBVEEsRUFBZ0IsU0FBVyxVQUNoRSxTQUVEQyx1SENMTCxRQUFNRSxHQUFRRSxFQUFBQSxFQUFBQSxJQUFHLHdFQU1YQyxHQUFhRCxFQUFBQSxFQUFBQSxJQUFHLCtDQUtURSxFQUFPLFNBQUgsT0FBTU4sRUFBSyxFQUFMQSxNQUFPTyxFQUFJLEVBQUpBLEtBQU1DLEVBQUksRUFBSkEsS0FBTUMsRUFBSyxFQUFMQSxNQUFPQyxFQUFRLEVBQVJBLFNBQVEsT0FDdkQsaUJBQUtDLFVBQVdULEVBQU0sV0FDcEIsa0JBQU9VLFFBQVNMLEVBQUssU0FBRVAsS0FDdkIsa0JBQ0VXLFVBQVdOLEVBQ1hFLEtBQU1BLEVBQ05DLEtBQU1BLEVBQ05FLFNBQVVBLEVBQ1ZELE1BQU9BLG1TQzVCYixnbkdBQUFJLEdBQUEsd0JBQUFBLEVBQUEsc0JBQUFBLEdBQUEsaUJBQUFBLEdBQUEsc3NEQUFBQSxFQUFBLHlCQUFBQSxHQUFBLElBQUFBLEVBQUEsdUJBQUFBLEdBQUEsNGJBQUFBLEVBQUEseUJBQUFBLEdBQUEsSUFBQUEsRUFBQSx1QkFBQUEsR0FBQSx5aEJBQUFBLEVBQUEseUJBQUFBLEdBQUEsSUFBQUEsRUFBQSx1QkFBQUEsR0FBQSxxR0FBQUEsRUFBQSx5QkFBQUEsR0FBQSxJQUFBQSxFQUFBLHVCQUFBQSxHQUFBLGlmQVNBLElBQU1DLEdBQWVWLEVBQUFBLEVBQUFBLElBQUcsMkhBUWxCRixHQUFRRSxFQUFBQSxFQUFBQSxJQUFHLGdGQTZDakIsRUF2Q2EsV0FDWCxJQXhCRixFQStCWSxFQVBKVyxHQUFXQyxFQUFBQSxFQUFBQSxNQUNYQyxHQUFXQyxFQUFBQSxFQUFBQSxJQUFrQkMsRUFBQUEsR0FDN0JDLEdBQVNDLEVBQUFBLEVBQUFBLElBQVUsQ0FDdkJDLGNBQWUsQ0FDYmYsS0FBTSxHQUNOZ0IsU0FBVSxJQUVaQyxVQS9CSixFQStCWSxVQUFFLFdBQU9DLEdBQU0sd0ZBQ0hDLEVBQUFBLEVBQUFBLEdBQU9ELEVBQU9sQixLQUFNa0IsRUFBT0YsVUFBUyxRQUFoREksRUFBTSxFQUFILGdCQUNZQyxRQUNuQlgsRUFBU1UsR0FDVFosRUFBU2MsRUFBQUEsRUFBQUEsT0FDViwwQ0FMSyxFQS9CWiw4S0FxQ0ssK0NBRUgsT0FDRSxnQkFBS2xCLFVBQVdHLEVBQWEsVUFDM0IsaUJBQUtILFVBQVdULEVBQU0sV0FDcEIsU0FBQ0ksRUFBSSxDQUNITixNQUFNLE9BQ05PLEtBQUssT0FDTEMsS0FBSyxPQUNMRSxTQUFVVSxFQUFPVSxhQUNqQnJCLE1BQU9XLEVBQU9LLE9BQU9sQixRQUV2QixTQUFDRCxFQUFJLENBQ0hOLE1BQU0sV0FDTk8sS0FBSyxXQUNMQyxLQUFLLFdBQ0xFLFNBQVVVLEVBQU9VLGFBQ2pCckIsTUFBT1csRUFBT0ssT0FBT0YsWUFFdkIsU0FBQ3pCLEVBQU0sQ0FBQ0csUUFBU21CLEVBQU9XLFdBQVkvQixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC1leGFtcGxlLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LWV4YW1wbGUvLi9zcmMvcGFnZXMvU2lnbkluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBCdXR0b25TaXplID0gXCJzbVwiIHwgXCJtZFwiIHwgXCJsZ1wiO1xuXG5leHBvcnQgdHlwZSBCdXR0b25Qcm9wcyA9IHtcbiAgc2l6ZT86IEJ1dHRvblNpemU7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgc2l6ZSA9IFwibWRcIiwgbGFiZWwsIG9uQ2xpY2sgfTogQnV0dG9uUHJvcHMpID0+IChcbiAgPGJ1dHRvblxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgc3R5bGU9e3tcbiAgICAgIGZvbnRTaXplOiBzaXplID09PSBcInNtXCIgPyBcIjAuNXJlbVwiIDogc2l6ZSA9PT0gXCJsZ1wiID8gXCIxLjVyZW1cIiA6IFwiMS4wcmVtXCIsXG4gICAgfX1cbiAgPlxuICAgIHtsYWJlbH1cbiAgPC9idXR0b24+XG4pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuXG5leHBvcnQgdHlwZSBGb3JtUHJvcHMgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PltcInR5cGVcIl07XG4gIHZhbHVlOiBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+W1widmFsdWVcIl07XG4gIG9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xufTtcblxuY29uc3Qgc3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBpbnB1dFN0eWxlID0gY3NzYFxuICBmbGV4OiAxO1xuICBtYXJnaW46IDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9ICh7IGxhYmVsLCBuYW1lLCB0eXBlLCB2YWx1ZSwgb25DaGFuZ2UgfTogRm9ybVByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlfVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuIiwiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIi4uL3VzZWNhc2VzL2F1dGhcIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi9yb3V0ZXMvXCI7XG5pbXBvcnQgeyB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGF1dGhTdGF0ZSB9IGZyb20gXCIuLi9yZWNvaWxcIjtcblxuY29uc3Qgd3JhcHBlclN0eWxlID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3Qgc3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMDBweDtcbmA7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3Qgc2V0VG9rZW4gPSB1c2VTZXRSZWNvaWxTdGF0ZShhdXRoU3RhdGUpO1xuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9LFxuICAgIG9uU3VibWl0OiBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduSW4odmFsdWVzLm5hbWUsIHZhbHVlcy5wYXNzd29yZCk7XG4gICAgICBpZiAoIShyZXMgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgc2V0VG9rZW4ocmVzKTtcbiAgICAgICAgbmF2aWdhdGUoUk9VVEVTLkhPTUUpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyU3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17Zm9ybWlrLnN1Ym1pdEZvcm19IGxhYmVsPVwiU2lnbiBpblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwic2l6ZSIsImxhYmVsIiwib25DbGljayIsInN0eWxlIiwiZm9udFNpemUiLCJjc3MiLCJpbnB1dFN0eWxlIiwiRm9ybSIsIm5hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJpIiwid3JhcHBlclN0eWxlIiwibmF2aWdhdGUiLCJ1c2VOYXZpZ2F0ZSIsInNldFRva2VuIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJhdXRoU3RhdGUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsInZhbHVlcyIsInNpZ25JbiIsInJlcyIsIkVycm9yIiwiUk9VVEVTIiwiaGFuZGxlQ2hhbmdlIiwic3VibWl0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=