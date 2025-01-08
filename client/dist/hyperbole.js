/*! For license information please see hyperbole.js.LICENSE.txt */
(()=>{var e={296:e=>{function t(e,t=100,n={}){if("function"!=typeof e)throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);if(t<0)throw new RangeError("`wait` must not be negative.");const{immediate:o}="boolean"==typeof n?{immediate:n}:n;let r,i,a,c,u;function s(){const t=r,n=i;return r=void 0,i=void 0,u=e.apply(t,n),u}function l(){const e=Date.now()-c;e<t&&e>=0?a=setTimeout(l,t-e):(a=void 0,o||(u=s()))}const d=function(...e){if(r&&this!==r&&Object.getPrototypeOf(this)===Object.getPrototypeOf(r))throw new Error("Debounced method called with different contexts of the same prototype.");r=this,i=e,c=Date.now();const n=o&&!a;return a||(a=setTimeout(l,t)),n&&(u=s()),u};return Object.defineProperty(d,"isPending",{get:()=>void 0!==a}),d.clear=()=>{a&&(clearTimeout(a),a=void 0)},d.flush=()=>{a&&d.trigger()},d.trigger=()=>{u=s(),d.clear()},d}e.exports.debounce=t,e.exports=t}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{"use strict";var e=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t=function(e,t){var n=e.length,o=-1;if(n)for(;++o<n&&!1!==t(e[o],o););},o=function(e,t,n){return e.node.insertBefore(t.node,n)};function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(c.push(o.value),c.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var a="string",c="number",u="boolean",s={},l=function(e,t,n){return{attrName:e,propName:t,type:n}};t([["style","cssText"],["class","className"]],(function(e){var t=r(e,2),n=t[0],o=t[1];s[n]=l(n,o||n,a)})),t(["autofocus","draggable","hidden","checked","multiple","muted","selected"],(function(e){s[e]=l(e,e,u)})),t([["tabindex","tabIndex"]],(function(e){var t=r(e,2),n=t[0],o=t[1];s[n]=l(n,o,c)}));var d="xlink:",f="http://www.w3.org/1999/xlink",v="xml:",h="http://www.w3.org/XML/1998/namespace",p=function(e,t,n,o){switch(t){case a:n===s.style.propName?e.style[n]=null===o?"":o:e[n]=null===o?"":o;break;case c:if(null===o){var r=n.toLowerCase();e.removeAttribute(r)}else if("0"===o)e[n]=0;else if("-1"===o)e[n]=-1;else{var i=parseInt(o,10);isNaN(i)||(e[n]=i)}break;case u:["","true"].indexOf(o)<0?e[n]=!1:e[n]=!0}},y=function n(r,i,c){if(r&&i){c=c||i.node.parentNode;var u=r.content&&r.content!==i.content;if(r.type!==i.type||u)return c.replaceChild(r.node,i.node),function(e,t){for(var n in e)t[n]=e[n]}(r,i);(function(n,o){var r=[],i={};for(var c in o.attributes){var u=o.attributes[c],l=n.attributes[c];u!==l&&void 0===l&&r.push(c)}for(var y in n.attributes){var m=o.attributes[y],g=n.attributes[y];m!==g&&void 0!==g&&(i[y]=g)}!function(n,o){t(o,(function(t){if(e(s,t)){var o=s[t];p(n.node,o.type,o.propName,null)}else t in n.node&&p(n.node,a,t,null),n.node.removeAttribute(t);delete n.attributes[t]}))}(o,r),function(t,n){for(var o in n){var r=n[o];if(t.attributes[o]=r,e(s,o)){var i=s[o];p(t.node,i.type,i.propName,r)}else o.startsWith(d)?t.node.setAttributeNS(f,o,r):o.startsWith(v)?t.node.setAttributeNS(h,o,r):(o in t.node&&p(t.node,a,o,r),t.node.setAttribute(o,r||""))}}(o,i)})(r,i),function(n,r,i){var a=n.children.length,c=r.children.length;if(a||c){var u=function(n){var o={};for(var r in t(n,(function(t){var n=t.attributes["data-key"];(function(t,n){return!(!n||e(t,n)&&(console.warn("[OmDomDom]: Children with duplicate keys detected. Children with duplicate keys will be skipped, resulting in dropped node references. Keys must be unique and non-indexed."),1))})(o,n)&&(o[n]=t)})),o)return o}(r.children),s=Array(a);t(n.children,void 0!==u?function(e,t){var n=r.node.childNodes,a=e.attributes["data-key"];if(Object.prototype.hasOwnProperty.call(u,a)){var c=u[a];Array.prototype.indexOf.call(n,c.node)!==t&&o(r,c,n[t]),s[t]=c,delete u[a],i(e,s[t])}else o(r,e,n[t]),s[t]=e}:function(e,t){var n=r.children[t];void 0!==n?(i(e,n),s[t]=n):(r.node.appendChild(e.node),s[t]=e)}),r.children=s;var l=r.node.childNodes.length,d=l-a;if(d>0)for(;d>0;)r.node.removeChild(r.node.childNodes[l-1]),l--,d--}}(r,i,n)}},m=function n(o){var r,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"string"==typeof o&&(r=o.trim().replace(/\s+</g,"<").replace(/>\s+/g,">"),o=(new DOMParser).parseFromString(r,"text/html").body);var a="BODY"===o.tagName,c=o.childNodes,u=c?c.length:0;if(a){if(u>1)throw new Error("[OmDomDom]: Your element should not have more than one root node.");if(0===u)throw new Error("[OmDomDom]: Your element should have at least one root node.");return n(c[0])}var l=3===o.nodeType?"text":8===o.nodeType?"comment":o.tagName.toLowerCase(),d=i||"svg"===l,f=1===o.nodeType?function(t){var n=function(t){return Array.prototype.reduce.call(t.attributes,(function(t,n){return e(s,n.name)||(t[n.name]=n.value),t}),{})}(t);return function(e,t){for(var n in s){var o=s[n].propName,r=e.getAttribute(n);n===s.style.attrName?t[n]=e.style[o]:"string"==typeof r&&(t[n]=r)}}(t,n),n}(o):{},v=u>0?null:o.textContent,h=Array(u);return t(c,(function(e,t){h[t]=n(e,d)})),{type:l,attributes:f,children:h,content:v,node:o,isSVGContext:d}};function g(e){void 0===e&&(e=""),console.log("setQuery",e),e?window.history.replaceState({},"",location.pathname+"?"+e):window.history.replaceState({},"",location.pathname)}var w=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((o=o.apply(e,t||[])).next())}))},b=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){a.label=c[1];break}if(6===c[0]&&a.label<r[1]){a.label=r[1],r=c;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(c);break}r[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}},k="https:"===window.location.protocol?"wss:":"ws:",E="".concat(k,"//").concat(window.location.host).concat(window.location.pathname),x=function(){function e(){this.reconnectDelay=0}return e.prototype.connect=function(e){var t=this;void 0===e&&(e=E);var n=new WebSocket(e);function o(e){console.log("Connection Error",e)}this.socket=n,n.addEventListener("error",o),n.addEventListener("open",(function(e){console.log("Opened",e),t.isConnected=!0,t.hasEverConnected=!0,t.reconnectDelay=0,t.socket.removeEventListener("error",o)})),n.addEventListener("close",(function(n){t.isConnected=!1,console.log("Closed"),t.hasEverConnected&&(t.reconnectDelay+=1e3,console.log("Reconnecting in "+t.reconnectDelay/1e3+"s"),setTimeout((function(){return t.connect(e)}),t.reconnectDelay))}))},e.prototype.sendAction=function(e){return w(this,void 0,void 0,(function(){var t,n;return b(this,(function(o){switch(o.label){case 0:return t=[e.url.pathname+e.url.search,"Host: "+window.location.host,"Cookie: "+document.cookie,e.form].join("\n"),[4,this.fetch(e.id,t)];case 1:return(n=o.sent()).metadata,[2,n.rest]}}))}))},e.prototype.fetch=function(e,t){return w(this,void 0,void 0,(function(){return b(this,(function(n){switch(n.label){case 0:return this.sendMessage(t),[4,this.waitMessage(e)];case 1:return[2,n.sent()]}}))}))},e.prototype.sendMessage=function(e){this.socket.send(e)},e.prototype.waitMessage=function(e){return w(this,void 0,void 0,(function(){var t=this;return b(this,(function(n){return[2,new Promise((function(n,o){var r=function(o){var i,a,c=function(e){var t=e.split("\n"),n=function(e,t){for(var n=[],o=0,r=t;o<r.length;o++){var i=e(r[o]);if(!i)break;n.push(i)}return n}(r,t),o=function(e,t){for(var n=0;n<t.length&&e(t[n]);)n++;return t.slice(n)}(r,t).join("\n");return{metadata:C(n),rest:o};function r(e){var t=e.match(/^\|([A-Z\-]+)\|(.*)$/);if(t)return{key:t[1],value:t[2]}}}(o.data),u=c.metadata,s=c.rest;if(console.log("META",u),u.error)throw i=u.error,(a=new Error).name=i.substring(0,i.indexOf(" ")),a.message=i.substring(i.indexOf(" ")+1),a;u.cookies.forEach((function(e){document.cookie=e})),u.redirect?window.location.href=u.redirect:(g(u.query),u.viewId==e&&(n({metadata:u,rest:s}),t.socket.removeEventListener("message",r)))};t.socket.addEventListener("message",r),t.socket.addEventListener("error",o)}))]}))}))},e.prototype.disconnect=function(){this.socket.close()},e}();function C(e){var t,n,o,r;return{cookies:e.filter((function(e){return"COOKIE"==e.key})).map((function(e){return e.value})),redirect:null===(t=e.find((function(e){return"REDIRECT"==e.key})))||void 0===t?void 0:t.value,error:null===(n=e.find((function(e){return"ERROR"==e.key})))||void 0===n?void 0:n.value,viewId:null===(o=e.find((function(e){return"VIEW-ID"==e.key})))||void 0===o?void 0:o.value,query:null===(r=e.find((function(e){return"QUERY"==e.key})))||void 0===r?void 0:r.value}}console.log("CONNECTING",window.location);var D=n(296);function O(e,t){document.addEventListener(e.toLowerCase(),(function(n){var o=n.target,r="on"+e+n.key,i=o.dataset[r];i&&(n.preventDefault(),t(S(o),i))}))}function L(e){e.querySelectorAll("[data-on-load]").forEach((function(e){var t=parseInt(e.dataset.delay)||0;setTimeout((function(){var t=new CustomEvent("hyp-load",{bubbles:!0,detail:{target:S(e)}});e.dispatchEvent(t)}),t)}))}function S(e){var t=function(e){var t,n=e.closest("[data-target]");return(null==n?void 0:n.dataset.target)||(null===(t=e.closest("[id]"))||void 0===t?void 0:t.id)}(e),n=document.getElementById(t);if(n)return n;console.error("Cannot find target: ",e)}function T(e){if(e){var t=new URLSearchParams;return e.forEach((function(e,n){t.append(n,e)})),t}}function N(e,t,n){var o=function(e,t){var n=new URL(window.location.href);return n.searchParams.append("hyp-id",e),n.searchParams.append("hyp-action",t),n}(e,t);return{id:e,url:o,form:T(n)}}var A,I=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((o=o.apply(e,t||[])).next())}))},P=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){a.label=c[1];break}if(6===c[0]&&a.label<r[1]){a.label=r[1],r=c;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(c);break}r[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};console.log("Hyperbole 0.4.2");var M=new Set;function R(e){return I(this,void 0,void 0,(function(){function t(e){return I(this,void 0,void 0,(function(){var t,n,o;return P(this,(function(r){switch(r.label){case 0:return console.log("HTTP sendAction",e.url.toString()),[4,fetch(e.url,{method:"POST",headers:{Accept:"text/html","Content-Type":"application/x-www-form-urlencoded"},body:e.form,redirect:"manual"})];case 1:return(t=r.sent()).headers.get("location")?(console.log("Found Redirect",t.headers.get("location")),window.location.href=t.headers.get("location"),[2]):t.headers.get("location")?(window.location.href=t.headers.get("location"),[2]):(g(t.headers.get("set-query")),t.ok?[3,3]:((n=new Error).name="Fetch Error "+t.status,[4,t.text()]));case 2:throw o=r.sent(),n.message=o,n;case 3:return[2,t.text()]}}))}))}return P(this,(function(n){return K.isConnected?[2,K.sendAction(e)]:[2,t(e)]}))}))}function j(e){return I(this,void 0,void 0,(function(){var t;return P(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,R(e)];case 1:return[2,n.sent()];case 2:throw t=n.sent(),document.body.innerHTML=(r=[".hyp-error {background-color:#DB3524; color:white; padding: 10px}",".hyp-details {padding: 10px}"],i="<div class='hyp-error'>".concat((o=t).name,"</div>"),a="<div class='hyp-details'>".concat(o.message,"</div>"),["<style>"+r.join("\n")+"</style>",i,a].join("\n")),t;case 3:return[2]}var o,r,i,a}))}))}function q(e,t,n){return I(this,void 0,void 0,(function(){var o,r,i,a;return P(this,(function(c){switch(c.label){case 0:return o=setTimeout((function(){e.classList.add("hyp-loading")}),200),[4,j(N(e.id,t,n))];case 1:return u=c.sent(),l=(s=(new DOMParser).parseFromString(u,"text/html")).querySelector("style"),(r={content:s.querySelector("div"),css:l}).css&&r.content?(function(e){for(var t=0,n=e.sheet.cssRules;t<n.length;t++){var o=n[t];0==M.has(o.cssText)&&(A.sheet.insertRule(o.cssText),M.add(o.cssText))}}(r.css),i=m(r.content),a=m(e),y(i,a),console.log("NEXT",i),L(document.getElementById(e.id)),clearTimeout(o),e.classList.remove("hyp-loading"),[2]):(console.error("Empty Response",r),[2])}var u,s,l}))}))}document.addEventListener("DOMContentLoaded",(function(){var e;A=document.querySelector("style"),e=function(e,t){return I(this,void 0,void 0,(function(){return P(this,(function(n){return q(e,t),[2]}))}))},document.addEventListener("hyp-load",(function(t){var n=t.target.dataset.onLoad,o=t.detail.target;e(o,n)})),L(document.body),document.addEventListener("click",(function(e){var t=e.target.closest("[data-on-click]");t&&(e.preventDefault(),function(e,t){I(this,void 0,void 0,(function(){return P(this,(function(n){return console.log("CLICK",e.id,t),q(e,t),[2]}))}))}(S(t),t.dataset.onClick))})),document.addEventListener("dblclick",(function(e){var t=e.target;console.log("DBL",t.dataset);var n=t.closest("[data-on-dblclick]");n&&(e.preventDefault(),function(e,t){I(this,void 0,void 0,(function(){return P(this,(function(n){return console.log("DBLCLICK",e.id,t),q(e,t),[2]}))}))}(S(n),n.dataset.onDblclick))})),O("Keydown",(function(e,t){return I(this,void 0,void 0,(function(){return P(this,(function(n){return console.log("KEYDOWN",e.id,t),q(e,t),[2]}))}))})),O("Keyup",(function(e,t){return I(this,void 0,void 0,(function(){return P(this,(function(n){return console.log("KEYUP",e.id,t),q(e,t),[2]}))}))})),document.addEventListener("submit",(function(e){var t=e.target;if(null==t?void 0:t.dataset.onSubmit){e.preventDefault();var n=S(t),o=new FormData(t);!function(e,t,n){I(this,void 0,void 0,(function(){return P(this,(function(o){return console.log("FORM",e.id,t,n),q(e,t,n),[2]}))}))}(n,t.dataset.onSubmit,o)}else console.error("Missing onSubmit: ",t)})),document.addEventListener("change",(function(e){var t=e.target.closest("[data-on-change]");t&&(e.preventDefault(),t.value?function(e,t){I(this,void 0,void 0,(function(){return P(this,(function(n){return console.log("CHANGE",e.id,t),q(e,t),[2]}))}))}(S(t),t.value):console.error("Missing input value:",t))})),document.addEventListener("input",(function(e){var t=e.target.closest("[data-on-input]");if(t){var n=parseInt(t.dataset.delay)||250;if(n<250&&console.warn("Input delay < 100 can result in poor performance."),null==t?void 0:t.dataset.onInput){e.preventDefault();var o=S(t);t.debouncedCallback||(t.debouncedCallback=D((function(){return function(e,t,n){return I(this,void 0,void 0,(function(){var o;return P(this,(function(r){return console.log("INPUT",e.id,t,n),o="".concat(t,' "').concat(n.replace(/\\/g,"\\\\").replace(/"/g,'\\"'),'"'),q(e,o),[2]}))}))}(o,t.dataset.onInput,t.value)}),n)),t.debouncedCallback()}else console.error("Missing onInput: ",t)}}))}));var K=new x;K.connect()})()})();
//# sourceMappingURL=hyperbole.js.map