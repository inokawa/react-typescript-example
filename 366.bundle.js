/*! For license information please see 366.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_typescript_example=self.webpackChunkreact_typescript_example||[]).push([[366],{3366:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}}),r(3757),r(9318),r(4664),r(8136),r(4126),r(7235),r(8666),r(9180),r(7498),r(5994),r(75),r(1401),r(6159),r(9053),r(1788),r(2821),r(9024),r(1278),r(4514),r(7228),r(9163),r(9557),r(4674),r(5316);var n,o,i=r(3619),a=r(7584),c=r(1057),u=r(381),l=function(t){var e=t.size,r=void 0===e?"md":e,n=t.label,o=t.onClick;return(0,u.jsx)("button",{onClick:o,style:{fontSize:"sm"===r?"0.5rem":"lg"===r?"1.5rem":"1.0rem"},children:n})};function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var f,h,p=(0,a.iv)(n||(n=s(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n"]))),v=(0,a.iv)(o||(o=s(["\n  flex: 1;\n  margin: 10px;\n"]))),d=function(t){var e=t.label,r=t.name,n=t.type,o=t.value,i=t.onChange;return(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("label",{htmlFor:r,children:e}),(0,u.jsx)("input",{className:v,name:r,type:n,onChange:i,value:o})]})},y=r(5414),m=r(2489),g=r(4879),w=r(3455);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function v(){}var d={};u(d,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,i)&&(d=m);var g=v.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==b(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(j.prototype),u(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function j(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var E=(0,a.iv)(f||(f=L(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n"]))),O=(0,a.iv)(h||(h=L(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]))),_=function(){var t,e,r=(0,i.s0)(),n=(0,g.b9)(w.f),o=(0,c.TA)({initialValues:{name:"",password:""},onSubmit:(t=x().mark((function t(e){var o;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.z)(e.name,e.password);case 2:(o=t.sent)instanceof Error||(n(o),r(m.Z.HOME));case 4:case"end":return t.stop()}}),t)})),e=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){j(i,n,o,a,c,"next",t)}function c(t){j(i,n,o,a,c,"throw",t)}a(void 0)}))},function(t){return e.apply(this,arguments)})});return(0,u.jsx)("div",{className:E,children:(0,u.jsxs)("div",{className:O,children:[(0,u.jsx)(d,{label:"name",name:"name",type:"text",onChange:o.handleChange,value:o.values.name}),(0,u.jsx)(d,{label:"password",name:"password",type:"password",onChange:o.handleChange,value:o.values.password}),(0,u.jsx)(l,{onClick:o.submitForm,label:"Sign in"})]})})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiO21hQVFhQSxFQUFTLFNBQUgsV0FBTUMsS0FBQUEsT0FBSSxJQUFHLE9BQUksRUFBRUMsRUFBSyxFQUFMQSxNQUFPQyxFQUFPLEVBQVBBLFFBQU8sT0FDbEQsbUJBQ0VBLFFBQVNBLEVBQ1RDLE1BQU8sQ0FDTEMsU0FBbUIsT0FBVEosRUFBZ0IsU0FBb0IsT0FBVEEsRUFBZ0IsU0FBVyxVQUNoRSxTQUVEQyxHQUNNLG9IQ05YLFFBQU1FLEdBQVFFLEVBQUFBLEVBQUFBLElBQUcsd0VBTVhDLEdBQWFELEVBQUFBLEVBQUFBLElBQUcsK0NBS1RFLEVBQU8sU0FBSCxPQUFNTixFQUFLLEVBQUxBLE1BQU9PLEVBQUksRUFBSkEsS0FBTUMsRUFBSSxFQUFKQSxLQUFNQyxFQUFLLEVBQUxBLE1BQU9DLEVBQVEsRUFBUkEsU0FBUSxPQUN2RCxpQkFBS0MsVUFBV1QsRUFBTSxXQUNwQixrQkFBT1UsUUFBU0wsRUFBSyxTQUFFUCxLQUN2QixrQkFDRVcsVUFBV04sRUFDWEUsS0FBTUEsRUFDTkMsS0FBTUEsRUFDTkUsU0FBVUEsRUFDVkQsTUFBT0EsTUFFTCw2UkM5QlIsZ25HQUFBSSxHQUFBLHdCQUFBQSxFQUFBLHNCQUFBQSxHQUFBLGlCQUFBQSxHQUFBLHNzREFBQUEsRUFBQSx5QkFBQUEsR0FBQSxJQUFBQSxFQUFBLHVCQUFBQSxHQUFBLDRiQUFBQSxFQUFBLHlCQUFBQSxHQUFBLElBQUFBLEVBQUEsdUJBQUFBLEdBQUEseWhCQUFBQSxFQUFBLHlCQUFBQSxHQUFBLElBQUFBLEVBQUEsdUJBQUFBLEdBQUEscUdBQUFBLEVBQUEseUJBQUFBLEdBQUEsSUFBQUEsRUFBQSx1QkFBQUEsR0FBQSxpZkFTQSxJQUFNQyxHQUFlVixFQUFBQSxFQUFBQSxJQUFHLDJIQVFsQkYsR0FBUUUsRUFBQUEsRUFBQUEsSUFBRyxnRkE2Q2pCLEVBdkNhLFdBQ1gsSUF4QkYsRUErQlksRUFQSlcsR0FBV0MsRUFBQUEsRUFBQUEsTUFDWEMsR0FBV0MsRUFBQUEsRUFBQUEsSUFBV0MsRUFBQUEsR0FDdEJDLEdBQVNDLEVBQUFBLEVBQUFBLElBQVUsQ0FDdkJDLGNBQWUsQ0FDYmYsS0FBTSxHQUNOZ0IsU0FBVSxJQUVaQyxVQS9CSixFQStCWSxVQUFFLFdBQU9DLEdBQU0sd0ZBQ0hDLEVBQUFBLEVBQUFBLEdBQU9ELEVBQU9sQixLQUFNa0IsRUFBT0YsVUFBUyxRQUFoREksRUFBTSxFQUFILGdCQUNZQyxRQUNuQlgsRUFBU1UsR0FDVFosRUFBU2MsRUFBQUEsRUFBT0MsT0FDakIsMENBTEssRUEvQlosOEtBcUNLLCtDQUVILE9BQ0UsZ0JBQUtuQixVQUFXRyxFQUFhLFVBQzNCLGlCQUFLSCxVQUFXVCxFQUFNLFdBQ3BCLFNBQUNJLEVBQUksQ0FDSE4sTUFBTSxPQUNOTyxLQUFLLE9BQ0xDLEtBQUssT0FDTEUsU0FBVVUsRUFBT1csYUFDakJ0QixNQUFPVyxFQUFPSyxPQUFPbEIsUUFFdkIsU0FBQ0QsRUFBSSxDQUNITixNQUFNLFdBQ05PLEtBQUssV0FDTEMsS0FBSyxXQUNMRSxTQUFVVSxFQUFPVyxhQUNqQnRCLE1BQU9XLEVBQU9LLE9BQU9GLFlBRXZCLFNBQUN6QixFQUFNLENBQUNHLFFBQVNtQixFQUFPWSxXQUFZaEMsTUFBTSxnQkFJbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9CdXR0b24udHN4Iiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtZXhhbXBsZS8uL3NyYy9jb21wb25lbnRzL0Zvcm0udHN4Iiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtZXhhbXBsZS8uL3NyYy9wYWdlcy9TaWduSW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSBcInNtXCIgfCBcIm1kXCIgfCBcImxnXCI7XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblByb3BzID0ge1xuICBzaXplPzogQnV0dG9uU2l6ZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBzaXplID0gXCJtZFwiLCBsYWJlbCwgb25DbGljayB9OiBCdXR0b25Qcm9wcykgPT4gKFxuICA8YnV0dG9uXG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBzdHlsZT17e1xuICAgICAgZm9udFNpemU6IHNpemUgPT09IFwic21cIiA/IFwiMC41cmVtXCIgOiBzaXplID09PSBcImxnXCIgPyBcIjEuNXJlbVwiIDogXCIxLjByZW1cIixcbiAgICB9fVxuICA+XG4gICAge2xhYmVsfVxuICA8L2J1dHRvbj5cbik7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5cbmV4cG9ydCB0eXBlIEZvcm1Qcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+W1widHlwZVwiXTtcbiAgdmFsdWU6IFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD5bXCJ2YWx1ZVwiXTtcbiAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IGlucHV0U3R5bGUgPSBjc3NgXG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gKHsgbGFiZWwsIG5hbWUsIHR5cGUsIHZhbHVlLCBvbkNoYW5nZSB9OiBGb3JtUHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9e2lucHV0U3R5bGV9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG4iLCJpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtXCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwiLi4vdXNlY2FzZXMvYXV0aFwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uL3JvdXRlcy9cIjtcbmltcG9ydCB7IHVzZVNldEF0b20gfSBmcm9tIFwiam90YWlcIjtcbmltcG9ydCB7IGF1dGhTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5jb25zdCB3cmFwcGVyU3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMwMHB4O1xuYDtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBzZXRUb2tlbiA9IHVzZVNldEF0b20oYXV0aFN0YXRlKTtcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgICBvblN1Ym1pdDogYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbkluKHZhbHVlcy5uYW1lLCB2YWx1ZXMucGFzc3dvcmQpO1xuICAgICAgaWYgKCEocmVzIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgIHNldFRva2VuKHJlcyk7XG4gICAgICAgIG5hdmlnYXRlKFJPVVRFUy5IT01FKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Zvcm1pay5zdWJtaXRGb3JtfSBsYWJlbD1cIlNpZ24gaW5cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInNpemUiLCJsYWJlbCIsIm9uQ2xpY2siLCJzdHlsZSIsImZvbnRTaXplIiwiY3NzIiwiaW5wdXRTdHlsZSIsIkZvcm0iLCJuYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaSIsIndyYXBwZXJTdHlsZSIsIm5hdmlnYXRlIiwidXNlTmF2aWdhdGUiLCJzZXRUb2tlbiIsInVzZVNldEF0b20iLCJhdXRoU3RhdGUiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsInZhbHVlcyIsInNpZ25JbiIsInJlcyIsIkVycm9yIiwiUk9VVEVTIiwiSE9NRSIsImhhbmRsZUNoYW5nZSIsInN1Ym1pdEZvcm0iXSwic291cmNlUm9vdCI6IiJ9