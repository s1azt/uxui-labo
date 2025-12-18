import{x as t}from"./lit-element-C4bBeaiV.js";import{g as Z}from"./storybook-utils-CyXQhEhe.js";import{f as A}from"./fixFigmaPath-DxFz5b9E.js";import"./Title-DtrnF7R7.js";import"./Button-Drw3qSHJ.js";import"./Icon-CzSa45Vk.js";import{w as B}from"./decorator-Dt3Huotz.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./v4-CQkTLCs1.js";const{args:_,argTypes:j,template:z}=Z("yg-title"),rt={title:"Components/Base/Title",component:"yg-title",args:_,argTypes:j,decorators:[B]},e={render:R=>t` ${z(R)} `,args:{title:"タイトル","left-section-slot":'<yg-button slot="left-section">戻る</yg-button>',"right-section-slot":'<yg-button slot="right-section">使い方</yg-button>'},parameters:{design:{type:"figma",url:A("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},o={render:()=>t`
    <yg-title title="左側のみのタイトル">
      <yg-button
        slot="left-section"
        variant="outlined"
        left-icon="mdi:arrow-left"
        >戻る</yg-button
      >
    </yg-title>
  `},n={render:()=>t`
    <yg-title title="右側のみのタイトル">
      <yg-button slot="right-section" size="large">使い方</yg-button>
    </yg-title>
  `},i={render:()=>t` <yg-title title="セクションなしのタイトル"></yg-title> `},r={render:()=>t`
    <yg-title title="複数ボタン付きタイトル">
      <div slot="left-section" class="flex gap-2">
        <yg-button variant="outlined" left-icon="mdi:arrow-left"
          >戻る</yg-button
        >
        <yg-button variant="outlined" left-icon="mdi:refresh">更新</yg-button>
      </div>
      <div slot="right-section" class="flex gap-2">
        <yg-button variant="outlined">キャンセル</yg-button>
        <yg-button>保存</yg-button>
      </div>
    </yg-title>
  `},s={render:()=>t`
    <yg-title title="アイコン付きタイトル">
      <yg-button
        slot="left-section"
        variant="outlined"
        left-icon="mdi:arrow-left"
        >戻る</yg-button
      >
      <div slot="right-section" class="flex gap-2">
        <yg-icon icon="mdi:bell"></yg-icon>
        <yg-icon icon="mdi:cog"></yg-icon>
        <yg-button left-icon="mdi:help">ヘルプ</yg-button>
      </div>
    </yg-title>
  `},l={render:()=>t`
    <yg-title
      title="これは非常に長いタイトルで、コンテナの幅を超える場合に省略されるかどうかをテストするためのものです"
    >
      <yg-button slot="left-section" variant="outlined">戻る</yg-button>
      <yg-button slot="right-section">アクション</yg-button>
    </yg-title>
  `};var a,g,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    title: 'タイトル',
    'left-section-slot': '<yg-button slot="left-section">戻る</yg-button>',
    'right-section-slot': '<yg-button slot="right-section">使い方</yg-button>'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(c=(g=e.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var m,u,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <yg-title title="左側のみのタイトル">
      <yg-button
        slot="left-section"
        variant="outlined"
        left-icon="mdi:arrow-left"
        >戻る</yg-button
      >
    </yg-title>
  \`
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var d,p,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <yg-title title="右側のみのタイトル">
      <yg-button slot="right-section" size="large">使い方</yg-button>
    </yg-title>
  \`
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:'{\n  render: () => html` <yg-title title="セクションなしのタイトル"></yg-title> `\n}',...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,S,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <yg-title title="複数ボタン付きタイトル">
      <div slot="left-section" class="flex gap-2">
        <yg-button variant="outlined" left-icon="mdi:arrow-left"
          >戻る</yg-button
        >
        <yg-button variant="outlined" left-icon="mdi:refresh">更新</yg-button>
      </div>
      <div slot="right-section" class="flex gap-2">
        <yg-button variant="outlined">キャンセル</yg-button>
        <yg-button>保存</yg-button>
      </div>
    </yg-title>
  \`
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var W,K,C;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <yg-title title="アイコン付きタイトル">
      <yg-button
        slot="left-section"
        variant="outlined"
        left-icon="mdi:arrow-left"
        >戻る</yg-button
      >
      <div slot="right-section" class="flex gap-2">
        <yg-icon icon="mdi:bell"></yg-icon>
        <yg-icon icon="mdi:cog"></yg-icon>
        <yg-button left-icon="mdi:help">ヘルプ</yg-button>
      </div>
    </yg-title>
  \`
}`,...(C=(K=s.parameters)==null?void 0:K.docs)==null?void 0:C.source}}};var O,T,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <yg-title
      title="これは非常に長いタイトルで、コンテナの幅を超える場合に省略されるかどうかをテストするためのものです"
    >
      <yg-button slot="left-section" variant="outlined">戻る</yg-button>
      <yg-button slot="right-section">アクション</yg-button>
    </yg-title>
  \`
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const st=["Default","LeftSectionOnly","RightSectionOnly","NoSections","MultipleButtons","WithIcons","LongTitle"];export{e as Default,o as LeftSectionOnly,l as LongTitle,r as MultipleButtons,i as NoSections,n as RightSectionOnly,s as WithIcons,st as __namedExportsOrder,rt as default};
