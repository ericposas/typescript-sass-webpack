(()=>{"use strict";var e={535:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".container{display:flex;flex-direction:column}.child{font-family:Arial;padding:4px;background-color:#cd5c5c;margin:2px;border-radius:3px;display:flex;flex-direction:row;justify-content:center}.childChild,.stepChild{background-color:darkred;padding:20px;margin:10px;border-radius:3px;width:50px;height:20px;flex-grow:0;transform:scale(1);transition:all .15s;align-self:flex-end}.childChild:hover,.stepChild:hover{transform:scale(1.1);transition:all .25s}.stepChild{background-color:#ff4500;align-self:stretch;width:200px;height:40px}.child:nth-of-type(3){justify-content:space-around}.child:nth-of-type(5){justify-content:flex-end}.child:nth-of-type(6){justify-content:space-between}",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],l=n.base?c[0]+n.base:c[0],d=t[l]||0,s="".concat(l," ").concat(d);t[l]=d+1;var u=a(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:s,updater:v(f,n),references:1}),r.push(s)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,s=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function v(e,n){var t,r,i;if(n.singleton){var o=p++;t=h||(h=l(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=l(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var l=c(e,n),d=0;d<t.length;d++){var s=a(t[d]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=l}}}}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=t(379),r=t.n(n),i=t(535);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=function(){function n(e){var t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=e,r=void 0,(t="container")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r;var i=document.createElement("div");i.classList.add("container"),document.body.appendChild(i),this.container=i}var t,r;return t=n,(r=[{key:"sayName",value:function(){console.log(this.name)}},{key:"appendChildren",value:function(e){if(!e)throw Error("no number provided to appendChildren method");if(!this.container)throw Error("container is null");for(var n=0;n<e;++n){var t=document.createElement("div");this.container.appendChild(t),t.classList.add("child")}}},{key:"appendChildrenToChildren",value:function(e){var n=document.getElementsByClassName("child");[].forEach.call(n,(function(n,t){for(var r=0;r<e;++r){var i=document.createElement("div");3===r&&0===t?i.classList.add("stepChild"):i.classList.add("childChild"),n.appendChild(i)}}))}}])&&e(t.prototype,r),n}();window.onload=function(){var e=new o("test");e.sayName(),e.appendChildren(20),e.appendChildrenToChildren(5)}})()})();