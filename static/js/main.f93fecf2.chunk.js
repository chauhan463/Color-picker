(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c);a(13);function o(e){var t=e.toString(16);return 1===t.length?"0"+t:t}var s=function(e,t,a){return"#"+o(e)+o(t)+o(a)};var m=e=>{let{rgb:t,weight:a,index:c,hexColor:l}=e;const[o,m]=Object(n.useState)(!1),u=t.join(","),i=(s(...t),"#".concat(l));return Object(n.useEffect)(()=>{const e=setTimeout(()=>{m(!1)},3e3);return()=>clearTimeout(e)},[o]),r.a.createElement("article",{onClick:()=>{m(!0),navigator.clipboard.writeText(i)},className:"color ".concat(c>10&&"color-light"),style:{backgroundColor:"rgb(".concat(u,")")}},r.a.createElement("p",{className:"percent-value"},a,"%"),r.a.createElement("p",{className:"color-values"},i),o&&r.a.createElement("p",{className:"alert"},"Copied to clipboard "))},u=a(1),i=a.n(u);var p=function(){const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(10),[l,o]=Object(n.useState)(!1),[s,u]=Object(n.useState)(new i.a("#f15025").all(10));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"container"},r.a.createElement("h3",{className:!0}," Select % gap: "),r.a.createElement("input",{type:"number",onChange:e=>c(e.target.value),name:"",value:a,id:""}),r.a.createElement("h3",null,"Color Generator :"),r.a.createElement("form",{className:"form",onSubmit:t=>{t.preventDefault();try{let t=new i.a(e).all(parseInt(a));u(t),console.log(t)}catch(l){o(!0),console.log(l)}}},r.a.createElement("input",{type:"text",name:"color",id:"",value:e,onChange:e=>t(e.target.value),placeholder:"#f15025",className:"".concat(l?"error":null)}),r.a.createElement("button",{className:"btn",type:"submit"},"Submit"))),r.a.createElement("section",{className:"colors"},s.map((e,t)=>r.a.createElement(m,Object.assign({key:t},e,{index:t,hexColor:e.hex})))))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)))},4:function(e,t,a){e.exports=a(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.f93fecf2.chunk.js.map