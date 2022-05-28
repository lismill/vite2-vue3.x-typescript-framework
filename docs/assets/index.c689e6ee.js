import{j as qe,k as Fe,l as He,t as ge,m as _e,d as S,n as R,q as m,s as Z,b as n,P as k,v as V,x as Le,y as $,z as D,A as b,D as Ue,E as z,G as Ve,H as ee,J as Ge,K as We,L as Je,M as le,N as be,O as Ye,Q as Ze,R as Ke,o as F,c as H,S as xe,_ as Qe,T as de,w as _,a as K,g as ue,U as Xe,V as et,W as tt}from"./index.e78d68c4.js";import{C as j}from"./index.6d0dd5ca.js";var at=9007199254740991,nt=Math.floor;function pe(t,e){var o="";if(!t||e<1||e>at)return o;do e%2&&(o+=t),e=nt(e/2),e&&(t+=t);while(e);return o}function rt(t,e,o){var a=t.length;return o=o===void 0?a:o,!e&&o>=a?t:qe(t,e,o)}var ot="\\ud800-\\udfff",it="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",ut="\\u20d0-\\u20ff",st=it+lt+ut,ct="\\ufe0e\\ufe0f",vt="\\u200d",ft=RegExp("["+vt+ot+st+ct+"]");function se(t){return ft.test(t)}var dt=Fe("length"),pt=dt,Ce="\\ud800-\\udfff",mt="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",_t="\\u20d0-\\u20ff",bt=mt+gt+_t,xt="\\ufe0e\\ufe0f",Ct="["+Ce+"]",te="["+bt+"]",ae="\\ud83c[\\udffb-\\udfff]",St="(?:"+te+"|"+ae+")",Se="[^"+Ce+"]",ye="(?:\\ud83c[\\udde6-\\uddff]){2}",he="[\\ud800-\\udbff][\\udc00-\\udfff]",yt="\\u200d",ke=St+"?",we="["+xt+"]?",ht="(?:"+yt+"(?:"+[Se,ye,he].join("|")+")"+we+ke+")*",kt=we+ke+ht,wt="(?:"+[Se+te+"?",te,ye,he,Ct].join("|")+")",me=RegExp(ae+"(?="+ae+")|"+wt+kt,"g");function $t(t){for(var e=me.lastIndex=0;me.test(t);)++e;return e}function ce(t){return se(t)?$t(t):pt(t)}function At(t){return t.split("")}var $e="\\ud800-\\udfff",Pt="\\u0300-\\u036f",Rt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",It=Pt+Rt+Tt,Bt="\\ufe0e\\ufe0f",zt="["+$e+"]",ne="["+It+"]",re="\\ud83c[\\udffb-\\udfff]",Nt="(?:"+ne+"|"+re+")",Ae="[^"+$e+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Mt="\\u200d",Te=Nt+"?",Ie="["+Bt+"]?",Dt="(?:"+Mt+"(?:"+[Ae,Pe,Re].join("|")+")"+Ie+Te+")*",Et=Ie+Te+Dt,jt="(?:"+[Ae+ne+"?",ne,Pe,Re,zt].join("|")+")",Ot=RegExp(re+"(?="+re+")|"+jt+Et,"g");function qt(t){return t.match(Ot)||[]}function Ft(t){return se(t)?qt(t):At(t)}var Ht=Math.ceil;function Be(t,e){e=e===void 0?" ":He(e);var o=e.length;if(o<2)return o?pe(e,t):e;var a=pe(e,Ht(t/ce(e)));return se(e)?rt(Ft(a),0,t).join(""):a.slice(0,t)}function Lt(t,e,o){t=ge(t),e=_e(e);var a=e?ce(t):0;return e&&a<e?Be(e-a,o)+t:t}var Ut=function(){return{prefixCls:String,title:k.any,description:k.any,avatar:k.any}},oe=S({name:"ACardMeta",props:Ut(),slots:["title","description","avatar"],setup:function(e,o){var a=o.slots,i=R("card",e),r=i.prefixCls;return function(){var c=m({},"".concat(r.value,"-meta"),!0),l=Z(a,e,"avatar"),u=Z(a,e,"title"),s=Z(a,e,"description"),p=l?n("div",{class:"".concat(r.value,"-meta-avatar")},[l]):null,d=u?n("div",{class:"".concat(r.value,"-meta-title")},[u]):null,g=s?n("div",{class:"".concat(r.value,"-meta-description")},[s]):null,v=d||g?n("div",{class:"".concat(r.value,"-meta-detail")},[d,g]):null;return n("div",{class:c},[p,v])}}}),Vt=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},ie=S({name:"ACardGrid",__ANT_CARD_GRID:!0,props:Vt(),setup:function(e,o){var a=o.slots,i=R("card",e),r=i.prefixCls,c=V(function(){var l;return l={},m(l,"".concat(r.value,"-grid"),!0),m(l,"".concat(r.value,"-grid-hoverable"),e.hoverable),l});return function(){var l;return n("div",{class:c.value},[(l=a.default)===null||l===void 0?void 0:l.call(a)])}}});j.Meta=oe;j.Grid=ie;j.install=function(t){return t.component(j.name,j),t.component(oe.name,oe),t.component(ie.name,ie),t};function Gt(t,e,o){t=ge(t),e=_e(e);var a=e?ce(t):0;return e&&a<e?t+Be(e-a,o):t}var ze=function(e){var o=e.value,a=e.formatter,i=e.precision,r=e.decimalSeparator,c=e.groupSeparator,l=c===void 0?"":c,u=e.prefixCls,s;if(typeof a=="function")s=a({value:o});else{var p=String(o),d=p.match(/^(-?)(\d*)(\.(\d+))?$/);if(!d)s=p;else{var g=d[1],v=d[2]||"0",f=d[4]||"";v=v.replace(/\B(?=(\d{3})+(?!\d))/g,l),typeof i=="number"&&(f=Gt(f,i,"0").slice(0,i)),f&&(f="".concat(r).concat(f)),s=[n("span",{key:"int",class:"".concat(u,"-content-value-int")},[g,v]),f&&n("span",{key:"decimal",class:"".concat(u,"-content-value-decimal")},[f])]}}return n("span",{class:"".concat(u,"-content-value")},[s])};ze.displayName="StatisticNumber";var Wt=ze,Jt=function(){return{prefixCls:String,width:{type:[Number,String]}}},Yt=S({name:"SkeletonTitle",props:Jt(),setup:function(e){return function(){var o=e.prefixCls,a=e.width,i=typeof a=="number"?"".concat(a,"px"):a;return n("h3",{class:o,style:{width:i}},null)}}}),ve=Yt,Zt=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},Kt=S({name:"SkeletonParagraph",props:Zt(),setup:function(e){var o=function(i){var r=e.width,c=e.rows,l=c===void 0?2:c;if(Array.isArray(r))return r[i];if(l-1===i)return r};return function(){var a=e.prefixCls,i=e.rows,r=Le(Array(i)).map(function(c,l){var u=o(l);return n("li",{key:l,style:{width:typeof u=="number"?"".concat(u,"px"):u}},null)});return n("ul",{class:a},[r])}}}),Qt=Kt,W=function(){return{prefixCls:String,size:[String,Number],shape:String,active:{type:Boolean,default:void 0}}},Ne=function(e){var o,a,i=e.prefixCls,r=e.size,c=e.shape,l=$((o={},m(o,"".concat(i,"-lg"),r==="large"),m(o,"".concat(i,"-sm"),r==="small"),o)),u=$((a={},m(a,"".concat(i,"-circle"),c==="circle"),m(a,"".concat(i,"-square"),c==="square"),m(a,"".concat(i,"-round"),c==="round"),a)),s=typeof r=="number"?{width:"".concat(r,"px"),height:"".concat(r,"px"),lineHeight:"".concat(r,"px")}:{};return n("span",{class:$(i,l,u),style:s},null)};Ne.displayName="SkeletonElement";var J=Ne,Xt=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function Q(t){return t&&Ue(t)==="object"?t:{}}function ea(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function ta(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function aa(t,e){var o={};return(!t||!e)&&(o.width="61%"),!t&&e?o.rows=3:o.rows=2,o}var na=S({name:"ASkeleton",props:D(Xt(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,o){var a=o.slots,i=R("skeleton",e),r=i.prefixCls,c=i.direction;return function(){var l,u=e.loading,s=e.avatar,p=e.title,d=e.paragraph,g=e.active,v=e.round,f=r.value;if(u||e.loading===void 0){var x,y=!!s||s==="",w=!!p||p==="",C=!!d||d==="",A;if(y){var P=b(b({prefixCls:"".concat(f,"-avatar")},ea(w,C)),Q(s));A=n("div",{class:"".concat(f,"-header")},[n(J,P,null)])}var T;if(w||C){var N;if(w){var B=b(b({prefixCls:"".concat(f,"-title")},ta(y,C)),Q(p));N=n(ve,B,null)}var O;if(C){var G=b(b({prefixCls:"".concat(f,"-paragraph")},aa(y,w)),Q(d));O=n(Qt,G,null)}T=n("div",{class:"".concat(f,"-content")},[N,O])}var Y=$(f,(x={},m(x,"".concat(f,"-with-avatar"),y),m(x,"".concat(f,"-active"),g),m(x,"".concat(f,"-rtl"),c.value==="rtl"),m(x,"".concat(f,"-round"),v),x));return n("div",{class:Y},[A,T])}return(l=a.default)===null||l===void 0?void 0:l.call(a)}}}),h=na,Me=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:k.any,formatter:k.any,precision:Number,prefix:k.any,suffix:k.any,title:k.any,loading:{type:Boolean,default:void 0}}},I=S({name:"AStatistic",props:D(Me(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,o){var a=o.slots,i=R("statistic",e),r=i.prefixCls,c=i.direction;return function(){var l,u,s,p,d,g,v,f=e.value,x=f===void 0?0:f,y=e.valueStyle,w=e.valueRender,C=r.value,A=(l=e.title)!==null&&l!==void 0?l:(u=a.title)===null||u===void 0?void 0:u.call(a),P=(s=e.prefix)!==null&&s!==void 0?s:(p=a.prefix)===null||p===void 0?void 0:p.call(a),T=(d=e.suffix)!==null&&d!==void 0?d:(g=a.suffix)===null||g===void 0?void 0:g.call(a),N=(v=e.formatter)!==null&&v!==void 0?v:a.formatter,B=n(Wt,z({"data-for-update":Date.now()},b(b({},e),{prefixCls:C,value:x,formatter:N})),null);return w&&(B=w(B)),n("div",{class:[C,m({},"".concat(C,"-rtl"),c.value==="rtl")]},[A&&n("div",{class:"".concat(C,"-title")},[A]),n(h,{paragraph:!1,loading:e.loading},{default:function(){return[n("div",{style:y,class:"".concat(C,"-content")},[P&&n("span",{class:"".concat(C,"-content-prefix")},[P]),B,T&&n("span",{class:"".concat(C,"-content-suffix")},[T])])]}})])}}}),ra=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function oa(t,e){var o=t,a=/\[[^\]]*]/g,i=(e.match(a)||[]).map(function(u){return u.slice(1,-1)}),r=e.replace(a,"[]"),c=ra.reduce(function(u,s){var p=Ve(s,2),d=p[0],g=p[1];if(u.indexOf(d)!==-1){var v=Math.floor(o/g);return o-=v*g,u.replace(new RegExp("".concat(d,"+"),"g"),function(f){var x=f.length;return Lt(v.toString(),x,"0")})}return u},r),l=0;return c.replace(a,function(){var u=i[l];return l+=1,u})}function ia(t,e){var o=e.format,a=o===void 0?"":o,i=new Date(t).getTime(),r=Date.now(),c=Math.max(i-r,0);return oa(c,a)}var la=1e3/30;function X(t){return new Date(t).getTime()}var ua=function(){return b(b({},Me()),{value:[Number,String],format:String,onFinish:Function,onChange:Function})},sa=S({name:"AStatisticCountdown",props:D(ua(),{format:"HH:mm:ss"}),setup:function(e,o){var a=o.emit,i=o.slots,r=ee(),c=ee(),l=function(){var v=e.value,f=X(v);f>=Date.now()?u():s()},u=function(){if(!r.value){var v=X(e.value);r.value=setInterval(function(){c.value.$forceUpdate(),v>Date.now()&&a("change",v-Date.now()),l()},la)}},s=function(){var v=e.value;if(r.value){clearInterval(r.value),r.value=void 0;var f=X(v);f<Date.now()&&a("finish")}},p=function(v){var f=v.value,x=v.config,y=e.format;return ia(f,b(b({},x),{format:y}))},d=function(v){return v};return Ge(function(){l()}),We(function(){l()}),Je(function(){s()}),function(){return n(I,z({ref:c},b(b({},le(e,["onFinish","onChange"])),{valueRender:d,formatter:p})),i)}}});I.Countdown=sa;I.install=function(t){return t.component(I.name,I),t.component(I.Countdown.name,I.Countdown),t};I.Countdown;var ca=function(){return b(b({},W()),{size:String,block:Boolean})},va=S({name:"ASkeletonButton",props:D(ca(),{size:"default"}),setup:function(e){var o=R("skeleton",e),a=o.prefixCls,i=V(function(){var r;return $(a.value,"".concat(a.value,"-element"),(r={},m(r,"".concat(a.value,"-active"),e.active),m(r,"".concat(a.value,"-block"),e.block),r))});return function(){return n("div",{class:i.value},[n(J,z(z({},e),{},{prefixCls:"".concat(a.value,"-button")}),null)])}}}),fe=va,fa=S({name:"ASkeletonInput",props:b(b({},le(W(),["shape"])),{size:String}),setup:function(e){var o=R("skeleton",e),a=o.prefixCls,i=V(function(){return $(a.value,"".concat(a.value,"-element"),m({},"".concat(a.value,"-active"),e.active))});return function(){return n("div",{class:i.value},[n(J,z(z({},e),{},{prefixCls:"".concat(a.value,"-input")}),null)])}}}),De=fa,da="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",pa=S({name:"ASkeletonImage",props:le(W(),["size","shape","active"]),setup:function(e){var o=R("skeleton",e),a=o.prefixCls,i=V(function(){return $(a.value,"".concat(a.value,"-element"))});return function(){return n("div",{class:i.value},[n("div",{class:"".concat(a.value,"-image")},[n("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",class:"".concat(a.value,"-image-svg")},[n("path",{d:da,class:"".concat(a.value,"-image-path")},null)])])])}}}),Ee=pa,ma=function(){return b(b({},W()),{shape:String})},ga=S({name:"ASkeletonAvatar",props:D(ma(),{size:"default",shape:"circle"}),setup:function(e){var o=R("skeleton",e),a=o.prefixCls,i=V(function(){return $(a.value,"".concat(a.value,"-element"),m({},"".concat(a.value,"-active"),e.active))});return function(){return n("div",{class:i.value},[n(J,z(z({},e),{},{prefixCls:"".concat(a.value,"-avatar")}),null)])}}}),je=ga;h.Button=fe;h.Avatar=je;h.Input=De;h.Image=Ee;h.Title=ve;h.install=function(t){return t.component(h.name,h),t.component(h.Button.name,fe),t.component(h.Avatar.name,je),t.component(h.Input.name,De),t.component(h.Image.name,Ee),t.component(h.Title.name,ve),t};var _a=function(){return{prefixCls:String,color:String,dot:k.any,pending:{type:Boolean,default:void 0},position:k.oneOf(be("left","right","")).def(""),label:k.any}},U=S({name:"ATimelineItem",props:D(_a(),{color:"blue",pending:!1}),slots:["dot","label"],setup:function(e,o){var a=o.slots,i=R("timeline",e),r=i.prefixCls;return function(){var c,l,u,s,p,d=e.color,g=d===void 0?"":d,v=e.pending,f=e.label,x=f===void 0?(u=a.label)===null||u===void 0?void 0:u.call(a):f,y=e.dot,w=y===void 0?(s=a.dot)===null||s===void 0?void 0:s.call(a):y,C=$((c={},m(c,"".concat(r.value,"-item"),!0),m(c,"".concat(r.value,"-item-pending"),v),c)),A=$((l={},m(l,"".concat(r.value,"-item-head"),!0),m(l,"".concat(r.value,"-item-head-custom"),w),m(l,"".concat(r.value,"-item-head-").concat(g),!0),l)),P=/blue|red|green|gray/.test(g||"")?void 0:g;return n("li",{class:C},[x&&n("div",{class:"".concat(r.value,"-item-label")},[x]),n("div",{class:"".concat(r.value,"-item-tail")},null),n("div",{class:A,style:{borderColor:P,color:P}},[w]),n("div",{class:"".concat(r.value,"-item-content")},[(p=a.default)===null||p===void 0?void 0:p.call(a)])])}}}),ba=function(){return{prefixCls:String,pending:k.any,pendingDot:k.any,reverse:{type:Boolean,default:void 0},mode:k.oneOf(be("left","alternate","right",""))}},L=S({name:"ATimeline",props:D(ba(),{reverse:!1,mode:""}),slots:["pending","pendingDot"],setup:function(e,o){var a=o.slots,i=R("timeline",e),r=i.prefixCls,c=i.direction,l=function(s,p){var d=s.props||{};return e.mode==="alternate"?d.position==="right"?"".concat(r.value,"-item-right"):d.position==="left"||p%2===0?"".concat(r.value,"-item-left"):"".concat(r.value,"-item-right"):e.mode==="left"?"".concat(r.value,"-item-left"):e.mode==="right"||d.position==="right"?"".concat(r.value,"-item-right"):""};return function(){var u,s,p,d,g=e.pending,v=g===void 0?(s=a.pending)===null||s===void 0?void 0:s.call(a):g,f=e.pendingDot,x=f===void 0?(p=a.pendingDot)===null||p===void 0?void 0:p.call(a):f,y=e.reverse,w=e.mode,C=typeof v=="boolean"?null:v,A=Ye((d=a.default)===null||d===void 0?void 0:d.call(a)),P=v?n(U,{pending:!!v,dot:x||n(Ze,null,null)},{default:function(){return[C]}}):null;P&&A.push(P);var T=y?A.reverse():A,N=T.length,B="".concat(r.value,"-item-last"),O=T.map(function(E,M){var q=M===N-2?B:"",Oe=M===N-1?B:"";return Ke(E,{class:$([!y&&!!v?q:Oe,l(E,M)])})}),G=T.some(function(E){var M,q;return!!(((M=E.props)===null||M===void 0?void 0:M.label)||((q=E.children)===null||q===void 0?void 0:q.label))}),Y=$(r.value,(u={},m(u,"".concat(r.value,"-pending"),!!v),m(u,"".concat(r.value,"-reverse"),!!y),m(u,"".concat(r.value,"-").concat(w),!!w&&!G),m(u,"".concat(r.value,"-label"),G),m(u,"".concat(r.value,"-rtl"),c.value==="rtl"),u));return n("ul",{class:Y},[O])}}});L.Item=U;L.install=function(t){return t.component(L.name,L),t.component(U.name,U),t};const xa={style:{height:"260px"}},Ca=S({setup(t){const e={xAxis:{},yAxis:{},grid:{left:"2%",right:"2%",top:"2%",bottom:"2%",containLabel:!0},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]};return(o,a)=>{const i=xe;return F(),H("div",xa,[n(i,{option:e})])}}}),Sa={style:{height:"260px"}},ya=S({setup(t){const e={tooltip:{trigger:"axis"},grid:{left:"2%",right:"2%",top:"2%",bottom:"2%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Email",type:"line",stack:"Total",smooth:!0,data:[119,76,246,270,57,225,122]},{name:"Union Ads",type:"line",stack:"Total",smooth:!0,data:[96,214,205,98,265,218,12]},{name:"Video Ads",type:"line",stack:"Total",smooth:!0,data:[50,74,295,269,74,274,253]},{name:"Direct",type:"line",stack:"Total",smooth:!0,data:[245,172,6,50,47,86,31]},{name:"Search Engine",type:"line",stack:"Total",smooth:!0,data:[117,19,237,166,158,166,259]}]};return(o,a)=>{const i=xe;return F(),H("div",Sa,[n(i,{option:e})])}}});const ha={class:"dashboard"},ka={class:"m-t16"},wa={class:"bg-ffffff"},$a={class:"m-t16"},Aa=ue("Create a services site 2015-09-01"),Pa=ue("Solve initial network problems 2015-09-01"),Ra=ue("Technical testing 2015-09-01"),Ta=S({setup(t){const e=ee(!0);return setTimeout(()=>e.value=!1,600),(o,a)=>{const i=fe,r=Xe,c=et,l=I,u=j,s=tt,p=U,d=L;return F(),H("div",ha,[e.value?(F(),H(de,{key:0},[n(i,{active:"",block:"",size:"large"}),n(c,{type:"flex",gutter:16},{default:_(()=>[n(r,{flex:"auto"},{default:_(()=>[n(i,{active:"",block:"",size:"large",class:"m-t16"}),n(i,{active:"",block:"",size:"large",class:"m-t16"}),n(i,{active:"",block:"",size:"large",class:"m-t16"})]),_:1}),n(r,{flex:"0 1 460px"},{default:_(()=>[n(i,{active:"",block:"",size:"large",class:"m-t16"}),n(i,{active:"",block:"",size:"large",class:"m-t16"}),n(i,{active:"",block:"",size:"large",class:"m-t16"})]),_:1})]),_:1})],64)):(F(),H(de,{key:1},[n(u,{title:"\u6570\u636E\u6982\u89C8",bordered:!1},{default:_(()=>[n(c,{type:"flex"},{default:_(()=>[n(r,{class:"p-l56 p-tb8",span:6},{default:_(()=>[n(l,{title:"Active Users",value:112893,style:{"margin-right":"50px"}})]),_:1}),n(r,{class:"p-l56 p-tb8",span:6},{default:_(()=>[n(l,{title:"Account Balance (CNY)",precision:2,value:112893})]),_:1}),n(r,{class:"p-l56 p-tb8",span:6},{default:_(()=>[n(l,{title:"Active Users",value:112893,style:{"margin-right":"50px"}})]),_:1}),n(r,{class:"p-l56 p-tb8",span:6},{default:_(()=>[n(l,{title:"Account Balance (CNY)",precision:2,value:112893})]),_:1})]),_:1})]),_:1}),n(c,{type:"flex",gutter:16},{default:_(()=>[n(r,{flex:"auto",class:"m-t16"},{default:_(()=>[n(u,{title:"\u6563\u70B9\u56FE",bordered:!1},{default:_(()=>[n(Ca)]),_:1}),K("div",ka,[n(u,{title:"\u6298\u7EBF\u56FE",bordered:!1},{default:_(()=>[n(ya)]),_:1})])]),_:1}),n(r,{flex:"400px",class:"m-t16"},{default:_(()=>[K("div",wa,[n(u,{title:"\u8FDB\u5EA6\u72B6\u6001",bordered:!1},{default:_(()=>[n(s,{class:"m-b8",percent:30}),n(s,{class:"m-b8",percent:50,status:"active"}),n(s,{class:"m-b8",percent:70,status:"exception"}),n(s,{class:"m-b8",percent:100}),n(s,{percent:50,"show-info":!1})]),_:1})]),K("div",$a,[n(u,{title:"\u6D41\u7A0B\u72B6\u6001",bordered:!1},{default:_(()=>[n(d,{pending:"Recording..."},{default:_(()=>[n(p,null,{default:_(()=>[Aa]),_:1}),n(p,null,{default:_(()=>[Pa]),_:1}),n(p,null,{default:_(()=>[Ra]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})],64))])}}});var za=Qe(Ta,[["__scopeId","data-v-e92764a0"]]);export{za as default};