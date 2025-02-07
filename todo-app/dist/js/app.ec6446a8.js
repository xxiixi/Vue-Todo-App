(function(){"use strict";var t={3255:function(t,e,o){var n=o(5130),r=(o(8992),o(4520),o(6768));const d={class:"container"};function l(t,e,o,n,l,i){const u=(0,r.g2)("todo-add"),c=(0,r.g2)("todo-filter"),a=(0,r.g2)("todo-list");return(0,r.uX)(),(0,r.CE)("main",null,[(0,r.Lk)("div",d,[e[1]||(e[1]=(0,r.Lk)("h1",null,"xxiixi Todo-list",-1)),(0,r.bF)(u,{tid:n.todos.length,onAddTodo:n.addTodo},null,8,["tid","onAddTodo"]),(0,r.bF)(c,{selected:n.filter,onChangeFilter:e[0]||(e[0]=t=>n.filter=t)},null,8,["selected"]),(0,r.bF)(a,{todos:n.filteredTodos},null,8,["todos"])])])}o(4114);var i=o(144);const u={class:"input-add"};function c(t,e,o,d,l,i){return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>d.todoContent=t),onKeyup:e[1]||(e[1]=(0,n.jR)(((...t)=>d.emitAddTodo&&d.emitAddTodo(...t)),["enter"]))},null,544),[[n.Jo,d.todoContent]]),(0,r.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>d.emitAddTodo&&d.emitAddTodo(...t))},e[3]||(e[3]=[(0,r.Lk)("i",{class:"plus"},null,-1)]))])}var a={name:"TodoAdd",props:{tid:{type:Number,required:!0}},setup(t,e){const o=(0,i.KR)(""),n=()=>{const n={id:t.tid,content:o.value,completed:!1};e.emit("add-todo",n),o.value=""};return{todoContent:o,emitAddTodo:n}}},s=o(1241);const f=(0,s.A)(a,[["render",c]]);var p=f;const v={class:"todo-list"};function m(t,e,o,n,d,l){const i=(0,r.g2)("todo-list-item");return(0,r.uX)(),(0,r.CE)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.todos,(t=>((0,r.uX)(),(0,r.Wv)(i,{key:t.id,"todo-item":t,onChangeState:e=>t.completed=e.target.checked},null,8,["todo-item","onChangeState"])))),128))])}var h=o(4232);const b=["checked"];function k(t,e,o,n,d,l){return(0,r.uX)(),(0,r.CE)("div",{class:(0,h.C4)(["todo-item",{done:o.todoItem.completed}])},[(0,r.Lk)("label",null,[(0,r.Lk)("input",{type:"checkbox",checked:o.todoItem.completed,onClick:e[0]||(e[0]=e=>t.$emit("change-state",e))},null,8,b),(0,r.eW)(" "+(0,h.v_)(o.todoItem.content)+" ",1),e[1]||(e[1]=(0,r.Lk)("span",{class:"check-button"},null,-1))])],2)}var C={name:"TodoListItem",props:["todoItem"]};const T=(0,s.A)(C,[["render",k]]);var g=T,A={name:"TodoList",components:{TodoListItem:g},props:["todos"]};const y=(0,s.A)(A,[["render",m]]);var L=y;const E={class:"filters"},O=["onClick"];function x(t,e,o,n,d,l){return(0,r.uX)(),(0,r.CE)("div",E,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.filters,(e=>((0,r.uX)(),(0,r.CE)("span",{key:e.value,onClick:o=>t.$emit("change-filter",e.value),class:(0,h.C4)(["filter",{active:o.selected===e.value}])},(0,h.v_)(e.label),11,O)))),128))])}var w={name:"TodoFilter",props:["selected"],setup(){const t=[{label:"全部",value:"all"},{label:"已完成",value:"done"},{label:"未完成",value:"todo"}];return{filters:t}}};const F=(0,s.A)(w,[["render",x]]);var X=F,I={name:"App",components:{TodoAdd:p,TodoList:L,TodoFilter:X},setup(){const t=(0,i.KR)([]),e=e=>{t.value.push(e)},o=(0,i.KR)("all"),n=(0,r.EW)((()=>{switch(o.value){case"done":return t.value.filter((t=>t.completed));case"todo":return t.value.filter((t=>!t.completed));default:return t.value}}));return{todos:t,filter:o,addTodo:e,filteredTodos:n}}};const j=(0,s.A)(I,[["render",l]]);var K=j;(0,n.Ef)(K).mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var d=e[n]={exports:{}};return t[n].call(d.exports,d,d.exports,o),d.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,d){if(!n){var l=1/0;for(a=0;a<t.length;a++){n=t[a][0],r=t[a][1],d=t[a][2];for(var i=!0,u=0;u<n.length;u++)(!1&d||l>=d)&&Object.keys(o.O).every((function(t){return o.O[t](n[u])}))?n.splice(u--,1):(i=!1,d<l&&(l=d));if(i){t.splice(a--,1);var c=r();void 0!==c&&(e=c)}}return e}d=d||0;for(var a=t.length;a>0&&t[a-1][2]>d;a--)t[a]=t[a-1];t[a]=[n,r,d]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,d,l=n[0],i=n[1],u=n[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(u)var a=u(o)}for(e&&e(n);c<l.length;c++)d=l[c],o.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return o.O(a)},n=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(3255)}));n=o.O(n)})();
//# sourceMappingURL=app.ec6446a8.js.map