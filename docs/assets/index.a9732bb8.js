import{T as X,d as vt,Q as bt,P as y,j as yt,R as gt,k as c,b as t,M as g,K as s,U as _t,V as pt,W as U,X as ht,Y as Ct}from"./index.6bf4fbce.js";var xt=X.TabPane,Tt=function(){return{prefixCls:String,title:y.any,extra:y.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:y.any,tabList:{type:Array},tabBarExtraContent:y.any,activeTabKey:String,defaultActiveTabKey:String,cover:y.any,onTabChange:{type:Function}}},St=vt({name:"ACard",mixins:[bt],props:Tt(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,q){var r=q.slots,h=yt("card",e),H=h.prefixCls,J=h.direction,E=h.size,Z=function(o){var i=o.map(function(d,f){return U(d)&&!ht(d)||!U(d)?t("li",{style:{width:"".concat(100/o.length,"%")},key:"action-".concat(f)},[t("span",null,[d])]):null});return i},tt=function(o){var i;(i=e.onTabChange)===null||i===void 0||i.call(e,o)},at=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i;return o.forEach(function(d){d&&Ct(d.type)&&d.type.__ANT_CARD_GRID&&(i=!0)}),i};return function(){var l,o,i,d,f,C,x,T,K=e.headStyle,et=K===void 0?{}:K,$=e.bodyStyle,S=$===void 0?{}:$,k=e.loading,j=e.bordered,nt=j===void 0?!0:j,L=e.type,v=e.tabList,rt=e.hoverable,z=e.activeTabKey,lt=e.defaultActiveTabKey,D=e.tabBarExtraContent,G=D===void 0?(i=r.tabBarExtraContent)===null||i===void 0?void 0:i.call(r):D,R=e.title,m=R===void 0?(d=r.title)===null||d===void 0?void 0:d.call(r):R,I=e.extra,B=I===void 0?(f=r.extra)===null||f===void 0?void 0:f.call(r):I,N=e.actions,A=N===void 0?(C=r.actions)===null||C===void 0?void 0:C.call(r):N,O=e.cover,V=O===void 0?(x=r.cover)===null||x===void 0?void 0:x.call(r):O,_=gt((T=r.default)===null||T===void 0?void 0:T.call(r)),a=H.value,ot=(l={},c(l,"".concat(a),!0),c(l,"".concat(a,"-loading"),k),c(l,"".concat(a,"-bordered"),nt),c(l,"".concat(a,"-hoverable"),!!rt),c(l,"".concat(a,"-contain-grid"),at(_)),c(l,"".concat(a,"-contain-tabs"),v&&v.length),c(l,"".concat(a,"-").concat(E.value),E.value),c(l,"".concat(a,"-type-").concat(L),!!L),c(l,"".concat(a,"-rtl"),J.value==="rtl"),l),it=S.padding===0||S.padding==="0px"?{padding:"24px"}:void 0,u=t("div",{class:"".concat(a,"-loading-block")},null),dt=t("div",{class:"".concat(a,"-loading-content"),style:it},[t(g,{gutter:8},{default:function(){return[t(s,{span:22},{default:function(){return[u]}})]}}),t(g,{gutter:8},{default:function(){return[t(s,{span:8},{default:function(){return[u]}}),t(s,{span:15},{default:function(){return[u]}})]}}),t(g,{gutter:8},{default:function(){return[t(s,{span:6},{default:function(){return[u]}}),t(s,{span:18},{default:function(){return[u]}})]}}),t(g,{gutter:8},{default:function(){return[t(s,{span:13},{default:function(){return[u]}}),t(s,{span:9},{default:function(){return[u]}})]}}),t(g,{gutter:8},{default:function(){return[t(s,{span:4},{default:function(){return[u]}}),t(s,{span:3},{default:function(){return[u]}}),t(s,{span:16},{default:function(){return[u]}})]}})]),w=z!==void 0,ct=(o={size:"large"},c(o,w?"activeKey":"defaultActiveKey",w?z:lt),c(o,"onChange",tt),c(o,"class","".concat(a,"-head-tabs")),o),M,W=v&&v.length?t(X,ct,{default:function(){return[v.map(function(n){var F=n.tab,p=n.slots,Q=p==null?void 0:p.tab;_t(!p,"Card","tabList slots is deprecated, Please use `customTab` instead.");var P=F!==void 0?F:r[Q]?r[Q](n):null;return P=pt(r,"customTab",n,function(){return[P]}),t(xt,{tab:P,key:n.key,disabled:n.disabled},null)})]},rightExtra:G?function(){return G}:null}):null;(m||B||W)&&(M=t("div",{class:"".concat(a,"-head"),style:et},[t("div",{class:"".concat(a,"-head-wrapper")},[m&&t("div",{class:"".concat(a,"-head-title")},[m]),B&&t("div",{class:"".concat(a,"-extra")},[B])]),W]));var ut=V?t("div",{class:"".concat(a,"-cover")},[V]):null,st=t("div",{class:"".concat(a,"-body"),style:S},[k?dt:_]),ft=A&&A.length?t("ul",{class:"".concat(a,"-actions")},[Z(A)]):null;return t("div",{class:ot,ref:"cardContainerRef"},[M,ut,_&&_.length?st:null,ft])}}}),Bt=St;export{Bt as C};
