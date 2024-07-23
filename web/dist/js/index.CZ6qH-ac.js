import{A as e}from"./el-input.Jahd1Hjo.js";import{E as a,a as t}from"./el-col.B6pZW_u-.js";import{_ as s}from"./index.DWmRnyqy.js";import{E as o}from"./el-card.C6FIB03H.js";/* empty css               */import{E as i,a as l}from"./el-select.Ds80L7A8.js";import"./el-popper.ByQXy_St.js";import{a as n,d as r,b as d,e as m,c as u,f as p,g as c}from"./index.GRmS88Jp.js";import{c as h}from"./convert.B8xZ5nZn.js";import{d as v}from"./dayjs.min.BglOJP2w.js";import{d as y,r as f,x as b,o as g,X as x,D as _,k as w,f as j,m as S,w as A,F as E,a as C,u as k,Y as F,S as R,t as G,B as P,C as L,_ as U}from"./index.vLuz2ctl.js";import"./index.CDVZeGTi.js";import"./use-form-item.DGQHv2C0.js";import"./index.gz-8guSF.js";import"./isEqual.DYDatXy1.js";import"./_Uint8Array.DGEuPrOq.js";import"./index.BEJnBAIn.js";import"./scroll.CNU-wLPw.js";import"./castArray.DmlTlyrk.js";import"./focus-trap.BSN58JPK.js";const z={tooltip:{trigger:"axis",formatter:function(e){return(e=e[0]).value+"%"},axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:[{name:"CPU 使用率"}],left:"right"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]},yAxis:[{type:"value",axisLabel:{show:!0,formatter:"{value} %"}}],series:[{name:"CPU 使用率",type:"line",smooth:!0,lineStyle:{width:2},data:[0,0,0,0,0,0,0,0,0,0]}]},I={tooltip:{trigger:"axis",formatter:function(e){return(e=e[0]).value+"%"},axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["内存使用率"],left:"right"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]},yAxis:[{type:"value",axisLabel:{show:!0,formatter:"{value} %"}}],series:[{name:"内存使用率",type:"line",smooth:!0,lineStyle:{width:2},data:[0,0,0,0,0,0,0,0,0,0]}]},K={tooltip:{trigger:"axis",formatter:function(e){let a="";return e.forEach((e=>{const t=["bps","Kbps","Mbps","Gbps"];let s=0;for(;e.value>=1024&&s<t.length-1;)e.value/=1024,s++;a+=e.seriesName+": "+e.value.toFixed(2)+" "+t[s]+"<br/>"})),a},axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Read","Write"],left:"right"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]},yAxis:[{type:"value",axisLabel:{show:!0,formatter:function(e){const a=["bps","Kbps","Mbps","Gbps"];let t=0;for(;e>=1024&&t<a.length-1;)e/=1024,t++;return e.toFixed(2)+" "+a[t]}}}],series:[{name:"Read",type:"line",smooth:!0,lineStyle:{width:2},data:[0,0,0,0,0,0,0,0,0,0]},{name:"Write",type:"line",smooth:!0,lineStyle:{width:2},data:[0,0,0,0,0,0,0,0,0,0]}]},M={tooltip:{trigger:"axis",formatter:function(e){let a="";return e.forEach((e=>{const t=["bps","Kbps","Mbps","Gbps"];let s=0;for(;e.value>=1024&&s<t.length-1;)e.value/=1024,s++;a+=e.seriesName+": "+e.value.toFixed(2)+" "+t[s]+"<br/>"})),a},axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Receive","Send"],left:"right"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]},yAxis:[{type:"value",axisLabel:{show:!0,formatter:function(e){const a=["bps","Kbps","Mbps","Gbps"];let t=0;for(;e>=1024&&t<a.length-1;)e/=1024,t++;return e.toFixed(2)+" "+a[t]}}}],series:[{name:"Receive",type:"line",smooth:!0,lineStyle:{width:2},data:[0,0,0,0,0,0,0,0,0,0]},{name:"Send",type:"line",smooth:!0,lineStyle:{width:2},data:[0,0,0,0,0,0,0,0,0,0]}]},W=e=>(P("data-v-cdea5803"),e=e(),L(),e),$={class:"am-host-header"},V={class:"am-host-operator"},q=W((()=>j("span",null,"时间密度：",-1))),B={class:"am-host-content"},D=W((()=>j("div",{class:"am-host-container__image-title"},"CPU 总使用率",-1))),N={class:"am-host-container__image-description"},H=W((()=>j("div",{class:"am-host-container__image-title"},"内存使用率",-1))),J={class:"am-host-container__image-description"},X=W((()=>j("div",{class:"am-host-container__image-title"},"磁盘使用率",-1))),Y=W((()=>j("div",{class:"am-host-container__image-title"},"流量曲线图",-1))),O=U(y({__name:"index",setup(y){const P=f(600),L=[{value:120,label:"2分钟"},{value:300,label:"5分钟"},{value:600,label:"10分钟"},{value:1800,label:"30分钟"},{value:3600,label:"1 小时"},{value:43200,label:"12小时"},{value:86400,label:"24小时"}],U=f("0.0%"),W=async()=>{const{data:e}=await n();U.value=e.percent.toFixed(2)+"%"},O=b(z),Q=async()=>{const a={start_time:v().unix()-P.value,end_time:v().unix()},{data:t}=await r(a),s=t.data;e(O,"xAxis.data",s.map((e=>v(1e3*e.timestamp).hour()+":"+v(1e3*e.timestamp).minute()))),e(O,"legend.data",["CPU使用率"]),e(O,"series",[{name:"CPU使用率",data:s.map((e=>e.value.toFixed(2))),type:"line",smooth:!0,showSymbol:!1}])},T=f({percent:"0%",total:"0",used:"0"}),Z=async()=>{const{data:e}=await d();T.value.percent=e.percent.toFixed(2)+"%",T.value.total=h(e.total),T.value.used=h(e.used)},ee=b(I),ae=async()=>{const a={start_time:v().unix()-P.value,end_time:v().unix()},{data:t}=await m(a),s=t.data;e(ee,"xAxis.data",s.map((e=>v(1e3*e.timestamp).hour()+":"+v(1e3*e.timestamp).minute()))),e(ee,"legend.data",["内存使用率"]),e(ee,"series",[{name:"内存使用率",data:s.map((e=>e.value.toFixed(2))),type:"line",smooth:!0,showSymbol:!1}])},te=f([]),se=async()=>{const{data:e}=await u();te.value=[],e.info.map((e=>{te.value.push({device:e.device,total:h(e.total),used:h(e.used),percent:e.percent.toFixed(2)+"%"})}))},oe=b(K),ie=async()=>{const a={start_time:v().unix()-P.value,end_time:v().unix()},{data:t}=await p(a),s=t;e(oe,"xAxis.data",s.usage[0].data.map((e=>v(1e3*e.timestamp).hour()+":"+v(1e3*e.timestamp).minute()))),e(oe,"legend.data",(e=>{let a=[];return["Read","Write"].forEach((t=>{e.forEach((e=>{a.push(e.device+"_"+t)}))})),a})(s.usage)),e(oe,"series",(e=>{let a=[];return["Read","Write"].forEach((t=>{e.forEach((e=>{"Read"===t?a.push({name:e.device+"_"+t,data:e.data.map((e=>e.io_read)),type:"line",smooth:!0,showSymbol:!0,symbolSize:2,hoverAnimation:!0}):a.push({name:e.device+"_"+t,data:e.data.map((e=>e.io_write)),type:"line",smooth:!0,showSymbol:!0,symbolSize:2,hoverAnimation:!0})}))})),a})(s.usage))},le=f([]),ne=b(M),re=async()=>{const a={start_time:v().unix()-P.value,end_time:v().unix()},{data:t}=await c(a),s=t;le.value=[],s.usage.map((e=>{le.value.push({ethernet:e.ethernet,read:h(e.data[e.data.length-1].bytes_recv),write:h(e.data[e.data.length-1].bytes_sent)})})),e(ne,"xAxis.data",s.usage[0].data.map((e=>v(1e3*e.timestamp).hour()+":"+v(1e3*e.timestamp).minute()))),e(ne,"legend.data",(e=>{let a=[];return["Receive","Send"].forEach((t=>{e.forEach((e=>{a.push(e.ethernet+"_"+t)}))})),a})(s.usage)),e(ne,"series",(e=>{let a=[];return["Receive","Send"].forEach((t=>{e.forEach((e=>{"Receive"===t?a.push({name:e.ethernet+"_"+t,data:e.data.map((e=>e.bytes_recv)),type:"line",showSymbol:!0,symbolSize:2,hoverAnimation:!0,smooth:!0}):a.push({name:e.ethernet+"_"+t,data:e.data.map((e=>e.bytes_sent)),type:"line",showSymbol:!0,symbolSize:2,hoverAnimation:!0,smooth:!0})}))})),a})(s.usage))},de=f();return g((()=>{W(),Q(),Z(),ae(),se(),ie(),re(),de.value=setInterval((()=>{W(),Q(),Z(),ae(),se(),ie(),re()}),5e3)})),x((()=>{clearInterval(de.value)})),_((()=>P.value),(()=>{W(),Q(),Z(),ae(),se(),ie(),re()})),(e,n)=>{const r=l,d=i,m=o,u=s,p=t,c=a;return C(),w(E,null,[j("div",$,[j("span",{onClick:n[0]||(n[0]=a=>e.$router.push("/host/monitor"))},"监控"),j("span",{onClick:n[1]||(n[1]=a=>e.$router.push("/host/file"))},"文件"),j("span",{onClick:n[2]||(n[2]=a=>e.$router.push("/host/terminal"))},"终端"),j("span",{onClick:n[3]||(n[3]=a=>e.$router.push("/host/settings"))},"设置")]),j("div",V,[S(m,{shadow:"never"},{default:A((()=>[q,S(d,{modelValue:k(P),"onUpdate:modelValue":n[4]||(n[4]=e=>F(P)?P.value=e:null),placeholder:"Select",size:"default",style:{width:"120px"}},{default:A((()=>[(C(),w(E,null,R(L,(e=>S(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})]),j("div",B,[S(c,{gutter:4},{default:A((()=>[S(p,{span:12},{default:A((()=>[S(m,{shadow:"never"},{default:A((()=>[S(u,{option:k(O)},{default:A((()=>[D,j("div",N,"百分比： "+G(k(U)),1)])),_:1},8,["option"])])),_:1})])),_:1}),S(p,{span:12},{default:A((()=>[S(m,{shadow:"never"},{default:A((()=>[S(u,{option:k(ee)},{default:A((()=>[H,j("div",J," 总量："+G(k(T).total)+" 使用："+G(k(T).used)+" 百分比： "+G(k(T).percent),1)])),_:1},8,["option"])])),_:1})])),_:1})])),_:1}),S(c,{gutter:4},{default:A((()=>[S(p,{span:12},{default:A((()=>[S(m,{shadow:"never"},{default:A((()=>[S(u,{option:k(oe)},{default:A((()=>[X,(C(!0),w(E,null,R(k(te),((e,a)=>(C(),w("div",{key:a,class:"am-host-container__image-description"},G(e.device)+" 总量："+G(e.total)+" 使用："+G(e.used)+" 百分比： "+G(e.percent),1)))),128))])),_:1},8,["option"])])),_:1})])),_:1}),S(p,{span:12},{default:A((()=>[S(m,{shadow:"never"},{default:A((()=>[S(u,{option:k(ne)},{default:A((()=>[Y,(C(!0),w(E,null,R(k(le),((e,a)=>(C(),w("div",{key:a,class:"am-host-container__image-description"},G(e.ethernet)+" 接收："+G(e.read)+" 发送："+G(e.write),1)))),128))])),_:1},8,["option"])])),_:1})])),_:1})])),_:1})])],64)}}}),[["__scopeId","data-v-cdea5803"]]);export{O as default};
