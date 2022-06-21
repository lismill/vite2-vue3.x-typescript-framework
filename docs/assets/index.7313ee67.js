import{d as G,j as te,b as n,P as b,aP as pe,H as Z,R as ve,ac as he,v as q,t as Se,k as x,aQ as Ie,aR as Ee,X as xe,n as be,aS as Ce,aT as oe,m as P,aU as ue,ar as Pe,q as F,aV as ce,aW as Te,aX as Le,aY as se,aZ as Oe,a_ as Ae,aO as je,o as Me,c as Ve,w as V,g as z,a2 as N,e as k,a as R}from"./index.6bf4fbce.js";var we=function(){return{avatar:b.any,description:b.any,prefixCls:String,title:b.any}},ze=G({name:"AListItemMeta",props:we(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,_){var t=_.slots,c=te("list",e),f=c.prefixCls;return function(){var C,p,i,L,O,s,m="".concat(f.value,"-item-meta"),l=(C=e.title)!==null&&C!==void 0?C:(p=t.title)===null||p===void 0?void 0:p.call(t),u=(i=e.description)!==null&&i!==void 0?i:(L=t.description)===null||L===void 0?void 0:L.call(t),v=(O=e.avatar)!==null&&O!==void 0?O:(s=t.avatar)===null||s===void 0?void 0:s.call(t),h=n("div",{class:"".concat(f.value,"-item-meta-content")},[l&&n("h4",{class:"".concat(f.value,"-item-meta-title")},[l]),u&&n("div",{class:"".concat(f.value,"-item-meta-description")},[u])]);return n("div",{class:m},[v&&n("div",{class:"".concat(f.value,"-item-meta-avatar")},[v]),(l||u)&&h])}}}),de=Symbol("ListContextKey"),Ne=globalThis&&globalThis.__rest||function(r,e){var _={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(_[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,t=Object.getOwnPropertySymbols(r);c<t.length;c++)e.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(r,t[c])&&(_[t[c]]=r[t[c]]);return _},ke=function(){return{prefixCls:String,extra:b.any,actions:b.array,grid:Object,colStyle:{type:Object,default:void 0}}},fe=G({name:"AListItem",inheritAttrs:!1,Meta:ze,props:ke(),slots:["actions","extra"],setup:function(e,_){var t=_.slots,c=_.attrs,f=pe(de,{grid:Z(),itemLayout:Z()}),C=f.itemLayout,p=f.grid,i=te("list",e),L=i.prefixCls,O=function(){var l,u=((l=t.default)===null||l===void 0?void 0:l.call(t))||[],v;return u.forEach(function(h){Ee(h)&&!xe(h)&&(v=!0)}),v&&u.length>1},s=function(){var l,u,v=(l=e.extra)!==null&&l!==void 0?l:(u=t.extra)===null||u===void 0?void 0:u.call(t);return C.value==="vertical"?!!v:!O()};return function(){var m,l,u,v,h,Q=c.class,Y=Ne(c,["class"]),g=L.value,A=(m=e.extra)!==null&&m!==void 0?m:(l=t.extra)===null||l===void 0?void 0:l.call(t),U=(u=t.default)===null||u===void 0?void 0:u.call(t),y=(v=e.actions)!==null&&v!==void 0?v:ve((h=t.actions)===null||h===void 0?void 0:h.call(t));y=y&&!Array.isArray(y)?[y]:y;var S=y&&y.length>0&&n("ul",{class:"".concat(g,"-item-action"),key:"actions"},[y.map(function(j,X){return n("li",{key:"".concat(g,"-item-action-").concat(X)},[j,X!==y.length-1&&n("em",{class:"".concat(g,"-item-action-split")},null)])})]),K=p.value?"div":"li",H=n(K,q(q({},Y),{},{class:Se("".concat(g,"-item"),x({},"".concat(g,"-item-no-flex"),!s()),Q)}),{default:function(){return[C.value==="vertical"&&A?[n("div",{class:"".concat(g,"-item-main"),key:"content"},[U,S]),n("div",{class:"".concat(g,"-item-extra"),key:"extra"},[A])]:[U,S,he(A,{key:"extra"})]]}});return p.value?n(Ie,{flex:1,style:e.colStyle},{default:function(){return[H]}}):H}}}),Be=function(){return{bordered:{type:Boolean,default:void 0},dataSource:b.array,extra:b.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:b.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:b.any,footer:b.any,locale:{type:Object}}},T=G({name:"AList",Item:fe,props:be(Be(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,_){var t=_.slots,c,f;Ce(de,{grid:oe(e,"grid"),itemLayout:oe(e,"itemLayout")});var C={current:1,total:0},p=te("list",e),i=p.prefixCls,L=p.direction,O=p.renderEmpty,s=P(function(){return e.pagination&&ue(e.pagination)==="object"?e.pagination:{}}),m=Z((c=s.value.defaultCurrent)!==null&&c!==void 0?c:1),l=Z((f=s.value.defaultPageSize)!==null&&f!==void 0?f:10);Pe(s,function(){"current"in s.value&&(m.value=s.value.current),"pageSize"in s.value&&(l.value=s.value.pageSize)});var u=[],v=function(o){return function(d,I){m.value=d,l.value=I,s.value[o]&&s.value[o](d,I)}},h=v("onChange"),Q=v("onShowSizeChange"),Y=function(o){var d;return n("div",{class:"".concat(i.value,"-empty-text")},[((d=e.locale)===null||d===void 0?void 0:d.emptyText)||o("List")])},g=P(function(){return typeof e.loading=="boolean"?{spinning:e.loading}:e.loading}),A=P(function(){return g.value&&g.value.spinning}),U=P(function(){var a="";switch(e.size){case"large":a="lg";break;case"small":a="sm";break}return a}),y=P(function(){var a;return a={},x(a,"".concat(i.value),!0),x(a,"".concat(i.value,"-vertical"),e.itemLayout==="vertical"),x(a,"".concat(i.value,"-").concat(U.value),U.value),x(a,"".concat(i.value,"-split"),e.split),x(a,"".concat(i.value,"-bordered"),e.bordered),x(a,"".concat(i.value,"-loading"),A.value),x(a,"".concat(i.value,"-grid"),!!e.grid),x(a,"".concat(i.value,"-rtl"),L.value==="rtl"),a}),S=P(function(){var a=F(F(F({},C),{total:e.dataSource.length,current:m.value,pageSize:l.value}),e.pagination||{}),o=Math.ceil(a.total/a.pageSize);return a.current>o&&(a.current=o),a}),K=P(function(){var a=ce(e.dataSource);return e.pagination&&e.dataSource.length>(S.value.current-1)*S.value.pageSize&&(a=ce(e.dataSource).splice((S.value.current-1)*S.value.pageSize,S.value.pageSize)),a}),H=Te(),j=Le(function(){for(var a=0;a<se.length;a+=1){var o=se[a];if(H.value[o])return o}}),X=P(function(){if(!!e.grid){var a=j.value&&e.grid[j.value]?e.grid[j.value]:e.grid.column;if(a)return{width:"".concat(100/a,"%"),maxWidth:"".concat(100/a,"%")}}}),_e=function(o,d){var I,w=(I=e.renderItem)!==null&&I!==void 0?I:t.renderItem;if(!w)return null;var E,M=ue(e.rowKey);return M==="function"?E=e.rowKey(o):M==="string"||M==="number"?E=o[e.rowKey]:E=o.key,E||(E="list-item-".concat(d)),u[d]=E,w({item:o,index:d})};return function(){var a,o,d,I,w,E,M,ae=(a=e.loadMore)!==null&&a!==void 0?a:(o=t.loadMore)===null||o===void 0?void 0:o.call(t),J=(d=e.footer)!==null&&d!==void 0?d:(I=t.footer)===null||I===void 0?void 0:I.call(t),ne=(w=e.header)!==null&&w!==void 0?w:(E=t.header)===null||E===void 0?void 0:E.call(t),re=ve((M=t.default)===null||M===void 0?void 0:M.call(t)),me=!!(ae||e.pagination||J),ge=F(F({},y.value),x({},"".concat(i.value,"-something-after-last-item"),me)),ie=e.pagination?n("div",{class:"".concat(i.value,"-pagination")},[n(Oe,q(q({},S.value),{},{onChange:h,onShowSizeChange:Q}),null)]):null,$=A.value&&n("div",{style:{minHeight:"53px"}},null);if(K.value.length>0){u.length=0;var le=K.value.map(function(D,ee){return _e(D,ee)}),ye=le.map(function(D,ee){return n("div",{key:u[ee],style:X.value},[D])});$=e.grid?n(Ae,{gutter:e.grid.gutter},{default:function(){return[ye]}}):n("ul",{class:"".concat(i.value,"-items")},[le])}else!re.length&&!A.value&&($=Y(O.value));var W=S.value.position||"bottom";return n("div",{class:ge},[(W==="top"||W==="both")&&ie,ne&&n("div",{class:"".concat(i.value,"-header")},[ne]),n(je,g.value,{default:function(){return[$,re]}}),J&&n("div",{class:"".concat(i.value,"-footer")},[J]),ae||(W==="bottom"||W==="both")&&ie])}}});T.install=function(r){return r.component(T.name,T),r.component(T.Item.name,T.Item),r.component(T.Item.Meta.name,T.Item.Meta),r};var Re=T;const B=r=>{const{VITE_ENV:e}={VITE_ENV:"production",VITE_BASE_URL:"production.xxx.com",VITE_NAME:"\u7BA1\u7406\u7CFB\u7EDF",VITE_FILE_UPLOAD_PATH:"HTTP://production.xxx.com/upload",VITE_LOCAL_STORAGE_PREFIX:"VUE_VITE_TS",VITE_BASE_PREFIX:"./",VITE_BUILD_USE_COMPRESSION:"true",VITE_BUILD_USE_VISUALIZER:"true",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0};return r?r==="dev"?e==="development":r==="prod"?e==="production":r===e:e},Ue={class:"bg-ffffff p-16"},De=R("span",null,"{{ useEnv() }}",-1),Fe=R("span",null,'{{ useEnv("development") }}',-1),Ke=R("span",null,'{{ useEnv("production") }}',-1),He=R("span",null,'{{ useEnv("test") }}',-1),Xe=R("span",null,'{{ useEnv("dev") }}',-1),We=R("span",null,'{{ useEnv("prod") }}',-1),qe=G({setup(r){return(e,_)=>{const t=fe,c=Re;return Me(),Ve("div",Ue,[n(c,{bordered:"","data-source":[1,2,3]},{default:V(()=>[n(t,null,{default:V(()=>[De,z(" - "+N(k(B)()),1)]),_:1}),n(t,null,{default:V(()=>[Fe,z(" - "+N(k(B)("development")),1)]),_:1}),n(t,null,{default:V(()=>[Ke,z(" - "+N(k(B)("production")),1)]),_:1}),n(t,null,{default:V(()=>[He,z(" - "+N(k(B)("test")),1)]),_:1}),n(t,null,{default:V(()=>[Xe,z(" - "+N(k(B)("dev")),1)]),_:1}),n(t,null,{default:V(()=>[We,z(" - "+N(k(B)("prod")),1)]),_:1})]),_:1})])}}});export{qe as default};
