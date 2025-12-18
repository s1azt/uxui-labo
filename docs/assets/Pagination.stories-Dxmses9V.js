import{x as m}from"./lit-element-C4bBeaiV.js";import{g as S}from"./storybook-utils-CyXQhEhe.js";import{c as h}from"./index-Br9a1yed.js";import{t as y}from"./element-BmCHZ0P_.js";import{p as w,Y as O}from"./Pagination-BMRm9RyA.js";import{N as D}from"./element-DjMGbAoC.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./Icon-CzSa45Vk.js";var L=Object.defineProperty,M=Object.getOwnPropertyDescriptor,N=(t,n,i,e)=>{for(var r=e>1?void 0:e?M(n,i):n,p=t.length-1,c;p>=0;p--)(c=t[p])&&(r=(e?c(n,i,r):c(r))||r);return e&&r&&L(n,i,r),r};const T=h({extend:w,base:"rounded-[16px]"});let l=class extends D(O){buttonStyle(){return T}};l=N([y("nl-pagination")],l);const{events:j,args:B,argTypes:C,template:Y}=S("nl-pagination"),V={title:"Components/network-line/Pagination",component:"nl-pagination",componentType:l,args:{...B,total:10,current:1},argTypes:{...C,total:{control:"number",description:"合計ページ数"},current:{control:"number",description:"現在のページ"}},parameters:{actions:{handles:j}}},a={render:t=>m` ${Y(t)} `,args:{total:10,current:1}},o={render:()=>m`
    <nl-pagination total="20" current="10"></nl-pagination>
  `,args:{total:20,current:10}},s={render:()=>m`
    <nl-pagination total="5" current="5"></nl-pagination>
  `,args:{total:5,current:5}};var g,u,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    total: 10,
    current: 1
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,P,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <nl-pagination total="20" current="10"></nl-pagination>
  \`,
  args: {
    total: 20,
    current: 10
  }
}`,...(_=(P=o.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var b,v,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <nl-pagination total="5" current="5"></nl-pagination>
  \`,
  args: {
    total: 5,
    current: 5
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const X=["Default","MiddlePage","LastPage"];export{a as Default,s as LastPage,o as MiddlePage,X as __namedExportsOrder,V as default};
