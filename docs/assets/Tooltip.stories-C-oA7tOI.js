import{w as L}from"./decorator-Dt3Huotz.js";import{x as d}from"./lit-element-C4bBeaiV.js";import{o as e}from"./if-defined-DhMdV329.js";import{f as t}from"./fixFigmaPath-DxFz5b9E.js";import"./Tooltip-DZb2M2Cl.js";import{g as M}from"./storybook-utils-CyXQhEhe.js";import"./Button-Drw3qSHJ.js";import"./v4-CQkTLCs1.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./index-Br9a1yed.js";import"./constants-rkZZCW-e.js";import"./directive-helpers-BAuZLZmz.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";const{args:o,argTypes:k}=M("yg-tooltip"),ht={title:"Components/Base/Tooltip",component:"yg-tooltip",args:o,argTypes:k,render:l=>d`
    <div
  style="width: 100%; height: 200px; margin: auto; display: flex;
  justify-content: center; align-items: center;
"
    >
      <yg-tooltip
        position=${e(o.position)}
        content=${e(o.content)}
        ?open=${o.open}
        color=${e(o.color)}
      >
        <yg-button>Hover me</yg-button>
      </yg-tooltip>
    </div>
  `,decorators:[L]},n={args:{position:"top",content:"Tooltip Content"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},i={args:{position:"bottom",content:"下側に表示されるツールチップ"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},r={args:{position:"left",content:"左側に表示されるツールチップ"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},a={args:{position:"right",content:"右側に表示されるツールチップ"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},s={args:{position:"top",content:"白色のツールチップ",color:"white"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},p={args:{position:"top",content:"常に表示されるツールチップ",open:!0},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},g={args:{position:"top",content:`複数行の
ツールチップ
コンテンツ`},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},m={render:l=>d`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
  justify-content: center; align-items: center;
"
    >
      <yg-tooltip
        position=${e(o.position)}
        ?open=${o.open}
        color=${e(o.color)}
      >
        <yg-button>Hover me</yg-button>
        <div slot="content">
          <h3 style="margin: 0 0 8px 0; font-weight: bold;">HTMLコンテンツ</h3>
          <p style="margin: 0;">リッチなコンテンツを表示できます</p>
        </div>
      </yg-tooltip>
    </div>
  `,args:{position:"top",color:"black"},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},c={render:l=>d`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
  justify-content: center; align-items: center; gap: 16px;
"
    >
      <yg-tooltip position="top" content="ボタンのツールチップ">
        <yg-button>ボタン</yg-button>
      </yg-tooltip>

      <yg-tooltip position="top" content="テキストのツールチップ">
        <span style="text-decoration: underline; cursor: help;">テキスト</span>
      </yg-tooltip>

      <yg-tooltip position="top" content="アイコンのツールチップ">
        <yg-icon icon="yg:info" style="cursor: help;"></yg-icon>
      </yg-tooltip>
    </div>
  `,parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}};var u,f,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    position: 'top',
    content: 'Tooltip Content'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,w,K;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    content: '下側に表示されるツールチップ'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(K=(w=i.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var x,C,W;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    position: 'left',
    content: '左側に表示されるツールチップ'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(W=(C=r.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var Z,v,j;a.parameters={...a.parameters,docs:{...(Z=a.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    position: 'right',
    content: '右側に表示されるツールチップ'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var A,R,J;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    position: 'top',
    content: '白色のツールチップ',
    color: 'white'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(J=(R=s.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    position: 'top',
    content: '常に表示されるツールチップ',
    open: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var b,P,T;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    position: 'top',
    content: '複数行の\\nツールチップ\\nコンテンツ'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(T=(P=g.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var F,S,$;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: _args => html\`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
  justify-content: center; align-items: center;
"
    >
      <yg-tooltip
        position=\${ifDefined(args.position)}
        ?open=\${args.open}
        color=\${ifDefined(args.color)}
      >
        <yg-button>Hover me</yg-button>
        <div slot="content">
          <h3 style="margin: 0 0 8px 0; font-weight: bold;">HTMLコンテンツ</h3>
          <p style="margin: 0;">リッチなコンテンツを表示できます</p>
        </div>
      </yg-tooltip>
    </div>
  \`,
  args: {
    position: 'top',
    color: 'black'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...($=(S=m.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var H,_,D;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: _args => html\`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
  justify-content: center; align-items: center; gap: 16px;
"
    >
      <yg-tooltip position="top" content="ボタンのツールチップ">
        <yg-button>ボタン</yg-button>
      </yg-tooltip>

      <yg-tooltip position="top" content="テキストのツールチップ">
        <span style="text-decoration: underline; cursor: help;">テキスト</span>
      </yg-tooltip>

      <yg-tooltip position="top" content="アイコンのツールチップ">
        <yg-icon icon="yg:info" style="cursor: help;"></yg-icon>
      </yg-tooltip>
    </div>
  \`,
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1')
    }
  }
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const yt=["Default","PositionBottom","PositionLeft","PositionRight","WhiteColor","AlwaysOpen","MultilineContent","WithHTMLContent","DifferentTriggers"];export{p as AlwaysOpen,n as Default,c as DifferentTriggers,g as MultilineContent,i as PositionBottom,r as PositionLeft,a as PositionRight,s as WhiteColor,m as WithHTMLContent,yt as __namedExportsOrder,ht as default};
