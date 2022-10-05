"use strict";(globalThis["webpackChunkmanaging_awesome_quasar"]=globalThis["webpackChunkmanaging_awesome_quasar"]||[]).push([[817],{817:(e,a,t)=>{t.r(a),t.d(a,{default:()=>N});var n=t(9835),s=t(6970);function o(e,a,t,o,r,l){const i=(0,n.up)("SingleCategory"),c=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(c,{class:"q-pa-md no-padding"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.categories,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"q-pa-xs no-padding",key:e.category},[(0,n.Wm)(i,(0,s.vs)((0,n.F4)(e)),null,16)])))),128))])),_:1})}t(9665);var r=t(1446),l=t(9981),i=t.n(l);const c=e=>((0,n.dD)("data-v-7542f4d3"),e=e(),(0,n.Cn)(),e),d={class:"container no-padding"},u={class:"row flex-center q-pt-none q-pd-none"},p={class:"col-10 q-pa-sm titulo-categoria"},g={class:"text-h3"},_={class:"col-grow q-pa-sm titulo-categoria"},m={class:"text-4 dolars"},h={class:"container no-padding"},w={class:"row no-padding items-center"},v={class:"col-10"},f={class:"col-1 justify-right q-pa-sm percent"},y={class:"text-5",percent:"","justify-right":""},b={class:"container no-padding"},k=c((()=>(0,n._)("h6",null,"Skills that you already have:",-1))),q={class:"row"},z=["href"],x={class:"col-xs-12 col-sm-6 col-md-12"},j=c((()=>(0,n._)("h6",null,"Skills that you do not have:",-1)));function C(e,a,t,o,r,l){const i=(0,n.up)("q-linear-progress"),c=(0,n.up)("q-badge"),C=(0,n.up)("apex-donut"),D=(0,n.up)("q-card");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",u,[(0,n._)("div",p,[(0,n._)("span",g,(0,s.zw)(e.category_normalized),1)]),(0,n._)("div",_,[(0,n._)("span",m,(0,s.zw)(e.salary_normalized),1)])]),(0,n._)("div",h,[(0,n._)("div",w,[(0,n._)("div",v,[(0,n.Wm)(i,{label:e.percentage,value:e.ownership},null,8,["label","value"])]),(0,n._)("div",f,[(0,n._)("span",y,(0,s.zw)(e.percentage),1)])])]),(0,n._)("div",b,[k,(0,n._)("div",q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.skill_owned_labels,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"col-auto",key:e.category,href:`https://jaimevalero.github.io/managing-awesome-lists/var/topics/-${e.category}`},[(0,n.Wm)(c,{class:"topic-tag"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e),1)])),_:2},1024)],8,z)))),128)),(0,n._)("div",x,[j,(0,n.Wm)(D,null,{default:(0,n.w5)((()=>[(0,n.Wm)(C,{skills:e.skills_not_owned,series:e.skill_not_owner_values},null,8,["skills","series"])])),_:1})])])])])}t(702),t(8964),t(2809);const D=(0,n.RC)((()=>Promise.all([t.e(736),t.e(83)]).then(t.bind(t,6083)))),Z=(0,n.aZ)({name:"SingleCategory",components:{ApexDonut:D},props:{category:{type:String,required:!0},ownership:{type:Number,required:!0,default:0},salary:{type:Number,required:!0,default:0},skills_owned:{type:Object},skills_not_owned:{type:Object}},computed:{category_normalized:function(){return this.category.replaceAll("+"," ")},percentage:function(){return parseFloat(100*this.ownership).toFixed(2)+"%"},salary_normalized:function(){return"$"+this.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},skill_not_owner_values:function(){var e=[],a=0;for(const[t,n]of Object.entries(this.skills_not_owned))a<=15&&(a++,e.push(n));return e},skill_owned_labels:function(){var e=[];for(const[a,t]of Object.entries(this.skills_owned))e.push(a);return e}}});var S=t(1639),W=t(8289),O=t(990),P=t(4458),Q=t(9984),F=t.n(Q);const $=(0,S.Z)(Z,[["render",C],["__scopeId","data-v-7542f4d3"]]),A=$;F()(Z,"components",{QLinearProgress:W.Z,QBadge:O.Z,QCard:P.Z});const B=(0,n.aZ)({name:"DialogsPage",computed:{login_normalized:function(){var e;try{e=this.$router.currentRoute._value.params.id,console.log(e)}catch(a){console.log(a),e="borja"}return e}},components:{SingleCategory:A},data(){return{categories:[]}},created(){console.log("0"),i().get("http://127.0.0.1:8888/v1/analize-user/?token=fb1d3b71-2c1e-49cb-b04b-46534534ef0a&login="+this.login_normalized).then((e=>{this.categories=e.data.categories})).catch((e=>{this.errors.push(e)}))},setup(){const e=(0,r.Z)();function a(){e.dialog({title:"Prompt",message:"What is your name?",prompt:{model:"",type:"text"},cancel:!0,persistent:!0}).onOk((e=>{})).onCancel((()=>{})).onDismiss((()=>{}))}return{alert,confirm,prompt:a}}});var H=t(9885);const K=(0,S.Z)(B,[["render",o]]),N=K;F()(B,"components",{QPage:H.Z})}}]);