!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=17)}([function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t,n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";e.exports=function(e){function t(e,t,r,n){function o(t){"function"!=typeof self.postMessage?e.ports[0].postMessage(t):self.postMessage(t)}r?("undefined"!=typeof console&&"error"in console&&console.error("Worker caught an error:",r),o([t,{message:r.message}])):o([t,null,n])}self.addEventListener("message",(function(r){var n=r.data;if(Array.isArray(n)&&2===n.length){var o=n[0],i=n[1];"function"!=typeof e?t(r,o,new Error("Please pass a function into register().")):function(e,r,n,o){var i,a=function(e,t){try{return{res:e(t)}}catch(e){return{err:e}}}(r,o);a.err?t(e,n,a.err):!(i=a.res)||"object"!=typeof i&&"function"!=typeof i||"function"!=typeof i.then?t(e,n,null,a.res):a.res.then((function(r){t(e,n,null,r)}),(function(r){t(e,n,r)}))}(r,e,o,i)}}))}},function(e,t,r){(function(t){e.exports=function e(t,r,n){function o(a,u){if(!r[a]){if(!t[a]){if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[a]={exports:{}};t[a][0].call(f.exports,(function(e){var r=t[a][1][e];return o(r||e)}),f,f.exports,e,t,r,n)}return r[a].exports}for(var i=!1,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,r,n){(function(e){"use strict";var t,n,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(s),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),t=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)t="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){s(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(s,0)};else{var c=new e.MessageChannel;c.port1.onmessage=s,t=function(){c.port2.postMessage(0)}}var f=[];function s(){var e,t;n=!0;for(var r=f.length;r;){for(t=f,f=[],e=-1;++e<r;)t[e]();r=f.length}n=!1}r.exports=function(e){1!==f.push(e)||n||t()}}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,r){"use strict";var n=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&v(this,e)}function s(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function l(e,t,r){n((function(){var n;try{n=t(r)}catch(t){return i.reject(e,t)}n===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,n)}))}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function v(e,t){var r=!1;function n(t){r||(r=!0,i.reject(e,t))}function o(t){r||(r=!0,i.resolve(e,t))}var a=p((function(){t(o,n)}));"error"===a.status&&n(a.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}t.exports=f,f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,t){if("function"!=typeof e&&this.state===u||"function"!=typeof t&&this.state===a)return this;var r=new this.constructor(o);return this.state!==c?l(r,this.state===u?e:t,this.outcome):this.queue.push(new s(r,e,t)),r},s.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},s.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},s.prototype.callRejected=function(e){i.reject(this.promise,e)},s.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,t){var r=p(d,t);if("error"===r.status)return i.reject(e,r.value);var n=r.value;if(n)v(e,n);else{e.state=u,e.outcome=t;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(t)}return e},i.reject=function(e,t){e.state=a,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},f.resolve=function(e){return e instanceof this?e:i.resolve(new this(o),e)},f.reject=function(e){var t=new this(o);return i.reject(t,e)},f.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);for(var a=new Array(r),u=0,c=-1,f=new this(o);++c<r;)s(e[c],c);return f;function s(e,o){t.resolve(e).then((function(e){a[o]=e,++u!==r||n||(n=!0,i.resolve(f,a))}),(function(e){n||(n=!0,i.reject(f,e))}))}},f.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);for(var a,u=-1,c=new this(o);++u<r;)a=e[u],t.resolve(a).then((function(e){n||(n=!0,i.resolve(c,e))}),(function(e){n||(n=!0,i.reject(c,e))}));return c}},{1:1}],3:[function(e,r,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function i(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var r=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),n=0;n<e.length;n+=1)r.append(e[n]);return r.getBlob(t.type)}}"undefined"==typeof Promise&&e(3);var a=Promise;function u(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function c(e,t,r){"function"==typeof t&&e.then(t),"function"==typeof r&&e.catch(r)}function f(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function s(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var l=void 0,d={},v=Object.prototype.toString;function p(e){return"boolean"==typeof l?a.resolve(l):function(e){return new a((function(t){var r=e.transaction("local-forage-detect-blob-support","readwrite"),n=i([""]);r.objectStore("local-forage-detect-blob-support").put(n,"key"),r.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},r.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);t(r||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return l=e}))}function h(e){var t=d[e.name],r={};r.promise=new a((function(e,t){r.resolve=e,r.reject=t})),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then((function(){return r.promise})):t.dbReady=r.promise}function y(e){var t=d[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function b(e,t){var r=d[e.name].deferredOperations.pop();if(r)return r.reject(t),r.promise}function m(e,t){return new a((function(r,n){if(d[e.name]=d[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!t)return r(e.db);h(e),e.db.close()}var i=[e.name];t&&i.push(e.version);var a=o.open.apply(o,i);t&&(a.onupgradeneeded=function(t){var r=a.result;try{r.createObjectStore(e.storeName),t.oldVersion<=1&&r.createObjectStore("local-forage-detect-blob-support")}catch(r){if("ConstraintError"!==r.name)throw r;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),a.onerror=function(e){e.preventDefault(),n(a.error)},a.onsuccess=function(){var t=a.result;t.onversionchange=function(e){e.target.close()},r(t),y(e)}}))}function g(e){return m(e,!1)}function _(e){return m(e,!0)}function w(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function x(e){return i([function(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}(atob(e.data))],{type:e.type})}function I(e){return e&&e.__local_forage_encoded_blob}function S(e){var t=this,r=t._initReady().then((function(){var e=d[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return c(r,e,e),r}function E(e,t,r,n){void 0===n&&(n=1);try{var o=e.db.transaction(e.storeName,t);r(null,o)}catch(o){if(n>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then((function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),_(e)})).then((function(){return function(e){h(e);for(var t=d[e.name],r=t.forages,n=0;n<r.length;n++){var o=r[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,g(e).then((function(t){return e.db=t,w(e)?_(e):t})).then((function(n){e.db=t.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n})).catch((function(t){throw b(e,t),t}))}(e).then((function(){E(e,t,r,n-1)}))})).catch(r);r(o)}}var j={_driver:"asyncStorage",_initStorage:function(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var o=d[r.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},d[r.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=S);var i=[];function u(){return a.resolve()}for(var c=0;c<o.forages.length;c++){var f=o.forages[c];f!==t&&i.push(f._initReady().catch(u))}var s=o.forages.slice(0);return a.all(i).then((function(){return r.db=o.db,g(r)})).then((function(e){return r.db=e,w(r,t._defaultConfig.version)?_(r):e})).then((function(e){r.db=o.db=e,t._dbInfo=r;for(var n=0;n<s.length;n++){var i=s[n];i!==t&&(i._dbInfo.db=r.db,i._dbInfo.version=r.version)}}))},_support:function(){try{if(!o||!o.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,t){var r=this,n=new a((function(t,n){r.ready().then((function(){E(r._dbInfo,"readonly",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var r=a.result;if(r){var n=r.value;I(n)&&(n=x(n));var o=e(n,r.key,u++);void 0!==o?t(o):r.continue()}else t()},a.onerror=function(){n(a.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,t),n},getItem:function(e,t){var r=this;e=f(e);var n=new a((function(t,n){r.ready().then((function(){E(r._dbInfo,"readonly",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),I(e)&&(e=x(e)),t(e)},a.onerror=function(){n(a.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,t),n},setItem:function(e,t,r){var n=this;e=f(e);var o=new a((function(r,o){var i;n.ready().then((function(){return i=n._dbInfo,"[object Blob]"===v.call(t)?p(i.db).then((function(e){return e?t:(r=t,new a((function(e,t){var n=new FileReader;n.onerror=t,n.onloadend=function(t){var n=btoa(t.target.result||"");e({__local_forage_encoded_blob:!0,data:n,type:r.type})},n.readAsBinaryString(r)})));var r})):t})).then((function(t){E(n._dbInfo,"readwrite",(function(i,a){if(i)return o(i);try{var u=a.objectStore(n._dbInfo.storeName);null===t&&(t=void 0);var c=u.put(t,e);a.oncomplete=function(){void 0===t&&(t=null),r(t)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return u(o,r),o},removeItem:function(e,t){var r=this;e=f(e);var n=new a((function(t,n){r.ready().then((function(){E(r._dbInfo,"readwrite",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){n(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return u(n,t),n},clear:function(e){var t=this,r=new a((function(e,r){t.ready().then((function(){E(t._dbInfo,"readwrite",(function(n,o){if(n)return r(n);try{var i=o.objectStore(t._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return u(r,e),r},length:function(e){var t=this,r=new a((function(e,r){t.ready().then((function(){E(t._dbInfo,"readonly",(function(n,o){if(n)return r(n);try{var i=o.objectStore(t._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){r(i.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,e),r},key:function(e,t){var r=this,n=new a((function(t,n){e<0?t(null):r.ready().then((function(){E(r._dbInfo,"readonly",(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var r=c.result;r?0===e||u?t(r.key):(u=!0,r.advance(e)):t(null)},c.onerror=function(){n(c.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,t),n},keys:function(e){var t=this,r=new a((function(e,r){t.ready().then((function(){E(t._dbInfo,"readonly",(function(n,o){if(n)return r(n);try{var i=o.objectStore(t._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var t=i.result;t?(a.push(t.key),t.continue()):e(a)},i.onerror=function(){r(i.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,e),r},dropInstance:function(e,t){t=s.apply(this,arguments);var r=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n,i=this;if(e.name){var c=e.name===r.name&&i._dbInfo.db,f=c?a.resolve(i._dbInfo.db):g(e).then((function(t){var r=d[e.name],n=r.forages;r.db=t;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=t;return t}));n=e.storeName?f.then((function(t){if(t.objectStoreNames.contains(e.storeName)){var r=t.version+1;h(e);var n=d[e.name],i=n.forages;t.close();for(var u=0;u<i.length;u++){var c=i[u];c._dbInfo.db=null,c._dbInfo.version=r}return new a((function(t,n){var i=o.open(e.name,r);i.onerror=function(e){i.result.close(),n(e)},i.onupgradeneeded=function(){i.result.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),t(e)}})).then((function(e){n.db=e;for(var t=0;t<i.length;t++){var r=i[t];r._dbInfo.db=e,y(r._dbInfo)}})).catch((function(t){throw(b(e,t)||a.resolve()).catch((function(){})),t}))}})):f.then((function(t){h(e);var r=d[e.name],n=r.forages;t.close();for(var i=0;i<n.length;i++)n[i]._dbInfo.db=null;return new a((function(t,r){var n=o.deleteDatabase(e.name);n.onerror=function(){var e=n.result;e&&e.close(),r(n.error)},n.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},n.onsuccess=function(){var e=n.result;e&&e.close(),t(e)}})).then((function(e){r.db=e;for(var t=0;t<n.length;t++)y(n[t]._dbInfo)})).catch((function(t){throw(b(e,t)||a.resolve()).catch((function(){})),t}))}))}else n=a.reject("Invalid arguments");return u(n,t),n}},N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O=/^~~local_forage_type~([^~]+)~/,R="__lfsc__:".length,A=R+"arbf".length,M=Object.prototype.toString;function D(e){var t,r,n,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(t=0;t<u;t+=4)r=N.indexOf(e[t]),n=N.indexOf(e[t+1]),o=N.indexOf(e[t+2]),i=N.indexOf(e[t+3]),s[c++]=r<<2|n>>4,s[c++]=(15&n)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function B(e){var t,r=new Uint8Array(e),n="";for(t=0;t<r.length;t+=3)n+=N[r[t]>>2],n+=N[(3&r[t])<<4|r[t+1]>>4],n+=N[(15&r[t+1])<<2|r[t+2]>>6],n+=N[63&r[t+2]];return r.length%3==2?n=n.substring(0,n.length-1)+"=":r.length%3==1&&(n=n.substring(0,n.length-2)+"=="),n}var k={serialize:function(e,t){var r="";if(e&&(r=M.call(e)),e&&("[object ArrayBuffer]"===r||e.buffer&&"[object ArrayBuffer]"===M.call(e.buffer))){var n,o="__lfsc__:";e instanceof ArrayBuffer?(n=e,o+="arbf"):(n=e.buffer,"[object Int8Array]"===r?o+="si08":"[object Uint8Array]"===r?o+="ui08":"[object Uint8ClampedArray]"===r?o+="uic8":"[object Int16Array]"===r?o+="si16":"[object Uint16Array]"===r?o+="ur16":"[object Int32Array]"===r?o+="si32":"[object Uint32Array]"===r?o+="ui32":"[object Float32Array]"===r?o+="fl32":"[object Float64Array]"===r?o+="fl64":t(new Error("Failed to get type for BinaryArray"))),t(o+B(n))}else if("[object Blob]"===r){var i=new FileReader;i.onload=function(){var r="~~local_forage_type~"+e.type+"~"+B(this.result);t("__lfsc__:blob"+r)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(r){console.error("Couldn't convert value into a JSON string: ",e),t(null,r)}},deserialize:function(e){if("__lfsc__:"!==e.substring(0,R))return JSON.parse(e);var t,r=e.substring(A),n=e.substring(R,A);if("blob"===n&&O.test(r)){var o=r.match(O);t=o[1],r=r.substring(o[0].length)}var a=D(r);switch(n){case"arbf":return a;case"blob":return i([a],{type:t});case"si08":return new Int8Array(a);case"ui08":return new Uint8Array(a);case"uic8":return new Uint8ClampedArray(a);case"si16":return new Int16Array(a);case"ur16":return new Uint16Array(a);case"si32":return new Int32Array(a);case"ui32":return new Uint32Array(a);case"fl32":return new Float32Array(a);case"fl64":return new Float64Array(a);default:throw new Error("Unkown type: "+n)}},stringToBuffer:D,bufferToString:B};function T(e,t,r,n){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,n)}function C(e,t,r,n,o,i){e.executeSql(r,n,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,u){u.rows.length?i(e,a):T(e,t,(function(){e.executeSql(r,n,o,i)}),i)}),i):i(e,a)}),i)}function P(e,t,r,n){var o=this;e=f(e);var i=new a((function(i,a){o.ready().then((function(){void 0===t&&(t=null);var u=t,c=o._dbInfo;c.serializer.serialize(t,(function(t,f){f?a(f):c.db.transaction((function(r){C(r,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,t],(function(){i(u)}),(function(e,t){a(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(n>0)return void i(P.apply(o,[e,u,r,n-1]));a(t)}}))}))})).catch(a)}));return u(i,r),i}function F(e){return new a((function(t,r){e.transaction((function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(r,n){for(var o=[],i=0;i<n.rows.length;i++)o.push(n.rows.item(i).name);t({db:e,storeNames:o})}),(function(e,t){r(t)}))}),(function(e){r(e)}))}))}var L={_driver:"webSQLStorage",_initStorage:function(e){var t=this,r={db:null};if(e)for(var n in e)r[n]="string"!=typeof e[n]?e[n].toString():e[n];var o=new a((function(e,n){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(e){return n(e)}r.db.transaction((function(o){T(o,r,(function(){t._dbInfo=r,e()}),(function(e,t){n(t)}))}),n)}));return r.serializer=k,o},_support:"function"==typeof openDatabase,iterate:function(e,t){var r=this,n=new a((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){C(r,o,"SELECT * FROM "+o.storeName,[],(function(r,n){for(var i=n.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void t(f)}t()}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,t),n},getItem:function(e,t){var r=this;e=f(e);var n=new a((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){C(r,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,r){var n=r.rows.length?r.rows.item(0).value:null;n&&(n=o.serializer.deserialize(n)),t(n)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,t),n},setItem:function(e,t,r){return P.apply(this,[e,t,r,1])},removeItem:function(e,t){var r=this;e=f(e);var n=new a((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){C(r,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){t()}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,t),n},clear:function(e){var t=this,r=new a((function(e,r){t.ready().then((function(){var n=t._dbInfo;n.db.transaction((function(t){C(t,n,"DELETE FROM "+n.storeName,[],(function(){e()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,e),r},length:function(e){var t=this,r=new a((function(e,r){t.ready().then((function(){var n=t._dbInfo;n.db.transaction((function(t){C(t,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],(function(t,r){var n=r.rows.item(0).c;e(n)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,e),r},key:function(e,t){var r=this,n=new a((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){C(r,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,r){var n=r.rows.length?r.rows.item(0).key:null;t(n)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,t),n},keys:function(e){var t=this,r=new a((function(e,r){t.ready().then((function(){var n=t._dbInfo;n.db.transaction((function(t){C(t,n,"SELECT key FROM "+n.storeName,[],(function(t,r){for(var n=[],o=0;o<r.rows.length;o++)n.push(r.rows.item(o).key);e(n)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,e),r},dropInstance:function(e,t){t=s.apply(this,arguments);var r=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n,o=this;return u(n=e.name?new a((function(t){var n;n=e.name===r.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:n,storeNames:[e.storeName]}):t(F(n))})).then((function(e){return new a((function(t,r){e.db.transaction((function(n){function o(e){return new a((function(t,r){n.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){r(t)}))}))}for(var i=[],u=0,c=e.storeNames.length;u<c;u++)i.push(o(e.storeNames[u]));a.all(i).then((function(){t()})).catch((function(e){r(e)}))}),(function(e){r(e)}))}))})):a.reject("Invalid arguments"),t),n}};function z(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function U(){return!function(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}()||localStorage.length>0}var W={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var r in e)t[r]=e[r];return t.keyPrefix=z(e,this._defaultConfig),U()?(this._dbInfo=t,t.serializer=k,a.resolve()):a.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,t){var r=this,n=r.ready().then((function(){for(var t=r._dbInfo,n=t.keyPrefix,o=n.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(n)){var f=localStorage.getItem(c);if(f&&(f=t.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}}));return u(n,t),n},getItem:function(e,t){var r=this;e=f(e);var n=r.ready().then((function(){var t=r._dbInfo,n=localStorage.getItem(t.keyPrefix+e);return n&&(n=t.serializer.deserialize(n)),n}));return u(n,t),n},setItem:function(e,t,r){var n=this;e=f(e);var o=n.ready().then((function(){void 0===t&&(t=null);var r=t;return new a((function(o,i){var a=n._dbInfo;a.serializer.serialize(t,(function(t,n){if(n)i(n);else try{localStorage.setItem(a.keyPrefix+e,t),o(r)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return u(o,r),o},removeItem:function(e,t){var r=this;e=f(e);var n=r.ready().then((function(){var t=r._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return u(n,t),n},clear:function(e){var t=this,r=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(e)&&localStorage.removeItem(n)}}));return u(r,e),r},length:function(e){var t=this.keys().then((function(e){return e.length}));return u(t,e),t},key:function(e,t){var r=this,n=r.ready().then((function(){var t,n=r._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(n.keyPrefix.length)),t}));return u(n,t),n},keys:function(e){var t=this,r=t.ready().then((function(){for(var e=t._dbInfo,r=localStorage.length,n=[],o=0;o<r;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&n.push(i.substring(e.keyPrefix.length))}return n}));return u(r,e),r},dropInstance:function(e,t){if(t=s.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n,o=this;return u(n=e.name?new a((function(t){e.storeName?t(z(e,o._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var r=localStorage.key(t);0===r.indexOf(e)&&localStorage.removeItem(r)}})):a.reject("Invalid arguments"),t),n}},q=function(e,t){for(var r,n,o=e.length,i=0;i<o;){if((r=e[i])===(n=t)||"number"==typeof r&&"number"==typeof n&&isNaN(r)&&isNaN(n))return!0;i++}return!1},K=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},H={},Q={},X={INDEXEDDB:j,WEBSQL:L,LOCALSTORAGE:W},G=[X.INDEXEDDB._driver,X.WEBSQL._driver,X.LOCALSTORAGE._driver],J=["dropInstance"],V=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(J),Y={description:"",driver:G.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Z(e,t){e[t]=function(){var r=arguments;return e.ready().then((function(){return e[t].apply(e,r)}))}}function $(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&(K(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}var ee=new(function(){function e(t){for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),X)if(X.hasOwnProperty(r)){var n=X[r],o=n._driver;this[r]=o,H[o]||this.defineDriver(n)}this._defaultConfig=$({},Y),this._config=$({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":n(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,r){var n=new a((function(t,r){try{var n=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void r(o);for(var i=V.concat("_initStorage"),c=0,f=i.length;c<f;c++){var s=i[c];if((!q(J,s)||e[s])&&"function"!=typeof e[s])return void r(o)}!function(){for(var t=function(e){return function(){var t=new Error("Method "+e+" is not implemented by the current driver"),r=a.reject(t);return u(r,arguments[arguments.length-1]),r}},r=0,n=J.length;r<n;r++){var o=J[r];e[o]||(e[o]=t(o))}}();var l=function(r){H[n]&&console.info("Redefining LocalForage driver: "+n),H[n]=e,Q[n]=r,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(l,r):l(!!e._support):l(!0)}catch(e){r(e)}}));return c(n,t,r),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,r){var n=H[e]?a.resolve(H[e]):a.reject(new Error("Driver not found."));return c(n,t,r),n},e.prototype.getSerializer=function(e){var t=a.resolve(k);return c(t,e),t},e.prototype.ready=function(e){var t=this,r=t._driverSet.then((function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready}));return c(r,e,e),r},e.prototype.setDriver=function(e,t,r){var n=this;K(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){n._config.driver=n.driver()}function u(e){return n._extend(e),i(),n._ready=n._initStorage(n._config),n._ready}var f=null!==this._driverSet?this._driverSet.catch((function(){return a.resolve()})):a.resolve();return this._driverSet=f.then((function(){var e=o[0];return n._dbInfo=null,n._ready=null,n.getDriver(e).then((function(e){n._driver=e._driver,i(),n._wrapLibraryMethodsWithReady(),n._initDriver=function(e){return function(){var t=0;return function r(){for(;t<e.length;){var o=e[t];return t++,n._dbInfo=null,n._ready=null,n.getDriver(o).then(u).catch(r)}i();var c=new Error("No available storage method found.");return n._driverSet=a.reject(c),n._driverSet}()}}(o)}))})).catch((function(){i();var e=new Error("No available storage method found.");return n._driverSet=a.reject(e),n._driverSet})),c(this._driverSet,t,r),this._driverSet},e.prototype.supports=function(e){return!!Q[e]},e.prototype._extend=function(e){$(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],r=0,n=e.length;r<n;r++){var o=e[r];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=V.length;e<t;e++)Z(this,V[e])},e.prototype.createInstance=function(t){return new e(t)},e}());t.exports=ee},{3:3}]},{},[4])(4)}).call(this,r(10))},function(e,t,r){var n=r(11);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(2);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(1).default,o=r(13);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(0),o=r(2),i=r(14),a=r(15);function u(t){var r="function"==typeof Map?new Map:void 0;return e.exports=u=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return a(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,u(t)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(1).default,o=r(12);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(1).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(2),o=r(16);function i(t,r,a){return o()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),i=r(4),a=r.n(i),u=r(5),c=r.n(u),f=r(6),s=r.n(f),l=r(7),d=r.n(l),v=r(8),p=r.n(v),h=r(0),y=r.n(h),b=r(9);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y()(e);if(t){var o=y()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p()(this,r)}}var g=function(e){d()(r,e);var t=m(r);function r(){return s()(this,r),t.apply(this,arguments)}return c()(r)}(r.n(b)()(Error)),_={},w=function(e){var t=e.storeName;if(void 0===_[t])throw new g("Storage under ".concat(t," name doesn't exist,\n             ensure you use same storage configuration for reducer and related actions"));return _[t]},x=function(e){var t=e.storeName;if(_[t])throw new g("Cant initiate reducer under storage name ".concat(t,", storage already exists"));return _[t]=a.a.createInstance(e),_[t]};o()(async e=>{const{storageConfig:t,identifier:r,state:n,type:o}=e;if("initiate"===o&&x(t),"save"===o){return w(t).setItem(""+r,n)}if("remove"===o){return w(t).removeItem(""+r)}if("get"===o){return w(t).getItem(""+r)}if("keys"===o){return w(t).keys()}})}]);
//# sourceMappingURL=24bba4f60bf80c72ac47.worker.js.map