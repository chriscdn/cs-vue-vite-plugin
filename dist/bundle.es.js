import{pushScopeId as t,popScopeId as e,openBlock as l,createElementBlock as n,createTextVNode as r,toDisplayString as o,createElementVNode as u,createCommentVNode as a}from"vue";const s={props:{title:{type:String,required:!0},subtitle:{type:String,default:null}}};t("data-v-193683cd");const i={key:0},p=r(": "),c={class:"rhmuted"};e(),s.render=function(t,e,s,d,f,_){return l(),n("h1",null,[r(o(s.title),1),s.subtitle?(l(),n("span",i,[p,u("span",c,o(s.subtitle),1)])):a("",!0)])},s.__scopeId="data-v-193683cd";var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:s});const f={props:{title:{type:String,required:!0},subtitle:{type:String,default:null}}};t("data-v-61321556");const _={key:0},b=r(": "),g={class:"rhmuted"};e(),f.render=function(t,e,s,i,p,c){return l(),n("h1",null,[r(o(s.title),1),s.subtitle?(l(),n("span",_,[b,u("span",g,o(s.subtitle)+" - 2",1)])):a("",!0)])},f.__scopeId="data-v-61321556";var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f}),v={install(t,e){const l={"./components/PageTitle.vue":d,"./components/PageTitle2.vue":m};Object.entries(l).forEach((([e,l])=>{const n=e.split("/").pop().replace(/\.\w+$/,"");t.component(n,l.default)}))}};export{v as default};
