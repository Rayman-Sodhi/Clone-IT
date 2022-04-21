(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},ra={};try{ra.__proto__=pa;oa=ra.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=na;
function u(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function ta(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.v=0;this.I=this.j=null}
function va(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ta.prototype.B=function(a){this.i=a};
function wa(a,b){a.j={Ma:b,Ra:!0};a.h=a.v||a.m}
ta.prototype.return=function(a){this.j={return:a};this.h=this.m};
function v(a,b,c){a.h=c;return{value:b}}
ta.prototype.o=function(a){this.h=a};
function xa(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function ya(a,b){a.h=b;a.v=0}
function za(a){a.v=0;var b=a.j.Ma;a.j=null;return b}
function Aa(a){a.I=[a.j];a.v=0;a.m=0}
function Ba(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.Ra?a.h=a.v||a.m:void 0!=b.o&&a.m<b.o?(a.h=b.o,a.j=null):a.h=a.m:a.h=0}
function Ca(a){this.h=new ta;this.i=a}
function Da(a,b){va(a.h);var c=a.h.l;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,wa(a.h,g),Fa(a)}a.h.l=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,wa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ra)throw b.Ma;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){va(a.h);a.h.l?b=Ea(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Fa(a));return b};
this.throw=function(b){va(a.h);a.h.l?b=Ea(a,a.h.l["throw"],b,a.h.B):(wa(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ca(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.wa),reject:g(this.m)}};
b.prototype.wa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.cb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.la(g):this.v(g)}};
b.prototype.la=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.eb(h,g):this.v(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.v=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.bb();this.I()};
b.prototype.bb=function(){var g=this;e(function(){if(g.O()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.O=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.cb=function(g){var h=this.l();g.na(h.resolve,h.reject)};
b.prototype.eb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(w,p){return"function"==typeof w?function(y){try{l(w(y))}catch(z){n(z)}}:p}
var l,n,q=new b(function(w,p){l=w;n=p});
this.na(k(g,l),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.na=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),n=l.next();!n.done;n=l.next())d(n.value).na(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(y){return function(z){w[y]=z;p--;0==p&&l(w)}}
var w=[],p=0;do w.push(void 0),p++,d(k.value).na(q(w.length-1),n),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ha(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&ja(h.data_,l))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:h,entry:q}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||sa});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ta:Wa=Va;return Wa.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Nb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.gb=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.h=b===Ib?a:""}
Hb.prototype.toString=function(){return this.h.toString()};
var Ib={};function Jb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Jb().indexOf(a)}
;function Kb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Lb={};function Mb(a){this.h=Lb===Lb?a:""}
Mb.prototype.toString=function(){return this.h.toString()};var Rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(a){return a?decodeURI(a):a}
function Tb(a){return Sb(a.match(Rb)[3]||null)}
function Ub(a){var b=a.match(Rb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
var Xb=/#|$/;function Yb(a,b){var c=a.search(Xb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function Zb(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function $b(a){$b[" "](a);return a}
$b[" "]=function(){};var ac=E("Opera"),bc=E("Trident")||E("MSIE"),cc=E("Edge"),dc=E("Gecko")&&!(-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),ec=-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge");function fc(){var a=A.document;return a?a.documentMode:void 0}
var gc;a:{var hc="",jc=function(){var a=Jb();if(dc)return/rv:([^\);]+)(\)|;)/.exec(a);if(cc)return/Edge\/([\d\.]+)/.exec(a);if(bc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ec)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(hc=jc?jc[1]:"");if(bc){var kc=fc();if(null!=kc&&kc>parseFloat(hc)){gc=String(kc);break a}}gc=hc}var lc=gc,mc;if(A.document&&bc){var nc=fc();mc=nc?nc:parseInt(lc,10)||void 0}else mc=void 0;var oc=mc;var pc=Zb()||E("iPod"),qc=E("iPad");!E("Android")||Kb();Kb();var rc=E("Safari")&&!(Kb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(Zb()||E("iPad")||E("iPod"));var vc={},wc=null;
function xc(a,b){Oa(a);void 0===b&&(b=0);if(!wc){wc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));vc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===wc[h]&&(wc[h]=g)}}}b=vc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var yc="undefined"!==typeof Uint8Array;var zc={};var Ac="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Bc(a,b){Object.isFrozen(a)||(Ac?a[Ac]|=b:void 0!==a.ra?a.ra|=b:Object.defineProperties(a,{ra:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Cc(a){var b;Ac?b=a[Ac]:b=a.ra;return null==b?0:b}
function Dc(a){Bc(a,1);return a}
function Ec(a){return Array.isArray(a)?!!(Cc(a)&2):!1}
function Fc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Bc(a,2)}
;function Gc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Hc,Ic=Object.freeze(Dc([]));function Jc(a){if(Ec(a.C))throw Error("Cannot mutate an immutable Message");}
var Kc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Lc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Mc(a){A.setTimeout(function(){throw a;},0)}
;function Nc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&yc&&null!=a&&a instanceof Uint8Array)return xc(a)}return a}
;function Oc(a,b){b=void 0===b?Pc:b;return Qc(a,b)}
function Rc(a,b){if(null!=a){if(Array.isArray(a))a=Qc(a,b);else if(Gc(a)){var c={},d;for(d in a)c[d]=Rc(a[d],b);a=c}else a=b(a);return a}}
function Qc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Rc(c[d],b);Array.isArray(a)&&Cc(a)&1&&Dc(c);return c}
function Sc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Nc(a);return Array.isArray(a)?Oc(a,Sc):a}
function Pc(a){return yc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Tc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.C[b+a.j]}
function G(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Jc(a);b<a.l&&!d?a.C[b+a.j]=c:(a.i||(a.i=a.C[a.l+a.j]={}))[b]=c;return a}
function Uc(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=Tc(a,b,d);null==e&&(e=Ic);if(Ec(a.C))c&&(Fc(e),Object.freeze(e));else if(e===Ic||Ec(e))e=Dc(e.slice()),G(a,b,e,d);return e}
function Vc(a,b,c,d){Jc(a);(c=Wc(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),G(a,c));return G(a,b,d)}
function Wc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Tc(a,e)&&(0!==c&&G(a,c,void 0,!1,!0),c=e)}return c}
function Xc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Tc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Ec(a.C)&&Fc(b.C);return a.h[c]=b}
function Yc(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=Ec(a.C),f=a.h[c];if(!f){d=Uc(a,c,!0,d);f=[];e=e||Ec(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Fc(f[g].C);e&&(Fc(f),Object.freeze(f));a.h[c]=f}return f}
function H(a,b,c){var d=void 0===d?!1:d;Jc(a);a.h||(a.h={});var e=null!=c?c.C:c;a.h[b]=c;return G(a,b,e,d)}
function Zc(a,b,c,d){Jc(a);a.h||(a.h={});var e=null!=d?d.C:d;a.h[b]=d;Vc(a,b,c,e)}
function $c(a,b,c,d){var e=void 0===e?!1:e;Jc(a);e=Yc(a,c,b,e);c=null!=d?d:new c;a=Uc(a,b);e.push(c);a.push(c.C)}
function ad(a,b){a=Tc(a,b);return null==a?"":a}
;function bd(a,b,c){a||(a=cd);cd=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.C=a;a:{d=this.C.length;a=d-1;if(d&&(d=this.C[a],Gc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.C[a])?Array.isArray(d)&&Dc(d):this.C[a]=Ic;else{d=this.i||(this.i=this.C[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Dc(e):d[a]=Ic}}
bd.prototype.toJSON=function(){var a=this.C;return Hc?a:Oc(a,Sc)};
function dd(a){Hc=!0;try{return JSON.stringify(a.toJSON(),ed)}finally{Hc=!1}}
bd.prototype.clone=function(){var a=Oc(this.C);cd=a;a=new this.constructor(a);cd=null;fd(a,this);return a};
bd.prototype.isMutable=function(a){if(a!==zc)throw Error("requires a valid immutable API token");return!Ec(this.C)};
bd.prototype.toString=function(){return this.C.toString()};
function ed(a,b){return Nc(b)}
function fd(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Yc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)fd(f[g],e[g])}else(f=Xc(a,e.constructor,g,void 0,f))&&fd(f,e)}}}}
var cd;function gd(){bd.apply(this,arguments)}
u(gd,bd);if(Kc){var hd={};Object.defineProperties(gd,(hd[Symbol.hasInstance]=Lc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),hd))};function I(){gd.apply(this,arguments)}
u(I,gd);if(Kc){var id={};Object.defineProperties(I,(id[Symbol.hasInstance]=Lc(Object[Symbol.hasInstance]),id))};var jd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var kd={};function ld(){}
function md(a){this.h=a}
u(md,ld);md.prototype.toString=function(){return this.h};
var nd=new md("about:invalid#zTSz",kd);function od(a){if(a instanceof ld)if(a instanceof md)a=a.h;else throw Error("");else a instanceof Hb&&a.constructor===Hb?a=a.h:(Na(a),a="type_error:SafeUrl");return a}
;function pd(a,b){a.removeAttribute("srcdoc");a.src=od(b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function qd(a,b){this.width=a;this.height=b}
m=qd.prototype;m.clone=function(){return new qd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function rd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function sd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function td(a){var b=wd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function xd(){var a=[];td(function(b){a.push(b)});
return a}
var wd={vb:"allow-forms",wb:"allow-modals",xb:"allow-orientation-lock",yb:"allow-pointer-lock",zb:"allow-popups",Ab:"allow-popups-to-escape-sandbox",Bb:"allow-presentation",Cb:"allow-same-origin",Db:"allow-scripts",Eb:"allow-top-navigation",Fb:"allow-top-navigation-by-user-activation"},yd=bb(function(){return xd()});
function zd(){var a=Ad(),b={};D(yd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ad(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Bd(a){this.isValid=a}
function Cd(a){return new Bd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Dd=[Cd("data"),Cd("http"),Cd("https"),Cd("mailto"),Cd("ftp"),new Bd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ed(a,b){b=void 0===b?Dd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Bd&&d.isValid(a))return new md(a,kd)}}
function Fd(a){var b=void 0===b?Dd:b;return Ed(a,b)||nd}
;var Gd=(new Date).getTime();var Hd=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(434462125,!0);function Id(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Jd="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" ");ia(Jd);function Kd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var w=g,p=0;64>p;p+=4)w[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=w[p-3]^w[p-8]^w[p-14]^w[p-16],w[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],F=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=F^y&(z^F);var O=1518500249}else M=y^z^F,O=1859775393;else 60>p?(M=y&z|F&(y|z),O=2400959708):(M=y^z^F,O=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+O+w[p]&4294967295;K=F;F=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+K&4294967295}
function c(q,w){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}w||(w=q.length);p=0;if(0==l)for(;p+64<w;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<w;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<w;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],w=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=w&255,w>>>=8;b(f);for(p=w=0;5>p;p++)for(var y=24;0<=y;y-=8)q[w++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ib:function(){for(var q=d(),w="",p=0;p<q.length;p++)w+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return w}}}
;function Ld(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Md(Id(d),a,c||null)].join(" "):null}
function Md(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Nd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Nd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nd(a){var b=Kd();b.update(a);return b.ib().toLowerCase()}
;var Od={};function Pd(a){this.h=a||{cookie:""}}
m=Pd.prototype;m.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ba:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Rb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ba}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ba:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Qd=new Pd("undefined"==typeof document?null:document);function Rd(a){return!!Od.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Sd(a,b,c,d){(a=A[a])||(a=(new Pd(document)).get(b));return a?Ld(a,c,d):null}
function Td(a){var b=void 0===b?!1:b;var c=Id(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Rd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Pd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Rd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Pd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ld(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Rd(b)&&((b=Sd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Sd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ud(){this.l=this.l;this.v=this.v}
Ud.prototype.l=!1;Ud.prototype.dispose=function(){this.l||(this.l=!0,this.fa())};
Ud.prototype.fa=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Vd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Vd.prototype.stopPropagation=function(){this.j=!0};
Vd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Wd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Xd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Yd[c])c=Yd[c];else{c=String(c);if(!Yd[c]){var f=/function\s+([^\(]+)/m.exec(c);Yd[c]=f?f[1]:"[Anonymous]"}c=Yd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Xd(a,b){b||(b={});b[Zd(a)]=!0;var c=a.stack||"";(a=a.gb)&&!b[Zd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Xd(a,b));return c}
function Zd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Yd={};var $d=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ae(a,b){Vd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(ae,Vd);var be={2:"touch",3:"pen",4:"mouse"};
ae.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(dc){a:{try{$b(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:be[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ae.N.preventDefault.call(this)};
ae.prototype.stopPropagation=function(){ae.N.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ae.prototype.preventDefault=function(){ae.N.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ce="closure_listenable_"+(1E6*Math.random()|0);var de=0;function ee(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qa=e;this.key=++de;this.ha=this.ma=!1}
function fe(a){a.ha=!0;a.listener=null;a.proxy=null;a.src=null;a.qa=null}
;function ge(a){this.src=a;this.listeners={};this.h=0}
ge.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=he(a,b,d,e);-1<g?(b=a[g],c||(b.ma=!1)):(b=new ee(b,this.src,f,!!d,e),b.ma=c,a.push(b));return b};
ge.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=he(e,b,c,d);return-1<b?(fe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ie(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(fe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function he(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ha&&f.listener==b&&f.capture==!!c&&f.qa==d)return e}return-1}
;var je="closure_lm_"+(1E6*Math.random()|0),ke={},le=0;function me(a,b,c,d,e){if(d&&d.once)ne(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)me(a,b[f],c,d,e);else c=oe(c),a&&a[ce]?a.R(b,c,Pa(d)?!!d.capture:!!d,e):pe(a,b,c,!1,d,e)}
function pe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=qe(a);h||(a[je]=h=new ge(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=re();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)$d||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(se(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");le++}}
function re(){function a(c){return b.call(a.src,a.listener,c)}
var b=te;return a}
function ne(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ne(a,b[f],c,d,e);else c=oe(c),a&&a[ce]?a.j.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):pe(a,b,c,!0,d,e)}
function ue(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ue(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=oe(c),a&&a[ce])?a.j.remove(String(b),c,d,e):a&&(a=qe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=he(b,c,d,e)),(c=-1<a?b[a]:null)&&ve(c))}
function ve(a){if("number"!==typeof a&&a&&!a.ha){var b=a.src;if(b&&b[ce])ie(b.j,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(se(c),d):b.addListener&&b.removeListener&&b.removeListener(d);le--;(c=qe(b))?(ie(c,a),0==c.h&&(c.src=null,b[je]=null)):fe(a)}}}
function se(a){return a in ke?ke[a]:ke[a]="on"+a}
function te(a,b){if(a.ha)a=!0;else{b=new ae(b,this);var c=a.listener,d=a.qa||a.src;a.ma&&ve(a);a=c.call(d,b)}return a}
function qe(a){a=a[je];return a instanceof ge?a:null}
var we="__closure_events_fn_"+(1E9*Math.random()>>>0);function oe(a){if("function"===typeof a)return a;a[we]||(a[we]=function(b){return a.handleEvent(b)});
return a[we]}
;function J(){Ud.call(this);this.j=new ge(this);this.wa=this;this.I=null}
Xa(J,Ud);J.prototype[ce]=!0;J.prototype.addEventListener=function(a,b,c,d){me(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){ue(this,a,b,c,d)};
function xe(a,b){var c=a.I;if(c){var d=[];for(var e=1;c;c=c.I)d.push(c),++e}a=a.wa;c=b.type||b;"string"===typeof b?b=new Vd(b,a):b instanceof Vd?b.target=b.target||a:(e=b,b=new Vd(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=ye(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ye(g,c,!0,b)&&e,b.j||(e=ye(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ye(g,c,!1,b)&&e}
J.prototype.fa=function(){J.N.fa.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,fe(d[e]);delete a.listeners[c];a.h--}}this.I=null};
J.prototype.R=function(a,b,c,d){return this.j.add(String(a),b,!1,c,d)};
function ye(a,b,c,d){b=a.j.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ha&&g.capture==c){var h=g.listener,k=g.qa||g.src;g.ma&&ie(a.j,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ze(a){J.call(this);var b=this;this.B=this.i=0;this.J=null!=a?a:{L:function(e,f){return setTimeout(e,f)},
Y:clearTimeout};var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return v(e,Ae(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.B||Be(this)}
u(ze,J);function Ce(){var a=De;ze.h||(ze.h=new ze(a));return ze.h}
ze.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.J.Y(this.B);delete ze.h};
ze.prototype.F=function(){return this.h};
function Be(a){a.B=a.J.L(function(){var b;return x(function(c){if(1==c.h)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.o(3):v(c,Ae(a),3):v(c,Ae(a),3);Be(a);c.h=0})},3E4)}
function Ae(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.i=a.J.L(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.u=void 0;a.i&&(a.J.Y(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?xe(a,"networkstatus-online"):xe(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.o(3)}})})}
;function Ee(){this.data_=[];this.h=-1}
Ee.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Ee.prototype.get=function(a){return!!this.data_[a]};
function Fe(a){-1===a.h&&(a.h=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ge(){var a=He,b="Aa";if(a.Aa&&a.hasOwnProperty(b))return a.Aa;var c=new a;a.Aa=c;a.hasOwnProperty(b);return c}
;function He(){var a={};this.A=function(b,c){return null!=a[b]?a[b]:c}}
;function Ie(a){I.call(this,a,-1,Je)}
u(Ie,I);function Ke(a,b){return G(a,2,b)}
function Le(a,b){return G(a,3,b)}
function Me(a,b){return G(a,4,b)}
function Ne(a,b){return G(a,5,b)}
function Oe(a,b){return G(a,9,b)}
function Pe(a,b){var c=void 0===c?!1:c;Jc(a);if(b){var d=Dc([]);for(var e=0;e<b.length;e++)d[e]=b[e].C;a.h||(a.h={});a.h[10]=b}else a.h&&(a.h[10]=void 0),d=Ic;return G(a,10,d,c)}
function Qe(a,b){return G(a,11,b)}
function Re(a,b){return G(a,1,b)}
function Se(a){I.call(this,a)}
u(Se,I);var Je=[10,6];var Te="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ue(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Ve(a){var b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=Ue(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Te).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function We(a){var b;return Qe(Pe(Oe(Ne(Me(Le(Ke(Re(new Ie,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Se;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function Xe(){var a=window;if(Ge().A(Hd.flag,Hd.defaultValue)){var b,c;return null!=(c=null==(b=Ve(a))?void 0:b.then(function(g){return We(g)}))?c:null}var d,e;
if("function"!==typeof(null==(d=a.navigator)?void 0:null==(e=d.userAgentData)?void 0:e.getHighEntropyValues))return null;var f;return null!=(f=a.navigator.userAgentData.getHighEntropyValues(Te).then(function(g){return We(g)}))?f:null}
;function Ye(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ye.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ze(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var $e;function af(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=rd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ja;c.Ja=null;e()}};
return function(e){d.next={Ja:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function bf(){this.i=this.h=null}
bf.prototype.add=function(a,b){var c=cf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
bf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var cf=new Ye(function(){return new df},function(a){return a.reset()});
function df(){this.next=this.scope=this.h=null}
df.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
df.prototype.reset=function(){this.next=this.scope=this.h=null};function ef(a,b){ff||gf();hf||(ff(),hf=!0);jf.add(a,b)}
var ff;function gf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);ff=function(){a.then(kf)}}else ff=function(){var b=kf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!E("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?($e||($e=af()),$e(b)):A.setImmediate(b)}}
var hf=!1,jf=new bf;function kf(){for(var a;a=jf.remove();){try{a.h.call(a.scope)}catch(b){Mc(b)}Ze(cf,a)}hf=!1}
;function If(a,b){this.h=a[A.Symbol.iterator]();this.i=b}
If.prototype[Symbol.iterator]=function(){return this};
If.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Jf(a,b){return new If(a,b)}
;function Kf(){this.blockSize=-1}
;function Lf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.v=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(Lf,Kf);Lf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Mf(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Lf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Mf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Mf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Mf(this,e);f=0;break}}this.i=f;this.l+=b}};
Lf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Mf(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Nf(){}
Nf.prototype.next=function(){return Of};
var Of={done:!0,value:void 0};function Pf(a){return{value:a,done:!1}}
Nf.prototype.K=function(){return this};function Qf(a){if(a instanceof Rf||a instanceof Sf||a instanceof Tf)return a;if("function"==typeof a.next)return new Rf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Rf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.K)return new Rf(function(){return a.K()});
throw Error("Not an iterator or iterable.");}
function Rf(a){this.i=a}
Rf.prototype.K=function(){return new Sf(this.i())};
Rf.prototype[Symbol.iterator]=function(){return new Tf(this.i())};
Rf.prototype.h=function(){return new Tf(this.i())};
function Sf(a){this.i=a}
u(Sf,Nf);Sf.prototype.next=function(){return this.i.next()};
Sf.prototype[Symbol.iterator]=function(){return new Tf(this.i)};
Sf.prototype.h=function(){return new Tf(this.i)};
function Tf(a){Rf.call(this,function(){return a});
this.j=a}
u(Tf,Rf);Tf.prototype.next=function(){return this.j.next()};function Uf(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Uf)for(c=Vf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Vf(a){Wf(a);return a.h.concat()}
m=Uf.prototype;m.has=function(a){return Xf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Yf;Wf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Yf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.j=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Xf(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Wf(this),!0):!1};
function Wf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Xf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Xf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Xf(this.i,a)?this.i[a]:b};
m.set=function(a,b){Xf(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Vf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Uf(this)};
m.keys=function(){return Qf(this.K(!0)).h()};
m.values=function(){return Qf(this.K(!1)).h()};
m.entries=function(){var a=this;return Jf(this.keys(),function(b){return[b,a.get(b)]})};
m.K=function(a){Wf(this);var b=0,c=this.j,d=this,e=new Nf;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Of;var f=d.h[b++];return Pf(a?f:d.i[f])};
return e};
function Xf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Zf=A.JSON.stringify;function $f(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ag(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.v=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){bg(b,2,c)},function(c){bg(b,3,c)})}catch(c){bg(this,3,c)}}
function cg(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
cg.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var dg=new Ye(function(){return new cg},function(a){a.reset()});
function eg(a,b,c){var d=dg.get();d.i=a;d.onRejected=b;d.context=c;return d}
ag.prototype.then=function(a,b,c){return fg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ag.prototype.$goog_Thenable=!0;ag.prototype.cancel=function(a){if(0==this.h){var b=new gg(a);ef(function(){hg(this,b)},this)}};
function hg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?hg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ig(c),jg(c,e,3,b)))}a.j=null}else bg(a,3,b)}
function kg(a,b){a.i||2!=a.h&&3!=a.h||lg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function fg(a,b,c,d){var e=eg(null,null,null);e.h=new ag(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof gg?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;kg(a,e);return e.h}
ag.prototype.I=function(a){this.h=0;bg(this,2,a)};
ag.prototype.O=function(a){this.h=0;bg(this,3,a)};
function bg(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.I,f=a.O;if(d instanceof ag){kg(d,eg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){mg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,lg(a),3!=b||c instanceof gg||ng(a,c))}}
function mg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function lg(a){a.v||(a.v=!0,ef(a.B,a))}
function ig(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ag.prototype.B=function(){for(var a;a=ig(this);)jg(this,a,this.h,this.u);this.v=!1};
function jg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,og(b,c,d);else try{b.j?b.i.call(b.context):og(b,c,d)}catch(e){pg.call(null,e)}Ze(dg,b)}
function og(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ng(a,b){a.m=!0;ef(function(){a.m&&pg.call(null,b)})}
var pg=Mc;function gg(a){Za.call(this,a)}
Xa(gg,Za);gg.prototype.name="cancel";function L(a){Ud.call(this);this.u=1;this.j=[];this.m=0;this.h=[];this.i={};this.B=!!a}
Xa(L,Ud);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function qg(a,b,c){var d=rg;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ka(a)}}
m.ka=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.m?(this.j.push(a),this.h[a+1]=function(){}):(c&&eb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ca=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];sg(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.j.length&&0==this.m)for(;c=this.j.pop();)this.ka(c)}}return 0!=e}return!1};
function sg(a,b,c){ef(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ka,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.fa=function(){L.N.fa.call(this);this.clear();this.j.length=0};function tg(a){this.h=a}
tg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Zf(b))};
tg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
tg.prototype.remove=function(a){this.h.remove(a)};function ug(a){this.h=a}
Xa(ug,tg);function vg(a){this.data=a}
function wg(a){return void 0===a||a instanceof vg?a:new vg(a)}
ug.prototype.set=function(a,b){ug.N.set.call(this,a,wg(b))};
ug.prototype.i=function(a){a=ug.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ug.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function xg(a){this.h=a}
Xa(xg,ug);xg.prototype.set=function(a,b,c){if(b=wg(b)){if(c){if(c<Date.now()){xg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}xg.N.set.call(this,a,b)};
xg.prototype.i=function(a){var b=xg.N.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())xg.prototype.remove.call(this,a);else return b}};function yg(){}
;function zg(){}
Xa(zg,yg);zg.prototype[Symbol.iterator]=function(){return Qf(this.K(!0)).h()};
zg.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ag(a){this.h=a}
Xa(Ag,zg);m=Ag.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.K=function(a){var b=0,c=this.h,d=new Nf;d.next=function(){if(b>=c.length)return Of;var e=c.key(b++);if(a)return Pf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pf(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Bg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(Bg,Ag);function Cg(a,b){this.i=a;this.h=null;var c;if(c=bc)c=!(9<=Number(oc));if(c){Dg||(Dg=new Uf);this.h=Dg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Dg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(Cg,zg);var Eg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Dg=null;function Fg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Eg[b]})}
m=Cg.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Fg(a),b);Gg(this)};
m.get=function(a){a=this.h.getAttribute(Fg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Fg(a));Gg(this)};
m.K=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Nf;d.next=function(){if(b>=c.length)return Of;var e=c[b++];if(a)return Pf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pf(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Gg(this)};
function Gg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Hg(a,b){this.i=a;this.h=b+"::"}
Xa(Hg,zg);Hg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Hg.prototype.get=function(a){return this.i.get(this.h+a)};
Hg.prototype.remove=function(a){this.i.remove(this.h+a)};
Hg.prototype.K=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Nf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Pf(a?e.slice(c.h.length):c.i.get(e))};
return d};function Ig(a){I.call(this,a)}
u(Ig,I);Ig.prototype.getKey=function(){return Tc(this,1)};
Ig.prototype.W=function(){return Tc(this,2===Wc(this,Jg)?2:-1)};
Ig.prototype.setValue=function(a){return Vc(this,2,Jg,a)};
var Jg=[2,3,4,5,6];function Kg(a){I.call(this,a)}
u(Kg,I);function Lg(a){I.call(this,a)}
u(Lg,I);function Mg(a){I.call(this,a,-1,Ng)}
u(Mg,I);Mg.prototype.getPlayerType=function(){return Tc(this,36)};
Mg.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var Ng=[9,66,24,32,86,100,101];function Og(a){I.call(this,a,-1,Pg)}
u(Og,I);var Pg=[15,26,28];function Qg(a){I.call(this,a)}
u(Qg,I);Qg.prototype.setToken=function(a){return G(this,2,a)};function Rg(a){I.call(this,a,-1,Sg)}
u(Rg,I);Rg.prototype.setSafetyMode=function(a){return G(this,5,a)};
var Sg=[12];function Tg(a){I.call(this,a,-1,Ug)}
u(Tg,I);var Ug=[12];function Vg(a){I.call(this,a,-1,Wg)}
u(Vg,I);function Xg(a){I.call(this,a)}
u(Xg,I);Xg.prototype.getKey=function(){return ad(this,1)};
Xg.prototype.W=function(){return ad(this,2)};
Xg.prototype.setValue=function(a){return G(this,2,a)};
var Wg=[4,5];function Yg(a){I.call(this,a)}
u(Yg,I);function Zg(a){I.call(this,a)}
u(Zg,I);var $g=[2,3,4];function ah(a){I.call(this,a)}
u(ah,I);function bh(a){I.call(this,a)}
u(bh,I);function ch(a){I.call(this,a)}
u(ch,I);function dh(a){I.call(this,a,-1,eh)}
u(dh,I);var eh=[10,17];function fh(a){I.call(this,a)}
u(fh,I);function gh(a){I.call(this,a)}
u(gh,I);function hh(a){I.call(this,a)}
u(hh,I);function ih(a){I.call(this,a,431)}
u(ih,I);
var jh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,117];function kh(a){I.call(this,a)}
u(kh,I);function lh(a){I.call(this,a)}
u(lh,I);lh.prototype.setVideoId=function(a){return Vc(this,1,mh,a)};
lh.prototype.getPlaylistId=function(){return Tc(this,2===Wc(this,mh)?2:-1)};
var mh=[1,2];function nh(a){I.call(this,a,-1,oh)}
u(nh,I);var oh=[3];var ph=A.window,qh,rh,sh=(null==ph?void 0:null==(qh=ph.yt)?void 0:qh.config_)||(null==ph?void 0:null==(rh=ph.ytcfg)?void 0:rh.data_)||{};C("yt.config_",sh);function th(){var a=arguments;1<a.length?sh[a[0]]=a[1]:1===a.length&&Object.assign(sh,a[0])}
function N(a,b){return a in sh?sh[a]:b}
function uh(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function vh(){var a=sh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var wh=[];function xh(a){wh.forEach(function(b){return b(a)})}
function yh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zh(b)}}:a}
function zh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=N("ERRORS",[]),e.push([a,"ERROR",b,c,d]),th("ERRORS",e));xh(a)}
function Ah(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=N("ERRORS",[]),e.push([a,"WARNING",b,c,d]),th("ERRORS",e))}
;var Bh=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Bh});var Ch={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Dh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ch||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Dh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Dh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Dh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var Eh=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Eh);
function Fh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Gh(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Hh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Hh=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ih(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Fh(a,b,c,d);if(!e){e=++Eh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Dh(h);if(!sd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Dh(h);
h.currentTarget=a;return c.call(a,h)};
g=yh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Hh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Jh(a,b){"function"===typeof a&&(a=yh(a));return window.setTimeout(a,b)}
function Kh(a){"function"===typeof a&&(a=yh(a));return window.setInterval(a,250)}
;var Lh=/^[\w.]*$/,Mh={q:!0,search_query:!0};function Nh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Oh(f[0]||""),h=Oh(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],n=String(Nh);k.args=[{key:l,value:f[1],query:a,method:Ph==n?"unchanged":n}];Mh.hasOwnProperty(l)||Ah(k)}}return c}
var Ph=String(Nh);function Qh(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Rh(a){"?"==a.charAt(0)&&(a=a.substr(1));return Nh(a,"&")}
function Sh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Rh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Wb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Th(a){if(!b)var b=window.location.href;var c=a.match(Rb)[1]||null,d=Tb(a);c&&d?(a=a.match(Rb),b=b.match(Rb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Tb(b)==d&&(Number(b.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;return a}
function Oh(a){return a&&a.match(Lh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function P(a){a=Uh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Vh(a,b){a=Uh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Uh(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function Wh(){var a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=N("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Xh(a){var b=Yh;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Gd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(X){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?jd:g;try{var h=g.history.length}catch(X){h=0}e.u_his=h;var k;e.u_h=null==(k=jd.screen)?void 0:k.height;var l;e.u_w=null==(l=jd.screen)?void 0:l.width;var n;e.u_ah=null==(n=jd.screen)?void 0:n.availHeight;var q;e.u_aw=null==
(q=jd.screen)?void 0:q.availWidth;var w;e.u_cd=null==(w=jd.screen)?void 0:w.colorDepth}catch(X){}h=b.h;try{var p=h.screenX;var y=h.screenY}catch(X){}try{var z=h.outerWidth;var F=h.outerHeight}catch(X){}try{var K=h.innerWidth;var M=h.innerHeight}catch(X){}try{var O=h.screenLeft;var fb=h.screenTop}catch(X){}try{K=h.innerWidth,M=h.innerHeight}catch(X){}try{var ic=h.screen.availWidth;var ua=h.screen.availTop}catch(X){}p=[O,fb,p,y,ic,ua,z,F,K,M];y=b.h.top;try{var ma=(y||window).document,Y="CSS1Compat"==
ma.compatMode?ma.documentElement:ma.body;var ba=(new qd(Y.clientWidth,Y.clientHeight)).round()}catch(X){ba=new qd(-12245933,-12245933)}ma=ba;ba={};var ca=void 0===ca?A:ca;Y=new Ee;ca.SVGElement&&ca.document.createElementNS&&Y.set(0);y=zd();y["allow-top-navigation-by-user-activation"]&&Y.set(1);y["allow-popups-to-escape-sandbox"]&&Y.set(2);ca.crypto&&ca.crypto.subtle&&Y.set(3);ca.TextDecoder&&ca.TextEncoder&&Y.set(4);ca=Fe(Y);ba.bc=ca;ba.bih=ma.height;ba.biw=ma.width;ba.brdim=p.join();b=b.i;b=(ba.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ba.wgl=!!jd.WebGLRenderingContext,ba);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Yh=new function(){var a=window.document;this.h=window;this.i=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return Qh(Xh(a))});Date.now();var Zh="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function $h(){if(!Zh)return null;var a=Zh();return"open"in a?a:null}
;var ai={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},bi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Jd)),ci=!1;
function di(a,b){b=void 0===b?{}:b;var c=Th(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in ai){var f=N(ai[e]);!f||!c&&Tb(a)||d&&void 0!==b[e]||!P("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Tb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Tb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=
g)}if(c||!Tb(a))b["X-YouTube-Ad-Signals"]=Qh(Xh());return b}
function ei(a){var b=window.location.search,c=Tb(a);P("debug_handle_relative_url_for_query_forward_killswitch")||c||!Th(a)||(c=document.location.hostname);var d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Rh(b),f={};D(bi,function(g){e[g]&&(f[g]=e[g])});
return Sh(a,f||{},!1)}
function fi(a,b){var c=b.format||"JSON";a=gi(a,b);var d=hi(a,b),e=!1,f=ii(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,q=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(l||q||w)n=ji(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=
!!n}n=n||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Jh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function gi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Sh(a,b||{},!0);return a}
function hi(a,b){var c=N("XSRF_FIELD_NAME"),d=N("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Tb(a)&&!b.withCredentials&&Tb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Rh(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Wb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!ci&&a&&"POST"!=b.method&&(ci=!0,zh(Error("AJAX request with postData should use POST")));return e}
function ji(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ah(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ki(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=li(g)})}d&&mi(e);
return e}
function mi(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===vb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){A.console&&A.console.error(g.message)}vb=e}else vb=e}d=(e=vb)?e.createHTML(d):d;a[c]=new Mb(d)}else mi(a[b])}}
function ki(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function li(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ii(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&yh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=$h();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=ei(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=di(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ni={Kb:"WEB_DISPLAY_MODE_UNKNOWN",Gb:"WEB_DISPLAY_MODE_BROWSER",Ib:"WEB_DISPLAY_MODE_MINIMAL_UI",Jb:"WEB_DISPLAY_MODE_STANDALONE",Hb:"WEB_DISPLAY_MODE_FULLSCREEN"};function oi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var pi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},qi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},ri={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},si={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ti(){var a=A.navigator;return a?a.connection:void 0}
;function ui(){return"INNERTUBE_API_KEY"in sh&&"INNERTUBE_API_VERSION"in sh}
function vi(){return{innertubeApiKey:N("INNERTUBE_API_KEY"),innertubeApiVersion:N("INNERTUBE_API_VERSION"),za:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Oa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),lb:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION"),Qa:N("INNERTUBE_CONTEXT_HL"),Pa:N("INNERTUBE_CONTEXT_GL"),mb:N("INNERTUBE_HOST_OVERRIDE")||"",ob:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),nb:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA")}}
function wi(a){var b={client:{hl:a.Qa,gl:a.Pa,clientName:a.Oa,clientVersion:a.innertubeContextClientVersion,configInfo:a.za}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Wh();0<c.length&&(b.request={internalExperimentFlags:c});xi(a,void 0,b);yi(void 0,b);zi(a,void 0,b);Ai(void 0,b);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&
(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(Rh(N("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Bi(a){var b=new Tg,c=new Mg;G(c,1,a.Qa);G(c,2,a.Pa);G(c,16,a.lb);G(c,17,a.innertubeContextClientVersion);if(a.za){var d=a.za,e=new Kg;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,62,e)}(d=A.devicePixelRatio)&&1!=d&&G(c,65,d);d=N("EXPERIMENTS_TOKEN","");""!==d&&G(c,54,d);d=Wh();if(0<d.length){e=new Og;for(var f=0;f<d.length;f++){var g=new Ig;G(g,1,d[f].key);g.setValue(d[f].value);
$c(e,15,Ig,g)}H(b,5,e)}xi(a,c);yi(c);zi(a,c);Ai(c);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new Rg,G(a,3,N("DELEGATED_SESSION_ID")));a=t(Object.entries(Rh(N("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,1,c);return b}
function xi(a,b,c){a=a.Oa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Xc(b,Lg,96)||new Lg;var d=oi();d=Object.keys(ni).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=oi())}
function yi(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function zi(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Xc(b,Kg,62))?d:new Kg;G(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ai(a,b){a:{var c=ti();if(c){var d=pi[c.type||"unknown"]||"CONN_UNKNOWN";c=pi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,qi[d]):b&&(b.client.connectionType=d));P("web_log_effective_connection_type")&&(d=ti(),d=null!=d&&d.effectiveType?si.hasOwnProperty(d.effectiveType)?si[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,ri[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Ci(a,b,c){c=void 0===c?{}:c;var d={};P("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Mb||N("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Lb:b=Td([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function Di(a){a=Object.assign({},a);delete a.Authorization;var b=Td();if(b){var c=new Lf;c.update(N("INNERTUBE_API_KEY"));c.update(b);a.hash=xc(c.digest(),3)}return a}
;function Ei(a){var b=new Bg;(b=b.isAvailable()?a?new Hg(b,a):b:null)||(a=new Cg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new xg(a):null;this.i=document.domain||window.location.hostname}
Ei.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Zf(b))}catch(f){return}else e=escape(b);b=this.i;Qd.set(""+a,e,{Ba:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ei.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Qd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ei.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Qd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Fi=window,R=Fi.ytcsi&&Fi.ytcsi.now?Fi.ytcsi.now:Fi.performance&&Fi.performance.timing&&Fi.performance.now&&Fi.performance.timing.navigationStart?function(){return Fi.performance.timing.navigationStart+Fi.performance.now()}:function(){return(new Date).getTime()};var Gi;function Hi(){Gi||(Gi=new Ei("yt.innertube"));return Gi}
function Ii(a,b,c,d){if(d)return null;d=Hi().get("nextId",!0)||1;var e=Hi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Di(c),requestTime:Math.round(R())};Hi().set("nextId",d+1,86400,!0);Hi().set("requests",e,86400,!0);return d}
function Ji(a){var b=Hi().get("requests",!0)||{};delete b[a];Hi().set("requests",b,86400,!0)}
function Ki(a){var b=Hi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Di(Ci(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Li(a,d.method,e,{}));delete b[c]}}Hi().set("requests",b,86400,!0)}}
;function Mi(){}
function Ni(a,b){return Oi(a,0,b)}
Mi.prototype.L=function(a,b){return Oi(a,1,b)};
function Pi(a,b){Oi(a,2,b)}
;function Qi(){Mi.apply(this,arguments)}
u(Qi,Mi);function Ri(){Qi.h||(Qi.h=new Qi);return Qi.h}
function Oi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Jh(a,c||0)}
Qi.prototype.Y=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Qi.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var De=Ri();var Si=pc||qc;var Ti=function(){var a;return function(){a||(a=new Ei("ytidb"));return a}}();
function Ui(){var a;return null==(a=Ti())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Vi=[],Wi=!1;function Xi(a){Wi||(Vi.push({type:"ERROR",payload:a}),10<Vi.length&&Vi.shift())}
function Yi(a,b){Wi||(Vi.push({type:"EVENT",eventType:a,payload:b}),10<Vi.length&&Vi.shift())}
;function Zi(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
u(Zi,Error);function $i(){try{return aj(),!0}catch(a){return!1}}
function aj(){if(void 0!==N("DATASYNC_ID"))return N("DATASYNC_ID");throw new Zi("Datasync ID not set","unknown");}
;function bj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function cj(a){return a.substr(0,a.indexOf(":"))||a}
;var dj={},ej=(dj.AUTH_INVALID="No user identifier specified.",dj.EXPLICIT_ABORT="Transaction was explicitly aborted.",dj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dj.MISSING_INDEX="Index not created.",dj.MISSING_OBJECT_STORES="Object stores not created.",dj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",dj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",dj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
dj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",dj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",dj),fj={},gj=(fj.AUTH_INVALID="ERROR",fj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fj.EXPLICIT_ABORT="IGNORED",fj.IDB_NOT_SUPPORTED="ERROR",fj.MISSING_INDEX=
"WARNING",fj.MISSING_OBJECT_STORES="ERROR",fj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fj.QUOTA_EXCEEDED="WARNING",fj.QUOTA_MAYBE_EXCEEDED="WARNING",fj.UNKNOWN_ABORT="WARNING",fj.INCOMPATIBLE_DB_VERSION="WARNING",fj),hj={},ij=(hj.AUTH_INVALID=!1,hj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hj.EXPLICIT_ABORT=!1,hj.IDB_NOT_SUPPORTED=!1,hj.MISSING_INDEX=!1,hj.MISSING_OBJECT_STORES=!1,hj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,hj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,hj.QUOTA_EXCEEDED=!1,hj.QUOTA_MAYBE_EXCEEDED=!0,hj.UNKNOWN_ABORT=!0,hj.INCOMPATIBLE_DB_VERSION=!1,hj);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ej[a]:c;d=void 0===d?gj[a]:d;e=void 0===e?ij[a]:e;Zi.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}
u(T,Zi);function jj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ej.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,jj.prototype)}
u(jj,T);function kj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,kj.prototype)}
u(kj,Error);var lj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function mj(a,b,c,d){b=cj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(rc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof kj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&lj.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Qb:e.name})];e.level="WARNING";return e}
function nj(a,b,c){var d=Ui();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function oj(a){if(!a)throw Error();throw a;}
function pj(a){return a}
function qj(a){this.h=a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(new qj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Z:0};f.Z<a.length;f={Z:f.Z},++f.Z)rj(U.resolve(a[f.Z]).then(function(g){return function(h){d[g.Z]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
U.resolve=function(a){return new U(new qj(function(b,c){a instanceof U?a.then(b,c):b(a)}))};
U.reject=function(a){return new U(new qj(function(b,c){c(a)}))};
U.prototype.then=function(a,b){var c=this,d=null!=a?a:pj,e=null!=b?b:oj;return new U(new qj(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){sj(c,c,d,f,g)}),c.onRejected.push(function(){tj(c,c,e,f,g)})):"FULFILLED"===c.state.status?sj(c,c,d,f,g):"REJECTED"===c.state.status&&tj(c,c,e,f,g)}))};
function rj(a,b){a.then(void 0,b)}
function sj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?uj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?uj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function uj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?uj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function vj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function wj(a){return new Promise(function(b,c){vj(a,b,c)})}
function V(a){return new U(new qj(function(b,c){vj(a,b,c)}))}
;function lk(a,b){return new U(new qj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function mk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
m=mk.prototype;m.add=function(a,b,c){return nk(this,[a],{mode:"readwrite",H:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return nk(this,[a],{mode:"readwrite",H:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return nk(this,[a],{mode:"readonly",H:!0},function(c){return c.objectStore(a).count(b)})};
function ok(a,b,c){a=a.h.createObjectStore(b,c);return new pk(a)}
m.delete=function(a,b){return nk(this,[a],{mode:"readwrite",H:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return nk(this,[a],{mode:"readonly",H:!0},function(c){return c.objectStore(a).get(b)})};
function qk(a,b){return nk(a,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(c){c=c.objectStore("LogsRequestsStore");return V(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function nk(a,b,c,d){var e,f,g,h,k,l,n,q,w,p,y,z;return x(function(F){switch(F.h){case 1:var K={mode:"readonly",H:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.H?3:1;g=0;case 2:if(h){F.o(3);break}g++;k=Math.round(R());xa(F,4);l=a.h.transaction(b,e.mode);K=new rk(l);K=sk(K,d);return v(F,K,6);case 6:return n=F.i,q=Math.round(R()),tk(a,k,q,g,void 0,b.join(),e),F.return(n);case 4:w=za(F);p=Math.round(R());y=mj(w,a.h.name,b.join(),a.h.version);
if((z=y instanceof T&&!y.h)||g>=f)tk(a,k,p,g,y,b.join(),e),h=y;F.o(2);break;case 3:return F.return(Promise.reject(h))}})}
function tk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Yi("QUOTA_EXCEEDED",{dbName:cj(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Yi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),uk(a,!1,d,f,b,g.tag),Xi(e)):uk(a,!0,d,f,b,g.tag)}
function uk(a,b,c,d,e,f){Yi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function pk(a){this.h=a}
m=pk.prototype;m.add=function(a,b){return V(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return V(this.h.clear()).then(function(){})};
m.count=function(a){return V(this.h.count(a))};
function vk(a,b){return wk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?vk(this,a):V(this.h.delete(a))};
m.get=function(a){return V(this.h.get(a))};
m.index=function(a){try{return new xk(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new kj(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function wk(a,b,c){a=a.h.openCursor(b.query,b.direction);return yk(a).then(function(d){return lk(d,c)})}
function rk(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=T;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function sk(a,b){var c=new Promise(function(d,e){try{rj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
rk.prototype.abort=function(){this.h.abort();this.i=!0;throw new T("EXPLICIT_ABORT");};
rk.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new pk(a),this.j.set(a,b));return b};
function xk(a){this.h=a}
m=xk.prototype;m.count=function(a){return V(this.h.count(a))};
m.delete=function(a){return zk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return V(this.h.get(a))};
m.getKey=function(a){return V(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function zk(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return yk(a).then(function(d){return lk(d,c)})}
function Ak(a,b){this.request=a;this.cursor=b}
function yk(a){return V(a).then(function(b){return b?new Ak(a,b):null})}
m=Ak.prototype;m.advance=function(a){this.cursor.advance(a);return yk(this.request)};
m.continue=function(a){this.cursor.continue(a);return yk(this.request)};
m.delete=function(){return V(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.W=function(){return this.cursor.value};
m.update=function(a){return V(this.cursor.update(a))};function Bk(a,b,c){return new Promise(function(d,e){function f(){w||(w=new mk(g.result,{closed:q}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.tb,n=c.upgrade,q=c.closed,w;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Yi("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:cj(a)});var y=f(),z=new rk(g.transaction);
n&&n(y,function(F){return p.oldVersion<F&&p.newVersion>=F},z);
z.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Yi("IDB_UNEXPECTEDLY_CLOSED",{dbName:cj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ck(a,b,c){c=void 0===c?{}:c;return Bk(a,b,c)}
function Dk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,wj(c),4);
if(2!=g.h)return ya(g,0);f=za(g);throw mj(f,a,"",-1);})}
;function Ek(a){return new Promise(function(b){Pi(function(){b()},a)})}
function Fk(a,b){this.name=a;this.options=b;this.l=!0;this.v=this.m=0;this.i=500}
Fk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Ck(a,b,c)};
Fk.prototype.delete=function(a){a=void 0===a?{}:a;return Dk(this.name,a)};
function Gk(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Hk(a,b){if(!b)throw nj("openWithToken",cj(a.name));return a.open()}
Fk.prototype.open=function(){function a(){var f,g,h,k,l,n,q,w,p,y;return x(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",xa(z,2),v(z,c.j(c.name,c.options.version,e),4);case 4:h=z.i;for(var F=c.options,K=[],M=t(Object.keys(F.ga)),O=M.next();!O.done;O=M.next()){O=O.value;var fb=F.ga[O],ic=void 0===fb.rb?Number.MAX_VALUE:fb.rb;!(h.h.version>=fb.xa)||h.h.version>=ic||h.h.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){z.o(5);break}l=Object.keys(c.options.ga);n=h.objectStoreNames();
if(c.v<Vh("ytidb_reopen_db_retries",0))return c.v++,h.close(),Xi(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.m<Vh("ytidb_remake_db_retries",1))){z.o(6);break}c.m++;if(!P("ytidb_remake_db_enable_backoff_delay")){z.o(7);break}return v(z,Ek(c.i),8);case 8:c.i*=2;case 7:return v(z,c.delete(),9);case 9:return Xi(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());
case 6:throw new jj(n,l);case 5:return z.return(h);case 2:q=za(z);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){z.o(10);break}return v(z,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:w=z.i;p=w.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw w.close(),
c.l=!1,Gk(c,p);return z.return(w);case 10:throw b(),q instanceof Error&&!P("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),mj(q,c.name,"",null!=(y=c.options.version)?y:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Gk(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,tb:b,upgrade:this.options.upgrade};return this.h=d=a()};var Ik=new Fk("YtIdbMeta",{ga:{databases:{xa:1}},upgrade:function(a,b){b(1)&&ok(a,"databases",{keyPath:"actualName"})}});
function Jk(a,b){var c;return x(function(d){if(1==d.h)return v(d,Hk(Ik,b),2);c=d.i;return d.return(nk(c,["databases"],{H:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return V(f.h.put(a,void 0)).then(function(){})})}))})}
function Kk(a,b){var c;return x(function(d){if(1==d.h)return a?v(d,Hk(Ik,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Lk(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],v(e,Hk(Ik,b),2)):3!=e.h?(d=e.i,v(e,nk(d,["databases"],{H:!0,mode:"readonly"},function(f){c.length=0;return wk(f.objectStore("databases"),{},function(g){a(g.W())&&c.push(g.W());return g.continue()})}),3)):e.return(c)})}
function Mk(a){return Lk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Nk,Ok=new function(){}(new function(){});
function Pk(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=Ui();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Si)f=/WebKit\/([0-9]+)/.exec(Jb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Jb()),f=!(f&&602<=parseInt(f[1],10)));if(f||cc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,Jk(d,Ok),4);case 4:return v(e,Kk("yt-idb-test-do-not-use",Ok),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Qk(){if(void 0!==Nk)return Nk;Wi=!0;return Nk=Pk().then(function(a){Wi=!1;var b;if(null!=(b=Ti())&&b.h){var c;b={hasSucceededOnce:(null==(c=Ui())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Ti())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Rk(){return B("ytglobal.idbToken_")||void 0}
function Sk(){var a=Rk();return a?Promise.resolve(a):Qk().then(function(b){(b=b?Ok:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new $f;function Tk(a){if(!$i())throw a=new T("AUTH_INVALID",{dbName:a}),Xi(a),a;var b=aj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Uk(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",v(n,Sk(),2);case 2:g=n.i;if(!g)throw h=nj("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Xi(h),h;bj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Tk(a);xa(n,3);return v(n,Jk(k,g),5);case 5:return v(n,Ck(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=za(n),xa(n,7),v(n,Kk(k.actualName,g),9);case 9:ya(n,
8);break;case 7:za(n);case 8:throw l;}})}
function Vk(a,b,c){c=void 0===c?{}:c;return Uk(a,b,!1,c)}
function Wk(a,b,c){c=void 0===c?{}:c;return Uk(a,b,!0,c)}
function Xk(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return v(e,Sk(),2);if(3!=e.h){c=e.i;if(!c)return e.return();bj(a);d=Tk(a);return v(e,Dk(d.actualName,b),3)}return v(e,Kk(d.actualName,c),0)})}
function Yk(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?v(e,Dk(d.actualName,b),2):v(e,Kk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Zk(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return v(d,Sk(),2);if(3!=d.h){b=d.i;if(!b)return d.return();bj("LogsDatabaseV2");return v(d,Mk(b),3)}c=d.i;return v(d,Yk(c,a,b),0)})}
function $k(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return v(d,Sk(),2);if(3!=d.h){c=d.i;if(!c)return d.return();bj(a);return v(d,Dk(a,b),3)}return v(d,Kk(a,c),0)})}
;function al(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ba=function(){};
this.now=Date.now;this.ea=!1;var b;this.Za=null!=(b=a.Za)?b:100;var c;this.Ya=null!=(c=a.Ya)?c:1;var d;this.Wa=null!=(d=a.Wa)?d:2592E6;var e;this.Va=null!=(e=a.Va)?e:12E4;var f;this.Xa=null!=(f=a.Xa)?f:5E3;var g;this.s=null!=(g=a.s)?g:void 0;this.pa=!!a.pa;var h;this.oa=null!=(h=a.oa)?h:.1;var k;this.ta=null!=(k=a.ta)?k:10;a.handleError&&(this.handleError=a.handleError);a.ba&&(this.ba=a.ba);a.ea&&(this.ea=a.ea);this.A=a.A;this.J=a.J;this.D=a.D;this.G=a.G;this.T=a.T;this.Ea=a.Ea;this.Da=a.Da;this.s&&
(!this.A||this.A("networkless_logging"))&&bl(this)}
function bl(a){a.s&&!a.ea&&(a.h=!0,a.pa&&Math.random()<=a.oa&&a.D.hb(a.s),cl(a),a.G.F()&&a.ja(),a.G.R(a.Ea,a.ja.bind(a)),a.G.R(a.Da,a.Ia.bind(a)))}
m=al.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D.set(d,this.s).then(function(e){d.id=e;c.G.F()&&dl(c,d)}).catch(function(e){dl(c,d);
el(c,e)})}else this.T(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.s&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A&&this.A("nwl_skip_retry")&&(e.skipRetry=c);if(this.G.F()||this.A&&this.A("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return v(k,d.D.set(e,d.s).catch(function(l){el(d,l)}),2);
f(g,h);k.h=0})}}this.T(a,b,e.skipRetry)}else this.D.set(e,this.s).catch(function(g){d.T(a,b,e.skipRetry);
el(d,g)})}else this.T(a,b,this.A&&this.A("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.D.aa(d.id,c.s):e=!0;c.G.S&&c.A&&c.A("vss_network_hint")&&c.G.S(!0);f(g,h)};
this.T(d.url,d.options);this.D.set(d,this.s).then(function(g){d.id=g;e&&c.D.aa(d.id,c.s)}).catch(function(g){el(c,g)})}else this.T(a,b)};
m.ja=function(){var a=this;if(!this.s)throw nj("throttleSend");this.i||(this.i=this.J.L(function(){var b;return x(function(c){if(1==c.h)return v(c,a.D.Na("NEW",a.s),2);if(3!=c.h)return b=c.i,b?v(c,dl(a,b),3):(a.Ia(),c.return());a.i&&(a.i=0,a.ja());c.h=0})},this.Za))};
m.Ia=function(){this.J.Y(this.i);this.i=0};
function dl(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.s)throw c=nj("immediateSend"),c;if(void 0===b.id){e.o(2);break}return v(e,a.D.pb(b.id,a.s),3);case 3:(d=e.i)?b=d:a.ba(Error("The request cannot be found in the database."));case 2:if(fl(a,b,a.Wa)){e.o(4);break}a.ba(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.o(5);break}return v(e,a.D.aa(b.id,a.s),5);case 5:return e.return();case 4:b.skipRetry||(b=gl(a,b));if(!b){e.o(0);break}if(!b.skipRetry||
void 0===b.id){e.o(8);break}return v(e,a.D.aa(b.id,a.s),8);case 8:a.T(b.url,b.options,!!b.skipRetry),e.h=0}})}
function gl(a,b){if(!a.s)throw nj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.h){case 1:g=hl(f);if(!(a.A&&a.A("nwl_consider_error_code")&&g||a.A&&!a.A("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ta)){l.o(2);break}if(!a.G.U){l.o(3);break}return v(l,a.G.U(),3);case 3:if(a.G.F()){l.o(2);break}c(e,f);if(!a.A||!a.A("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.o(6);break}return v(l,a.D.Fa(b.id,a.s,!1),6);case 6:return l.return();case 2:if(a.A&&a.A("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.ta)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.o(8);break}return b.sendCount<a.Ya?v(l,a.D.Fa(b.id,a.s),12):v(l,a.D.aa(b.id,a.s),8);case 12:a.J.L(function(){a.G.F()&&a.ja()},a.Xa);
case 8:c(e,f),l.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.o(2):v(h,a.D.aa(b.id,a.s),2);a.G.S&&a.A&&a.A("vss_network_hint")&&a.G.S(!0);d(e,f);h.h=0})};
return b}
function fl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function cl(a){if(!a.s)throw nj("retryQueuedRequests");a.D.Na("QUEUED",a.s).then(function(b){b&&!fl(a,b,a.Va)?a.J.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.o(2):v(c,a.D.Fa(b.id,a.s),2);cl(a);c.h=0})}):a.G.F()&&a.ja()})}
function el(a,b){a.ab&&!a.G.F()?a.ab(b):a.handleError(b)}
function hl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var il=B("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.ca;L.prototype.clear=L.prototype.clear;C("ytPubsub2Pubsub2Instance",il);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function jl(a,b){Fk.call(this,a,b);this.options=b;bj(a)}
u(jl,Fk);function kl(a,b){var c;return function(){c||(c=new jl(a,b));return c}}
jl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ga?Wk:Vk)(a,b,Object.assign({},c))};
jl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ga?$k:Xk)(this.name,a)};
function ll(a,b){return kl(a,b)}
;var ml;
function nl(){if(ml)return ml();var a={};ml=ll("LogsDatabaseV2",{ga:(a.LogsRequestsStore={xa:2},a),Ga:!1,upgrade:function(b,c,d){c(2)&&ok(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return ml()}
;function ol(a){return Hk(nl(),a)}
function pl(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,ol(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:N("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,qk(d,e),3);f=g.i;c.ub=R();ql(c);return g.return(f)})}
function rl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(l,ol(b),2);if(3!=l.h)return d=l.i,e=N("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,R()],h=IDBKeyRange.bound(f,g),k=void 0,v(l,nk(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(n){return zk(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.W()&&(k=q.W(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.ub=R();ql(c);return l.return(k)})}
function sl(a,b){var c;return x(function(d){if(1==d.h)return v(d,ol(b),2);c=d.i;return d.return(nk(c,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",V(f.h.put(g,void 0)).then(function(){return g})})}))})}
function tl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return v(e,ol(b),2);d=e.i;return e.return(nk(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),V(g.h.put(h,void 0)).then(function(){return h})):U.resolve(void 0)})}))})}
function ul(a,b){var c;return x(function(d){if(1==d.h)return v(d,ol(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function vl(a){var b,c;return x(function(d){if(1==d.h)return v(d,ol(a),2);b=d.i;c=R()-2592E6;return v(d,nk(b,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(e){return wk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.W().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function wl(){x(function(a){return v(a,Zk(),0)})}
function ql(a){if(!P("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var xl={},yl=ll("ServiceWorkerLogsDatabase",{ga:(xl.SWHealthLog={xa:1},xl),Ga:!0,upgrade:function(a,b){b(1)&&ok(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function zl(a){return Hk(yl(),a)}
function Al(a){var b,c;x(function(d){if(1==d.h)return v(d,zl(a),2);b=d.i;c=R()-2592E6;return v(d,nk(b,["SWHealthLog"],{mode:"readwrite",H:!0},function(e){return wk(e.objectStore("SWHealthLog"),{},function(f){if(f.W().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Bl(a){var b;return x(function(c){if(1==c.h)return v(c,zl(a),2);b=c.i;return v(c,b.clear("SWHealthLog"),0)})}
;var Cl={},Dl=0;function El(a){var b=void 0===b?"":b;if(a)if(b)ii(a,void 0,"POST",b);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ii(a,void 0,"GET","");else{b:{try{var c=new $a({url:a});if(c.j&&c.i||c.l){var d=Sb(a.match(Rb)[5]||null);var e=!(!d||!d.endsWith("/aclk")||"1"!==Yb(a,"ri"));break b}}catch(g){}e=!1}if(e){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var f=!0;break b}}catch(g){}f=!1}b=f?!0:!1}else b=!1;b||Fl(a)}}
function Fl(a){var b=new Image,c=""+Dl++;Cl[c]=b;b.onload=b.onerror=function(){delete Cl[c]};
b.src=a}
;function W(){this.h=new Map;this.i=!1}
function Gl(){if(!W.h){var a=B("yt.networkRequestMonitor.instance")||new W;C("yt.networkRequestMonitor.instance",a);W.h=a}return W.h}
W.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
W.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
W.prototype.removeParams=function(a){return a.split("?")[0]};
W.prototype.removeParams=W.prototype.removeParams;W.prototype.isEndpointCFR=W.prototype.isEndpointCFR;W.prototype.requestComplete=W.prototype.requestComplete;W.getInstance=Gl;var Hl;function Il(){Hl||(Hl=new Ei("yt.offline"));return Hl}
function Jl(a){if(P("offline_error_handling")){var b=Il().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Il().set("errors",b,2592E3,!0)}}
function Kl(){if(P("offline_error_handling")){var a=Il().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Zi(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;zh(c)}Il().set("errors",{},2592E3,!0)}}}
;var Ll=Vh("network_polling_interval",3E4);function Z(){J.call(this);var a=this;this.la=0;this.B=this.m=!1;this.i=this.ya();P("use_shared_nsm")?(this.h=Ce(),P("use_shared_nsm_and_keep_yt_online_updated")&&(this.h.R("networkstatus-online",function(){a.i=!0;a.B&&Kl()}),this.h.R("networkstatus-offline",function(){a.i=!1}))):(Ml(this),Nl(this))}
u(Z,J);function Ol(){if(!Z.h){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
m=Z.prototype;m.F=function(){if(P("use_shared_nsm")&&this.h){var a;return null==(a=this.h)?void 0:a.F()}return this.i};
m.S=function(a){if(P("use_shared_nsm")&&this.h){var b;null!=(b=this.h)&&(b.h=a)}else a!==this.i&&(this.i=a)};
m.qb=function(a){!P("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.la||Pl(this))};
m.ya=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.jb=function(){this.B=!0};
m.R=function(a,b){return P("use_shared_nsm")&&this.h?this.h.R(a,b):J.prototype.R.call(this,a,b)};
function Nl(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return v(b,a.U(),2);a.B&&Kl();b.h=0})})}
function Ml(a){window.addEventListener("offline",function(){return x(function(b){return v(b,a.U(),0)})})}
function Pl(a){a.la=Ni(function(){return x(function(b){if(1==b.h)return a.i?a.ya()||!a.m?b.o(3):v(b,a.U(),3):v(b,a.U(),3);Pl(a);b.h=0})},Ll)}
m.U=function(a){var b=this;if(P("use_shared_nsm")&&this.h){var c=Ae(this.h,a);c.then(function(d){P("use_cfr_monitor")&&Gl().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return x(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,xa(k,2,3),e&&(b.O=De.L(function(){e.abort()},a||2E4)),v(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:Aa(k);P("use_cfr_monitor")&&Gl().requestComplete("generate_204",h);b.u=void 0;b.O&&De.Y(b.O);h!==b.i&&(b.i=h,b.i&&b.m?xe(b,"ytnetworkstatus-online"):b.m&&xe(b,"ytnetworkstatus-offline"));d(h);Ba(k);break;case 2:za(k),h=!1,k.o(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.U;Z.prototype.listen=Z.prototype.R;Z.prototype.enableErrorFlushing=Z.prototype.jb;Z.prototype.getWindowStatus=Z.prototype.ya;Z.prototype.monitorNetworkStatusChange=Z.prototype.qb;Z.prototype.networkStatusHint=Z.prototype.S;Z.prototype.isNetworkAvailable=Z.prototype.F;Z.getInstance=Ol;function Ql(a){a=void 0===a?{}:a;J.call(this);var b=this;this.i=this.O=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";P("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.h=Ol();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.h);c&&c(a.La);a.Sa&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.h))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.h))a.va?(this.va=a.va,c(this.u,
function(){Rl(b,"publicytnetworkstatus-online")}),c(this.m,function(){Rl(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){xe(b,"publicytnetworkstatus-online")}),c(this.m,function(){xe(b,"publicytnetworkstatus-offline")}))}
u(Ql,J);Ql.prototype.F=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.h)():!0};
Ql.prototype.S=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.h);b&&b(a)};
Ql.prototype.U=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.h);return P("skip_network_check_if_cfr")&&Gl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.S((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.F())})):c?d.return(c(a)):d.return(!0)})};
function Rl(a,b){a.va?a.i?(De.Y(a.O),a.O=De.L(function(){a.B!==b&&(xe(a,b),a.B=b,a.i=R())},a.va-(R()-a.i))):(xe(a,b),a.B=b,a.i=R()):xe(a,b)}
;var Sl;function Tl(){al.call(this,{D:{hb:vl,aa:ul,Na:rl,pb:sl,Fa:tl,set:pl},G:Ul(),handleError:zh,ba:Ah,T:Vl,now:R,ab:Jl,J:Ri(),Ea:"publicytnetworkstatus-online",Da:"publicytnetworkstatus-offline",pa:!0,oa:.1,ta:Vh("potential_esf_error_limit",10),A:P,ea:!($i()&&(P("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==Tb(document.location.toString()):1))});this.j=new $f;P("networkless_immediately_drop_all_requests")&&wl();$k("LogsDatabaseV2")}
u(Tl,al);function Wl(){var a=B("yt.networklessRequestController.instance");a||(a=new Tl,C("yt.networklessRequestController.instance",a),P("networkless_logging")&&Sk().then(function(b){a.s=b;bl(a);a.j.resolve();a.pa&&Math.random()<=a.oa&&a.s&&Al(a.s);P("networkless_immediately_drop_sw_health_store")&&Xl(a)}));
return a}
Tl.prototype.writeThenSend=function(a,b){b||(b={});$i()||(this.h=!1);al.prototype.writeThenSend.call(this,a,b)};
Tl.prototype.sendThenWrite=function(a,b,c){b||(b={});$i()||(this.h=!1);al.prototype.sendThenWrite.call(this,a,b,c)};
Tl.prototype.sendAndWrite=function(a,b){b||(b={});$i()||(this.h=!1);al.prototype.sendAndWrite.call(this,a,b)};
Tl.prototype.awaitInitialization=function(){return this.j.promise};
function Xl(a){var b;x(function(c){if(!a.s)throw b=nj("clearSWHealthLogsDb"),b;return c.return(Bl(a.s).catch(function(d){a.handleError(d)}))})}
function Vl(a,b,c){P("use_cfr_monitor")&&Yl(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(R());c&&0===Object.keys(b).length?El(a):fi(a,b)}
function Ul(){Sl||(Sl=new Ql({Sa:!0,La:!0}));return Sl}
function Yl(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Gl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Gl().requestComplete(a,!0);d(e,f)}}
;var Zl=0,$l=0,am,bm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:$l};C("ytNetworklessLoggingInitializationOptions",bm);function cm(a,b){function c(d){var e=dm().F();if(!em()||!d||e&&P("vss_networkless_bypass_write"))fm(a,b);else{var f={url:a,options:b,timestamp:R(),status:"NEW",sendCount:0};pl(f,d).then(function(g){f.id=g;dm().F()&&gm(f)}).catch(function(g){gm(f);
dm().F()?zh(g):Jl(g)})}}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Sk().then(function(d){c(d)}):c(Rk())}
function hm(a,b){function c(d){if(em()&&d){var e={url:a,options:b,timestamp:R(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){P("use_cfr_monitor")&&Gl().requestComplete(e.url,!0);void 0!==e.id?ul(e.id,d):f=!0;P("vss_network_hint")&&dm().S(!0);g(k,l)};
if(P("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Gl().requestComplete(e.url,!1);h(k,l)}}fm(e.url,e.options);
pl(e,d).then(function(k){e.id=k;f&&ul(e.id,d)}).catch(function(k){dm().F()?zh(k):Jl(k)})}else fm(a,b)}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Sk().then(function(d){c(d)}):c(Rk())}
function im(){var a=Rk();if(!a)throw nj("throttleSend");Zl||(Zl=De.L(function(){var b;return x(function(c){if(1==c.h)return v(c,rl("NEW",a),2);if(3!=c.h)return b=c.i,b?v(c,gm(b),3):(De.Y(Zl),Zl=0,c.return());Zl&&(Zl=0,im());c.h=0})},100))}
function gm(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=Rk();if(!b)throw c=nj("immediateSend"),c;if(void 0===a.id){e.o(2);break}return v(e,sl(a.id,b),3);case 3:(d=e.i)?a=d:Ah(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=R()-f)){e.o(4);break}Ah(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.o(5);break}return v(e,ul(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=jm(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(R());a=f;if(!a){e.o(0);break}if(!a.skipRetry||void 0===a.id){e.o(8);break}return v(e,ul(a.id,b),8);case 8:fm(a.url,a.options,!!a.skipRetry),e.h=0}})}
function jm(a){var b=Rk();if(!b)throw nj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.h){case 1:P("use_cfr_monitor")&&Gl().requestComplete(a.url,!1);g=hl(f);if(!(P("nwl_consider_error_code")&&g||!P("nwl_consider_error_code")&&km()<=Vh("potential_esf_error_limit",10))){l.o(2);break}if(P("skip_checking_network_on_cfr_failure")&&(!P("skip_checking_network_on_cfr_failure")||Gl().isEndpointCFR(a.url))){l.o(3);break}return v(l,dm().U(),3);case 3:if(dm().F()){l.o(2);break}c(e,f);if(!P("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.o(6);break}return v(l,tl(a.id,b,!1),6);case 6:return l.return();case 2:if(P("nwl_consider_error_code")&&!g&&km()>Vh("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&bm.potentialEsfErrorCounter++;$l++;if(void 0===(null==(k=a)?void 0:k.id)){l.o(8);break}return 1>a.sendCount?v(l,tl(a.id,b),12):v(l,ul(a.id,b),8);case 12:De.L(function(){dm().F()&&im()},5E3);
case 8:c(e,f),l.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return P("use_cfr_monitor")&&Gl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.o(2):v(h,ul(a.id,b),2);P("vss_network_hint")&&dm().S(!0);d(e,f);h.h=0})};
return a}
function dm(){if(P("use_new_nwl"))return Ul();am||(am=new Ql({Sa:!0,La:!0}));return am}
function fm(a,b,c){c&&0===Object.keys(b).length?El(a):fi(a,b)}
function em(){return B("ytNetworklessLoggingInitializationOptions")?bm.isNwlInitialized:!1}
function km(){return B("ytNetworklessLoggingInitializationOptions")?bm.potentialEsfErrorCounter:$l}
;function lm(a){var b=this;this.config_=null;a?this.config_=a:ui()&&(this.config_=vi());Ni(function(){Ki(b)},5E3)}
lm.prototype.isReady=function(){!this.config_&&ui()&&(this.config_=vi());return!!this.config_};
function Li(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Ii(b,c,l,k)),z)){var F=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){Ji(z);F(M,O)};
c.onFetchSuccess=function(M,O){Ji(z);K(M,O)}}try{y&&d.retry&&!d.Ta.bypassNetworkless?(g.method="POST",d.Ta.writeThenSend?P("use_new_nwl_wts")?Wl().writeThenSend(p,g):cm(p,g):P("use_new_nwl_saw")?Wl().sendAndWrite(p,g):hm(p,g)):(g.method="POST",g.postParams||(g.postParams={}),fi(p,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Ji(z),z=0),Ah(Error("An extension is blocking network request."));
else throw M;}z&&Ni(function(){Ki(a)},5E3)}
!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ah(new Zi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Zi("innertube xhrclient not ready",b,c,d);zh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.mb)&&(h=f);var k=a.config_.ob||!1,l=Ci(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},w=a.config_.nb&&f;w=w&&f.startsWith("Bearer");w||(q.key=a.config_.innertubeApiKey);var p=Sh(""+h+n,q||{},!0);P("use_new_nwl")&&Wl().h||!P("use_new_nwl")&&
em()?Qk().then(function(y){e(y)}):e(!1)}
;var mm={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},nm={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function om(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var pm=A.ytPubsubPubsubInstance||new L,qm=A.ytPubsubPubsubSubscribedKeys||{},rm=A.ytPubsubPubsubTopicToKeys||{},sm=A.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.ca;L.prototype.clear=L.prototype.clear;C("ytPubsubPubsubInstance",pm);C("ytPubsubPubsubTopicToKeys",rm);C("ytPubsubPubsubIsSynchronous",sm);C("ytPubsubPubsubSubscribedKeys",qm);var tm=Vh("initial_gel_batch_timeout",2E3),um=Math.pow(2,16)-1,vm=void 0;function wm(){this.j=this.h=this.i=0}
var xm=new wm,ym=new wm,zm=!0,Am=A.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",Am);var Bm=A.ytLoggingTransportGELProtoQueue_||new Map;C("ytLoggingTransportGELProtoQueue_",Bm);var Cm=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Cm);var Dm=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Dm);
function Em(a,b){if("log_event"===a.endpoint){var c=Fm(a),d=Am.get(c)||[];Am.set(c,d);d.push(a.payload);Gm(b,d,c)}}
function Hm(a,b){if("log_event"===a.endpoint){var c=Fm(a,!0),d=Bm.get(c)||[];Bm.set(c,d);a=a.payload.toJSON();d.push(a);Gm(b,d,c,!0)}}
function Gm(a,b,c,d){d=void 0===d?!1:d;a&&(vm=new a);a=Vh("tvhtml5_logging_max_batch")||Vh("web_logging_max_batch")||100;var e=R(),f=d?ym.j:xm.j;b.length>=a?Im({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Jm(d),d?ym.j=e:xm.j=e)}
function Km(a,b){if("log_event"===a.endpoint){var c=Fm(a),d=new Map;d.set(c,[a.payload]);b&&(vm=new b);return new ag(function(e){vm&&vm.isReady()?Lm(d,e,{bypassNetworkless:!0},!0):e()})}}
function Mm(a,b){if("log_event"===a.endpoint){var c=Fm(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(vm=new b);return new ag(function(e){vm&&vm.isReady()?Nm(d,e,{bypassNetworkless:!0},!0):e()})}}
function Fm(a,b){var c="";if(a.da)c="visitorOnlyApprovedKey";else if(a.P){if(void 0===b?0:b){b=a.P.token;c=a.P;var d=new lh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Vc(d,2,mh,c.playlistId);Dm[b]=d}else b=a.P,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Cm[a.P.token]=c;c=a.P.token}return c}
function Im(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new ag(function(d){c?(window.clearTimeout(ym.i),window.clearTimeout(ym.h),ym.h=0):(window.clearTimeout(xm.i),window.clearTimeout(xm.h),xm.h=0);if(vm&&vm.isReady())if(void 0!==b)if(c){var e=new Map,f=Bm.get(b)||[];e.set(b,f);Nm(e,d,a);Bm.delete(b)}else e=new Map,f=Am.get(b)||[],e.set(b,f),Lm(e,d,a),Am.delete(b);else c?(Nm(Bm,d,a),Bm.clear()):(Lm(Am,d,a),Am.clear());else Jm(c),d()})}
function Jm(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!xm.h||a&&!ym.h)){var b=Jh(function(){Im({writeThenSend:!0},void 0,a)},6E4);
a?ym.h=b:xm.h=b}window.clearTimeout(a?ym.i:xm.i);b=N("LOGGING_BATCH_TIMEOUT",Vh("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&zm&&(b=tm);b=Jh(function(){Im({writeThenSend:!0},void 0,a)},b);
a?ym.i=b:xm.i=b}
function Lm(a,b,c,d){var e=vm;c=void 0===c?{}:c;var f=Math.round(R()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=sb({context:wi(e.config_||vi())});k.events=l;(l=Cm[h])&&Om(k,h,l);delete Cm[h];h="visitorOnlyApprovedKey"===h;Pm(k,f,h);Qm(c);Li(e,"log_event",k,Rm(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
zm=!1}}
function Nm(a,b,c,d){var e=vm;c=void 0===c?{}:c;var f=Math.round(R()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new nh;var n=Bi(e.config_||vi());H(k,1,n);l=Sm(l);for(n=0;n<l.length;n++)$c(k,3,ih,l[n]);(l=Dm[h])&&Tm(k,h,l);delete Dm[h];h="visitorOnlyApprovedKey"===h;Um(k,f,h);Qm(c);k=dd(k);h=Rm(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Li(e,"log_event","",h);zm=!1}}
function Qm(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function Rm(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Ta:a,da:b,Ob:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Pm(a,b,c){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID"))&&(c=Vm(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Um(a,b,c){G(a,2,b);if(!c&&(b=N("EVENT_ID"))){c=Vm();var d=new kh;G(d,1,b);G(d,2,c);H(a,5,d)}}
function Vm(){var a=N("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*um/2));a++;a>um&&(a=1);th("BATCH_CLIENT_COUNTER",a);return a}
function Om(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Tm(a,b,c){if(Tc(c,1===Wc(c,mh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=Xc(a,Tg,1)||new Tg;c=Xc(a,Rg,3)||new Rg;var e=new Qg;e.setToken(b);G(e,1,d);$c(c,12,Qg,e);H(a,3,c)}
function Sm(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new ih(a[c]))}catch(d){zh(new Zi("Transport failed to deserialize "+String(a[c])))}return b}
;var Wm=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Wm);function Xm(a){Wm[a]=a in Wm?Wm[a]+1:0;return Wm[a]}
;function Ym(a,b){var c=void 0===c?{}:c;var d=lm;N("ytLoggingEventsDefaultDisabled",!1)&&lm==lm&&(d=null);a:{c=void 0===c?{}:c;if(P("lr_drop_other_and_business_payloads")){if(nm[a]||mm[a])break a}else if(P("lr_drop_other_payloads")&&nm[a])break a;var e={},f=Math.round(c.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=om();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&c.ia&&(a=e.context,b=c.ia,b={index:Xm(b),groupKey:b},a.sequence=
b,c.kb&&delete Wm[c.ia]);(c.sb?Km:Em)({endpoint:"log_event",payload:e,P:c.P,da:c.da},d)}}
;var Zm=[{Ca:function(a){return"Cannot read property '"+a.key+"'"},
sa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ca:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ca:function(a){return a.key+" is not defined"},
sa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var an={X:[],V:[{fb:$m,weight:500}]};function $m(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function bn(){this.V=[];this.X=[]}
var cn;function dn(){if(!cn){var a=cn=new bn;a.X.length=0;a.V.length=0;an.X&&a.X.push.apply(a.X,an.X);an.V&&a.V.push.apply(a.V,an.V)}return cn}
;var en=new L;function fn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=gn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=gn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=gn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function gn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function hn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=jn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=fn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?jn(e+".ve",f,g,h):0;d+=g;d+=jn(e,a[e],b,c);if(500<d)break}}else c[b]=kn(a),d+=c[b].length;else c[b]=kn(a),d+=c[b].length;return d}
function jn(a,b,c,d){c+="."+a;a=kn(b);d[c]=a;return c.length+a.length}
function kn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var ln=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",ln);function mn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&lm===lm&&(c=!0);c=c?null:lm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||R());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=om();d=new hh;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&b.ia){e=b.ia;var f=Xm(e),g=new gh;G(g,2,f);G(g,1,e);H(d,3,g);b.kb&&delete ln[b.ia]}H(a,33,d);(b.sb?Mm:Hm)({endpoint:"log_event",payload:a,P:b.P,da:b.da},c)}
;var nn=new Set,on=0,pn=0,qn=0,rn=[],sn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function tn(){for(var a=t(sn),b=a.next();!b.done;b=a.next()){var c=Jb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function un(){var a;return x(function(b){return(a=Xe())?b.return(a.then(function(c){c=dd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return xc(d,3)})):b.return(Promise.resolve(null))})}
;var vn={};function wn(a){return vn[a]||(vn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var xn={},yn=[],rg=new L,zn={};function An(){for(var a=t(yn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Bn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[wn(b)]:a.getAttribute("data-"+b):null;return c}
function Cn(a){rg.ca.apply(rg,arguments)}
;function Dn(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function En(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Fn(a,b,c){Gn||(Gn={},Ih(window,"message",function(d){a:{if(d.origin===En(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Gn[e.id])d.u=!0,d.u&&(D(d.v,d.sendMessage,d),d.v.length=0),d.Ha(e)}e=void 0}return e}));
Gn[c]=b}
var Gn=null;var Hn=window;function In(a,b,c){this.m=this.h=this.i=null;this.j=0;this.u=!1;this.v=[];this.l=null;this.I={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.B=c;this.setup(a,b)}
m=In.prototype;m.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
m.getIframe=function(){return this.h};
m.Ha=function(a){Jn(this,a.event,a)};
m.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Kn(this,a);return this};
function Ln(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&Kn(a,c)}}
m.destroy=function(){this.h&&this.h.id&&(xn[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Gn&&(Gn[this.id]=null);this.i=null;a=this.h;for(var c in lb)lb[c][0]==a&&Gh(c);this.m=this.h=null};
m.Ka=function(){return{}};
function Mn(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.v.push(b)}
function Jn(a,b,c){a.l.l||(c={target:a,data:c},a.l.ca(b,c),Cn(a.B+"."+b,c))}
function Nn(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+En(a.i,"title"));(b=En(a.i,"width"))&&c.setAttribute("width",b.toString());(b=En(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ka();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=Yb(window.location.href,k);null!==l&&(g[k]=l)});
Hn.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(Hn.yt_embedsTokenValue),delete Hn.yt_embedsTokenValue);var h=""+En(a.i,"host")+("/embed/"+En(a.i,"videoId"))+"?"+Wb(g);Hn.yt_embedsEnableUaChProbe?un().then(function(k){var l=new URL(h),n=Number(l.searchParams.get("reloads"));isNaN(n)&&(n=0);l.searchParams.set("reloads",(n+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Ed(l.href).toString();pd(c,Fd(k));return k}):
Hn.yt_embedsEnableIframeSrcWithIntent?pd(c,Fd(h)):c.src=h;
return c}
m.Ua=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function On(a){Fn(a.i,a,a.id);a.j=Kh(a.Ua.bind(a));Ih(a.h,"load",function(){window.clearInterval(a.j);a.j=Kh(a.Ua.bind(a))})}
m.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Ub(a.src):"https://www.youtube.com"),this.i=new Dn(b),c||(b=Nn(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Qa(this.h)),xn[this.h.id]=this,window.postMessage){this.l=new L;On(this);b=En(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in zn)zn.hasOwnProperty(e)&&
Ln(this,e)}};
function Kn(a,b){a.I[b]||(a.I[b]=!0,Mn(a,"addEventListener",[b]))}
m.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=Zf(a),c=[Ub(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(Nb){if(Nb.name&&"SyntaxError"===Nb.name){if(!(Nb.message&&0<Nb.message.indexOf("target origin ''"))){var e=void 0,f=Nb;e=void 0===e?{}:e;e.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":h;if(f){f.hasOwnProperty("level")&&
f.level&&(h=f.level);if(P("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=on)){var n=void 0,q=void 0,w=f,p=g,y=Wd(w),z=y.message||"Unknown Error",F=y.name||"UnknownError",K=y.stack||w.i||"Not available";
if(K.startsWith(F+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=y.lineNumber||"Not available",fb=y.fileName||"Not available",ic=K,ua=0;if(w.hasOwnProperty("args")&&w.args&&w.args.length)for(var ma=0;ma<w.args.length&&!(ua=hn(w.args[ma],"params."+ma,p,ua),500<=ua);ma++);else if(w.hasOwnProperty("params")&&w.params){var Y=w.params;if("object"===typeof w.params)for(q in Y){if(Y[q]){var ba="params."+q,ca=kn(Y[q]);p[ba]=ca;ua+=ba.length+ca.length;if(500<ua)break}}else p.params=kn(Y)}if(rn.length)for(var X=
0;X<rn.length&&!(ua=hn(rn[X],"params.context."+X,p,ua),500<=ua);X++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var S={message:z,name:F,lineNumber:O,fileName:fb,stack:ic,params:p,sampleWeight:1},xj=Number(w.columnNumber);isNaN(xj)||(S.lineNumber=S.lineNumber+":"+xj);if("IGNORED"===w.level)n=0;else a:{for(var yj=dn(),zj=t(yj.X),lf=zj.next();!lf.done;lf=zj.next()){var Aj=lf.value;if(S.message&&S.message.match(Aj.Pb)){n=Aj.weight;break a}}for(var Bj=t(yj.V),
mf=Bj.next();!mf.done;mf=Bj.next()){var Cj=mf.value;if(Cj.fb(S)){n=Cj.weight;break a}}n=1}S.sampleWeight=n;for(var Dj=t(Zm),nf=Dj.next();!nf.done;nf=Dj.next()){var of=nf.value;if(of.sa[S.name])for(var Ej=t(of.sa[S.name]),pf=Ej.next();!pf.done;pf=Ej.next()){var Fj=pf.value,ud=S.message.match(Fj.regexp);if(ud){S.params["params.error.original"]=ud[0];for(var qf=Fj.groups,Gj={},Ob=0;Ob<qf.length;Ob++)Gj[qf[Ob]]=ud[Ob+1],S.params["params.error."+qf[Ob]]=ud[Ob+1];S.message=of.Ca(Gj);break}}}S.params||(S.params=
{});var Hj=dn();S.params["params.errorServiceSignature"]="msg="+Hj.X.length+"&cb="+Hj.V.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var qa=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(qa);if(0!==qa.sampleWeight&&!nn.has(qa.message)){if("ERROR"===h){en.ca("handleError",qa);if(P("record_app_crashed_web")&&
0===qn&&1===qa.sampleWeight)if(qn++,P("errors_via_jspb")){var rf=new fh;G(rf,1,1);if(!P("report_client_error_with_app_crash_ks")){var Ij=new ah;G(Ij,1,qa.message);var Jj=new bh;H(Jj,3,Ij);var Kj=new ch;H(Kj,5,Jj);var Lj=new dh;H(Lj,9,Kj);H(rf,4,Lj)}var Un=rf,Mj=new ih;Zc(Mj,20,jh,Un);mn(Mj)}else{var Nj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(Nj.systemHealth={crashData:{clientError:{logMessage:{message:qa.message}}}});Ym("appCrashed",Nj)}pn++}else"WARNING"===
h&&en.ca("handleWarning",qa);if(P("kevlar_gel_error_routing"))a:{var sf=void 0,tf=void 0,sc=h,Q=qa;if(P("errors_via_jspb")){if(tn())tf=void 0;else{var Pb=new Yg;G(Pb,1,Q.stack);Q.fileName&&G(Pb,4,Q.fileName);var Ga=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ga.length&&(1!==Ga.length||isNaN(Number(Ga[0]))?2!==Ga.length||isNaN(Number(Ga[0]))||isNaN(Number(Ga[1]))||(G(Pb,2,Number(Ga[0])),G(Pb,3,Number(Ga[1]))):G(Pb,2,Number(Ga[0])));var mb=new ah;G(mb,1,Q.message);G(mb,3,Q.name);
G(mb,6,Q.sampleWeight);"ERROR"===sc?G(mb,2,2):"WARNING"===sc?G(mb,2,1):G(mb,2,0);var uf=new Zg;G(uf,1,!0);Zc(uf,3,$g,Pb);var nb=new Vg;G(nb,3,window.location.href);for(var Oj=N("FEXP_EXPERIMENTS",[]),vf=0;vf<Oj.length;vf++){var Pj=nb,Vn=Oj[vf];Jc(Pj);Uc(Pj,5).push(Vn)}var wf=uh();if(!vh()&&wf)for(var Qj=t(Object.keys(wf)),ob=Qj.next();!ob.done;ob=Qj.next()){var Rj=ob.value,xf=new Xg;G(xf,1,Rj);xf.setValue(String(wf[Rj]));$c(nb,4,Xg,xf)}var yf=Q.params;if(yf){var Sj=t(Object.keys(yf));for(ob=Sj.next();!ob.done;ob=
Sj.next()){var Tj=ob.value,zf=new Xg;G(zf,1,"client."+Tj);zf.setValue(String(yf[Tj]));$c(nb,4,Xg,zf)}}var Uj=N("SERVER_NAME"),Vj=N("SERVER_VERSION");if(Uj&&Vj){var Af=new Xg;G(Af,1,"server.name");Af.setValue(Uj);$c(nb,4,Xg,Af);var Bf=new Xg;G(Bf,1,"server.version");Bf.setValue(Vj);$c(nb,4,Xg,Bf)}var vd=new bh;H(vd,1,nb);H(vd,2,uf);H(vd,3,mb);tf=vd}var Wj=tf;if(!Wj)break a;var Xj=new ih;Zc(Xj,163,jh,Wj);mn(Xj)}else{if(tn())sf=void 0;else{var tc={stackTrace:Q.stack};Q.fileName&&(tc.filename=Q.fileName);
var Ha=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ha.length&&(1!==Ha.length||isNaN(Number(Ha[0]))?2!==Ha.length||isNaN(Number(Ha[0]))||isNaN(Number(Ha[1]))||(tc.lineNumber=Number(Ha[0]),tc.columnNumber=Number(Ha[1])):tc.lineNumber=Number(Ha[0]));var Cf={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===sc?Cf.level="ERROR_LEVEL_ERROR":"WARNING"===sc&&(Cf.level="ERROR_LEVEL_WARNNING");var Wn={isObfuscated:!0,browserStackInfo:tc},
Qb={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(Qb.experimentIds=N("FEXP_EXPERIMENTS"));var Df=uh();if(!vh()&&Df)for(var Yj=t(Object.keys(Df)),pb=Yj.next();!pb.done;pb=Yj.next()){var Zj=pb.value;Qb.kvPairs.push({key:Zj,value:String(Df[Zj])})}var Ef=Q.params;if(Ef){var ak=t(Object.keys(Ef));for(pb=ak.next();!pb.done;pb=ak.next()){var bk=pb.value;Qb.kvPairs.push({key:"client."+bk,value:String(Ef[bk])})}}var ck=N("SERVER_NAME"),dk=N("SERVER_VERSION");ck&&dk&&(Qb.kvPairs.push({key:"server.name",
value:ck}),Qb.kvPairs.push({key:"server.version",value:dk}));sf={errorMetadata:Qb,stackTrace:Wn,logMessage:Cf}}var ek=sf;if(!ek)break a;Ym("clientError",ek)}("ERROR"===sc||P("errors_flush_gel_always_killswitch"))&&Im(void 0,void 0,!1)}if(!P("suppress_error_204_logging")){var qb=qa,uc=qb.params||{},Ua={urlParams:{a:"logerror",t:"jserror",type:qb.name,msg:qb.message.substr(0,250),line:qb.lineNumber,level:h,"client.name":uc.name},postParams:{url:N("PAGE_NAME",window.location.href),file:qb.fileName},
method:"POST"};uc.version&&(Ua["client.version"]=uc.version);if(Ua.postParams){qb.stack&&(Ua.postParams.stack=qb.stack);for(var fk=t(Object.keys(uc)),Ff=fk.next();!Ff.done;Ff=fk.next()){var gk=Ff.value;Ua.postParams["client."+gk]=uc[gk]}var Gf=uh();if(Gf)for(var hk=t(Object.keys(Gf)),Hf=hk.next();!Hf.done;Hf=hk.next()){var ik=Hf.value;Ua.postParams[ik]=Gf[ik]}var jk=N("SERVER_NAME"),kk=N("SERVER_VERSION");jk&&kk&&(Ua.postParams["server.name"]=jk,Ua.postParams["server.version"]=kk)}fi(N("ECATCHER_REPORT_HOST",
"")+"/error_204",Ua)}try{nn.add(qa.message)}catch(ao){}on++}}}}}else throw Nb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Pn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Qn(a){return 0===a.search("get")||0===a.search("is")}
;function Rn(a,b){In.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.M={};this.playerInfo={}}
u(Rn,In);m=Rn.prototype;m.Ka=function(){var a=En(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=En(this.i,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
m.Ha=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.M[c]=a[c]);break;case "infoDelivery":Sn(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.j),this.playerInfo={},this.M={},Tn(this,a.apiInterface),Sn(this,a));break;default:Jn(this,b,a)}};
function Sn(a,b){if(Pa(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Tn(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Pn(c)?this[c]=function(){this.playerInfo={};
this.M={};Mn(this,c,arguments);return this}:Qn(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Mn(this,c,arguments);
return this})},a)}
m.getVideoEmbedCode=function(){var a=En(this.i,"host")+("/embed/"+En(this.i,"videoId")),b=Number(En(this.i,"width")),c=Number(En(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
m.getOptions=function(a){return this.M.namespaces?a?this.M[a]?this.M[a].options||[]:[]:this.M.namespaces||[]:[]};
m.getOption=function(a,b){if(this.M.namespaces&&a&&b&&this.M[a])return this.M[a][b]};
function Xn(a){if("iframe"!==a.tagName.toLowerCase()){var b=Bn(a,"videoid");b&&(b={videoId:b,width:Bn(a,"width"),height:Bn(a,"height")},new Rn(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return xn[a]});
C("YT.scan",An);C("YT.subscribe",function(a,b,c){rg.subscribe(a,b,c);zn[a]=!0;for(var d in xn)xn.hasOwnProperty(d)&&Ln(xn[d],a)});
C("YT.unsubscribe",function(a,b,c){qg(a,b,c)});
C("YT.Player",Rn);In.prototype.destroy=In.prototype.destroy;In.prototype.setSize=In.prototype.setSize;In.prototype.getIframe=In.prototype.getIframe;In.prototype.addEventListener=In.prototype.addEventListener;Rn.prototype.getVideoEmbedCode=Rn.prototype.getVideoEmbedCode;Rn.prototype.getOptions=Rn.prototype.getOptions;Rn.prototype.getOption=Rn.prototype.getOption;
yn.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);D(gb(a,b),Xn)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||An();var Yn=A.onYTReady;Yn&&Yn();var Zn=A.onYouTubeIframeAPIReady;Zn&&Zn();var $n=A.onYouTubePlayerAPIReady;$n&&$n();}).call(this);
