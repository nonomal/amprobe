import{b as e,d as t,n as s,_ as a,p as i}from"./message.BD1JyyvK.js";import{d as r,c as o,a as l,k as n,n as d,u as c,j as f,i as p,g as u}from"./index.uDfNkopd.js";const v=e({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:t(String),default:"solid"}}),y=r({name:"ElDivider"});const m=i(a(r({...y,props:v,setup(e){const t=e,a=s("divider"),i=o((()=>a.cssVar({"border-style":t.borderStyle})));return(e,t)=>(l(),n("div",{class:d([c(a).b(),c(a).m(e.direction)]),style:u(c(i)),role:"separator"},[e.$slots.default&&"vertical"!==e.direction?(l(),n("div",{key:0,class:d([c(a).e("text"),c(a).is(e.contentPosition)])},[f(e.$slots,"default")],2)):p("v-if",!0)],6))}}),[["__file","divider.vue"]]));export{m as E};
