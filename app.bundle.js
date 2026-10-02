(()=>{var xf=Object.create;var oh=Object.defineProperty;var Mf=Object.getOwnPropertyDescriptor;var bf=Object.getOwnPropertyNames;var Sf=Object.getPrototypeOf,wf=Object.prototype.hasOwnProperty;var Ef=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Tf=(s,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of bf(t))!wf.call(s,o)&&o!==e&&oh(s,o,{get:()=>t[o],enumerable:!(i=Mf(t,o))||i.enumerable});return s};var Af=(s,t,e)=>(e=s!=null?xf(Sf(s)):{},Tf(t||!s||!s.__esModule?oh(e,"default",{value:s,enumerable:!0}):e,s));var fd=Ef((ra,dd)=>{(function(s,t){typeof ra=="object"&&typeof dd<"u"?t(ra):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis<"u"?globalThis:s||self,t(s.leaflet={}))})(ra,function(s){"use strict";var t="1.9.4";function e(n){var r,l,u,g;for(l=1,u=arguments.length;l<u;l++){g=arguments[l];for(r in g)n[r]=g[r]}return n}var i=Object.create||function(){function n(){}return function(r){return n.prototype=r,new n}}();function o(n,r){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var u=l.call(arguments,2);return function(){return n.apply(r,u.length?u.concat(l.call(arguments)):arguments)}}var a=0;function h(n){return"_leaflet_id"in n||(n._leaflet_id=++a),n._leaflet_id}function c(n,r,l){var u,g,M,D;return D=function(){u=!1,g&&(M.apply(l,g),g=!1)},M=function(){u?g=arguments:(n.apply(l,arguments),setTimeout(D,r),u=!0)},M}function d(n,r,l){var u=r[1],g=r[0],M=u-g;return n===u&&l?n:((n-g)%M+M)%M+g}function f(){return!1}function p(n,r){if(r===!1)return n;var l=Math.pow(10,r===void 0?6:r);return Math.round(n*l)/l}function _(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function v(n){return _(n).split(/\s+/)}function x(n,r){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?i(n.options):{});for(var l in r)n.options[l]=r[l];return n.options}function b(n,r,l){var u=[];for(var g in n)u.push(encodeURIComponent(l?g.toUpperCase():g)+"="+encodeURIComponent(n[g]));return(!r||r.indexOf("?")===-1?"?":"&")+u.join("&")}var S=/\{ *([\w_ -]+) *\}/g;function y(n,r){return n.replace(S,function(l,u){var g=r[u];if(g===void 0)throw new Error("No value provided for variable "+l);return typeof g=="function"&&(g=g(r)),g})}var m=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function P(n,r){for(var l=0;l<n.length;l++)if(n[l]===r)return l;return-1}var E="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function N(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var k=0;function U(n){var r=+new Date,l=Math.max(0,16-(r-k));return k=r+l,window.setTimeout(n,l)}var O=window.requestAnimationFrame||N("RequestAnimationFrame")||U,rt=window.cancelAnimationFrame||N("CancelAnimationFrame")||N("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function A(n,r,l){if(l&&O===U)n.call(r);else return O.call(window,o(n,r))}function R(n){n&&rt.call(window,n)}var et={__proto__:null,extend:e,create:i,bind:o,get lastId(){return a},stamp:h,throttle:c,wrapNum:d,falseFn:f,formatNum:p,trim:_,splitWords:v,setOptions:x,getParamString:b,template:y,isArray:m,indexOf:P,emptyImageUrl:E,requestFn:O,cancelFn:rt,requestAnimFrame:A,cancelAnimFrame:R};function st(){}st.extend=function(n){var r=function(){x(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=r.__super__=this.prototype,u=i(l);u.constructor=r,r.prototype=u;for(var g in this)Object.prototype.hasOwnProperty.call(this,g)&&g!=="prototype"&&g!=="__super__"&&(r[g]=this[g]);return n.statics&&e(r,n.statics),n.includes&&(Mt(n.includes),e.apply(null,[u].concat(n.includes))),e(u,n),delete u.statics,delete u.includes,u.options&&(u.options=l.options?i(l.options):{},e(u.options,n.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var M=0,D=u._initHooks.length;M<D;M++)u._initHooks[M].call(this)}},r},st.include=function(n){var r=this.prototype.options;return e(this.prototype,n),n.options&&(this.prototype.options=r,this.mergeOptions(n.options)),this},st.mergeOptions=function(n){return e(this.prototype.options,n),this},st.addInitHook=function(n){var r=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function Mt(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=m(n)?n:[n];for(var r=0;r<n.length;r++)n[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var B={on:function(n,r,l){if(typeof n=="object")for(var u in n)this._on(u,n[u],r);else{n=v(n);for(var g=0,M=n.length;g<M;g++)this._on(n[g],r,l)}return this},off:function(n,r,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var u in n)this._off(u,n[u],r);else{n=v(n);for(var g=arguments.length===1,M=0,D=n.length;M<D;M++)g?this._off(n[M]):this._off(n[M],r,l)}return this},_on:function(n,r,l,u){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(n,r,l)===!1){l===this&&(l=void 0);var g={fn:r,ctx:l};u&&(g.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(g)}},_off:function(n,r,l){var u,g,M;if(this._events&&(u=this._events[n],!!u)){if(arguments.length===1){if(this._firingCount)for(g=0,M=u.length;g<M;g++)u[g].fn=f;delete this._events[n];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var D=this._listens(n,r,l);if(D!==!1){var G=u[D];this._firingCount&&(G.fn=f,this._events[n]=u=u.slice()),u.splice(D,1)}}},fire:function(n,r,l){if(!this.listens(n,l))return this;var u=e({},r,{type:n,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var g=this._events[n];if(g){this._firingCount=this._firingCount+1||1;for(var M=0,D=g.length;M<D;M++){var G=g[M],J=G.fn;G.once&&this.off(n,J,G.ctx),J.call(G.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(n,r,l,u){typeof n!="string"&&console.warn('"string" type argument expected');var g=r;typeof r!="function"&&(u=!!r,g=void 0,l=void 0);var M=this._events&&this._events[n];if(M&&M.length&&this._listens(n,g,l)!==!1)return!0;if(u){for(var D in this._eventParents)if(this._eventParents[D].listens(n,r,l,u))return!0}return!1},_listens:function(n,r,l){if(!this._events)return!1;var u=this._events[n]||[];if(!r)return!!u.length;l===this&&(l=void 0);for(var g=0,M=u.length;g<M;g++)if(u[g].fn===r&&u[g].ctx===l)return g;return!1},once:function(n,r,l){if(typeof n=="object")for(var u in n)this._on(u,n[u],r,!0);else{n=v(n);for(var g=0,M=n.length;g<M;g++)this._on(n[g],r,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[h(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[h(n)],this},_propagateEvent:function(n){for(var r in this._eventParents)this._eventParents[r].fire(n.type,e({layer:n.target,propagatedFrom:n.target},n),!0)}};B.addEventListener=B.on,B.removeEventListener=B.clearAllEventListeners=B.off,B.addOneTimeEventListener=B.once,B.fireEvent=B.fire,B.hasEventListeners=B.listens;var Z=st.extend(B);function V(n,r,l){this.x=l?Math.round(n):n,this.y=l?Math.round(r):r}var ot=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};V.prototype={clone:function(){return new V(this.x,this.y)},add:function(n){return this.clone()._add(W(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(W(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new V(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new V(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ot(this.x),this.y=ot(this.y),this},distanceTo:function(n){n=W(n);var r=n.x-this.x,l=n.y-this.y;return Math.sqrt(r*r+l*l)},equals:function(n){return n=W(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=W(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function W(n,r,l){return n instanceof V?n:m(n)?new V(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new V(n.x,n.y):new V(n,r,l)}function j(n,r){if(n)for(var l=r?[n,r]:n,u=0,g=l.length;u<g;u++)this.extend(l[u])}j.prototype={extend:function(n){var r,l;if(!n)return this;if(n instanceof V||typeof n[0]=="number"||"x"in n)r=l=W(n);else if(n=it(n),r=n.min,l=n.max,!r||!l)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=l.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return W((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return W(this.min.x,this.max.y)},getTopRight:function(){return W(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var r,l;return typeof n[0]=="number"||n instanceof V?n=W(n):n=it(n),n instanceof j?(r=n.min,l=n.max):r=l=n,r.x>=this.min.x&&l.x<=this.max.x&&r.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=it(n);var r=this.min,l=this.max,u=n.min,g=n.max,M=g.x>=r.x&&u.x<=l.x,D=g.y>=r.y&&u.y<=l.y;return M&&D},overlaps:function(n){n=it(n);var r=this.min,l=this.max,u=n.min,g=n.max,M=g.x>r.x&&u.x<l.x,D=g.y>r.y&&u.y<l.y;return M&&D},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var r=this.min,l=this.max,u=Math.abs(r.x-l.x)*n,g=Math.abs(r.y-l.y)*n;return it(W(r.x-u,r.y-g),W(l.x+u,l.y+g))},equals:function(n){return n?(n=it(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function it(n,r){return!n||n instanceof j?n:new j(n,r)}function at(n,r){if(n)for(var l=r?[n,r]:n,u=0,g=l.length;u<g;u++)this.extend(l[u])}at.prototype={extend:function(n){var r=this._southWest,l=this._northEast,u,g;if(n instanceof X)u=n,g=n;else if(n instanceof at){if(u=n._southWest,g=n._northEast,!u||!g)return this}else return n?this.extend(tt(n)||mt(n)):this;return!r&&!l?(this._southWest=new X(u.lat,u.lng),this._northEast=new X(g.lat,g.lng)):(r.lat=Math.min(u.lat,r.lat),r.lng=Math.min(u.lng,r.lng),l.lat=Math.max(g.lat,l.lat),l.lng=Math.max(g.lng,l.lng)),this},pad:function(n){var r=this._southWest,l=this._northEast,u=Math.abs(r.lat-l.lat)*n,g=Math.abs(r.lng-l.lng)*n;return new at(new X(r.lat-u,r.lng-g),new X(l.lat+u,l.lng+g))},getCenter:function(){return new X((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new X(this.getNorth(),this.getWest())},getSouthEast:function(){return new X(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof X||"lat"in n?n=tt(n):n=mt(n);var r=this._southWest,l=this._northEast,u,g;return n instanceof at?(u=n.getSouthWest(),g=n.getNorthEast()):u=g=n,u.lat>=r.lat&&g.lat<=l.lat&&u.lng>=r.lng&&g.lng<=l.lng},intersects:function(n){n=mt(n);var r=this._southWest,l=this._northEast,u=n.getSouthWest(),g=n.getNorthEast(),M=g.lat>=r.lat&&u.lat<=l.lat,D=g.lng>=r.lng&&u.lng<=l.lng;return M&&D},overlaps:function(n){n=mt(n);var r=this._southWest,l=this._northEast,u=n.getSouthWest(),g=n.getNorthEast(),M=g.lat>r.lat&&u.lat<l.lat,D=g.lng>r.lng&&u.lng<l.lng;return M&&D},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,r){return n?(n=mt(n),this._southWest.equals(n.getSouthWest(),r)&&this._northEast.equals(n.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function mt(n,r){return n instanceof at?n:new at(n,r)}function X(n,r,l){if(isNaN(n)||isNaN(r))throw new Error("Invalid LatLng object: ("+n+", "+r+")");this.lat=+n,this.lng=+r,l!==void 0&&(this.alt=+l)}X.prototype={equals:function(n,r){if(!n)return!1;n=tt(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(r===void 0?1e-9:r)},toString:function(n){return"LatLng("+p(this.lat,n)+", "+p(this.lng,n)+")"},distanceTo:function(n){return At.distance(this,tt(n))},wrap:function(){return At.wrapLatLng(this)},toBounds:function(n){var r=180*n/40075017,l=r/Math.cos(Math.PI/180*this.lat);return mt([this.lat-r,this.lng-l],[this.lat+r,this.lng+l])},clone:function(){return new X(this.lat,this.lng,this.alt)}};function tt(n,r,l){return n instanceof X?n:m(n)&&typeof n[0]!="object"?n.length===3?new X(n[0],n[1],n[2]):n.length===2?new X(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new X(n.lat,"lng"in n?n.lng:n.lon,n.alt):r===void 0?null:new X(n,r,l)}var xt={latLngToPoint:function(n,r){var l=this.projection.project(n),u=this.scale(r);return this.transformation._transform(l,u)},pointToLatLng:function(n,r){var l=this.scale(r),u=this.transformation.untransform(n,l);return this.projection.unproject(u)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var r=this.projection.bounds,l=this.scale(n),u=this.transformation.transform(r.min,l),g=this.transformation.transform(r.max,l);return new j(u,g)},infinite:!1,wrapLatLng:function(n){var r=this.wrapLng?d(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?d(n.lat,this.wrapLat,!0):n.lat,u=n.alt;return new X(l,r,u)},wrapLatLngBounds:function(n){var r=n.getCenter(),l=this.wrapLatLng(r),u=r.lat-l.lat,g=r.lng-l.lng;if(u===0&&g===0)return n;var M=n.getSouthWest(),D=n.getNorthEast(),G=new X(M.lat-u,M.lng-g),J=new X(D.lat-u,D.lng-g);return new at(G,J)}},At=e({},xt,{wrapLng:[-180,180],R:6371e3,distance:function(n,r){var l=Math.PI/180,u=n.lat*l,g=r.lat*l,M=Math.sin((r.lat-n.lat)*l/2),D=Math.sin((r.lng-n.lng)*l/2),G=M*M+Math.cos(u)*Math.cos(g)*D*D,J=2*Math.atan2(Math.sqrt(G),Math.sqrt(1-G));return this.R*J}}),Lt=6378137,qt={R:Lt,MAX_LATITUDE:85.0511287798,project:function(n){var r=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,n.lat),-l),g=Math.sin(u*r);return new V(this.R*n.lng*r,this.R*Math.log((1+g)/(1-g))/2)},unproject:function(n){var r=180/Math.PI;return new X((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*r,n.x*r/this.R)},bounds:function(){var n=Lt*Math.PI;return new j([-n,-n],[n,n])}()};function Yt(n,r,l,u){if(m(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=r,this._c=l,this._d=u}Yt.prototype={transform:function(n,r){return this._transform(n.clone(),r)},_transform:function(n,r){return r=r||1,n.x=r*(this._a*n.x+this._b),n.y=r*(this._c*n.y+this._d),n},untransform:function(n,r){return r=r||1,new V((n.x/r-this._b)/this._a,(n.y/r-this._d)/this._c)}};function zt(n,r,l,u){return new Yt(n,r,l,u)}var oe=e({},At,{code:"EPSG:3857",projection:qt,transformation:function(){var n=.5/(Math.PI*qt.R);return zt(n,.5,-n,.5)}()}),q=e({},oe,{code:"EPSG:900913"});function Re(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Bt(n,r){var l="",u,g,M,D,G,J;for(u=0,M=n.length;u<M;u++){for(G=n[u],g=0,D=G.length;g<D;g++)J=G[g],l+=(g?"L":"M")+J.x+" "+J.y;l+=r?It.svg?"z":"x":""}return l||"M0 0"}var Xt=document.documentElement.style,Ct="ActiveXObject"in window,xe=Ct&&!document.addEventListener,Kt="msLaunchUri"in navigator&&!("documentMode"in document),C=Le("webkit"),w=Le("android"),Y=Le("android 2")||Le("android 3"),ft=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ut=w&&Le("Google")&&ft<537&&!("AudioNode"in window),dt=!!window.opera,Rt=!Kt&&Le("chrome"),St=Le("gecko")&&!C&&!dt&&!Ct,Tt=!Rt&&Le("safari"),Ht=Le("phantom"),Qt="OTransition"in Xt,ht=navigator.platform.indexOf("Win")===0,ae=Ct&&"transition"in Xt,I="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Y,ct="MozPerspective"in Xt,yt=!window.L_DISABLE_3D&&(ae||I||ct)&&!Qt&&!Ht,pt=typeof orientation<"u"||Le("mobile"),Dt=pt&&C,se=pt&&I,le=!window.PointerEvent&&window.MSPointerEvent,ee=!!(window.PointerEvent||le),vt="ontouchstart"in window||!!window.TouchEvent,F=!window.L_NO_TOUCH&&(vt||ee),gt=pt&&dt,_t=pt&&St,Gt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ot=function(){var n=!1;try{var r=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",f,r),window.removeEventListener("testPassiveEventSupport",f,r)}catch{}return n}(),de=function(){return!!document.createElement("canvas").getContext}(),ue=!!(document.createElementNS&&Re("svg").createSVGRect),De=!!ue&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ve=!ue&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var r=n.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}}(),_e=navigator.platform.indexOf("Mac")===0,We=navigator.platform.indexOf("Linux")===0;function Le(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var It={ie:Ct,ielt9:xe,edge:Kt,webkit:C,android:w,android23:Y,androidStock:ut,opera:dt,chrome:Rt,gecko:St,safari:Tt,phantom:Ht,opera12:Qt,win:ht,ie3d:ae,webkit3d:I,gecko3d:ct,any3d:yt,mobile:pt,mobileWebkit:Dt,mobileWebkit3d:se,msPointer:le,pointer:ee,touch:F,touchNative:vt,mobileOpera:gt,mobileGecko:_t,retina:Gt,passiveEvents:Ot,canvas:de,svg:ue,vml:Ve,inlineSvg:De,mac:_e,linux:We},Lr=It.msPointer?"MSPointerDown":"pointerdown",Ti=It.msPointer?"MSPointerMove":"pointermove",Ws=It.msPointer?"MSPointerUp":"pointerup",Ai=It.msPointer?"MSPointerCancel":"pointercancel",ns={touchstart:Lr,touchmove:Ti,touchend:Ws,touchcancel:Ai},Xs={touchstart:Ut,touchmove:wt,touchend:wt,touchcancel:wt},ai={},Ir=!1;function fa(n,r,l){return r==="touchstart"&&$(),Xs[r]?(l=Xs[r].bind(this,l),n.addEventListener(ns[r],l,!1),l):(console.warn("wrong event specified:",r),f)}function T(n,r,l){if(!ns[r]){console.warn("wrong event specified:",r);return}n.removeEventListener(ns[r],l,!1)}function H(n){ai[n.pointerId]=n}function K(n){ai[n.pointerId]&&(ai[n.pointerId]=n)}function Q(n){delete ai[n.pointerId]}function $(){Ir||(document.addEventListener(Lr,H,!0),document.addEventListener(Ti,K,!0),document.addEventListener(Ws,Q,!0),document.addEventListener(Ai,Q,!0),Ir=!0)}function wt(n,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var l in ai)r.touches.push(ai[l]);r.changedTouches=[r],n(r)}}function Ut(n,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&Xe(r),wt(n,r)}function Wt(n){var r={},l,u;for(u in n)l=n[u],r[u]=l&&l.bind?l.bind(n):l;return n=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var $t=200;function ie(n,r){n.addEventListener("dblclick",r);var l=0,u;function g(M){if(M.detail!==1){u=M.detail;return}if(!(M.pointerType==="mouse"||M.sourceCapabilities&&!M.sourceCapabilities.firesTouchEvents)){var D=bc(M);if(!(D.some(function(J){return J instanceof HTMLLabelElement&&J.attributes.for})&&!D.some(function(J){return J instanceof HTMLInputElement||J instanceof HTMLSelectElement}))){var G=Date.now();G-l<=$t?(u++,u===2&&r(Wt(M))):u=1,l=G}}}return n.addEventListener("click",g),{dblclick:r,simDblclick:g}}function te(n,r){n.removeEventListener("dblclick",r.dblclick),n.removeEventListener("click",r.simDblclick)}var jt=ci(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Me=ci(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ye=Me==="webkitTransition"||Me==="OTransition"?Me+"End":"transitionend";function Ie(n){return typeof n=="string"?document.getElementById(n):n}function sn(n,r){var l=n.style[r]||n.currentStyle&&n.currentStyle[r];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(n,null);l=u?u[r]:null}return l==="auto"?null:l}function Ft(n,r,l){var u=document.createElement(n);return u.className=r||"",l&&l.appendChild(u),u}function Pt(n){var r=n.parentNode;r&&r.removeChild(n)}function li(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function me(n){var r=n.parentNode;r&&r.lastChild!==n&&r.appendChild(n)}function hn(n){var r=n.parentNode;r&&r.firstChild!==n&&r.insertBefore(n,r.firstChild)}function is(n,r){if(n.classList!==void 0)return n.classList.contains(r);var l=xn(n);return l.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(l)}function Jt(n,r){if(n.classList!==void 0)for(var l=v(r),u=0,g=l.length;u<g;u++)n.classList.add(l[u]);else if(!is(n,r)){var M=xn(n);Ne(n,(M?M+" ":"")+r)}}function Se(n,r){n.classList!==void 0?n.classList.remove(r):Ne(n,_((" "+xn(n)+" ").replace(" "+r+" "," ")))}function Ne(n,r){n.className.baseVal===void 0?n.className=r:n.className.baseVal=r}function xn(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function $e(n,r){"opacity"in n.style?n.style.opacity=r:"filter"in n.style&&un(n,r)}function un(n,r){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(u)}catch{if(r===1)return}r=Math.round(r*100),l?(l.Enabled=r!==100,l.Opacity=r):n.style.filter+=" progid:"+u+"(opacity="+r+")"}function ci(n){for(var r=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in r)return n[l];return!1}function Zn(n,r,l){var u=r||new V(0,0);n.style[jt]=(It.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function Ce(n,r){n._leaflet_pos=r,It.any3d?Zn(n,r):(n.style.left=r.x+"px",n.style.top=r.y+"px")}function Ci(n){return n._leaflet_pos||new V(0,0)}var Zs,qs,pa;if("onselectstart"in document)Zs=function(){ne(window,"selectstart",Xe)},qs=function(){be(window,"selectstart",Xe)};else{var Ys=ci(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Zs=function(){if(Ys){var n=document.documentElement.style;pa=n[Ys],n[Ys]="none"}},qs=function(){Ys&&(document.documentElement.style[Ys]=pa,pa=void 0)}}function ma(){ne(window,"dragstart",Xe)}function ga(){be(window,"dragstart",Xe)}var Dr,_a;function va(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(Nr(),Dr=n,_a=n.style.outlineStyle,n.style.outlineStyle="none",ne(window,"keydown",Nr))}function Nr(){Dr&&(Dr.style.outlineStyle=_a,Dr=void 0,_a=void 0,be(window,"keydown",Nr))}function xc(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function ya(n){var r=n.getBoundingClientRect();return{x:r.width/n.offsetWidth||1,y:r.height/n.offsetHeight||1,boundingClientRect:r}}var Ed={__proto__:null,TRANSFORM:jt,TRANSITION:Me,TRANSITION_END:Ye,get:Ie,getStyle:sn,create:Ft,remove:Pt,empty:li,toFront:me,toBack:hn,hasClass:is,addClass:Jt,removeClass:Se,setClass:Ne,getClass:xn,setOpacity:$e,testProp:ci,setTransform:Zn,setPosition:Ce,getPosition:Ci,get disableTextSelection(){return Zs},get enableTextSelection(){return qs},disableImageDrag:ma,enableImageDrag:ga,preventOutline:va,restoreOutline:Nr,getSizedParentNode:xc,getScale:ya};function ne(n,r,l,u){if(r&&typeof r=="object")for(var g in r)Ma(n,g,r[g],l);else{r=v(r);for(var M=0,D=r.length;M<D;M++)Ma(n,r[M],l,u)}return this}var Bn="_leaflet_events";function be(n,r,l,u){if(arguments.length===1)Mc(n),delete n[Bn];else if(r&&typeof r=="object")for(var g in r)ba(n,g,r[g],l);else if(r=v(r),arguments.length===2)Mc(n,function(G){return P(r,G)!==-1});else for(var M=0,D=r.length;M<D;M++)ba(n,r[M],l,u);return this}function Mc(n,r){for(var l in n[Bn]){var u=l.split(/\d/)[0];(!r||r(u))&&ba(n,u,null,null,l)}}var xa={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ma(n,r,l,u){var g=r+h(l)+(u?"_"+h(u):"");if(n[Bn]&&n[Bn][g])return this;var M=function(G){return l.call(u||n,G||window.event)},D=M;!It.touchNative&&It.pointer&&r.indexOf("touch")===0?M=fa(n,r,M):It.touch&&r==="dblclick"?M=ie(n,M):"addEventListener"in n?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?n.addEventListener(xa[r]||r,M,It.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(M=function(G){G=G||window.event,wa(n,G)&&D(G)},n.addEventListener(xa[r],M,!1)):n.addEventListener(r,D,!1):n.attachEvent("on"+r,M),n[Bn]=n[Bn]||{},n[Bn][g]=M}function ba(n,r,l,u,g){g=g||r+h(l)+(u?"_"+h(u):"");var M=n[Bn]&&n[Bn][g];if(!M)return this;!It.touchNative&&It.pointer&&r.indexOf("touch")===0?T(n,r,M):It.touch&&r==="dblclick"?te(n,M):"removeEventListener"in n?n.removeEventListener(xa[r]||r,M,!1):n.detachEvent("on"+r,M),n[Bn][g]=null}function Pi(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Sa(n){return Ma(n,"wheel",Pi),this}function $s(n){return ne(n,"mousedown touchstart dblclick contextmenu",Pi),n._leaflet_disable_click=!0,this}function Xe(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Ri(n){return Xe(n),Pi(n),this}function bc(n){if(n.composedPath)return n.composedPath();for(var r=[],l=n.target;l;)r.push(l),l=l.parentNode;return r}function Sc(n,r){if(!r)return new V(n.clientX,n.clientY);var l=ya(r),u=l.boundingClientRect;return new V((n.clientX-u.left)/l.x-r.clientLeft,(n.clientY-u.top)/l.y-r.clientTop)}var Td=It.linux&&It.chrome?window.devicePixelRatio:It.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function wc(n){return It.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Td:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function wa(n,r){var l=r.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var Ad={__proto__:null,on:ne,off:be,stopPropagation:Pi,disableScrollPropagation:Sa,disableClickPropagation:$s,preventDefault:Xe,stop:Ri,getPropagationPath:bc,getMousePosition:Sc,getWheelDelta:wc,isExternalTarget:wa,addListener:ne,removeListener:be},Ec=Z.extend({run:function(n,r,l,u){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=Ci(n),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=A(this._animate,this),this._step()},_step:function(n){var r=+new Date-this._startTime,l=this._duration*1e3;r<l?this._runFrame(this._easeOut(r/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,r){var l=this._startPos.add(this._offset.multiplyBy(n));r&&l._round(),Ce(this._el,l),this.fire("step")},_complete:function(){R(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),fe=Z.extend({options:{crs:oe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,r){r=x(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(tt(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Me&&It.any3d&&!It.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ne(this._proxy,Ye,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,r,l){if(r=r===void 0?this._zoom:this._limitZoom(r),n=this._limitCenter(tt(n),r,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,r,l.zoom):this._tryAnimatedPan(n,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(n,r,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,r){return this._loaded?this.setView(this.getCenter(),n,{zoom:r}):(this._zoom=n,this)},zoomIn:function(n,r){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,r)},zoomOut:function(n,r){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,r)},setZoomAround:function(n,r,l){var u=this.getZoomScale(r),g=this.getSize().divideBy(2),M=n instanceof V?n:this.latLngToContainerPoint(n),D=M.subtract(g).multiplyBy(1-1/u),G=this.containerPointToLatLng(g.add(D));return this.setView(G,r,{zoom:l})},_getBoundsCenterZoom:function(n,r){r=r||{},n=n.getBounds?n.getBounds():mt(n);var l=W(r.paddingTopLeft||r.padding||[0,0]),u=W(r.paddingBottomRight||r.padding||[0,0]),g=this.getBoundsZoom(n,!1,l.add(u));if(g=typeof r.maxZoom=="number"?Math.min(r.maxZoom,g):g,g===1/0)return{center:n.getCenter(),zoom:g};var M=u.subtract(l).divideBy(2),D=this.project(n.getSouthWest(),g),G=this.project(n.getNorthEast(),g),J=this.unproject(D.add(G).divideBy(2).add(M),g);return{center:J,zoom:g}},fitBounds:function(n,r){if(n=mt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,r);return this.setView(l.center,l.zoom,r)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,r){return this.setView(n,this._zoom,{pan:r})},panBy:function(n,r){if(n=W(n).round(),r=r||{},!n.x&&!n.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ec,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){Jt(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,r.duration||.25,r.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,r,l){if(l=l||{},l.animate===!1||!It.any3d)return this.setView(n,r,l);this._stop();var u=this.project(this.getCenter()),g=this.project(n),M=this.getSize(),D=this._zoom;n=tt(n),r=r===void 0?D:r;var G=Math.max(M.x,M.y),J=G*this.getZoomScale(D,r),lt=g.distanceTo(u)||1,Et=1.42,Zt=Et*Et;function ce(Oe){var Zr=Oe?-1:1,gf=Oe?J:G,_f=J*J-G*G+Zr*Zt*Zt*lt*lt,vf=2*gf*Zt*lt,Oa=_f/vf,rh=Math.sqrt(Oa*Oa+1)-Oa,yf=rh<1e-9?-18:Math.log(rh);return yf}function rn(Oe){return(Math.exp(Oe)-Math.exp(-Oe))/2}function He(Oe){return(Math.exp(Oe)+Math.exp(-Oe))/2}function bn(Oe){return rn(Oe)/He(Oe)}var dn=ce(0);function cs(Oe){return G*(He(dn)/He(dn+Et*Oe))}function df(Oe){return G*(He(dn)*bn(dn+Et*Oe)-rn(dn))/Zt}function ff(Oe){return 1-Math.pow(1-Oe,1.5)}var pf=Date.now(),ih=(ce(1)-dn)/Et,mf=l.duration?1e3*l.duration:1e3*ih*.8;function sh(){var Oe=(Date.now()-pf)/mf,Zr=ff(Oe)*ih;Oe<=1?(this._flyToFrame=A(sh,this),this._move(this.unproject(u.add(g.subtract(u).multiplyBy(df(Zr)/lt)),D),this.getScaleZoom(G/cs(Zr),D),{flyTo:!0})):this._move(n,r)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),sh.call(this),this},flyToBounds:function(n,r){var l=this._getBoundsCenterZoom(n,r);return this.flyTo(l.center,l.zoom,r)},setMaxBounds:function(n){return n=mt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var r=this.options.minZoom;return this.options.minZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var r=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,r){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,mt(n));return l.equals(u)||this.panTo(u,r),this._enforcingBounds=!1,this},panInside:function(n,r){r=r||{};var l=W(r.paddingTopLeft||r.padding||[0,0]),u=W(r.paddingBottomRight||r.padding||[0,0]),g=this.project(this.getCenter()),M=this.project(n),D=this.getPixelBounds(),G=it([D.min.add(l),D.max.subtract(u)]),J=G.getSize();if(!G.contains(M)){this._enforcingBounds=!0;var lt=M.subtract(G.getCenter()),Et=G.extend(M).getSize().subtract(J);g.x+=lt.x<0?-Et.x:Et.x,g.y+=lt.y<0?-Et.y:Et.y,this.panTo(this.unproject(g),r),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=e({animate:!1,pan:!0},n===!0?{animate:!0}:n);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=r.divideBy(2).round(),g=l.divideBy(2).round(),M=u.subtract(g);return!M.x&&!M.y?this:(n.animate&&n.pan?this.panBy(M):(n.pan&&this._rawPanBy(M),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=e({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=o(this._handleGeolocationResponse,this),l=o(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,l,n):navigator.geolocation.getCurrentPosition(r,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var r=n.code,l=n.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var r=n.coords.latitude,l=n.coords.longitude,u=new X(r,l),g=u.toBounds(n.coords.accuracy*2),M=this._locateOptions;if(M.setView){var D=this.getBoundsZoom(g);this.setView(u,M.maxZoom?Math.min(D,M.maxZoom):D)}var G={latlng:u,bounds:g,timestamp:n.timestamp};for(var J in n.coords)typeof n.coords[J]=="number"&&(G[J]=n.coords[J]);this.fire("locationfound",G)}},addHandler:function(n,r){if(!r)return this;var l=this[n]=new r(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Pt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(R(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Pt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,r){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),u=Ft("div",l,r||this._mapPane);return n&&(this._panes[n]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),r=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new at(r,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,r,l){n=mt(n),l=W(l||[0,0]);var u=this.getZoom()||0,g=this.getMinZoom(),M=this.getMaxZoom(),D=n.getNorthWest(),G=n.getSouthEast(),J=this.getSize().subtract(l),lt=it(this.project(G,u),this.project(D,u)).getSize(),Et=It.any3d?this.options.zoomSnap:1,Zt=J.x/lt.x,ce=J.y/lt.y,rn=r?Math.max(Zt,ce):Math.min(Zt,ce);return u=this.getScaleZoom(rn,u),Et&&(u=Math.round(u/(Et/100))*(Et/100),u=r?Math.ceil(u/Et)*Et:Math.floor(u/Et)*Et),Math.max(g,Math.min(M,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new V(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,r){var l=this._getTopLeftPoint(n,r);return new j(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,r){var l=this.options.crs;return r=r===void 0?this._zoom:r,l.scale(n)/l.scale(r)},getScaleZoom:function(n,r){var l=this.options.crs;r=r===void 0?this._zoom:r;var u=l.zoom(n*l.scale(r));return isNaN(u)?1/0:u},project:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(tt(n),r)},unproject:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(W(n),r)},layerPointToLatLng:function(n){var r=W(n).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(n){var r=this.project(tt(n))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(tt(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(mt(n))},distance:function(n,r){return this.options.crs.distance(tt(n),tt(r))},containerPointToLayerPoint:function(n){return W(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return W(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var r=this.containerPointToLayerPoint(W(n));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(tt(n)))},mouseEventToContainerPoint:function(n){return Sc(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var r=this._container=Ie(n);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ne(r,"scroll",this._onScroll,this),this._containerId=h(r)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&It.any3d,Jt(n,"leaflet-container"+(It.touch?" leaflet-touch":"")+(It.retina?" leaflet-retina":"")+(It.ielt9?" leaflet-oldie":"")+(It.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=sn(n,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ce(this._mapPane,new V(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Jt(n.markerPane,"leaflet-zoom-hide"),Jt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,r,l){Ce(this._mapPane,new V(0,0));var u=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var g=this._zoom!==r;this._moveStart(g,l)._move(n,r)._moveEnd(g),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(n,r){return n&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(n,r,l,u){r===void 0&&(r=this._zoom);var g=this._zoom!==r;return this._zoom=r,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),u?l&&l.pinch&&this.fire("zoom",l):((g||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return R(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Ce(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[h(this._container)]=this;var r=n?be:ne;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),It.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){R(this._resizeRequest),this._resizeRequest=A(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,r){for(var l=[],u,g=r==="mouseout"||r==="mouseover",M=n.target||n.srcElement,D=!1;M;){if(u=this._targets[h(M)],u&&(r==="click"||r==="preclick")&&this._draggableMoved(u)){D=!0;break}if(u&&u.listens(r,!0)&&(g&&!wa(M,n)||(l.push(u),g))||M===this._container)break;M=M.parentNode}return!l.length&&!D&&!g&&this.listens(r,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var r=n.target||n.srcElement;if(!(!this._loaded||r._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(r))){var l=n.type;l==="mousedown"&&va(r),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,r,l){if(n.type==="click"){var u=e({},n);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var g=this._findEventTargets(n,r);if(l){for(var M=[],D=0;D<l.length;D++)l[D].listens(r,!0)&&M.push(l[D]);g=M.concat(g)}if(g.length){r==="contextmenu"&&Xe(n);var G=g[0],J={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var lt=G.getLatLng&&(!G._radius||G._radius<=10);J.containerPoint=lt?this.latLngToContainerPoint(G.getLatLng()):this.mouseEventToContainerPoint(n),J.layerPoint=this.containerPointToLayerPoint(J.containerPoint),J.latlng=lt?G.getLatLng():this.layerPointToLatLng(J.layerPoint)}for(D=0;D<g.length;D++)if(g[D].fire(r,J,!0),J.originalEvent._stopped||g[D].options.bubblingMouseEvents===!1&&P(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,r=this._handlers.length;n<r;n++)this._handlers[n].disable()},whenReady:function(n,r){return this._loaded?n.call(r||this,{target:this}):this.on("load",n,r),this},_getMapPanePos:function(){return Ci(this._mapPane)||new V(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,r){var l=n&&r!==void 0?this._getNewPixelOrigin(n,r):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,r){var l=this.getSize()._divideBy(2);return this.project(n,r)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,r,l){var u=this._getNewPixelOrigin(l,r);return this.project(n,r)._subtract(u)},_latLngBoundsToNewLayerBounds:function(n,r,l){var u=this._getNewPixelOrigin(l,r);return it([this.project(n.getSouthWest(),r)._subtract(u),this.project(n.getNorthWest(),r)._subtract(u),this.project(n.getSouthEast(),r)._subtract(u),this.project(n.getNorthEast(),r)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,r,l){if(!l)return n;var u=this.project(n,r),g=this.getSize().divideBy(2),M=new j(u.subtract(g),u.add(g)),D=this._getBoundsOffset(M,l,r);return Math.abs(D.x)<=1&&Math.abs(D.y)<=1?n:this.unproject(u.add(D),r)},_limitOffset:function(n,r){if(!r)return n;var l=this.getPixelBounds(),u=new j(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(u,r))},_getBoundsOffset:function(n,r,l){var u=it(this.project(r.getNorthEast(),l),this.project(r.getSouthWest(),l)),g=u.min.subtract(n.min),M=u.max.subtract(n.max),D=this._rebound(g.x,-M.x),G=this._rebound(g.y,-M.y);return new V(D,G)},_rebound:function(n,r){return n+r>0?Math.round(n-r)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(r))},_limitZoom:function(n){var r=this.getMinZoom(),l=this.getMaxZoom(),u=It.any3d?this.options.zoomSnap:1;return u&&(n=Math.round(n/u)*u),Math.max(r,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Se(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,r){var l=this._getCenterOffset(n)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,r),!0)},_createAnimProxy:function(){var n=this._proxy=Ft("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(r){var l=jt,u=this._proxy.style[l];Zn(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Pt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),r=this.getZoom();Zn(this._proxy,this.project(n,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,r,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(r),g=this._getCenterOffset(n)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(g)?!1:(A(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,r,!0)},this),!0)},_animateZoom:function(n,r,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=r,Jt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:r,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Se(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Cd(n,r){return new fe(n,r)}var An=st.extend({options:{position:"topright"},initialize:function(n){x(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var r=this._map;return r&&r.removeControl(this),this.options.position=n,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var r=this._container=this.onAdd(n),l=this.getPosition(),u=n._controlCorners[l];return Jt(r,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(r,u.firstChild):u.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Pt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Js=function(n){return new An(n)};fe.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},r="leaflet-",l=this._controlContainer=Ft("div",r+"control-container",this._container);function u(g,M){var D=r+g+" "+r+M;n[g+M]=Ft("div",D,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Pt(this._controlCorners[n]);Pt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Tc=An.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,r,l,u){return l<u?-1:u<l?1:0}},initialize:function(n,r,l){x(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in n)this._addLayer(n[u],u);for(u in r)this._addLayer(r[u],u,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return An.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,r){return this._addLayer(n,r),this._map?this._update():this},addOverlay:function(n,r){return this._addLayer(n,r,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var r=this._getLayer(h(n));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){Jt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Jt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Se(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Se(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",r=this._container=Ft("div",n),l=this.options.collapsed;r.setAttribute("aria-haspopup",!0),$s(r),Sa(r);var u=this._section=Ft("section",n+"-list");l&&(this._map.on("click",this.collapse,this),ne(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var g=this._layersLink=Ft("a",n+"-toggle",r);g.href="#",g.title="Layers",g.setAttribute("role","button"),ne(g,{keydown:function(M){M.keyCode===13&&this._expandSafely()},click:function(M){Xe(M),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=Ft("div",n+"-base",u),this._separator=Ft("div",n+"-separator",u),this._overlaysList=Ft("div",n+"-overlays",u),r.appendChild(u)},_getLayer:function(n){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&h(this._layers[r].layer)===n)return this._layers[r]},_addLayer:function(n,r,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:r,overlay:l}),this.options.sortLayers&&this._layers.sort(o(function(u,g){return this.options.sortFunction(u.layer,g.layer,u.name,g.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;li(this._baseLayersList),li(this._overlaysList),this._layerControlInputs=[];var n,r,l,u,g=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),r=r||u.overlay,n=n||!u.overlay,g+=u.overlay?0:1;return this.options.hideSingleBase&&(n=n&&g>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=r&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var r=this._getLayer(h(n.target)),l=r.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,r)},_createRadioElement:function(n,r){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(r?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(n){var r=document.createElement("label"),l=this._map.hasLayer(n.layer),u;n.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+h(this),l),this._layerControlInputs.push(u),u.layerId=h(n.layer),ne(u,"click",this._onInputClick,this);var g=document.createElement("span");g.innerHTML=" "+n.name;var M=document.createElement("span");r.appendChild(M),M.appendChild(u),M.appendChild(g);var D=n.overlay?this._overlaysList:this._baseLayersList;return D.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,r,l,u=[],g=[];this._handlingClick=!0;for(var M=n.length-1;M>=0;M--)r=n[M],l=this._getLayer(r.layerId).layer,r.checked?u.push(l):r.checked||g.push(l);for(M=0;M<g.length;M++)this._map.hasLayer(g[M])&&this._map.removeLayer(g[M]);for(M=0;M<u.length;M++)this._map.hasLayer(u[M])||this._map.addLayer(u[M]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,r,l,u=this._map.getZoom(),g=n.length-1;g>=0;g--)r=n[g],l=this._getLayer(r.layerId).layer,r.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,ne(n,"click",Xe),this.expand();var r=this;setTimeout(function(){be(n,"click",Xe),r._preventClick=!1})}}),Pd=function(n,r,l){return new Tc(n,r,l)},Ea=An.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var r="leaflet-control-zoom",l=Ft("div",r+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,r+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,r+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,r,l,u,g){var M=Ft("a",l,u);return M.innerHTML=n,M.href="#",M.title=r,M.setAttribute("role","button"),M.setAttribute("aria-label",r),$s(M),ne(M,"click",Ri),ne(M,"click",g,this),ne(M,"click",this._refocusOnMap,this),M},_updateDisabled:function(){var n=this._map,r="leaflet-disabled";Se(this._zoomInButton,r),Se(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Jt(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Jt(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});fe.mergeOptions({zoomControl:!0}),fe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ea,this.addControl(this.zoomControl))});var Rd=function(n){return new Ea(n)},Ac=An.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var r="leaflet-control-scale",l=Ft("div",r),u=this.options;return this._addScales(u,r+"-line",l),n.on(u.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,r,l){n.metric&&(this._mScale=Ft("div",r,l)),n.imperial&&(this._iScale=Ft("div",r,l))},_update:function(){var n=this._map,r=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,r]),n.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var r=this._getRoundNum(n),l=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,l,r/n)},_updateImperial:function(n){var r=n*3.2808399,l,u,g;r>5280?(l=r/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(g=this._getRoundNum(r),this._updateScale(this._iScale,g+" ft",g/r))},_updateScale:function(n,r,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=r},_getRoundNum:function(n){var r=Math.pow(10,(Math.floor(n)+"").length-1),l=n/r;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,r*l}}),Ld=function(n){return new Ac(n)},Id='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Ta=An.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(It.inlineSvg?Id+" ":"")+"Leaflet</a>"},initialize:function(n){x(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Ft("div","leaflet-control-attribution"),$s(this._container);for(var r in n._layers)n._layers[r].getAttribution&&this.addAttribution(n._layers[r].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var r in this._attributions)this._attributions[r]&&n.push(r);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});fe.mergeOptions({attributionControl:!0}),fe.addInitHook(function(){this.options.attributionControl&&new Ta().addTo(this)});var Dd=function(n){return new Ta(n)};An.Layers=Tc,An.Zoom=Ea,An.Scale=Ac,An.Attribution=Ta,Js.layers=Pd,Js.zoom=Rd,Js.scale=Ld,Js.attribution=Dd;var kn=st.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});kn.addTo=function(n,r){return n.addHandler(r,this),this};var Nd={Events:B},Cc=It.touch?"touchstart mousedown":"mousedown",hi=Z.extend({options:{clickTolerance:3},initialize:function(n,r,l,u){x(this,u),this._element=n,this._dragStartTarget=r||n,this._preventOutline=l},enable:function(){this._enabled||(ne(this._dragStartTarget,Cc,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(hi._dragging===this&&this.finishDrag(!0),be(this._dragStartTarget,Cc,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!is(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){hi._dragging===this&&this.finishDrag();return}if(!(hi._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(hi._dragging=this,this._preventOutline&&va(this._element),ma(),Zs(),!this._moving)){this.fire("down");var r=n.touches?n.touches[0]:n,l=xc(this._element);this._startPoint=new V(r.clientX,r.clientY),this._startPos=Ci(this._element),this._parentScale=ya(l);var u=n.type==="mousedown";ne(document,u?"mousemove":"touchmove",this._onMove,this),ne(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var r=n.touches&&n.touches.length===1?n.touches[0]:n,l=new V(r.clientX,r.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Xe(n),this._moved||(this.fire("dragstart"),this._moved=!0,Jt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Jt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Ce(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Se(document.body,"leaflet-dragging"),this._lastTarget&&(Se(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),be(document,"mousemove touchmove",this._onMove,this),be(document,"mouseup touchend touchcancel",this._onUp,this),ga(),qs();var r=this._moved&&this._moving;this._moving=!1,hi._dragging=!1,r&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Pc(n,r,l){var u,g=[1,4,2,8],M,D,G,J,lt,Et,Zt,ce;for(M=0,Et=n.length;M<Et;M++)n[M]._code=Li(n[M],r);for(G=0;G<4;G++){for(Zt=g[G],u=[],M=0,Et=n.length,D=Et-1;M<Et;D=M++)J=n[M],lt=n[D],J._code&Zt?lt._code&Zt||(ce=Or(lt,J,Zt,r,l),ce._code=Li(ce,r),u.push(ce)):(lt._code&Zt&&(ce=Or(lt,J,Zt,r,l),ce._code=Li(ce,r),u.push(ce)),u.push(J));n=u}return n}function Rc(n,r){var l,u,g,M,D,G,J,lt,Et;if(!n||n.length===0)throw new Error("latlngs not passed");Mn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Zt=tt([0,0]),ce=mt(n),rn=ce.getNorthWest().distanceTo(ce.getSouthWest())*ce.getNorthEast().distanceTo(ce.getNorthWest());rn<1700&&(Zt=Aa(n));var He=n.length,bn=[];for(l=0;l<He;l++){var dn=tt(n[l]);bn.push(r.project(tt([dn.lat-Zt.lat,dn.lng-Zt.lng])))}for(G=J=lt=0,l=0,u=He-1;l<He;u=l++)g=bn[l],M=bn[u],D=g.y*M.x-M.y*g.x,J+=(g.x+M.x)*D,lt+=(g.y+M.y)*D,G+=D*3;G===0?Et=bn[0]:Et=[J/G,lt/G];var cs=r.unproject(W(Et));return tt([cs.lat+Zt.lat,cs.lng+Zt.lng])}function Aa(n){for(var r=0,l=0,u=0,g=0;g<n.length;g++){var M=tt(n[g]);r+=M.lat,l+=M.lng,u++}return tt([r/u,l/u])}var Od={__proto__:null,clipPolygon:Pc,polygonCenter:Rc,centroid:Aa};function Lc(n,r){if(!r||!n.length)return n.slice();var l=r*r;return n=zd(n,l),n=Fd(n,l),n}function Ic(n,r,l){return Math.sqrt(Ks(n,r,l,!0))}function Ud(n,r,l){return Ks(n,r,l)}function Fd(n,r){var l=n.length,u=typeof Uint8Array<"u"?Uint8Array:Array,g=new u(l);g[0]=g[l-1]=1,Ca(n,g,r,0,l-1);var M,D=[];for(M=0;M<l;M++)g[M]&&D.push(n[M]);return D}function Ca(n,r,l,u,g){var M=0,D,G,J;for(G=u+1;G<=g-1;G++)J=Ks(n[G],n[u],n[g],!0),J>M&&(D=G,M=J);M>l&&(r[D]=1,Ca(n,r,l,u,D),Ca(n,r,l,D,g))}function zd(n,r){for(var l=[n[0]],u=1,g=0,M=n.length;u<M;u++)Bd(n[u],n[g])>r&&(l.push(n[u]),g=u);return g<M-1&&l.push(n[M-1]),l}var Dc;function Nc(n,r,l,u,g){var M=u?Dc:Li(n,l),D=Li(r,l),G,J,lt;for(Dc=D;;){if(!(M|D))return[n,r];if(M&D)return!1;G=M||D,J=Or(n,r,G,l,g),lt=Li(J,l),G===M?(n=J,M=lt):(r=J,D=lt)}}function Or(n,r,l,u,g){var M=r.x-n.x,D=r.y-n.y,G=u.min,J=u.max,lt,Et;return l&8?(lt=n.x+M*(J.y-n.y)/D,Et=J.y):l&4?(lt=n.x+M*(G.y-n.y)/D,Et=G.y):l&2?(lt=J.x,Et=n.y+D*(J.x-n.x)/M):l&1&&(lt=G.x,Et=n.y+D*(G.x-n.x)/M),new V(lt,Et,g)}function Li(n,r){var l=0;return n.x<r.min.x?l|=1:n.x>r.max.x&&(l|=2),n.y<r.min.y?l|=4:n.y>r.max.y&&(l|=8),l}function Bd(n,r){var l=r.x-n.x,u=r.y-n.y;return l*l+u*u}function Ks(n,r,l,u){var g=r.x,M=r.y,D=l.x-g,G=l.y-M,J=D*D+G*G,lt;return J>0&&(lt=((n.x-g)*D+(n.y-M)*G)/J,lt>1?(g=l.x,M=l.y):lt>0&&(g+=D*lt,M+=G*lt)),D=n.x-g,G=n.y-M,u?D*D+G*G:new V(g,M)}function Mn(n){return!m(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Oc(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Mn(n)}function Uc(n,r){var l,u,g,M,D,G,J,lt;if(!n||n.length===0)throw new Error("latlngs not passed");Mn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Et=tt([0,0]),Zt=mt(n),ce=Zt.getNorthWest().distanceTo(Zt.getSouthWest())*Zt.getNorthEast().distanceTo(Zt.getNorthWest());ce<1700&&(Et=Aa(n));var rn=n.length,He=[];for(l=0;l<rn;l++){var bn=tt(n[l]);He.push(r.project(tt([bn.lat-Et.lat,bn.lng-Et.lng])))}for(l=0,u=0;l<rn-1;l++)u+=He[l].distanceTo(He[l+1])/2;if(u===0)lt=He[0];else for(l=0,M=0;l<rn-1;l++)if(D=He[l],G=He[l+1],g=D.distanceTo(G),M+=g,M>u){J=(M-u)/g,lt=[G.x-J*(G.x-D.x),G.y-J*(G.y-D.y)];break}var dn=r.unproject(W(lt));return tt([dn.lat+Et.lat,dn.lng+Et.lng])}var kd={__proto__:null,simplify:Lc,pointToSegmentDistance:Ic,closestPointOnSegment:Ud,clipSegment:Nc,_getEdgeIntersection:Or,_getBitCode:Li,_sqClosestPointOnSegment:Ks,isFlat:Mn,_flat:Oc,polylineCenter:Uc},Pa={project:function(n){return new V(n.lng,n.lat)},unproject:function(n){return new X(n.y,n.x)},bounds:new j([-180,-90],[180,90])},Ra={R:6378137,R_MINOR:6356752314245179e-9,bounds:new j([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var r=Math.PI/180,l=this.R,u=n.lat*r,g=this.R_MINOR/l,M=Math.sqrt(1-g*g),D=M*Math.sin(u),G=Math.tan(Math.PI/4-u/2)/Math.pow((1-D)/(1+D),M/2);return u=-l*Math.log(Math.max(G,1e-10)),new V(n.lng*r*l,u)},unproject:function(n){for(var r=180/Math.PI,l=this.R,u=this.R_MINOR/l,g=Math.sqrt(1-u*u),M=Math.exp(-n.y/l),D=Math.PI/2-2*Math.atan(M),G=0,J=.1,lt;G<15&&Math.abs(J)>1e-7;G++)lt=g*Math.sin(D),lt=Math.pow((1-lt)/(1+lt),g/2),J=Math.PI/2-2*Math.atan(M*lt)-D,D+=J;return new X(D*r,n.x*r/l)}},Hd={__proto__:null,LonLat:Pa,Mercator:Ra,SphericalMercator:qt},Gd=e({},At,{code:"EPSG:3395",projection:Ra,transformation:function(){var n=.5/(Math.PI*Ra.R);return zt(n,.5,-n,.5)}()}),Fc=e({},At,{code:"EPSG:4326",projection:Pa,transformation:zt(1/180,1,-1/180,.5)}),Vd=e({},xt,{projection:Pa,transformation:zt(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,r){var l=r.lng-n.lng,u=r.lat-n.lat;return Math.sqrt(l*l+u*u)},infinite:!0});xt.Earth=At,xt.EPSG3395=Gd,xt.EPSG3857=oe,xt.EPSG900913=q,xt.EPSG4326=Fc,xt.Simple=Vd;var Cn=Z.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[h(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[h(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var r=n.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var l=this.getEvents();r.on(l,this),this.once("remove",function(){r.off(l,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});fe.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var r=h(n);return this._layers[r]?this:(this._layers[r]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var r=h(n);return this._layers[r]?(this._loaded&&n.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return h(n)in this._layers},eachLayer:function(n,r){for(var l in this._layers)n.call(r,this._layers[l]);return this},_addLayers:function(n){n=n?m(n)?n:[n]:[];for(var r=0,l=n.length;r<l;r++)this.addLayer(n[r])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[h(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var r=h(n);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,r=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var g=this._zoomBoundLayers[u].options;n=g.minZoom===void 0?n:Math.min(n,g.minZoom),r=g.maxZoom===void 0?r:Math.max(r,g.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ss=Cn.extend({initialize:function(n,r){x(this,r),this._layers={};var l,u;if(n)for(l=0,u=n.length;l<u;l++)this.addLayer(n[l])},addLayer:function(n){var r=this.getLayerId(n);return this._layers[r]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var r=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(n){var r=typeof n=="number"?n:this.getLayerId(n);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var r=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[n]&&u[n].apply(u,r);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,r){for(var l in this._layers)n.call(r,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return h(n)}}),Wd=function(n,r){return new ss(n,r)},qn=ss.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),ss.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),ss.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new at;for(var r in this._layers){var l=this._layers[r];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),Xd=function(n,r){return new qn(n,r)},rs=st.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){x(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,r){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(u,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(n,r){var l=this.options,u=l[r+"Size"];typeof u=="number"&&(u=[u,u]);var g=W(u),M=W(r==="shadow"&&l.shadowAnchor||l.iconAnchor||g&&g.divideBy(2,!0));n.className="leaflet-marker-"+r+" "+(l.className||""),M&&(n.style.marginLeft=-M.x+"px",n.style.marginTop=-M.y+"px"),g&&(n.style.width=g.x+"px",n.style.height=g.y+"px")},_createImg:function(n,r){return r=r||document.createElement("img"),r.src=n,r},_getIconUrl:function(n){return It.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Zd(n){return new rs(n)}var js=rs.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof js.imagePath!="string"&&(js.imagePath=this._detectIconPath()),(this.options.imagePath||js.imagePath)+rs.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var r=function(l,u,g){var M=u.exec(l);return M&&M[g]};return n=r(n,/^url\((['"])?(.+)\1\)$/,2),n&&r(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Ft("div","leaflet-default-icon-path",document.body),r=sn(n,"background-image")||sn(n,"backgroundImage");if(document.body.removeChild(n),r=this._stripUrl(r),r)return r;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),zc=kn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new hi(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Jt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Se(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var r=this._marker,l=r._map,u=this._marker.options.autoPanSpeed,g=this._marker.options.autoPanPadding,M=Ci(r._icon),D=l.getPixelBounds(),G=l.getPixelOrigin(),J=it(D.min._subtract(G).add(g),D.max._subtract(G).subtract(g));if(!J.contains(M)){var lt=W((Math.max(J.max.x,M.x)-J.max.x)/(D.max.x-J.max.x)-(Math.min(J.min.x,M.x)-J.min.x)/(D.min.x-J.min.x),(Math.max(J.max.y,M.y)-J.max.y)/(D.max.y-J.max.y)-(Math.min(J.min.y,M.y)-J.min.y)/(D.min.y-J.min.y)).multiplyBy(u);l.panBy(lt,{animate:!1}),this._draggable._newPos._add(lt),this._draggable._startPos._add(lt),Ce(r._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=A(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(R(this._panRequest),this._panRequest=A(this._adjustPan.bind(this,n)))},_onDrag:function(n){var r=this._marker,l=r._shadow,u=Ci(r._icon),g=r._map.layerPointToLatLng(u);l&&Ce(l,u),r._latlng=g,n.latlng=g,n.oldLatLng=this._oldLatLng,r.fire("move",n).fire("drag",n)},_onDragEnd:function(n){R(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Ur=Cn.extend({options:{icon:new js,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,r){x(this,r),this._latlng=tt(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var r=this._latlng;return this._latlng=tt(n),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),Jt(l,r),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ne(l,"focus",this._panOnFocus,this);var g=n.icon.createShadow(this._shadow),M=!1;g!==this._shadow&&(this._removeShadow(),M=!0),g&&(Jt(g,r),g.alt=""),this._shadow=g,n.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),g&&M&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&be(this._icon,"focus",this._panOnFocus,this),Pt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Pt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Ce(this._icon,n),this._shadow&&Ce(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(Jt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),zc)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new zc(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&$e(this._icon,n),this._shadow&&$e(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var r=this.options.icon.options,l=r.iconSize?W(r.iconSize):W(0,0),u=r.iconAnchor?W(r.iconAnchor):W(0,0);n.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function qd(n,r){return new Ur(n,r)}var ui=Cn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return x(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Fr=ui.extend({options:{fill:!0,radius:10},initialize:function(n,r){x(this,r),this._latlng=tt(n),this._radius=this.options.radius},setLatLng:function(n){var r=this._latlng;return this._latlng=tt(n),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var r=n&&n.radius||this._radius;return ui.prototype.setStyle.call(this,n),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,r=this._radiusY||n,l=this._clickTolerance(),u=[n+l,r+l];this._pxBounds=new j(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Yd(n,r){return new Fr(n,r)}var La=Fr.extend({initialize:function(n,r,l){if(typeof r=="number"&&(r=e({},l,{radius:r})),x(this,r),this._latlng=tt(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new at(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:ui.prototype.setStyle,_project:function(){var n=this._latlng.lng,r=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===At.distance){var g=Math.PI/180,M=this._mRadius/At.R/g,D=l.project([r+M,n]),G=l.project([r-M,n]),J=D.add(G).divideBy(2),lt=l.unproject(J).lat,Et=Math.acos((Math.cos(M*g)-Math.sin(r*g)*Math.sin(lt*g))/(Math.cos(r*g)*Math.cos(lt*g)))/g;(isNaN(Et)||Et===0)&&(Et=M/Math.cos(Math.PI/180*r)),this._point=J.subtract(l.getPixelOrigin()),this._radius=isNaN(Et)?0:J.x-l.project([lt,n-Et]).x,this._radiusY=J.y-D.y}else{var Zt=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(Zt).x}this._updateBounds()}});function $d(n,r,l){return new La(n,r,l)}var Yn=ui.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,r){x(this,r),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var r=1/0,l=null,u=Ks,g,M,D=0,G=this._parts.length;D<G;D++)for(var J=this._parts[D],lt=1,Et=J.length;lt<Et;lt++){g=J[lt-1],M=J[lt];var Zt=u(n,g,M,!0);Zt<r&&(r=Zt,l=u(n,g,M))}return l&&(l.distance=Math.sqrt(r)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Uc(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,r){return r=r||this._defaultShape(),n=tt(n),r.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new at,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return Mn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var r=[],l=Mn(n),u=0,g=n.length;u<g;u++)l?(r[u]=tt(n[u]),this._bounds.extend(r[u])):r[u]=this._convertLatLngs(n[u]);return r},_project:function(){var n=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),r=new V(n,n);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(n,r,l){var u=n[0]instanceof X,g=n.length,M,D;if(u){for(D=[],M=0;M<g;M++)D[M]=this._map.latLngToLayerPoint(n[M]),l.extend(D[M]);r.push(D)}else for(M=0;M<g;M++)this._projectLatlngs(n[M],r,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,l,u,g,M,D,G,J;for(l=0,g=0,M=this._rings.length;l<M;l++)for(J=this._rings[l],u=0,D=J.length;u<D-1;u++)G=Nc(J[u],J[u+1],n,u,!0),G&&(r[g]=r[g]||[],r[g].push(G[0]),(G[1]!==J[u+1]||u===D-2)&&(r[g].push(G[1]),g++))}},_simplifyPoints:function(){for(var n=this._parts,r=this.options.smoothFactor,l=0,u=n.length;l<u;l++)n[l]=Lc(n[l],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,r){var l,u,g,M,D,G,J=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,M=this._parts.length;l<M;l++)for(G=this._parts[l],u=0,D=G.length,g=D-1;u<D;g=u++)if(!(!r&&u===0)&&Ic(n,G[g],G[u])<=J)return!0;return!1}});function Jd(n,r){return new Yn(n,r)}Yn._flat=Oc;var os=Yn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Rc(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var r=Yn.prototype._convertLatLngs.call(this,n),l=r.length;return l>=2&&r[0]instanceof X&&r[0].equals(r[l-1])&&r.pop(),r},_setLatLngs:function(n){Yn.prototype._setLatLngs.call(this,n),Mn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Mn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,r=this.options.weight,l=new V(r,r);if(n=new j(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,g=this._rings.length,M;u<g;u++)M=Pc(this._rings[u],n,!0),M.length&&this._parts.push(M)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var r=!1,l,u,g,M,D,G,J,lt;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(M=0,J=this._parts.length;M<J;M++)for(l=this._parts[M],D=0,lt=l.length,G=lt-1;D<lt;G=D++)u=l[D],g=l[G],u.y>n.y!=g.y>n.y&&n.x<(g.x-u.x)*(n.y-u.y)/(g.y-u.y)+u.x&&(r=!r);return r||Yn.prototype._containsPoint.call(this,n,!0)}});function Kd(n,r){return new os(n,r)}var $n=qn.extend({initialize:function(n,r){x(this,r),this._layers={},n&&this.addData(n)},addData:function(n){var r=m(n)?n:n.features,l,u,g;if(r){for(l=0,u=r.length;l<u;l++)g=r[l],(g.geometries||g.geometry||g.features||g.coordinates)&&this.addData(g);return this}var M=this.options;if(M.filter&&!M.filter(n))return this;var D=zr(n,M);return D?(D.feature=Hr(n),D.defaultOptions=D.options,this.resetStyle(D),M.onEachFeature&&M.onEachFeature(n,D),this.addLayer(D)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=e({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(r){this._setLayerStyle(r,n)},this)},_setLayerStyle:function(n,r){n.setStyle&&(typeof r=="function"&&(r=r(n.feature)),n.setStyle(r))}});function zr(n,r){var l=n.type==="Feature"?n.geometry:n,u=l?l.coordinates:null,g=[],M=r&&r.pointToLayer,D=r&&r.coordsToLatLng||Ia,G,J,lt,Et;if(!u&&!l)return null;switch(l.type){case"Point":return G=D(u),Bc(M,n,G,r);case"MultiPoint":for(lt=0,Et=u.length;lt<Et;lt++)G=D(u[lt]),g.push(Bc(M,n,G,r));return new qn(g);case"LineString":case"MultiLineString":return J=Br(u,l.type==="LineString"?0:1,D),new Yn(J,r);case"Polygon":case"MultiPolygon":return J=Br(u,l.type==="Polygon"?1:2,D),new os(J,r);case"GeometryCollection":for(lt=0,Et=l.geometries.length;lt<Et;lt++){var Zt=zr({geometry:l.geometries[lt],type:"Feature",properties:n.properties},r);Zt&&g.push(Zt)}return new qn(g);case"FeatureCollection":for(lt=0,Et=l.features.length;lt<Et;lt++){var ce=zr(l.features[lt],r);ce&&g.push(ce)}return new qn(g);default:throw new Error("Invalid GeoJSON object.")}}function Bc(n,r,l,u){return n?n(r,l):new Ur(l,u&&u.markersInheritOptions&&u)}function Ia(n){return new X(n[1],n[0],n[2])}function Br(n,r,l){for(var u=[],g=0,M=n.length,D;g<M;g++)D=r?Br(n[g],r-1,l):(l||Ia)(n[g]),u.push(D);return u}function Da(n,r){return n=tt(n),n.alt!==void 0?[p(n.lng,r),p(n.lat,r),p(n.alt,r)]:[p(n.lng,r),p(n.lat,r)]}function kr(n,r,l,u){for(var g=[],M=0,D=n.length;M<D;M++)g.push(r?kr(n[M],Mn(n[M])?0:r-1,l,u):Da(n[M],u));return!r&&l&&g.length>0&&g.push(g[0].slice()),g}function as(n,r){return n.feature?e({},n.feature,{geometry:r}):Hr(r)}function Hr(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Na={toGeoJSON:function(n){return as(this,{type:"Point",coordinates:Da(this.getLatLng(),n)})}};Ur.include(Na),La.include(Na),Fr.include(Na),Yn.include({toGeoJSON:function(n){var r=!Mn(this._latlngs),l=kr(this._latlngs,r?1:0,!1,n);return as(this,{type:(r?"Multi":"")+"LineString",coordinates:l})}}),os.include({toGeoJSON:function(n){var r=!Mn(this._latlngs),l=r&&!Mn(this._latlngs[0]),u=kr(this._latlngs,l?2:r?1:0,!0,n);return r||(u=[u]),as(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),ss.include({toMultiPoint:function(n){var r=[];return this.eachLayer(function(l){r.push(l.toGeoJSON(n).geometry.coordinates)}),as(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(n){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(n);var l=r==="GeometryCollection",u=[];return this.eachLayer(function(g){if(g.toGeoJSON){var M=g.toGeoJSON(n);if(l)u.push(M.geometry);else{var D=Hr(M);D.type==="FeatureCollection"?u.push.apply(u,D.features):u.push(D)}}}),l?as(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function kc(n,r){return new $n(n,r)}var jd=kc,Gr=Cn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,r,l){this._url=n,this._bounds=mt(r),x(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Jt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Pt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&me(this._image),this},bringToBack:function(){return this._map&&hn(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=mt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",r=this._image=n?this._url:Ft("img");if(Jt(r,"leaflet-image-layer"),this._zoomAnimated&&Jt(r,"leaflet-zoom-animated"),this.options.className&&Jt(r,this.options.className),r.onselectstart=f,r.onmousemove=f,r.onload=o(this.fire,this,"load"),r.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(n){var r=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;Zn(this._image,l,r)},_reset:function(){var n=this._image,r=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=r.getSize();Ce(n,r.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){$e(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Qd=function(n,r,l){return new Gr(n,r,l)},Hc=Gr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",r=this._image=n?this._url:Ft("video");if(Jt(r,"leaflet-image-layer"),this._zoomAnimated&&Jt(r,"leaflet-zoom-animated"),this.options.className&&Jt(r,this.options.className),r.onselectstart=f,r.onmousemove=f,r.onloadeddata=o(this.fire,this,"load"),n){for(var l=r.getElementsByTagName("source"),u=[],g=0;g<l.length;g++)u.push(l[g].src);this._url=l.length>0?u:[r.src];return}m(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var M=0;M<this._url.length;M++){var D=Ft("source");D.src=this._url[M],r.appendChild(D)}}});function tf(n,r,l){return new Hc(n,r,l)}var Gc=Gr.extend({_initImage:function(){var n=this._image=this._url;Jt(n,"leaflet-image-layer"),this._zoomAnimated&&Jt(n,"leaflet-zoom-animated"),this.options.className&&Jt(n,this.options.className),n.onselectstart=f,n.onmousemove=f}});function ef(n,r,l){return new Gc(n,r,l)}var Hn=Cn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,r){n&&(n instanceof X||m(n))?(this._latlng=tt(n),x(this,r)):(x(this,n),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&$e(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&$e(this._container,1),this.bringToFront(),this.options.interactive&&(Jt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?($e(this._container,0),this._removeTimeout=setTimeout(o(Pt,void 0,this._container),200)):Pt(this._container),this.options.interactive&&(Se(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=tt(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&me(this._container),this},bringToBack:function(){return this._map&&hn(this._container),this},_prepareOpen:function(n){var r=this._source;if(!r._map)return!1;if(r instanceof qn){r=null;var l=this._source._layers;for(var u in l)if(l[u]._map){r=l[u];break}if(!r)return!1;this._source=r}if(!n)if(r.getCenter)n=r.getCenter();else if(r.getLatLng)n=r.getLatLng();else if(r.getBounds)n=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")n.innerHTML=r;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),r=W(this.options.offset),l=this._getAnchor();this._zoomAnimated?Ce(this._container,n.add(l)):r=r.add(n).add(l);var u=this._containerBottom=-r.y,g=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=u+"px",this._container.style.left=g+"px"}},_getAnchor:function(){return[0,0]}});fe.include({_initOverlay:function(n,r,l,u){var g=r;return g instanceof n||(g=new n(u).setContent(r)),l&&g.setLatLng(l),g}}),Cn.include({_initOverlay:function(n,r,l,u){var g=l;return g instanceof n?(x(g,u),g._source=this):(g=r&&!u?r:new n(u,this),g.setContent(l)),g}});var Vr=Hn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Hn.prototype.openOn.call(this,n)},onAdd:function(n){Hn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ui||this._source.on("preclick",Pi))},onRemove:function(n){Hn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ui||this._source.off("preclick",Pi))},getEvents:function(){var n=Hn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",r=this._container=Ft("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=Ft("div",n+"-content-wrapper",r);if(this._contentNode=Ft("div",n+"-content",l),$s(r),Sa(this._contentNode),ne(r,"contextmenu",Pi),this._tipContainer=Ft("div",n+"-tip-container",r),this._tip=Ft("div",n+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=Ft("a",n+"-close-button",r);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',ne(u,"click",function(g){Xe(g),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,r=n.style;r.width="",r.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),r.width=l+1+"px",r.whiteSpace="",r.height="";var u=n.offsetHeight,g=this.options.maxHeight,M="leaflet-popup-scrolled";g&&u>g?(r.height=g+"px",Jt(n,M)):Se(n,M),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Ce(this._container,r.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,r=parseInt(sn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+r,u=this._containerWidth,g=new V(this._containerLeft,-l-this._containerBottom);g._add(Ci(this._container));var M=n.layerPointToContainerPoint(g),D=W(this.options.autoPanPadding),G=W(this.options.autoPanPaddingTopLeft||D),J=W(this.options.autoPanPaddingBottomRight||D),lt=n.getSize(),Et=0,Zt=0;M.x+u+J.x>lt.x&&(Et=M.x+u-lt.x+J.x),M.x-Et-G.x<0&&(Et=M.x-G.x),M.y+l+J.y>lt.y&&(Zt=M.y+l-lt.y+J.y),M.y-Zt-G.y<0&&(Zt=M.y-G.y),(Et||Zt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Et,Zt]))}},_getAnchor:function(){return W(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),nf=function(n,r){return new Vr(n,r)};fe.mergeOptions({closePopupOnClick:!0}),fe.include({openPopup:function(n,r,l){return this._initOverlay(Vr,n,r,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Cn.include({bindPopup:function(n,r){return this._popup=this._initOverlay(Vr,this._popup,n,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof qn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Ri(n);var r=n.layer||n.target;if(this._popup._source===r&&!(r instanceof ui)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=r,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Wr=Hn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Hn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Hn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Hn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",r=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ft("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var r,l,u=this._map,g=this._container,M=u.latLngToContainerPoint(u.getCenter()),D=u.layerPointToContainerPoint(n),G=this.options.direction,J=g.offsetWidth,lt=g.offsetHeight,Et=W(this.options.offset),Zt=this._getAnchor();G==="top"?(r=J/2,l=lt):G==="bottom"?(r=J/2,l=0):G==="center"?(r=J/2,l=lt/2):G==="right"?(r=0,l=lt/2):G==="left"?(r=J,l=lt/2):D.x<M.x?(G="right",r=0,l=lt/2):(G="left",r=J+(Et.x+Zt.x)*2,l=lt/2),n=n.subtract(W(r,l,!0)).add(Et).add(Zt),Se(g,"leaflet-tooltip-right"),Se(g,"leaflet-tooltip-left"),Se(g,"leaflet-tooltip-top"),Se(g,"leaflet-tooltip-bottom"),Jt(g,"leaflet-tooltip-"+G),Ce(g,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&$e(this._container,n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(r)},_getAnchor:function(){return W(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),sf=function(n,r){return new Wr(n,r)};fe.include({openTooltip:function(n,r,l){return this._initOverlay(Wr,n,r,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Cn.include({bindTooltip:function(n,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Wr,this._tooltip,n,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var r=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[r](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof qn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&(ne(r,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),ne(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var r=n.latlng,l,u;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),u=this._map.containerPointToLayerPoint(l),r=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(r)}});var Vc=rs.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var r=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(li(r),r.appendChild(l.html)):r.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=W(l.bgPos);r.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function rf(n){return new Vc(n)}rs.Default=js;var Qs=Cn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:It.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){x(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Pt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(me(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(hn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=c(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof V?n:new V(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var r=this.getPane().children,l=-n(-1/0,1/0),u=0,g=r.length,M;u<g;u++)M=r[u].style.zIndex,r[u]!==this._container&&M&&(l=n(l,+M));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!It.ielt9){$e(this._container,this.options.opacity);var n=+new Date,r=!1,l=!1;for(var u in this._tiles){var g=this._tiles[u];if(!(!g.current||!g.loaded)){var M=Math.min(1,(n-g.loaded)/200);$e(g.el,M),M<1?r=!0:(g.active?l=!0:this._onOpaqueTile(g),g.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),r&&(R(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this))}},_onOpaqueTile:f,_initContainer:function(){this._container||(this._container=Ft("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,r=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=r-Math.abs(n-l),this._onUpdateLevel(l)):(Pt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[n],g=this._map;return u||(u=this._levels[n]={},u.el=Ft("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=r,u.origin=g.project(g.unproject(g.getPixelOrigin()),n).round(),u.zoom=n,this._setZoomTransform(u,g.getCenter(),g.getZoom()),f(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:f,_onRemoveLevel:f,_onCreateLevel:f,_pruneTiles:function(){if(this._map){var n,r,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)r=this._tiles[n],r.retain=r.current;for(n in this._tiles)if(r=this._tiles[n],r.current&&!r.active){var u=r.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var r in this._tiles)this._tiles[r].coords.z===n&&this._removeTile(r)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Pt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,r,l,u){var g=Math.floor(n/2),M=Math.floor(r/2),D=l-1,G=new V(+g,+M);G.z=+D;var J=this._tileCoordsToKey(G),lt=this._tiles[J];return lt&&lt.active?(lt.retain=!0,!0):(lt&&lt.loaded&&(lt.retain=!0),D>u?this._retainParent(g,M,D,u):!1)},_retainChildren:function(n,r,l,u){for(var g=2*n;g<2*n+2;g++)for(var M=2*r;M<2*r+2;M++){var D=new V(g,M);D.z=l+1;var G=this._tileCoordsToKey(D),J=this._tiles[G];if(J&&J.active){J.retain=!0;continue}else J&&J.loaded&&(J.retain=!0);l+1<u&&this._retainChildren(g,M,l+1,u)}},_resetView:function(n){var r=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var r=this.options;return r.minNativeZoom!==void 0&&n<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<n?r.maxNativeZoom:n},_setView:function(n,r,l,u){var g=Math.round(r);this.options.maxZoom!==void 0&&g>this.options.maxZoom||this.options.minZoom!==void 0&&g<this.options.minZoom?g=void 0:g=this._clampZoom(g);var M=this.options.updateWhenZooming&&g!==this._tileZoom;(!u||M)&&(this._tileZoom=g,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),g!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,r)},_setZoomTransforms:function(n,r){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,r)},_setZoomTransform:function(n,r,l){var u=this._map.getZoomScale(l,n.zoom),g=n.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(r,l)).round();It.any3d?Zn(n.el,g,u):Ce(n.el,g)},_resetGrid:function(){var n=this._map,r=n.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,g=this._map.getPixelWorldBounds(this._tileZoom);g&&(this._globalTileRange=this._pxBoundsToTileRange(g)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,r.wrapLng[0]],u).x/l.x),Math.ceil(n.project([0,r.wrapLng[1]],u).x/l.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([r.wrapLat[0],0],u).y/l.x),Math.ceil(n.project([r.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var r=this._map,l=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),u=r.getZoomScale(l,this._tileZoom),g=r.project(n,this._tileZoom).floor(),M=r.getSize().divideBy(u*2);return new j(g.subtract(M),g.add(M))},_update:function(n){var r=this._map;if(r){var l=this._clampZoom(r.getZoom());if(n===void 0&&(n=r.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(n),g=this._pxBoundsToTileRange(u),M=g.getCenter(),D=[],G=this.options.keepBuffer,J=new j(g.getBottomLeft().subtract([G,-G]),g.getTopRight().add([G,-G]));if(!(isFinite(g.min.x)&&isFinite(g.min.y)&&isFinite(g.max.x)&&isFinite(g.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var lt in this._tiles){var Et=this._tiles[lt].coords;(Et.z!==this._tileZoom||!J.contains(new V(Et.x,Et.y)))&&(this._tiles[lt].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var Zt=g.min.y;Zt<=g.max.y;Zt++)for(var ce=g.min.x;ce<=g.max.x;ce++){var rn=new V(ce,Zt);if(rn.z=this._tileZoom,!!this._isValidTile(rn)){var He=this._tiles[this._tileCoordsToKey(rn)];He?He.current=!0:D.push(rn)}}if(D.sort(function(dn,cs){return dn.distanceTo(M)-cs.distanceTo(M)}),D.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var bn=document.createDocumentFragment();for(ce=0;ce<D.length;ce++)this._addTile(D[ce],bn);this._level.el.appendChild(bn)}}}},_isValidTile:function(n){var r=this._map.options.crs;if(!r.infinite){var l=this._globalTileRange;if(!r.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!r.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(n);return mt(this.options.bounds).overlaps(u)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var r=this._map,l=this.getTileSize(),u=n.scaleBy(l),g=u.add(l),M=r.unproject(u,n.z),D=r.unproject(g,n.z);return[M,D]},_tileCoordsToBounds:function(n){var r=this._tileCoordsToNwSe(n),l=new at(r[0],r[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var r=n.split(":"),l=new V(+r[0],+r[1]);return l.z=+r[2],l},_removeTile:function(n){var r=this._tiles[n];r&&(Pt(r.el),delete this._tiles[n],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Jt(n,"leaflet-tile");var r=this.getTileSize();n.style.width=r.x+"px",n.style.height=r.y+"px",n.onselectstart=f,n.onmousemove=f,It.ielt9&&this.options.opacity<1&&$e(n,this.options.opacity)},_addTile:function(n,r){var l=this._getTilePos(n),u=this._tileCoordsToKey(n),g=this.createTile(this._wrapCoords(n),o(this._tileReady,this,n));this._initTile(g),this.createTile.length<2&&A(o(this._tileReady,this,n,null,g)),Ce(g,l),this._tiles[u]={el:g,coords:n,current:!0},r.appendChild(g),this.fire("tileloadstart",{tile:g,coords:n})},_tileReady:function(n,r,l){r&&this.fire("tileerror",{error:r,tile:l,coords:n});var u=this._tileCoordsToKey(n);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?($e(l.el,0),R(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),r||(Jt(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),It.ielt9||!this._map._fadeAnimated?A(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var r=new V(this._wrapX?d(n.x,this._wrapX):n.x,this._wrapY?d(n.y,this._wrapY):n.y);return r.z=n.z,r},_pxBoundsToTileRange:function(n){var r=this.getTileSize();return new j(n.min.unscaleBy(r).floor(),n.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function of(n){return new Qs(n)}var ls=Qs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,r){this._url=n,r=x(this,r),r.detectRetina&&It.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,r){return this._url===n&&r===void 0&&(r=!0),this._url=n,r||this.redraw(),this},createTile:function(n,r){var l=document.createElement("img");return ne(l,"load",o(this._tileOnLoad,this,r,l)),ne(l,"error",o(this._tileOnError,this,r,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var r={r:It.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(r.y=l),r["-y"]=l}return y(this._url,e(r,this.options))},_tileOnLoad:function(n,r){It.ielt9?setTimeout(o(n,this,null,r),0):n(null,r)},_tileOnError:function(n,r,l){var u=this.options.errorTileUrl;u&&r.getAttribute("src")!==u&&(r.src=u),n(l,r)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,r=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(n=r-n),n+u},_getSubdomain:function(n){var r=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var n,r;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(r=this._tiles[n].el,r.onload=f,r.onerror=f,!r.complete)){r.src=E;var l=this._tiles[n].coords;Pt(r),delete this._tiles[n],this.fire("tileabort",{tile:r,coords:l})}},_removeTile:function(n){var r=this._tiles[n];if(r)return r.el.setAttribute("src",E),Qs.prototype._removeTile.call(this,n)},_tileReady:function(n,r,l){if(!(!this._map||l&&l.getAttribute("src")===E))return Qs.prototype._tileReady.call(this,n,r,l)}});function Wc(n,r){return new ls(n,r)}var Xc=ls.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,r){this._url=n;var l=e({},this.defaultWmsParams);for(var u in r)u in this.options||(l[u]=r[u]);r=x(this,r);var g=r.detectRetina&&It.retina?2:1,M=this.getTileSize();l.width=M.x*g,l.height=M.y*g,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,ls.prototype.onAdd.call(this,n)},getTileUrl:function(n){var r=this._tileCoordsToNwSe(n),l=this._crs,u=it(l.project(r[0]),l.project(r[1])),g=u.min,M=u.max,D=(this._wmsVersion>=1.3&&this._crs===Fc?[g.y,g.x,M.y,M.x]:[g.x,g.y,M.x,M.y]).join(","),G=ls.prototype.getTileUrl.call(this,n);return G+b(this.wmsParams,G,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+D},setParams:function(n,r){return e(this.wmsParams,n),r||this.redraw(),this}});function af(n,r){return new Xc(n,r)}ls.WMS=Xc,Wc.wms=af;var Jn=Cn.extend({options:{padding:.1},initialize:function(n){x(this,n),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Jt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,r){var l=this._map.getZoomScale(r,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),g=this._map.project(this._center,r),M=u.multiplyBy(-l).add(g).subtract(this._map._getNewPixelOrigin(n,r));It.any3d?Zn(this._container,M,l):Ce(this._container,M)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,r=this._map.getSize(),l=this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();this._bounds=new j(l,l.add(r.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Zc=Jn.extend({options:{tolerance:0},getEvents:function(){var n=Jn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Jn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");ne(n,"mousemove",this._onMouseMove,this),ne(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ne(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){R(this._redrawRequest),delete this._ctx,Pt(this._container),be(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var r in this._layers)n=this._layers[r],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Jn.prototype._update.call(this);var n=this._bounds,r=this._container,l=n.getSize(),u=It.retina?2:1;Ce(r,n.min),r.width=u*l.x,r.height=u*l.y,r.style.width=l.x+"px",r.style.height=l.y+"px",It.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Jn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[h(n)]=n;var r=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var r=n._order,l=r.next,u=r.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete n._order,delete this._layers[h(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var r=n.options.dashArray.split(/[, ]+/),l=[],u,g;for(g=0;g<r.length;g++){if(u=Number(r[g]),isNaN(u))return;l.push(u)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||A(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var r=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(n._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(n._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var r=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,r=this._redrawBounds;if(this._ctx.save(),r){var l=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)n=u.layer,(!r||n._pxBounds&&n._pxBounds.intersects(r))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,r){if(this._drawing){var l,u,g,M,D=n._parts,G=D.length,J=this._ctx;if(G){for(J.beginPath(),l=0;l<G;l++){for(u=0,g=D[l].length;u<g;u++)M=D[l][u],J[u?"lineTo":"moveTo"](M.x,M.y);r&&J.closePath()}this._fillStroke(J,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var r=n._point,l=this._ctx,u=Math.max(Math.round(n._radius),1),g=(Math.max(Math.round(n._radiusY),1)||u)/u;g!==1&&(l.save(),l.scale(1,g)),l.beginPath(),l.arc(r.x,r.y/g,u,0,Math.PI*2,!1),g!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,r){var l=r.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(r.options&&r.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var r=this._map.mouseEventToLayerPoint(n),l,u,g=this._drawFirst;g;g=g.next)l=g.layer,l.options.interactive&&l._containsPoint(r)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,r)}},_handleMouseOut:function(n){var r=this._hoveredLayer;r&&(Se(this._container,"leaflet-interactive"),this._fireEvent([r],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,r){if(!this._mouseHoverThrottled){for(var l,u,g=this._drawFirst;g;g=g.next)l=g.layer,l.options.interactive&&l._containsPoint(r)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(n),u&&(Jt(this._container,"leaflet-interactive"),this._fireEvent([u],n,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,r,l){this._map._fireDOMEvent(r,l||r.type,n)},_bringToFront:function(n){var r=n._order;if(r){var l=r.next,u=r.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(n)}},_bringToBack:function(n){var r=n._order;if(r){var l=r.next,u=r.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(n)}}});function qc(n){return It.canvas?new Zc(n):null}var tr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),lf={_initContainer:function(){this._container=Ft("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Jn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var r=n._container=tr("shape");Jt(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",n._path=tr("path"),r.appendChild(n._path),this._updateStyle(n),this._layers[h(n)]=n},_addPath:function(n){var r=n._container;this._container.appendChild(r),n.options.interactive&&n.addInteractiveTarget(r)},_removePath:function(n){var r=n._container;Pt(r),n.removeInteractiveTarget(r),delete this._layers[h(n)]},_updateStyle:function(n){var r=n._stroke,l=n._fill,u=n.options,g=n._container;g.stroked=!!u.stroke,g.filled=!!u.fill,u.stroke?(r||(r=n._stroke=tr("stroke")),g.appendChild(r),r.weight=u.weight+"px",r.color=u.color,r.opacity=u.opacity,u.dashArray?r.dashStyle=m(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=u.lineCap.replace("butt","flat"),r.joinstyle=u.lineJoin):r&&(g.removeChild(r),n._stroke=null),u.fill?(l||(l=n._fill=tr("fill")),g.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(g.removeChild(l),n._fill=null)},_updateCircle:function(n){var r=n._point.round(),l=Math.round(n._radius),u=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+r.x+","+r.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(n,r){n._path.v=r},_bringToFront:function(n){me(n._container)},_bringToBack:function(n){hn(n._container)}},Xr=It.vml?tr:Re,er=Jn.extend({_initContainer:function(){this._container=Xr("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Xr("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Pt(this._container),be(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Jn.prototype._update.call(this);var n=this._bounds,r=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,l.setAttribute("width",r.x),l.setAttribute("height",r.y)),Ce(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(n){var r=n._path=Xr("path");n.options.className&&Jt(r,n.options.className),n.options.interactive&&Jt(r,"leaflet-interactive"),this._updateStyle(n),this._layers[h(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Pt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[h(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var r=n._path,l=n.options;r&&(l.stroke?(r.setAttribute("stroke",l.color),r.setAttribute("stroke-opacity",l.opacity),r.setAttribute("stroke-width",l.weight),r.setAttribute("stroke-linecap",l.lineCap),r.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?r.setAttribute("stroke-dasharray",l.dashArray):r.removeAttribute("stroke-dasharray"),l.dashOffset?r.setAttribute("stroke-dashoffset",l.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),l.fill?(r.setAttribute("fill",l.fillColor||l.color),r.setAttribute("fill-opacity",l.fillOpacity),r.setAttribute("fill-rule",l.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(n,r){this._setPath(n,Bt(n._parts,r))},_updateCircle:function(n){var r=n._point,l=Math.max(Math.round(n._radius),1),u=Math.max(Math.round(n._radiusY),1)||l,g="a"+l+","+u+" 0 1,0 ",M=n._empty()?"M0 0":"M"+(r.x-l)+","+r.y+g+l*2+",0 "+g+-l*2+",0 ";this._setPath(n,M)},_setPath:function(n,r){n._path.setAttribute("d",r)},_bringToFront:function(n){me(n._path)},_bringToBack:function(n){hn(n._path)}});It.vml&&er.include(lf);function Yc(n){return It.svg||It.vml?new er(n):null}fe.include({getRenderer:function(n){var r=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var r=this._paneRenderers[n];return r===void 0&&(r=this._createRenderer({pane:n}),this._paneRenderers[n]=r),r},_createRenderer:function(n){return this.options.preferCanvas&&qc(n)||Yc(n)}});var $c=os.extend({initialize:function(n,r){os.prototype.initialize.call(this,this._boundsToLatLngs(n),r)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=mt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function cf(n,r){return new $c(n,r)}er.create=Xr,er.pointsToPath=Bt,$n.geometryToLayer=zr,$n.coordsToLatLng=Ia,$n.coordsToLatLngs=Br,$n.latLngToCoords=Da,$n.latLngsToCoords=kr,$n.getFeature=as,$n.asFeature=Hr,fe.mergeOptions({boxZoom:!0});var Jc=kn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){ne(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){be(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Pt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Zs(),ma(),this._startPoint=this._map.mouseEventToContainerPoint(n),ne(document,{contextmenu:Ri,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Ft("div","leaflet-zoom-box",this._container),Jt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var r=new j(this._point,this._startPoint),l=r.getSize();Ce(this._box,r.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Pt(this._box),Se(this._container,"leaflet-crosshair")),qs(),ga(),be(document,{contextmenu:Ri,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var r=new at(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});fe.addInitHook("addHandler","boxZoom",Jc),fe.mergeOptions({doubleClickZoom:!0});var Kc=kn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var r=this._map,l=r.getZoom(),u=r.options.zoomDelta,g=n.originalEvent.shiftKey?l-u:l+u;r.options.doubleClickZoom==="center"?r.setZoom(g):r.setZoomAround(n.containerPoint,g)}});fe.addInitHook("addHandler","doubleClickZoom",Kc),fe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var jc=kn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new hi(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Jt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Se(this._map._container,"leaflet-grab"),Se(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=mt(this._map.options.maxBounds);this._offsetLimit=it(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var r=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(r),this._prunePositions(r)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,r){return n-(n-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;n.x<r.min.x&&(n.x=this._viscousLimit(n.x,r.min.x)),n.y<r.min.y&&(n.y=this._viscousLimit(n.y,r.min.y)),n.x>r.max.x&&(n.x=this._viscousLimit(n.x,r.max.x)),n.y>r.max.y&&(n.y=this._viscousLimit(n.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,r=Math.round(n/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,g=(u-r+l)%n+r-l,M=(u+r+l)%n-r-l,D=Math.abs(g+l)<Math.abs(M+l)?g:M;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=D},_onDragEnd:function(n){var r=this._map,l=r.options,u=!l.inertia||n.noInertia||this._times.length<2;if(r.fire("dragend",n),u)r.fire("moveend");else{this._prunePositions(+new Date);var g=this._lastPos.subtract(this._positions[0]),M=(this._lastTime-this._times[0])/1e3,D=l.easeLinearity,G=g.multiplyBy(D/M),J=G.distanceTo([0,0]),lt=Math.min(l.inertiaMaxSpeed,J),Et=G.multiplyBy(lt/J),Zt=lt/(l.inertiaDeceleration*D),ce=Et.multiplyBy(-Zt/2).round();!ce.x&&!ce.y?r.fire("moveend"):(ce=r._limitOffset(ce,r.options.maxBounds),A(function(){r.panBy(ce,{duration:Zt,easeLinearity:D,noMoveStart:!0,animate:!0})}))}}});fe.addInitHook("addHandler","dragging",jc),fe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Qc=kn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),ne(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),be(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,r=document.documentElement,l=n.scrollTop||r.scrollTop,u=n.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var r=this._panKeys={},l=this.keyCodes,u,g;for(u=0,g=l.left.length;u<g;u++)r[l.left[u]]=[-1*n,0];for(u=0,g=l.right.length;u<g;u++)r[l.right[u]]=[n,0];for(u=0,g=l.down.length;u<g;u++)r[l.down[u]]=[0,n];for(u=0,g=l.up.length;u<g;u++)r[l.up[u]]=[0,-1*n]},_setZoomDelta:function(n){var r=this._zoomKeys={},l=this.keyCodes,u,g;for(u=0,g=l.zoomIn.length;u<g;u++)r[l.zoomIn[u]]=n;for(u=0,g=l.zoomOut.length;u<g;u++)r[l.zoomOut[u]]=-n},_addHooks:function(){ne(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){be(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var r=n.keyCode,l=this._map,u;if(r in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[r],n.shiftKey&&(u=W(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(W(u),l.options.maxBounds)),l.options.worldCopyJump){var g=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(g)}else l.panBy(u)}else if(r in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Ri(n)}}});fe.addInitHook("addHandler","keyboard",Qc),fe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var th=kn.extend({addHooks:function(){ne(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){be(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var r=wc(n),l=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),u),Ri(n)},_performZoom:function(){var n=this._map,r=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),g=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,M=l?Math.ceil(g/l)*l:g,D=n._limitZoom(r+(this._delta>0?M:-M))-r;this._delta=0,this._startTime=null,D&&(n.options.scrollWheelZoom==="center"?n.setZoom(r+D):n.setZoomAround(this._lastMousePos,r+D))}});fe.addInitHook("addHandler","scrollWheelZoom",th);var hf=600;fe.mergeOptions({tapHold:It.touchNative&&It.safari&&It.mobile,tapTolerance:15});var eh=kn.extend({addHooks:function(){ne(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){be(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var r=n.touches[0];this._startPos=this._newPos=new V(r.clientX,r.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(ne(document,"touchend",Xe),ne(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),hf),ne(document,"touchend touchcancel contextmenu",this._cancel,this),ne(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){be(document,"touchend",Xe),be(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),be(document,"touchend touchcancel contextmenu",this._cancel,this),be(document,"touchmove",this._onMove,this)},_onMove:function(n){var r=n.touches[0];this._newPos=new V(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,r){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});l._simulated=!0,r.target.dispatchEvent(l)}});fe.addInitHook("addHandler","tapHold",eh),fe.mergeOptions({touchZoom:It.touch,bounceAtZoomLimits:!0});var nh=kn.extend({addHooks:function(){Jt(this._map._container,"leaflet-touch-zoom"),ne(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Se(this._map._container,"leaflet-touch-zoom"),be(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var r=this._map;if(!(!n.touches||n.touches.length!==2||r._animatingZoom||this._zooming)){var l=r.mouseEventToContainerPoint(n.touches[0]),u=r.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),ne(document,"touchmove",this._onTouchMove,this),ne(document,"touchend touchcancel",this._onTouchEnd,this),Xe(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var r=this._map,l=r.mouseEventToContainerPoint(n.touches[0]),u=r.mouseEventToContainerPoint(n.touches[1]),g=l.distanceTo(u)/this._startDist;if(this._zoom=r.getScaleZoom(g,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&g<1||this._zoom>r.getMaxZoom()&&g>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,g===1)return}else{var M=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(g===1&&M.x===0&&M.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(M),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),R(this._animRequest);var D=o(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=A(D,this,!0),Xe(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,R(this._animRequest),be(document,"touchmove",this._onTouchMove,this),be(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});fe.addInitHook("addHandler","touchZoom",nh),fe.BoxZoom=Jc,fe.DoubleClickZoom=Kc,fe.Drag=jc,fe.Keyboard=Qc,fe.ScrollWheelZoom=th,fe.TapHold=eh,fe.TouchZoom=nh,s.Bounds=j,s.Browser=It,s.CRS=xt,s.Canvas=Zc,s.Circle=La,s.CircleMarker=Fr,s.Class=st,s.Control=An,s.DivIcon=Vc,s.DivOverlay=Hn,s.DomEvent=Ad,s.DomUtil=Ed,s.Draggable=hi,s.Evented=Z,s.FeatureGroup=qn,s.GeoJSON=$n,s.GridLayer=Qs,s.Handler=kn,s.Icon=rs,s.ImageOverlay=Gr,s.LatLng=X,s.LatLngBounds=at,s.Layer=Cn,s.LayerGroup=ss,s.LineUtil=kd,s.Map=fe,s.Marker=Ur,s.Mixin=Nd,s.Path=ui,s.Point=V,s.PolyUtil=Od,s.Polygon=os,s.Polyline=Yn,s.Popup=Vr,s.PosAnimation=Ec,s.Projection=Hd,s.Rectangle=$c,s.Renderer=Jn,s.SVG=er,s.SVGOverlay=Gc,s.TileLayer=ls,s.Tooltip=Wr,s.Transformation=Yt,s.Util=et,s.VideoOverlay=Hc,s.bind=o,s.bounds=it,s.canvas=qc,s.circle=$d,s.circleMarker=Yd,s.control=Js,s.divIcon=rf,s.extend=e,s.featureGroup=Xd,s.geoJSON=kc,s.geoJson=jd,s.gridLayer=of,s.icon=Zd,s.imageOverlay=Qd,s.latLng=tt,s.latLngBounds=mt,s.layerGroup=Wd,s.map=Cd,s.marker=qd,s.point=W,s.polygon=Kd,s.polyline=Jd,s.popup=nf,s.rectangle=cf,s.setOptions=x,s.stamp=h,s.svg=Yc,s.svgOverlay=ef,s.tileLayer=Wc,s.tooltip=sf,s.transformation=zt,s.version=t,s.videoOverlay=tf;var uf=window.L;s.noConflict=function(){return window.L=uf,this},window.L=s})});var nc="160",Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cf=0,ah=1,Pf=2;var ku=1,Rf=2,ni=3,bi=0,tn=1,cn=2;var yi=0,Is=1,On=2,lh=3,ch=4,Lf=5,Fi=100,If=101,Df=102,hh=103,uh=104,Nf=200,Of=201,Uf=202,Ff=203,ml=204,gl=205,zf=206,Bf=207,kf=208,Hf=209,Gf=210,Vf=211,Wf=212,Xf=213,Zf=214,qf=0,Yf=1,$f=2,So=3,Jf=4,Kf=5,jf=6,Qf=7,ic=0,tp=1,ep=2,xi=0,np=1,ip=2,sp=3,sc=4,rp=5,op=6;var Hu=300,Os=301,Us=302,_l=303,vl=304,jo=306,yl=1e3,Dn=1001,xl=1002,ln=1003,dh=1004;var Ua=1005;var wn=1006,ap=1007;var pr=1008;var Mi=1009,lp=1010,cp=1011,rc=1012,Gu=1013,_i=1014,vi=1015,mr=1016,Vu=1017,Wu=1018,ki=1020,hp=1021,Nn=1023,up=1024,dp=1025,Hi=1026,Fs=1027,fp=1028,Xu=1029,pp=1030,Zu=1031,qu=1033,Fa=33776,za=33777,Ba=33778,ka=33779,fh=35840,ph=35841,mh=35842,gh=35843,Yu=36196,_h=37492,vh=37496,yh=37808,xh=37809,Mh=37810,bh=37811,Sh=37812,wh=37813,Eh=37814,Th=37815,Ah=37816,Ch=37817,Ph=37818,Rh=37819,Lh=37820,Ih=37821,Ha=36492,Dh=36494,Nh=36495,mp=36283,Oh=36284,Uh=36285,Fh=36286;var wo=2300,Eo=2301,Ga=2302,zh=2400,Bh=2401,kh=2402;var $u=3e3,Gi=3001,gp=3200,_p=3201,Ju=0,vp=1,En="",ge="srgb",ri="srgb-linear",oc="display-p3",Qo="display-p3-linear",To="linear",we="srgb",Ao="rec709",Co="p3";var hs=7680;var Hh=519,yp=512,xp=513,Mp=514,Ku=515,bp=516,Sp=517,wp=518,Ep=519,Ml=35044;var Gh="300 es",bl=1035,ii=2e3,Po=2001,Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let o=this._listeners[t];if(o!==void 0){let a=o.indexOf(e);a!==-1&&o.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let o=i.slice(0);for(let a=0,h=o.length;a<h;a++)o[a].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,hr=Math.PI/180,gr=180/Math.PI;function si(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function je(s,t,e){return Math.max(t,Math.min(e,s))}function ac(s,t){return(s%t+t)%t}function Tp(s,t,e,i,o){return i+(s-t)*(o-i)/(e-t)}function Ap(s,t,e){return s!==t?(e-s)/(t-s):0}function ur(s,t,e){return(1-e)*s+e*t}function Cp(s,t,e,i){return ur(s,t,1-Math.exp(-e*i))}function Pp(s,t=1){return t-Math.abs(ac(s,t*2)-t)}function Rp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Lp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ip(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Dp(s,t){return s+Math.random()*(t-s)}function Np(s){return s*(.5-Math.random())}function Op(s){s!==void 0&&(Vh=s);let t=Vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(s){return s*hr}function Fp(s){return s*gr}function Sl(s){return(s&s-1)===0&&s!==0}function zp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ro(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bp(s,t,e,i,o){let a=Math.cos,h=Math.sin,c=a(e/2),d=h(e/2),f=a((t+i)/2),p=h((t+i)/2),_=a((t-i)/2),v=h((t-i)/2),x=a((i-t)/2),b=h((i-t)/2);switch(o){case"XYX":s.set(c*p,d*_,d*v,c*f);break;case"YZY":s.set(d*v,c*p,d*_,c*f);break;case"ZXZ":s.set(d*_,d*v,c*p,c*f);break;case"XZX":s.set(c*p,d*b,d*x,c*f);break;case"YXY":s.set(d*x,c*p,d*b,c*f);break;case"ZYZ":s.set(d*b,d*x,c*p,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ji={DEG2RAD:hr,RAD2DEG:gr,generateUUID:si,clamp:je,euclideanModulo:ac,mapLinear:Tp,inverseLerp:Ap,lerp:ur,damp:Cp,pingpong:Pp,smoothstep:Rp,smootherstep:Lp,randInt:Ip,randFloat:Dp,randFloatSpread:Np,seededRandom:Op,degToRad:Up,radToDeg:Fp,isPowerOfTwo:Sl,ceilPowerOfTwo:zp,floorPowerOfTwo:Ro,setQuaternionFromProperEuler:Bp,normalize:ve,denormalize:Vn},kt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),o=Math.sin(e),a=this.x-t.x,h=this.y-t.y;return this.x=a*i-h*o+t.x,this.y=a*o+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},he=class s{constructor(t,e,i,o,a,h,c,d,f){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,h,c,d,f)}set(t,e,i,o,a,h,c,d,f){let p=this.elements;return p[0]=t,p[1]=o,p[2]=c,p[3]=e,p[4]=a,p[5]=d,p[6]=i,p[7]=h,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,o=e.elements,a=this.elements,h=i[0],c=i[3],d=i[6],f=i[1],p=i[4],_=i[7],v=i[2],x=i[5],b=i[8],S=o[0],y=o[3],m=o[6],P=o[1],E=o[4],N=o[7],k=o[2],U=o[5],O=o[8];return a[0]=h*S+c*P+d*k,a[3]=h*y+c*E+d*U,a[6]=h*m+c*N+d*O,a[1]=f*S+p*P+_*k,a[4]=f*y+p*E+_*U,a[7]=f*m+p*N+_*O,a[2]=v*S+x*P+b*k,a[5]=v*y+x*E+b*U,a[8]=v*m+x*N+b*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],c=t[5],d=t[6],f=t[7],p=t[8];return e*h*p-e*c*f-i*a*p+i*c*d+o*a*f-o*h*d}invert(){let t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],c=t[5],d=t[6],f=t[7],p=t[8],_=p*h-c*f,v=c*d-p*a,x=f*a-h*d,b=e*_+i*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/b;return t[0]=_*S,t[1]=(o*f-p*i)*S,t[2]=(c*i-o*h)*S,t[3]=v*S,t[4]=(p*e-o*d)*S,t[5]=(o*a-c*e)*S,t[6]=x*S,t[7]=(i*d-f*e)*S,t[8]=(h*e-i*a)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,a,h,c){let d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*h+f*c)+h+t,-o*f,o*d,-o*(-f*h+d*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va=new he;function ju(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function _r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kp(){let s=_r("canvas");return s.style.display="block",s}var Wh={};function dr(s){s in Wh||(Wh[s]=!0,console.warn(s))}var Xh=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[ri]:{transfer:To,primaries:Ao,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:we,primaries:Ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Qo]:{transfer:To,primaries:Co,toReference:s=>s.applyMatrix3(Zh),fromReference:s=>s.applyMatrix3(Xh)},[oc]:{transfer:we,primaries:Co,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Zh),fromReference:s=>s.applyMatrix3(Xh).convertLinearToSRGB()}},Hp=new Set([ri,Qo]),ye={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Hp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=qr[t].toReference,o=qr[e].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return qr[s].primaries},getTransfer:function(s){return s===En?To:qr[s].transfer}};function Ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var us,Lo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=_r("canvas")),us.width=t.width,us.height=t.height;let i=us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_r("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let o=i.getImageData(0,0,t.width,t.height),a=o.data;for(let h=0;h<a.length;h++)a[h]=Ds(a[h]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ds(e[i]/255)*255):e[i]=Ds(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,Io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=si(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let h=0,c=o.length;h<c;h++)o[h].isDataTexture?a.push(Xa(o[h].image)):a.push(Xa(o[h]))}else a=Xa(o);i.url=a}return e||(t.images[this.uuid]=i),i}};function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,gn=class s extends Wn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Dn,o=Dn,a=wn,h=pr,c=Nn,d=Mi,f=s.DEFAULT_ANISOTROPY,p=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=si(),this.name="",this.source=new Io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=h,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Gi?ge:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yl:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yl:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Gi:$u}set encoding(t){dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gi?ge:En}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Hu;gn.DEFAULT_ANISOTROPY=1;var Ae=class s{constructor(t=0,e=0,i=0,o=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,o=this.z,a=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*o+h[12]*a,this.y=h[1]*e+h[5]*i+h[9]*o+h[13]*a,this.z=h[2]*e+h[6]*i+h[10]*o+h[14]*a,this.w=h[3]*e+h[7]*i+h[11]*o+h[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,a,d=t.elements,f=d[0],p=d[4],_=d[8],v=d[1],x=d[5],b=d[9],S=d[2],y=d[6],m=d[10];if(Math.abs(p-v)<.01&&Math.abs(_-S)<.01&&Math.abs(b-y)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+S)<.1&&Math.abs(b+y)<.1&&Math.abs(f+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(f+1)/2,N=(x+1)/2,k=(m+1)/2,U=(p+v)/4,O=(_+S)/4,rt=(b+y)/4;return E>N&&E>k?E<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(E),o=U/i,a=O/i):N>k?N<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(N),i=U/o,a=rt/o):k<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(k),i=O/a,o=rt/a),this.set(i,o,a,e),this}let P=Math.sqrt((y-b)*(y-b)+(_-S)*(_-S)+(v-p)*(v-p));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(_-S)/P,this.z=(v-p)/P,this.w=Math.acos((f+x+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wl=class extends Wn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let o={width:t,height:e,depth:1};i.encoding!==void 0&&(dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gi?ge:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends wl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Do=class extends gn{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var El=class extends gn{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,a,h,c){let d=i[o+0],f=i[o+1],p=i[o+2],_=i[o+3],v=a[h+0],x=a[h+1],b=a[h+2],S=a[h+3];if(c===0){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(c===1){t[e+0]=v,t[e+1]=x,t[e+2]=b,t[e+3]=S;return}if(_!==S||d!==v||f!==x||p!==b){let y=1-c,m=d*v+f*x+p*b+_*S,P=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let k=Math.sqrt(E),U=Math.atan2(k,m*P);y=Math.sin(y*U)/k,c=Math.sin(c*U)/k}let N=c*P;if(d=d*y+v*N,f=f*y+x*N,p=p*y+b*N,_=_*y+S*N,y===1-c){let k=1/Math.sqrt(d*d+f*f+p*p+_*_);d*=k,f*=k,p*=k,_*=k}}t[e]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,o,a,h){let c=i[o],d=i[o+1],f=i[o+2],p=i[o+3],_=a[h],v=a[h+1],x=a[h+2],b=a[h+3];return t[e]=c*b+p*_+d*x-f*v,t[e+1]=d*b+p*v+f*_-c*x,t[e+2]=f*b+p*x+c*v-d*_,t[e+3]=p*b-c*_-d*v-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,o=t._y,a=t._z,h=t._order,c=Math.cos,d=Math.sin,f=c(i/2),p=c(o/2),_=c(a/2),v=d(i/2),x=d(o/2),b=d(a/2);switch(h){case"XYZ":this._x=v*p*_+f*x*b,this._y=f*x*_-v*p*b,this._z=f*p*b+v*x*_,this._w=f*p*_-v*x*b;break;case"YXZ":this._x=v*p*_+f*x*b,this._y=f*x*_-v*p*b,this._z=f*p*b-v*x*_,this._w=f*p*_+v*x*b;break;case"ZXY":this._x=v*p*_-f*x*b,this._y=f*x*_+v*p*b,this._z=f*p*b+v*x*_,this._w=f*p*_-v*x*b;break;case"ZYX":this._x=v*p*_-f*x*b,this._y=f*x*_+v*p*b,this._z=f*p*b-v*x*_,this._w=f*p*_+v*x*b;break;case"YZX":this._x=v*p*_+f*x*b,this._y=f*x*_+v*p*b,this._z=f*p*b-v*x*_,this._w=f*p*_-v*x*b;break;case"XZY":this._x=v*p*_-f*x*b,this._y=f*x*_-v*p*b,this._z=f*p*b+v*x*_,this._w=f*p*_+v*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],o=e[4],a=e[8],h=e[1],c=e[5],d=e[9],f=e[2],p=e[6],_=e[10],v=i+c+_;if(v>0){let x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-d)*x,this._y=(a-f)*x,this._z=(h-o)*x}else if(i>c&&i>_){let x=2*Math.sqrt(1+i-c-_);this._w=(p-d)/x,this._x=.25*x,this._y=(o+h)/x,this._z=(a+f)/x}else if(c>_){let x=2*Math.sqrt(1+c-i-_);this._w=(a-f)/x,this._x=(o+h)/x,this._y=.25*x,this._z=(d+p)/x}else{let x=2*Math.sqrt(1+_-i-c);this._w=(h-o)/x,this._x=(a+f)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,o=t._y,a=t._z,h=t._w,c=e._x,d=e._y,f=e._z,p=e._w;return this._x=i*p+h*c+o*f-a*d,this._y=o*p+h*d+a*c-i*f,this._z=a*p+h*f+i*d-o*c,this._w=h*p-i*c-o*d-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,o=this._y,a=this._z,h=this._w,c=h*t._w+i*t._x+o*t._y+a*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=h,this._x=i,this._y=o,this._z=a,this;let d=1-c*c;if(d<=Number.EPSILON){let x=1-e;return this._w=x*h+e*this._w,this._x=x*i+e*this._x,this._y=x*o+e*this._y,this._z=x*a+e*this._z,this.normalize(),this}let f=Math.sqrt(d),p=Math.atan2(f,c),_=Math.sin((1-e)*p)/f,v=Math.sin(e*p)/f;return this._w=h*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(o),i*Math.sin(a),i*Math.cos(a),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*o,this.y=a[1]*e+a[4]*i+a[7]*o,this.z=a[2]*e+a[5]*i+a[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,o=this.z,a=t.elements,h=1/(a[3]*e+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*o+a[12])*h,this.y=(a[1]*e+a[5]*i+a[9]*o+a[13])*h,this.z=(a[2]*e+a[6]*i+a[10]*o+a[14])*h,this}applyQuaternion(t){let e=this.x,i=this.y,o=this.z,a=t.x,h=t.y,c=t.z,d=t.w,f=2*(h*o-c*i),p=2*(c*e-a*o),_=2*(a*i-h*e);return this.x=e+d*f+h*_-c*p,this.y=i+d*p+c*f-a*_,this.z=o+d*_+a*p-h*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o,this.y=a[1]*e+a[5]*i+a[9]*o,this.z=a[2]*e+a[6]*i+a[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,o=t.y,a=t.z,h=e.x,c=e.y,d=e.z;return this.x=o*d-a*c,this.y=a*h-i*d,this.z=i*c-o*h,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new z,qh=new Un,Vi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let h=0,c=a.count;h<c;h++)t.isMesh===!0?t.getVertexPosition(h,Pn):Pn.fromBufferAttribute(a,h),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let o=t.children;for(let a=0,h=o.length;a<h;a++)this.expandByObject(o[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),$r.subVectors(this.max,nr),ds.subVectors(t.a,nr),fs.subVectors(t.b,nr),ps.subVectors(t.c,nr),di.subVectors(fs,ds),fi.subVectors(ps,fs),Ii.subVectors(ds,ps);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,di.z,0,-di.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!qa(e,ds,fs,ps,$r)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,ds,fs,ps,$r))?!1:(Jr.crossVectors(di,fi),e=[Jr.x,Jr.y,Jr.z],qa(e,ds,fs,ps,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Kn=[new z,new z,new z,new z,new z,new z,new z,new z],Pn=new z,Yr=new Vi,ds=new z,fs=new z,ps=new z,di=new z,fi=new z,Ii=new z,nr=new z,$r=new z,Jr=new z,Di=new z;function qa(s,t,e,i,o){for(let a=0,h=s.length-3;a<=h;a+=3){Di.fromArray(s,a);let c=o.x*Math.abs(Di.x)+o.y*Math.abs(Di.y)+o.z*Math.abs(Di.z),d=t.dot(Di),f=e.dot(Di),p=i.dot(Di);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>c)return!1}return!0}var Wp=new Vi,ir=new z,Ya=new z,Wi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wp.setFromPoints(t).getCenter(i);let o=0;for(let a=0,h=t.length;a<h;a++)o=Math.max(o,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(ir,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Ya)),this.expandByPoint(ir.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new z,$a=new z,Kr=new z,pi=new z,Ja=new z,jr=new z,Ka=new z,Si=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){$a.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub($a);let a=t.distanceTo(e)*.5,h=-this.direction.dot(Kr),c=pi.dot(this.direction),d=-pi.dot(Kr),f=pi.lengthSq(),p=Math.abs(1-h*h),_,v,x,b;if(p>0)if(_=h*d-c,v=h*c-d,b=a*p,_>=0)if(v>=-b)if(v<=b){let S=1/p;_*=S,v*=S,x=_*(_+h*v+2*c)+v*(h*_+v+2*d)+f}else v=a,_=Math.max(0,-(h*v+c)),x=-_*_+v*(v+2*d)+f;else v=-a,_=Math.max(0,-(h*v+c)),x=-_*_+v*(v+2*d)+f;else v<=-b?(_=Math.max(0,-(-h*a+c)),v=_>0?-a:Math.min(Math.max(-a,-d),a),x=-_*_+v*(v+2*d)+f):v<=b?(_=0,v=Math.min(Math.max(-a,-d),a),x=v*(v+2*d)+f):(_=Math.max(0,-(h*a+c)),v=_>0?a:Math.min(Math.max(-a,-d),a),x=-_*_+v*(v+2*d)+f);else v=h>0?-a:a,_=Math.max(0,-(h*v+c)),x=-_*_+v*(v+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy($a).addScaledVector(Kr,v),x}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let i=jn.dot(this.direction),o=jn.dot(jn)-i*i,a=t.radius*t.radius;if(o>a)return null;let h=Math.sqrt(a-o),c=i-h,d=i+h;return d<0?null:c<0?this.at(d,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,a,h,c,d,f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return f>=0?(i=(t.min.x-v.x)*f,o=(t.max.x-v.x)*f):(i=(t.max.x-v.x)*f,o=(t.min.x-v.x)*f),p>=0?(a=(t.min.y-v.y)*p,h=(t.max.y-v.y)*p):(a=(t.max.y-v.y)*p,h=(t.min.y-v.y)*p),i>h||a>o||((a>i||isNaN(i))&&(i=a),(h<o||isNaN(o))&&(o=h),_>=0?(c=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(c=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),i>d||c>o)||((c>i||i!==i)&&(i=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,i,o,a){Ja.subVectors(e,t),jr.subVectors(i,t),Ka.crossVectors(Ja,jr);let h=this.direction.dot(Ka),c;if(h>0){if(o)return null;c=1}else if(h<0)c=-1,h=-h;else return null;pi.subVectors(this.origin,t);let d=c*this.direction.dot(jr.crossVectors(pi,jr));if(d<0)return null;let f=c*this.direction.dot(Ja.cross(pi));if(f<0||d+f>h)return null;let p=-c*pi.dot(Ka);return p<0?null:this.at(p/h,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class s{constructor(t,e,i,o,a,h,c,d,f,p,_,v,x,b,S,y){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,h,c,d,f,p,_,v,x,b,S,y)}set(t,e,i,o,a,h,c,d,f,p,_,v,x,b,S,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=o,m[1]=a,m[5]=h,m[9]=c,m[13]=d,m[2]=f,m[6]=p,m[10]=_,m[14]=v,m[3]=x,m[7]=b,m[11]=S,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,o=1/ms.setFromMatrixColumn(t,0).length(),a=1/ms.setFromMatrixColumn(t,1).length(),h=1/ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,o=t.y,a=t.z,h=Math.cos(i),c=Math.sin(i),d=Math.cos(o),f=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(t.order==="XYZ"){let v=h*p,x=h*_,b=c*p,S=c*_;e[0]=d*p,e[4]=-d*_,e[8]=f,e[1]=x+b*f,e[5]=v-S*f,e[9]=-c*d,e[2]=S-v*f,e[6]=b+x*f,e[10]=h*d}else if(t.order==="YXZ"){let v=d*p,x=d*_,b=f*p,S=f*_;e[0]=v+S*c,e[4]=b*c-x,e[8]=h*f,e[1]=h*_,e[5]=h*p,e[9]=-c,e[2]=x*c-b,e[6]=S+v*c,e[10]=h*d}else if(t.order==="ZXY"){let v=d*p,x=d*_,b=f*p,S=f*_;e[0]=v-S*c,e[4]=-h*_,e[8]=b+x*c,e[1]=x+b*c,e[5]=h*p,e[9]=S-v*c,e[2]=-h*f,e[6]=c,e[10]=h*d}else if(t.order==="ZYX"){let v=h*p,x=h*_,b=c*p,S=c*_;e[0]=d*p,e[4]=b*f-x,e[8]=v*f+S,e[1]=d*_,e[5]=S*f+v,e[9]=x*f-b,e[2]=-f,e[6]=c*d,e[10]=h*d}else if(t.order==="YZX"){let v=h*d,x=h*f,b=c*d,S=c*f;e[0]=d*p,e[4]=S-v*_,e[8]=b*_+x,e[1]=_,e[5]=h*p,e[9]=-c*p,e[2]=-f*p,e[6]=x*_+b,e[10]=v-S*_}else if(t.order==="XZY"){let v=h*d,x=h*f,b=c*d,S=c*f;e[0]=d*p,e[4]=-_,e[8]=f*p,e[1]=v*_+S,e[5]=h*p,e[9]=x*_-b,e[2]=b*_-x,e[6]=c*p,e[10]=S*_+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,Zp)}lookAt(t,e,i){let o=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),mi.crossVectors(i,pn),mi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),mi.crossVectors(i,pn)),mi.normalize(),Qr.crossVectors(pn,mi),o[0]=mi.x,o[4]=Qr.x,o[8]=pn.x,o[1]=mi.y,o[5]=Qr.y,o[9]=pn.y,o[2]=mi.z,o[6]=Qr.z,o[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,o=e.elements,a=this.elements,h=i[0],c=i[4],d=i[8],f=i[12],p=i[1],_=i[5],v=i[9],x=i[13],b=i[2],S=i[6],y=i[10],m=i[14],P=i[3],E=i[7],N=i[11],k=i[15],U=o[0],O=o[4],rt=o[8],A=o[12],R=o[1],et=o[5],st=o[9],Mt=o[13],B=o[2],Z=o[6],V=o[10],ot=o[14],W=o[3],j=o[7],it=o[11],at=o[15];return a[0]=h*U+c*R+d*B+f*W,a[4]=h*O+c*et+d*Z+f*j,a[8]=h*rt+c*st+d*V+f*it,a[12]=h*A+c*Mt+d*ot+f*at,a[1]=p*U+_*R+v*B+x*W,a[5]=p*O+_*et+v*Z+x*j,a[9]=p*rt+_*st+v*V+x*it,a[13]=p*A+_*Mt+v*ot+x*at,a[2]=b*U+S*R+y*B+m*W,a[6]=b*O+S*et+y*Z+m*j,a[10]=b*rt+S*st+y*V+m*it,a[14]=b*A+S*Mt+y*ot+m*at,a[3]=P*U+E*R+N*B+k*W,a[7]=P*O+E*et+N*Z+k*j,a[11]=P*rt+E*st+N*V+k*it,a[15]=P*A+E*Mt+N*ot+k*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],o=t[8],a=t[12],h=t[1],c=t[5],d=t[9],f=t[13],p=t[2],_=t[6],v=t[10],x=t[14],b=t[3],S=t[7],y=t[11],m=t[15];return b*(+a*d*_-o*f*_-a*c*v+i*f*v+o*c*x-i*d*x)+S*(+e*d*x-e*f*v+a*h*v-o*h*x+o*f*p-a*d*p)+y*(+e*f*_-e*c*x-a*h*_+i*h*x+a*c*p-i*f*p)+m*(-o*c*p-e*d*_+e*c*v+o*h*_-i*h*v+i*d*p)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],c=t[5],d=t[6],f=t[7],p=t[8],_=t[9],v=t[10],x=t[11],b=t[12],S=t[13],y=t[14],m=t[15],P=_*y*f-S*v*f+S*d*x-c*y*x-_*d*m+c*v*m,E=b*v*f-p*y*f-b*d*x+h*y*x+p*d*m-h*v*m,N=p*S*f-b*_*f+b*c*x-h*S*x-p*c*m+h*_*m,k=b*_*d-p*S*d-b*c*v+h*S*v+p*c*y-h*_*y,U=e*P+i*E+o*N+a*k;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/U;return t[0]=P*O,t[1]=(S*v*a-_*y*a-S*o*x+i*y*x+_*o*m-i*v*m)*O,t[2]=(c*y*a-S*d*a+S*o*f-i*y*f-c*o*m+i*d*m)*O,t[3]=(_*d*a-c*v*a-_*o*f+i*v*f+c*o*x-i*d*x)*O,t[4]=E*O,t[5]=(p*y*a-b*v*a+b*o*x-e*y*x-p*o*m+e*v*m)*O,t[6]=(b*d*a-h*y*a-b*o*f+e*y*f+h*o*m-e*d*m)*O,t[7]=(h*v*a-p*d*a+p*o*f-e*v*f-h*o*x+e*d*x)*O,t[8]=N*O,t[9]=(b*_*a-p*S*a-b*i*x+e*S*x+p*i*m-e*_*m)*O,t[10]=(h*S*a-b*c*a+b*i*f-e*S*f-h*i*m+e*c*m)*O,t[11]=(p*c*a-h*_*a-p*i*f+e*_*f+h*i*x-e*c*x)*O,t[12]=k*O,t[13]=(p*S*o-b*_*o+b*i*v-e*S*v-p*i*y+e*_*y)*O,t[14]=(b*c*o-h*S*o-b*i*d+e*S*d+h*i*y-e*c*y)*O,t[15]=(h*_*o-p*c*o+p*i*d-e*_*d-h*i*v+e*c*v)*O,this}scale(t){let e=this.elements,i=t.x,o=t.y,a=t.z;return e[0]*=i,e[4]*=o,e[8]*=a,e[1]*=i,e[5]*=o,e[9]*=a,e[2]*=i,e[6]*=o,e[10]*=a,e[3]*=i,e[7]*=o,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),o=Math.sin(e),a=1-i,h=t.x,c=t.y,d=t.z,f=a*h,p=a*c;return this.set(f*h+i,f*c-o*d,f*d+o*c,0,f*c+o*d,p*c+i,p*d-o*h,0,f*d-o*c,p*d+o*h,a*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,a,h){return this.set(1,i,a,0,t,1,h,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){let o=this.elements,a=e._x,h=e._y,c=e._z,d=e._w,f=a+a,p=h+h,_=c+c,v=a*f,x=a*p,b=a*_,S=h*p,y=h*_,m=c*_,P=d*f,E=d*p,N=d*_,k=i.x,U=i.y,O=i.z;return o[0]=(1-(S+m))*k,o[1]=(x+N)*k,o[2]=(b-E)*k,o[3]=0,o[4]=(x-N)*U,o[5]=(1-(v+m))*U,o[6]=(y+P)*U,o[7]=0,o[8]=(b+E)*O,o[9]=(y-P)*O,o[10]=(1-(v+S))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){let o=this.elements,a=ms.set(o[0],o[1],o[2]).length(),h=ms.set(o[4],o[5],o[6]).length(),c=ms.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),t.x=o[12],t.y=o[13],t.z=o[14],Rn.copy(this);let f=1/a,p=1/h,_=1/c;return Rn.elements[0]*=f,Rn.elements[1]*=f,Rn.elements[2]*=f,Rn.elements[4]*=p,Rn.elements[5]*=p,Rn.elements[6]*=p,Rn.elements[8]*=_,Rn.elements[9]*=_,Rn.elements[10]*=_,e.setFromRotationMatrix(Rn),i.x=a,i.y=h,i.z=c,this}makePerspective(t,e,i,o,a,h,c=ii){let d=this.elements,f=2*a/(e-t),p=2*a/(i-o),_=(e+t)/(e-t),v=(i+o)/(i-o),x,b;if(c===ii)x=-(h+a)/(h-a),b=-2*h*a/(h-a);else if(c===Po)x=-h/(h-a),b=-h*a/(h-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,o,a,h,c=ii){let d=this.elements,f=1/(e-t),p=1/(i-o),_=1/(h-a),v=(e+t)*f,x=(i+o)*p,b,S;if(c===ii)b=(h+a)*_,S=-2*_;else if(c===Po)b=a*_,S=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=S,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ms=new z,Rn=new Pe,Xp=new z(0,0,0),Zp=new z(1,1,1),mi=new z,Qr=new z,pn=new z,Yh=new Pe,$h=new Un,No=class s{constructor(t=0,e=0,i=0,o=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let o=t.elements,a=o[0],h=o[4],c=o[8],d=o[1],f=o[5],p=o[9],_=o[2],v=o[6],x=o[10];switch(e){case"XYZ":this._y=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(je(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-h,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-je(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-h,f));break;case"YZX":this._z=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $h.setFromEuler(this),this.setFromQuaternion($h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};No.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qp=0,Jh=new z,gs=new Un,Qn=new Pe,to=new z,sr=new z,Yp=new z,$p=new Un,Kh=new z(1,0,0),jh=new z(0,1,0),Qh=new z(0,0,1),Jp={type:"added"},Kp={type:"removed"},Ze=class s extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new z,e=new No,i=new Un,o=new z(1,1,1);function a(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Pe},normalMatrix:{value:new he}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);let o=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(sr,to,this.up):Qn.lookAt(to,sr,this.up),this.quaternion.setFromRotationMatrix(Qn),o&&(Qn.extractRotation(o.matrixWorld),gs.setFromRotationMatrix(Qn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Jp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){let h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let o=this.children;for(let a=0,h=o.length;a<h;a++)o[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,Yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,o=e.length;i<o;i++){let a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let o=this.children;for(let a=0,h=o.length;a<h;a++){let c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let d=c.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){let _=d[f];a(t.shapes,_)}else a(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(a(t.materials,this.material[d]));o.material=c}else o.material=a(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let d=this.animations[c];o.animations.push(a(t.animations,d))}}if(e){let c=h(t.geometries),d=h(t.materials),f=h(t.textures),p=h(t.images),_=h(t.shapes),v=h(t.skeletons),x=h(t.animations),b=h(t.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),b.length>0&&(i.nodes=b)}return i.object=o,i;function h(c){let d=[];for(let f in c){let p=c[f];delete p.metadata,d.push(p)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let o=t.children[i];this.add(o.clone())}return this}};Ze.DEFAULT_UP=new z(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new z,ti=new z,ja=new z,ei=new z,_s=new z,vs=new z,tu=new z,Qa=new z,tl=new z,el=new z,eo=!1,Bi=class s{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),Ln.subVectors(t,e),o.cross(Ln);let a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(t,e,i,o,a){Ln.subVectors(o,e),ti.subVectors(i,e),ja.subVectors(t,e);let h=Ln.dot(Ln),c=Ln.dot(ti),d=Ln.dot(ja),f=ti.dot(ti),p=ti.dot(ja),_=h*f-c*c;if(_===0)return a.set(0,0,0),null;let v=1/_,x=(f*d-c*p)*v,b=(h*p-c*d)*v;return a.set(1-x-b,b,x)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,o,a,h,c,d){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(t,e,i,o,a,h,c,d)}static getInterpolation(t,e,i,o,a,h,c,d){return this.getBarycoord(t,e,i,o,ei)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ei.x),d.addScaledVector(h,ei.y),d.addScaledVector(c,ei.z),d)}static isFrontFacing(t,e,i,o){return Ln.subVectors(i,e),ti.subVectors(t,e),Ln.cross(ti).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ln.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,o,a){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),s.getInterpolation(t,this.a,this.b,this.c,e,i,o,a)}getInterpolation(t,e,i,o,a){return s.getInterpolation(t,this.a,this.b,this.c,e,i,o,a)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,o=this.b,a=this.c,h,c;_s.subVectors(o,i),vs.subVectors(a,i),Qa.subVectors(t,i);let d=_s.dot(Qa),f=vs.dot(Qa);if(d<=0&&f<=0)return e.copy(i);tl.subVectors(t,o);let p=_s.dot(tl),_=vs.dot(tl);if(p>=0&&_<=p)return e.copy(o);let v=d*_-p*f;if(v<=0&&d>=0&&p<=0)return h=d/(d-p),e.copy(i).addScaledVector(_s,h);el.subVectors(t,a);let x=_s.dot(el),b=vs.dot(el);if(b>=0&&x<=b)return e.copy(a);let S=x*f-d*b;if(S<=0&&f>=0&&b<=0)return c=f/(f-b),e.copy(i).addScaledVector(vs,c);let y=p*b-x*_;if(y<=0&&_-p>=0&&x-b>=0)return tu.subVectors(a,o),c=(_-p)/(_-p+(x-b)),e.copy(o).addScaledVector(tu,c);let m=1/(y+S+v);return h=S*m,c=v*m,e.copy(i).addScaledVector(_s,h).addScaledVector(vs,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},no={h:0,s:0,l:0};function nl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Vt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,ye.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=ye.workingColorSpace){if(t=ac(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,h=2*i-a;this.r=nl(h,a,t+1/3),this.g=nl(h,a,t),this.b=nl(h,a,t-1/3)}return ye.toWorkingColorSpace(this,o),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,h=o[1],c=o[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=o[1],h=a.length;if(h===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let i=Qu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=Wa(t.r),this.g=Wa(t.g),this.b=Wa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return ye.fromWorkingColorSpace(Ke.copy(this),t),Math.round(je(Ke.r*255,0,255))*65536+Math.round(je(Ke.g*255,0,255))*256+Math.round(je(Ke.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(Ke.copy(this),e);let i=Ke.r,o=Ke.g,a=Ke.b,h=Math.max(i,o,a),c=Math.min(i,o,a),d,f,p=(c+h)/2;if(c===h)d=0,f=0;else{let _=h-c;switch(f=p<=.5?_/(h+c):_/(2-h-c),h){case i:d=(o-a)/_+(o<a?6:0);break;case o:d=(a-i)/_+2;break;case a:d=(i-o)/_+4;break}d/=6}return t.h=d,t.s=f,t.l=p,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=ge){ye.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,i=Ke.g,o=Ke.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(no);let i=ur(gi.h,no.h,e),o=ur(gi.s,no.s,e),a=ur(gi.l,no.l,e);return this.setHSL(i,o,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,o=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*o,this.g=a[1]*e+a[4]*i+a[7]*o,this.b=a[2]*e+a[5]*i+a[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Vt;Vt.NAMES=Qu;var jp=0,Xn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Is,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ml&&(i.blendSrc=this.blendSrc),this.blendDst!==gl&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){let h=[];for(let c in a){let d=a[c];delete d.metadata,h.push(d)}return h}if(e){let a=o(t.textures),h=o(t.images);a.length>0&&(i.textures=a),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let o=e.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_n=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new z,io=new kt,Fe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),o=ve(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),o=ve(o,this.array),a=ve(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ml&&(t.usage=this.usage),t}};var Oo=class extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Uo=class extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var en=class extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Qp=0,Sn=new Pe,il=new Ze,ys=new z,mn=new Vi,rr=new Vi,Ge=new z,qe=class s extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Uo:Oo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new he().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return il.lookAt(t),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=[];for(let i=0,o=t.length;i<o;i++){let a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){let a=e[i];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let a=0,h=e.length;a<h;a++){let c=e[a];rr.setFromBufferAttribute(c),this.morphTargetsRelative?(Ge.addVectors(mn.min,rr.min),mn.expandByPoint(Ge),Ge.addVectors(mn.max,rr.max),mn.expandByPoint(Ge)):(mn.expandByPoint(rr.min),mn.expandByPoint(rr.max))}mn.getCenter(i);let o=0;for(let a=0,h=t.count;a<h;a++)Ge.fromBufferAttribute(t,a),o=Math.max(o,i.distanceToSquared(Ge));if(e)for(let a=0,h=e.length;a<h;a++){let c=e[a],d=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)Ge.fromBufferAttribute(c,f),d&&(ys.fromBufferAttribute(t,f),Ge.add(ys)),o=Math.max(o,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,o=e.position.array,a=e.normal.array,h=e.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*c),4));let d=this.getAttribute("tangent").array,f=[],p=[];for(let R=0;R<c;R++)f[R]=new z,p[R]=new z;let _=new z,v=new z,x=new z,b=new kt,S=new kt,y=new kt,m=new z,P=new z;function E(R,et,st){_.fromArray(o,R*3),v.fromArray(o,et*3),x.fromArray(o,st*3),b.fromArray(h,R*2),S.fromArray(h,et*2),y.fromArray(h,st*2),v.sub(_),x.sub(_),S.sub(b),y.sub(b);let Mt=1/(S.x*y.y-y.x*S.y);isFinite(Mt)&&(m.copy(v).multiplyScalar(y.y).addScaledVector(x,-S.y).multiplyScalar(Mt),P.copy(x).multiplyScalar(S.x).addScaledVector(v,-y.x).multiplyScalar(Mt),f[R].add(m),f[et].add(m),f[st].add(m),p[R].add(P),p[et].add(P),p[st].add(P))}let N=this.groups;N.length===0&&(N=[{start:0,count:i.length}]);for(let R=0,et=N.length;R<et;++R){let st=N[R],Mt=st.start,B=st.count;for(let Z=Mt,V=Mt+B;Z<V;Z+=3)E(i[Z+0],i[Z+1],i[Z+2])}let k=new z,U=new z,O=new z,rt=new z;function A(R){O.fromArray(a,R*3),rt.copy(O);let et=f[R];k.copy(et),k.sub(O.multiplyScalar(O.dot(et))).normalize(),U.crossVectors(rt,et);let Mt=U.dot(p[R])<0?-1:1;d[R*4]=k.x,d[R*4+1]=k.y,d[R*4+2]=k.z,d[R*4+3]=Mt}for(let R=0,et=N.length;R<et;++R){let st=N[R],Mt=st.start,B=st.count;for(let Z=Mt,V=Mt+B;Z<V;Z+=3)A(i[Z+0]),A(i[Z+1]),A(i[Z+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);let o=new z,a=new z,h=new z,c=new z,d=new z,f=new z,p=new z,_=new z;if(t)for(let v=0,x=t.count;v<x;v+=3){let b=t.getX(v+0),S=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(e,b),a.fromBufferAttribute(e,S),h.fromBufferAttribute(e,y),p.subVectors(h,a),_.subVectors(o,a),p.cross(_),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,S),f.fromBufferAttribute(i,y),c.add(p),d.add(p),f.add(p),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(S,d.x,d.y,d.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let v=0,x=e.count;v<x;v+=3)o.fromBufferAttribute(e,v+0),a.fromBufferAttribute(e,v+1),h.fromBufferAttribute(e,v+2),p.subVectors(h,a),_.subVectors(o,a),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(c,d){let f=c.array,p=c.itemSize,_=c.normalized,v=new f.constructor(d.length*p),x=0,b=0;for(let S=0,y=d.length;S<y;S++){c.isInterleavedBufferAttribute?x=d[S]*c.data.stride+c.offset:x=d[S]*p;for(let m=0;m<p;m++)v[b++]=f[x++]}return new Fe(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,o=this.attributes;for(let c in o){let d=o[c],f=t(d,i);e.setAttribute(c,f)}let a=this.morphAttributes;for(let c in a){let d=[],f=a[c];for(let p=0,_=f.length;p<_;p++){let v=f[p],x=t(v,i);d.push(x)}e.morphAttributes[c]=d}e.morphTargetsRelative=this.morphTargetsRelative;let h=this.groups;for(let c=0,d=h.length;c<d;c++){let f=h[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let d=this.parameters;for(let f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let d in i){let f=i[d];t.data.attributes[d]=f.toJSON(t.data)}let o={},a=!1;for(let d in this.morphAttributes){let f=this.morphAttributes[d],p=[];for(let _=0,v=f.length;_<v;_++){let x=f[_];p.push(x.toJSON(t.data))}p.length>0&&(o[d]=p,a=!0)}a&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);let h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let o=t.attributes;for(let f in o){let p=o[f];this.setAttribute(f,p.clone(e))}let a=t.morphAttributes;for(let f in a){let p=[],_=a[f];for(let v=0,x=_.length;v<x;v++)p.push(_[v].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let h=t.groups;for(let f=0,p=h.length;f<p;f++){let _=h[f];this.addGroup(_.start,_.count,_.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=new Pe,Ni=new Si,so=new Wi,nu=new z,xs=new z,Ms=new z,bs=new z,sl=new z,ro=new z,oo=new kt,ao=new kt,lo=new kt,iu=new z,su=new z,ru=new z,co=new z,ho=new z,Ee=class extends Ze{constructor(t=new qe,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=o.length;a<h;a++){let c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(t,e){let i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,h=i.morphTargetsRelative;e.fromBufferAttribute(o,t);let c=this.morphTargetInfluences;if(a&&c){ro.set(0,0,0);for(let d=0,f=a.length;d<f;d++){let p=c[d],_=a[d];p!==0&&(sl.fromBufferAttribute(_,t),h?ro.addScaledVector(sl,p):ro.addScaledVector(sl.sub(e),p))}e.add(ro)}return e}raycast(t,e){let i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(a),Ni.copy(t.ray).recast(t.near),!(so.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(so,nu)===null||Ni.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(a).invert(),Ni.copy(t.ray).applyMatrix4(eu),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,i){let o,a=this.geometry,h=this.material,c=a.index,d=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(h))for(let b=0,S=v.length;b<S;b++){let y=v[b],m=h[y.materialIndex],P=Math.max(y.start,x.start),E=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let N=P,k=E;N<k;N+=3){let U=c.getX(N),O=c.getX(N+1),rt=c.getX(N+2);o=uo(this,m,t,i,f,p,_,U,O,rt),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let b=Math.max(0,x.start),S=Math.min(c.count,x.start+x.count);for(let y=b,m=S;y<m;y+=3){let P=c.getX(y),E=c.getX(y+1),N=c.getX(y+2);o=uo(this,h,t,i,f,p,_,P,E,N),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}else if(d!==void 0)if(Array.isArray(h))for(let b=0,S=v.length;b<S;b++){let y=v[b],m=h[y.materialIndex],P=Math.max(y.start,x.start),E=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let N=P,k=E;N<k;N+=3){let U=N,O=N+1,rt=N+2;o=uo(this,m,t,i,f,p,_,U,O,rt),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,e.push(o))}}else{let b=Math.max(0,x.start),S=Math.min(d.count,x.start+x.count);for(let y=b,m=S;y<m;y+=3){let P=y,E=y+1,N=y+2;o=uo(this,h,t,i,f,p,_,P,E,N),o&&(o.faceIndex=Math.floor(y/3),e.push(o))}}}};function tm(s,t,e,i,o,a,h,c){let d;if(t.side===tn?d=i.intersectTriangle(h,a,o,!0,c):d=i.intersectTriangle(o,a,h,t.side===bi,c),d===null)return null;ho.copy(c),ho.applyMatrix4(s.matrixWorld);let f=e.ray.origin.distanceTo(ho);return f<e.near||f>e.far?null:{distance:f,point:ho.clone(),object:s}}function uo(s,t,e,i,o,a,h,c,d,f){s.getVertexPosition(c,xs),s.getVertexPosition(d,Ms),s.getVertexPosition(f,bs);let p=tm(s,t,e,i,xs,Ms,bs,co);if(p){o&&(oo.fromBufferAttribute(o,c),ao.fromBufferAttribute(o,d),lo.fromBufferAttribute(o,f),p.uv=Bi.getInterpolation(co,xs,Ms,bs,oo,ao,lo,new kt)),a&&(oo.fromBufferAttribute(a,c),ao.fromBufferAttribute(a,d),lo.fromBufferAttribute(a,f),p.uv1=Bi.getInterpolation(co,xs,Ms,bs,oo,ao,lo,new kt),p.uv2=p.uv1),h&&(iu.fromBufferAttribute(h,c),su.fromBufferAttribute(h,d),ru.fromBufferAttribute(h,f),p.normal=Bi.getInterpolation(co,xs,Ms,bs,iu,su,ru,new z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let _={a:c,b:d,c:f,normal:new z,materialIndex:0};Bi.getNormal(xs,Ms,bs,_.normal),p.face=_}return p}var yr=class s extends qe{constructor(t=1,e=1,i=1,o=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:a,depthSegments:h};let c=this;o=Math.floor(o),a=Math.floor(a),h=Math.floor(h);let d=[],f=[],p=[],_=[],v=0,x=0;b("z","y","x",-1,-1,i,e,t,h,a,0),b("z","y","x",1,-1,i,e,-t,h,a,1),b("x","z","y",1,1,t,i,e,o,h,2),b("x","z","y",1,-1,t,i,-e,o,h,3),b("x","y","z",1,-1,t,e,i,o,a,4),b("x","y","z",-1,-1,t,e,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(_,2));function b(S,y,m,P,E,N,k,U,O,rt,A){let R=N/O,et=k/rt,st=N/2,Mt=k/2,B=U/2,Z=O+1,V=rt+1,ot=0,W=0,j=new z;for(let it=0;it<V;it++){let at=it*et-Mt;for(let mt=0;mt<Z;mt++){let X=mt*R-st;j[S]=X*P,j[y]=at*E,j[m]=B,f.push(j.x,j.y,j.z),j[S]=0,j[y]=0,j[m]=U>0?1:-1,p.push(j.x,j.y,j.z),_.push(mt/O),_.push(1-it/rt),ot+=1}}for(let it=0;it<rt;it++)for(let at=0;at<O;at++){let mt=v+at+Z*it,X=v+at+Z*(it+1),tt=v+(at+1)+Z*(it+1),xt=v+(at+1)+Z*it;d.push(mt,X,xt),d.push(X,tt,xt),W+=6}c.addGroup(x,W,A),x+=W,v+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let o=s[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function an(s){let t={};for(let e=0;e<s.length;e++){let i=zs(s[e]);for(let o in i)t[o]=i[o]}return t}function em(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function td(s){return s.getRenderTarget()===null?s.outputColorSpace:ye.workingColorSpace}var nm={clone:zs,merge:an},im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let o in this.uniforms){let h=this.uniforms[o].value;h&&h.isTexture?e.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[o]={type:"m4",value:h.toArray()}:e.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Fo=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qe=class extends Fo{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,o,a,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,a=-.5*o,h=this.view;if(this.view!==null&&this.view.enabled){let d=h.fullWidth,f=h.fullHeight;a+=h.offsetX*o/d,e-=h.offsetY*i/f,o*=h.width/d,i*=h.height/f}let c=this.filmOffset;c!==0&&(a+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,ws=1,Tl=class extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new Qe(Ss,ws,t,e);o.layers=this.layers,this.add(o);let a=new Qe(Ss,ws,t,e);a.layers=this.layers,this.add(a);let h=new Qe(Ss,ws,t,e);h.layers=this.layers,this.add(h);let c=new Qe(Ss,ws,t,e);c.layers=this.layers,this.add(c);let d=new Qe(Ss,ws,t,e);d.layers=this.layers,this.add(d);let f=new Qe(Ss,ws,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,o,a,h,c,d]=e;for(let f of e)this.remove(f);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,h,c,d,f,p]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,a),t.setRenderTarget(i,1,o),t.render(e,h),t.setRenderTarget(i,2,o),t.render(e,c),t.setRenderTarget(i,3,o),t.render(e,d),t.setRenderTarget(i,4,o),t.render(e,f),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,o),t.render(e,p),t.setRenderTarget(_,v,x),t.xr.enabled=b,i.texture.needsPMREMUpdate=!0}},zo=class extends gn{constructor(t,e,i,o,a,h,c,d,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,i,o,a,h,c,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Al=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];e.encoding!==void 0&&(dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Gi?ge:En),this.texture=new zo(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new yr(5,5,5),a=new Fn({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:yi});a.uniforms.tEquirect.value=e;let h=new Ee(o,a),c=e.minFilter;return e.minFilter===pr&&(e.minFilter=wn),new Tl(1,10,this).update(t,h),e.minFilter=c,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,o){let a=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,o);t.setRenderTarget(a)}},rl=new z,rm=new z,om=new he,In=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let o=rl.subVectors(i,e).cross(rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(rl),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||om.getNormalMatrix(t),o=this.coplanarPoint(rl).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Wi,fo=new z,xr=class{constructor(t=new In,e=new In,i=new In,o=new In,a=new In,h=new In){this.planes=[t,e,i,o,a,h]}set(t,e,i,o,a,h){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(h),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii){let i=this.planes,o=t.elements,a=o[0],h=o[1],c=o[2],d=o[3],f=o[4],p=o[5],_=o[6],v=o[7],x=o[8],b=o[9],S=o[10],y=o[11],m=o[12],P=o[13],E=o[14],N=o[15];if(i[0].setComponents(d-a,v-f,y-x,N-m).normalize(),i[1].setComponents(d+a,v+f,y+x,N+m).normalize(),i[2].setComponents(d+h,v+p,y+b,N+P).normalize(),i[3].setComponents(d-h,v-p,y-b,N-P).normalize(),i[4].setComponents(d-c,v-_,y-S,N-E).normalize(),e===ii)i[5].setComponents(d+c,v+_,y+S,N+E).normalize();else if(e===Po)i[5].setComponents(c,_,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,i=t.center,o=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let o=e[i];if(fo.x=o.normal.x>0?t.max.x:t.min.x,fo.y=o.normal.y>0?t.max.y:t.min.y,fo.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let s=null,t=!1,e=null,i=null;function o(a,h){e(a,h),i=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function am(s,t){let e=t.isWebGL2,i=new WeakMap;function o(f,p){let _=f.array,v=f.usage,x=_.byteLength,b=s.createBuffer();s.bindBuffer(p,b),s.bufferData(p,_,v),f.onUploadCallback();let S;if(_ instanceof Float32Array)S=s.FLOAT;else if(_ instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(e)S=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)S=s.SHORT;else if(_ instanceof Uint32Array)S=s.UNSIGNED_INT;else if(_ instanceof Int32Array)S=s.INT;else if(_ instanceof Int8Array)S=s.BYTE;else if(_ instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:b,type:S,bytesPerElement:_.BYTES_PER_ELEMENT,version:f.version,size:x}}function a(f,p,_){let v=p.array,x=p._updateRange,b=p.updateRanges;if(s.bindBuffer(_,f),x.count===-1&&b.length===0&&s.bufferSubData(_,0,v),b.length!==0){for(let S=0,y=b.length;S<y;S++){let m=b[S];e?s.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v,m.start,m.count):s.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v.subarray(m.start,m.start+m.count))}p.clearUpdateRanges()}x.count!==-1&&(e?s.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):s.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function h(f){return f.isInterleavedBufferAttribute&&(f=f.data),i.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);let p=i.get(f);p&&(s.deleteBuffer(p.buffer),i.delete(f))}function d(f,p){if(f.isGLBufferAttribute){let v=i.get(f);(!v||v.version<f.version)&&i.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);let _=i.get(f);if(_===void 0)i.set(f,o(f,p));else if(_.version<f.version){if(_.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,f,p),_.version=f.version}}return{get:h,remove:c,update:d}}var Cl=class s extends qe{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};let a=t/2,h=e/2,c=Math.floor(i),d=Math.floor(o),f=c+1,p=d+1,_=t/c,v=e/d,x=[],b=[],S=[],y=[];for(let m=0;m<p;m++){let P=m*v-h;for(let E=0;E<f;E++){let N=E*_-a;b.push(N,-P,0),S.push(0,0,1),y.push(E/c),y.push(1-m/d)}}for(let m=0;m<d;m++)for(let P=0;P<c;P++){let E=P+f*m,N=P+f*(m+1),k=P+1+f*(m+1),U=P+1+f*m;x.push(E,N,U),x.push(N,k,U)}this.setIndex(x),this.setAttribute("position",new en(b,3)),this.setAttribute("normal",new en(S,3)),this.setAttribute("uv",new en(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,m_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:_m,begin_vertex:vm,beginnormal_vertex:ym,bsdfs:xm,iridescence_fragment:Mm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:Tm,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Rm,common:Lm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Om,emissivemap_fragment:Um,emissivemap_pars_fragment:Fm,colorspace_fragment:zm,colorspace_pars_fragment:Bm,envmap_fragment:km,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Gm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:Zm,fog_fragment:qm,fog_pars_fragment:Ym,gradientmap_pars_fragment:$m,lightmap_fragment:Jm,lightmap_pars_fragment:Km,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:tg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:vg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:xg,morphcolor_vertex:Mg,morphnormal_vertex:bg,morphtarget_pars_vertex:Sg,morphtarget_vertex:wg,normal_fragment_begin:Eg,normal_fragment_maps:Tg,normal_pars_fragment:Ag,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Rg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ng,opaque_fragment:Og,packing:Ug,premultiplied_alpha_fragment:Fg,project_vertex:zg,dithering_fragment:Bg,dithering_pars_fragment:kg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:Zg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:$g,skinnormal_vertex:Jg,specularmap_fragment:Kg,specularmap_pars_fragment:jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:o_,background_vert:a_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:h_,cube_vert:u_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distanceRGBA_vert:m_,distanceRGBA_frag:g_,equirect_vert:__,equirect_frag:v_,linedashed_vert:y_,linedashed_frag:x_,meshbasic_vert:M_,meshbasic_frag:b_,meshlambert_vert:S_,meshlambert_frag:w_,meshmatcap_vert:E_,meshmatcap_frag:T_,meshnormal_vert:A_,meshnormal_frag:C_,meshphong_vert:P_,meshphong_frag:R_,meshphysical_vert:L_,meshphysical_frag:I_,meshtoon_vert:D_,meshtoon_frag:N_,points_vert:O_,points_frag:U_,shadow_vert:F_,shadow_frag:z_,sprite_vert:B_,sprite_frag:k_},bt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Gn={basic:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:an([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:an([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:an([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:an([bt.points,bt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:an([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:an([bt.common,bt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:an([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:an([bt.sprite,bt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:an([bt.common,bt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:an([bt.lights,bt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var po={r:0,b:0,g:0};function H_(s,t,e,i,o,a,h){let c=new Vt(0),d=a===!0?0:1,f,p,_=null,v=0,x=null;function b(y,m){let P=!1,E=m.isScene===!0?m.background:null;E&&E.isTexture&&(E=(m.backgroundBlurriness>0?e:t).get(E)),E===null?S(c,d):E&&E.isColor&&(S(E,1),P=!0);let N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,h):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(s.autoClear||P)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===jo)?(p===void 0&&(p=new Ee(new yr(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:zs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),p.material.uniforms.envMap.value=E,p.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.toneMapped=ye.getTransfer(E.colorSpace)!==we,(_!==E||v!==E.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,_=E,v=E.version,x=s.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new Ee(new Cl(2,2),new Fn({name:"BackgroundMaterial",uniforms:zs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=ye.getTransfer(E.colorSpace)!==we,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(_!==E||v!==E.version||x!==s.toneMapping)&&(f.material.needsUpdate=!0,_=E,v=E.version,x=s.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null))}function S(y,m){y.getRGB(po,td(s)),i.buffers.color.setClear(po.r,po.g,po.b,m,h)}return{getClearColor:function(){return c},setClearColor:function(y,m=1){c.set(y),d=m,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,S(c,d)},render:b}}function G_(s,t,e,i){let o=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||a!==null,c={},d=y(null),f=d,p=!1;function _(B,Z,V,ot,W){let j=!1;if(h){let it=S(ot,V,Z);f!==it&&(f=it,x(f.object)),j=m(B,ot,V,W),j&&P(B,ot,V,W)}else{let it=Z.wireframe===!0;(f.geometry!==ot.id||f.program!==V.id||f.wireframe!==it)&&(f.geometry=ot.id,f.program=V.id,f.wireframe=it,j=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(j||p)&&(p=!1,rt(B,Z,V,ot),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function v(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function x(B){return i.isWebGL2?s.bindVertexArray(B):a.bindVertexArrayOES(B)}function b(B){return i.isWebGL2?s.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function S(B,Z,V){let ot=V.wireframe===!0,W=c[B.id];W===void 0&&(W={},c[B.id]=W);let j=W[Z.id];j===void 0&&(j={},W[Z.id]=j);let it=j[ot];return it===void 0&&(it=y(v()),j[ot]=it),it}function y(B){let Z=[],V=[],ot=[];for(let W=0;W<o;W++)Z[W]=0,V[W]=0,ot[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:V,attributeDivisors:ot,object:B,attributes:{},index:null}}function m(B,Z,V,ot){let W=f.attributes,j=Z.attributes,it=0,at=V.getAttributes();for(let mt in at)if(at[mt].location>=0){let tt=W[mt],xt=j[mt];if(xt===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(xt=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(xt=B.instanceColor)),tt===void 0||tt.attribute!==xt||xt&&tt.data!==xt.data)return!0;it++}return f.attributesNum!==it||f.index!==ot}function P(B,Z,V,ot){let W={},j=Z.attributes,it=0,at=V.getAttributes();for(let mt in at)if(at[mt].location>=0){let tt=j[mt];tt===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(tt=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(tt=B.instanceColor));let xt={};xt.attribute=tt,tt&&tt.data&&(xt.data=tt.data),W[mt]=xt,it++}f.attributes=W,f.attributesNum=it,f.index=ot}function E(){let B=f.newAttributes;for(let Z=0,V=B.length;Z<V;Z++)B[Z]=0}function N(B){k(B,0)}function k(B,Z){let V=f.newAttributes,ot=f.enabledAttributes,W=f.attributeDivisors;V[B]=1,ot[B]===0&&(s.enableVertexAttribArray(B),ot[B]=1),W[B]!==Z&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Z),W[B]=Z)}function U(){let B=f.newAttributes,Z=f.enabledAttributes;for(let V=0,ot=Z.length;V<ot;V++)Z[V]!==B[V]&&(s.disableVertexAttribArray(V),Z[V]=0)}function O(B,Z,V,ot,W,j,it){it===!0?s.vertexAttribIPointer(B,Z,V,W,j):s.vertexAttribPointer(B,Z,V,ot,W,j)}function rt(B,Z,V,ot){if(i.isWebGL2===!1&&(B.isInstancedMesh||ot.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();let W=ot.attributes,j=V.getAttributes(),it=Z.defaultAttributeValues;for(let at in j){let mt=j[at];if(mt.location>=0){let X=W[at];if(X===void 0&&(at==="instanceMatrix"&&B.instanceMatrix&&(X=B.instanceMatrix),at==="instanceColor"&&B.instanceColor&&(X=B.instanceColor)),X!==void 0){let tt=X.normalized,xt=X.itemSize,At=e.get(X);if(At===void 0)continue;let Lt=At.buffer,qt=At.type,Yt=At.bytesPerElement,zt=i.isWebGL2===!0&&(qt===s.INT||qt===s.UNSIGNED_INT||X.gpuType===Gu);if(X.isInterleavedBufferAttribute){let oe=X.data,q=oe.stride,Re=X.offset;if(oe.isInstancedInterleavedBuffer){for(let Bt=0;Bt<mt.locationSize;Bt++)k(mt.location+Bt,oe.meshPerAttribute);B.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Bt=0;Bt<mt.locationSize;Bt++)N(mt.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let Bt=0;Bt<mt.locationSize;Bt++)O(mt.location+Bt,xt/mt.locationSize,qt,tt,q*Yt,(Re+xt/mt.locationSize*Bt)*Yt,zt)}else{if(X.isInstancedBufferAttribute){for(let oe=0;oe<mt.locationSize;oe++)k(mt.location+oe,X.meshPerAttribute);B.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let oe=0;oe<mt.locationSize;oe++)N(mt.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let oe=0;oe<mt.locationSize;oe++)O(mt.location+oe,xt/mt.locationSize,qt,tt,xt*Yt,xt/mt.locationSize*oe*Yt,zt)}}else if(it!==void 0){let tt=it[at];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(mt.location,tt);break;case 3:s.vertexAttrib3fv(mt.location,tt);break;case 4:s.vertexAttrib4fv(mt.location,tt);break;default:s.vertexAttrib1fv(mt.location,tt)}}}}U()}function A(){st();for(let B in c){let Z=c[B];for(let V in Z){let ot=Z[V];for(let W in ot)b(ot[W].object),delete ot[W];delete Z[V]}delete c[B]}}function R(B){if(c[B.id]===void 0)return;let Z=c[B.id];for(let V in Z){let ot=Z[V];for(let W in ot)b(ot[W].object),delete ot[W];delete Z[V]}delete c[B.id]}function et(B){for(let Z in c){let V=c[Z];if(V[B.id]===void 0)continue;let ot=V[B.id];for(let W in ot)b(ot[W].object),delete ot[W];delete V[B.id]}}function st(){Mt(),p=!0,f!==d&&(f=d,x(f.object))}function Mt(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:_,reset:st,resetDefaultState:Mt,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:et,initAttributes:E,enableAttribute:N,disableUnusedAttributes:U}}function V_(s,t,e,i){let o=i.isWebGL2,a;function h(p){a=p}function c(p,_){s.drawArrays(a,p,_),e.update(_,a,1)}function d(p,_,v){if(v===0)return;let x,b;if(o)x=s,b="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[b](a,p,_,v),e.update(_,a,v)}function f(p,_,v){if(v===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<v;b++)this.render(p[b],_[b]);else{x.multiDrawArraysWEBGL(a,p,0,_,0,v);let b=0;for(let S=0;S<v;S++)b+=_[S];e.update(b,a,1)}}this.setMode=h,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function W_(s,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",c=e.precision!==void 0?e.precision:"highp",d=a(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=h||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,N=h||t.has("OES_texture_float"),k=E&&N,U=h?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:f,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:y,maxVaryings:m,maxFragmentUniforms:P,vertexTextures:E,floatFragmentTextures:N,floatVertexTextures:k,maxSamples:U}}function X_(s){let t=this,e=null,i=0,o=!1,a=!1,h=new In,c=new he,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){let x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){e=p(_,v,0)},this.setState=function(_,v,x){let b=_.clippingPlanes,S=_.clipIntersection,y=_.clipShadows,m=s.get(_);if(!o||b===null||b.length===0||a&&!y)a?p(null):f();else{let P=a?0:i,E=P*4,N=m.clippingState||null;d.value=N,N=p(b,v,E,x);for(let k=0;k!==E;++k)N[k]=e[k];m.clippingState=N,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(_,v,x,b){let S=_!==null?_.length:0,y=null;if(S!==0){if(y=d.value,b!==!0||y===null){let m=x+S*4,P=v.matrixWorldInverse;c.getNormalMatrix(P),(y===null||y.length<m)&&(y=new Float32Array(m));for(let E=0,N=x;E!==S;++E,N+=4)h.copy(_[E]).applyMatrix4(P,c),h.normal.toArray(y,N),y[N+3]=h.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,y}}function Z_(s){let t=new WeakMap;function e(h,c){return c===_l?h.mapping=Os:c===vl&&(h.mapping=Us),h}function i(h){if(h&&h.isTexture){let c=h.mapping;if(c===_l||c===vl)if(t.has(h)){let d=t.get(h).texture;return e(d,h.mapping)}else{let d=h.image;if(d&&d.height>0){let f=new Al(d.height/2);return f.fromEquirectangularTexture(s,h),t.set(h,f),h.addEventListener("dispose",o),e(f.texture,h.mapping)}else return null}}return h}function o(h){let c=h.target;c.removeEventListener("dispose",o);let d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Bo=class extends Fo{constructor(t=-1,e=1,i=1,o=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2,a=i-t,h=i+t,c=o+e,d=o-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,h=a+f*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,h,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,ou=[.125,.215,.35,.446,.526,.582],zi=20,ol=new Bo,au=new Vt,al=null,ll=0,cl=0,Ui=(1+Math.sqrt(5))/2,Es=1/Ui,lu=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ui,Es),new z(0,Ui,-Es),new z(Es,0,Ui),new z(-Es,0,Ui),new z(Ui,Es,0),new z(-Ui,Es,0)],ko=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,o,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,ll,cl),t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:mr,format:Nn,colorSpace:ri,depthBuffer:!1},o=cu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q_(a)),this._blurMaterial=Y_(a,t,e)}return o}_compileMaterial(t){let e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,i,o){let c=new Qe(90,1,e,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(au),p.toneMapping=xi,p.autoClear=!1;let x=new _n({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),b=new Ee(new yr,x),S=!1,y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,S=!0):(x.color.copy(au),S=!0);for(let m=0;m<6;m++){let P=m%3;P===0?(c.up.set(0,d[m],0),c.lookAt(f[m],0,0)):P===1?(c.up.set(0,0,d[m]),c.lookAt(0,f[m],0)):(c.up.set(0,d[m],0),c.lookAt(0,0,f[m]));let E=this._cubeSize;mo(o,P*E,m>2?E:0,E,E),p.setRenderTarget(o),S&&p.render(b,c),p.render(t,c)}b.geometry.dispose(),b.material.dispose(),p.toneMapping=v,p.autoClear=_,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,o=t.mapping===Os||t.mapping===Us;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());let a=o?this._cubemapMaterial:this._equirectMaterial,h=new Ee(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=t;let d=this._cubeSize;mo(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(h,ol)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){let a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=lu[(o-1)%lu.length];this._blur(t,o-1,o,a,h)}e.autoClear=i}_blur(t,e,i,o,a){let h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,o,"latitudinal",a),this._halfBlur(h,t,i,i,o,"longitudinal",a)}_halfBlur(t,e,i,o,a,h,c){let d=this._renderer,f=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,_=new Ee(this._lodPlanes[o],f),v=f.uniforms,x=this._sizeLods[i]-1,b=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*zi-1),S=a/b,y=isFinite(a)?1+Math.floor(p*S):zi;y>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${zi}`);let m=[],P=0;for(let O=0;O<zi;++O){let rt=O/S,A=Math.exp(-rt*rt/2);m.push(A),O===0?P+=A:O<y&&(P+=2*A)}for(let O=0;O<m.length;O++)m[O]=m[O]/P;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=m,v.latitudinal.value=h==="latitudinal",c&&(v.poleAxis.value=c);let{_lodMax:E}=this;v.dTheta.value=b,v.mipInt.value=E-i;let N=this._sizeLods[o],k=3*N*(o>E-Rs?o-E+Rs:0),U=4*(this._cubeSize-N);mo(e,k,U,3*N,2*N),d.setRenderTarget(e),d.render(_,ol)}};function q_(s){let t=[],e=[],i=[],o=s,a=s-Rs+1+ou.length;for(let h=0;h<a;h++){let c=Math.pow(2,o);e.push(c);let d=1/c;h>s-Rs?d=ou[h-s+Rs-1]:h===0&&(d=0),i.push(d);let f=1/(c-2),p=-f,_=1+f,v=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,b=6,S=3,y=2,m=1,P=new Float32Array(S*b*x),E=new Float32Array(y*b*x),N=new Float32Array(m*b*x);for(let U=0;U<x;U++){let O=U%3*2/3-1,rt=U>2?0:-1,A=[O,rt,0,O+2/3,rt,0,O+2/3,rt+1,0,O,rt,0,O+2/3,rt+1,0,O,rt+1,0];P.set(A,S*b*U),E.set(v,y*b*U);let R=[U,U,U,U,U,U];N.set(R,m*b*U)}let k=new qe;k.setAttribute("position",new Fe(P,S)),k.setAttribute("uv",new Fe(E,y)),k.setAttribute("faceIndex",new Fe(N,m)),t.push(k),o>Rs&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cu(s,t,e){let i=new oi(s,t,e);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(s,t,e,i,o){s.viewport.set(t,e,i,o),s.scissor.set(t,e,i,o)}function Y_(s,t,e){let i=new Float32Array(zi),o=new z(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function hu(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function uu(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $_(s){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){let d=c.mapping,f=d===_l||d===vl,p=d===Os||d===Us;if(f||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=t.get(c);return e===null&&(e=new ko(s)),_=f?e.fromEquirectangular(c,_):e.fromCubemap(c,_),t.set(c,_),_.texture}else{if(t.has(c))return t.get(c).texture;{let _=c.image;if(f&&_&&_.height>0||p&&_&&o(_)){e===null&&(e=new ko(s));let v=f?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let d=0,f=6;for(let p=0;p<f;p++)c[p]!==void 0&&d++;return d===f}function a(c){let d=c.target;d.removeEventListener("dispose",a);let f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function J_(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function K_(s,t,e,i){let o={},a=new WeakMap;function h(_){let v=_.target;v.index!==null&&t.remove(v.index);for(let b in v.attributes)t.remove(v.attributes[b]);for(let b in v.morphAttributes){let S=v.morphAttributes[b];for(let y=0,m=S.length;y<m;y++)t.remove(S[y])}v.removeEventListener("dispose",h),delete o[v.id];let x=a.get(v);x&&(t.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",h),o[v.id]=!0,e.memory.geometries++),v}function d(_){let v=_.attributes;for(let b in v)t.update(v[b],s.ARRAY_BUFFER);let x=_.morphAttributes;for(let b in x){let S=x[b];for(let y=0,m=S.length;y<m;y++)t.update(S[y],s.ARRAY_BUFFER)}}function f(_){let v=[],x=_.index,b=_.attributes.position,S=0;if(x!==null){let P=x.array;S=x.version;for(let E=0,N=P.length;E<N;E+=3){let k=P[E+0],U=P[E+1],O=P[E+2];v.push(k,U,U,O,O,k)}}else if(b!==void 0){let P=b.array;S=b.version;for(let E=0,N=P.length/3-1;E<N;E+=3){let k=E+0,U=E+1,O=E+2;v.push(k,U,U,O,O,k)}}else return;let y=new(ju(v)?Uo:Oo)(v,1);y.version=S;let m=a.get(_);m&&t.remove(m),a.set(_,y)}function p(_){let v=a.get(_);if(v){let x=_.index;x!==null&&v.version<x.version&&f(_)}else f(_);return a.get(_)}return{get:c,update:d,getWireframeAttribute:p}}function j_(s,t,e,i){let o=i.isWebGL2,a;function h(x){a=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function p(x,b){s.drawElements(a,b,c,x*d),e.update(b,a,1)}function _(x,b,S){if(S===0)return;let y,m;if(o)y=s,m="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](a,b,c,x*d,S),e.update(b,a,S)}function v(x,b,S){if(S===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<S;m++)this.render(x[m]/d,b[m]);else{y.multiDrawElementsWEBGL(a,b,0,c,x,0,S);let m=0;for(let P=0;P<S;P++)m+=b[P];e.update(m,a,1)}}this.setMode=h,this.setIndex=f,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function Q_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,h,c){switch(e.calls++,h){case s.TRIANGLES:e.triangles+=c*(a/3);break;case s.LINES:e.lines+=c*(a/2);break;case s.LINE_STRIP:e.lines+=c*(a-1);break;case s.LINE_LOOP:e.lines+=c*a;break;case s.POINTS:e.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function tv(s,t){return s[0]-t[0]}function ev(s,t){return Math.abs(t[1])-Math.abs(s[1])}function nv(s,t,e){let i={},o=new Float32Array(8),a=new WeakMap,h=new Ae,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function d(f,p,_){let v=f.morphTargetInfluences;if(t.isWebGL2===!0){let x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,b=x!==void 0?x.length:0,S=a.get(p);if(S===void 0||S.count!==b){let B=function(){st.dispose(),a.delete(p),p.removeEventListener("dispose",B)};S!==void 0&&S.texture.dispose();let P=p.morphAttributes.position!==void 0,E=p.morphAttributes.normal!==void 0,N=p.morphAttributes.color!==void 0,k=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],O=p.morphAttributes.color||[],rt=0;P===!0&&(rt=1),E===!0&&(rt=2),N===!0&&(rt=3);let A=p.attributes.position.count*rt,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let et=new Float32Array(A*R*4*b),st=new Do(et,A,R,b);st.type=vi,st.needsUpdate=!0;let Mt=rt*4;for(let Z=0;Z<b;Z++){let V=k[Z],ot=U[Z],W=O[Z],j=A*R*4*Z;for(let it=0;it<V.count;it++){let at=it*Mt;P===!0&&(h.fromBufferAttribute(V,it),et[j+at+0]=h.x,et[j+at+1]=h.y,et[j+at+2]=h.z,et[j+at+3]=0),E===!0&&(h.fromBufferAttribute(ot,it),et[j+at+4]=h.x,et[j+at+5]=h.y,et[j+at+6]=h.z,et[j+at+7]=0),N===!0&&(h.fromBufferAttribute(W,it),et[j+at+8]=h.x,et[j+at+9]=h.y,et[j+at+10]=h.z,et[j+at+11]=W.itemSize===4?h.w:1)}}S={count:b,texture:st,size:new kt(A,R)},a.set(p,S),p.addEventListener("dispose",B)}let y=0;for(let P=0;P<v.length;P++)y+=v[P];let m=p.morphTargetsRelative?1:1-y;_.getUniforms().setValue(s,"morphTargetBaseInfluence",m),_.getUniforms().setValue(s,"morphTargetInfluences",v),_.getUniforms().setValue(s,"morphTargetsTexture",S.texture,e),_.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}else{let x=v===void 0?0:v.length,b=i[p.id];if(b===void 0||b.length!==x){b=[];for(let E=0;E<x;E++)b[E]=[E,0];i[p.id]=b}for(let E=0;E<x;E++){let N=b[E];N[0]=E,N[1]=v[E]}b.sort(ev);for(let E=0;E<8;E++)E<x&&b[E][1]?(c[E][0]=b[E][0],c[E][1]=b[E][1]):(c[E][0]=Number.MAX_SAFE_INTEGER,c[E][1]=0);c.sort(tv);let S=p.morphAttributes.position,y=p.morphAttributes.normal,m=0;for(let E=0;E<8;E++){let N=c[E],k=N[0],U=N[1];k!==Number.MAX_SAFE_INTEGER&&U?(S&&p.getAttribute("morphTarget"+E)!==S[k]&&p.setAttribute("morphTarget"+E,S[k]),y&&p.getAttribute("morphNormal"+E)!==y[k]&&p.setAttribute("morphNormal"+E,y[k]),o[E]=U,m+=U):(S&&p.hasAttribute("morphTarget"+E)===!0&&p.deleteAttribute("morphTarget"+E),y&&p.hasAttribute("morphNormal"+E)===!0&&p.deleteAttribute("morphNormal"+E),o[E]=0)}let P=p.morphTargetsRelative?1:1-m;_.getUniforms().setValue(s,"morphTargetBaseInfluence",P),_.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:d}}function iv(s,t,e,i){let o=new WeakMap;function a(d){let f=i.render.frame,p=d.geometry,_=t.get(d,p);if(o.get(_)!==f&&(t.update(_),o.set(_,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==f&&(e.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,f))),d.isSkinnedMesh){let v=d.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return _}function h(){o=new WeakMap}function c(d){let f=d.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:h}}var Ho=class extends gn{constructor(t,e,i,o,a,h,c,d,f,p){if(p=p!==void 0?p:Hi,p!==Hi&&p!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Hi&&(i=_i),i===void 0&&p===Fs&&(i=ki),super(null,o,a,h,c,d,p,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:ln,this.minFilter=d!==void 0?d:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nd=new gn,id=new Ho(1,1);id.compareFunction=Ku;var sd=new Do,rd=new El,od=new zo,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Hs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let o=t*e,a=du[o];if(a===void 0&&(a=new Float32Array(o),du[o]=a),t!==0){i.toArray(a,0);for(let h=1,c=0;h!==t;++h)c+=e,s[h].toArray(a,c)}return a}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ta(s,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function sv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function rv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function ov(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function av(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function lv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;gu.set(i),s.uniformMatrix2fv(this.addr,!1,gu),ke(e,i)}}function cv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;mu.set(i),s.uniformMatrix3fv(this.addr,!1,mu),ke(e,i)}}function hv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;pu.set(i),s.uniformMatrix4fv(this.addr,!1,pu),ke(e,i)}}function uv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function dv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function fv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function pv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function mv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function _v(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function vv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function yv(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a=this.type===s.SAMPLER_2D_SHADOW?id:nd;e.setTexture2D(t||a,o)}function xv(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||rd,o)}function Mv(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||od,o)}function bv(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||sd,o)}function Sv(s){switch(s){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return bv}}function wv(s,t){s.uniform1fv(this.addr,t)}function Ev(s,t){let e=Hs(t,this.size,2);s.uniform2fv(this.addr,e)}function Tv(s,t){let e=Hs(t,this.size,3);s.uniform3fv(this.addr,e)}function Av(s,t){let e=Hs(t,this.size,4);s.uniform4fv(this.addr,e)}function Cv(s,t){let e=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pv(s,t){let e=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Rv(s,t){let e=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lv(s,t){s.uniform1iv(this.addr,t)}function Iv(s,t){s.uniform2iv(this.addr,t)}function Dv(s,t){s.uniform3iv(this.addr,t)}function Nv(s,t){s.uniform4iv(this.addr,t)}function Ov(s,t){s.uniform1uiv(this.addr,t)}function Uv(s,t){s.uniform2uiv(this.addr,t)}function Fv(s,t){s.uniform3uiv(this.addr,t)}function zv(s,t){s.uniform4uiv(this.addr,t)}function Bv(s,t,e){let i=this.cache,o=t.length,a=ta(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ke(i,a));for(let h=0;h!==o;++h)e.setTexture2D(t[h]||nd,a[h])}function kv(s,t,e){let i=this.cache,o=t.length,a=ta(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ke(i,a));for(let h=0;h!==o;++h)e.setTexture3D(t[h]||rd,a[h])}function Hv(s,t,e){let i=this.cache,o=t.length,a=ta(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ke(i,a));for(let h=0;h!==o;++h)e.setTextureCube(t[h]||od,a[h])}function Gv(s,t,e){let i=this.cache,o=t.length,a=ta(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ke(i,a));for(let h=0;h!==o;++h)e.setTexture2DArray(t[h]||sd,a[h])}function Vv(s){switch(s){case 5126:return wv;case 35664:return Ev;case 35665:return Tv;case 35666:return Av;case 35674:return Cv;case 35675:return Pv;case 35676:return Rv;case 5124:case 35670:return Lv;case 35667:case 35671:return Iv;case 35668:case 35672:return Dv;case 35669:case 35673:return Nv;case 5125:return Ov;case 36294:return Uv;case 36295:return Fv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}var Pl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sv(e.type)}},Rl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vv(e.type)}},Ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let o=this.seq;for(let a=0,h=o.length;a!==h;++a){let c=o[a];c.setValue(t,e[c.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function _u(s,t){s.seq.push(t),s.map[t.id]=t}function Wv(s,t,e){let i=s.name,o=i.length;for(hl.lastIndex=0;;){let a=hl.exec(i),h=hl.lastIndex,c=a[1],d=a[2]==="]",f=a[3];if(d&&(c=c|0),f===void 0||f==="["&&h+2===o){_u(e,f===void 0?new Pl(c,s,t):new Rl(c,s,t));break}else{let _=e.map[c];_===void 0&&(_=new Ll(c),_u(e,_)),e=_}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);Wv(a,h,this)}}setValue(t,e,i,o){let a=this.map[e];a!==void 0&&a.setValue(t,i,o)}setOptional(t,e,i){let o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let a=0,h=e.length;a!==h;++a){let c=e[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,o)}}static seqWithValue(t,e){let i=[];for(let o=0,a=t.length;o!==a;++o){let h=t[o];h.id in e&&i.push(h)}return i}};function vu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Xv=37297,Zv=0;function qv(s,t){let e=s.split(`
`),i=[],o=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let h=o;h<a;h++){let c=h+1;i.push(`${c===t?">":" "} ${c}: ${e[h]}`)}return i.join(`
`)}function Yv(s){let t=ye.getPrimaries(ye.workingColorSpace),e=ye.getPrimaries(s),i;switch(t===e?i="":t===Co&&e===Ao?i="LinearDisplayP3ToLinearSRGB":t===Ao&&e===Co&&(i="LinearSRGBToLinearDisplayP3"),s){case ri:case Qo:return[i,"LinearTransferOETF"];case ge:case oc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function yu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(i&&o==="")return"";let a=/ERROR: 0:(\d+)/.exec(o);if(a){let h=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+qv(s.getShaderSource(t),h)}else return o}function $v(s,t){let e=Yv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Jv(s,t){let e;switch(t){case np:e="Linear";break;case ip:e="Reinhard";break;case sp:e="OptimizedCineon";break;case sc:e="ACESFilmic";break;case op:e="AgX";break;case rp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Kv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function jv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function Qv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function t0(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){let a=s.getActiveAttrib(t,o),h=a.name,c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),e[h]={type:a.type,location:s.getAttribLocation(t,h),locationSize:c}}return e}function Ls(s){return s!==""}function xu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var e0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(s){return s.replace(e0,i0)}var n0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function i0(s,t){let e=re[t];if(e===void 0){let i=n0.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Il(e)}var s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(s){return s.replace(s0,r0)}function r0(s,t,e,i){let o="";for(let a=parseInt(t);a<parseInt(e);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Su(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function a0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case Us:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function c0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case tp:t="ENVMAP_BLENDING_MIX";break;case ep:t="ENVMAP_BLENDING_ADD";break}return t}function h0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function u0(s,t,e,i){let o=s.getContext(),a=e.defines,h=e.vertexShader,c=e.fragmentShader,d=o0(e),f=a0(e),p=l0(e),_=c0(e),v=h0(e),x=e.isWebGL2?"":Kv(e),b=jv(e),S=Qv(a),y=o.createProgram(),m,P,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ls).join(`
`),m.length>0&&(m+=`
`),P=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ls).join(`
`),P.length>0&&(P+=`
`)):(m=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),P=[x,Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?re.tonemapping_pars_fragment:"",e.toneMapping!==xi?Jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,$v("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),h=Il(h),h=xu(h,e),h=Mu(h,e),c=Il(c),c=xu(c,e),c=Mu(c,e),h=bu(h),c=bu(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,P=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);let N=E+m+h,k=E+P+c,U=vu(o,o.VERTEX_SHADER,N),O=vu(o,o.FRAGMENT_SHADER,k);o.attachShader(y,U),o.attachShader(y,O),e.index0AttributeName!==void 0?o.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function rt(st){if(s.debug.checkShaderErrors){let Mt=o.getProgramInfoLog(y).trim(),B=o.getShaderInfoLog(U).trim(),Z=o.getShaderInfoLog(O).trim(),V=!0,ot=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,y,U,O);else{let W=yu(o,U,"vertex"),j=yu(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Program Info Log: `+Mt+`
`+W+`
`+j)}else Mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Mt):(B===""||Z==="")&&(ot=!1);ot&&(st.diagnostics={runnable:V,programLog:Mt,vertexShader:{log:B,prefix:m},fragmentShader:{log:Z,prefix:P}})}o.deleteShader(U),o.deleteShader(O),A=new Ns(o,y),R=t0(o,y)}let A;this.getUniforms=function(){return A===void 0&&rt(this),A};let R;this.getAttributes=function(){return R===void 0&&rt(this),R};let et=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return et===!1&&(et=o.getProgramParameter(y,Xv)),et},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=O,this}var d0=0,Dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),a=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Nl(t),e.set(t,i)),i}},Nl=class{constructor(t){this.id=d0++,this.code=t,this.usedTimes=0}};function f0(s,t,e,i,o,a,h){let c=new vr,d=new Dl,f=[],p=o.isWebGL2,_=o.logarithmicDepthBuffer,v=o.vertexTextures,x=o.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return A===0?"uv":`uv${A}`}function y(A,R,et,st,Mt){let B=st.fog,Z=Mt.geometry,V=A.isMeshStandardMaterial?st.environment:null,ot=(A.isMeshStandardMaterial?e:t).get(A.envMap||V),W=ot&&ot.mapping===jo?ot.image.height:null,j=b[A.type];A.precision!==null&&(x=o.getMaxPrecision(A.precision),x!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));let it=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=it!==void 0?it.length:0,mt=0;Z.morphAttributes.position!==void 0&&(mt=1),Z.morphAttributes.normal!==void 0&&(mt=2),Z.morphAttributes.color!==void 0&&(mt=3);let X,tt,xt,At;if(j){let Ve=Gn[j];X=Ve.vertexShader,tt=Ve.fragmentShader}else X=A.vertexShader,tt=A.fragmentShader,d.update(A),xt=d.getVertexShaderID(A),At=d.getFragmentShaderID(A);let Lt=s.getRenderTarget(),qt=Mt.isInstancedMesh===!0,Yt=Mt.isBatchedMesh===!0,zt=!!A.map,oe=!!A.matcap,q=!!ot,Re=!!A.aoMap,Bt=!!A.lightMap,Xt=!!A.bumpMap,Ct=!!A.normalMap,xe=!!A.displacementMap,Kt=!!A.emissiveMap,C=!!A.metalnessMap,w=!!A.roughnessMap,Y=A.anisotropy>0,ft=A.clearcoat>0,ut=A.iridescence>0,dt=A.sheen>0,Rt=A.transmission>0,St=Y&&!!A.anisotropyMap,Tt=ft&&!!A.clearcoatMap,Ht=ft&&!!A.clearcoatNormalMap,Qt=ft&&!!A.clearcoatRoughnessMap,ht=ut&&!!A.iridescenceMap,ae=ut&&!!A.iridescenceThicknessMap,I=dt&&!!A.sheenColorMap,ct=dt&&!!A.sheenRoughnessMap,yt=!!A.specularMap,pt=!!A.specularColorMap,Dt=!!A.specularIntensityMap,se=Rt&&!!A.transmissionMap,le=Rt&&!!A.thicknessMap,ee=!!A.gradientMap,vt=!!A.alphaMap,F=A.alphaTest>0,gt=!!A.alphaHash,_t=!!A.extensions,Gt=!!Z.attributes.uv1,Ot=!!Z.attributes.uv2,de=!!Z.attributes.uv3,ue=xi;return A.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(ue=s.toneMapping),{isWebGL2:p,shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:X,fragmentShader:tt,defines:A.defines,customVertexShaderID:xt,customFragmentShaderID:At,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Yt,instancing:qt,instancingColor:qt&&Mt.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:ri,map:zt,matcap:oe,envMap:q,envMapMode:q&&ot.mapping,envMapCubeUVHeight:W,aoMap:Re,lightMap:Bt,bumpMap:Xt,normalMap:Ct,displacementMap:v&&xe,emissiveMap:Kt,normalMapObjectSpace:Ct&&A.normalMapType===vp,normalMapTangentSpace:Ct&&A.normalMapType===Ju,metalnessMap:C,roughnessMap:w,anisotropy:Y,anisotropyMap:St,clearcoat:ft,clearcoatMap:Tt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Qt,iridescence:ut,iridescenceMap:ht,iridescenceThicknessMap:ae,sheen:dt,sheenColorMap:I,sheenRoughnessMap:ct,specularMap:yt,specularColorMap:pt,specularIntensityMap:Dt,transmission:Rt,transmissionMap:se,thicknessMap:le,gradientMap:ee,opaque:A.transparent===!1&&A.blending===Is,alphaMap:vt,alphaTest:F,alphaHash:gt,combine:A.combine,mapUv:zt&&S(A.map.channel),aoMapUv:Re&&S(A.aoMap.channel),lightMapUv:Bt&&S(A.lightMap.channel),bumpMapUv:Xt&&S(A.bumpMap.channel),normalMapUv:Ct&&S(A.normalMap.channel),displacementMapUv:xe&&S(A.displacementMap.channel),emissiveMapUv:Kt&&S(A.emissiveMap.channel),metalnessMapUv:C&&S(A.metalnessMap.channel),roughnessMapUv:w&&S(A.roughnessMap.channel),anisotropyMapUv:St&&S(A.anisotropyMap.channel),clearcoatMapUv:Tt&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:I&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:ct&&S(A.sheenRoughnessMap.channel),specularMapUv:yt&&S(A.specularMap.channel),specularColorMapUv:pt&&S(A.specularColorMap.channel),specularIntensityMapUv:Dt&&S(A.specularIntensityMap.channel),transmissionMapUv:se&&S(A.transmissionMap.channel),thicknessMapUv:le&&S(A.thicknessMap.channel),alphaMapUv:vt&&S(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ct||Y),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:Gt,vertexUv2s:Ot,vertexUv3s:de,pointsUvs:Mt.isPoints===!0&&!!Z.attributes.uv&&(zt||vt),fog:!!B,useFog:A.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:Mt.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:mt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&et.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,useLegacyLights:s._useLegacyLights,decodeVideoTexture:zt&&A.map.isVideoTexture===!0&&ye.getTransfer(A.map.colorSpace)===we,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===cn,flipSided:A.side===tn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:_t&&A.extensions.derivatives===!0,extensionFragDepth:_t&&A.extensions.fragDepth===!0,extensionDrawBuffers:_t&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&A.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function m(A){let R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(let et in A.defines)R.push(et),R.push(A.defines[et]);return A.isRawShaderMaterial===!1&&(P(R,A),E(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function P(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function E(A,R){c.disableAll(),R.isWebGL2&&c.enable(0),R.supportsVertexTextures&&c.enable(1),R.instancing&&c.enable(2),R.instancingColor&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),A.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.skinning&&c.enable(4),R.morphTargets&&c.enable(5),R.morphNormals&&c.enable(6),R.morphColors&&c.enable(7),R.premultipliedAlpha&&c.enable(8),R.shadowMapEnabled&&c.enable(9),R.useLegacyLights&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),A.push(c.mask)}function N(A){let R=b[A.type],et;if(R){let st=Gn[R];et=nm.clone(st.uniforms)}else et=A.uniforms;return et}function k(A,R){let et;for(let st=0,Mt=f.length;st<Mt;st++){let B=f[st];if(B.cacheKey===R){et=B,++et.usedTimes;break}}return et===void 0&&(et=new u0(s,R,A,a),f.push(et)),et}function U(A){if(--A.usedTimes===0){let R=f.indexOf(A);f[R]=f[f.length-1],f.pop(),A.destroy()}}function O(A){d.remove(A)}function rt(){d.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:N,acquireProgram:k,releaseProgram:U,releaseShaderCache:O,programs:f,dispose:rt}}function p0(){let s=new WeakMap;function t(a){let h=s.get(a);return h===void 0&&(h={},s.set(a,h)),h}function e(a){s.delete(a)}function i(a,h,c){s.get(a)[h]=c}function o(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function m0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Eu(){let s=[],t=0,e=[],i=[],o=[];function a(){t=0,e.length=0,i.length=0,o.length=0}function h(_,v,x,b,S,y){let m=s[t];return m===void 0?(m={id:_.id,object:_,geometry:v,material:x,groupOrder:b,renderOrder:_.renderOrder,z:S,group:y},s[t]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=x,m.groupOrder=b,m.renderOrder=_.renderOrder,m.z=S,m.group=y),t++,m}function c(_,v,x,b,S,y){let m=h(_,v,x,b,S,y);x.transmission>0?i.push(m):x.transparent===!0?o.push(m):e.push(m)}function d(_,v,x,b,S,y){let m=h(_,v,x,b,S,y);x.transmission>0?i.unshift(m):x.transparent===!0?o.unshift(m):e.unshift(m)}function f(_,v){e.length>1&&e.sort(_||m0),i.length>1&&i.sort(v||wu),o.length>1&&o.sort(v||wu)}function p(){for(let _=t,v=s.length;_<v;_++){let x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:o,init:a,push:c,unshift:d,finish:p,sort:f}}function g0(){let s=new WeakMap;function t(i,o){let a=s.get(i),h;return a===void 0?(h=new Eu,s.set(i,[h])):o>=a.length?(h=new Eu,a.push(h)):h=a[o],h}function e(){s=new WeakMap}return{get:t,dispose:e}}function _0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Vt};break;case"SpotLight":e={position:new z,direction:new z,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function v0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var y0=0;function x0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function M0(s,t){let e=new _0,i=v0(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new z);let a=new z,h=new Pe,c=new Pe;function d(p,_){let v=0,x=0,b=0;for(let st=0;st<9;st++)o.probe[st].set(0,0,0);let S=0,y=0,m=0,P=0,E=0,N=0,k=0,U=0,O=0,rt=0,A=0;p.sort(x0);let R=_===!0?Math.PI:1;for(let st=0,Mt=p.length;st<Mt;st++){let B=p[st],Z=B.color,V=B.intensity,ot=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=Z.r*V*R,x+=Z.g*V*R,b+=Z.b*V*R;else if(B.isLightProbe){for(let j=0;j<9;j++)o.probe[j].addScaledVector(B.sh.coefficients[j],V);A++}else if(B.isDirectionalLight){let j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){let it=B.shadow,at=i.get(B);at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,o.directionalShadow[S]=at,o.directionalShadowMap[S]=W,o.directionalShadowMatrix[S]=B.shadow.matrix,N++}o.directional[S]=j,S++}else if(B.isSpotLight){let j=e.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(Z).multiplyScalar(V*R),j.distance=ot,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,o.spot[m]=j;let it=B.shadow;if(B.map&&(o.spotLightMap[O]=B.map,O++,it.updateMatrices(B),B.castShadow&&rt++),o.spotLightMatrix[m]=it.matrix,B.castShadow){let at=i.get(B);at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,o.spotShadow[m]=at,o.spotShadowMap[m]=W,U++}m++}else if(B.isRectAreaLight){let j=e.get(B);j.color.copy(Z).multiplyScalar(V),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),o.rectArea[P]=j,P++}else if(B.isPointLight){let j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*R),j.distance=B.distance,j.decay=B.decay,B.castShadow){let it=B.shadow,at=i.get(B);at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,o.pointShadow[y]=at,o.pointShadowMap[y]=W,o.pointShadowMatrix[y]=B.shadow.matrix,k++}o.point[y]=j,y++}else if(B.isHemisphereLight){let j=e.get(B);j.skyColor.copy(B.color).multiplyScalar(V*R),j.groundColor.copy(B.groundColor).multiplyScalar(V*R),o.hemi[E]=j,E++}}P>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=bt.LTC_FLOAT_1,o.rectAreaLTC2=bt.LTC_FLOAT_2):(o.rectAreaLTC1=bt.LTC_HALF_1,o.rectAreaLTC2=bt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=bt.LTC_FLOAT_1,o.rectAreaLTC2=bt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=bt.LTC_HALF_1,o.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=b;let et=o.hash;(et.directionalLength!==S||et.pointLength!==y||et.spotLength!==m||et.rectAreaLength!==P||et.hemiLength!==E||et.numDirectionalShadows!==N||et.numPointShadows!==k||et.numSpotShadows!==U||et.numSpotMaps!==O||et.numLightProbes!==A)&&(o.directional.length=S,o.spot.length=m,o.rectArea.length=P,o.point.length=y,o.hemi.length=E,o.directionalShadow.length=N,o.directionalShadowMap.length=N,o.pointShadow.length=k,o.pointShadowMap.length=k,o.spotShadow.length=U,o.spotShadowMap.length=U,o.directionalShadowMatrix.length=N,o.pointShadowMatrix.length=k,o.spotLightMatrix.length=U+O-rt,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=rt,o.numLightProbes=A,et.directionalLength=S,et.pointLength=y,et.spotLength=m,et.rectAreaLength=P,et.hemiLength=E,et.numDirectionalShadows=N,et.numPointShadows=k,et.numSpotShadows=U,et.numSpotMaps=O,et.numLightProbes=A,o.version=y0++)}function f(p,_){let v=0,x=0,b=0,S=0,y=0,m=_.matrixWorldInverse;for(let P=0,E=p.length;P<E;P++){let N=p[P];if(N.isDirectionalLight){let k=o.directional[v];k.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(m),v++}else if(N.isSpotLight){let k=o.spot[b];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(m),k.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(m),b++}else if(N.isRectAreaLight){let k=o.rectArea[S];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(m),c.identity(),h.copy(N.matrixWorld),h.premultiply(m),c.extractRotation(h),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),S++}else if(N.isPointLight){let k=o.point[x];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(m),x++}else if(N.isHemisphereLight){let k=o.hemi[y];k.direction.setFromMatrixPosition(N.matrixWorld),k.direction.transformDirection(m),y++}}}return{setup:d,setupView:f,state:o}}function Tu(s,t){let e=new M0(s,t),i=[],o=[];function a(){i.length=0,o.length=0}function h(_){i.push(_)}function c(_){o.push(_)}function d(_){e.setup(i,_)}function f(_){e.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:e},setupLights:d,setupLightsView:f,pushLight:h,pushShadow:c}}function b0(s,t){let e=new WeakMap;function i(a,h=0){let c=e.get(a),d;return c===void 0?(d=new Tu(s,t),e.set(a,[d])):h>=c.length?(d=new Tu(s,t),c.push(d)):d=c[h],d}function o(){e=new WeakMap}return{get:i,dispose:o}}var Ol=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ul=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E0(s,t,e){let i=new xr,o=new kt,a=new kt,h=new Ae,c=new Ol({depthPacking:_p}),d=new Ul,f={},p=e.maxTextureSize,_={[bi]:tn,[tn]:bi,[cn]:cn},v=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:S0,fragmentShader:w0}),x=v.clone();x.defines.HORIZONTAL_PASS=1;let b=new qe;b.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ee(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(U,O,rt){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;let A=s.getRenderTarget(),R=s.getActiveCubeFace(),et=s.getActiveMipmapLevel(),st=s.state;st.setBlending(yi),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let Mt=m!==ni&&this.type===ni,B=m===ni&&this.type!==ni;for(let Z=0,V=U.length;Z<V;Z++){let ot=U[Z],W=ot.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);let j=W.getFrameExtents();if(o.multiply(j),a.copy(W.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/j.x),o.x=a.x*j.x,W.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/j.y),o.y=a.y*j.y,W.mapSize.y=a.y)),W.map===null||Mt===!0||B===!0){let at=this.type!==ni?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new oi(o.x,o.y,at),W.map.texture.name=ot.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let it=W.getViewportCount();for(let at=0;at<it;at++){let mt=W.getViewport(at);h.set(a.x*mt.x,a.y*mt.y,a.x*mt.z,a.y*mt.w),st.viewport(h),W.updateMatrices(ot,at),i=W.getFrustum(),N(O,rt,W.camera,ot,this.type)}W.isPointLightShadow!==!0&&this.type===ni&&P(W,rt),W.needsUpdate=!1}m=this.type,y.needsUpdate=!1,s.setRenderTarget(A,R,et)};function P(U,O){let rt=t.update(S);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new oi(o.x,o.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,rt,v,S,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,rt,x,S,null)}function E(U,O,rt,A){let R=null,et=rt.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(et!==void 0)R=et;else if(R=rt.isPointLight===!0?d:c,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let st=R.uuid,Mt=O.uuid,B=f[st];B===void 0&&(B={},f[st]=B);let Z=B[Mt];Z===void 0&&(Z=R.clone(),B[Mt]=Z,O.addEventListener("dispose",k)),R=Z}if(R.visible=O.visible,R.wireframe=O.wireframe,A===ni?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,rt.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let st=s.properties.get(R);st.light=rt}return R}function N(U,O,rt,A,R){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===ni)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,U.matrixWorld);let Mt=t.update(U),B=U.material;if(Array.isArray(B)){let Z=Mt.groups;for(let V=0,ot=Z.length;V<ot;V++){let W=Z[V],j=B[W.materialIndex];if(j&&j.visible){let it=E(U,j,A,R);U.onBeforeShadow(s,U,O,rt,Mt,it,W),s.renderBufferDirect(rt,null,Mt,it,U,W),U.onAfterShadow(s,U,O,rt,Mt,it,W)}}}else if(B.visible){let Z=E(U,B,A,R);U.onBeforeShadow(s,U,O,rt,Mt,Z,null),s.renderBufferDirect(rt,null,Mt,Z,U,null),U.onAfterShadow(s,U,O,rt,Mt,Z,null)}}let st=U.children;for(let Mt=0,B=st.length;Mt<B;Mt++)N(st[Mt],O,rt,A,R)}function k(U){U.target.removeEventListener("dispose",k);for(let rt in f){let A=f[rt],R=U.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function T0(s,t,e){let i=e.isWebGL2;function o(){let F=!1,gt=new Ae,_t=null,Gt=new Ae(0,0,0,0);return{setMask:function(Ot){_t!==Ot&&!F&&(s.colorMask(Ot,Ot,Ot,Ot),_t=Ot)},setLocked:function(Ot){F=Ot},setClear:function(Ot,de,ue,De,Ve){Ve===!0&&(Ot*=De,de*=De,ue*=De),gt.set(Ot,de,ue,De),Gt.equals(gt)===!1&&(s.clearColor(Ot,de,ue,De),Gt.copy(gt))},reset:function(){F=!1,_t=null,Gt.set(-1,0,0,0)}}}function a(){let F=!1,gt=null,_t=null,Gt=null;return{setTest:function(Ot){Ot?Yt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(Ot){gt!==Ot&&!F&&(s.depthMask(Ot),gt=Ot)},setFunc:function(Ot){if(_t!==Ot){switch(Ot){case qf:s.depthFunc(s.NEVER);break;case Yf:s.depthFunc(s.ALWAYS);break;case $f:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Jf:s.depthFunc(s.EQUAL);break;case Kf:s.depthFunc(s.GEQUAL);break;case jf:s.depthFunc(s.GREATER);break;case Qf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Ot}},setLocked:function(Ot){F=Ot},setClear:function(Ot){Gt!==Ot&&(s.clearDepth(Ot),Gt=Ot)},reset:function(){F=!1,gt=null,_t=null,Gt=null}}}function h(){let F=!1,gt=null,_t=null,Gt=null,Ot=null,de=null,ue=null,De=null,Ve=null;return{setTest:function(_e){F||(_e?Yt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(_e){gt!==_e&&!F&&(s.stencilMask(_e),gt=_e)},setFunc:function(_e,We,Le){(_t!==_e||Gt!==We||Ot!==Le)&&(s.stencilFunc(_e,We,Le),_t=_e,Gt=We,Ot=Le)},setOp:function(_e,We,Le){(de!==_e||ue!==We||De!==Le)&&(s.stencilOp(_e,We,Le),de=_e,ue=We,De=Le)},setLocked:function(_e){F=_e},setClear:function(_e){Ve!==_e&&(s.clearStencil(_e),Ve=_e)},reset:function(){F=!1,gt=null,_t=null,Gt=null,Ot=null,de=null,ue=null,De=null,Ve=null}}}let c=new o,d=new a,f=new h,p=new WeakMap,_=new WeakMap,v={},x={},b=new WeakMap,S=[],y=null,m=!1,P=null,E=null,N=null,k=null,U=null,O=null,rt=null,A=new Vt(0,0,0),R=0,et=!1,st=null,Mt=null,B=null,Z=null,V=null,ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(it)[1]),W=j>=1):it.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),W=j>=2);let at=null,mt={},X=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),xt=new Ae().fromArray(X),At=new Ae().fromArray(tt);function Lt(F,gt,_t,Gt){let Ot=new Uint8Array(4),de=s.createTexture();s.bindTexture(F,de),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ue=0;ue<_t;ue++)i&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(gt,0,s.RGBA,1,1,Gt,0,s.RGBA,s.UNSIGNED_BYTE,Ot):s.texImage2D(gt+ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ot);return de}let qt={};qt[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),qt[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(qt[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),qt[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),Yt(s.DEPTH_TEST),d.setFunc(So),Kt(!1),C(ah),Yt(s.CULL_FACE),Ct(yi);function Yt(F){v[F]!==!0&&(s.enable(F),v[F]=!0)}function zt(F){v[F]!==!1&&(s.disable(F),v[F]=!1)}function oe(F,gt){return x[F]!==gt?(s.bindFramebuffer(F,gt),x[F]=gt,i&&(F===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=gt),F===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=gt)),!0):!1}function q(F,gt){let _t=S,Gt=!1;if(F)if(_t=b.get(gt),_t===void 0&&(_t=[],b.set(gt,_t)),F.isWebGLMultipleRenderTargets){let Ot=F.texture;if(_t.length!==Ot.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let de=0,ue=Ot.length;de<ue;de++)_t[de]=s.COLOR_ATTACHMENT0+de;_t.length=Ot.length,Gt=!0}}else _t[0]!==s.COLOR_ATTACHMENT0&&(_t[0]=s.COLOR_ATTACHMENT0,Gt=!0);else _t[0]!==s.BACK&&(_t[0]=s.BACK,Gt=!0);Gt&&(e.isWebGL2?s.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function Re(F){return y!==F?(s.useProgram(F),y=F,!0):!1}let Bt={[Fi]:s.FUNC_ADD,[If]:s.FUNC_SUBTRACT,[Df]:s.FUNC_REVERSE_SUBTRACT};if(i)Bt[hh]=s.MIN,Bt[uh]=s.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(Bt[hh]=F.MIN_EXT,Bt[uh]=F.MAX_EXT)}let Xt={[Nf]:s.ZERO,[Of]:s.ONE,[Uf]:s.SRC_COLOR,[ml]:s.SRC_ALPHA,[Gf]:s.SRC_ALPHA_SATURATE,[kf]:s.DST_COLOR,[zf]:s.DST_ALPHA,[Ff]:s.ONE_MINUS_SRC_COLOR,[gl]:s.ONE_MINUS_SRC_ALPHA,[Hf]:s.ONE_MINUS_DST_COLOR,[Bf]:s.ONE_MINUS_DST_ALPHA,[Vf]:s.CONSTANT_COLOR,[Wf]:s.ONE_MINUS_CONSTANT_COLOR,[Xf]:s.CONSTANT_ALPHA,[Zf]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(F,gt,_t,Gt,Ot,de,ue,De,Ve,_e){if(F===yi){m===!0&&(zt(s.BLEND),m=!1);return}if(m===!1&&(Yt(s.BLEND),m=!0),F!==Lf){if(F!==P||_e!==et){if((E!==Fi||U!==Fi)&&(s.blendEquation(s.FUNC_ADD),E=Fi,U=Fi),_e)switch(F){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case On:s.blendFunc(s.ONE,s.ONE);break;case lh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ch:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case On:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case lh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ch:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}N=null,k=null,O=null,rt=null,A.set(0,0,0),R=0,P=F,et=_e}return}Ot=Ot||gt,de=de||_t,ue=ue||Gt,(gt!==E||Ot!==U)&&(s.blendEquationSeparate(Bt[gt],Bt[Ot]),E=gt,U=Ot),(_t!==N||Gt!==k||de!==O||ue!==rt)&&(s.blendFuncSeparate(Xt[_t],Xt[Gt],Xt[de],Xt[ue]),N=_t,k=Gt,O=de,rt=ue),(De.equals(A)===!1||Ve!==R)&&(s.blendColor(De.r,De.g,De.b,Ve),A.copy(De),R=Ve),P=F,et=!1}function xe(F,gt){F.side===cn?zt(s.CULL_FACE):Yt(s.CULL_FACE);let _t=F.side===tn;gt&&(_t=!_t),Kt(_t),F.blending===Is&&F.transparent===!1?Ct(yi):Ct(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),d.setFunc(F.depthFunc),d.setTest(F.depthTest),d.setMask(F.depthWrite),c.setMask(F.colorWrite);let Gt=F.stencilWrite;f.setTest(Gt),Gt&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Yt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(F){st!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),st=F)}function C(F){F!==Cf?(Yt(s.CULL_FACE),F!==Mt&&(F===ah?s.cullFace(s.BACK):F===Pf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),Mt=F}function w(F){F!==B&&(W&&s.lineWidth(F),B=F)}function Y(F,gt,_t){F?(Yt(s.POLYGON_OFFSET_FILL),(Z!==gt||V!==_t)&&(s.polygonOffset(gt,_t),Z=gt,V=_t)):zt(s.POLYGON_OFFSET_FILL)}function ft(F){F?Yt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function ut(F){F===void 0&&(F=s.TEXTURE0+ot-1),at!==F&&(s.activeTexture(F),at=F)}function dt(F,gt,_t){_t===void 0&&(at===null?_t=s.TEXTURE0+ot-1:_t=at);let Gt=mt[_t];Gt===void 0&&(Gt={type:void 0,texture:void 0},mt[_t]=Gt),(Gt.type!==F||Gt.texture!==gt)&&(at!==_t&&(s.activeTexture(_t),at=_t),s.bindTexture(F,gt||qt[F]),Gt.type=F,Gt.texture=gt)}function Rt(){let F=mt[at];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function St(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(F){xt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),xt.copy(F))}function se(F){At.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),At.copy(F))}function le(F,gt){let _t=_.get(gt);_t===void 0&&(_t=new WeakMap,_.set(gt,_t));let Gt=_t.get(F);Gt===void 0&&(Gt=s.getUniformBlockIndex(gt,F.name),_t.set(F,Gt))}function ee(F,gt){let Gt=_.get(gt).get(F);p.get(gt)!==Gt&&(s.uniformBlockBinding(gt,Gt,F.__bindingPointIndex),p.set(gt,Gt))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},at=null,mt={},x={},b=new WeakMap,S=[],y=null,m=!1,P=null,E=null,N=null,k=null,U=null,O=null,rt=null,A=new Vt(0,0,0),R=0,et=!1,st=null,Mt=null,B=null,Z=null,V=null,xt.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:Yt,disable:zt,bindFramebuffer:oe,drawBuffers:q,useProgram:Re,setBlending:Ct,setMaterial:xe,setFlipSided:Kt,setCullFace:C,setLineWidth:w,setPolygonOffset:Y,setScissorTest:ft,activeTexture:ut,bindTexture:dt,unbindTexture:Rt,compressedTexImage2D:St,compressedTexImage3D:Tt,texImage2D:yt,texImage3D:pt,updateUBOMapping:le,uniformBlockBinding:ee,texStorage2D:I,texStorage3D:ct,texSubImage2D:Ht,texSubImage3D:Qt,compressedTexSubImage2D:ht,compressedTexSubImage3D:ae,scissor:Dt,viewport:se,reset:vt}}function A0(s,t,e,i,o,a,h){let c=o.isWebGL2,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap,_,v=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,w){return x?new OffscreenCanvas(C,w):_r("canvas")}function S(C,w,Y,ft){let ut=1;if((C.width>ft||C.height>ft)&&(ut=ft/Math.max(C.width,C.height)),ut<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let dt=w?Ro:Math.floor,Rt=dt(ut*C.width),St=dt(ut*C.height);_===void 0&&(_=b(Rt,St));let Tt=Y?b(Rt,St):_;return Tt.width=Rt,Tt.height=St,Tt.getContext("2d").drawImage(C,0,0,Rt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Rt+"x"+St+")."),Tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Sl(C.width)&&Sl(C.height)}function m(C){return c?!1:C.wrapS!==Dn||C.wrapT!==Dn||C.minFilter!==ln&&C.minFilter!==wn}function P(C,w){return C.generateMipmaps&&w&&C.minFilter!==ln&&C.minFilter!==wn}function E(C){s.generateMipmap(C)}function N(C,w,Y,ft,ut=!1){if(c===!1)return w;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt=w;if(w===s.RED&&(Y===s.FLOAT&&(dt=s.R32F),Y===s.HALF_FLOAT&&(dt=s.R16F),Y===s.UNSIGNED_BYTE&&(dt=s.R8)),w===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(dt=s.R8UI),Y===s.UNSIGNED_SHORT&&(dt=s.R16UI),Y===s.UNSIGNED_INT&&(dt=s.R32UI),Y===s.BYTE&&(dt=s.R8I),Y===s.SHORT&&(dt=s.R16I),Y===s.INT&&(dt=s.R32I)),w===s.RG&&(Y===s.FLOAT&&(dt=s.RG32F),Y===s.HALF_FLOAT&&(dt=s.RG16F),Y===s.UNSIGNED_BYTE&&(dt=s.RG8)),w===s.RGBA){let Rt=ut?To:ye.getTransfer(ft);Y===s.FLOAT&&(dt=s.RGBA32F),Y===s.HALF_FLOAT&&(dt=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(dt=Rt===we?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function k(C,w,Y){return P(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==wn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function U(C){return C===ln||C===dh||C===Ua?s.NEAREST:s.LINEAR}function O(C){let w=C.target;w.removeEventListener("dispose",O),A(w),w.isVideoTexture&&p.delete(w)}function rt(C){let w=C.target;w.removeEventListener("dispose",rt),et(w)}function A(C){let w=i.get(C);if(w.__webglInit===void 0)return;let Y=C.source,ft=v.get(Y);if(ft){let ut=ft[w.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&R(C),Object.keys(ft).length===0&&v.delete(Y)}i.remove(C)}function R(C){let w=i.get(C);s.deleteTexture(w.__webglTexture);let Y=C.source,ft=v.get(Y);delete ft[w.__cacheKey],h.memory.textures--}function et(C){let w=C.texture,Y=i.get(C),ft=i.get(w);if(ft.__webglTexture!==void 0&&(s.deleteTexture(ft.__webglTexture),h.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(Y.__webglFramebuffer[ut]))for(let dt=0;dt<Y.__webglFramebuffer[ut].length;dt++)s.deleteFramebuffer(Y.__webglFramebuffer[ut][dt]);else s.deleteFramebuffer(Y.__webglFramebuffer[ut]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[ut])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ut=0;ut<Y.__webglFramebuffer.length;ut++)s.deleteFramebuffer(Y.__webglFramebuffer[ut]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ut=0;ut<Y.__webglColorRenderbuffer.length;ut++)Y.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[ut]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ut=0,dt=w.length;ut<dt;ut++){let Rt=i.get(w[ut]);Rt.__webglTexture&&(s.deleteTexture(Rt.__webglTexture),h.memory.textures--),i.remove(w[ut])}i.remove(w),i.remove(C)}let st=0;function Mt(){st=0}function B(){let C=st;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),st+=1,C}function Z(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function V(C,w){let Y=i.get(C);if(C.isVideoTexture&&xe(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let ft=C.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(Y,C,w);return}}e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+w)}function ot(C,w){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){xt(Y,C,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+w)}function W(C,w){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){xt(Y,C,w);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+w)}function j(C,w){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){At(Y,C,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+w)}let it={[yl]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[xl]:s.MIRRORED_REPEAT},at={[ln]:s.NEAREST,[dh]:s.NEAREST_MIPMAP_NEAREST,[Ua]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[ap]:s.LINEAR_MIPMAP_NEAREST,[pr]:s.LINEAR_MIPMAP_LINEAR},mt={[yp]:s.NEVER,[Ep]:s.ALWAYS,[xp]:s.LESS,[Ku]:s.LEQUAL,[Mp]:s.EQUAL,[wp]:s.GEQUAL,[bp]:s.GREATER,[Sp]:s.NOTEQUAL};function X(C,w,Y){if(Y?(s.texParameteri(C,s.TEXTURE_WRAP_S,it[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,it[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,it[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,at[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,at[w.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==Dn||w.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,U(w.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,U(w.minFilter)),w.minFilter!==ln&&w.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ft=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===ln||w.minFilter!==Ua&&w.minFilter!==pr||w.type===vi&&t.has("OES_texture_float_linear")===!1||c===!1&&w.type===mr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(C,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function tt(C,w){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",O));let ft=w.source,ut=v.get(ft);ut===void 0&&(ut={},v.set(ft,ut));let dt=Z(w);if(dt!==C.__cacheKey){ut[dt]===void 0&&(ut[dt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),ut[dt].usedTimes++;let Rt=ut[C.__cacheKey];Rt!==void 0&&(ut[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&R(w)),C.__cacheKey=dt,C.__webglTexture=ut[dt].texture}return Y}function xt(C,w,Y){let ft=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ft=s.TEXTURE_3D);let ut=tt(C,w),dt=w.source;e.bindTexture(ft,C.__webglTexture,s.TEXTURE0+Y);let Rt=i.get(dt);if(dt.version!==Rt.__version||ut===!0){e.activeTexture(s.TEXTURE0+Y);let St=ye.getPrimaries(ye.workingColorSpace),Tt=w.colorSpace===En?null:ye.getPrimaries(w.colorSpace),Ht=w.colorSpace===En||St===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Qt=m(w)&&y(w.image)===!1,ht=S(w.image,Qt,!1,o.maxTextureSize);ht=Kt(w,ht);let ae=y(ht)||c,I=a.convert(w.format,w.colorSpace),ct=a.convert(w.type),yt=N(w.internalFormat,I,ct,w.colorSpace,w.isVideoTexture);X(ft,w,ae);let pt,Dt=w.mipmaps,se=c&&w.isVideoTexture!==!0&&yt!==Yu,le=Rt.__version===void 0||ut===!0,ee=k(w,ht,ae);if(w.isDepthTexture)yt=s.DEPTH_COMPONENT,c?w.type===vi?yt=s.DEPTH_COMPONENT32F:w.type===_i?yt=s.DEPTH_COMPONENT24:w.type===ki?yt=s.DEPTH24_STENCIL8:yt=s.DEPTH_COMPONENT16:w.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Hi&&yt===s.DEPTH_COMPONENT&&w.type!==rc&&w.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=_i,ct=a.convert(w.type)),w.format===Fs&&yt===s.DEPTH_COMPONENT&&(yt=s.DEPTH_STENCIL,w.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ki,ct=a.convert(w.type))),le&&(se?e.texStorage2D(s.TEXTURE_2D,1,yt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,yt,ht.width,ht.height,0,I,ct,null));else if(w.isDataTexture)if(Dt.length>0&&ae){se&&le&&e.texStorage2D(s.TEXTURE_2D,ee,yt,Dt[0].width,Dt[0].height);for(let vt=0,F=Dt.length;vt<F;vt++)pt=Dt[vt],se?e.texSubImage2D(s.TEXTURE_2D,vt,0,0,pt.width,pt.height,I,ct,pt.data):e.texImage2D(s.TEXTURE_2D,vt,yt,pt.width,pt.height,0,I,ct,pt.data);w.generateMipmaps=!1}else se?(le&&e.texStorage2D(s.TEXTURE_2D,ee,yt,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,I,ct,ht.data)):e.texImage2D(s.TEXTURE_2D,0,yt,ht.width,ht.height,0,I,ct,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){se&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ee,yt,Dt[0].width,Dt[0].height,ht.depth);for(let vt=0,F=Dt.length;vt<F;vt++)pt=Dt[vt],w.format!==Nn?I!==null?se?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,pt.width,pt.height,ht.depth,I,pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,yt,pt.width,pt.height,ht.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,pt.width,pt.height,ht.depth,I,ct,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,vt,yt,pt.width,pt.height,ht.depth,0,I,ct,pt.data)}else{se&&le&&e.texStorage2D(s.TEXTURE_2D,ee,yt,Dt[0].width,Dt[0].height);for(let vt=0,F=Dt.length;vt<F;vt++)pt=Dt[vt],w.format!==Nn?I!==null?se?e.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,pt.width,pt.height,I,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,vt,yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage2D(s.TEXTURE_2D,vt,0,0,pt.width,pt.height,I,ct,pt.data):e.texImage2D(s.TEXTURE_2D,vt,yt,pt.width,pt.height,0,I,ct,pt.data)}else if(w.isDataArrayTexture)se?(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ee,yt,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,I,ct,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,ht.width,ht.height,ht.depth,0,I,ct,ht.data);else if(w.isData3DTexture)se?(le&&e.texStorage3D(s.TEXTURE_3D,ee,yt,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,I,ct,ht.data)):e.texImage3D(s.TEXTURE_3D,0,yt,ht.width,ht.height,ht.depth,0,I,ct,ht.data);else if(w.isFramebufferTexture){if(le)if(se)e.texStorage2D(s.TEXTURE_2D,ee,yt,ht.width,ht.height);else{let vt=ht.width,F=ht.height;for(let gt=0;gt<ee;gt++)e.texImage2D(s.TEXTURE_2D,gt,yt,vt,F,0,I,ct,null),vt>>=1,F>>=1}}else if(Dt.length>0&&ae){se&&le&&e.texStorage2D(s.TEXTURE_2D,ee,yt,Dt[0].width,Dt[0].height);for(let vt=0,F=Dt.length;vt<F;vt++)pt=Dt[vt],se?e.texSubImage2D(s.TEXTURE_2D,vt,0,0,I,ct,pt):e.texImage2D(s.TEXTURE_2D,vt,yt,I,ct,pt);w.generateMipmaps=!1}else se?(le&&e.texStorage2D(s.TEXTURE_2D,ee,yt,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,I,ct,ht)):e.texImage2D(s.TEXTURE_2D,0,yt,I,ct,ht);P(w,ae)&&E(ft),Rt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function At(C,w,Y){if(w.image.length!==6)return;let ft=tt(C,w),ut=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Y);let dt=i.get(ut);if(ut.version!==dt.__version||ft===!0){e.activeTexture(s.TEXTURE0+Y);let Rt=ye.getPrimaries(ye.workingColorSpace),St=w.colorSpace===En?null:ye.getPrimaries(w.colorSpace),Tt=w.colorSpace===En||Rt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ht=w.isCompressedTexture||w.image[0].isCompressedTexture,Qt=w.image[0]&&w.image[0].isDataTexture,ht=[];for(let vt=0;vt<6;vt++)!Ht&&!Qt?ht[vt]=S(w.image[vt],!1,!0,o.maxCubemapSize):ht[vt]=Qt?w.image[vt].image:w.image[vt],ht[vt]=Kt(w,ht[vt]);let ae=ht[0],I=y(ae)||c,ct=a.convert(w.format,w.colorSpace),yt=a.convert(w.type),pt=N(w.internalFormat,ct,yt,w.colorSpace),Dt=c&&w.isVideoTexture!==!0,se=dt.__version===void 0||ft===!0,le=k(w,ae,I);X(s.TEXTURE_CUBE_MAP,w,I);let ee;if(Ht){Dt&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,le,pt,ae.width,ae.height);for(let vt=0;vt<6;vt++){ee=ht[vt].mipmaps;for(let F=0;F<ee.length;F++){let gt=ee[F];w.format!==Nn?ct!==null?Dt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,gt.width,gt.height,ct,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,gt.width,gt.height,ct,yt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,pt,gt.width,gt.height,0,ct,yt,gt.data)}}}else{ee=w.mipmaps,Dt&&se&&(ee.length>0&&le++,e.texStorage2D(s.TEXTURE_CUBE_MAP,le,pt,ht[0].width,ht[0].height));for(let vt=0;vt<6;vt++)if(Qt){Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ht[vt].width,ht[vt].height,ct,yt,ht[vt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pt,ht[vt].width,ht[vt].height,0,ct,yt,ht[vt].data);for(let F=0;F<ee.length;F++){let _t=ee[F].image[vt].image;Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,_t.width,_t.height,ct,yt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,pt,_t.width,_t.height,0,ct,yt,_t.data)}}else{Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ct,yt,ht[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pt,ct,yt,ht[vt]);for(let F=0;F<ee.length;F++){let gt=ee[F];Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,ct,yt,gt.image[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,pt,ct,yt,gt.image[vt])}}}P(w,I)&&E(s.TEXTURE_CUBE_MAP),dt.__version=ut.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Lt(C,w,Y,ft,ut,dt){let Rt=a.convert(Y.format,Y.colorSpace),St=a.convert(Y.type),Tt=N(Y.internalFormat,Rt,St,Y.colorSpace);if(!i.get(w).__hasExternalTextures){let Qt=Math.max(1,w.width>>dt),ht=Math.max(1,w.height>>dt);ut===s.TEXTURE_3D||ut===s.TEXTURE_2D_ARRAY?e.texImage3D(ut,dt,Tt,Qt,ht,w.depth,0,Rt,St,null):e.texImage2D(ut,dt,Tt,Qt,ht,0,Rt,St,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ct(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,ut,i.get(Y).__webglTexture,0,Xt(w)):(ut===s.TEXTURE_2D||ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,ut,i.get(Y).__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(C,w,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let ft=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||Ct(w)){let ut=w.depthTexture;ut&&ut.isDepthTexture&&(ut.type===vi?ft=s.DEPTH_COMPONENT32F:ut.type===_i&&(ft=s.DEPTH_COMPONENT24));let dt=Xt(w);Ct(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,ft,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ft,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,ft,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let ft=Xt(w);Y&&Ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,s.DEPTH24_STENCIL8,w.width,w.height):Ct(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let ft=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ut=0;ut<ft.length;ut++){let dt=ft[ut],Rt=a.convert(dt.format,dt.colorSpace),St=a.convert(dt.type),Tt=N(dt.internalFormat,Rt,St,dt.colorSpace),Ht=Xt(w);Y&&Ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,Tt,w.width,w.height):Ct(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht,Tt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Yt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let ft=i.get(w.depthTexture).__webglTexture,ut=Xt(w);if(w.depthTexture.format===Hi)Ct(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0);else if(w.depthTexture.format===Fs)Ct(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function zt(C){let w=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Yt(w.__webglFramebuffer,C)}else if(Y){w.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ft]),w.__webglDepthbuffer[ft]=s.createRenderbuffer(),qt(w.__webglDepthbuffer[ft],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),qt(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,w,Y){let ft=i.get(C);w!==void 0&&Lt(ft.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&zt(C)}function q(C){let w=C.texture,Y=i.get(C),ft=i.get(w);C.addEventListener("dispose",rt),C.isWebGLMultipleRenderTargets!==!0&&(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=w.version,h.memory.textures++);let ut=C.isWebGLCubeRenderTarget===!0,dt=C.isWebGLMultipleRenderTargets===!0,Rt=y(C)||c;if(ut){Y.__webglFramebuffer=[];for(let St=0;St<6;St++)if(c&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[St]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)Y.__webglFramebuffer[St][Tt]=s.createFramebuffer()}else Y.__webglFramebuffer[St]=s.createFramebuffer()}else{if(c&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let St=0;St<w.mipmaps.length;St++)Y.__webglFramebuffer[St]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(dt)if(o.drawBuffers){let St=C.texture;for(let Tt=0,Ht=St.length;Tt<Ht;Tt++){let Qt=i.get(St[Tt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&Ct(C)===!1){let St=dt?w:[w];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Tt=0;Tt<St.length;Tt++){let Ht=St[Tt];Y.__webglColorRenderbuffer[Tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt]);let Qt=a.convert(Ht.format,Ht.colorSpace),ht=a.convert(Ht.type),ae=N(Ht.internalFormat,Qt,ht,Ht.colorSpace,C.isXRRenderTarget===!0),I=Xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,I,ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),X(s.TEXTURE_CUBE_MAP,w,Rt);for(let St=0;St<6;St++)if(c&&w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Lt(Y.__webglFramebuffer[St][Tt],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Tt);else Lt(Y.__webglFramebuffer[St],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);P(w,Rt)&&E(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){let St=C.texture;for(let Tt=0,Ht=St.length;Tt<Ht;Tt++){let Qt=St[Tt],ht=i.get(Qt);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),X(s.TEXTURE_2D,Qt,Rt),Lt(Y.__webglFramebuffer,C,Qt,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,0),P(Qt,Rt)&&E(s.TEXTURE_2D)}e.unbindTexture()}else{let St=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?St=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(St,ft.__webglTexture),X(St,w,Rt),c&&w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Lt(Y.__webglFramebuffer[Tt],C,w,s.COLOR_ATTACHMENT0,St,Tt);else Lt(Y.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,St,0);P(w,Rt)&&E(St),e.unbindTexture()}C.depthBuffer&&zt(C)}function Re(C){let w=y(C)||c,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ft=0,ut=Y.length;ft<ut;ft++){let dt=Y[ft];if(P(dt,w)){let Rt=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=i.get(dt).__webglTexture;e.bindTexture(Rt,St),E(Rt),e.unbindTexture()}}}function Bt(C){if(c&&C.samples>0&&Ct(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,ft=C.height,ut=s.COLOR_BUFFER_BIT,dt=[],Rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=i.get(C),Tt=C.isWebGLMultipleRenderTargets===!0;if(Tt)for(let Ht=0;Ht<w.length;Ht++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ht=0;Ht<w.length;Ht++){dt.push(s.COLOR_ATTACHMENT0+Ht),C.depthBuffer&&dt.push(Rt);let Qt=St.__ignoreDepthValues!==void 0?St.__ignoreDepthValues:!1;if(Qt===!1&&(C.depthBuffer&&(ut|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ut|=s.STENCIL_BUFFER_BIT)),Tt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[Ht]),Qt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Rt])),Tt){let ht=i.get(w[Ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,Y,ft,0,0,Y,ft,ut,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Tt)for(let Ht=0;Ht<w.length;Ht++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.RENDERBUFFER,St.__webglColorRenderbuffer[Ht]);let Qt=i.get(w[Ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.TEXTURE_2D,Qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}}function Xt(C){return Math.min(o.maxSamples,C.samples)}function Ct(C){let w=i.get(C);return c&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xe(C){let w=h.render.frame;p.get(C)!==w&&(p.set(C,w),C.update())}function Kt(C,w){let Y=C.colorSpace,ft=C.format,ut=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===bl||Y!==ri&&Y!==En&&(ye.getTransfer(Y)===we?c===!1?t.has("EXT_sRGB")===!0&&ft===Nn?(C.format=bl,C.minFilter=wn,C.generateMipmaps=!1):w=Lo.sRGBToLinear(w):(ft!==Nn||ut!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}this.allocateTextureUnit=B,this.resetTextureUnits=Mt,this.setTexture2D=V,this.setTexture2DArray=ot,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=oe,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ct}function C0(s,t,e){let i=e.isWebGL2;function o(a,h=En){let c,d=ye.getTransfer(h);if(a===Mi)return s.UNSIGNED_BYTE;if(a===Vu)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Wu)return s.UNSIGNED_SHORT_5_5_5_1;if(a===lp)return s.BYTE;if(a===cp)return s.SHORT;if(a===rc)return s.UNSIGNED_SHORT;if(a===Gu)return s.INT;if(a===_i)return s.UNSIGNED_INT;if(a===vi)return s.FLOAT;if(a===mr)return i?s.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===hp)return s.ALPHA;if(a===Nn)return s.RGBA;if(a===up)return s.LUMINANCE;if(a===dp)return s.LUMINANCE_ALPHA;if(a===Hi)return s.DEPTH_COMPONENT;if(a===Fs)return s.DEPTH_STENCIL;if(a===bl)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===fp)return s.RED;if(a===Xu)return s.RED_INTEGER;if(a===pp)return s.RG;if(a===Zu)return s.RG_INTEGER;if(a===qu)return s.RGBA_INTEGER;if(a===Fa||a===za||a===Ba||a===ka)if(d===we)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Fa)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===za)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ba)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ka)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Fa)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===za)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ba)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ka)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fh||a===ph||a===mh||a===gh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yu)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===_h||a===vh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===_h)return d===we?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===vh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===yh||a===xh||a===Mh||a===bh||a===Sh||a===wh||a===Eh||a===Th||a===Ah||a===Ch||a===Ph||a===Rh||a===Lh||a===Ih)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===yh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Mh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===bh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Sh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===wh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Eh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Th)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ah)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ch)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ph)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Rh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Lh)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ih)return d===we?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ha||a===Dh||a===Nh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Ha)return d===we?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Dh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Nh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===mp||a===Oh||a===Uh||a===Fh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ha)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Uh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Fh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ki?i?s.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:o}}var Fl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ze=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},P0={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,a=null,h=null,c=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){h=!0;for(let S of t.hand.values()){let y=e.getJointPose(S,i),m=this._getHandJoint(f,S);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],v=p.position.distanceTo(_.position),x=.02,b=.005;f.inputState.pinching&&v>x+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&v<=x-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},zl=class extends Wn{constructor(t,e){super();let i=this,o=null,a=1,h=null,c="local-floor",d=1,f=null,p=null,_=null,v=null,x=null,b=null,S=e.getContextAttributes(),y=null,m=null,P=[],E=[],N=new kt,k=null,U=new Qe;U.layers.enable(1),U.viewport=new Ae;let O=new Qe;O.layers.enable(2),O.viewport=new Ae;let rt=[U,O],A=new Fl;A.layers.enable(1),A.layers.enable(2);let R=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=P[X];return tt===void 0&&(tt=new fr,P[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=P[X];return tt===void 0&&(tt=new fr,P[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=P[X];return tt===void 0&&(tt=new fr,P[X]=tt),tt.getHandSpace()};function st(X){let tt=E.indexOf(X.inputSource);if(tt===-1)return;let xt=P[tt];xt!==void 0&&(xt.update(X.inputSource,X.frame,f||h),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function Mt(){o.removeEventListener("select",st),o.removeEventListener("selectstart",st),o.removeEventListener("selectend",st),o.removeEventListener("squeeze",st),o.removeEventListener("squeezestart",st),o.removeEventListener("squeezeend",st),o.removeEventListener("end",Mt),o.removeEventListener("inputsourceschange",B);for(let X=0;X<P.length;X++){let tt=E[X];tt!==null&&(E[X]=null,P[X].disconnect(tt))}R=null,et=null,t.setRenderTarget(y),x=null,v=null,_=null,o=null,m=null,mt.stop(),i.isPresenting=!1,t.setPixelRatio(k),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){c=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||h},this.setReferenceSpace=function(X){f=X},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",st),o.addEventListener("selectstart",st),o.addEventListener("selectend",st),o.addEventListener("squeeze",st),o.addEventListener("squeezestart",st),o.addEventListener("squeezeend",st),o.addEventListener("end",Mt),o.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await e.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(N),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:o.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,e,tt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),m=new oi(x.framebufferWidth,x.framebufferHeight,{format:Nn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let tt=null,xt=null,At=null;S.depth&&(At=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=S.stencil?Fs:Hi,xt=S.stencil?ki:_i);let Lt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:a};_=new XRWebGLBinding(o,e),v=_.createProjectionLayer(Lt),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),m=new oi(v.textureWidth,v.textureHeight,{format:Nn,type:Mi,depthTexture:new Ho(v.textureWidth,v.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0});let qt=t.properties.get(m);qt.__ignoreDepthValues=v.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(d),f=null,h=await o.requestReferenceSpace(c),mt.setContext(o),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function B(X){for(let tt=0;tt<X.removed.length;tt++){let xt=X.removed[tt],At=E.indexOf(xt);At>=0&&(E[At]=null,P[At].disconnect(xt))}for(let tt=0;tt<X.added.length;tt++){let xt=X.added[tt],At=E.indexOf(xt);if(At===-1){for(let qt=0;qt<P.length;qt++)if(qt>=E.length){E.push(xt),At=qt;break}else if(E[qt]===null){E[qt]=xt,At=qt;break}if(At===-1)break}let Lt=P[At];Lt&&Lt.connect(xt)}}let Z=new z,V=new z;function ot(X,tt,xt){Z.setFromMatrixPosition(tt.matrixWorld),V.setFromMatrixPosition(xt.matrixWorld);let At=Z.distanceTo(V),Lt=tt.projectionMatrix.elements,qt=xt.projectionMatrix.elements,Yt=Lt[14]/(Lt[10]-1),zt=Lt[14]/(Lt[10]+1),oe=(Lt[9]+1)/Lt[5],q=(Lt[9]-1)/Lt[5],Re=(Lt[8]-1)/Lt[0],Bt=(qt[8]+1)/qt[0],Xt=Yt*Re,Ct=Yt*Bt,xe=At/(-Re+Bt),Kt=xe*-Re;tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Kt),X.translateZ(xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let C=Yt+xe,w=zt+xe,Y=Xt-Kt,ft=Ct+(At-Kt),ut=oe*zt/w*C,dt=q*zt/w*C;X.projectionMatrix.makePerspective(Y,ft,ut,dt,C,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function W(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;A.near=O.near=U.near=X.near,A.far=O.far=U.far=X.far,(R!==A.near||et!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,et=A.far);let tt=X.parent,xt=A.cameras;W(A,tt);for(let At=0;At<xt.length;At++)W(xt[At],tt);xt.length===2?ot(A,U,O):A.projectionMatrix.copy(U.projectionMatrix),j(X,A,tt)};function j(X,tt,xt){xt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(X){d=X,v!==null&&(v.fixedFoveation=X),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=X)};let it=null;function at(X,tt){if(p=tt.getViewerPose(f||h),b=tt,p!==null){let xt=p.views;x!==null&&(t.setRenderTargetFramebuffer(m,x.framebuffer),t.setRenderTarget(m));let At=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,At=!0);for(let Lt=0;Lt<xt.length;Lt++){let qt=xt[Lt],Yt=null;if(x!==null)Yt=x.getViewport(qt);else{let oe=_.getViewSubImage(v,qt);Yt=oe.viewport,Lt===0&&(t.setRenderTargetTextures(m,oe.colorTexture,v.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(m))}let zt=rt[Lt];zt===void 0&&(zt=new Qe,zt.layers.enable(Lt),zt.viewport=new Ae,rt[Lt]=zt),zt.matrix.fromArray(qt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(qt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Lt===0&&(A.matrix.copy(zt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),At===!0&&A.cameras.push(zt)}}for(let xt=0;xt<P.length;xt++){let At=E[xt],Lt=P[xt];At!==null&&Lt!==void 0&&Lt.update(At,tt,f||h)}it&&it(X,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),b=null}let mt=new ed;mt.setAnimationLoop(at),this.setAnimationLoop=function(X){it=X},this.dispose=function(){}}};function R0(s,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,td(s)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function o(y,m,P,E,N){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(y,m):m.isMeshToonMaterial?(a(y,m),_(y,m)):m.isMeshPhongMaterial?(a(y,m),p(y,m)):m.isMeshStandardMaterial?(a(y,m),v(y,m),m.isMeshPhysicalMaterial&&x(y,m,N)):m.isMeshMatcapMaterial?(a(y,m),b(y,m)):m.isMeshDepthMaterial?a(y,m):m.isMeshDistanceMaterial?(a(y,m),S(y,m)):m.isMeshNormalMaterial?a(y,m):m.isLineBasicMaterial?(h(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?d(y,m,P,E):m.isSpriteMaterial?f(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===tn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===tn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let P=t.get(m).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap){y.lightMap.value=m.lightMap;let E=s._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=m.lightMapIntensity*E,e(m.lightMap,y.lightMapTransform)}m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function d(y,m,P,E){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*P,y.scale.value=E*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function p(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function v(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),t.get(m).envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function x(y,m,P){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&y.clearcoatNormalScale.value.negate())),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,m){m.matcap&&(y.matcap.value=m.matcap)}function S(y,m){let P=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function L0(s,t,e,i){let o={},a={},h=[],c=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(P,E){let N=E.program;i.uniformBlockBinding(P,N)}function f(P,E){let N=o[P.id];N===void 0&&(b(P),N=p(P),o[P.id]=N,P.addEventListener("dispose",y));let k=E.program;i.updateUBOMapping(P,k);let U=t.render.frame;a[P.id]!==U&&(v(P),a[P.id]=U)}function p(P){let E=_();P.__bindingPointIndex=E;let N=s.createBuffer(),k=P.__size,U=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,k,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,N),N}function _(){for(let P=0;P<c;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){let E=o[P.id],N=P.uniforms,k=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let U=0,O=N.length;U<O;U++){let rt=Array.isArray(N[U])?N[U]:[N[U]];for(let A=0,R=rt.length;A<R;A++){let et=rt[A];if(x(et,U,A,k)===!0){let st=et.__offset,Mt=Array.isArray(et.value)?et.value:[et.value],B=0;for(let Z=0;Z<Mt.length;Z++){let V=Mt[Z],ot=S(V);typeof V=="number"||typeof V=="boolean"?(et.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,st+B,et.__data)):V.isMatrix3?(et.__data[0]=V.elements[0],et.__data[1]=V.elements[1],et.__data[2]=V.elements[2],et.__data[3]=0,et.__data[4]=V.elements[3],et.__data[5]=V.elements[4],et.__data[6]=V.elements[5],et.__data[7]=0,et.__data[8]=V.elements[6],et.__data[9]=V.elements[7],et.__data[10]=V.elements[8],et.__data[11]=0):(V.toArray(et.__data,B),B+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,st,et.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(P,E,N,k){let U=P.value,O=E+"_"+N;if(k[O]===void 0)return typeof U=="number"||typeof U=="boolean"?k[O]=U:k[O]=U.clone(),!0;{let rt=k[O];if(typeof U=="number"||typeof U=="boolean"){if(rt!==U)return k[O]=U,!0}else if(rt.equals(U)===!1)return rt.copy(U),!0}return!1}function b(P){let E=P.uniforms,N=0,k=16;for(let O=0,rt=E.length;O<rt;O++){let A=Array.isArray(E[O])?E[O]:[E[O]];for(let R=0,et=A.length;R<et;R++){let st=A[R],Mt=Array.isArray(st.value)?st.value:[st.value];for(let B=0,Z=Mt.length;B<Z;B++){let V=Mt[B],ot=S(V),W=N%k;W!==0&&k-W<ot.boundary&&(N+=k-W),st.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=N,N+=ot.storage}}}let U=N%k;return U>0&&(N+=k-U),P.__size=N,P.__cache={},this}function S(P){let E={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(E.boundary=4,E.storage=4):P.isVector2?(E.boundary=8,E.storage=8):P.isVector3||P.isColor?(E.boundary=16,E.storage=12):P.isVector4?(E.boundary=16,E.storage=16):P.isMatrix3?(E.boundary=48,E.storage=48):P.isMatrix4?(E.boundary=64,E.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),E}function y(P){let E=P.target;E.removeEventListener("dispose",y);let N=h.indexOf(E.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(o[E.id]),delete o[E.id],delete a[E.id]}function m(){for(let P in o)s.deleteBuffer(o[P]);h=[],o={},a={}}return{bind:d,update:f,dispose:m}}var Mr=class{constructor(t={}){let{canvas:e=kp(),context:i=null,depth:o=!0,stencil:a=!0,alpha:h=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=h;let x=new Uint32Array(4),b=new Int32Array(4),S=null,y=null,m=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;let E=this,N=!1,k=0,U=0,O=null,rt=-1,A=null,R=new Ae,et=new Ae,st=null,Mt=new Vt(0),B=0,Z=e.width,V=e.height,ot=1,W=null,j=null,it=new Ae(0,0,Z,V),at=new Ae(0,0,Z,V),mt=!1,X=new xr,tt=!1,xt=!1,At=null,Lt=new Pe,qt=new kt,Yt=new z,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return O===null?ot:1}let q=i;function Re(T,H){for(let K=0;K<T.length;K++){let Q=T[K],$=e.getContext(Q,H);if($!==null)return $}return null}try{let T={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",gt,!1),q===null){let H=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&H.shift(),q=Re(H,T),q===null)throw Re(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Bt,Xt,Ct,xe,Kt,C,w,Y,ft,ut,dt,Rt,St,Tt,Ht,Qt,ht,ae,I,ct,yt,pt,Dt,se;function le(){Bt=new J_(q),Xt=new W_(q,Bt,t),Bt.init(Xt),pt=new C0(q,Bt,Xt),Ct=new T0(q,Bt,Xt),xe=new Q_(q),Kt=new p0,C=new A0(q,Bt,Ct,Kt,Xt,pt,xe),w=new Z_(E),Y=new $_(E),ft=new am(q,Xt),Dt=new G_(q,Bt,ft,Xt),ut=new K_(q,ft,xe,Dt),dt=new iv(q,ut,ft,xe),I=new nv(q,Xt,C),Qt=new X_(Kt),Rt=new f0(E,w,Y,Bt,Xt,Dt,Qt),St=new R0(E,Kt),Tt=new g0,Ht=new b0(Bt,Xt),ae=new H_(E,w,Y,Ct,dt,v,d),ht=new E0(E,dt,Xt),se=new L0(q,xe,Xt,Ct),ct=new V_(q,Bt,xe,Xt),yt=new j_(q,Bt,xe,Xt),xe.programs=Rt.programs,E.capabilities=Xt,E.extensions=Bt,E.properties=Kt,E.renderLists=Tt,E.shadowMap=ht,E.state=Ct,E.info=xe}le();let ee=new zl(E,q);this.xr=ee,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let T=Bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(T){T!==void 0&&(ot=T,this.setSize(Z,V,!1))},this.getSize=function(T){return T.set(Z,V)},this.setSize=function(T,H,K=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,V=H,e.width=Math.floor(T*ot),e.height=Math.floor(H*ot),K===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Z*ot,V*ot).floor()},this.setDrawingBufferSize=function(T,H,K){Z=T,V=H,ot=K,e.width=Math.floor(T*K),e.height=Math.floor(H*K),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,H,K,Q){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,H,K,Q),Ct.viewport(R.copy(it).multiplyScalar(ot).floor())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,H,K,Q){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,H,K,Q),Ct.scissor(et.copy(at).multiplyScalar(ot).floor())},this.getScissorTest=function(){return mt},this.setScissorTest=function(T){Ct.setScissorTest(mt=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,H=!0,K=!0){let Q=0;if(T){let $=!1;if(O!==null){let wt=O.texture.format;$=wt===qu||wt===Zu||wt===Xu}if($){let wt=O.texture.type,Ut=wt===Mi||wt===_i||wt===rc||wt===ki||wt===Vu||wt===Wu,Wt=ae.getClearColor(),$t=ae.getClearAlpha(),ie=Wt.r,te=Wt.g,jt=Wt.b;Ut?(x[0]=ie,x[1]=te,x[2]=jt,x[3]=$t,q.clearBufferuiv(q.COLOR,0,x)):(b[0]=ie,b[1]=te,b[2]=jt,b[3]=$t,q.clearBufferiv(q.COLOR,0,b))}else Q|=q.COLOR_BUFFER_BIT}H&&(Q|=q.DEPTH_BUFFER_BIT),K&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Tt.dispose(),Ht.dispose(),Kt.dispose(),w.dispose(),Y.dispose(),dt.dispose(),Dt.dispose(),se.dispose(),Rt.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Ve),ee.removeEventListener("sessionend",_e),At&&(At.dispose(),At=null),We.stop()};function vt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let T=xe.autoReset,H=ht.enabled,K=ht.autoUpdate,Q=ht.needsUpdate,$=ht.type;le(),xe.autoReset=T,ht.enabled=H,ht.autoUpdate=K,ht.needsUpdate=Q,ht.type=$}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){let H=T.target;H.removeEventListener("dispose",_t),Gt(H)}function Gt(T){Ot(T),Kt.remove(T)}function Ot(T){let H=Kt.get(T).programs;H!==void 0&&(H.forEach(function(K){Rt.releaseProgram(K)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,K,Q,$,wt){H===null&&(H=zt);let Ut=$.isMesh&&$.matrixWorld.determinant()<0,Wt=ai(T,H,K,Q,$);Ct.setMaterial(Q,Ut);let $t=K.index,ie=1;if(Q.wireframe===!0){if($t=ut.getWireframeAttribute(K),$t===void 0)return;ie=2}let te=K.drawRange,jt=K.attributes.position,Me=te.start*ie,Ye=(te.start+te.count)*ie;wt!==null&&(Me=Math.max(Me,wt.start*ie),Ye=Math.min(Ye,(wt.start+wt.count)*ie)),$t!==null?(Me=Math.max(Me,0),Ye=Math.min(Ye,$t.count)):jt!=null&&(Me=Math.max(Me,0),Ye=Math.min(Ye,jt.count));let Ie=Ye-Me;if(Ie<0||Ie===1/0)return;Dt.setup($,Q,Wt,K,$t);let sn,Ft=ct;if($t!==null&&(sn=ft.get($t),Ft=yt,Ft.setIndex(sn)),$.isMesh)Q.wireframe===!0?(Ct.setLineWidth(Q.wireframeLinewidth*oe()),Ft.setMode(q.LINES)):Ft.setMode(q.TRIANGLES);else if($.isLine){let Pt=Q.linewidth;Pt===void 0&&(Pt=1),Ct.setLineWidth(Pt*oe()),$.isLineSegments?Ft.setMode(q.LINES):$.isLineLoop?Ft.setMode(q.LINE_LOOP):Ft.setMode(q.LINE_STRIP)}else $.isPoints?Ft.setMode(q.POINTS):$.isSprite&&Ft.setMode(q.TRIANGLES);if($.isBatchedMesh)Ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ft.renderInstances(Me,Ie,$.count);else if(K.isInstancedBufferGeometry){let Pt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,li=Math.min(K.instanceCount,Pt);Ft.renderInstances(Me,Ie,li)}else Ft.render(Me,Ie)};function de(T,H,K){T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Ai(T,H,K),T.side=bi,T.needsUpdate=!0,Ai(T,H,K),T.side=cn):Ai(T,H,K)}this.compile=function(T,H,K=null){K===null&&(K=T),y=Ht.get(K),y.init(),P.push(y),K.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),T!==K&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),y.setupLights(E._useLegacyLights);let Q=new Set;return T.traverse(function($){let wt=$.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){let Wt=wt[Ut];de(Wt,K,$),Q.add(Wt)}else de(wt,K,$),Q.add(wt)}),P.pop(),y=null,Q},this.compileAsync=function(T,H,K=null){let Q=this.compile(T,H,K);return new Promise($=>{function wt(){if(Q.forEach(function(Ut){Kt.get(Ut).currentProgram.isReady()&&Q.delete(Ut)}),Q.size===0){$(T);return}setTimeout(wt,10)}Bt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ue=null;function De(T){ue&&ue(T)}function Ve(){We.stop()}function _e(){We.start()}let We=new ed;We.setAnimationLoop(De),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(T){ue=T,ee.setAnimationLoop(T),T===null?We.stop():We.start()},ee.addEventListener("sessionstart",Ve),ee.addEventListener("sessionend",_e),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(H),H=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,H,O),y=Ht.get(T,P.length),y.init(),P.push(y),Lt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(Lt),xt=this.localClippingEnabled,tt=Qt.init(this.clippingPlanes,xt),S=Tt.get(T,m.length),S.init(),m.push(S),Le(T,H,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(W,j),this.info.render.frame++,tt===!0&&Qt.beginShadows();let K=y.state.shadowsArray;if(ht.render(K,T,H),tt===!0&&Qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(S,T),y.setupLights(E._useLegacyLights),H.isArrayCamera){let Q=H.cameras;for(let $=0,wt=Q.length;$<wt;$++){let Ut=Q[$];It(S,T,Ut,Ut.viewport)}}else It(S,T,H);O!==null&&(C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(E,T,H),Dt.resetDefaultState(),rt=-1,A=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function Le(T,H,K,Q){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)y.pushLight(T),T.castShadow&&y.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){Q&&Yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Lt);let Ut=dt.update(T),Wt=T.material;Wt.visible&&S.push(T,Ut,Wt,K,Yt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let Ut=dt.update(T),Wt=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Yt.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Yt.copy(Ut.boundingSphere.center)),Yt.applyMatrix4(T.matrixWorld).applyMatrix4(Lt)),Array.isArray(Wt)){let $t=Ut.groups;for(let ie=0,te=$t.length;ie<te;ie++){let jt=$t[ie],Me=Wt[jt.materialIndex];Me&&Me.visible&&S.push(T,Ut,Me,K,Yt.z,jt)}}else Wt.visible&&S.push(T,Ut,Wt,K,Yt.z,null)}}let wt=T.children;for(let Ut=0,Wt=wt.length;Ut<Wt;Ut++)Le(wt[Ut],H,K,Q)}function It(T,H,K,Q){let $=T.opaque,wt=T.transmissive,Ut=T.transparent;y.setupLightsView(K),tt===!0&&Qt.setGlobalState(E.clippingPlanes,K),wt.length>0&&Lr($,wt,H,K),Q&&Ct.viewport(R.copy(Q)),$.length>0&&Ti($,H,K),wt.length>0&&Ti(wt,H,K),Ut.length>0&&Ti(Ut,H,K),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Lr(T,H,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let wt=Xt.isWebGL2;At===null&&(At=new oi(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")?mr:Mi,minFilter:pr,samples:wt?4:0})),E.getDrawingBufferSize(qt),wt?At.setSize(qt.x,qt.y):At.setSize(Ro(qt.x),Ro(qt.y));let Ut=E.getRenderTarget();E.setRenderTarget(At),E.getClearColor(Mt),B=E.getClearAlpha(),B<1&&E.setClearColor(16777215,.5),E.clear();let Wt=E.toneMapping;E.toneMapping=xi,Ti(T,K,Q),C.updateMultisampleRenderTarget(At),C.updateRenderTargetMipmap(At);let $t=!1;for(let ie=0,te=H.length;ie<te;ie++){let jt=H[ie],Me=jt.object,Ye=jt.geometry,Ie=jt.material,sn=jt.group;if(Ie.side===cn&&Me.layers.test(Q.layers)){let Ft=Ie.side;Ie.side=tn,Ie.needsUpdate=!0,Ws(Me,K,Q,Ye,Ie,sn),Ie.side=Ft,Ie.needsUpdate=!0,$t=!0}}$t===!0&&(C.updateMultisampleRenderTarget(At),C.updateRenderTargetMipmap(At)),E.setRenderTarget(Ut),E.setClearColor(Mt,B),E.toneMapping=Wt}function Ti(T,H,K){let Q=H.isScene===!0?H.overrideMaterial:null;for(let $=0,wt=T.length;$<wt;$++){let Ut=T[$],Wt=Ut.object,$t=Ut.geometry,ie=Q===null?Ut.material:Q,te=Ut.group;Wt.layers.test(K.layers)&&Ws(Wt,H,K,$t,ie,te)}}function Ws(T,H,K,Q,$,wt){T.onBeforeRender(E,H,K,Q,$,wt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(E,H,K,Q,T,wt),$.transparent===!0&&$.side===cn&&$.forceSinglePass===!1?($.side=tn,$.needsUpdate=!0,E.renderBufferDirect(K,H,Q,$,T,wt),$.side=bi,$.needsUpdate=!0,E.renderBufferDirect(K,H,Q,$,T,wt),$.side=cn):E.renderBufferDirect(K,H,Q,$,T,wt),T.onAfterRender(E,H,K,Q,$,wt)}function Ai(T,H,K){H.isScene!==!0&&(H=zt);let Q=Kt.get(T),$=y.state.lights,wt=y.state.shadowsArray,Ut=$.state.version,Wt=Rt.getParameters(T,$.state,wt,H,K),$t=Rt.getProgramCacheKey(Wt),ie=Q.programs;Q.environment=T.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(T.isMeshStandardMaterial?Y:w).get(T.envMap||Q.environment),ie===void 0&&(T.addEventListener("dispose",_t),ie=new Map,Q.programs=ie);let te=ie.get($t);if(te!==void 0){if(Q.currentProgram===te&&Q.lightsStateVersion===Ut)return Xs(T,Wt),te}else Wt.uniforms=Rt.getUniforms(T),T.onBuild(K,Wt,E),T.onBeforeCompile(Wt,E),te=Rt.acquireProgram(Wt,$t),ie.set($t,te),Q.uniforms=Wt.uniforms;let jt=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=Qt.uniform),Xs(T,Wt),Q.needsLights=fa(T),Q.lightsStateVersion=Ut,Q.needsLights&&(jt.ambientLightColor.value=$.state.ambient,jt.lightProbe.value=$.state.probe,jt.directionalLights.value=$.state.directional,jt.directionalLightShadows.value=$.state.directionalShadow,jt.spotLights.value=$.state.spot,jt.spotLightShadows.value=$.state.spotShadow,jt.rectAreaLights.value=$.state.rectArea,jt.ltc_1.value=$.state.rectAreaLTC1,jt.ltc_2.value=$.state.rectAreaLTC2,jt.pointLights.value=$.state.point,jt.pointLightShadows.value=$.state.pointShadow,jt.hemisphereLights.value=$.state.hemi,jt.directionalShadowMap.value=$.state.directionalShadowMap,jt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,jt.spotShadowMap.value=$.state.spotShadowMap,jt.spotLightMatrix.value=$.state.spotLightMatrix,jt.spotLightMap.value=$.state.spotLightMap,jt.pointShadowMap.value=$.state.pointShadowMap,jt.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=te,Q.uniformsList=null,te}function ns(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Ns.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Xs(T,H){let K=Kt.get(T);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function ai(T,H,K,Q,$){H.isScene!==!0&&(H=zt),C.resetTextureUnits();let wt=H.fog,Ut=Q.isMeshStandardMaterial?H.environment:null,Wt=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ri,$t=(Q.isMeshStandardMaterial?Y:w).get(Q.envMap||Ut),ie=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,te=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!K.morphAttributes.position,Me=!!K.morphAttributes.normal,Ye=!!K.morphAttributes.color,Ie=xi;Q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ie=E.toneMapping);let sn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ft=sn!==void 0?sn.length:0,Pt=Kt.get(Q),li=y.state.lights;if(tt===!0&&(xt===!0||T!==A)){let un=T===A&&Q.id===rt;Qt.setState(Q,T,un)}let me=!1;Q.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==li.state.version||Pt.outputColorSpace!==Wt||$.isBatchedMesh&&Pt.batching===!1||!$.isBatchedMesh&&Pt.batching===!0||$.isInstancedMesh&&Pt.instancing===!1||!$.isInstancedMesh&&Pt.instancing===!0||$.isSkinnedMesh&&Pt.skinning===!1||!$.isSkinnedMesh&&Pt.skinning===!0||$.isInstancedMesh&&Pt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Pt.instancingColor===!1&&$.instanceColor!==null||Pt.envMap!==$t||Q.fog===!0&&Pt.fog!==wt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Qt.numPlanes||Pt.numIntersection!==Qt.numIntersection)||Pt.vertexAlphas!==ie||Pt.vertexTangents!==te||Pt.morphTargets!==jt||Pt.morphNormals!==Me||Pt.morphColors!==Ye||Pt.toneMapping!==Ie||Xt.isWebGL2===!0&&Pt.morphTargetsCount!==Ft)&&(me=!0):(me=!0,Pt.__version=Q.version);let hn=Pt.currentProgram;me===!0&&(hn=Ai(Q,H,$));let is=!1,Jt=!1,Se=!1,Ne=hn.getUniforms(),xn=Pt.uniforms;if(Ct.useProgram(hn.program)&&(is=!0,Jt=!0,Se=!0),Q.id!==rt&&(rt=Q.id,Jt=!0),is||A!==T){Ne.setValue(q,"projectionMatrix",T.projectionMatrix),Ne.setValue(q,"viewMatrix",T.matrixWorldInverse);let un=Ne.map.cameraPosition;un!==void 0&&un.setValue(q,Yt.setFromMatrixPosition(T.matrixWorld)),Xt.logarithmicDepthBuffer&&Ne.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ne.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Jt=!0,Se=!0)}if($.isSkinnedMesh){Ne.setOptional(q,$,"bindMatrix"),Ne.setOptional(q,$,"bindMatrixInverse");let un=$.skeleton;un&&(Xt.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Ne.setValue(q,"boneTexture",un.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Ne.setOptional(q,$,"batchingTexture"),Ne.setValue(q,"batchingTexture",$._matricesTexture,C));let $e=K.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0&&Xt.isWebGL2===!0)&&I.update($,K,hn),(Jt||Pt.receiveShadow!==$.receiveShadow)&&(Pt.receiveShadow=$.receiveShadow,Ne.setValue(q,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(xn.envMap.value=$t,xn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),Jt&&(Ne.setValue(q,"toneMappingExposure",E.toneMappingExposure),Pt.needsLights&&Ir(xn,Se),wt&&Q.fog===!0&&St.refreshFogUniforms(xn,wt),St.refreshMaterialUniforms(xn,Q,ot,V,At),Ns.upload(q,ns(Pt),xn,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ns.upload(q,ns(Pt),xn,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ne.setValue(q,"center",$.center),Ne.setValue(q,"modelViewMatrix",$.modelViewMatrix),Ne.setValue(q,"normalMatrix",$.normalMatrix),Ne.setValue(q,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let un=Q.uniformsGroups;for(let ci=0,Zn=un.length;ci<Zn;ci++)if(Xt.isWebGL2){let Ce=un[ci];se.update(Ce,hn),se.bind(Ce,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function Ir(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function fa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,H,K){Kt.get(T.texture).__webglTexture=H,Kt.get(T.depthTexture).__webglTexture=K;let Q=Kt.get(T);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){let K=Kt.get(T);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,K=0){O=T,k=H,U=K;let Q=!0,$=null,wt=!1,Ut=!1;if(T){let $t=Kt.get(T);$t.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(q.FRAMEBUFFER,null),Q=!1):$t.__webglFramebuffer===void 0?C.setupRenderTarget(T):$t.__hasExternalTextures&&C.rebindTextures(T,Kt.get(T.texture).__webglTexture,Kt.get(T.depthTexture).__webglTexture);let ie=T.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);let te=Kt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[H])?$=te[H][K]:$=te[H],wt=!0):Xt.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?$=Kt.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?$=te[K]:$=te,R.copy(T.viewport),et.copy(T.scissor),st=T.scissorTest}else R.copy(it).multiplyScalar(ot).floor(),et.copy(at).multiplyScalar(ot).floor(),st=mt;if(Ct.bindFramebuffer(q.FRAMEBUFFER,$)&&Xt.drawBuffers&&Q&&Ct.drawBuffers(T,$),Ct.viewport(R),Ct.scissor(et),Ct.setScissorTest(st),wt){let $t=Kt.get(T.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,$t.__webglTexture,K)}else if(Ut){let $t=Kt.get(T.texture),ie=H||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,$t.__webglTexture,K||0,ie)}rt=-1},this.readRenderTargetPixels=function(T,H,K,Q,$,wt,Ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Wt=Wt[Ut]),Wt){Ct.bindFramebuffer(q.FRAMEBUFFER,Wt);try{let $t=T.texture,ie=$t.format,te=$t.type;if(ie!==Nn&&pt.convert(ie)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let jt=te===mr&&(Bt.has("EXT_color_buffer_half_float")||Xt.isWebGL2&&Bt.has("EXT_color_buffer_float"));if(te!==Mi&&pt.convert(te)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(te===vi&&(Xt.isWebGL2||Bt.has("OES_texture_float")||Bt.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Q&&K>=0&&K<=T.height-$&&q.readPixels(H,K,Q,$,pt.convert(ie),pt.convert(te),wt)}finally{let $t=O!==null?Kt.get(O).__webglFramebuffer:null;Ct.bindFramebuffer(q.FRAMEBUFFER,$t)}}},this.copyFramebufferToTexture=function(T,H,K=0){let Q=Math.pow(2,-K),$=Math.floor(H.image.width*Q),wt=Math.floor(H.image.height*Q);C.setTexture2D(H,0),q.copyTexSubImage2D(q.TEXTURE_2D,K,0,0,T.x,T.y,$,wt),Ct.unbindTexture()},this.copyTextureToTexture=function(T,H,K,Q=0){let $=H.image.width,wt=H.image.height,Ut=pt.convert(K.format),Wt=pt.convert(K.type);C.setTexture2D(K,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment),H.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Q,T.x,T.y,$,wt,Ut,Wt,H.image.data):H.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Q,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ut,H.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Q,T.x,T.y,Ut,Wt,H.image),Q===0&&K.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,H,K,Q,$=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let wt=T.max.x-T.min.x+1,Ut=T.max.y-T.min.y+1,Wt=T.max.z-T.min.z+1,$t=pt.convert(Q.format),ie=pt.convert(Q.type),te;if(Q.isData3DTexture)C.setTexture3D(Q,0),te=q.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)C.setTexture2DArray(Q,0),te=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);let jt=q.getParameter(q.UNPACK_ROW_LENGTH),Me=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Ye=q.getParameter(q.UNPACK_SKIP_PIXELS),Ie=q.getParameter(q.UNPACK_SKIP_ROWS),sn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ft=K.isCompressedTexture?K.mipmaps[$]:K.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ft.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ft.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,T.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,T.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,T.min.z),K.isDataTexture||K.isData3DTexture?q.texSubImage3D(te,$,H.x,H.y,H.z,wt,Ut,Wt,$t,ie,Ft.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(te,$,H.x,H.y,H.z,wt,Ut,Wt,$t,Ft.data)):q.texSubImage3D(te,$,H.x,H.y,H.z,wt,Ut,Wt,$t,ie,Ft),q.pixelStorei(q.UNPACK_ROW_LENGTH,jt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Ye),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ie),q.pixelStorei(q.UNPACK_SKIP_IMAGES,sn),$===0&&Q.generateMipmaps&&q.generateMipmap(te),Ct.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){k=0,U=0,O=null,Ct.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===oc?"display-p3":"srgb",e.unpackColorSpace=ye.workingColorSpace===Qo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Gi:$u}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Gi?ge:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Bl=class extends Mr{};Bl.prototype.isWebGL1Renderer=!0;var Go=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vo=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},kl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let o=0,a=this.stride;o<a;o++)this.array[t+o]=e.array[i+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new z,Wo=class s{constructor(t,e,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),o=ve(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),o=ve(o,this.array),a=ve(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[o+a])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wi=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,or=new z,As=new z,Cs=new z,Ps=new kt,ar=new kt,ad=new Pe,go=new z,lr=new z,_o=new z,Au=new kt,ul=new kt,Cu=new kt,Xi=class extends Ze{constructor(t=new wi){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kl(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Wo(i,3,0,!1)),Ts.setAttribute("uv",new Wo(i,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Cs.z);let i=this.material.rotation,o,a;i!==0&&(a=Math.cos(i),o=Math.sin(i));let h=this.center;vo(go.set(-.5,-.5,0),Cs,h,As,o,a),vo(lr.set(.5,-.5,0),Cs,h,As,o,a),vo(_o.set(.5,.5,0),Cs,h,As,o,a),Au.set(0,0),ul.set(1,0),Cu.set(1,1);let c=t.ray.intersectTriangle(go,lr,_o,!1,or);if(c===null&&(vo(lr.set(-.5,.5,0),Cs,h,As,o,a),ul.set(0,1),c=t.ray.intersectTriangle(go,_o,lr,!1,or),c===null))return;let d=t.ray.origin.distanceTo(or);d<t.near||d>t.far||e.push({distance:d,point:or.clone(),uv:Bi.getInterpolation(or,go,lr,_o,Au,ul,Cu,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function vo(s,t,e,i,o,a){Ps.subVectors(s,e).addScalar(.5).multiply(i),o!==void 0?(ar.x=a*Ps.x-o*Ps.y,ar.y=o*Ps.x+a*Ps.y):ar.copy(Ps),s.copy(t),s.x+=ar.x,s.y+=ar.y,s.applyMatrix4(ad)}var br=class extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pu=new z,Ru=new z,Lu=new Pe,dl=new Si,yo=new Wi,Hl=class extends Ze{constructor(t=new qe,e=new br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let o=1,a=e.count;o<a;o++)Pu.fromBufferAttribute(e,o-1),Ru.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=Pu.distanceTo(Ru);t.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,o=this.matrixWorld,a=t.params.Line.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(o),yo.radius+=a,t.ray.intersectsSphere(yo)===!1)return;Lu.copy(o).invert(),dl.copy(t.ray).applyMatrix4(Lu);let c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=new z,p=new z,_=new z,v=new z,x=this.isLineSegments?2:1,b=i.index,y=i.attributes.position;if(b!==null){let m=Math.max(0,h.start),P=Math.min(b.count,h.start+h.count);for(let E=m,N=P-1;E<N;E+=x){let k=b.getX(E),U=b.getX(E+1);if(f.fromBufferAttribute(y,k),p.fromBufferAttribute(y,U),dl.distanceSqToSegment(f,p,v,_)>d)continue;v.applyMatrix4(this.matrixWorld);let rt=t.ray.origin.distanceTo(v);rt<t.near||rt>t.far||e.push({distance:rt,point:_.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,h.start),P=Math.min(y.count,h.start+h.count);for(let E=m,N=P-1;E<N;E+=x){if(f.fromBufferAttribute(y,E),p.fromBufferAttribute(y,E+1),dl.distanceSqToSegment(f,p,v,_)>d)continue;v.applyMatrix4(this.matrixWorld);let U=t.ray.origin.distanceTo(v);U<t.near||U>t.far||e.push({distance:U,point:_.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=o.length;a<h;a++){let c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}};var Xo=class extends Hl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Zi=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Iu=new Pe,Gl=new Si,xo=new Wi,Mo=new z,Bs=class extends Ze{constructor(t=new qe,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,o=this.matrixWorld,a=t.params.Points.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(o),xo.radius+=a,t.ray.intersectsSphere(xo)===!1)return;Iu.copy(o).invert(),Gl.copy(t.ray).applyMatrix4(Iu);let c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=i.index,_=i.attributes.position;if(f!==null){let v=Math.max(0,h.start),x=Math.min(f.count,h.start+h.count);for(let b=v,S=x;b<S;b++){let y=f.getX(b);Mo.fromBufferAttribute(_,y),Du(Mo,y,d,o,t,e,this)}}else{let v=Math.max(0,h.start),x=Math.min(_.count,h.start+h.count);for(let b=v,S=x;b<S;b++)Mo.fromBufferAttribute(_,b),Du(Mo,b,d,o,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=o.length;a<h;a++){let c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}};function Du(s,t,e,i,o,a,h){let c=Gl.distanceSqToPoint(s);if(c<e){let d=new z;Gl.closestPointToPoint(s,d),d.applyMatrix4(i);let f=o.ray.origin.distanceTo(d);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:d,index:t,face:null,object:h})}}var Sr=class extends gn{constructor(t,e,i,o,a,h,c,d,f){super(t,e,i,o,a,h,c,d,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class s extends qe{constructor(t=.5,e=1,i=32,o=1,a=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:o,thetaStart:a,thetaLength:h},i=Math.max(3,i),o=Math.max(1,o);let c=[],d=[],f=[],p=[],_=t,v=(e-t)/o,x=new z,b=new kt;for(let S=0;S<=o;S++){for(let y=0;y<=i;y++){let m=a+y/i*h;x.x=_*Math.cos(m),x.y=_*Math.sin(m),d.push(x.x,x.y,x.z),f.push(0,0,1),b.x=(x.x/e+1)/2,b.y=(x.y/e+1)/2,p.push(b.x,b.y)}_+=v}for(let S=0;S<o;S++){let y=S*(i+1);for(let m=0;m<i;m++){let P=m+y,E=P,N=P+i+1,k=P+i+2,U=P+1;c.push(E,N,U),c.push(N,k,U)}}this.setIndex(c),this.setAttribute("position",new en(d,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var vn=class s extends qe{constructor(t=1,e=32,i=16,o=0,a=Math.PI*2,h=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:a,thetaStart:h,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let d=Math.min(h+c,Math.PI),f=0,p=[],_=new z,v=new z,x=[],b=[],S=[],y=[];for(let m=0;m<=i;m++){let P=[],E=m/i,N=0;m===0&&h===0?N=.5/e:m===i&&d===Math.PI&&(N=-.5/e);for(let k=0;k<=e;k++){let U=k/e;_.x=-t*Math.cos(o+U*a)*Math.sin(h+E*c),_.y=t*Math.cos(h+E*c),_.z=t*Math.sin(o+U*a)*Math.sin(h+E*c),b.push(_.x,_.y,_.z),v.copy(_).normalize(),S.push(v.x,v.y,v.z),y.push(U+N,1-E),P.push(f++)}p.push(P)}for(let m=0;m<i;m++)for(let P=0;P<e;P++){let E=p[m][P+1],N=p[m][P],k=p[m+1][P],U=p[m+1][P+1];(m!==0||h>0)&&x.push(E,N,U),(m!==i-1||d<Math.PI)&&x.push(N,k,U)}this.setIndex(x),this.setAttribute("position",new en(b,3)),this.setAttribute("normal",new en(S,3)),this.setAttribute("uv",new en(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ei=class extends Xn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function bo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function I0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ks=class{constructor(t,e,i,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,o=e[i],a=e[i-1];n:{t:{let h;e:{i:if(!(t<o)){for(let c=i+2;;){if(o===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=o,o=e[++i],t<o)break t}h=e.length;break e}if(!(t>=a)){let c=e[1];t<c&&(i=2,a=c);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(o=a,a=e[--i-1],t>=a)break t}h=i,i=0;break e}break n}for(;i<h;){let c=i+h>>>1;t<e[c]?h=c:i=c+1}if(o=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=t*o;for(let h=0;h!==o;++h)e[h]=i[a+h];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vl=class extends ks{constructor(t,e,i,o){super(t,e,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,i){let o=this.parameterPositions,a=t-2,h=t+1,c=o[a],d=o[h];if(c===void 0)switch(this.getSettings_().endingStart){case Bh:a=t,c=2*e-i;break;case kh:a=o.length-2,c=e+o[a]-o[a+1];break;default:a=t,c=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Bh:h=t,d=2*i-e;break;case kh:h=1,d=i+o[1]-o[0];break;default:h=t-1,d=e}let f=(i-e)*.5,p=this.valueSize;this._weightPrev=f/(e-c),this._weightNext=f/(d-i),this._offsetPrev=a*p,this._offsetNext=h*p}interpolate_(t,e,i,o){let a=this.resultBuffer,h=this.sampleValues,c=this.valueSize,d=t*c,f=d-c,p=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,b=(i-e)/(o-e),S=b*b,y=S*b,m=-v*y+2*v*S-v*b,P=(1+v)*y+(-1.5-2*v)*S+(-.5+v)*b+1,E=(-1-x)*y+(1.5+x)*S+.5*b,N=x*y-x*S;for(let k=0;k!==c;++k)a[k]=m*h[p+k]+P*h[f+k]+E*h[d+k]+N*h[_+k];return a}},Wl=class extends ks{constructor(t,e,i,o){super(t,e,i,o)}interpolate_(t,e,i,o){let a=this.resultBuffer,h=this.sampleValues,c=this.valueSize,d=t*c,f=d-c,p=(i-e)/(o-e),_=1-p;for(let v=0;v!==c;++v)a[v]=h[f+v]*_+h[d+v]*p;return a}},Xl=class extends ks{constructor(t,e,i,o){super(t,e,i,o)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,i,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bo(e,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:bo(t.times,Array),values:bo(t.values,Array)};let o=t.getInterpolation();o!==t.DefaultInterpolation&&(i.interpolation=o)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wo:e=this.InterpolantFactoryMethodDiscrete;break;case Eo:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,o=e.length;i!==o;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,o=e.length;i!==o;++i)e[i]*=t}return this}trim(t,e){let i=this.times,o=i.length,a=0,h=o-1;for(;a!==o&&i[a]<t;)++a;for(;h!==-1&&i[h]>e;)--h;if(++h,a!==0||h!==o){a>=h&&(h=Math.max(h,1),a=h-1);let c=this.getValueSize();this.times=i.slice(a,h),this.values=this.values.slice(a*c,h*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,o=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let h=null;for(let c=0;c!==a;c++){let d=i[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),t=!1;break}if(h!==null&&h>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,h),t=!1;break}h=d}if(o!==void 0&&I0(o))for(let c=0,d=o.length;c!==d;++c){let f=o[c];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Ga,a=t.length-1,h=1;for(let c=1;c<a;++c){let d=!1,f=t[c],p=t[c+1];if(f!==p&&(c!==1||f!==t[0]))if(o)d=!0;else{let _=c*i,v=_-i,x=_+i;for(let b=0;b!==i;++b){let S=e[_+b];if(S!==e[v+b]||S!==e[x+b]){d=!0;break}}}if(d){if(c!==h){t[h]=t[c];let _=c*i,v=h*i;for(let x=0;x!==i;++x)e[v+x]=e[_+x]}++h}}if(a>0){t[h]=t[a];for(let c=a*i,d=h*i,f=0;f!==i;++f)e[d+f]=e[c+f];++h}return h!==t.length?(this.times=t.slice(0,h),this.values=e.slice(0,h*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,o=new i(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Eo;var Yi=class extends zn{};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=wo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends zn{};Zl.prototype.ValueTypeName="color";var ql=class extends zn{};ql.prototype.ValueTypeName="number";var Yl=class extends ks{constructor(t,e,i,o){super(t,e,i,o)}interpolate_(t,e,i,o){let a=this.resultBuffer,h=this.sampleValues,c=this.valueSize,d=(i-e)/(o-e),f=t*c;for(let p=f+c;f!==p;f+=4)Un.slerpFlat(a,0,h,f-c,h,f,d);return a}},wr=class extends zn{InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.DefaultInterpolation=Eo;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends zn{};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=wo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends zn{};$l.prototype.ValueTypeName="vector";var Nu={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Jl=class{constructor(t,e,i){let o=this,a=!1,h=0,c=0,d,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){c++,a===!1&&o.onStart!==void 0&&o.onStart(p,h,c),a=!0},this.itemEnd=function(p){h++,o.onProgress!==void 0&&o.onProgress(p,h,c),h===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){let _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,v=f.length;_<v;_+=2){let x=f[_],b=f[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return b}return null}}},D0=new Jl,Er=class{constructor(t){this.manager=t!==void 0?t:D0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(o,a){i.load(t,o,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Er.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kl=class extends Er{constructor(t){super(t)}load(t,e,i,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,h=Nu.get(t);if(h!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(h),a.manager.itemEnd(t)},0),h;let c=_r("img");function d(){p(),Nu.add(t,this),e&&e(this),a.manager.itemEnd(t)}function f(_){p(),o&&o(_),a.manager.itemError(t),a.manager.itemEnd(t)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(t),c.src=t,c}};var Zo=class extends Er{constructor(t){super(t)}load(t,e,i,o){let a=new gn,h=new Kl(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(c){a.image=c,a.needsUpdate=!0,e!==void 0&&e(a)},i,o),a}},Tr=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var fl=new Pe,Ou=new z,Uu=new z,qo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fu=new Pe,cr=new z,pl=new z,jl=class extends qo{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,o=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),i.position.copy(cr),pl.copy(i.position),pl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(pl),i.updateMatrixWorld(),o.makeTranslation(-cr.x,-cr.y,-cr.z),Fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}},Ar=class extends Tr{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ql=class extends qo{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yo=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$o=class extends Tr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Jo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zu(){return(typeof performance>"u"?Date:performance).now()}var cc="\\[\\]\\.:\\/",N0=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",O0="[^"+cc.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",hc),F0=/(WCOD+)?/.source.replace("WCOD",O0),z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),k0=new RegExp("^"+U0+F0+z0+B0+"$"),H0=["material","materials","bones","map"],tc=class{constructor(t,e,i){let o=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(N0,"")}static parseTrackName(t){let e=k0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let a=i.nodeName.substring(o+1);H0.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let h=0;h<a.length;h++){let c=a[h];if(c.name===e||c.uuid===e)return c;let d=i(c.children);if(d)return d}return null},o=i(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)t[e++]=i[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,o=e.propertyName,a=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let h=t[o];if(h===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=h,this.propertyIndex=a}else h.fromArray!==void 0&&h.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=h):Array.isArray(h)?(d=this.BindingType.EntireArray,this.resolvedProperty=h):this.propertyName=o;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=tc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oy=new Float32Array(1);var Ko=class{constructor(t,e,i=0,o=1/0){this.ray=new Si(t,e),this.near=i,this.far=o,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ec(t,this,i,e),i.sort(Bu),i}intersectObjects(t,e=!0,i=[]){for(let o=0,a=t.length;o<a;o++)ec(t[o],this,i,e);return i.sort(Bu),i}};function Bu(s,t){return s.distance-t.distance}function ec(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){let o=s.children;for(let a=0,h=o.length;a<h;a++)ec(o[a],t,e,!0)}}var Cr=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);var ld={type:"change"},uc={type:"start"},cd={type:"end"},ea=new Si,hd=new In,V0=Math.cos(70*ji.DEG2RAD),na=class extends Wn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",dt),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",dt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ld),i.update(),a=o.NONE},this.update=function(){let I=new z,ct=new Un().setFromUnitVectors(t.up,new z(0,1,0)),yt=ct.clone().invert(),pt=new z,Dt=new Un,se=new z,le=2*Math.PI;return function(vt=null){let F=i.object.position;I.copy(F).sub(i.target),I.applyQuaternion(ct),c.setFromVector3(I),i.autoRotate&&a===o.NONE&&et(A(vt)),i.enableDamping?(c.theta+=d.theta*i.dampingFactor,c.phi+=d.phi*i.dampingFactor):(c.theta+=d.theta,c.phi+=d.phi);let gt=i.minAzimuthAngle,_t=i.maxAzimuthAngle;isFinite(gt)&&isFinite(_t)&&(gt<-Math.PI?gt+=le:gt>Math.PI&&(gt-=le),_t<-Math.PI?_t+=le:_t>Math.PI&&(_t-=le),gt<=_t?c.theta=Math.max(gt,Math.min(_t,c.theta)):c.theta=c.theta>(gt+_t)/2?Math.max(gt,c.theta):Math.min(_t,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&U||i.object.isOrthographicCamera?c.radius=j(c.radius):c.radius=j(c.radius*f),I.setFromSpherical(c),I.applyQuaternion(yt),F.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Gt=!1;if(i.zoomToCursor&&U){let Ot=null;if(i.object.isPerspectiveCamera){let de=I.length();Ot=j(de*f);let ue=de-Ot;i.object.position.addScaledVector(N,ue),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let de=new z(k.x,k.y,0);de.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),Gt=!0;let ue=new z(k.x,k.y,0);ue.unproject(i.object),i.object.position.sub(ue).add(de),i.object.updateMatrixWorld(),Ot=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ot!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ot).add(i.object.position):(ea.origin.copy(i.object.position),ea.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ea.direction))<V0?t.lookAt(i.target):(hd.setFromNormalAndCoplanarPoint(i.object.up,i.target),ea.intersectPlane(hd,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),Gt=!0);return f=1,U=!1,Gt||pt.distanceToSquared(i.object.position)>h||8*(1-Dt.dot(i.object.quaternion))>h||se.distanceToSquared(i.target)>0?(i.dispatchEvent(ld),pt.copy(i.object.position),Dt.copy(i.object.quaternion),se.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Tt),i.domElement.removeEventListener("pointerdown",Kt),i.domElement.removeEventListener("pointercancel",w),i.domElement.removeEventListener("wheel",ut),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",w),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",dt),i._domElementKeyEvents=null)};let i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,h=1e-6,c=new Cr,d=new Cr,f=1,p=new z,_=new kt,v=new kt,x=new kt,b=new kt,S=new kt,y=new kt,m=new kt,P=new kt,E=new kt,N=new z,k=new kt,U=!1,O=[],rt={};function A(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function R(I){let ct=Math.abs(I)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ct)}function et(I){d.theta-=I}function st(I){d.phi-=I}let Mt=function(){let I=new z;return function(yt,pt){I.setFromMatrixColumn(pt,0),I.multiplyScalar(-yt),p.add(I)}}(),B=function(){let I=new z;return function(yt,pt){i.screenSpacePanning===!0?I.setFromMatrixColumn(pt,1):(I.setFromMatrixColumn(pt,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(yt),p.add(I)}}(),Z=function(){let I=new z;return function(yt,pt){let Dt=i.domElement;if(i.object.isPerspectiveCamera){let se=i.object.position;I.copy(se).sub(i.target);let le=I.length();le*=Math.tan(i.object.fov/2*Math.PI/180),Mt(2*yt*le/Dt.clientHeight,i.object.matrix),B(2*pt*le/Dt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Mt(yt*(i.object.right-i.object.left)/i.object.zoom/Dt.clientWidth,i.object.matrix),B(pt*(i.object.top-i.object.bottom)/i.object.zoom/Dt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?f/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ot(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?f*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(I,ct){if(!i.zoomToCursor)return;U=!0;let yt=i.domElement.getBoundingClientRect(),pt=I-yt.left,Dt=ct-yt.top,se=yt.width,le=yt.height;k.x=pt/se*2-1,k.y=-(Dt/le)*2+1,N.set(k.x,k.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function it(I){_.set(I.clientX,I.clientY)}function at(I){W(I.clientX,I.clientX),m.set(I.clientX,I.clientY)}function mt(I){b.set(I.clientX,I.clientY)}function X(I){v.set(I.clientX,I.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);let ct=i.domElement;et(2*Math.PI*x.x/ct.clientHeight),st(2*Math.PI*x.y/ct.clientHeight),_.copy(v),i.update()}function tt(I){P.set(I.clientX,I.clientY),E.subVectors(P,m),E.y>0?V(R(E.y)):E.y<0&&ot(R(E.y)),m.copy(P),i.update()}function xt(I){S.set(I.clientX,I.clientY),y.subVectors(S,b).multiplyScalar(i.panSpeed),Z(y.x,y.y),b.copy(S),i.update()}function At(I){W(I.clientX,I.clientY),I.deltaY<0?ot(R(I.deltaY)):I.deltaY>0&&V(R(I.deltaY)),i.update()}function Lt(I){let ct=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?st(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),ct=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?st(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),ct=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?et(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),ct=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?et(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),ct=!0;break}ct&&(I.preventDefault(),i.update())}function qt(I){if(O.length===1)_.set(I.pageX,I.pageY);else{let ct=ae(I),yt=.5*(I.pageX+ct.x),pt=.5*(I.pageY+ct.y);_.set(yt,pt)}}function Yt(I){if(O.length===1)b.set(I.pageX,I.pageY);else{let ct=ae(I),yt=.5*(I.pageX+ct.x),pt=.5*(I.pageY+ct.y);b.set(yt,pt)}}function zt(I){let ct=ae(I),yt=I.pageX-ct.x,pt=I.pageY-ct.y,Dt=Math.sqrt(yt*yt+pt*pt);m.set(0,Dt)}function oe(I){i.enableZoom&&zt(I),i.enablePan&&Yt(I)}function q(I){i.enableZoom&&zt(I),i.enableRotate&&qt(I)}function Re(I){if(O.length==1)v.set(I.pageX,I.pageY);else{let yt=ae(I),pt=.5*(I.pageX+yt.x),Dt=.5*(I.pageY+yt.y);v.set(pt,Dt)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);let ct=i.domElement;et(2*Math.PI*x.x/ct.clientHeight),st(2*Math.PI*x.y/ct.clientHeight),_.copy(v)}function Bt(I){if(O.length===1)S.set(I.pageX,I.pageY);else{let ct=ae(I),yt=.5*(I.pageX+ct.x),pt=.5*(I.pageY+ct.y);S.set(yt,pt)}y.subVectors(S,b).multiplyScalar(i.panSpeed),Z(y.x,y.y),b.copy(S)}function Xt(I){let ct=ae(I),yt=I.pageX-ct.x,pt=I.pageY-ct.y,Dt=Math.sqrt(yt*yt+pt*pt);P.set(0,Dt),E.set(0,Math.pow(P.y/m.y,i.zoomSpeed)),V(E.y),m.copy(P);let se=(I.pageX+ct.x)*.5,le=(I.pageY+ct.y)*.5;W(se,le)}function Ct(I){i.enableZoom&&Xt(I),i.enablePan&&Bt(I)}function xe(I){i.enableZoom&&Xt(I),i.enableRotate&&Re(I)}function Kt(I){i.enabled!==!1&&(O.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",w)),Ht(I),I.pointerType==="touch"?Rt(I):Y(I))}function C(I){i.enabled!==!1&&(I.pointerType==="touch"?St(I):ft(I))}function w(I){Qt(I),O.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",w)),i.dispatchEvent(cd),a=o.NONE}function Y(I){let ct;switch(I.button){case 0:ct=i.mouseButtons.LEFT;break;case 1:ct=i.mouseButtons.MIDDLE;break;case 2:ct=i.mouseButtons.RIGHT;break;default:ct=-1}switch(ct){case Ji.DOLLY:if(i.enableZoom===!1)return;at(I),a=o.DOLLY;break;case Ji.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;mt(I),a=o.PAN}else{if(i.enableRotate===!1)return;it(I),a=o.ROTATE}break;case Ji.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;it(I),a=o.ROTATE}else{if(i.enablePan===!1)return;mt(I),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(uc)}function ft(I){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;X(I);break;case o.DOLLY:if(i.enableZoom===!1)return;tt(I);break;case o.PAN:if(i.enablePan===!1)return;xt(I);break}}function ut(I){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(I.preventDefault(),i.dispatchEvent(uc),At(I),i.dispatchEvent(cd))}function dt(I){i.enabled===!1||i.enablePan===!1||Lt(I)}function Rt(I){switch(ht(I),O.length){case 1:switch(i.touches.ONE){case Ki.ROTATE:if(i.enableRotate===!1)return;qt(I),a=o.TOUCH_ROTATE;break;case Ki.PAN:if(i.enablePan===!1)return;Yt(I),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case Ki.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;oe(I),a=o.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;q(I),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(uc)}function St(I){switch(ht(I),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Re(I),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;Bt(I),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ct(I),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(I),i.update();break;default:a=o.NONE}}function Tt(I){i.enabled!==!1&&I.preventDefault()}function Ht(I){O.push(I.pointerId)}function Qt(I){delete rt[I.pointerId];for(let ct=0;ct<O.length;ct++)if(O[ct]==I.pointerId){O.splice(ct,1);return}}function ht(I){let ct=rt[I.pointerId];ct===void 0&&(ct=new kt,rt[I.pointerId]=ct),ct.set(I.pageX,I.pageY)}function ae(I){let ct=I.pointerId===O[0]?O[1]:O[0];return rt[ct]}i.domElement.addEventListener("contextmenu",Tt),i.domElement.addEventListener("pointerdown",Kt),i.domElement.addEventListener("pointercancel",w),i.domElement.addEventListener("wheel",ut,{passive:!1}),this.update()}};var dc={earthquake:16735349,wildfire:16753234,storm:5941503,volcano:11630335,flood:5561855,other:7139512},fc={earthquake:"#ff5c75",wildfire:"#ffa252",storm:"#5aa8ff",volcano:"#b176ff",flood:"#54ddff",other:"#6cf0b8"},Qi=[{id:"sirius",name:"Sirius",subtitle:"The brightest star in Earth's night sky.",distance:"8.6 light-years",type:"A1V main-sequence",temperature:"\u2248 9,940 K",radius:"\u2248 1.7\xD7 Sun",color:"#b9d6ff",threeColor:12179199,position:[12,6,-8],size:.72},{id:"vega",name:"Vega",subtitle:"A bright nearby star and a famous calibration reference.",distance:"25 light-years",type:"A0V main-sequence",temperature:"\u2248 9,600 K",radius:"\u2248 2.4\xD7 Sun",color:"#c7dcff",threeColor:13098239,position:[-15,8,-12],size:.82},{id:"betelgeuse",name:"Betelgeuse",subtitle:"A red supergiant in Orion, visualized at a safe display scale.",distance:"\u2248 548 light-years",type:"Red supergiant",temperature:"\u2248 3,500 K",radius:"Hundreds \xD7 Sun",color:"#ff8b66",threeColor:16747366,position:[18,-8,-18],size:1.35},{id:"proxima",name:"Proxima Centauri",subtitle:"The nearest known star to the Sun.",distance:"4.24 light-years",type:"Red dwarf",temperature:"\u2248 3,040 K",radius:"\u2248 0.15\xD7 Sun",color:"#ff705c",threeColor:16740444,position:[-10,-7,-9],size:.5}],Pr=[{id:"mercury",name:"Mercury",subtitle:"The smallest planet and the closest planet to the Sun.",distance:"0.39 AU",diameter:"4,879 km",year:"88 Earth days",moons:"0",color:"#a9a39a",threeColor:11117466,texture:"./public/textures/mercury.jpg",orbit:2.6,size:.18,speed:.48},{id:"venus",name:"Venus",subtitle:"A rocky world wrapped in a dense atmosphere.",distance:"0.72 AU",diameter:"12,104 km",year:"224.7 Earth days",moons:"0",color:"#d9b36c",threeColor:14267244,texture:"./public/textures/venus.jpg",orbit:3.3,size:.26,speed:.35},{id:"earth",name:"Earth",subtitle:"Our home planet, shown here inside the solar-system overview.",distance:"1.00 AU",diameter:"12,742 km",year:"365.25 days",moons:"1",color:"#5d9dff",threeColor:6135295,texture:"./public/textures/earth-day.jpg",nightTexture:"./public/textures/earth-night.jpg",cloudTexture:"./public/textures/earth-clouds.jpg",orbit:4,size:.28,speed:.3},{id:"mars",name:"Mars",subtitle:"A cold desert world with iron-rich surface material.",distance:"1.52 AU",diameter:"6,779 km",year:"687 Earth days",moons:"2",color:"#d56d4c",threeColor:13987148,texture:"./public/textures/mars.jpg",orbit:4.8,size:.22,speed:.24},{id:"jupiter",name:"Jupiter",subtitle:"The largest planet in the Solar System.",distance:"5.20 AU",diameter:"139,820 km",year:"11.86 Earth years",moons:"Many",color:"#d5b38a",threeColor:14005130,texture:"./public/textures/jupiter.jpg",orbit:6.3,size:.62,speed:.13},{id:"saturn",name:"Saturn",subtitle:"A gas giant famous for its bright ring system.",distance:"9.58 AU",diameter:"116,460 km",year:"29.45 Earth years",moons:"Many",color:"#e3c982",threeColor:14928258,texture:"./public/textures/saturn.jpg",ringTexture:"./public/textures/saturn-ring.png",orbit:8.2,size:.55,speed:.095,rings:!0},{id:"uranus",name:"Uranus",subtitle:"An ice giant with an extreme axial tilt.",distance:"19.2 AU",diameter:"50,724 km",year:"84 Earth years",moons:"Many",color:"#8fd8dc",threeColor:9427164,texture:"./public/textures/uranus.jpg",orbit:10,size:.42,speed:.065},{id:"neptune",name:"Neptune",subtitle:"A distant ice giant with powerful atmospheric winds.",distance:"30.05 AU",diameter:"49,244 km",year:"164.8 Earth years",moons:"Many",color:"#5277e8",threeColor:5404648,texture:"./public/textures/neptune.jpg",orbit:11.7,size:.41,speed:.052}],ts={id:"moon",name:"Moon",subtitle:"Earth's natural satellite, shown with a real mapped surface texture.",distance:"384,400 km from Earth",diameter:"3,474 km",year:"27.3 Earth days",moons:"\u2014",color:"#d7d8db",threeColor:14145755,texture:"./public/textures/moon.jpg",size:.095},Gs=[{id:"milky-way",name:"Milky Way",subtitle:"Our home barred spiral galaxy.",distance:"You are here",diameter:"\u2248 100,000 light-years",stars:"Hundreds of billions",color:"#8fbaff",position:[0,0,-28],scale:10},{id:"andromeda",name:"Andromeda Galaxy",subtitle:"The nearest large galaxy to the Milky Way.",distance:"\u2248 2.5 million light-years",diameter:"\u2248 220,000 light-years",stars:"\u2248 1 trillion",color:"#d5c3ff",position:[34,11,-52],scale:8},{id:"triangulum",name:"Triangulum Galaxy",subtitle:"A spiral galaxy in the Local Group.",distance:"\u2248 2.7 million light-years",diameter:"\u2248 60,000 light-years",stars:"Tens of billions",color:"#87e8ff",position:[-31,-8,-48],scale:5.5}],ud=s=>s===0?"Clear sky":[1,2].includes(s)?"Mostly clear":s===3?"Overcast":[45,48].includes(s)?"Fog":[51,53,55,56,57].includes(s)?"Drizzle":[61,63,65,66,67].includes(s)?"Rain":[71,73,75,77].includes(s)?"Snow":[80,81,82].includes(s)?"Rain showers":[85,86].includes(s)?"Snow showers":[95,96,99].includes(s)?"Thunderstorm":"Weather data";function pc(s){if(!s)return"recent";let t=Date.now()-new Date(s).getTime();if(!Number.isFinite(t))return"recent";let e=Math.max(0,Math.floor(t/6e4));if(e<1)return"now";if(e<60)return`${e}m ago`;let i=Math.floor(e/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function es(s,t,e){return`${Math.abs(s).toFixed(2)}\xB0 ${s>=0?t:e}`}var ia=2.35;function W0(){let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,60);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,.95)"),e.addColorStop(.35,"rgba(145,208,255,.42)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Sr(s)}function X0(){let s=document.createElement("canvas");s.width=1024,s.height=512;let t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#15377d"),e.addColorStop(.55,"#0b2a67"),e.addColorStop(1,"#071838"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.globalAlpha=.92,t.fillStyle="#3a7c57";for(let i=0;i<30;i++){let o=Math.random()*1024,a=Math.random()*512,h=40+Math.random()*100,c=20+Math.random()*55;t.beginPath(),t.ellipse(o,a,h,c,Math.random()*Math.PI,0,Math.PI*2),t.fill()}return new Sr(s)}function Z0(s,t){let e=s?.children?.[1];if(!e)return;let i=6.4+Math.sin(t*1.7)*.28;e.scale.setScalar(i),e.material.opacity=.7+Math.sin(t*1.3)*.08}var sa=class{constructor(t){this.canvas=t,this.mode="earth",this.eventMeshes=[],this.starMeshes=new Map,this.planetNodes=new Map,this.planetMeshes=[],this.galaxyNodes=new Map,this.galaxyMeshes=[],this.solarPaused=!1,this.pointerGesture={down:!1,x:0,y:0,moved:!1},this.textureLoader=new Zo,this.pointer=new kt,this.raycaster=new Ko,this.clock=new Jo,this.tween=null,this.glowTexture=W0();let e=Number(navigator.deviceMemory||8),i=innerWidth<760,o=matchMedia("(prefers-reduced-motion: reduce)").matches;this.performanceTier=i||e<=4?"balanced":"high",this.reducedMotion=o,this.scene=new Vo,this.scene.fog=new Go(132366,.012),this.camera=new Qe(42,innerWidth/innerHeight,.1,400),this.camera.position.set(.8,.35,7.6),this.renderer=new Mr({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.performanceTier==="balanced"?1.35:1.8)),this.renderer.setSize(innerWidth,innerHeight,!1),this.renderer.outputColorSpace=ge,this.renderer.toneMapping=sc,this.renderer.toneMappingExposure=1.08,this.controls=new na(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enablePan=!1,this.controls.minDistance=3.3,this.controls.maxDistance=50,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=this.reducedMotion?0:.28,this.controls.rotateSpeed=.38,this.controls.zoomSpeed=.7,this.buildLights(),this.buildStars(),this.buildGalaxy(),this.buildGalaxyDestinations(),this.buildEarth(),this.buildFeaturedStars(),this.buildSolarSystem(),this.bindEvents(),this.animate()}buildLights(){this.scene.add(new $o(7245520,.42));let t=new Yo(16777215,3.4);t.position.set(-5,3,6),this.scene.add(t);let e=new Ar(5219583,8,28,2);e.position.set(6,-2,-5),this.scene.add(e)}buildStars(){let t=this.performanceTier==="balanced"?1800:4800,e=new Float32Array(t*3),i=new Float32Array(t*3),o=new Vt;for(let c=0;c<t;c++){let d=32+Math.random()*150,f=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);e[c*3]=d*Math.sin(p)*Math.cos(f),e[c*3+1]=d*Math.cos(p),e[c*3+2]=d*Math.sin(p)*Math.sin(f);let _=Math.random();o.set(_>.82?11127551:_>.62?16770242:16777215),i[c*3]=o.r,i[c*3+1]=o.g,i[c*3+2]=o.b}let a=new qe;a.setAttribute("position",new Fe(e,3)),a.setAttribute("color",new Fe(i,3));let h=new Zi({size:.065,vertexColors:!0,transparent:!0,opacity:.92,sizeAttenuation:!0,depthWrite:!1,blending:On});this.starField=new Bs(a,h),this.scene.add(this.starField)}buildGalaxy(){let t=this.performanceTier==="balanced"?1500:4200,e=new Float32Array(t*3),i=new Float32Array(t*3),o=new Vt(5941503),a=new Vt(12089855);for(let d=0;d<t;d++){let f=4+Math.pow(Math.random(),.65)*34,_=d%4*Math.PI/2+f*.34+(Math.random()-.5)*.72;e[d*3]=Math.cos(_)*f,e[d*3+1]=(Math.random()-.5)*(1.1+f*.06),e[d*3+2]=Math.sin(_)*f;let v=o.clone().lerp(a,Math.random());i[d*3]=v.r,i[d*3+1]=v.g,i[d*3+2]=v.b}let h=new qe;h.setAttribute("position",new Fe(e,3)),h.setAttribute("color",new Fe(i,3));let c=new Zi({size:.065,vertexColors:!0,transparent:!0,opacity:.12,depthWrite:!1,blending:On});this.galaxy=new Bs(h,c),this.galaxy.rotation.x=.24,this.scene.add(this.galaxy)}buildGalaxyDestinations(){this.galaxyDestinationGroup=new ze,this.galaxyDestinationGroup.visible=!1,this.scene.add(this.galaxyDestinationGroup),Gs.forEach((t,e)=>{let i=new ze;i.position.set(...t.position),i.userData.galaxyId=t.id;let o=this.performanceTier==="balanced"?500:1100,a=new Float32Array(o*3),h=new Float32Array(o*3),c=new Vt(t.color);for(let _=0;_<o;_++){let v=Math.pow(Math.random(),.58)*t.scale,b=_%3*(Math.PI*2/3)+v*.58+(Math.random()-.5)*.72;a[_*3]=Math.cos(b)*v,a[_*3+1]=(Math.random()-.5)*(t.scale*.12+v*.025),a[_*3+2]=Math.sin(b)*v;let S=c.clone().lerp(new Vt(16777215),Math.random()*.42);h[_*3]=S.r,h[_*3+1]=S.g,h[_*3+2]=S.b}let d=new qe;d.setAttribute("position",new Fe(a,3)),d.setAttribute("color",new Fe(h,3));let f=new Bs(d,new Zi({size:.07,vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1,blending:On}));f.userData.galaxyId=t.id,i.add(f);let p=new Ee(new vn(Math.max(1.2,t.scale*.35),18,12),new _n({transparent:!0,opacity:0,depthWrite:!1}));p.userData.galaxyId=t.id,i.add(p),this.galaxyMeshes.push(p),this.galaxyDestinationGroup.add(i),this.galaxyNodes.set(t.id,{group:i,data:t})})}buildEarth(){this.earthGroup=new ze,this.scene.add(this.earthGroup);let t=new vn(ia,128,96),e=new Ei({map:X0(),shininess:12,specular:new Vt(2706290),emissive:new Vt(16777215),emissiveIntensity:.18});this.earth=new Ee(t,e),this.earthGroup.add(this.earth);let i=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.textureLoader.load("./public/textures/earth-day.jpg",a=>{a.colorSpace=ge,a.anisotropy=i,this.earth.material.map=a,this.earth.material.needsUpdate=!0},void 0,()=>{this.textureLoader.load("./public/earth-blue-marble.jpg",a=>{a.colorSpace=ge,a.anisotropy=i,this.earth.material.map=a,this.earth.material.needsUpdate=!0})}),this.textureLoader.load("./public/textures/earth-night.jpg",a=>{a.colorSpace=ge,a.anisotropy=i,this.earth.material.emissiveMap=a,this.earth.material.emissive=new Vt(16777215),this.earth.material.emissiveIntensity=.42,this.earth.material.needsUpdate=!0},void 0,()=>{}),this.cloudLayer=new Ee(new vn(ia*1.012,112,80),new Ei({color:16777215,transparent:!0,opacity:.42,depthWrite:!1,side:cn})),this.earthGroup.add(this.cloudLayer),this.textureLoader.load("./public/textures/earth-clouds.jpg",a=>{a.colorSpace=ge,a.anisotropy=i,this.cloudLayer.material.map=a,this.cloudLayer.material.alphaMap=a,this.cloudLayer.material.needsUpdate=!0},void 0,()=>{this.cloudLayer.visible=!1});let o=new Ee(new vn(ia*1.045,112,80),new Fn({transparent:!0,side:tn,blending:On,depthWrite:!1,uniforms:{glowColor:{value:new Vt(4958463)},intensity:{value:1}},vertexShader:"varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec3 vNormal; uniform vec3 glowColor; uniform float intensity; void main(){ float a=pow(0.68-dot(vNormal,vec3(0.0,0.0,1.0)),2.25)*intensity; gl_FragColor=vec4(glowColor,a*.62); }"}));this.atmosphere=o,this.earthGroup.add(o),this.markerGroup=new ze,this.earthGroup.add(this.markerGroup)}buildFeaturedStars(){this.featuredGroup=new ze,this.scene.add(this.featuredGroup),Qi.forEach(t=>{let e=new ze;e.position.set(...t.position),e.userData.starId=t.id;let i=new Ee(new vn(t.size,48,32),new _n({color:t.threeColor}));i.userData.starId=t.id,e.add(i);let o=new Xi(new wi({map:this.glowTexture,color:t.threeColor,transparent:!0,opacity:.72,depthWrite:!1,blending:On}));o.scale.setScalar(t.size*5.2),o.userData.starId=t.id,e.add(o);let a=new Ee(new qi(t.size*1.35,t.size*1.48,64),new _n({color:t.threeColor,transparent:!0,opacity:.16,side:cn,depthWrite:!1}));a.rotation.x=Math.PI/2.4,e.add(a),e.visible=!1,this.featuredGroup.add(e),this.starMeshes.set(t.id,e)})}buildSolarSystem(){this.solarGroup=new ze,this.solarGroup.visible=!1,this.scene.add(this.solarGroup);let t=new _n({color:16762975}),e=new Ee(new vn(.82,72,48),t);this.solarGroup.add(e),this.textureLoader.load("./public/textures/sun.jpg",a=>{a.colorSpace=ge,t.map=a,t.needsUpdate=!0},void 0,()=>{});let i=new Xi(new wi({map:this.glowTexture,color:16758861,transparent:!0,opacity:.78,depthWrite:!1,blending:On}));i.scale.setScalar(6.4),this.solarGroup.add(i);let o=new Ar(16768432,13,48,1.35);this.solarGroup.add(o),Pr.forEach((a,h)=>{let c=[];for(let S=0;S<180;S++){let y=S/180*Math.PI*2;c.push(new z(Math.cos(y)*a.orbit,0,Math.sin(y)*a.orbit))}let d=new qe().setFromPoints(c),f=new Xo(d,new br({color:7901887,transparent:!0,opacity:.1}));this.solarGroup.add(f);let p=new ze;p.rotation.y=h*.72+.35,p.userData.baseAngle=p.rotation.y,p.userData.speed=a.speed;let _=new ze;_.position.set(a.orbit,0,0),_.userData.planetId=a.id;let v=new Ei({color:16777215,shininess:a.id==="earth"?22:6,specular:new Vt(a.id==="earth"?4352913:2236962),emissive:new Vt(328965),emissiveIntensity:.05}),x=new Ee(new vn(a.size,56,36),v);if(x.userData.planetId=a.id,_.add(x),this.planetMeshes.push(x),a.texture?this.textureLoader.load(a.texture,S=>{S.colorSpace=ge,S.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),v.map=S,v.needsUpdate=!0},void 0,()=>{v.color.set(a.threeColor)}):v.color.set(a.threeColor),a.id==="earth"){if(a.nightTexture&&this.textureLoader.load(a.nightTexture,N=>{N.colorSpace=ge,v.emissiveMap=N,v.emissive=new Vt(16777215),v.emissiveIntensity=.28,v.needsUpdate=!0},void 0,()=>{}),a.cloudTexture){let N=new Ee(new vn(a.size*1.012,48,32),new Ei({color:16777215,transparent:!0,opacity:.38,depthWrite:!1}));_.add(N),this.textureLoader.load(a.cloudTexture,k=>{k.colorSpace=ge,N.material.map=k,N.material.alphaMap=k,N.material.needsUpdate=!0},void 0,()=>{N.visible=!1})}let S=new Ee(new qi(a.size*2.5,a.size*2.52,64),new _n({color:9873090,transparent:!0,opacity:.16,side:cn,depthWrite:!1}));S.rotation.x=Math.PI/2,_.add(S);let y=new ze;y.userData.baseAngle=1.2,y.userData.speed=.72;let m=new ze;m.position.set(a.size*2.52,0,0),m.userData.planetId="moon";let P=new Ei({color:14079961,shininess:2}),E=new Ee(new vn(ts.size,40,28),P);E.userData.planetId="moon",m.add(E),this.planetMeshes.push(E),this.textureLoader.load(ts.texture,N=>{N.colorSpace=ge,P.map=N,P.needsUpdate=!0},void 0,()=>{}),y.add(m),_.add(y),this.planetNodes.set("moon",{pivot:y,group:m,data:ts})}let b=new Xi(new wi({map:this.glowTexture,color:a.threeColor,transparent:!0,opacity:.2,depthWrite:!1,blending:On}));if(b.scale.setScalar(Math.max(.65,a.size*2.8)),_.add(b),a.rings){let S=new _n({color:16777215,transparent:!0,opacity:.72,side:cn,depthWrite:!1}),y=new Ee(new qi(a.size*1.35,a.size*2.2,96),S);y.rotation.x=Math.PI/2.28,_.add(y),a.ringTexture&&this.textureLoader.load(a.ringTexture,m=>{m.colorSpace=ge,S.map=m,S.alphaMap=m,S.needsUpdate=!0},void 0,()=>{S.color.set(14206883)})}p.add(_),this.solarGroup.add(p),this.planetNodes.set(a.id,{pivot:p,group:_,data:a})})}bindEvents(){addEventListener("resize",()=>this.resize(),{passive:!0}),this.canvas.addEventListener("pointerdown",t=>{this.pointerGesture={down:!0,x:t.clientX,y:t.clientY,moved:!1}},{passive:!0}),this.canvas.addEventListener("pointermove",t=>{if(!this.pointerGesture.down)return;let e=t.clientX-this.pointerGesture.x,i=t.clientY-this.pointerGesture.y;Math.hypot(e,i)>8&&(this.pointerGesture.moved=!0)},{passive:!0}),this.canvas.addEventListener("pointercancel",()=>{this.pointerGesture.down=!1,this.pointerGesture.moved=!1},{passive:!0}),this.canvas.addEventListener("pointerup",t=>{let e=this.pointerGesture.moved;this.pointerGesture.down=!1,this.pointerGesture.moved=!1,e||this.onPointer(t)})}setEvents(t){for(;this.markerGroup.children.length;)this.markerGroup.remove(this.markerGroup.children[0]);this.eventMeshes=[],t.slice(0,160).forEach((e,i)=>{let o=dc[e.type]||dc.other,a=this.latLonToVector3(e.lat,e.lon,ia*1.018),h=new ze;h.position.copy(a),h.lookAt(a.clone().multiplyScalar(2)),h.userData.event=e;let c=e.type==="earthquake"?.032+Math.min(Math.max(e.magnitude||1,1),7)*.007:.055,d=new Ee(new vn(c,14,10),new _n({color:o}));d.userData.event=e,h.add(d);let f=new Ee(new qi(c*1.8,c*2.15,28),new _n({color:o,transparent:!0,opacity:.5,side:cn,depthWrite:!1}));if(f.userData.event=e,f.userData.phase=Math.random()*Math.PI*2,h.add(f),i<55){let p=new Xi(new wi({map:this.glowTexture,color:o,transparent:!0,opacity:.4,depthWrite:!1,blending:On}));p.scale.setScalar(c*7),p.userData.event=e,h.add(p)}this.markerGroup.add(h),this.eventMeshes.push(...h.children)})}setFilteredEventTypes(t){this.markerGroup.children.forEach(e=>{let i=e.userData.event?.type||"other";e.visible=!t||t.has(i)})}setMode(t){this.mode=t;let e=t==="space",i=t==="system";this.controls.autoRotate=!this.reducedMotion&&!e&&!i,this.controls.minDistance=e?1.3:i?1.05:2.46,this.controls.maxDistance=e?90:i?35:15,this.earthGroup.visible=!e&&!i,this.solarGroup.visible=i,this.featuredGroup.children.forEach(o=>o.visible=e),this.galaxyDestinationGroup.visible=e,this.galaxy.material.opacity=e?.72:i?.28:.12,this.starField.material.opacity=e||i?1:.9,this.scene.fog.density=e?.004:i?.006:.012,i?(this.solarPaused=!1,this.animateCamera(new z(0,7.8,18.5),new z(0,0,0),1300)):e?this.animateCamera(new z(0,8,34),new z(0,0,-5),1300):this.animateCamera(new z(.8,.35,7.6),new z(0,0,0),1100)}focusEvent(t){if(!t)return;let e=this.latLonToVector3(t.lat,t.lon,1),i=this.earthGroup.localToWorld(e).normalize();this.animateCamera(i.multiplyScalar(5.7),new z(0,0,0),950)}focusLocation(t,e,i=5.6){let o=this.latLonToVector3(t,e,1),a=this.earthGroup.localToWorld(o).normalize();this.animateCamera(a.multiplyScalar(i),new z(0,0,0),1050)}focusStar(t){let e=Qi.find(c=>c.id===t),i=this.starMeshes.get(t);if(!e||!i)return;let o=i.position.clone(),a=o.clone().normalize(),h=o.clone().add(a.multiplyScalar(e.size*4.6+2.4));h.y+=e.size*.55,this.animateCamera(h,o,1250)}focusGalaxy(t){let e=this.galaxyNodes.get(t);if(!e)return;let i=e.group.position.clone(),o=i.clone().normalize(),a=i.clone().add(o.multiplyScalar(Math.max(7,e.data.scale*1.15)));a.y+=e.data.scale*.15,this.animateCamera(a,i,1450)}focusPlanet(t){let e=this.planetNodes.get(t);if(!e)return;this.solarPaused=!0;let i=new z;e.group.getWorldPosition(i);let o=i.clone().normalize(),a=Math.max(1.45,e.data.size*5.4+1),h=i.clone().add(o.multiplyScalar(a));h.y+=Math.max(.35,e.data.size*1.2),this.animateCamera(h,i,1200)}animateCamera(t,e,i=1e3){this.tween={start:performance.now(),duration:i,fromPos:this.camera.position.clone(),toPos:t.clone(),fromTarget:this.controls.target.clone(),toTarget:e.clone()}}latLonToVector3(t,e,i){let o=ji.degToRad(t),a=ji.degToRad(e);return new z(-i*Math.cos(o)*Math.cos(a),i*Math.sin(o),i*Math.cos(o)*Math.sin(a))}vector3ToLatLon(t){let e=t.length(),i=ji.radToDeg(Math.asin(t.y/e)),o=ji.radToDeg(Math.atan2(t.z,-t.x));return{lat:i,lon:o}}onPointer(t){let e=this.canvas.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.mode==="system"){let a=this.raycaster.intersectObjects(this.planetMeshes,!1)[0]?.object?.userData?.planetId;a&&window.dispatchEvent(new CustomEvent("earthpulse:planet",{detail:{id:a}}));return}if(this.mode==="space"){let a=this.raycaster.intersectObjects(this.galaxyMeshes,!1)[0]?.object?.userData?.galaxyId;if(a){window.dispatchEvent(new CustomEvent("earthpulse:galaxy",{detail:{id:a}}));return}let h=[];this.starMeshes.forEach(f=>h.push(...f.children));let d=this.raycaster.intersectObjects(h,!1)[0]?.object?.userData?.starId;d&&window.dispatchEvent(new CustomEvent("earthpulse:star",{detail:{id:d}}));return}let i=this.raycaster.intersectObjects(this.eventMeshes,!1);if(i.length){let o=i[0].object.userData.event;o&&window.dispatchEvent(new CustomEvent("earthpulse:event",{detail:{event:o}}));return}if(this.mode==="weather"){let o=this.raycaster.intersectObject(this.earth,!1)[0];if(o){let a=this.earth.worldToLocal(o.point.clone()),{lat:h,lon:c}=this.vector3ToLatLon(a);window.dispatchEvent(new CustomEvent("earthpulse:location",{detail:{lat:h,lon:c}}))}}}setTheme(t){let e=t==="light";this.renderer.toneMappingExposure=e?1.22:1.08,this.scene.fog.color.set(e?14543611:132366),this.atmosphere.material.uniforms.glowColor.value.set(e?3900377:4958463),this.earth.material.emissiveIntensity=e?.12:.42}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.performanceTier==="balanced"?1.35:1.8)),this.renderer.setSize(innerWidth,innerHeight,!1)}animate(){requestAnimationFrame(()=>this.animate());let t=this.clock.getElapsedTime();if(this.controls.update(),this.tween){let e=Math.min(1,(performance.now()-this.tween.start)/this.tween.duration),i=1-Math.pow(1-e,3);this.camera.position.lerpVectors(this.tween.fromPos,this.tween.toPos,i),this.controls.target.lerpVectors(this.tween.fromTarget,this.tween.toTarget,i),e>=1&&(this.tween=null)}this.earthGroup.visible&&(this.earthGroup.rotation.y+=28e-5),this.cloudLayer?.visible&&(this.cloudLayer.rotation.y+=9e-5),this.starField.rotation.y+=35e-6,this.galaxy.rotation.y-=6e-5,this.markerGroup.children.forEach((e,i)=>{let o=e.children[1];if(!o)return;let a=Math.sin(t*2.2+(o.userData.phase||i))*.5+.5,h=1+a*.75;o.scale.setScalar(h),o.material.opacity=.12+(1-a)*.42}),this.mode==="system"&&(this.planetNodes.forEach(({pivot:e,group:i},o)=>{let a=this.planetNodes.get(o);this.solarPaused||(e.rotation.y=a.pivot.userData.baseAngle+t*a.pivot.userData.speed*.11);let h=i.children[0];h&&(h.rotation.y+=.003)}),Z0(this.solarGroup,t)),this.mode==="space"&&(this.galaxyDestinationGroup.children.forEach((e,i)=>{e.rotation.y+=3e-4+i*8e-5}),this.featuredGroup.children.forEach((e,i)=>{let o=e.children[1],a=e.children[2],h=1+Math.sin(t*1.4+i)*.08;o.scale.setScalar((Qi[i]?.size||.6)*5.2*h),a.rotation.z+=.0018+i*2e-4})),this.renderer.render(this.scene,this.camera)}};var Vs=Af(fd());var pd="https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi";function q0(s=2){return new Date(Date.now()-s*864e5).toISOString().slice(0,10)}var oa=class{constructor(t,{onSelect:e,onZoom:i}={}){this.container=t,this.onSelect=e,this.onZoom=i,this.selected=null,this.date=q0(2),this.map=Vs.default.map(t,{zoomControl:!1,attributionControl:!0,minZoom:1,maxZoom:13,worldCopyJump:!0,inertia:!0,zoomAnimation:!0,fadeAnimation:!0,markerZoomAnimation:!1}),Vs.default.control.zoom({position:"bottomright"}).addTo(this.map),this.baseLayer=Vs.default.tileLayer.wms(pd,{layers:"BlueMarble_NextGeneration",format:"image/jpeg",transparent:!1,version:"1.1.1",maxZoom:13,attribution:"NASA GIBS"}),this.dailyLayer=Vs.default.tileLayer.wms(pd,{layers:"VIIRS_SNPP_CorrectedReflectance_TrueColor",format:"image/jpeg",transparent:!0,version:"1.1.1",time:this.date,maxZoom:13,opacity:.96,attribution:"NASA EOSDIS GIBS / VIIRS"}),this.baseLayer.addTo(this.map),this.dailyLayer.addTo(this.map),this.crosshair=Vs.default.circleMarker([0,0],{radius:7,weight:2,color:"#79e8ff",fillColor:"#79e8ff",fillOpacity:.25,opacity:0}).addTo(this.map),this.map.on("click",o=>{let{lat:a,lng:h}=o.latlng;this.selected={lat:a,lon:h},this.crosshair.setLatLng([a,h]),this.crosshair.setStyle({opacity:1,fillOpacity:.25}),this.onSelect&&this.onSelect({lat:a,lon:h,zoom:this.map.getZoom()})}),this.map.on("zoomend",()=>{this.onZoom&&this.onZoom(this.map.getZoom())}),this.map.setView([20,0],2)}open({lat:t=20,lon:e=0,zoom:i=2}={}){this.container.classList.add("is-open"),window.setTimeout(()=>{this.map.invalidateSize(),this.map.flyTo([t,e],i,{duration:1.25})},50)}close(){this.container.classList.remove("is-open")}flyTo(t,e,i=6){this.map.invalidateSize(),this.map.flyTo([t,e],i,{duration:1.25})}setLayer(t){t==="base"?this.map.hasLayer(this.dailyLayer)&&this.map.removeLayer(this.dailyLayer):this.map.hasLayer(this.dailyLayer)||this.dailyLayer.addTo(this.map)}getZoom(){return this.map.getZoom()}getSelected(){return this.selected}getDate(){return this.date}};var Y0="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",$0="https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=100",J0="https://api.open-meteo.com/v1/forecast",K0="https://geocoding-api.open-meteo.com/v1/search";async function aa(s,t=12e3){let e=new AbortController,i=setTimeout(()=>e.abort(),t);try{let o=await fetch(s,{signal:e.signal,headers:{Accept:"application/json"},cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()}finally{clearTimeout(i)}}async function j0(){return((await aa(Y0)).features||[]).slice(0,120).map(t=>{let e=t.properties||{},i=t.geometry?.coordinates||[];return{id:`usgs-${t.id}`,source:"USGS",sourceUrl:e.url||"https://earthquake.usgs.gov/",type:"earthquake",title:e.place||"Earthquake",subtitle:e.title||e.place||"USGS earthquake event",lat:Number(i[1]),lon:Number(i[0]),depth:Number(i[2]),magnitude:Number.isFinite(e.mag)?e.mag:null,time:e.time?new Date(e.time).toISOString():null,severity:Number.isFinite(e.mag)?e.mag:1}}).filter(t=>Number.isFinite(t.lat)&&Number.isFinite(t.lon))}function Q0(s){let t=(s.categories||[]).map(e=>e.title).join(" ").toLowerCase();return/wildfire|fire/.test(t)?"wildfire":/severe storm|storm|cyclone/.test(t)?"storm":/volcano/.test(t)?"volcano":/flood/.test(t)?"flood":"other"}async function ty(){return((await aa($0)).events||[]).map(t=>{let e=Array.isArray(t.geometry)?t.geometry[t.geometry.length-1]:null;if(!e||e.type!=="Point"||!Array.isArray(e.coordinates))return null;let[i,o]=e.coordinates,a=Q0(t),h=t.categories?.[0]?.title||"Natural event";return{id:`eonet-${t.id}`,source:"NASA EONET",sourceUrl:t.link||"https://eonet.gsfc.nasa.gov/",type:a,title:t.title||h,subtitle:h,lat:Number(o),lon:Number(i),depth:null,magnitude:null,time:e.date||null,severity:a==="wildfire"?2.2:a==="storm"?2.5:1.8}}).filter(Boolean).filter(t=>Number.isFinite(t.lat)&&Number.isFinite(t.lon))}async function md(){let s=await Promise.allSettled([j0(),ty()]),t=s[0].status==="fulfilled"?s[0].value:[],e=s[1].status==="fulfilled"?s[1].value:[],i=s.filter(o=>o.status==="rejected").map(o=>o.reason?.message||"Data source unavailable");return{events:[...t,...e].sort((o,a)=>new Date(a.time||0)-new Date(o.time||0)),earthquakes:t,natural:e,errors:i}}async function gd(s,t){let e=new URLSearchParams({latitude:Number(s).toFixed(4),longitude:Number(t).toFixed(4),current:"temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,precipitation",timezone:"auto"});return await aa(`${J0}?${e}`)}async function _d(s){let t=new URLSearchParams({name:s,count:"1",language:"en",format:"json"}),i=(await aa(`${K0}?${t}`)).results?.[0];return i?{name:i.name,admin1:i.admin1||"",country:i.country||"",lat:i.latitude,lon:i.longitude}:null}var Nt=s=>document.querySelector(s),fn=s=>[...document.querySelectorAll(s)],pe={mode:"earth",filter:"all",events:[],satelliteOpen:!1,satelliteSelection:null,theme:localStorage.getItem("earthpulse-theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")},nt={body:document.body,canvas:Nt("#spaceCanvas"),boot:Nt("#bootScreen"),toast:Nt("#toast"),theme:Nt("#themeToggle"),share:Nt("#shareButton"),tour:Nt("#tourButton"),searchForm:Nt("#locationSearch"),searchInput:Nt("#searchInput"),quakeCount:Nt("#quakeCount"),fireCount:Nt("#fireCount"),stormCount:Nt("#stormCount"),dataStatus:Nt("#dataStatus"),eventList:Nt("#eventList"),explorer:Nt("#explorerPanel"),detail:Nt("#detailCard"),detailType:Nt("#detailType"),detailTitle:Nt("#detailTitle"),detailSubtitle:Nt("#detailSubtitle"),detailGrid:Nt("#detailGrid"),detailSource:Nt("#detailSource"),weather:Nt("#weatherCard"),weatherPlace:Nt("#weatherPlace"),weatherCondition:Nt("#weatherCondition"),weatherTemp:Nt("#weatherTemp"),weatherStats:Nt("#weatherStats"),weatherCoords:Nt("#weatherCoords"),starCard:Nt("#starCard"),starName:Nt("#starName"),starSubtitle:Nt("#starSubtitle"),starFacts:Nt("#starFacts"),starPicker:Nt("#starPicker"),planetCard:Nt("#planetCard"),planetName:Nt("#planetName"),planetSubtitle:Nt("#planetSubtitle"),planetFacts:Nt("#planetFacts"),planetPicker:Nt("#planetPicker"),galaxyCard:Nt("#galaxyCard"),galaxyName:Nt("#galaxyName"),galaxySubtitle:Nt("#galaxySubtitle"),galaxyFacts:Nt("#galaxyFacts"),galaxyPicker:Nt("#galaxyPicker"),satelliteButton:Nt("#satelliteButton"),satelliteShell:Nt("#satelliteShell"),satelliteMap:Nt("#satelliteMap"),satelliteClose:Nt("#satelliteClose"),satelliteSelection:Nt("#satelliteSelection"),satelliteCoords:Nt("#satelliteCoords"),satelliteWeather:Nt("#satelliteWeather"),satelliteGlobe:Nt("#satelliteGlobe"),satelliteDate:Nt("#satelliteDate"),mobileEventCount:Nt("#mobileEventCount"),hintText:Nt("#hintText")},yn=new sa(nt.canvas),Rr=new oa(nt.satelliteMap,{onSelect:({lat:s,lon:t,zoom:e})=>{pe.satelliteSelection={lat:s,lon:t,zoom:e},nt.satelliteCoords.textContent=`${es(s,"N","S")} \xB7 ${es(t,"E","W")}`,nt.satelliteSelection.classList.add("visible"),nt.satelliteSelection.setAttribute("aria-hidden","false")}});nt.satelliteDate&&(nt.satelliteDate.textContent=`VIIRS \xB7 ${Rr.getDate()}`);window.__earthpulseStarted=!0;var la=0;function ey(s=20,t=0,e=2){ua(),pe.satelliteOpen=!0,nt.body.classList.add("satellite-open"),nt.satelliteShell.setAttribute("aria-hidden","false"),nt.satelliteSelection.classList.remove("visible"),nt.satelliteSelection.setAttribute("aria-hidden","true"),Rr.open({lat:s,lon:t,zoom:e})}function ha(){pe.satelliteOpen=!1,nt.body.classList.remove("satellite-open"),nt.satelliteShell.setAttribute("aria-hidden","true"),Rr.close()}function nn(s,t=2600){nt.toast.textContent=s,nt.toast.classList.add("visible"),clearTimeout(nn.timer),nn.timer=setTimeout(()=>nt.toast.classList.remove("visible"),t)}async function ny(){let s={title:"EarthPulse 3D \u2014 Suhail Labs",text:"Explore live Earth events, weather, the Solar System and an interactive galaxy in EarthPulse 3D.",url:"https://suhail-earthpulse-3d.onrender.com"};try{if(navigator.share){await navigator.share(s);return}await navigator.clipboard.writeText(s.url),nn("EarthPulse link copied.")}catch(t){if(t?.name!=="AbortError")try{await navigator.clipboard.writeText(s.url),nn("EarthPulse link copied.")}catch{nn("Share is unavailable in this browser.")}}}function ua(s=!1){la+=1,nt.tour&&(nt.tour.innerHTML='<span class="spark">\u25B6</span> Cinematic tour'),s&&nn("Cinematic tour stopped.")}var vd=s=>new Promise(t=>setTimeout(t,s));async function iy(){let s=++la;nt.tour&&(nt.tour.innerHTML='<span class="spark">\u25A0</span> Stop tour');let t=()=>s===la,e=async o=>(await vd(o),t());if(Tn("earth"),nn("Cinematic tour started."),!await e(1400))return;let i=pe.events.find(o=>o.type==="earthquake"&&Number(o.magnitude)>=4)||pe.events[0];i&&(Tn("events"),await vd(450),!t()||(_c(i),!await e(2800)))||(Tn("system"),await e(1450)&&(yc("saturn"),await e(3e3)&&(Tn("space"),await e(1500)&&(da("andromeda"),await e(2200)&&(ca("sirius"),await e(2700)&&(ca("betelgeuse"),await e(2700)&&(Tn("earth"),t()&&(la+=1,nt.tour&&(nt.tour.innerHTML='<span class="spark">\u25B6</span> Cinematic tour'),nn("Tour complete \u2014 explore freely.")))))))))}function xd(s){pe.theme=s,nt.body.dataset.theme=s,yn.setTheme(s),localStorage.setItem("earthpulse-theme",s)}function Tn(s){pe.satelliteOpen&&ha(),pe.mode=s,nt.body.dataset.mode=s,fn(".mode-btn").forEach(t=>t.classList.toggle("active",t.dataset.mode===s)),yn.setMode(s),nt.detail.classList.remove("visible"),nt.detail.setAttribute("aria-hidden","true"),nt.weather.classList.remove("visible"),nt.weather.setAttribute("aria-hidden","true"),nt.starCard.classList.remove("visible"),nt.starCard.setAttribute("aria-hidden","true"),nt.planetCard?.classList.remove("visible"),nt.planetCard?.setAttribute("aria-hidden","true"),nt.galaxyCard?.classList.remove("visible"),nt.galaxyCard?.setAttribute("aria-hidden","true"),s==="earth"&&(nt.hintText.textContent="Drag to orbit \xB7 pinch to zoom \xB7 open Satellite for surface detail"),s==="events"&&(nt.hintText.textContent="Select a marker or event card to inspect it"),s==="weather"&&(nt.hintText.textContent="Tap anywhere on Earth for live local weather",nn("Weather mode: tap the globe or search a place.")),s==="system"&&(nt.hintText.textContent="Select a planet to fly in for a close-up",Sd()),s==="space"&&(Md(),bd(),setTimeout(()=>da(Gs[0].id),600))}function yd(){let s=pe.events.filter(i=>i.type==="earthquake").length,t=pe.events.filter(i=>i.type==="wildfire").length,e=pe.events.filter(i=>i.type==="storm").length;nt.quakeCount.textContent=s.toLocaleString(),nt.fireCount.textContent=t.toLocaleString(),nt.stormCount.textContent=e.toLocaleString(),nt.mobileEventCount.textContent=pe.events.length.toLocaleString()}function sy(){return pe.filter==="all"?pe.events:pe.events.filter(s=>s.type===pe.filter)}function mc(){let s=sy().slice(0,70);if(!s.length){nt.eventList.innerHTML='<div class="empty-state">No current events were returned for this filter. EarthPulse never invents live events.</div>';return}nt.eventList.innerHTML=s.map(t=>{let e=t.type==="earthquake"&&t.magnitude!=null?`M${Number(t.magnitude).toFixed(1)} \xB7 `:"";return`<button class="event-card" type="button" data-event-id="${t.id}">
      <span class="event-dot ${t.type}"></span>
      <span><strong>${gc(t.title)}</strong><small>${e}${gc(t.subtitle||t.source)}</small></span>
      <time>${pc(t.time)}</time>
    </button>`}).join(""),fn(".event-card").forEach(t=>t.addEventListener("click",()=>{let e=pe.events.find(i=>i.id===t.dataset.eventId);e&&_c(e)}))}function _c(s){yn.focusEvent(s);let t=s.type==="earthquake"?"EARTHQUAKE \xB7 USGS":`${s.type.toUpperCase()} \xB7 ${s.source}`;nt.detailType.textContent=t,nt.detailType.style.color=fc[s.type]||fc.other,nt.detailTitle.textContent=s.title,nt.detailSubtitle.textContent=s.subtitle||"Live natural event";let e=s.magnitude!=null?Number(s.magnitude).toFixed(1):"\u2014",i=s.depth!=null?`${Number(s.depth).toFixed(1)} km`:"\u2014";nt.detailGrid.innerHTML=`
    <div><small>MAGNITUDE</small><strong>${e}</strong></div>
    <div><small>DEPTH</small><strong>${i}</strong></div>
    <div><small>UPDATED</small><strong>${pc(s.time)}</strong></div>
    <div><small>LATITUDE</small><strong>${es(s.lat,"N","S")}</strong></div>
    <div><small>LONGITUDE</small><strong>${es(s.lon,"E","W")}</strong></div>
    <div><small>SOURCE</small><strong>${gc(s.source)}</strong></div>`,nt.detailSource.href=s.sourceUrl||"#",nt.detail.classList.add("visible"),nt.detail.setAttribute("aria-hidden","false")}async function vc(s,t,e="Selected location"){nt.weather.classList.add("visible"),nt.weather.setAttribute("aria-hidden","false"),nt.weatherPlace.textContent=e,nt.weatherCondition.textContent="Loading current conditions\u2026",nt.weatherTemp.textContent="\u2014\xB0",nt.weatherStats.innerHTML="<div><small>STATUS</small><strong>SYNCING</strong></div>",nt.weatherCoords.textContent=`${es(s,"N","S")} \xB7 ${es(t,"E","W")}`;try{let o=(await gd(s,t)).current||{};nt.weatherCondition.textContent=ud(o.weather_code),nt.weatherTemp.textContent=Number.isFinite(o.temperature_2m)?`${Math.round(o.temperature_2m)}\xB0`:"\u2014\xB0",nt.weatherStats.innerHTML=`
      <div><small>FEELS LIKE</small><strong>${Number.isFinite(o.apparent_temperature)?Math.round(o.apparent_temperature)+"\xB0":"\u2014"}</strong></div>
      <div><small>WIND</small><strong>${Number.isFinite(o.wind_speed_10m)?Math.round(o.wind_speed_10m)+" km/h":"\u2014"}</strong></div>
      <div><small>HUMIDITY</small><strong>${Number.isFinite(o.relative_humidity_2m)?Math.round(o.relative_humidity_2m)+"%":"\u2014"}</strong></div>`}catch{nt.weatherCondition.textContent="Weather source is temporarily unavailable.",nt.weatherStats.innerHTML="<div><small>STATUS</small><strong>UNAVAILABLE</strong></div>"}}function Md(){nt.galaxyPicker&&(nt.galaxyPicker.innerHTML=Gs.map(s=>`<button class="galaxy-pick" type="button" data-galaxy-id="${s.id}" style="--galaxy-color:${s.color}"><span><i></i><strong>${s.name}</strong></span><small>${s.distance}</small></button>`).join(""),fn(".galaxy-pick").forEach(s=>s.addEventListener("click",()=>da(s.dataset.galaxyId))))}function da(s){let t=Gs.find(e=>e.id===s);!t||!nt.galaxyCard||(yn.focusGalaxy(s),fn(".galaxy-pick").forEach(e=>e.classList.toggle("active",e.dataset.galaxyId===s)),nt.galaxyName.textContent=t.name,nt.galaxySubtitle.textContent=t.subtitle,nt.galaxyFacts.innerHTML=`
    <div><small>DISTANCE</small><strong>${t.distance}</strong></div>
    <div><small>DIAMETER</small><strong>${t.diameter}</strong></div>
    <div><small>STARS</small><strong>${t.stars}</strong></div>`,nt.galaxyCard.classList.add("visible"),nt.galaxyCard.setAttribute("aria-hidden","false"))}function bd(){nt.starPicker.innerHTML=Qi.map(s=>`<button class="star-pick" type="button" data-star-id="${s.id}" style="--star-color:${s.color}"><span><i></i><strong>${s.name}</strong></span><small>${s.distance}</small></button>`).join(""),fn(".star-pick").forEach(s=>s.addEventListener("click",()=>ca(s.dataset.starId)))}function ca(s){let t=Qi.find(e=>e.id===s);t&&(yn.focusStar(s),fn(".star-pick").forEach(e=>e.classList.toggle("active",e.dataset.starId===s)),nt.starName.textContent=t.name,nt.starSubtitle.textContent=t.subtitle,nt.starFacts.innerHTML=`
    <div><small>DISTANCE</small><strong>${t.distance}</strong></div>
    <div><small>TYPE</small><strong>${t.type}</strong></div>
    <div><small>TEMPERATURE</small><strong>${t.temperature}</strong></div>
    <div><small>DISPLAY RADIUS</small><strong>${t.radius}</strong></div>`,nt.starCard.classList.add("visible"),nt.starCard.setAttribute("aria-hidden","false"))}function Sd(){if(!nt.planetPicker)return;let s=[];Pr.forEach(t=>{s.push(t),t.id==="earth"&&s.push(ts)}),nt.planetPicker.innerHTML=s.map(t=>`<button class="planet-pick" type="button" data-planet-id="${t.id}" style="--planet-color:${t.color}"><span><i></i><strong>${t.name}</strong></span><small>${t.distance}</small></button>`).join(""),fn(".planet-pick").forEach(t=>t.addEventListener("click",()=>yc(t.dataset.planetId)))}function yc(s){let t=Pr.find(i=>i.id===s)||(s==="moon"?ts:null);if(!t||!nt.planetCard)return;yn.focusPlanet(s),fn(".planet-pick").forEach(i=>i.classList.toggle("active",i.dataset.planetId===s)),nt.planetName.textContent=t.name,nt.planetSubtitle.textContent=t.subtitle;let e=t.id==="moon"?"FROM EARTH":"FROM SUN";nt.planetFacts.innerHTML=`
    <div><small>${e}</small><strong>${t.distance}</strong></div>
    <div><small>DIAMETER</small><strong>${t.diameter}</strong></div>
    <div><small>ORBITAL PERIOD</small><strong>${t.year}</strong></div>
    <div><small>MOONS</small><strong>${t.moons}</strong></div>`,nt.planetCard.classList.add("visible"),nt.planetCard.setAttribute("aria-hidden","false")}function gc(s=""){return String(s).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}async function wd(){nt.dataStatus.textContent="SYNCING";try{let s=await md();pe.events=s.events,yn.setEvents(pe.events),yd(),mc(),s.errors.length&&pe.events.length?(nt.dataStatus.textContent="PARTIAL",nn("One live source is temporarily unavailable; available feeds are still shown.")):pe.events.length?nt.dataStatus.textContent="LIVE":(nt.dataStatus.textContent="NO FEED",nn("Live sources returned no usable events. No demo events were substituted."))}catch{pe.events=[],yn.setEvents([]),yd(),mc(),nt.dataStatus.textContent="OFFLINE",nn("Live data could not be reached. The 3D explorer is still available.")}}fn(".mode-btn").forEach(s=>s.addEventListener("click",()=>{ua(),Tn(s.dataset.mode)}));fn("[data-mode-target]").forEach(s=>s.addEventListener("click",()=>{ua(),Tn(s.dataset.modeTarget)}));fn(".filter-chip").forEach(s=>s.addEventListener("click",()=>{pe.filter=s.dataset.filter,fn(".filter-chip").forEach(t=>t.classList.toggle("active",t===s)),pe.filter==="all"?yn.setFilteredEventTypes(null):yn.setFilteredEventTypes(new Set([pe.filter])),mc()}));nt.theme.addEventListener("click",()=>xd(pe.theme==="dark"?"light":"dark"));nt.share?.addEventListener("click",ny);nt.satelliteButton?.addEventListener("click",()=>ey());nt.satelliteClose?.addEventListener("click",()=>ha());nt.satelliteGlobe?.addEventListener("click",()=>{let s=pe.satelliteSelection;ha(),Tn("earth"),s&&yn.focusLocation(s.lat,s.lon,4.4)});nt.satelliteWeather?.addEventListener("click",async()=>{let s=pe.satelliteSelection;s&&(ha(),Tn("weather"),yn.focusLocation(s.lat,s.lon,4.8),await vc(s.lat,s.lon,"Satellite selection"))});fn(".sat-layer").forEach(s=>s.addEventListener("click",()=>{fn(".sat-layer").forEach(t=>t.classList.toggle("active",t===s)),Rr.setLayer(s.dataset.satLayer)}));nt.tour?.addEventListener("click",()=>{nt.tour.textContent.includes("Stop")?ua(!0):iy()});Nt("#panelClose").addEventListener("click",()=>Tn("earth"));Nt("#detailClose").addEventListener("click",()=>nt.detail.classList.remove("visible"));Nt("#weatherClose").addEventListener("click",()=>nt.weather.classList.remove("visible"));Nt("#starClose").addEventListener("click",()=>nt.starCard.classList.remove("visible"));Nt("#galaxyClose")?.addEventListener("click",()=>nt.galaxyCard?.classList.remove("visible"));Nt("#planetClose")?.addEventListener("click",()=>nt.planetCard?.classList.remove("visible"));nt.searchForm.addEventListener("submit",async s=>{s.preventDefault();let t=nt.searchInput.value.trim();if(!t)return;let e=nt.searchInput.value;nt.searchInput.value="Searching\u2026",nt.searchInput.disabled=!0;try{let i=await _d(t);if(!i){nn(`No location found for \u201C${t}\u201D.`);return}let o=[i.name,i.admin1,i.country].filter(Boolean).join(", ");pe.satelliteOpen?(Rr.flyTo(i.lat,i.lon,7),nn(`Satellite view: ${o}`)):((pe.mode==="space"||pe.mode==="system")&&Tn("earth"),yn.focusLocation(i.lat,i.lon),pe.mode==="weather"?await vc(i.lat,i.lon,o):nn(`Flying to ${o}`))}catch{nn("Location search is temporarily unavailable.")}finally{nt.searchInput.disabled=!1,nt.searchInput.value=e,nt.searchInput.focus()}});window.addEventListener("earthpulse:event",s=>_c(s.detail.event));window.addEventListener("earthpulse:location",s=>vc(s.detail.lat,s.detail.lon));window.addEventListener("earthpulse:star",s=>ca(s.detail.id));window.addEventListener("earthpulse:planet",s=>yc(s.detail.id));window.addEventListener("earthpulse:galaxy",s=>da(s.detail.id));xd(pe.theme);Tn("earth");Md();bd();Sd();wd();setTimeout(()=>nt.boot.classList.add("done"),1250);setInterval(wd,10*60*1e3);})();
