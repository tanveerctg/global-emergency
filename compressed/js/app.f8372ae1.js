(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1752:function(e,t,n){e.exports=n.p+"img/mail.c54a0cb5.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero"},[r("div",{staticClass:"navbar"},[r("img",{staticClass:"logo",attrs:{src:n("f295")}}),r("a",{attrs:{href:"mailto:info@globalemergencypreparedness.org"}},[r("img",{staticClass:"mail",attrs:{src:n("1752")}})])]),r("p",{staticClass:"about"},[e._v("We are building a network of companies and work with those committed to "),r("strong",[e._v("emergency preparation and emergency energy resources")]),e._v(" before, during, and in the aftermath of "),r("strong",[e._v("natural disasters and public health emergencies.")])]),r("img",{staticClass:"world",attrs:{src:n("bda7")}}),r("p",{staticClass:"slogan"},[r("span",{staticClass:"sloganContainer"},[e._v("We are designing the future of "),r("span",{staticClass:"emergency"},[e._v("emergency")])])]),r("div",{staticClass:"layer"})])}],i=n("cffa"),s={name:"App",components:{},mounted:function(){var e=i["a"].timeline({defaults:{ease:"power1.out"}});e.to(".slogan .sloganContainer",{y:"0%",duration:1,stagger:.25}),e.fromTo("img",{opacity:0},{opacity:1,duration:1}),e.fromTo(".about",{opacity:0},{opacity:1,duration:1},"-=1")}},c=s,u=(n("034f"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null),p=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){},bda7:function(e,t,n){e.exports=n.p+"img/compressedWorld.149ddae4.gif"},f295:function(e,t,n){e.exports=n.p+"img/logo-white.656b0554.svg"}});
//# sourceMappingURL=app.f8372ae1.js.map