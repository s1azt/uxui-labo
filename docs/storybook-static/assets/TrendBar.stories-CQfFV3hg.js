import{x as r}from"./lit-element-C4bBeaiV.js";import{g as P}from"./storybook-utils-CyXQhEhe.js";import{f as t}from"./fixFigmaPath-DxFz5b9E.js";import"./TrendBar-DqQMT_gz.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";const{args:M,argTypes:N,template:a}=P("yg-trend-bar"),ee={title:"Components/Base/TrendBar",component:"yg-trend-bar",args:M,argTypes:N},n={render:e=>r`${a(e)}`,args:{title:"タイトル",unit:"単位",value:"999999999",size:"medium",comma:!0,trend:"up"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}},i={render:e=>r`${a(e)}`,args:{title:"タイトル",unit:"単位",value:"999999999",size:"small",comma:!0,trend:"down"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}},d={render:e=>r`${a(e)}`,args:{title:"横ばい",unit:"単位",value:"500000",size:"medium",comma:!0,trend:"steady"},parameters:{docs:{description:{story:"横ばい（steady）の状態を表示するTrendBarです。"}},design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}},s={render:e=>r`${a(e)}`,args:{title:"カンマなし",unit:"単位",value:"999999999",size:"medium",comma:!1,trend:"up"},parameters:{docs:{description:{story:"カンマ区切りを使用しないTrendBarです。"}},design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}},m={render:e=>r`${a(e)}`,args:{title:"負の値",unit:"単位",value:"-500000",size:"medium",comma:!0,trend:"down"},parameters:{docs:{description:{story:"負の値を表示するTrendBarです。値は絶対値として表示され、マイナス記号は表示されません。"}},design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}},o={render:()=>r`
    <div class="flex flex-col gap-4">
      <yg-trend-bar
        title="売上高"
        unit="円"
        value="1234567"
        size="medium"
        comma="true"
        trend="up"
      ></yg-trend-bar>
      <yg-trend-bar
        title="販売数"
        unit="個"
        value="42500"
        size="medium"
        comma="true"
        trend="up"
      ></yg-trend-bar>
      <yg-trend-bar
        title="在庫数"
        unit="台"
        value="1250"
        size="medium"
        comma="true"
        trend="down"
      ></yg-trend-bar>
      <yg-trend-bar
        title="成長率"
        unit="%"
        value="12.5"
        size="medium"
        comma="false"
        trend="up"
      ></yg-trend-bar>
    </div>
  `,parameters:{docs:{description:{story:"異なる単位を持つTrendBarの例です。"}},design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}},g={render:e=>r`${a(e)}`,args:{title:"これは非常に長いタイトルで、表示領域を超える場合に省略されるかどうかをテストします",unit:"単位",value:"999999999",size:"medium",comma:!0,trend:"up"},parameters:{docs:{description:{story:"長いタイトルを持つTrendBarです。タイトルが長い場合は省略されます。"}},design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}},u={render:()=>r`
    <div class="flex flex-col gap-8">
      <div>
        <h3 class="mb-2 text-lg font-bold">Medium サイズ</h3>
        <div class="flex flex-col gap-4">
          <yg-trend-bar
            title="上昇傾向"
            unit="円"
            value="1234567"
            size="medium"
            comma="true"
            trend="up"
          ></yg-trend-bar>
          <yg-trend-bar
            title="下降傾向"
            unit="円"
            value="987654"
            size="medium"
            comma="true"
            trend="down"
          ></yg-trend-bar>
          <yg-trend-bar
            title="横ばい"
            unit="円"
            value="500000"
            size="medium"
            comma="true"
            trend="steady"
          ></yg-trend-bar>
        </div>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-bold">Small サイズ</h3>
        <div class="flex flex-col gap-4">
          <yg-trend-bar
            title="上昇傾向"
            unit="円"
            value="1234567"
            size="small"
            comma="true"
            trend="up"
          ></yg-trend-bar>
          <yg-trend-bar
            title="下降傾向"
            unit="円"
            value="987654"
            size="small"
            comma="true"
            trend="down"
          ></yg-trend-bar>
          <yg-trend-bar
            title="横ばい"
            unit="円"
            value="500000"
            size="small"
            comma="true"
            trend="steady"
          ></yg-trend-bar>
        </div>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"TrendBarの全てのバリエーションを表示しています。"}},design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212")}}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: 'タイトル',
    unit: '単位',
    value: '999999999',
    size: 'medium',
    comma: true,
    trend: 'up'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,y,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: 'タイトル',
    unit: '単位',
    value: '999999999',
    size: 'small',
    comma: true,
    trend: 'down'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,b,K;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: '横ばい',
    unit: '単位',
    value: '500000',
    size: 'medium',
    comma: true,
    trend: 'steady'
  },
  parameters: {
    docs: {
      description: {
        story: '横ばい（steady）の状態を表示するTrendBarです。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(K=(b=d.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};var h,W,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: 'カンマなし',
    unit: '単位',
    value: '999999999',
    size: 'medium',
    comma: false,
    trend: 'up'
  },
  parameters: {
    docs: {
      description: {
        story: 'カンマ区切りを使用しないTrendBarです。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(x=(W=s.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var z,C,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: '負の値',
    unit: '単位',
    value: '-500000',
    size: 'medium',
    comma: true,
    trend: 'down'
  },
  parameters: {
    docs: {
      description: {
        story: '負の値を表示するTrendBarです。値は絶対値として表示され、マイナス記号は表示されません。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var U,T,j;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-4">
      <yg-trend-bar
        title="売上高"
        unit="円"
        value="1234567"
        size="medium"
        comma="true"
        trend="up"
      ></yg-trend-bar>
      <yg-trend-bar
        title="販売数"
        unit="個"
        value="42500"
        size="medium"
        comma="true"
        trend="up"
      ></yg-trend-bar>
      <yg-trend-bar
        title="在庫数"
        unit="台"
        value="1250"
        size="medium"
        comma="true"
        trend="down"
      ></yg-trend-bar>
      <yg-trend-bar
        title="成長率"
        unit="%"
        value="12.5"
        size="medium"
        comma="false"
        trend="up"
      ></yg-trend-bar>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: '異なる単位を持つTrendBarの例です。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var Y,Z,B;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    title: 'これは非常に長いタイトルで、表示領域を超える場合に省略されるかどうかをテストします',
    unit: '単位',
    value: '999999999',
    size: 'medium',
    comma: true,
    trend: 'up'
  },
  parameters: {
    docs: {
      description: {
        story: '長いタイトルを持つTrendBarです。タイトルが長い場合は省略されます。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(B=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var S,$,F;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-8">
      <div>
        <h3 class="mb-2 text-lg font-bold">Medium サイズ</h3>
        <div class="flex flex-col gap-4">
          <yg-trend-bar
            title="上昇傾向"
            unit="円"
            value="1234567"
            size="medium"
            comma="true"
            trend="up"
          ></yg-trend-bar>
          <yg-trend-bar
            title="下降傾向"
            unit="円"
            value="987654"
            size="medium"
            comma="true"
            trend="down"
          ></yg-trend-bar>
          <yg-trend-bar
            title="横ばい"
            unit="円"
            value="500000"
            size="medium"
            comma="true"
            trend="steady"
          ></yg-trend-bar>
        </div>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-bold">Small サイズ</h3>
        <div class="flex flex-col gap-4">
          <yg-trend-bar
            title="上昇傾向"
            unit="円"
            value="1234567"
            size="small"
            comma="true"
            trend="up"
          ></yg-trend-bar>
          <yg-trend-bar
            title="下降傾向"
            unit="円"
            value="987654"
            size="small"
            comma="true"
            trend="down"
          ></yg-trend-bar>
          <yg-trend-bar
            title="横ばい"
            unit="円"
            value="500000"
            size="small"
            comma="true"
            trend="steady"
          ></yg-trend-bar>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'TrendBarの全てのバリエーションを表示しています。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15162-20212&m=dev&focus-id=15162-20212')
    }
  }
}`,...(F=($=u.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const re=["Medium","Small","Steady","NoComma","NegativeValue","DifferentUnits","LongTitle","AllVariants"];export{u as AllVariants,o as DifferentUnits,g as LongTitle,n as Medium,m as NegativeValue,s as NoComma,i as Small,d as Steady,re as __namedExportsOrder,ee as default};
