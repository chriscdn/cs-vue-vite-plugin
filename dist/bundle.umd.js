!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).MyLib=t(e.Vue)}(this,(function(e){"use strict";const t={props:{title:{type:String,required:!0},subtitle:{type:String,default:null}}};e.pushScopeId("data-v-193683cd");const o={key:0},n=e.createTextVNode(": "),l={class:"rhmuted"};e.popScopeId(),t.render=function(t,r,c,a,i,p){return e.openBlock(),e.createElementBlock("h1",null,[e.createTextVNode(e.toDisplayString(c.title),1),c.subtitle?(e.openBlock(),e.createElementBlock("span",o,[n,e.createElementVNode("span",l,e.toDisplayString(c.subtitle),1)])):e.createCommentVNode("",!0)])},t.__scopeId="data-v-193683cd";var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:t});const c={props:{title:{type:String,required:!0},subtitle:{type:String,default:null}}};e.pushScopeId("data-v-61321556");const a={key:0},i=e.createTextVNode(": "),p={class:"rhmuted"};e.popScopeId(),c.render=function(t,o,n,l,r,c){return e.openBlock(),e.createElementBlock("h1",null,[e.createTextVNode(e.toDisplayString(n.title),1),n.subtitle?(e.openBlock(),e.createElementBlock("span",a,[i,e.createElementVNode("span",p,e.toDisplayString(n.subtitle)+" - 2",1)])):e.createCommentVNode("",!0)])},c.__scopeId="data-v-61321556";var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:c});return{install(e,t){const o={"./components/PageTitle.vue":r,"./components/PageTitle2.vue":u};Object.entries(o).forEach((([t,o])=>{const n=t.split("/").pop().replace(/\.\w+$/,"");e.component(n,o.default)}))}}}));
