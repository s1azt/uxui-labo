import{x as y}from"./lit-element-C4bBeaiV.js";import{g as k}from"./storybook-utils-CyXQhEhe.js";import{f as E}from"./fixFigmaPath-DxFz5b9E.js";import{o as n}from"./if-defined-DhMdV329.js";import{w as q}from"./decorator-Dt3Huotz.js";import{t as z}from"./element-BmCHZ0P_.js";import{Y as G}from"./Tooltip-DZb2M2Cl.js";import{N as I}from"./element-DjMGbAoC.js";import"./Button-9kO0EHpa.js";import"./Icon-D1f_g8IV.js";import"./directive-helpers-BAuZLZmz.js";import"./v4-CQkTLCs1.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./index-Br9a1yed.js";import"./constants-rkZZCW-e.js";import"./Button-Drw3qSHJ.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./Icon-CzSa45Vk.js";var Q=Object.defineProperty,V=Object.getOwnPropertyDescriptor,tt=(t,e,u,r)=>{for(var o=r>1?void 0:r?V(e,u):e,f=t.length-1,h;f>=0;f--)(h=t[f])&&(o=(r?h(e,u,o):h(o))||o);return r&&o&&Q(e,u,o),o};let v=class extends I(G){};v=tt([z("nl-tooltip")],v);const{events:Mt,args:ot,argTypes:nt,template:Ot}=k("nl-tooltip"),Kt={title:"Components/network-line/Tooltip",component:"nl-tooltip",args:ot,argTypes:nt,render:t=>y`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
      justify-content: center; align-items: center;"
    >
      <nl-tooltip
        position=${n(t.position)}
        content=${n(t.content)}
        ?open=${t.open}
        color=${n(t.color)}
      >
        <nl-button>Hover me</nl-button>
      </nl-tooltip>
    </div>
  `,decorators:[q]},i={args:{position:"top",content:"Tooltip Content"},parameters:{design:{type:"figma",url:E("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}},s={args:{position:"bottom",content:"下側に表示されるツールチップ"},parameters:{design:{}}},p={args:{position:"left",content:"左側に表示されるツールチップ"},parameters:{design:{}}},a={args:{position:"right",content:"右側に表示されるツールチップ"},parameters:{design:{}}},l={args:{position:"top",content:"白色のツールチップ",color:"white"},parameters:{design:{}}},c={args:{position:"top",content:"常に表示されるツールチップ",open:!0},parameters:{design:{}}},m={args:{position:"top",content:`複数行の
ツールチップ
コンテンツ`},parameters:{design:{}}},d={render:t=>y`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
      justify-content: center; align-items: center;"
    >
      <nl-tooltip
        position=${n(t.position)}
        ?open=${t.open}
        color=${n(t.color)}
      >
        <nl-button>Hover me</nl-button>
        <div slot="content">
          <h3 style="margin: 0 0 8px 0; font-weight: bold;">HTMLコンテンツ</h3>
          <p style="margin: 0;">リッチなコンテンツを表示できます</p>
        </div>
      </nl-tooltip>
    </div>
  `,args:{position:"top",color:"black"},parameters:{design:{}}},g={render:()=>y`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
      justify-content: center; align-items: center; gap: 16px;"
    >
      <nl-tooltip position="top" content="ボタンのツールチップ">
        <nl-button>ボタン</nl-button>
      </nl-tooltip>

      <nl-tooltip position="top" content="テキストのツールチップ">
        <span style="text-decoration: underline; cursor: help;">テキスト</span>
      </nl-tooltip>

      <nl-tooltip position="top" content="アイコンのツールチップ">
        <nl-icon icon="nl:search" style="cursor: help;"></nl-icon>
      </nl-tooltip>
    </div>
  `,parameters:{design:{}}};var x,w,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,T,P;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    content: '下側に表示されるツールチップ'
  },
  parameters: {
    design: {/* ... */}
  }
}`,...(P=(T=s.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var S,$,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    position: 'left',
    content: '左側に表示されるツールチップ'
  },
  parameters: {
    design: {/* ... */}
  }
}`,...(j=($=p.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var W,_,D;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    position: 'right',
    content: '右側に表示されるツールチップ'
  },
  parameters: {
    design: {/* ... */}
  }
}`,...(D=(_=a.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var H,L,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: 'top',
    content: '白色のツールチップ',
    color: 'white'
  },
  parameters: {
    design: {/* ... */}
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,K,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    position: 'top',
    content: '常に表示されるツールチップ',
    open: true
  },
  parameters: {
    design: {/* ... */}
  }
}`,...(A=(K=c.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var R,Y,Z;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    position: 'top',
    content: '複数行の\\nツールチップ\\nコンテンツ'
  },
  parameters: {
    design: {/* ... */}
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var N,B,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
      justify-content: center; align-items: center;"
    >
      <nl-tooltip
        position=\${ifDefined(args.position)}
        ?open=\${args.open}
        color=\${ifDefined(args.color)}
      >
        <nl-button>Hover me</nl-button>
        <div slot="content">
          <h3 style="margin: 0 0 8px 0; font-weight: bold;">HTMLコンテンツ</h3>
          <p style="margin: 0;">リッチなコンテンツを表示できます</p>
        </div>
      </nl-tooltip>
    </div>
  \`,
  args: {
    position: 'top',
    color: 'black'
  },
  parameters: {
    design: {/* ... */}
  }
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var J,U,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="width: 100%; height: 200px; margin: auto; display: flex;
      justify-content: center; align-items: center; gap: 16px;"
    >
      <nl-tooltip position="top" content="ボタンのツールチップ">
        <nl-button>ボタン</nl-button>
      </nl-tooltip>

      <nl-tooltip position="top" content="テキストのツールチップ">
        <span style="text-decoration: underline; cursor: help;">テキスト</span>
      </nl-tooltip>

      <nl-tooltip position="top" content="アイコンのツールチップ">
        <nl-icon icon="nl:search" style="cursor: help;"></nl-icon>
      </nl-tooltip>
    </div>
  \`,
  parameters: {
    design: {/* ... */}
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const At=["Default","PositionBottom","PositionLeft","PositionRight","WhiteColor","AlwaysOpen","MultilineContent","WithHTMLContent","DifferentTriggers"];export{c as AlwaysOpen,i as Default,g as DifferentTriggers,m as MultilineContent,s as PositionBottom,p as PositionLeft,a as PositionRight,l as WhiteColor,d as WithHTMLContent,At as __namedExportsOrder,Kt as default};
