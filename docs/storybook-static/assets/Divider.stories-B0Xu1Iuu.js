import{x as n}from"./lit-element-C4bBeaiV.js";import{g as L}from"./storybook-utils-CyXQhEhe.js";import{f as M}from"./fixFigmaPath-DxFz5b9E.js";import{t as U}from"./element-BmCHZ0P_.js";import{Y}from"./Divider-Dlsl_grt.js";import{N as A}from"./element-DjMGbAoC.js";import"./Button-9kO0EHpa.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./Button-Drw3qSHJ.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,R=(e,t,o,s)=>{for(var i=s>1?void 0:s?G(t,o):t,f=e.length-1,b;f>=0;f--)(b=e[f])&&(i=(s?b(t,o,i):b(i))||i);return s&&i&&E(t,o,i),i};let x=class extends A(Y){};x=R([U("nl-divider")],x);const{args:T,argTypes:Z,template:xr}=L("nl-divider");function r(e={}){const t=e.orientation||"horizontal",o=e.class||"";return n`<nl-divider orientation="${t}" class="${o}"></nl-divider>`}const a={design:{type:"figma",url:M("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=8615-18656&t=rALyGCVj0mWytV8R-1")}},gr={title:"Components/network-line/Divider",component:"nl-divider",args:T,argTypes:Z,parameters:{actions:{handles:[]},docs:{description:{component:"区切り線コンポーネントです。水平方向と垂直方向の区切り線を表示できます。"}}}},d={render:e=>r(e),args:{orientation:"horizontal"},parameters:a},l={render:()=>n`
    <div class="p-4">
      <div class="mb-4">上部コンテンツ</div>
      ${r({orientation:"horizontal"})}
      <div class="mt-4">下部コンテンツ</div>
    </div>
  `,parameters:a},c={render:()=>n`
    <div class="flex h-20 items-center p-4">
      <div>左側コンテンツ</div>
      ${r({orientation:"vertical",class:"mx-4"})}
      <div>右側コンテンツ</div>
    </div>
  `,parameters:a},m={render:()=>n`
    <div class="p-4 border rounded">
      <h3 class="text-lg font-bold">セクションタイトル</h3>
      ${r({orientation:"horizontal",class:"my-2"})}
      <p>
        これはセクションの内容です。区切り線を使用することで、視覚的に内容を分けることができます。
      </p>
    </div>
  `,parameters:a},p={render:()=>n`
    <div class="p-4 border rounded">
      <form class="flex flex-col gap-4">
        <div>
          <label class="block mb-1">名前</label>
          <input type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        ${r({orientation:"horizontal"})}
        <div>
          <label class="block mb-1">メールアドレス</label>
          <input type="email" class="border rounded px-2 py-1 w-full" />
        </div>
        ${r({orientation:"horizontal"})}
        <div>
          <label class="block mb-1">メッセージ</label>
          <textarea class="border rounded px-2 py-1 w-full h-20"></textarea>
        </div>
        <div class="flex justify-end">
          <nl-button variant="contained" color="primary" type="button">送信</nl-button>
        </div>
      </form>
    </div>
  `,parameters:a},v={render:()=>n`
    <div class="flex items-center p-4">
      <div>項目1</div>
      ${r({orientation:"vertical",class:"mx-2 h-6"})}
      <div>項目2</div>
      ${r({orientation:"vertical",class:"mx-2 h-6"})}
      <div>項目3</div>
      ${r({orientation:"vertical",class:"mx-2 h-6"})}
      <div>項目4</div>
    </div>
    ${r({orientation:"horizontal",class:"my-4"})}
    <div class="flex flex-col">
      <div class="py-2">セクション1</div>
      ${r({orientation:"horizontal"})}
      <div class="py-2">セクション2</div>
      ${r({orientation:"horizontal"})}
      <div class="py-2">セクション3</div>
    </div>
  `,parameters:a},u={render:e=>r(e),args:{orientation:"horizontal"},parameters:a};var g,h,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => renderNlDivider(args),
  args: {
    orientation: 'horizontal'
  },
  parameters: figmaParameters
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var $,D,z;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <div class="p-4">
      <div class="mb-4">上部コンテンツ</div>
      \${renderNlDivider({
    orientation: 'horizontal'
  })}
      <div class="mt-4">下部コンテンツ</div>
    </div>
  \`,
  parameters: figmaParameters
}`,...(z=(D=l.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var N,P,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex h-20 items-center p-4">
      <div>左側コンテンツ</div>
      \${renderNlDivider({
    orientation: 'vertical',
    class: 'mx-4'
  })}
      <div>右側コンテンツ</div>
    </div>
  \`,
  parameters: figmaParameters
}`,...(w=(P=c.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var S,_,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div class="p-4 border rounded">
      <h3 class="text-lg font-bold">セクションタイトル</h3>
      \${renderNlDivider({
    orientation: 'horizontal',
    class: 'my-2'
  })}
      <p>
        これはセクションの内容です。区切り線を使用することで、視覚的に内容を分けることができます。
      </p>
    </div>
  \`,
  parameters: figmaParameters
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var C,k,O;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  // ▼▼▼ この render 関数を修正 ▼▼▼
  render: () => html\`
    <div class="p-4 border rounded">
      <form class="flex flex-col gap-4">
        <div>
          <label class="block mb-1">名前</label>
          <input type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        \${renderNlDivider({
    orientation: 'horizontal'
  })}
        <div>
          <label class="block mb-1">メールアドレス</label>
          <input type="email" class="border rounded px-2 py-1 w-full" />
        </div>
        \${renderNlDivider({
    orientation: 'horizontal'
  })}
        <div>
          <label class="block mb-1">メッセージ</label>
          <textarea class="border rounded px-2 py-1 w-full h-20"></textarea>
        </div>
        <div class="flex justify-end">
          <nl-button variant="contained" color="primary" type="button">送信</nl-button>
        </div>
      </form>
    </div>
  \`,
  // ▲▲▲ ここまで修正 ▲▲▲
  parameters: figmaParameters
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var I,V,W;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex items-center p-4">
      <div>項目1</div>
      \${renderNlDivider({
    orientation: 'vertical',
    class: 'mx-2 h-6'
  })}
      <div>項目2</div>
      \${renderNlDivider({
    orientation: 'vertical',
    class: 'mx-2 h-6'
  })}
      <div>項目3</div>
      \${renderNlDivider({
    orientation: 'vertical',
    class: 'mx-2 h-6'
  })}
      <div>項目4</div>
    </div>
    \${renderNlDivider({
    orientation: 'horizontal',
    class: 'my-4'
  })}
    <div class="flex flex-col">
      <div class="py-2">セクション1</div>
      \${renderNlDivider({
    orientation: 'horizontal'
  })}
      <div class="py-2">セクション2</div>
      \${renderNlDivider({
    orientation: 'horizontal'
  })}
      <div class="py-2">セクション3</div>
    </div>
  \`,
  parameters: figmaParameters
}`,...(W=(V=v.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,H,K;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => renderNlDivider(args),
  args: {
    orientation: 'horizontal'
  },
  parameters: figmaParameters
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const hr=["Default","Horizontal","Vertical","InContext","InForm","MultipleUsage","Playground"];export{d as Default,l as Horizontal,m as InContext,p as InForm,v as MultipleUsage,u as Playground,c as Vertical,hr as __namedExportsOrder,gr as default};
