(function(e){function o(o){for(var n,v,i=o[0],u=o[1],c=o[2],f=0,p=[];f<i.length;f++)v=i[f],Object.prototype.hasOwnProperty.call(r,v)&&r[v]&&p.push(r[v][0]),r[v]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(o);while(p.length)p.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,o=0;o<l.length;o++){for(var t=l[o],n=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(n=!1)}n&&(l.splice(o--,1),e=v(v.s=t[0]))}return e}var n={},r={index:0},l=[];function v(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,v),t.l=!0,t.exports}v.m=e,v.c=n,v.d=function(e,o,t){v.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},v.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.t=function(e,o){if(1&o&&(e=v(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(v.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)v.d(t,n,function(o){return e[o]}.bind(null,n));return t},v.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return v.d(o,"a",o),o},v.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},v.p="/heart_plus/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=o,i=i.slice();for(var c=0;c<i.length;c++)o(i[c]);var s=u;l.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"034f":function(e,o,t){"use strict";var n=t("85ec"),r=t.n(n);r.a},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("Home")],1)},l=[],v=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e.love>=1e4?t("h1",[e._v(" CONGRATULATION! ")]):e._e(),e.love>=1e12?t("h1",[e._v(" Now, go get a life and stop develop this stupid bot dude -_- ")]):e._e(),1==e.love?t("p",[e._v(" You sent love to "+e._s(e.love)+" person! ")]):e._e(),6969==e.love?t("p",[e._v(" You sent love to "+e._s(e.love)+" people! "),t("br"),e._v(" Grrrrrrrr! ")]):e.love>1?t("p",[e._v(" You sent love to "+e._s(e.love)+" people! ")]):0==e.love?t("p",[e._v(" Give some love ")]):e._e(),t("button",{on:{click:function(o){return e.give_loves()}}},[e._v(" Love ")]),t("br"),t("br"),e.love>=100?t("button",{on:{click:function(o){return e.give_loves_v2()}}},[e._v(" More love ")]):e._e(),t("br"),t("br"),e.love>=500?t("button",{on:{click:function(o){return e.give_loves_v3()}}},[e._v(" More more love ")]):e._e(),t("br"),t("br"),e.love>=1e3?t("button",{on:{click:function(o){return e.give_loves_v4()}}},[e._v(" More more more love ")]):e._e(),t("br"),t("br"),e.love>=5e3?t("button",{on:{click:function(o){return e.give_loves_v5()}}},[e._v(" LOVE FOR EVERYONE ")]):e._e()])},i=[],u={name:"Home",data:function(){return{love:0}},methods:{give_loves:function(){this.love++},give_loves_v2:function(){this.love=this.love+5},give_loves_v3:function(){this.love=this.love+10},give_loves_v4:function(){this.love=this.love+50},give_loves_v5:function(){this.love=this.love+100}}},c=u,s=(t("8b71"),t("2877")),f=Object(s["a"])(c,v,i,!1,null,null,null),p=f.exports,a={name:"App",components:{Home:p}},_=a,b=(t("034f"),Object(s["a"])(_,r,l,!1,null,null,null)),d=b.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,o,t){},"88d7":function(e,o,t){},"8b71":function(e,o,t){"use strict";var n=t("88d7"),r=t.n(n);r.a}});
//# sourceMappingURL=index.3bad5c2e.js.map