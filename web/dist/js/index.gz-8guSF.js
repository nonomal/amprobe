import{d as s,c as a,a as e,k as l,f as o,j as n,n as t,u as c,b as i,w as r,m as u,l as p,i as f,g as d,T as m}from"./index.vLuz2ctl.js";import{b as k,h as g,D as y,k as b,J as v,E as C,_ as h,n as _}from"./el-input.Jahd1Hjo.js";const E=k({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:g},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),B={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},S=s({name:"ElTag"});const T=_(h(s({...S,props:E,emits:B,setup(s,{emit:k}){const g=s,h=y(),_=b("tag"),E=a((()=>{const{type:s,hit:a,effect:e,closable:l,round:o}=g;return[_.b(),_.is("closable",l),_.m(s||"primary"),_.m(h.value),_.m(e),_.is("hit",a),_.is("round",o)]})),B=s=>{k("close",s)},S=s=>{k("click",s)};return(s,a)=>s.disableTransitions?(e(),l("span",{key:0,class:t(c(E)),style:d({backgroundColor:s.color}),onClick:S},[o("span",{class:t(c(_).e("content"))},[n(s.$slots,"default")],2),s.closable?(e(),i(c(C),{key:0,class:t(c(_).e("close")),onClick:p(B,["stop"])},{default:r((()=>[u(c(v))])),_:1},8,["class","onClick"])):f("v-if",!0)],6)):(e(),i(m,{key:1,name:`${c(_).namespace.value}-zoom-in-center`,appear:""},{default:r((()=>[o("span",{class:t(c(E)),style:d({backgroundColor:s.color}),onClick:S},[o("span",{class:t(c(_).e("content"))},[n(s.$slots,"default")],2),s.closable?(e(),i(c(C),{key:0,class:t(c(_).e("close")),onClick:p(B,["stop"])},{default:r((()=>[u(c(v))])),_:1},8,["class","onClick"])):f("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","tag.vue"]]));export{T as E,E as t};
