import{x as n}from"./lit-element-C4bBeaiV.js";import{g as z}from"./storybook-utils-CyXQhEhe.js";import"./NumberValueBar-Bl7Fy_O7.js";import{f as u}from"./fixFigmaPath-DxFz5b9E.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";const{args:x,argTypes:C,template:o}=z("yg-number-value-bar"),N={title:"Components/Base/NumberValueBar",component:"yg-number-value-bar",args:x,argTypes:C},r={render:e=>n`${o(e)}`,args:{title:"タイトル",unit:"単位",value:"999999999",size:"medium",comma:!0,align:"center"},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875")}}},a={render:e=>n`${o(e)}`,args:{title:"タイトル",unit:"単位",value:"999999999",size:"small",comma:!0,"link-type":"icon",align:"center"},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875")}}},i={render:e=>n`${o(e)}`,args:{title:"タイトル",unit:"単位",value:"999999999",size:"medium",comma:!0,link:!1,align:"center"},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875")}}},t={render:e=>n`${o(e)}`,args:{title:"タイトル",unit:"単位",value:"999999999",size:"small",comma:!0,link:!1,align:"center"},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875")}}},m={render:e=>n`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <h3>カスタム背景色（カラーコード）</h3>
        <yg-number-value-bar
          title="売上"
          unit="円"
          value="1000000"
          size="medium"
          comma="true"
          align="center"
          background-color="primary"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>カスタム背景色（RGB）</h3>
        <yg-number-value-bar
          title="利益"
          unit="円"
          value="500000"
          size="medium"
          comma="true"
          align="center"
          background-color="rgb(255, 235, 238)"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>カスタム背景色（HSL）</h3>
        <yg-number-value-bar
          title="損失"
          unit="円"
          value="200000"
          size="medium"
          comma="true"
          align="center"
          background-color="hsl(120, 50%, 90%)"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>アイコン付き（カスタム背景色）</h3>
        <yg-number-value-bar
          title="目標達成率"
          unit="%"
          value="85"
          size="medium"
          comma="false"
          align="center"
          link-type="icon"
          background-color="#fff3e0"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>小サイズ（カスタム背景色）</h3>
        <yg-number-value-bar
          title="件数"
          unit="件"
          value="1234"
          size="small"
          comma="true"
          align="center"
          background-color="#f3e5f5"
        ></yg-number-value-bar>
      </div>
    </div>
  `,args:{}};var l,s,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return html\`\${template(args)}\`;
  },
  args: {
    title: 'タイトル',
    unit: '単位',
    value: '999999999',
    size: 'medium',
    comma: true,
    align: 'center'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875')
    }
  }
}`,...(g=(s=r.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: 'タイトル',
    unit: '単位',
    value: '999999999',
    size: 'small',
    comma: true,
    'link-type': 'icon',
    align: 'center'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875')
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,f,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: 'タイトル',
    unit: '単位',
    value: '999999999',
    size: 'medium',
    comma: true,
    link: false,
    align: 'center'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875')
    }
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,y,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: 'タイトル',
    unit: '単位',
    value: '999999999',
    size: 'small',
    comma: true,
    link: false,
    align: 'center'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875')
    }
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var W,w,K;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <h3>カスタム背景色（カラーコード）</h3>
        <yg-number-value-bar
          title="売上"
          unit="円"
          value="1000000"
          size="medium"
          comma="true"
          align="center"
          background-color="primary"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>カスタム背景色（RGB）</h3>
        <yg-number-value-bar
          title="利益"
          unit="円"
          value="500000"
          size="medium"
          comma="true"
          align="center"
          background-color="rgb(255, 235, 238)"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>カスタム背景色（HSL）</h3>
        <yg-number-value-bar
          title="損失"
          unit="円"
          value="200000"
          size="medium"
          comma="true"
          align="center"
          background-color="hsl(120, 50%, 90%)"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>アイコン付き（カスタム背景色）</h3>
        <yg-number-value-bar
          title="目標達成率"
          unit="%"
          value="85"
          size="medium"
          comma="false"
          align="center"
          link-type="icon"
          background-color="#fff3e0"
        ></yg-number-value-bar>
      </div>
      <div>
        <h3>小サイズ（カスタム背景色）</h3>
        <yg-number-value-bar
          title="件数"
          unit="件"
          value="1234"
          size="small"
          comma="true"
          align="center"
          background-color="#f3e5f5"
        ></yg-number-value-bar>
      </div>
    </div>
  \`,
  args: {}
}`,...(K=(w=m.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};const R=["MediumWithLink","SmallWithLink","MediumWithoutLink","SmallWithoutLink","WithCustomBackgroundColor"];export{r as MediumWithLink,i as MediumWithoutLink,a as SmallWithLink,t as SmallWithoutLink,m as WithCustomBackgroundColor,R as __namedExportsOrder,N as default};
