import{r as e,c as o,w as a,q as l,j as t,S as s,d as n,s as r,o as d,x as i,m as u,v as c,E as f,u as p,D as v,P as y,H as m,n as b,e as C,f as h,B as k,C as g,G as A,I as B,a6 as w}from"./index.CWaAX4xr.js";import{d as F,p as x,e as S,f as E,R as D,U as I,m as L,V as R,t as $,v as O,O as z,h as _,N as P,E as T,W as j,_ as N,w as q}from"./el-input.DbwAcvyl.js";import{a as M,E as V}from"./index.BXhqqwsx.js";import{U as H}from"./index.DjAzOcH0.js";import{u as U}from"./use-form-item.BVm2y5eZ.js";import{i as G,E as W}from"./focus-trap.D7-xhyEd.js";const Z=F({center:Boolean,alignCenter:Boolean,closeIcon:{type:x},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),J={close:()=>!0},K=F({...Z,appendToBody:Boolean,appendTo:{type:S(String),default:"body"},beforeClose:{type:S(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Q={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[H]:e=>E(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},X=(n,r)=>{var d;const i=s().emit,{nextZIndex:u}=D();let c="";const f=U(),p=U(),v=e(!1),y=e(!1),m=e(!1),b=e(null!=(d=n.zIndex)?d:u());let C,h;const k=I("namespace",R),g=o((()=>{const e={},o=`--${k.value}-dialog`;return n.fullscreen||(n.top&&(e[`${o}-margin-top`]=n.top),n.width&&(e[`${o}-width`]=L(n.width))),e})),A=o((()=>n.alignCenter?{display:"flex"}:{}));function B(){null==h||h(),null==C||C(),n.openDelay&&n.openDelay>0?({stop:C}=$((()=>x()),n.openDelay)):x()}function w(){null==C||C(),null==h||h(),n.closeDelay&&n.closeDelay>0?({stop:h}=$((()=>S()),n.closeDelay)):S()}function F(){n.beforeClose?n.beforeClose((function(e){e||(y.value=!0,v.value=!1)})):w()}function x(){O&&(v.value=!0)}function S(){v.value=!1}return n.lockScroll&&M(v),a((()=>n.modelValue),(e=>{e?(y.value=!1,B(),m.value=!0,b.value=G(n.zIndex)?u():b.value++,l((()=>{i("open"),r.value&&(r.value.scrollTop=0)}))):v.value&&w()})),a((()=>n.fullscreen),(e=>{r.value&&(e?(c=r.value.style.transform,r.value.style.transform=""):r.value.style.transform=c)})),t((()=>{n.modelValue&&(v.value=!0,m.value=!0,B())})),{afterEnter:function(){i("opened")},afterLeave:function(){i("closed"),i(H,!1),n.destroyOnClose&&(m.value=!1)},beforeLeave:function(){i("close")},handleClose:F,onModalClick:function(){n.closeOnClickModal&&F()},close:w,doClose:S,onOpenAutoFocus:function(){i("openAutoFocus")},onCloseAutoFocus:function(){i("closeAutoFocus")},onCloseRequested:function(){n.closeOnPressEscape&&F()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:f,bodyId:p,closed:y,style:g,overlayDialogStyle:A,rendered:m,visible:v,zIndex:b}},Y=F({...K,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),ee=Q,oe=["aria-label","aria-labelledby","aria-describedby"],ae=["id","aria-level"],le=["aria-label"],te=["id"],se=n({name:"ElDrawer",inheritAttrs:!1});const ne=q(N(n({...se,props:Y,emits:ee,setup(a,{expose:l}){const t=a,s=r();z({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},o((()=>!!s.title)));const n=e(),F=e(),x=_("drawer"),{t:S}=P(),{afterEnter:E,afterLeave:D,beforeLeave:I,visible:R,rendered:$,titleId:O,bodyId:N,zIndex:q,onModalClick:M,onOpenAutoFocus:H,onCloseAutoFocus:U,onFocusoutPrevented:G,onCloseRequested:Z,handleClose:J}=X(t,n),K=o((()=>"rtl"===t.direction||"ltr"===t.direction)),Q=o((()=>L(t.size)));return l({handleClose:J,afterEnter:E,afterLeave:D}),(e,o)=>(d(),i(w,{to:"body",disabled:!e.appendToBody},[u(B,{name:p(x).b("fade"),onAfterEnter:p(E),onAfterLeave:p(D),onBeforeLeave:p(I),persisted:""},{default:c((()=>[f(u(p(V),{mask:e.modal,"overlay-class":e.modalClass,"z-index":p(q),onClick:p(M)},{default:c((()=>[u(p(W),{loop:"",trapped:p(R),"focus-trap-el":n.value,"focus-start-el":F.value,onFocusAfterTrapped:p(H),onFocusAfterReleased:p(U),onFocusoutPrevented:p(G),onReleaseRequested:p(Z)},{default:c((()=>[v("div",y({ref_key:"drawerRef",ref:n,"aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:p(O),"aria-describedby":p(N)},e.$attrs,{class:[p(x).b(),e.direction,p(R)&&"open"],style:p(K)?"width: "+p(Q):"height: "+p(Q),role:"dialog",onClick:o[1]||(o[1]=m((()=>{}),["stop"]))}),[v("span",{ref_key:"focusStartRef",ref:F,class:b(p(x).e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(d(),C("header",{key:0,class:b(p(x).e("header"))},[e.$slots.title?h(e.$slots,"title",{key:1},(()=>[g(" DEPRECATED SLOT ")])):h(e.$slots,"header",{key:0,close:p(J),titleId:p(O),titleClass:p(x).e("title")},(()=>[e.$slots.title?g("v-if",!0):(d(),C("span",{key:0,id:p(O),role:"heading","aria-level":e.headerAriaLevel,class:b(p(x).e("title"))},k(e.title),11,ae))])),e.showClose?(d(),C("button",{key:2,"aria-label":p(S)("el.drawer.close"),class:b(p(x).e("close-btn")),type:"button",onClick:o[0]||(o[0]=(...e)=>p(J)&&p(J)(...e))},[u(p(T),{class:b(p(x).e("close"))},{default:c((()=>[u(p(j))])),_:1},8,["class"])],10,le)):g("v-if",!0)],2)):g("v-if",!0),p($)?(d(),C("div",{key:1,id:p(N),class:b(p(x).e("body"))},[h(e.$slots,"default")],10,te)):g("v-if",!0),e.$slots.footer?(d(),C("div",{key:2,class:b(p(x).e("footer"))},[h(e.$slots,"footer")],2)):g("v-if",!0)],16,oe)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[A,p(R)]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","drawer.vue"]]));export{ne as E,J as a,K as b,Q as c,Z as d,X as u};
