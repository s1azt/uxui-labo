import{x as i}from"./lit-element-C4bBeaiV.js";import{g as L}from"./storybook-utils-CyXQhEhe.js";import{t as k}from"./element-BmCHZ0P_.js";import{c as O}from"./index-Br9a1yed.js";import{N as T}from"./element-DjMGbAoC.js";import{s as d,Y as C}from"./StatusLabel-DmoJy1fm.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";var D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,N=(e,a,p,t)=>{for(var l=t>1?void 0:t?P(a,p):a,c=e.length-1,u;c>=0;c--)(u=e[c])&&(l=(t?u(a,p,l):u(l))||l);return t&&l&&D(a,p,l),l};O({extend:d,compoundVariants:[...d.compoundVariants||[],{color:"primary",type:"dark",class:"bg-back-ground-status-darkblue text-text-white"}]},{twMerge:!1});let m=class extends T(C){};m=N([k("nl-status-label")],m);const{events:j,args:M,argTypes:Y,template:$}=L("nl-status-label"),X={title:"Components/network-line/StatusLabel",component:"nl-status-label",componentType:m,args:{...M,"default-slot":"ステータス",color:"gray",type:"light",size:"small"},argTypes:{...Y,"default-slot":{control:"text",description:"ステータスラベルのテキスト"},color:{control:"select",options:["gray","error","green","warning","primary"],description:"ステータスラベルの色"},type:{control:"select",options:["light","dark"],description:"ステータスラベルの種類"},size:{control:"select",options:["small","medium","large"],description:"ステータスラベルのサイズ"}},parameters:{actions:{handles:j}}},s={render:e=>i` ${$(e)} `,args:{"default-slot":"ステータス",color:"gray",type:"light",size:"small"}},r={render:()=>i`
    <div class="flex flex-wrap gap-2">
      <nl-status-label color="gray">未処理</nl-status-label>
      <nl-status-label color="primary">処理中</nl-status-label>
      <nl-status-label color="green">完了</nl-status-label>
      <nl-status-label color="warning">警告</nl-status-label>
      <nl-status-label color="error">エラー</nl-status-label>
    </div>
  `},o={render:()=>i`
    <div class="flex flex-wrap gap-2 items-center">
      <nl-status-label size="small">小</nl-status-label>
      <nl-status-label size="medium">中</nl-status-label>
      <nl-status-label size="large">大</nl-status-label>
    </div>
  `},n={render:()=>i`
    <div class="flex flex-wrap gap-2">
      <nl-status-label type="light" color="primary">ライト</nl-status-label>
      <nl-status-label type="dark" color="primary">ダーク</nl-status-label>
    </div>
  `};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': 'ステータス',
    color: 'gray',
    type: 'light',
    size: 'small'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,x,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-wrap gap-2">
      <nl-status-label color="gray">未処理</nl-status-label>
      <nl-status-label color="primary">処理中</nl-status-label>
      <nl-status-label color="green">完了</nl-status-label>
      <nl-status-label color="warning">警告</nl-status-label>
      <nl-status-label color="error">エラー</nl-status-label>
    </div>
  \`
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,h,z;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-wrap gap-2 items-center">
      <nl-status-label size="small">小</nl-status-label>
      <nl-status-label size="medium">中</nl-status-label>
      <nl-status-label size="large">大</nl-status-label>
    </div>
  \`
}`,...(z=(h=o.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var S,_,V;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-wrap gap-2">
      <nl-status-label type="light" color="primary">ライト</nl-status-label>
      <nl-status-label type="dark" color="primary">ダーク</nl-status-label>
    </div>
  \`
}`,...(V=(_=n.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const Z=["Default","ColorVariations","SizeVariations","TypeVariations"];export{r as ColorVariations,s as Default,o as SizeVariations,n as TypeVariations,Z as __namedExportsOrder,X as default};
