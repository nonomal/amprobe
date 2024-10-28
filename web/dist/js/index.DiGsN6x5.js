import{R as e,_ as t,j as n,r as d,o,E as a,Q as r,S as s,i,y as l,U as c}from"./el-button.Bf-OVv06.js";import{v as h}from"./el-loading.8LoI83hF.js";import{E as u}from"./el-card.vZ36OKf6.js";import{b as p,E as f,a as g}from"./el-table-column.ROcqc2dJ.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.Cq1hAJs-.js";/* empty css               */import{a as y}from"./index.CmOgbRgk.js";import{aa as v,x as k,L as N,d as C,E as x,I as m,j as b,G as E,r as D,B as K,M as w,O as S,e as A,v as _,a as j,k as B,f as T,b as $,w as L,h as O,n as I,l as q,i as M,m as z,g as F,F as R,P,J as H,V as U,q as V,Y as W,o as Y,ad as G,c as J,t as Q,R as X,S as Z,u as ee,A as te,_ as ne}from"./index.Dtsxs5-j.js";import{s as de}from"./token.DWNpOE8r.js";import{_ as oe}from"./index.uLpWvjGx.js";import{u as ae,E as re}from"./message.ohA7tZs1.js";import{E as se}from"./index.BslPTDkf.js";import"./index.DhER-06O.js";import"./isEqual.DXE01s-J.js";import"./_Uint8Array.DZ6GMUyG.js";import"./event.BwRzfsZt.js";import"./use-form-item.vgwZ2Rnc.js";import"./_initCloneObject.L1lxMjk_.js";import"./focus-trap.BiItK6l-.js";import"./index.Ct-vKfEQ.js";const ie="$treeNodeId",le=function(e,t){t&&!t[ie]&&Object.defineProperty(t,ie,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},ce=function(e,t){return e?t[e]:t[ie]},he=(e,t,n)=>{const d=e.value.currentNode;n();const o=e.value.currentNode;d!==o&&t("current-change",o?o.data:null,o)},ue=e=>{let t=!0,n=!0,d=!0;for(let o=0,a=e.length;o<a;o++){const a=e[o];(!0!==a.checked||a.indeterminate)&&(t=!1,a.disabled||(d=!1)),(!1!==a.checked||a.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:d,half:!t&&!n}},pe=function(e){if(0===e.childNodes.length||e.loading)return;const{all:t,none:n,half:d}=ue(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):d?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const o=e.parent;o&&0!==o.level&&(e.store.checkStrictly||pe(o))},fe=function(e,t){const n=e.store.props,d=e.data||{},o=n[t];if("function"==typeof o)return o(d,e);if("string"==typeof o)return d[o];if(void 0===o){const e=d[t];return void 0===e?"":e}};let ge=0;class ye{constructor(e){this.id=ge++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const t in e)v(e,t)&&(this[t]=e[t]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const t=e.props;if(t&&void 0!==t.isLeaf){const e=fe(this,"isLeaf");"boolean"==typeof e&&(this.isLeafByUser=e)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||le(this,this.data),!this.data)return;const n=e.defaultExpandedKeys,d=e.key;d&&n&&n.includes(this.key)&&this.expand(null,e.autoExpandParent),d&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}setData(e){let t;Array.isArray(e)||le(this,e),this.data=e,this.childNodes=[],t=0===this.level&&Array.isArray(this.data)?this.data:fe(this,"children")||[];for(let n=0,d=t.length;n<d;n++)this.insertChild({data:t[n]})}get label(){return fe(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return fe(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){return(this.childNodes||[]).some((n=>n===e||t&&n.contains(e)))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,t,n){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof ye)){if(!n){const n=this.getChildren(!0);n.includes(e.data)||(void 0===t||t<0?n.push(e.data):n.splice(t,0,e.data))}Object.assign(e,{parent:this,store:this.store}),(e=k(new ye(e)))instanceof ye&&e.initialize()}e.level=this.level+1,void 0===t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),this.updateLeafState()}insertBefore(e,t){let n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}insertAfter(e,t){let n;t&&(n=this.childNodes.indexOf(t),-1!==n&&(n+=1)),this.insertChild(e,n)}removeChild(e){const t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);const d=this.childNodes.indexOf(e);d>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(d,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){t=this.childNodes[n];break}t&&this.removeChild(t)}expand(e,t){const n=()=>{if(t){let e=this.parent;for(;e.level>0;)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e(),this.childNodes.forEach((e=>{e.canFocus=!0}))};this.shouldLoadData()?this.loadData((e=>{Array.isArray(e)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||pe(this),n())})):n()}doCreateChildren(e,t={}){e.forEach((e=>{this.insertChild(Object.assign({data:e},t),void 0,!0)}))}collapse(){this.expanded=!1,this.childNodes.forEach((e=>{e.canFocus=!1}))}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&void 0!==this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,n,d){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){const{all:n,allWithoutDisable:o}=ue(this.childNodes);this.isLeaf||n||!o||(this.checked=!1,e=!1);const a=()=>{if(t){const n=this.childNodes;for(let r=0,s=n.length;r<s;r++){const o=n[r];d=d||!1!==e;const a=o.disabled?o.checked:d;o.setChecked(a,t,!0,d)}const{half:o,all:a}=ue(n);a||(this.checked=a,this.indeterminate=o)}};if(this.shouldLoadData())return void this.loadData((()=>{a(),pe(this)}),{checked:!1!==e});a()}const o=this.parent;o&&0!==o.level&&(n||pe(o))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const n=this.store.props;let d="children";return n&&(d=n.children||"children"),void 0===t[d]&&(t[d]=null),e&&!t[d]&&(t[d]=[]),t[d]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map((e=>e.data)),n={},d=[];e.forEach(((e,o)=>{const a=e[ie];!!a&&t.findIndex((e=>e[ie]===a))>=0?n[a]={index:o,data:e}:d.push({index:o,data:e})})),this.store.lazy||t.forEach((e=>{n[e[ie]]||this.removeChildByData(e)})),d.forEach((({index:e,data:t})=>{this.insertChild({data:t},e)})),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const n=n=>{this.childNodes=[],this.doCreateChildren(n,t),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,n)},d=()=>{this.loading=!1};this.store.load(this,n,d)}}eachNode(e){const t=[this];for(;t.length;){const n=t.shift();t.unshift(...n.childNodes),e(n)}}reInitChecked(){this.store.checkStrictly||pe(this)}}class ve{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const t in e)v(e,t)&&(this[t]=e[t]);this.nodesMap={}}initialize(){if(this.root=new ye({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){(0,this.load)(this.root,(e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()}))}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,n=this.lazy,d=function(o){const a=o.root?o.root.childNodes:o.childNodes;if(a.forEach((n=>{n.visible=t.call(n,e,n.data,n),d(n)})),!o.visible&&a.length){let e=!0;e=!a.some((e=>e.visible)),o.root?o.root.visible=!1===e:o.visible=!1===e}e&&o.visible&&!o.isLeaf&&(n&&!o.loaded||o.expand())};d(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof ye)return e;const t=N(e)?ce(this.key,e):e;return this.nodesMap[t]||null}insertBefore(e,t){const n=this.getNode(t);n.parent.insertBefore({data:e},n)}insertAfter(e,t){const n=this.getNode(t);n.parent.insertAfter({data:e},n)}remove(e){const t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}append(t,n){const d=e(n)?this.root:this.getNode(n);d&&d.insertChild({data:t})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach((e=>{const n=t[e];n&&n.setChecked(!0,!this.checkStrictly)}))}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(e&&e.data)if(t){void 0!==e.key&&(this.nodesMap[e.key]=e)}else this.nodesMap[e.id]=e}deregisterNode(e){this.key&&e&&e.data&&(e.childNodes.forEach((e=>{this.deregisterNode(e)})),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1){const n=[],d=function(o){(o.root?o.root.childNodes:o.childNodes).forEach((o=>{(o.checked||t&&o.indeterminate)&&(!e||e&&o.isLeaf)&&n.push(o.data),d(o)}))};return d(this),n}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map((e=>(e||{})[this.key]))}getHalfCheckedNodes(){const e=[],t=function(n){(n.root?n.root.childNodes:n.childNodes).forEach((n=>{n.indeterminate&&e.push(n.data),t(n)}))};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map((e=>(e||{})[this.key]))}_getAllNodes(){const e=[],t=this.nodesMap;for(const n in t)v(t,n)&&e.push(t[n]);return e}updateChildren(e,t){const n=this.nodesMap[e];if(!n)return;const d=n.childNodes;for(let o=d.length-1;o>=0;o--){const e=d[o];this.remove(e.data)}for(let o=0,a=t.length;o<a;o++){const e=t[o];this.append(e,n.data)}}_setCheckedKeys(e,t=!1,n){const d=this._getAllNodes().sort(((e,t)=>e.level-t.level)),o=Object.create(null),a=Object.keys(n);d.forEach((e=>e.setChecked(!1,!1)));const r=t=>{t.childNodes.forEach((t=>{var n;o[t.data[e]]=!0,(null==(n=t.childNodes)?void 0:n.length)&&r(t)}))};for(let s=0,i=d.length;s<i;s++){const n=d[s],i=n.data[e].toString();if(a.includes(i)){if(n.childNodes.length&&r(n),n.isLeaf||this.checkStrictly)n.setChecked(!0,!1);else if(n.setChecked(!0,!0),t){n.setChecked(!1,!1);const e=function(t){t.childNodes.forEach((t=>{t.isLeaf||t.setChecked(!1,!1),e(t)}))};e(n)}}else n.checked&&!o[i]&&n.setChecked(!1,!1)}}setCheckedNodes(e,t=!1){const n=this.key,d={};e.forEach((e=>{d[(e||{})[n]]=!0})),this._setCheckedKeys(n,t,d)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const n=this.key,d={};e.forEach((e=>{d[e]=!0})),this._setCheckedKeys(n,t,d)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach((e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)}))}setChecked(e,t,n){const d=this.getNode(e);d&&d.setChecked(!!t,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,t=!0){const n=e[this.key],d=this.nodesMap[n];this.setCurrentNode(d),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,t=!0){if(null==e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);const n=this.getNode(e);n&&(this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}var ke=t(C({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const t=n("tree"),d=x("NodeInstance"),o=x("RootTree");return()=>{const n=e.node,{data:a,store:r}=n;return e.renderContent?e.renderContent(m,{_self:d,node:n,data:a,store:r}):b(o.ctx.slots,"default",{node:n,data:a},(()=>[m("span",{class:t.be("node","label")},[n.label])]))}}}),[["__file","tree-node-content.vue"]]);function Ne(e){const t=x("TreeNodeMap",null),n={treeNodeExpand:t=>{e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(n),E("TreeNodeMap",n),{broadcastExpanded:t=>{if(e.accordion)for(const e of n.children)e.treeNodeExpand(t)}}}const Ce=Symbol("dragEvents");const xe=C({name:"ElTreeNode",components:{ElCollapseTransition:oe,ElCheckbox:p,NodeContent:ke,ElIcon:a,Loading:r},props:{node:{type:ye,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,t){const d=n("tree"),{broadcastExpanded:o}=Ne(e),a=x("RootTree"),r=D(!1),i=D(!1),l=D(null),c=D(null),h=D(null),u=x(Ce),p=H();E("NodeInstance",p),e.node.expanded&&(r.value=!0,i.value=!0);const f=a.props.props.children||"children";K((()=>{const t=e.node.data[f];return t&&[...t]}),(()=>{e.node.updateChildren()})),K((()=>e.node.indeterminate),(t=>{g(e.node.checked,t)})),K((()=>e.node.checked),(t=>{g(t,e.node.indeterminate)})),K((()=>e.node.childNodes.length),(()=>e.node.reInitChecked())),K((()=>e.node.expanded),(e=>{w((()=>r.value=e)),e&&(i.value=!0)}));const g=(t,n)=>{l.value===t&&c.value===n||a.ctx.emit("check-change",e.node.data,t,n),l.value=t,c.value=n},y=()=>{e.node.isLeaf||(r.value?(a.ctx.emit("node-collapse",e.node.data,e.node,p),e.node.collapse()):(e.node.expand(),t.emit("node-expand",e.node.data,e.node,p)))},v=(t,n)=>{e.node.setChecked(n.target.checked,!a.props.checkStrictly),w((()=>{const t=a.store.value;a.ctx.emit("check",e.node.data,{checkedNodes:t.getCheckedNodes(),checkedKeys:t.getCheckedKeys(),halfCheckedNodes:t.getHalfCheckedNodes(),halfCheckedKeys:t.getHalfCheckedKeys()})}))};return{ns:d,node$:h,tree:a,expanded:r,childNodeRendered:i,oldChecked:l,oldIndeterminate:c,getNodeKey:e=>ce(a.props.nodeKey,e.data),getNodeClass:t=>{const n=e.props.class;if(!n)return{};let d;if(U(n)){const{data:e}=t;d=n(e,t)}else d=n;return V(d)?{[d]:!0}:d},handleSelectChange:g,handleClick:t=>{he(a.store,a.ctx.emit,(()=>a.store.value.setCurrentNode(e.node))),a.currentNode.value=e.node,a.props.expandOnClickNode&&y(),a.props.checkOnClickNode&&!e.node.disabled&&v(null,{target:{checked:!e.node.checked}}),a.ctx.emit("node-click",e.node.data,e.node,p,t)},handleContextMenu:t=>{a.instance.vnode.props.onNodeContextmenu&&(t.stopPropagation(),t.preventDefault()),a.ctx.emit("node-contextmenu",t,e.node.data,e.node,p)},handleExpandIconClick:y,handleCheckChange:v,handleChildNodeExpand:(e,t,n)=>{o(t),a.ctx.emit("node-expand",e,t,n)},handleDragStart:t=>{a.props.draggable&&u.treeNodeDragStart({event:t,treeNode:e})},handleDragOver:t=>{t.preventDefault(),a.props.draggable&&u.treeNodeDragOver({event:t,treeNode:{$el:h.value,node:e.node}})},handleDrop:e=>{e.preventDefault()},handleDragEnd:e=>{a.props.draggable&&u.treeNodeDragEnd(e)},CaretRight:s}}}),me=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],be=["aria-expanded"];var Ee=t(C({name:"ElTree",components:{ElTreeNode:t(xe,[["render",function(e,t,n,d,o,a){const r=S("el-icon"),s=S("el-checkbox"),i=S("loading"),l=S("node-content"),c=S("el-tree-node"),h=S("el-collapse-transition");return A((j(),B("div",{ref:"node$",class:I([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=q(((...t)=>e.handleClick&&e.handleClick(...t)),["stop"])),onContextmenu:t[2]||(t[2]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t)),onDragstart:t[3]||(t[3]=q(((...t)=>e.handleDragStart&&e.handleDragStart(...t)),["stop"])),onDragover:t[4]||(t[4]=q(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["stop"])),onDragend:t[5]||(t[5]=q(((...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),["stop"])),onDrop:t[6]||(t[6]=q(((...t)=>e.handleDrop&&e.handleDrop(...t)),["stop"]))},[T("div",{class:I(e.ns.be("node","content")),style:F({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?(j(),$(r,{key:0,class:I([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:q(e.handleExpandIconClick,["stop"])},{default:L((()=>[(j(),$(O(e.tree.props.icon||e.CaretRight)))])),_:1},8,["class","onClick"])):M("v-if",!0),e.showCheckbox?(j(),$(s,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=q((()=>{}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):M("v-if",!0),e.node.loading?(j(),$(r,{key:2,class:I([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:L((()=>[z(i)])),_:1},8,["class"])):M("v-if",!0),z(l,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),z(h,null,{default:L((()=>[!e.renderAfterExpand||e.childNodeRendered?A((j(),B("div",{key:0,class:I(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[(j(!0),B(R,null,P(e.node.childNodes,(t=>(j(),$(c,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])))),128))],10,be)),[[_,e.expanded]]):M("v-if",!0)])),_:1})],42,me)),[[_,e.node.visible]])}],["__file","tree-node.vue"]])},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:i}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,t){const{t:a}=l(),r=n("tree"),s=x(de,null),i=D(new ve({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));i.value.initialize();const h=D(i.value.root),u=D(null),p=D(null),f=D(null),{broadcastExpanded:g}=Ne(e),{dragState:y}=function({props:e,ctx:t,el$:a,dropIndicator$:r,store:s}){const i=n("tree"),l=D({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return E(Ce,{treeNodeDragStart:({event:n,treeNode:d})=>{if("function"==typeof e.allowDrag&&!e.allowDrag(d.node))return n.preventDefault(),!1;n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain","")}catch(o){}l.value.draggingNode=d,t.emit("node-drag-start",d.node,n)},treeNodeDragOver:({event:n,treeNode:s})=>{const c=s,h=l.value.dropNode;h&&h.node.id!==c.node.id&&d(h.$el,i.is("drop-inner"));const u=l.value.draggingNode;if(!u||!c)return;let p=!0,f=!0,g=!0,y=!0;"function"==typeof e.allowDrop&&(p=e.allowDrop(u.node,c.node,"prev"),y=f=e.allowDrop(u.node,c.node,"inner"),g=e.allowDrop(u.node,c.node,"next")),n.dataTransfer.dropEffect=f||p||g?"move":"none",(p||f||g)&&(null==h?void 0:h.node.id)!==c.node.id&&(h&&t.emit("node-drag-leave",u.node,h.node,n),t.emit("node-drag-enter",u.node,c.node,n)),l.value.dropNode=p||f||g?c:null,c.node.nextSibling===u.node&&(g=!1),c.node.previousSibling===u.node&&(p=!1),c.node.contains(u.node,!1)&&(f=!1),(u.node===c.node||u.node.contains(c.node))&&(p=!1,f=!1,g=!1);const v=c.$el.querySelector(`.${i.be("node","content")}`).getBoundingClientRect(),k=a.value.getBoundingClientRect();let N;const C=p?f?.25:g?.45:1:-1,x=g?f?.75:p?.55:0:1;let m=-9999;const b=n.clientY-v.top;N=b<v.height*C?"before":b>v.height*x?"after":f?"inner":"none";const E=c.$el.querySelector(`.${i.be("node","expand-icon")}`).getBoundingClientRect(),D=r.value;"before"===N?m=E.top-k.top:"after"===N&&(m=E.bottom-k.top),D.style.top=`${m}px`,D.style.left=E.right-k.left+"px","inner"===N?o(c.$el,i.is("drop-inner")):d(c.$el,i.is("drop-inner")),l.value.showDropIndicator="before"===N||"after"===N,l.value.allowDrop=l.value.showDropIndicator||y,l.value.dropType=N,t.emit("node-drag-over",u.node,c.node,n)},treeNodeDragEnd:e=>{const{draggingNode:n,dropType:o,dropNode:a}=l.value;if(e.preventDefault(),e.dataTransfer.dropEffect="move",n&&a){const r={data:n.node.data};"none"!==o&&n.node.remove(),"before"===o?a.node.parent.insertBefore(r,a.node):"after"===o?a.node.parent.insertAfter(r,a.node):"inner"===o&&a.node.insertChild(r),"none"!==o&&(s.value.registerNode(r),s.value.key&&n.node.eachNode((e=>{var t;null==(t=s.value.nodesMap[e.data[s.value.key]])||t.setChecked(e.checked,!s.value.checkStrictly)}))),d(a.$el,i.is("drop-inner")),t.emit("node-drag-end",n.node,a.node,o,e),"none"!==o&&t.emit("node-drop",n.node,a.node,o,e)}n&&!a&&t.emit("node-drag-end",n.node,null,o,e),l.value.showDropIndicator=!1,l.value.draggingNode=null,l.value.dropNode=null,l.value.allowDrop=!0}}),{dragState:l}}({props:e,ctx:t,el$:p,dropIndicator$:f,store:i});!function({el$:e},t){const d=n("tree"),o=W([]),a=W([]);Y((()=>{r()})),G((()=>{o.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))})),K(a,(e=>{e.forEach((e=>{e.setAttribute("tabindex","-1")}))})),ae(e,"keydown",(n=>{const a=n.target;if(!a.className.includes(d.b("node")))return;const r=n.code;o.value=Array.from(e.value.querySelectorAll(`.${d.is("focusable")}[role=treeitem]`));const s=o.value.indexOf(a);let i;if([re.up,re.down].includes(r)){if(n.preventDefault(),r===re.up){i=-1===s?0:0!==s?s-1:o.value.length-1;const e=i;for(;!t.value.getNode(o.value[i].dataset.key).canFocus;){if(i--,i===e){i=-1;break}i<0&&(i=o.value.length-1)}}else{i=-1===s?0:s<o.value.length-1?s+1:0;const e=i;for(;!t.value.getNode(o.value[i].dataset.key).canFocus;){if(i++,i===e){i=-1;break}i>=o.value.length&&(i=0)}}-1!==i&&o.value[i].focus()}[re.left,re.right].includes(r)&&(n.preventDefault(),a.click());const l=a.querySelector('[type="checkbox"]');[re.enter,re.space].includes(r)&&l&&(n.preventDefault(),l.click())}));const r=()=>{var t;o.value=Array.from(e.value.querySelectorAll(`.${d.is("focusable")}[role=treeitem]`)),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const n=e.value.querySelectorAll(`.${d.is("checked")}[role=treeitem]`);n.length?n[0].setAttribute("tabindex","0"):null==(t=o.value[0])||t.setAttribute("tabindex","0")}}({el$:p},i);const v=J((()=>{const{childNodes:e}=h.value,t=!!s&&0!==s.hasFilteredOptions;return(!e||0===e.length||e.every((({visible:e})=>!e)))&&!t}));K((()=>e.currentNodeKey),(e=>{i.value.setCurrentNodeKey(e)})),K((()=>e.defaultCheckedKeys),(e=>{i.value.setDefaultCheckedKey(e)})),K((()=>e.defaultExpandedKeys),(e=>{i.value.setDefaultExpandedKeys(e)})),K((()=>e.data),(e=>{i.value.setData(e)}),{deep:!0}),K((()=>e.checkStrictly),(e=>{i.value.checkStrictly=e}));const k=()=>{const e=i.value.getCurrentNode();return e?e.data:null};return E("RootTree",{ctx:t,props:e,store:i,root:h,currentNode:u,instance:H()}),E(c,void 0),{ns:r,store:i,root:h,currentNode:u,dragState:y,el$:p,dropIndicator$:f,isEmpty:v,filter:t=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");i.value.filter(t)},getNodeKey:t=>ce(e.nodeKey,t.data),getNodePath:t=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const n=i.value.getNode(t);if(!n)return[];const d=[n.data];let o=n.parent;for(;o&&o!==h.value;)d.push(o.data),o=o.parent;return d.reverse()},getCheckedNodes:(e,t)=>i.value.getCheckedNodes(e,t),getCheckedKeys:e=>i.value.getCheckedKeys(e),getCurrentNode:k,getCurrentKey:()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const t=k();return t?t[e.nodeKey]:null},setCheckedNodes:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");i.value.setCheckedNodes(t,n)},setCheckedKeys:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");i.value.setCheckedKeys(t,n)},setChecked:(e,t,n)=>{i.value.setChecked(e,t,n)},getHalfCheckedNodes:()=>i.value.getHalfCheckedNodes(),getHalfCheckedKeys:()=>i.value.getHalfCheckedKeys(),setCurrentNode:(n,d=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");he(i,t.emit,(()=>i.value.setUserCurrentNode(n,d)))},setCurrentKey:(n,d=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");he(i,t.emit,(()=>i.value.setCurrentNodeKey(n,d)))},t:a,getNode:e=>i.value.getNode(e),remove:e=>{i.value.remove(e)},append:(e,t)=>{i.value.append(e,t)},insertBefore:(e,t)=>{i.value.insertBefore(e,t)},insertAfter:(e,t)=>{i.value.insertAfter(e,t)},handleNodeExpand:(e,n,d)=>{g(n),t.emit("node-expand",e,n,d)},updateKeyChildren:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");i.value.updateChildren(t,n)}}}}),[["render",function(e,t,n,d,o,a){const r=S("el-tree-node");return j(),B("div",{ref:"el$",class:I([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner","inner"===e.dragState.dropType),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[(j(!0),B(R,null,P(e.root.childNodes,(t=>(j(),$(r,{key:e.getNodeKey(t),node:t,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])))),128)),e.isEmpty?(j(),B("div",{key:0,class:I(e.ns.e("empty-block"))},[b(e.$slots,"empty",{},(()=>{var t;return[T("span",{class:I(e.ns.e("empty-text"))},Q(null!=(t=e.emptyText)?t:e.t("el.tree.emptyText")),3)]}))],2)):M("v-if",!0),A(T("div",{ref:"dropIndicator$",class:I(e.ns.e("drop-indicator"))},null,2),[[_,e.dragState.showDropIndicator]])],2)}],["__file","tree.vue"]]);Ee.install=e=>{e.component(Ee.name,Ee)};const De=Ee,Ke={class:"am-account-header"},we=(e=>(X("data-v-0a47ffa5"),e=e(),Z(),e))((()=>T("div",null,null,-1))),Se={class:"am-table"},Ae=ne(C({__name:"index",setup(e){Y((()=>{r()}));const t=D(0),n=D([]),d=D(!1),o={children:"children",label:"label",id:"id"},a=e=>{let t=[];e.forEach((e=>{const n={id:e.id,label:e.name,children:[]};t.push(n)}));return[{id:"",label:"权限列表",children:t}]},r=async()=>{d.value=!0;const{data:e}=await y();n.value=e.data,t.value+=1,d.value=!1};return(e,r)=>{const s=f,i=De,l=se,c=g,p=u,y=h;return j(),B(R,null,[T("div",Ke,[T("span",{onClick:r[0]||(r[0]=t=>e.$router.push("/account/user"))},"用户"),T("span",{onClick:r[1]||(r[1]=t=>e.$router.push("/account/role"))},"角色"),T("span",{onClick:r[2]||(r[2]=t=>e.$router.push("/account/api"))},"接口"),we]),z(p,{shadow:"never"},{default:L((()=>[T("div",Se,[A((j(),$(c,{data:ee(n),height:"100%",key:ee(t),stripe:"",ref:"multipleTable"},{default:L((()=>[z(s,{prop:"name",label:"角色名","min-width":"120",align:"center"}),z(s,{prop:"resource_ids",label:"权限","min-width":"200",align:"center","show-overflow-tooltip":""},{default:L((e=>[z(i,{data:a(e.row.resources),props:o},null,8,["data"])])),_:1}),z(s,{prop:"status",label:"状态","min-width":"100",align:"center",sortable:""},{default:L((e=>[1===e.row.status?(j(),$(l,{key:0,type:"success"},{default:L((()=>[te("正常")])),_:1})):(j(),$(l,{key:1,type:"danger"},{default:L((()=>[te("禁用")])),_:1}))])),_:1}),z(s,{prop:"created_at",label:"创建时间","min-width":"160",align:"center",sortable:""})])),_:1},8,["data"])),[[y,ee(d)]])])])),_:1})],64)}}}),[["__scopeId","data-v-0a47ffa5"]]);export{Ae as default};