import{b as e,d as r,U as t,h as n,D as i,k as a,V as s,_ as l,W as u,z as o,X as f,m as d,Y as c,n as p,o as v}from"./el-input.Jahd1Hjo.js";import{a5 as g,q as h,r as y,c as m,d as b,D as w,J as q,x as F,aa as O,a as x,k as j,j as A,n as E,u as P,W as k,I as S,o as R,K as $,ad as _,m as W,F as I,P as V,H as B,w as M,b as z,h as D,g as C,A as N,t as L,i as T,f as J,a8 as Z}from"./index.vLuz2ctl.js";import{c as U}from"./castArray.DmlTlyrk.js";import{d as Y,t as G,u as H}from"./use-form-item.DGQHv2C0.js";import{b as K}from"./_baseClone.Byh6-Sp3.js";function X(e){return K(e,4)}const Q=e({size:{type:String,values:n},disabled:Boolean}),ee=e({...Q,model:Object,rules:{type:r(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),re={validate:(e,r,n)=>(g(e)||h(e))&&t(r)&&h(n)};function te(){const e=y([]),r=m((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""}));function t(t){const n=e.value.indexOf(t);return-1===n&&r.value,n}return{autoLabelWidth:r,registerLabelWidth:function(r,n){if(r&&n){const i=t(n);e.value.splice(i,1,r)}else r&&e.value.push(r)},deregisterLabelWidth:function(r){const n=t(r);n>-1&&e.value.splice(n,1)}}}const ne=(e,r)=>{const t=U(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e},ie=b({name:"ElForm"});var ae=l(b({...ie,props:ee,emits:re,setup(e,{expose:r,emit:t}){const n=e,l=[],u=i(),o=a("form"),f=m((()=>{const{labelPosition:e,inline:r}=n;return[o.b(),o.m(u.value||"default"),{[o.m(`label-${e}`)]:e,[o.m("inline")]:r}]})),d=(e=[])=>{n.model&&ne(l,e).forEach((e=>e.resetField()))},c=(e=[])=>{ne(l,e).forEach((e=>e.clearValidate()))},p=m((()=>!!n.model)),v=async e=>h(void 0,e),g=async(e=[])=>{if(!p.value)return!1;const r=(e=>{if(0===l.length)return[];const r=ne(l,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const i of r)try{await i.validate("")}catch(n){t={...t,...n}}return 0===Object.keys(t).length||Promise.reject(t)},h=async(e=[],r)=>{const t=!k(r);try{const t=await g(e);return!0===t&&await(null==r?void 0:r(t)),t}catch(i){if(i instanceof Error)throw i;const e=i;return n.scrollToError&&y(Object.keys(e)[0]),await(null==r?void 0:r(!1,e)),t&&Promise.reject(e)}},y=e=>{var r;const t=ne(l,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView(n.scrollIntoViewOptions))};return w((()=>n.rules),(()=>{n.validateOnRuleChange&&v().catch((e=>Y()))}),{deep:!0}),q(s,F({...O(n),emit:t,resetFields:d,clearValidate:c,validateField:h,getField:e=>l.find((r=>r.prop===e)),addField:e=>{l.push(e)},removeField:e=>{e.prop&&l.splice(l.indexOf(e),1)},...te()})),r({validate:v,validateField:h,resetFields:d,clearValidate:c,scrollToField:y,fields:l}),(e,r)=>(x(),j("form",{class:E(P(f))},[A(e.$slots,"default")],2))}}),[["__file","form.vue"]]);function se(){return se=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},se.apply(this,arguments)}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,r){return(ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function oe(e,r,t){return(oe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(e,n));return t&&ue(i,t.prototype),i}).apply(null,arguments)}function fe(e){var r="function"==typeof Map?new Map:void 0;return fe=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return oe(e,arguments,le(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ue(n,e)},fe(e)}var de=/%[sdj%]/g,ce=function(){};function pe(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function ve(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var i=0,a=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(de,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(r){return"[Circular]"}break;default:return e}})):e}function ge(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function he(e,r,t){var n=0,i=e.length;!function a(s){if(s&&s.length)t(s);else{var l=n;n+=1,l<i?r(e[l],a):t([])}}([])}var ye=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,ue(r,t),n}(fe(Error));function me(e,r,t,n,i){if(r.first){var a=new Promise((function(r,a){var s=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);he(s,t,(function(e){return n(e),e.length?a(new ye(e,pe(e))):r(i)}))}));return a.catch((function(e){return e})),a}var s=!0===r.firstFields?Object.keys(e):r.firstFields||[],l=Object.keys(e),u=l.length,o=0,f=[],d=new Promise((function(r,a){var d=function(e){if(f.push.apply(f,e),++o===u)return n(f),f.length?a(new ye(f,pe(f))):r(i)};l.length||(n(f),r(i)),l.forEach((function(r){var n=e[r];-1!==s.indexOf(r)?he(n,t,d):function(e,r,t){var n=[],i=0,a=e.length;function s(e){n.push.apply(n,e||[]),++i===a&&t(n)}e.forEach((function(e){r(e,s)}))}(n,t,d)}))}));return d.catch((function(e){return e})),d}function be(e,r){return function(t){var n,i;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(i=t)&&void 0!==i.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function we(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=se({},e[t],n):e[t]=n}return e}var qe,Fe=function(e,r,t,n,i,a){!e.required||t.hasOwnProperty(e.field)&&!ge(r,a||e.type)||n.push(ve(i.messages.required,e.fullField))},Oe=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,xe=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,je={integer:function(e){return je.number(e)&&parseInt(e,10)===e},float:function(e){return je.number(e)&&!je.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!je.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Oe)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(qe)return qe;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),s=new RegExp("^"+t+"$"),l=new RegExp("^"+i+"$"),u=function(e){return e&&e.exact?a:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+i+r(e)+")","g")};u.v4=function(e){return e&&e.exact?s:new RegExp(""+r(e)+t+r(e),"g")},u.v6=function(e){return e&&e.exact?l:new RegExp(""+r(e)+i+r(e),"g")};var o=u.v4().source,f=u.v6().source;return qe=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+o+"|"+f+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(xe)}},Ae="enum",Ee={required:Fe,whitespace:function(e,r,t,n,i){(/^\s+$/.test(r)||""===r)&&n.push(ve(i.messages.whitespace,e.fullField))},type:function(e,r,t,n,i){if(e.required&&void 0===r)Fe(e,r,t,n,i);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?je[a](r)||n.push(ve(i.messages.types[a],e.fullField,e.type)):a&&typeof r!==e.type&&n.push(ve(i.messages.types[a],e.fullField,e.type))}},range:function(e,r,t,n,i){var a="number"==typeof e.len,s="number"==typeof e.min,l="number"==typeof e.max,u=r,o=null,f="number"==typeof r,d="string"==typeof r,c=Array.isArray(r);if(f?o="number":d?o="string":c&&(o="array"),!o)return!1;c&&(u=r.length),d&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?u!==e.len&&n.push(ve(i.messages[o].len,e.fullField,e.len)):s&&!l&&u<e.min?n.push(ve(i.messages[o].min,e.fullField,e.min)):l&&!s&&u>e.max?n.push(ve(i.messages[o].max,e.fullField,e.max)):s&&l&&(u<e.min||u>e.max)&&n.push(ve(i.messages[o].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,i){e[Ae]=Array.isArray(e[Ae])?e[Ae]:[],-1===e[Ae].indexOf(r)&&n.push(ve(i.messages[Ae],e.fullField,e[Ae].join(", ")))},pattern:function(e,r,t,n,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(ve(i.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(ve(i.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Pe=function(e,r,t,n,i){var a=e.type,s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,a)&&!e.required)return t();Ee.required(e,r,n,s,i,a),ge(r,a)||Ee.type(e,r,n,s,i)}t(s)},ke={string:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"string")&&!e.required)return t();Ee.required(e,r,n,a,i,"string"),ge(r,"string")||(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i),Ee.pattern(e,r,n,a,i),!0===e.whitespace&&Ee.whitespace(e,r,n,a,i))}t(a)},method:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.type(e,r,n,a,i)}t(a)},number:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},boolean:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.type(e,r,n,a,i)}t(a)},regexp:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),ge(r)||Ee.type(e,r,n,a,i)}t(a)},integer:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},float:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},array:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();Ee.required(e,r,n,a,i,"array"),null!=r&&(Ee.type(e,r,n,a,i),Ee.range(e,r,n,a,i))}t(a)},object:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.type(e,r,n,a,i)}t(a)},enum:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i),void 0!==r&&Ee.enum(e,r,n,a,i)}t(a)},pattern:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"string")&&!e.required)return t();Ee.required(e,r,n,a,i),ge(r,"string")||Ee.pattern(e,r,n,a,i)}t(a)},date:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"date")&&!e.required)return t();var s;if(Ee.required(e,r,n,a,i),!ge(r,"date"))s=r instanceof Date?r:new Date(r),Ee.type(e,s,n,a,i),s&&Ee.range(e,s.getTime(),n,a,i)}t(a)},url:Pe,hex:Pe,email:Pe,required:function(e,r,t,n,i){var a=[],s=Array.isArray(r)?"array":typeof r;Ee.required(e,r,n,a,i,s),t(a)},any:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,a,i)}t(a)}};function Se(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Re=Se(),$e=function(){function e(e){this.rules=null,this._messages=Re,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=we(Se(),e)),this._messages},r.validate=function(r,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var a=r,s=t,l=n;if("function"==typeof s&&(l=s,s={}),!this.rules||0===Object.keys(this.rules).length)return l&&l(null,a),Promise.resolve(a);if(s.messages){var u=this.messages();u===Re&&(u=Se()),we(u,s.messages),s.messages=u}else s.messages=this.messages();var o={};(s.keys||Object.keys(this.rules)).forEach((function(e){var t=i.rules[e],n=a[e];t.forEach((function(t){var s=t;"function"==typeof s.transform&&(a===r&&(a=se({},a)),n=a[e]=s.transform(n)),(s="function"==typeof s?{validator:s}:se({},s)).validator=i.getValidationMethod(s),s.validator&&(s.field=e,s.fullField=s.fullField||e,s.type=i.getType(s),o[e]=o[e]||[],o[e].push({rule:s,value:n,source:a,field:e}))}))}));var f={};return me(o,s,(function(r,t){var n,i=r.rule,l=!("object"!==i.type&&"array"!==i.type||"object"!=typeof i.fields&&"object"!=typeof i.defaultField);function u(e,r){return se({},r,{fullField:i.fullField+"."+e,fullFields:i.fullFields?[].concat(i.fullFields,[e]):[e]})}function o(n){void 0===n&&(n=[]);var o=Array.isArray(n)?n:[n];!s.suppressWarning&&o.length&&e.warning("async-validator:",o),o.length&&void 0!==i.message&&(o=[].concat(i.message));var d=o.map(be(i,a));if(s.first&&d.length)return f[i.field]=1,t(d);if(l){if(i.required&&!r.value)return void 0!==i.message?d=[].concat(i.message).map(be(i,a)):s.error&&(d=[s.error(i,ve(s.messages.required,i.field))]),t(d);var c={};i.defaultField&&Object.keys(r.value).map((function(e){c[e]=i.defaultField})),c=se({},c,r.rule.fields);var p={};Object.keys(c).forEach((function(e){var r=c[e],t=Array.isArray(r)?r:[r];p[e]=t.map(u.bind(null,e))}));var v=new e(p);v.messages(s.messages),r.rule.options&&(r.rule.options.messages=s.messages,r.rule.options.error=s.error),v.validate(r.value,r.rule.options||s,(function(e){var r=[];d&&d.length&&r.push.apply(r,d),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(d)}if(l=l&&(i.required||!i.required&&r.value),i.field=r.field,i.asyncValidator)n=i.asyncValidator(i,r.value,o,r.source,s);else if(i.validator){try{n=i.validator(i,r.value,o,r.source,s)}catch(d){console.error,s.suppressValidatorError||setTimeout((function(){throw d}),0),o(d.message)}!0===n?o():!1===n?o("function"==typeof i.message?i.message(i.fullField||i.field):i.message||(i.fullField||i.field)+" fails"):n instanceof Array?o(n):n instanceof Error&&o(n.message)}n&&n.then&&n.then((function(){return o()}),(function(e){return o(e)}))}),(function(e){!function(e){for(var r,t,n=[],i={},s=0;s<e.length;s++)r=e[s],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(i=pe(n),l(n,i)):l(null,a)}(e)}),a)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!ke.hasOwnProperty(e.type))throw new Error(ve("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?ke.required:ke[this.getType(e)]||void 0},e}();$e.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");ke[e]=r},$e.warning=ce,$e.messages=Re,$e.validators=ke;const _e=e({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:r([String,Array])},required:{type:Boolean,default:void 0},rules:{type:r([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:n}}),We="ElLabelWrap";var Ie=b({name:We,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=S(s,void 0),n=S(u);n||G(We,"usage: <el-form-item><label-wrap /></el-form-item>");const i=a("form"),l=y(),f=y(0),d=(n="update")=>{V((()=>{r.default&&e.isAutoWidth&&("update"===n?f.value=(()=>{var e;if(null==(e=l.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(l.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===n&&(null==t||t.deregisterLabelWidth(f.value)))}))},c=()=>d("update");return R((()=>{c()})),$((()=>{d("remove")})),_((()=>c())),w(f,((r,n)=>{e.updateAll&&(null==t||t.registerLabelWidth(r,n))})),o(m((()=>{var e,r;return null!=(r=null==(e=l.value)?void 0:e.firstElementChild)?r:null})),c),()=>{var a,s;if(!r)return null;const{isAutoWidth:u}=e;if(u){const e=null==t?void 0:t.autoLabelWidth,s={};if((null==n?void 0:n.hasLabel)&&e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-f.value),n="left"===t.labelPosition?"marginRight":"marginLeft";r&&(s[n]=`${r}px`)}return W("div",{ref:l,class:[i.be("item","label-wrap")],style:s},[null==(a=r.default)?void 0:a.call(r)])}return W(I,{ref:l},[null==(s=r.default)?void 0:s.call(r)])}}});const Ve=["role","aria-labelledby"],Be=b({name:"ElFormItem"});var Me=l(b({...Be,props:_e,setup(e,{expose:r}){const n=e,l=B(),o=S(s,void 0),p=S(u,void 0),v=i(void 0,{formItem:!1}),g=a("form-item"),b=H().value,_=y([]),I=y(""),Y=f(I,100),G=y(""),K=y();let Q,ee=!1;const re=m((()=>{if("top"===(null==o?void 0:o.labelPosition))return{};const e=d(n.labelWidth||(null==o?void 0:o.labelWidth)||"");return e?{width:e}:{}})),te=m((()=>{if("top"===(null==o?void 0:o.labelPosition)||(null==o?void 0:o.inline))return{};if(!n.label&&!n.labelWidth&&fe)return{};const e=d(n.labelWidth||(null==o?void 0:o.labelWidth)||"");return n.label||l.label?{}:{marginLeft:e}})),ne=m((()=>[g.b(),g.m(v.value),g.is("error","error"===I.value),g.is("validating","validating"===I.value),g.is("success","success"===I.value),g.is("required",ve.value||n.required),g.is("no-asterisk",null==o?void 0:o.hideRequiredAsterisk),"right"===(null==o?void 0:o.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[g.m("feedback")]:null==o?void 0:o.statusIcon}])),ie=m((()=>t(n.inlineMessage)?n.inlineMessage:(null==o?void 0:o.inlineMessage)||!1)),ae=m((()=>[g.e("error"),{[g.em("error","inline")]:ie.value}])),se=m((()=>n.prop?h(n.prop)?n.prop:n.prop.join("."):"")),le=m((()=>!(!n.label&&!l.label))),ue=m((()=>n.for||(1===_.value.length?_.value[0]:void 0))),oe=m((()=>!ue.value&&le.value)),fe=!!p,de=m((()=>{const e=null==o?void 0:o.model;if(e&&n.prop)return c(e,n.prop).value})),ce=m((()=>{const{required:e}=n,r=[];n.rules&&r.push(...U(n.rules));const t=null==o?void 0:o.rules;if(t&&n.prop){const e=c(t,n.prop).value;e&&r.push(...U(e))}if(void 0!==e){const t=r.map(((e,r)=>[e,r])).filter((([e])=>Object.keys(e).includes("required")));if(t.length>0)for(const[n,i]of t)n.required!==e&&(r[i]={...n,required:e});else r.push({required:e})}return r})),pe=m((()=>ce.value.length>0)),ve=m((()=>ce.value.some((e=>e.required)))),ge=m((()=>{var e;return"error"===Y.value&&n.showMessage&&(null==(e=null==o?void 0:o.showMessage)||e)})),he=m((()=>`${n.label||""}${(null==o?void 0:o.labelSuffix)||""}`)),ye=e=>{I.value=e},me=async e=>{const r=se.value;return new $e({[r]:e}).validate({[r]:de.value},{firstFields:!0}).then((()=>(ye("success"),null==o||o.emit("validate",n.prop,!0,""),!0))).catch((e=>((e=>{var r,t;const{errors:i,fields:a}=e;ye("error"),G.value=i?null!=(t=null==(r=null==i?void 0:i[0])?void 0:r.message)?t:`${n.prop} is required`:"",null==o||o.emit("validate",n.prop,!1,G.value)})(e),Promise.reject(e))))},be=async(e,r)=>{if(ee||!n.prop)return!1;const t=k(r);if(!pe.value)return null==r||r(!1),!1;const i=(e=>ce.value.filter((r=>!r.trigger||!e||(Array.isArray(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((({trigger:e,...r})=>r)))(e);return 0===i.length?(null==r||r(!0),!0):(ye("validating"),me(i).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:n}=e;return null==r||r(!1,n),!t&&Promise.reject(n)})))},we=()=>{ye(""),G.value="",ee=!1},qe=async()=>{const e=null==o?void 0:o.model;if(!e||!n.prop)return;const r=c(e,n.prop);ee=!0,r.value=X(Q),await V(),we(),ee=!1};w((()=>n.error),(e=>{G.value=e||"",ye(e?"error":"")}),{immediate:!0}),w((()=>n.validateStatus),(e=>ye(e||"")));const Fe=F({...O(n),$el:K,size:v,validateState:I,labelId:b,inputIds:_,isGroup:oe,hasLabel:le,fieldValue:de,addInputId:e=>{_.value.includes(e)||_.value.push(e)},removeInputId:e=>{_.value=_.value.filter((r=>r!==e))},resetField:qe,clearValidate:we,validate:be});return q(u,Fe),R((()=>{n.prop&&(null==o||o.addField(Fe),Q=X(de.value))})),$((()=>{null==o||o.removeField(Fe)})),r({size:v,validateMessage:G,validateState:I,validate:be,clearValidate:we,resetField:qe}),(e,r)=>{var t;return x(),j("div",{ref_key:"formItemRef",ref:K,class:E(P(ne)),role:P(oe)?"group":void 0,"aria-labelledby":P(oe)?P(b):void 0},[W(P(Ie),{"is-auto-width":"auto"===P(re).width,"update-all":"auto"===(null==(t=P(o))?void 0:t.labelWidth)},{default:M((()=>[P(le)?(x(),z(D(P(ue)?"label":"div"),{key:0,id:P(b),for:P(ue),class:E(P(g).e("label")),style:C(P(re))},{default:M((()=>[A(e.$slots,"label",{label:P(he)},(()=>[N(L(P(he)),1)]))])),_:3},8,["id","for","class","style"])):T("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),J("div",{class:E(P(g).e("content")),style:C(P(te))},[A(e.$slots,"default"),W(Z,{name:`${P(g).namespace.value}-zoom-in-top`},{default:M((()=>[P(ge)?A(e.$slots,"error",{key:0,error:G.value},(()=>[J("div",{class:E(P(ae))},L(G.value),3)])):T("v-if",!0)])),_:3},8,["name"])],6)],10,Ve)}}}),[["__file","form-item.vue"]]);const ze=p(ae,{FormItem:Me}),De=v(Me);export{ze as E,De as a};
