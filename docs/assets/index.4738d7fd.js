import{a9 as q,d as O,P as E,z as I,j as J,aq as U,m as c,H as S,ar as H,as as L,t as M,k as z,q as _,A as R,b as l,J as T,o as W,c as K,a as P,w as j,g as Q,at as X,B as Y,I as Z,au as aa}from"./index.6bf4fbce.js";import{t as ea}from"./config.35a420d4.js";var ta={small:8,middle:16,large:24},na=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:E.oneOf(I("horizontal","vertical")).def("horizontal"),align:E.oneOf(I("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function la(s){return typeof s=="string"?ta[s]:s||0}var ra=O({name:"ASpace",props:na(),slots:["split"],setup:function(e,g){var r=g.slots,n=J("space",e),o=n.prefixCls,b=n.space,v=n.direction,p=U(),i=c(function(){var a,t,u;return(u=(a=e.size)!==null&&a!==void 0?a:(t=b.value)===null||t===void 0?void 0:t.size)!==null&&u!==void 0?u:"small"}),y=S(),d=S();H(i,function(){var a=(Array.isArray(i.value)?i.value:[i.value,i.value]).map(function(u){return la(u)}),t=L(a,2);y.value=t[0],d.value=t[1]},{immediate:!0});var B=c(function(){return e.align===void 0&&e.direction==="horizontal"?"center":e.align}),k=c(function(){var a;return M(o.value,"".concat(o.value,"-").concat(e.direction),(a={},z(a,"".concat(o.value,"-rtl"),v.value==="rtl"),z(a,"".concat(o.value,"-align-").concat(B.value),B.value),a))}),G=c(function(){return v.value==="rtl"?"marginLeft":"marginRight"}),V=c(function(){var a={};return p.value&&(a.columnGap="".concat(y.value,"px"),a.rowGap="".concat(d.value,"px")),_(_({},a),e.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-d.value,"px")})});return function(){var a,t,u=e.wrap,h=e.direction,D=h===void 0?"horizontal":h,w=R((a=r.default)===null||a===void 0?void 0:a.call(r)),A=w.length;if(A===0)return null;var f=(t=r.split)===null||t===void 0?void 0:t.call(r),N="".concat(o.value,"-item"),F=y.value,x=A-1;return l("div",{class:k.value,style:V.value},[w.map(function($,C){var m={};return p.value||(D==="vertical"?C<x&&(m={marginBottom:"".concat(F/(f?2:1),"px")}):m=_(_({},C<x&&z({},G.value,"".concat(F/(f?2:1),"px"))),u&&{paddingBottom:"".concat(d.value,"px")})),l(T,null,[l("div",{class:N,style:m},[$]),C<x&&f&&l("span",{class:"".concat(N,"-split"),style:m},[f])])})])}}}),oa=q(ra);const ia={class:"bg-ffffff p-16 m-b16"},ua=Q("\u663E\u793A/\u9690\u85CF\u8FB9\u6846"),sa={class:"bg-ffffff p-16"},ca=O({setup(s){const e=S(ea),g=r=>{X.success({message:"\u64CD\u4F5C\u63D0\u793A",description:`${JSON.stringify(r)}`})};return(r,n)=>{const o=Y,b=Z,v=oa,p=aa;return W(),K(T,null,[P("div",ia,[l(v,null,{default:j(()=>[l(o,{onClick:n[0]||(n[0]=()=>e.value.border=!e.value.border)},{default:j(()=>[ua]),_:1}),l(b,{value:e.value.borderColor,"onUpdate:value":n[1]||(n[1]=i=>e.value.borderColor=i),placeholder:"\u8BBE\u7F6E\u8FB9\u6846\u989C\u8272"},null,8,["value"])]),_:1})]),P("div",sa,[l(p,{config:e.value,"onUpdate:table:edit":g},null,8,["config"])])],64)}}});var da=Object.freeze(Object.defineProperty({__proto__:null,default:ca},Symbol.toStringTag,{value:"Module"}));export{ca as _,oa as a,da as i};