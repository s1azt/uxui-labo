import{x as t}from"./lit-element-C4bBeaiV.js";import{g as _}from"./storybook-utils-CyXQhEhe.js";import{f as r}from"./fixFigmaPath-DxFz5b9E.js";import"./NumberPlate-C1bX_6-U.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";const{args:E,argTypes:H,template:i}=_("yg-number-plate"),de={title:"Components/Base/NumberPlate",component:"yg-number-plate",args:E,argTypes:H},a={region:"品川",classificationNumber:"500",hiragana:"さ",registrationNumber:"4249"},n={render:e=>t`${i(e)}`,args:{type:"regular",size:"medium",data:a,link:!1},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},s={render:e=>t`${i(e)}`,args:{type:"light",size:"medium",data:a,link:!1},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},m={render:e=>t`${i(e)}`,args:{type:"regularBusiness",size:"medium",data:a,link:!1},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},g={render:e=>t`${i(e)}`,args:{type:"lightBusiness",size:"medium",data:a,link:!1},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},d={render:e=>t`${i(e)}`,args:{type:"none",size:"medium",data:a,link:!1},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},p={render:e=>t`${i(e)}`,args:{type:"regular",size:"small",data:a,link:!1},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},l={render:e=>t`${i(e)}`,args:{type:"regular",size:"medium",data:a,link:!0},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},u={render:e=>t`
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <div>
        <h3>Regular</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="${a}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Light</h3>
        <yg-number-plate
          type="light"
          size="medium"
          .data="${a}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Regular Business</h3>
        <yg-number-plate
          type="regularBusiness"
          size="medium"
          .data="${a}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Light Business</h3>
        <yg-number-plate
          type="lightBusiness"
          size="medium"
          .data="${a}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>None</h3>
        <yg-number-plate
          type="none"
          size="medium"
          .data="${a}"
        ></yg-number-plate>
      </div>
    </div>
  `,parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},o={render:e=>t`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <h3>Medium</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="${a}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Small</h3>
        <yg-number-plate
          type="regular"
          size="small"
          .data="${a}"
        ></yg-number-plate>
      </div>
    </div>
  `,parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},c={render:e=>t`
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <div>
        <h3>東京</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="${{region:"東京",classificationNumber:"300",hiragana:"あ",registrationNumber:"1234"}}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>横浜</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="${{region:"横浜",classificationNumber:"500",hiragana:"か",registrationNumber:"5678"}}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>名古屋</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="${{region:"名古屋",classificationNumber:"800",hiragana:"さ",registrationNumber:"9012"}}"
        ></yg-number-plate>
      </div>
    </div>
  `,parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};var y,f,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    type: 'regular',
    size: 'medium',
    data: defaultData,
    link: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,W,K;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    type: 'light',
    size: 'medium',
    data: defaultData,
    link: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(K=(W=s.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var b,v,j;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    type: 'regularBusiness',
    size: 'medium',
    data: defaultData,
    link: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(j=(v=m.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var Y,S,z;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    type: 'lightBusiness',
    size: 'medium',
    data: defaultData,
    link: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(z=(S=g.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var $,x,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    type: 'none',
    size: 'medium',
    data: defaultData,
    link: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(A=(x=d.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var T,M,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    type: 'regular',
    size: 'small',
    data: defaultData,
    link: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var D,J,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    type: 'regular',
    size: 'medium',
    data: defaultData,
    link: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(N=(J=l.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var U,X,Z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <div>
        <h3>Regular</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="\${defaultData}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Light</h3>
        <yg-number-plate
          type="light"
          size="medium"
          .data="\${defaultData}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Regular Business</h3>
        <yg-number-plate
          type="regularBusiness"
          size="medium"
          .data="\${defaultData}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Light Business</h3>
        <yg-number-plate
          type="lightBusiness"
          size="medium"
          .data="\${defaultData}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>None</h3>
        <yg-number-plate
          type="none"
          size="medium"
          .data="\${defaultData}"
        ></yg-number-plate>
      </div>
    </div>
  \`,
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var k,B,P;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <h3>Medium</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="\${defaultData}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>Small</h3>
        <yg-number-plate
          type="regular"
          size="small"
          .data="\${defaultData}"
        ></yg-number-plate>
      </div>
    </div>
  \`,
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,L,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <div>
        <h3>東京</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="\${{
    region: '東京',
    classificationNumber: '300',
    hiragana: 'あ',
    registrationNumber: '1234'
  }}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>横浜</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="\${{
    region: '横浜',
    classificationNumber: '500',
    hiragana: 'か',
    registrationNumber: '5678'
  }}"
        ></yg-number-plate>
      </div>
      <div>
        <h3>名古屋</h3>
        <yg-number-plate
          type="regular"
          size="medium"
          .data="\${{
    region: '名古屋',
    classificationNumber: '800',
    hiragana: 'さ',
    registrationNumber: '9012'
  }}"
        ></yg-number-plate>
      </div>
    </div>
  \`,
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const pe=["Default","Light","RegularBusiness","LightBusiness","None","Small","WithLink","AllTypes","AllSizes","DifferentData"];export{o as AllSizes,u as AllTypes,n as Default,c as DifferentData,s as Light,g as LightBusiness,d as None,m as RegularBusiness,p as Small,l as WithLink,pe as __namedExportsOrder,de as default};
