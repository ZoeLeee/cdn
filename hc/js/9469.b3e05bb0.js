"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9469],{35513:(e,t,n)=>{n.d(t,{Z:()=>ne});var l=n(20246),i=n.n(l),a=n(39831),o=n.n(a),r=n(61799),c=n.n(r),d=n(26117),p=n.n(d),s=n(5996),m=n.n(s),u=n(20658),h=n.n(u),g=n(3434),f=n.n(g),y=n(97828),x=n.n(y),b=n(93213),E=n(51463),Z=n.n(E),k=n(32735),v=n(94063),C=n(61241),w=n(3450),S=n(29405),P=n.n(S),z=n(14549),j=n.n(z),O=n(97539),I=n.n(O),_=n(13697),D=n(47513),R=n(45709),L=n(67970),M=n(10800),F=n(11528),W=n(27660),$=n(83228),N=n(46600);const A=(0,w.ZP)(_.Z)((({theme:e})=>({position:"relative"}))),T=(0,w.ZP)("div")((({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"90%","& i":{fontSize:"10em",color:"rgb(255, 208, 129)"}}))),B=(0,w.ZP)("div")((({theme:e})=>({display:"flex",justifyContent:"flex-end",alignItems:"center",width:"calc((100% - 32px) / 2)",height:"9%",position:"absolute",right:"16px",zIndex:100,"& .action-menu-item":{display:"flex",justifyContent:"center",alignItems:"center",width:30,height:30,margin:"0 5px",borderRadius:"50%"}}))),H=(0,w.ZP)("div")((({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"calc(100% / 3)"}))),J=(0,w.ZP)(L.Z)((({theme:e})=>({width:40,height:40,margin:"0 15px"}))),G=[{key:"preview",title:"\u9884\u89c8",icon:"icon-3Dyulan-dakai1",type:"dir-file"},{key:"rename",title:"\u91cd\u547d\u540d",icon:"icon-3Dbianji",type:"dir-file"},{key:"edit",title:"\u7f16\u8f91",icon:"icon-3Dshezhi",type:"dir-file"},{key:"delete",title:"\u5220\u9664",icon:"icon-3Ddel",type:"dir-file"}],K={id:"id",name:"name",count:"count",createdTime:"createdTime",updatedTime:"updatedTime",img:"img"};let U=0;const X=({dataItem:e,dataIndex:t,handleClick:n,menuList:l,keyFormat:i,doubleClick:a,moreList:o})=>{const[r,d]=(0,k.useState)(null),[p,s]=(0,k.useState)(null),m=Boolean(r),u=(e,t,l)=>{y(),n&&n(e,t,l)},h=()=>{U+=1,P()((()=>{1===U?n&&n(e,t):2===U&&a&&a(e,t),U=0}),300)},g=e=>{const t={fontSize:"13px"};return k.createElement(M.Z,{id:"basic-menu"+e,anchorEl:r,open:m,onClose:y,MenuListProps:{"aria-labelledby":"basic-button"}},o&&Z()(o).call(o,((e,n)=>k.createElement(F.Z,{sx:t,key:n,onClick:()=>u(e.key,p,n)},k.createElement("i",{className:"iconfont "+e.icon}),e.title))))},f=(e,t,n,l)=>{"more"===l?x(e,t):u(l,t,n)},y=()=>{d(null),s({})},x=(e,t)=>{d(e.currentTarget),s(t)};return(()=>{let n=j()(K,i||{}),a=l||G,o=c()(a).call(a,(t=>{var n;return-1!==I()(n=t.type).call(n,e.node_type)}));return k.createElement(A,null,k.createElement(D.Z,{sx:{width:"100%",height:"300px",userSelect:"none"},onClick:h},k.createElement(B,null,Z()(o).call(o,((l,i)=>k.createElement(H,{key:i},k.createElement(J,{title:l.title,color:"primary",onClick:n=>f(n,e,t,l.key)},k.createElement(N.Z,{type:l.icon})),"more"===l.key?g(e[n.id]):null)))),k.createElement(R.Z,{align:"left",variant:"body2",color:"text.secondary",sx:{color:"#222",fontSize:"15px",fontWeight:"bold",width:"50%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e[n.name]),k.createElement(T,null,"file"===e.node_type?e[n.img]&&(0,$.ap)(W.l.prefix+e[n.key]+"/"+e[n.img])?k.createElement("img",{src:`${W.l.prefix}${e[n.key]}/${e[n.img]}?t=${(new Date).getTime()}`,style:{height:"80%"}}):k.createElement("img",{src:"/static/images/bg.png"}):k.createElement(N.Z,{type:"icon-3Dxiangmu"}))))})()};var q=n(60092);function Q(e,t){var n=i()(e);if(o()){var l=o()(e);t&&(l=c()(l).call(l,(function(t){return p()(e,t).enumerable}))),n.push.apply(n,l)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n,l,i=null!=arguments[t]?arguments[t]:{};t%2?m()(n=Q(Object(i),!0)).call(n,(function(t){(0,b.Z)(e,t,i[t])})):h()?f()(e,h()(i)):m()(l=Q(Object(i))).call(l,(function(t){x()(e,t,p()(i,t))}))}return e}const Y=(0,w.ZP)("div")((({theme:e})=>({padding:"20px",display:"grid",flexWrap:"wrap",gridTemplateColumns:"repeat(auto-fill, calc((100% - 25px * 3) / 4))",gridGap:"25px 25px","& .projectCardItem":{width:"100%",maxHeight:300,boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.08)",borderRadius:"5px"},"& .activePane":{boxShadow:"0px 0px 8px 0px rgba(7, 95, 184, 0.46)"},"& .activeIcon":{color:"#1890ff"},"& .projectCardItem:hover":{boxShadow:"0px 0px 8px 0px rgba(7, 95, 184, 0.46)","& .hover-icon":{color:"#1890ff"}},"& .MuiCardContent-root:last-child":{paddingBottom:"16px"}}))),ee=(0,w.ZP)(C.Z)((({theme:e})=>V(V({},e.typography.body2),{},{textAlign:"center",color:e.palette.text.secondary,height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}))),te=(0,w.ZP)("div")((({theme:e})=>({textAlign:"center",fontSize:"14px",padding:"20px 0","& img":{width:300,height:300},"& p":{margin:0}}))),ne=({dataSource:e,handleClick:t,ipagenation:n,handleChangePage:l,handleChangeRowsPerPage:i,add:a,menuList:o,sx:r,total:c,keyFormat:d,doubleClick:p,moreList:s})=>k.createElement(k.Fragment,null,k.createElement(Y,{sx:r},a?k.createElement(v.Z,{sx:{position:"relative",display:"flex",height:300,"& > :not(style)":{width:"100%",height:"100%"}}},k.createElement("label",{style:{cursor:"pointer",opacity:0,position:"absolute"}},k.createElement("input",{multiple:!0,type:"file",onChange:a,accept:".zip",style:{display:"none"}})),k.createElement(ee,{elevation:3},k.createElement("img",{src:"/static/images/add.png",width:"60%"}))):null,e&&Z()(e).call(e,((e,n)=>k.createElement(X,{key:n,dataIndex:n,dataItem:e,menuList:o,moreList:s,keyFormat:d,handleClick:t,doubleClick:p})))),n&&c>0?k.createElement(q.Z,{pagenation:n,total:c,onPageChange:l,onRowsPerPageChange:i}):null,e&&0!==e.length?null:k.createElement(te,null,k.createElement("img",{src:"/static/images/nodata.svg"}),k.createElement("p",null,"\u6682\u65e0\u6570\u636e")))},24240:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(32735),i=n(61241),a=n(5385),o=n(3450),r=n(89044);const c=(0,o.ZP)(i.Z)((({theme:e})=>({border:"1px solid #E2E2E2",p:"0 0 0 4px",display:"inline-flex",alignItems:"center",width:400,height:36,boxShadow:"none",borderRadius:"5px"}))),d=(0,o.ZP)("div")((({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center",padding:"0 3px",background:"#075FB8",height:"100%",width:36,color:"#fff",borderRadius:"0 5px 5px 0",cursor:"pointer"})));function p(e){const[t,n]=(0,l.useState)(""),i=()=>{const{search:n}=e;n&&n(t)};return l.createElement(c,null,l.createElement(a.ZP,{sx:{ml:1,flex:1},placeholder:"\u641c\u7d22",value:t,onChange:e=>{n(e.target.value)},onKeyUp:e=>{13===e.keyCode&&i()}}),l.createElement(d,{onClick:i},l.createElement(r.Z,null)))}},22693:(e,t,n)=>{n.d(t,{Z:()=>Z});var l=n(51463),i=n.n(l),a=n(32735),o=n(46561),r=n(37394),c=n(3450),d=n(20246),p=n.n(d),s=n(64496),m=n(37360),u=n(67970),h=n(10800),g=n(11528),f=n(46600);const y=(0,c.ZP)(r.Z)((({theme:e})=>({height:40,paddingRight:0,"& .label-style span":{fontSize:"13px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}))),x=({currentObj:e,dataItem:t,dataIndex:n,menuItemArr:l,handleClick:o,onMenuClick:r})=>{const[c,d]=(0,a.useState)(null),x=Boolean(c),b=e=>{d(e.currentTarget),e.stopPropagation()},E=()=>{d(null)};return(d=>{let Z="";e&&p()(e).length>0&&(Z=e.key);let{key:k,label:v,type:C,children:w,open:S,icon:P}=t;return a.createElement(a.Fragment,{key:n},a.createElement(y,{sx:{pl:d},className:Z===k?"SelfList active":"SelfList",onClick:e=>{o&&o(t,e)}},P?a.createElement(s.Z,{sx:{minWidth:"30px"}},a.createElement(f.Z,{type:P})):null,a.createElement(m.Z,{className:"label-style",title:v,primary:v}),a.createElement(u.Z,{onClick:b},a.createElement(f.Z,{sx:{fontSize:"20px",color:"#333"},type:"icon-3Dgengduo"}))),a.createElement(h.Z,{id:"actionMenu-"+k,anchorEl:c,open:x,onClose:E,MenuListProps:{"aria-labelledby":"basic-button"}},l&&i()(l).call(l,((e,n)=>a.createElement(g.Z,{sx:{fontSize:"13px"},key:n,onClick:()=>(e=>{r&&r(e.key,t),E()})(e)},e.icon?a.createElement(f.Z,{sx:{fontSize:"18px",marginRight:"5px"},type:e.icon}):null,e.title)))))})(2)},b=(0,c.ZP)(o.Z)((({theme:e})=>({width:"100%",maxWidth:360,bgcolor:"background.paper","& .active, & .SelfList:hover":{backgroundColor:"rgba(25, 118, 210, 0.2)"}}))),E=((0,c.ZP)(r.Z)((({theme:e})=>({fontSize:"12px",height:40,"& .label-style span":{fontSize:"13px"}}))),[{key:"rename",title:"\u91cd\u547d\u540d",icon:"icon-3Dbianji1"},{key:"delete",title:"\u5220\u9664",icon:"icon-3Ddel"}]),Z=({dataList:e,handleClick:t,currentObj:n,onMenuClick:l})=>a.createElement(b,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},"aria-labelledby":"nested-list-subheader"},e&&i()(e).call(e,((e,i)=>a.createElement(x,{key:i,dataItem:e,dataIndex:i,menuItemArr:E,currentObj:n,onMenuClick:l,handleClick:t}))))},18163:(e,t,n)=>{n.d(t,{Z:()=>Z});var l=n(74857),i=n(21092),a=n(32735),o=n(75393),r=n(68867),c=n(57426),d=n(58181),p=n(37211),s=n(67970),m=n(44700),u=n(61241),h=n(3450),g=n(89294),f=n.n(g);const y=["children","onClose"],x=(0,h.ZP)(r.Z)((({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}))),b=e=>{const{children:t,onClose:n}=e,o=(0,i.Z)(e,y);return a.createElement(c.Z,(0,l.Z)({sx:{m:0,p:2,cursor:"move"}},o),t,n?a.createElement(s.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]}},a.createElement(m.Z,null)):null)},E=e=>a.createElement(f(),{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},a.createElement(u.Z,e)),Z=({title:e,visible:t,size:n,children:l,header:i,footer:r,fullWidth:c,sx:s,height:m,hideFooter:u,handleOk:h,handleClose:g})=>{const f=()=>{g&&g()};return a.createElement(x,{open:t,maxWidth:n,fullWidth:c,PaperComponent:E,"aria-labelledby":"draggable-dialog-title"},i||a.createElement(b,{id:"draggable-dialog-title",onClose:f},e),a.createElement(d.Z,{sx:{height:""+(m?m+"px":"auto")},dividers:!0},l),u?null:a.createElement(p.Z,null,r||a.createElement(a.Fragment,null,a.createElement(o.Z,{onClick:f},"\u53d6\u6d88"),a.createElement(o.Z,{onClick:()=>{h&&h()}},"\u786e\u5b9a"))))}},60092:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(36800),i=n.n(l),a=n(32735),o=n(65404);const r=({total:e,pagenation:t,onPageChange:n,onRowsPerPageChange:l})=>{const{pageNum:r,pageSize:c,pageSizeOptions:d}=t;return a.createElement(o.Z,{rowsPerPageOptions:d||[],component:"div",count:e,rowsPerPage:c,page:r>0?r-1:0,onPageChange:(e,t)=>{n&&n(t+1)},onRowsPerPageChange:e=>{l&&l(i()(e.target.value,10))},labelRowsPerPage:"\u6bcf\u9875\u6761\u6570\uff1a",labelDisplayedRows:({from:t,to:n})=>`${t}\u2013${n} \u5171 ${Math.ceil(e/c)}\u9875, ${e}\u6761`})}},59469:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var l=n(39831),i=n.n(l),a=n(61799),o=n.n(a),r=n(26117),c=n.n(r),d=n(5996),p=n.n(d),s=n(20658),m=n.n(s),u=n(3434),h=n.n(u),g=n(97828),f=n.n(g),y=n(93213),x=n(20246),b=n.n(x),E=n(66989),Z=n.n(E),k=n(51463),v=n.n(k),C=n(32735),w=n(3450),S=n(75393),P=n(95279),z=n(67970),j=n(94063),O=n(21365),I=n(45709),_=n(36517),D=n(35513),R=n(22693),L=n(25661),M=n(24240),F=n(99394),W=n(73554),$=n(81215),N=n(1869),A=n(4992);function T(e,t){var n=b()(e);if(i()){var l=i()(e);t&&(l=o()(l).call(l,(function(t){return c()(e,t).enumerable}))),n.push.apply(n,l)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n,l,i=null!=arguments[t]?arguments[t]:{};t%2?p()(n=T(Object(i),!0)).call(n,(function(t){(0,y.Z)(e,t,i[t])})):m()?h()(e,m()(i)):p()(l=T(Object(i))).call(l,(function(t){f()(e,t,c()(i,t))}))}return e}const H=(0,w.ZP)("div")((({theme:e})=>({display:"flex",height:"50px",justifyContent:"space-between",alignItems:"center",fontSize:"15px",padding:"15px 8px",borderBottom:"1px solid #f0f0f0"}))),J="editor/file/private/list",G="editor/file/delete",K={name:"",pid:0,source_type:"components",node_type:"dir",status:1,project_type:"3d"},U=[{key:"preview",title:"\u9884\u89c8",icon:"icon-3Dsousuo",type:"file"},{key:"rename",title:"\u7f16\u8f91",icon:"icon-3Dbianji1",type:"dir-file"},{key:"more",title:"\u66f4\u591a",icon:"icon-3Dgengduo",type:"file"},{key:"delete",title:"\u5220\u9664",icon:"icon-3Ddel",type:"dir"}],X=[{key:"publish",title:"\u53d1\u5e03",icon:"icon-3Dgongnengdingyi",type:"file"},{key:"delete",title:"\u5220\u9664",icon:"icon-3Ddel",type:"file"}],q=[];function Q(e){const[t,n]=(0,C.useState)([]),[l,i]=(0,C.useState)({pageNum:0,pageSize:5,pageSizeOptions:[5,10]}),[a,o]=(0,C.useState)([]),[r,c]=(0,C.useState)(null),[d,p]=(0,C.useState)(0),[s,m]=(0,C.useState)(""),[u,h]=(0,C.useState)(null),[g,f]=(0,C.useState)(q),y=(0,C.useRef)(null),x=(0,C.useRef)(null),E=e=>{e&&0!==b()(e).length?x.current.init(B({},e),!0,"\u91cd\u547d\u540d"):W.y.warn("\u8bf7\u9009\u62e9\u8981\u91cd\u547d\u540d\u7684\u9879\uff01")},k=(e,t,l)=>{let i=B({source_type:"components",project_type:"3d",pid:0},e),r=l||"both";(0,F.s7)(J,i).then((e=>{if(0===e.code){let l=e.data;if(l&&l.length>0){for(let e of l)e.children=[];if("both"===r||"tree"===r)if(t){t.children=[];for(let e of l){let n=B({key:e.id,label:e.name,type:e.node_type,open:!1,icon:"icon-3Dweb"},e);t.children.push(n)}let e=JSON.parse(Z()(a));o(e)}else{let e=[];for(let t of l){let n=B({key:t.id,label:t.name,type:t.node_type,open:!1,icon:"icon-3Dweb"},t);e.push(n)}o(e)}"both"!==r&&"list"!==r||n(l)}else"both"!==r&&"tree"!==r||t||o([]),"both"!==r&&"list"!==r||n([])}}))},w=e=>{if(e&&0!==b()(e).length){let t={id:e.id};(0,$.i)({title:"\u63d0\u793a",content:`\u786e\u5b9a\u5220\u9664\u201c${e.name}\u201d\u5417\uff1f`,onOk:()=>{T(t,e.node_type)}})}else W.y.warn("\u8bf7\u9009\u62e9\u8981\u5220\u9664\u7684\u9879\uff01")},T=(e,t)=>{(0,F.mn)(G,e).then((e=>{0===e.code&&("dir"===t&&k({pid:0},null,"tree"),k({pid:r.id},null,"list"),W.y.success("\u5220\u9664\u6210\u529f"))}))};(0,C.useEffect)((()=>{(e=>{let t=B({source_type:"components",project_type:"3d",pid:d},e);(0,F.s7)(J,t).then((e=>{if(0===e.code){let t=e.data;if(t&&t.length>0){let e=[];for(let n of t){let t=B({key:n.id,label:n.name,type:n.node_type,open:!1,icon:"icon-3Dweb"},n);e.push(t)}o(e),c(e[0]),f([{id:e[0].id,name:e[0].name,pid:d}]),k({pid:e[0].id},null,"list")}else o([])}}))})()}),[]);const Q=e=>{y.current.open(),m(`/preview.html?&component=${e.id}`)},V=e=>{let t=B({source_type:"components",project_type:"3d"},e);(0,F.s7)(J,t).then((e=>{if(0===e.code){let t=e.data;if(t&&t.length>0){let e=[];for(let n of t)if("file"===n.node_type){let t=B({key:n.id,label:n.name,type:n.node_type,open:!1},n);e.push(t)}n(e)}else n([])}}))},Y=e=>{if(e){const{id:t,name:n,pid:l}=e;f([{id:t,name:n,pid:l}]),k({pid:r.id},null,"list"),k({pid:0},null,"tree")}};return C.createElement(C.Fragment,null,C.createElement(P.ZP,{columns:8,container:!0,sx:{height:"100%"},spacing:0},C.createElement(P.ZP,{item:!0,xs:1,sx:{height:"100%",padding:"10px"}},C.createElement(j.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"}},C.createElement(S.Z,{variant:"outlined",sx:{height:"32px",fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},onClick:()=>{p(0),c(null),f(q),k({pid:0})}},"\u6211\u7684\u7ec4\u4ef6"),C.createElement(z.Z,{title:"\u65b0\u5efa\u76ee\u5f55",color:"primary",onClick:()=>{return e=K,void x.current.init(e,!1,"\u65b0\u589e");var e}},C.createElement(_.Z,null))),C.createElement(R.Z,{dataList:a,currentObj:r,handleClick:(e,t)=>{if(c(e),"dir"===e.node_type){const{id:t,name:n,pid:l}=e;p(t),f([{id:t,name:n,pid:l}]),k({pid:t},null,"list")}},onMenuClick:(e,t)=>{"delete"===e?w(t):"rename"===e&&E(t)}})),C.createElement(P.ZP,{item:!0,xs:7,sx:{borderLeft:"1px solid #aaa"}},C.createElement(H,null,C.createElement(O.Z,null,C.createElement(I.Z,null,"\u6211\u7684\u7ec4\u4ef6"),g&&v()(g).call(g,((e,t)=>C.createElement(I.Z,{key:t},e.name)))),C.createElement(M.Z,{search:e=>{e?V({name:e}):k({},null,"list")}})),C.createElement(D.Z,{dataSource:t,ipagenation:l,handleChangePage:e=>{i({pageNum:e,pageSize:l.pageSize,pageSizeOptions:l.pageSizeOptions})},handleChangeRowsPerPage:e=>{i({pageNum:0,pageSize:e,pageSizeOptions:l.pageSizeOptions})},handleClick:(e,t)=>{if("rename"===e)E(t);else if("preview"===e)Q(t);else if("delete"===e)w(t);else if("move"===e);else if("deploy"===e);else if("publish"===e){let{id:e,uuid:n,name:l,pic_key:i,file_key:a}=t;h({id:e,uuid:n,title:l,preview:n+"/"+i})}},keyFormat:{img:"pic_key",key:"uuid"},doubleClick:(e,t)=>{if("dir"===e.node_type){const{id:t,name:n,pid:l}=e;p(t),f([{id:t,name:n,pid:l}]),k({pid:t},null,"list")}else Q(e)},menuList:U,moreList:X}))),C.createElement(N.Z,{dataRef:x,onOk:Y,onClose:Y}),C.createElement(A.Z,{previewRef:y,url:s}),u&&b()(u).length>0?C.createElement(L.Z,{category:"M0004",type:"file",onClose:()=>{h(null)},target:u.id,targetObj:u}):null)}},1869:(e,t,n)=>{n.d(t,{Z:()=>A});var l=n(20246),i=n.n(l),a=n(39831),o=n.n(a),r=n(61799),c=n.n(r),d=n(26117),p=n.n(d),s=n(5996),m=n.n(s),u=n(20658),h=n.n(u),g=n(3434),f=n.n(g),y=n(97828),x=n.n(y),b=n(93213),E=n(66989),Z=n.n(E),k=n(51463),v=n.n(k),C=n(32735),w=n(3450),S=n(95279),P=n(73764),z=n(11528),j=n(92491),O=n(61241),I=n(18163),_=n(99394),D=n(73554);function R(e,t){var n=i()(e);if(o()){var l=o()(e);t&&(l=c()(l).call(l,(function(t){return p()(e,t).enumerable}))),n.push.apply(n,l)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n,l,i=null!=arguments[t]?arguments[t]:{};t%2?m()(n=R(Object(i),!0)).call(n,(function(t){(0,b.Z)(e,t,i[t])})):h()?f()(e,h()(i)):m()(l=R(Object(i))).call(l,(function(t){x()(e,t,p()(i,t))}))}return e}(0,w.ZP)("div")((({theme:e})=>({display:"flex",height:"50px",justifyContent:"space-between",alignItems:"center",fontSize:"15px",padding:"15px 8px",borderBottom:"1px solid #f0f0f0"})));const M=(0,w.ZP)(P.Z)((({theme:e})=>({"& input":{height:"1em",width:"300px"}}))),F="editor/file/private/list",W="editor/file/upload",$="editor/file/edit",N=(0,w.ZP)(j.Z)((({theme:e})=>({height:"30px",width:"330px"}))),A=((0,w.ZP)(O.Z)((({theme:e})=>L(L({},e.typography.body2),{},{textAlign:"center",color:e.palette.text.secondary,height:128,lineHeight:"128px",cursor:"pointer"}))),({onOk:e,onClose:t,dataRef:n})=>{const[l,i]=(0,C.useState)(!1),[a,o]=(0,C.useState)({}),[r,c]=(0,C.useState)(!1),[d,p]=(0,C.useState)(""),[s,m]=(0,C.useState)([]),[u,h]=(0,C.useState)("*"),[g,f]=(0,C.useState)(""),[y,x]=(0,C.useState)("");(0,C.useImperativeHandle)(n,(()=>({init:b})));const b=(e,t,n)=>{let l=JSON.parse(Z()(e));i(!0),o(l),c(t),p(n),E()},E=()=>{(0,_.s7)(F,{source_type:"models",project_type:"3d",pid:0}).then((e=>{if(0===e.code){let t=e.data;if(t&&t.length>0){let e=[];for(let n of t)"dir"===n.node_type&&e.push({value:n.id,label:n.name});m(e)}else m([])}})).catch((e=>{}))},k=t=>{let n="",l="";r?(n="put",l=$):(n="post",l=W),(0,_.XD)(l,t,n).then((n=>{0===n.code&&(D.y.success("\u64cd\u4f5c\u6210\u529f"),i(!1),e&&e(t))}))};return C.createElement(I.Z,{size:"sm",title:d,visible:l,handleOk:()=>{k(a)},handleClose:()=>{i(!1),t&&t()},fullWidth:!0},C.createElement(S.ZP,{container:!0,spacing:2},C.createElement(S.ZP,{item:!0,xs:12,sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:"80px"}},C.createElement("div",{style:{fontSize:"14px",width:"100px",textAlign:"right"}},"dir"===a.node_type?"\u76ee\u5f55":"\u6587\u4ef6","\u540d\u79f0\uff1a"),C.createElement(M,{size:"small",value:a.name,onChange:e=>{((e,t)=>{let n=L({},a);n[t]=e.target.value,o(n)})(e,"name")}})),"file"===a.node_type?C.createElement(C.Fragment,null,C.createElement(S.ZP,{item:!0,xs:12,sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:"80px"}},C.createElement("div",{style:{fontSize:"14px",width:"100px",textAlign:"right"}},"\u9009\u62e9\u6587\u4ef6\u5939\uff1a"),C.createElement(N,{value:a.pid,placeholder:"\u8bf7\u9009\u62e9",onChange:e=>{let t=e.target.value||0,n=L(L({},a),{},{pid:t});o(n)}},s&&v()(s).call(s,((e,t)=>C.createElement(z.Z,{key:t,value:e.value},e.label)))))):null))})},4992:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(32735),i=n(3346),a=n(3450),o=n(18163),r=n(1453);const c=(0,a.ZP)("iframe")((({theme:e})=>({width:"100%",height:"calc(100% - 32px)",border:"none",margin:"0",padding:"0"}))),d=({url:e,previewRef:t})=>{const[n,a]=(0,l.useState)(!1),d=(0,i.s0)();(0,l.useImperativeHandle)(t,(()=>({open:s})));const p=()=>{a(!1)},s=e=>{a(!0),m(e)},m=e=>{r.h.addEventListener("message",(t=>{const{type:n}=t.data;"close_preview"===n?a(!1):"apply-shop"===n&&(d("/editor?code="+e),p())}))};return l.createElement(o.Z,{size:"xl",title:"\u9884\u89c8",visible:n,handleOk:()=>{a(!1)},handleClose:p,fullWidth:!0,height:800,hideFooter:!0},l.createElement(c,{src:e}))}}}]);