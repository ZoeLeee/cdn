(()=>{"use strict";var e,t,a,n={65492:(e,t,a)=>{a.d(t,{KT:()=>_,P2:()=>M,YZ:()=>C,aP:()=>x,le:()=>L,s1:()=>S,yD:()=>j,yk:()=>E});var n=a(20246),r=a.n(n),o=a(39831),i=a.n(o),l=a(61799),c=a.n(l),s=a(26117),d=a.n(s),u=a(5996),p=a.n(u),f=a(20658),y=a.n(f),v=a(3434),h=a.n(v),b=a(97828),m=a.n(b),g=a(93213),w=a(6475),O=a(29115);function k(e,t){var a=r()(e);if(i()){var n=i()(e);t&&(n=c()(n).call(n,(function(t){return d()(e,t).enumerable}))),a.push.apply(a,n)}return a}async function j({name:e,pic_key:t,jsonData:a,resources:n,projectId:r}){return await(0,O.qu)(w.yy.upload,{name:e,pic_key:t,json_data:a,resources:n,status:1,project_id:r,project_type:"3d"})}async function E(e,t){const a=await(0,O.ZL)(w.yy.list,{params:{projectId:e,name:t}});return a.code===O.Mx.Ok?a.data:null}async function _(e){const t=await(0,O.pz)(w.yy.update,function(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?p()(a=k(Object(r),!0)).call(a,(function(t){(0,g.Z)(e,t,r[t])})):y()?h()(e,y()(r)):p()(n=k(Object(r))).call(n,(function(t){m()(e,t,d()(r,t))}))}return e}({},e));return t}async function x(e,t){const a=await t();return(await(0,O.qu)(w.yy.pic,{id:e,data:a})).code!==O.Mx.Ok}async function L(e){const t=await(0,O.ZL)(w.yy.detail+"/"+e);return t.code===O.Mx.Ok?t.data?.info?.json_data:null}async function S(e){const t=await(0,O.ZL)(w.yy.detail2+"/"+e);return t.code===O.Mx.Ok?t.data?.info?.json_data:null}async function C(e){const t=await(0,O.ZL)(w.yy.detail+"/"+e);return t.code===O.Mx.Ok?t.data?.info:null}async function M(e){return(await(0,O.QO)(w.yy.delete,{data:{id:e}})).code===O.Mx.Ok}},6475:(e,t,a)=>{let n;a.d(t,{U:()=>i,ZQ:()=>l,au:()=>r,fL:()=>n,yy:()=>o}),function(e){e.Model="models",e.Component="components",e.Files="files",e.GlobalVariables="globalVariables",e.Particles="particles"}(n||(n={}));const r={create:"/editor/file/upload",list:"/editor/file/private/list",update:"/editor/file/edit",delete:"/editor/file/delete",pic:"/editor/file/upload/pic",detail:"/editor/file/detail",detail2:"/editor/file/detail/id/",publicList:"/editor/file/public/list"},o={upload:"/editor/app/upload",list:"/editor/app/list",prefix:"/editor/file/prefix",update:"/editor/app/edit",pic:"/editor/app/upload/pic",detail:"/editor/app/detail",detail2:"/editor/app/detail/uuid/",delete:"/editor/app/delete",preview:"/editor/app/set/preview",cancelPreview:"/editor/app/cancel/preview",copy:"/editor/app/copy",share:"/editor/app/share",checkShare:"/editor/app/share/check"},i={list:"/editor/project/list",detail:"/editor/project/detail/",edit:"/editor/project/edit"},l={category:"/portal/market/category",list:"/portal/market/listEx",detail:"/portal/market/detail",detailEx:"/portal/market/detailEx",buy:"/trade/buy",buyList:"/trade/boughten/list",trade:"/portal/market/trade",pull:"/editor/opus/pull",preview:"/editor/opus/preview/",collections:"/editor/appcollection/list",collect:"/editor/appcollection/edit",cancelCollect:"/editor/appcollection/delete/",isBuy:"/trade/bought"}},54056:(e,t,a)=>{a.d(t,{$_:()=>s,Xf:()=>c,gV:()=>l});var n=a(57055),r=a(31025),o=a(6475),i=a(29115);const l=(0,r.LO)({intance:null,prefix:""}),c=(0,r.aD)((e=>{l.intance=e})),s=(0,r.aD)((async()=>{if(l.prefix)return;const e=await(0,i.ZL)(o.yy.prefix);e.code===i.Mx.Ok&&(l.prefix=e.data.prefix,n.AppConfig.assetURL=e.data.prefix)}))},10426:(e,t,a)=>{var n=a(20246),r=a.n(n),o=a(39831),i=a.n(o),l=a(61799),c=a.n(l),s=a(26117),d=a.n(s),u=a(5996),p=a.n(u),f=a(20658),y=a.n(f),v=a(3434),h=a.n(v),b=a(97828),m=a.n(b),g=a(93213),w=a(6488),O=a.n(w),k=a(29405),j=a.n(k),E=a(13567),_=a.n(E),x=(a(69326),a(29556),a(49142),a(57055)),L=a(32735),S=a(44645),C=a(6475),M=a(65492),Z=a(54056),I=a(27660),N=a(29115),A=a(12117);a(19853);function T(e,t){var a=r()(e);if(i()){var n=i()(e);t&&(n=c()(n).call(n,(function(t){return d()(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?p()(a=T(Object(r),!0)).call(a,(function(t){(0,g.Z)(e,t,r[t])})):y()?h()(e,y()(r)):p()(n=T(Object(r))).call(n,(function(t){m()(e,t,d()(r,t))}))}return e}var R=a(94063),P=a(97198),V=a(83228),F=a(3864),Q=a(44874),U=a(73554);function z(e,t){var a=r()(e);if(i()){var n=i()(e);t&&(n=c()(n).call(n,(function(t){return d()(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?p()(a=z(Object(r),!0)).call(a,(function(t){(0,g.Z)(e,t,r[t])})):y()?h()(e,y()(r)):p()(n=z(Object(r))).call(n,(function(t){m()(e,t,d()(r,t))}))}return e}const G={vertical:"top",horizontal:"center"},J=e=>{const{enqueueSnackbar:t,closeSnackbar:a}=(0,Q.Ds)();return(0,L.useEffect)((()=>{U.y.info=(e,a={})=>{U.Q.add(a.key),t(e,B({variant:"info",anchorOrigin:G},a))},U.y.warn=(e,a={})=>{U.Q.add(a.key),t(e,B({variant:"warning",anchorOrigin:G},a))},U.y.success=(e,a={})=>{U.Q.add(a.key),t(e,B({variant:"success",anchorOrigin:G},a))},U.y.error=(e,a={})=>{U.Q.add(a.key),t(e,B({variant:"error",anchorOrigin:G},a))},U.y.close=e=>{U.Q.delete(e),a(e)}}),[]),L.createElement(L.Fragment,null)};function $(e,t){var a=r()(e);if(i()){var n=i()(e);t&&(n=c()(n).call(n,(function(t){return d()(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?p()(a=$(Object(r),!0)).call(a,(function(t){(0,g.Z)(e,t,r[t])})):y()?h()(e,y()(r)):p()(n=$(Object(r))).call(n,(function(t){m()(e,t,d()(r,t))}))}return e}let H,K;window.IGNORE_INVAILID_TOKEN=!0,(0,F.Z)(),x.AppConfig.assetURL="https://objectmem.histron.cn/",x.AppConfig.Texture_URL="https://am-img.gkiiot.com/editor/",x.AppConfig.SkyBox_URL="https://am-img.gkiiot.com/editor/";const X=()=>{const e=(0,L.useRef)(null),[t,a]=(0,L.useState)(""),[n,r]=(0,L.useState)({start:!1,value:0,label:""}),[o,i]=(0,L.useState)({disable:!0,open:!1}),l=async()=>{const e=new(O())(location.search),t=e.get("id");if(e.get("actual"))return;if(t){const e=await(async()=>{const e=new(O())(location.search);if(e.get("time")){const e=localStorage.getItem("variables");if(e)return JSON.parse(e)}const t=e.get("projectId");if(localStorage.removeItem("variables"),!t)return;const a=await(0,N.ZL)(C.U.detail+t);if(a.code===N.Mx.Ok&&a.data?.info){const e=a.data.info.variable;if(e)return JSON.parse(e)}return null})();e&&(x.AppStore.GlobalVariables=e);return await(0,M.le)(Number(t))}const a=e.get("uid");if(a){return await(0,M.s1)(a)}return null},c=(e,t)=>{const a=JSON.parse(e).data;(0,A.RM)(q(q({},a),{},{id:t}));H.create({type:(0,A.d1)(t)}).on("load",(()=>{j()((()=>{H.zoomAll()}),100)}))},s=async()=>{const e=new(O())(location.search).get("shop");if(e){const t=await(0,N.ZL)(C.ZQ.preview+e);if(t.code===N.Mx.Ok)switch(t.data.source_type){case C.fL.Files:case"project":case"app":if(!t.data.json_data)return!1;t.data.variable&&(x.AppStore.GlobalVariables=JSON.parse(t.data.variable));!async function(e,t,a){const n=e.components??[];for(const e of n){const a=await t.get(C.au.detail2+e);if(200===a.status&&0===a.data.code){const t=a.data.data.json_data,n=JSON.parse(t);(0,A.RM)(D(D({},n.data),{},{id:e}))}}a.loadFile(e.data)}(JSON.parse(t.data.json_data),N.GH,H);break;case C.fL.Component:H.Viewer.sceneControl.createDefaultEnv(),c(t.data.json_data,_()());break;case C.fL.Model:{H.Viewer.sceneControl.createDefaultEnv();const e=t.data.data;H.create({type:"ImportEntity",url:e}).on("load",(()=>{j()((()=>{H.zoomAll()}),100)}));break}}return!0}return!1};return(0,L.useEffect)((()=>{K=new BroadcastChannel("preview_channel"),K.addEventListener("message",(e=>{"data"===e?.data?.type&&I.l.loadUsedComponent(e.data.components).then((t=>{H.loadFile(e.data.data)}))})),window.addEventListener("message",(function(e){}))}),[]),(0,L.useEffect)((()=>{(async()=>{if(await(0,Z.$_)(),e.current){const t=e.current;t.width=t.parentElement.clientWidth,t.height=t.parentElement.clientHeight,window.app=H=new x.Application({canvas:t,editor:!1,cameraRadius:100}),(0,Z.Xf)(H),H.on("loadingBackground",(e=>{r((e=>{let t=e.value+5;return t>90&&(t=e.value),q(q({},e),{},{value:t,label:"\u6b63\u5728\u52a0\u8f7d\u5929\u7a7a\u56fe:"})}))})),H.on("loadBackground",(e=>{r((e=>({start:!1,value:0,label:"\u5929\u7a7a\u56fe\u52a0\u8f7d\u5b8c\u6210"})))})),H.on("loading",(async e=>{await(0,V._v)(100),r((t=>({start:!0,value:e.percentage,label:100===e.percentage?"\u6574\u7406\u8d44\u6e90":`\u6b63\u5728\u52a0\u8f7d${e.target?.Name}`})))})),H.on("load",(async e=>{await(0,V._v)(100),r((t=>({start:!1,value:100,label:`\u52a0\u8f7d${e.target?.Name}\u5b8c\u6210`})))}));const n=await l();if(n){const e=JSON.parse(n);await I.l.loadUsedComponent(e.components),a(e.url2d),H.loadFile(e.data),i({disable:!1,open:H.Viewer.cameraManager.Type===x.CameraType.FreeCamera});const t=e.scripts??[];for(const e of t){(0,A.uf)(e.code)()(H,x)}return}let o=await(async()=>{const e=new(O())(location.search).get("model");if(e){const t=await(0,N.ZL)(C.au.detail+"/"+e);if(t.code===N.Mx.Ok){H.Viewer.sceneControl.createDefaultEnv();const e=t.data.info,a=e?.uuid+"/"+e.file_key;return H.create({type:"ImportEntity",url:a}).on("load",(()=>{j()((()=>{H.zoomAll()}),100)})),!0}}return!1})();if(o)return;if(o=await(async()=>{const e=new(O())(location.search).get("component");if(e){const t=await(0,N.ZL)(C.au.detail+"/"+e);if(t.code===N.Mx.Ok){H.Viewer.sceneControl.createDefaultEnv();const e=t.data.info,a=e.json_data;return c(a,e.id),!0}}return!1})(),o)return;if(o=await s(),o)return;K&&K.postMessage("load")}})()}),[]),L.createElement(Q.wT,{maxSnack:3,autoHideDuration:1e3},L.createElement(R.Z,{style:{width:"100%",height:"100%",position:"relative"}},L.createElement("iframe",{src:t,style:{width:"100%",height:"100%",pointerEvents:"none",backgroundColor:"transparent",border:"0",position:"fixed"}}),L.createElement("canvas",{style:{width:"100%",height:"100%"},ref:e},"\u9884\u89c8\u9875\u9762"),n.start&&L.createElement(R.Z,{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.8)",color:"#FCFCFC"}},L.createElement(R.Z,{style:{position:"absolute",top:"50%",left:"50%",width:"50%",transform:"translate(-50%, -50%)"}},L.createElement(P.A5,{sx:{height:15,borderRadius:5},value:n.value,label:n.label})))),L.createElement(J,null))};(0,S.s)(document.getElementById("app")).render(L.createElement(X,null))},29115:(e,t,a)=>{a.d(t,{GH:()=>Z,Mx:()=>M,QO:()=>R,ZL:()=>A,pz:()=>D,qu:()=>T});var n=a(93213),r=a(71722),o=a.n(r),i=a(29405),l=a.n(i),c=a(20246),s=a.n(c),d=a(39831),u=a.n(d),p=a(61799),f=a.n(p),y=a(26117),v=a.n(y),h=a(5996),b=a.n(h),m=a(20658),g=a.n(m),w=a(3434),O=a.n(w),k=a(97828),j=a.n(k),E=a(73554),_=a(43653),x=a.n(_),L=a(92604);function S(e,t){var a=s()(e);if(u()){var n=u()(e);t&&(n=f()(n).call(n,(function(t){return v()(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a,r,o=null!=arguments[t]?arguments[t]:{};t%2?b()(a=S(Object(o),!0)).call(a,(function(t){(0,n.Z)(e,t,o[t])})):g()?O()(e,g()(o)):b()(r=S(Object(o))).call(r,(function(t){j()(e,t,v()(o,t))}))}return e}let M;!function(e){e[e.Ok=0]="Ok",e[e.InvalidToken=61]="InvalidToken",e[e.Error=50]="Error"}(M||(M={}));const Z=x().create({baseURL:"https://hc3d-core.histron.cn"});Z.interceptors.request.use((e=>{let t=(0,L.LP)();return t&&(e.headers.Authorization="Bearer "+t),e}),(e=>o().reject(e)));const I={code:-1,data:null};Z.interceptors.response.use((function(e){return e.data.code===M.InvalidToken&&(E.y.error("\u767b\u5f55\u5df2\u8fc7\u671f",{preventDuplicate:!0}),window.IGNORE_INVAILID_TOKEN||l()((()=>{(0,L.gy)(),window.location.reload()}),1e3)),e.data.code===M.Error&&e.data.error&&E.y.error(e.data.error?.[0]),o().resolve(e.data)}),(function(e){return o().reject(I)}));const N=async e=>(E.y.error("\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),C(C({},I),{},{msg:e?.message??"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"}));async function A(e,t){return Z.get(e,t).catch(N)}async function T(e,t,a){return Z.post(e,t,a).catch(N)}async function D(e,t,a){return Z.put(e,t,a).catch(N)}async function R(e,t){return Z.delete(e,t).catch(N)}},73554:(e,t,a)=>{a.d(t,{Q:()=>r,y:()=>o});var n=a(39282);const r=new(a.n(n)());class o{}o.info=(e,t={})=>{},o.warn=(e,t={})=>{},o.success=(e,t={})=>{},o.error=(e,t={})=>{},o.close=e=>{}},19853:(e,t,a)=>{a.d(t,{HY:()=>s,qm:()=>c});var n=a(97539),r=a.n(n),o=a(13567),i=a.n(o);a(96867);function l(e,t,a){if(void 0===a)return e;const n=new RegExp("([?&])"+t+"=.*?(&|$)","i"),o=-1!==r()(e).call(e,"?")?"&":"?";return e.match(n)?e.replace(n,"$1"+t+"="+a+"$2"):e+o+t+"="+a}function c(e,t=!1,a=!0){let n=t?e.pic_key:e.file_key;return e.uuid&&(n=e.uuid+"/"+n),t&&a&&(n=l(n,"t",i()().toString())),n}function s(e,t){const a=l(location.href,e,t);history.replaceState({path:a},"",a)}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=n,e=[],o.O=(t,a,n,r)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){for(var[a,n,r]=e[d],l=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](a[c])))?a.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,n,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var i={};t=t||[null,a({}),a([]),a(a)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(r,i),r},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=1493,(()=>{var e={1493:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[i,l,c]=a,s=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var d=c(o)}for(t&&t(a);s<i.length;s++)r=i[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=o.O(void 0,[8739,4326,8274,6471,8737,3336,4480,1461,6499,729,2338,4906,9669,3919,5877,2658,6133,9478,2617,8166,7911,1801,4637,7621,6023,3018,2386,5933,3714,8692,6405,7011,4848,3577,9560,6170,2429,7695,5623,7798,9057,103,6769,4868,3991,5557,3898],(()=>o(10426)));i=o.O(i)})();