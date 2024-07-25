import{P as e,d as o,c as n,r as t,x as a,D as s,o as l,K as r,aa as i,R as c,a as u,b as d,w as p,e as f,m,f as v,n as g,g as h,l as y,k as b,h as C,i as E,t as x,a7 as w,j as B,A as k,v as M,T,q as I,p as R,s as S,ab as _,O as j,W as z}from"./index.uDfNkopd.js";import{E as A}from"./index.r1fn5pBw.js";import{E as P}from"./index.CF_PnOnI.js";import{E as L,u as V,a as O}from"./use-dialog.UpcB4Oaf.js";import{k as $,e as H,_ as D,E as K,W as q,u as U,T as F,f as W,X as N,g as X}from"./message.BD1JyyvK.js";import{o as Z}from"./aria.C-hsWcn7.js";import{E as G}from"./focus-trap.Y0jdQh1F.js";import{u as J}from"./use-form-item.Clb94WV_.js";import{u as Q}from"./el-dialog.pnrbtjWI.js";const Y="_trap-focus-children",ee=[],oe=e=>{if(0===ee.length)return;const o=ee[ee.length-1][Y];if(o.length>0&&e.code===H.tab){if(1===o.length)return e.preventDefault(),void(document.activeElement!==o[0]&&o[0].focus());const n=e.shiftKey,t=e.target===o[0],a=e.target===o[o.length-1];t&&n&&(e.preventDefault(),o[o.length-1].focus()),a&&!n&&(e.preventDefault(),o[0].focus())}},ne=o({name:"ElMessageBox",directives:{TrapFocus:{beforeMount(e){e[Y]=Z(e),ee.push(e),ee.length<=1&&document.addEventListener("keydown",oe)},updated(o){e((()=>{o[Y]=Z(o)}))},unmounted(){ee.shift(),0===ee.length&&document.removeEventListener("keydown",oe)}}},components:{ElButton:A,ElFocusTrap:G,ElInput:P,ElOverlay:L,ElIcon:K,...q},inheritAttrs:!1,props:{buttonSize:{type:String,validator:e=>["",...$].includes(e)},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(o,{emit:c}){const{locale:u,zIndex:d,ns:p,size:f}=U("message-box",n((()=>o.buttonSize))),{t:m}=u,{nextZIndex:v}=d,g=t(!1),h=a({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:v()}),y=n((()=>{const e=h.type;return{[p.bm("icon",e)]:e&&F[e]}})),b=J(),C=J(),E=n((()=>h.icon||F[h.type]||"")),x=n((()=>!!h.message)),w=t(),B=t(),k=t(),M=t(),T=t(),I=n((()=>h.confirmButtonClass));s((()=>h.inputValue),(async n=>{await e(),"prompt"===o.boxType&&null!==n&&P()}),{immediate:!0}),s((()=>g.value),(n=>{var t,a;n&&("prompt"!==o.boxType&&(h.autofocus?k.value=null!=(a=null==(t=T.value)?void 0:t.$el)?a:w.value:k.value=w.value),h.zIndex=v()),"prompt"===o.boxType&&(n?e().then((()=>{var e;M.value&&M.value.$el&&(h.autofocus?k.value=null!=(e=L())?e:w.value:k.value=w.value)})):(h.editorErrorMessage="",h.validateError=!1))}));const R=n((()=>o.draggable)),S=n((()=>o.overflow));function _(){g.value&&(g.value=!1,e((()=>{h.action&&c("action",h.action)})))}Q(w,B,R,S),l((async()=>{await e(),o.closeOnHashChange&&window.addEventListener("hashchange",_)})),r((()=>{o.closeOnHashChange&&window.removeEventListener("hashchange",_)}));const j=()=>{o.closeOnClickModal&&A(h.distinguishCancelAndClose?"close":"cancel")},z=O(j),A=e=>{var n;("prompt"!==o.boxType||"confirm"!==e||P())&&(h.action=e,h.beforeClose?null==(n=h.beforeClose)||n.call(h,e,h,_):_())},P=()=>{if("prompt"===o.boxType){const e=h.inputPattern;if(e&&!e.test(h.inputValue||""))return h.editorErrorMessage=h.inputErrorMessage||m("el.messagebox.error"),h.validateError=!0,!1;const o=h.inputValidator;if("function"==typeof o){const e=o(h.inputValue);if(!1===e)return h.editorErrorMessage=h.inputErrorMessage||m("el.messagebox.error"),h.validateError=!0,!1;if("string"==typeof e)return h.editorErrorMessage=e,h.validateError=!0,!1}}return h.editorErrorMessage="",h.validateError=!1,!0},L=()=>{const e=M.value.$refs;return e.input||e.textarea},$=()=>{A("close")};return o.lockScroll&&V(g),{...i(h),ns:p,overlayEvent:z,visible:g,hasMessage:x,typeClass:y,contentId:b,inputId:C,btnSize:f,iconComponent:E,confirmButtonClasses:I,rootRef:w,focusStartRef:k,headerRef:B,inputRef:M,confirmRef:T,doClose:_,handleClose:$,onCloseRequested:()=>{o.closeOnPressEscape&&$()},handleWrapperClick:j,handleInputEnter:e=>{if("textarea"!==h.inputType)return e.preventDefault(),A("confirm")},handleAction:A,t:m}}}),te=["aria-label","aria-describedby"],ae=["aria-label"],se=["id"];var le=D(ne,[["render",function(e,o,n,t,a,s){const l=c("el-icon"),r=c("close"),i=c("el-input"),I=c("el-button"),R=c("el-focus-trap"),S=c("el-overlay");return u(),d(T,{name:"fade-in-linear",onAfterLeave:o[11]||(o[11]=o=>e.$emit("vanish")),persisted:""},{default:p((()=>[f(m(S,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:p((()=>[v("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:g(`${e.ns.namespace.value}-overlay-message-box`),onClick:o[8]||(o[8]=(...o)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...o)),onMousedown:o[9]||(o[9]=(...o)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...o)),onMouseup:o[10]||(o[10]=(...o)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...o))},[m(R,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:p((()=>[v("div",{ref:"rootRef",class:g([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:h(e.customStyle),tabindex:"-1",onClick:o[7]||(o[7]=y((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(u(),b("div",{key:0,ref:"headerRef",class:g([e.ns.e("header"),{"show-close":e.showClose}])},[v("div",{class:g(e.ns.e("title"))},[e.iconComponent&&e.center?(u(),d(l,{key:0,class:g([e.ns.e("status"),e.typeClass])},{default:p((()=>[(u(),d(C(e.iconComponent)))])),_:1},8,["class"])):E("v-if",!0),v("span",null,x(e.title),1)],2),e.showClose?(u(),b("button",{key:0,type:"button",class:g(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:o[0]||(o[0]=o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:o[1]||(o[1]=w(y((o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[m(l,{class:g(e.ns.e("close"))},{default:p((()=>[m(r)])),_:1},8,["class"])],42,ae)):E("v-if",!0)],2)):E("v-if",!0),v("div",{id:e.contentId,class:g(e.ns.e("content"))},[v("div",{class:g(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(u(),d(l,{key:0,class:g([e.ns.e("status"),e.typeClass])},{default:p((()=>[(u(),d(C(e.iconComponent)))])),_:1},8,["class"])):E("v-if",!0),e.hasMessage?(u(),b("div",{key:1,class:g(e.ns.e("message"))},[B(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(u(),d(C(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(u(),d(C(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:p((()=>[k(x(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):E("v-if",!0)],2),f(v("div",{class:g(e.ns.e("input"))},[m(i,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=o=>e.inputValue=o),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:g({invalid:e.validateError}),onKeydown:w(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),v("div",{class:g(e.ns.e("errormsg")),style:h({visibility:e.editorErrorMessage?"visible":"hidden"})},x(e.editorErrorMessage),7)],2),[[M,e.showInput]])],10,se),v("div",{class:g(e.ns.e("btns"))},[e.showCancelButton?(u(),d(I,{key:0,loading:e.cancelButtonLoading,class:g([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:o[3]||(o[3]=o=>e.handleAction("cancel")),onKeydown:o[4]||(o[4]=w(y((o=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:p((()=>[k(x(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):E("v-if",!0),f(m(I,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:g([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:o[5]||(o[5]=o=>e.handleAction("confirm")),onKeydown:o[6]||(o[6]=w(y((o=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:p((()=>[k(x(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[M,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,te)])),_:3},8,["z-index","overlay-class","mask"]),[[M,e.visible]])])),_:3})}],["__file","index.vue"]]);const re=new Map,ie=(e,o,n=null)=>{const t=m(le,e,z(e.message)||R(e.message)?{default:z(e.message)?e.message:()=>e.message}:null);return t.appContext=n,S(t,o),(e=>{let o=document.body;return e.appendTo&&(I(e.appendTo)&&(o=document.querySelector(e.appendTo)),X(e.appendTo)&&(o=e.appendTo),X(o)||(o=document.body)),o})(e).appendChild(o.firstElementChild),t.component},ce=(e,o)=>{const n=document.createElement("div");e.onVanish=()=>{S(null,n),re.delete(a)},e.onAction=o=>{const n=re.get(a);let s;s=e.showInput?{value:a.inputValue,action:o}:o,e.callback?e.callback(s,t.proxy):"cancel"===o||"close"===o?e.distinguishCancelAndClose&&"cancel"!==o?n.reject("close"):n.reject("cancel"):n.resolve(s)};const t=ie(e,n,o),a=t.proxy;for(const s in e)_(e,s)&&!_(a.$props,s)&&(a[s]=e[s]);return a.visible=!0,a};function ue(e,o=null){if(!W)return Promise.reject();let n;return I(e)||R(e)?e={message:e}:n=e.callback,new Promise(((t,a)=>{const s=ce(e,null!=o?o:ue._context);re.set(s,{options:e,callback:n,resolve:t,reject:a})}))}const de={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{ue[e]=function(e){return(o,n,t,a)=>{let s="";return j(n)?(t=n,s=""):s=N(n)?"":n,ue(Object.assign({title:s,message:o,type:"",...de[e]},t,{boxType:e}),a)}}(e)})),ue.close=()=>{re.forEach(((e,o)=>{o.doClose()})),re.clear()},ue._context=null;const pe=ue;pe.install=e=>{pe._context=e._context,e.config.globalProperties.$msgbox=pe,e.config.globalProperties.$messageBox=pe,e.config.globalProperties.$alert=pe.alert,e.config.globalProperties.$confirm=pe.confirm,e.config.globalProperties.$prompt=pe.prompt};const fe=pe;export{fe as E};
