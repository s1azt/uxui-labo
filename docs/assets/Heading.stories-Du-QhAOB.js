import{x as oe,T as de}from"./lit-element-C4bBeaiV.js";import{o as h}from"./if-defined-DhMdV329.js";import{f as t}from"./fixFigmaPath-DxFz5b9E.js";import{t as ge}from"./element-BmCHZ0P_.js";import{Y as ue}from"./Heading-jXrO10pE.js";import{N as ce}from"./element-DjMGbAoC.js";import"./Button-9kO0EHpa.js";import{g as pe}from"./storybook-utils-CyXQhEhe.js";import{o as fe}from"./unsafe-html-CEV8KNn8.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./index-Br9a1yed.js";import"./Button-Drw3qSHJ.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./directive-helpers-BAuZLZmz.js";var le=Object.defineProperty,be=Object.getOwnPropertyDescriptor,ve=(e,a,x,i)=>{for(var r=i>1?void 0:i?be(a,x):a,w=e.length-1,W;w>=0;w--)(W=e[w])&&(r=(i?W(a,x,r):W(r))||r);return i&&r&&le(a,x,r),r};let L=class extends ce(ue){getHeadingColor(){return this.color==="default"?"primary":"white"}getTextColor(){return this.color==="default"?"primary":"white"}};L=ve([ge("nl-heading")],L);const{argTypes:xe}=pe("nl-heading"),He={title:"Components/network-line/Heading",component:"nl-heading",render:e=>{console.log(e);const a=e["right-section-slot"]!=null;return oe`
      <nl-heading
        variant=${h(e.variant)}
        size=${h(e.size)}
        color=${h(e.color)}
        text=${e.text}
        sub-text=${e["sub-text"]}
        .breadCrumbs=${e.breadCrumbs}
        count=${e.count}
      >
      ${a?fe(e["right-section-slot"]):de}

      </nl-heading>
    `},argTypes:{...xe,"bread-crumbs":{control:{type:"object"},description:"パンくずリストの内容を設定します（初期表示あり）"}}},s={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},n={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"サンプルテキスト",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},m={args:{variant:"borderLeft",color:"white",size:"medium",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},o={args:{variant:"borderLeft",size:"small",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},d={args:{variant:"borderLeft",size:"small",text:"見出し",subText:"サンプルテキスト",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},g={args:{variant:"borderLeft",color:"white",size:"small",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},u={args:{variant:"underline",size:"medium",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},c={args:{variant:"underline",size:"small",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},p={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"",breadCrumbs:[{title:"ホーム"},{title:"ページ"},{title:"サブページ"}]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},f={args:{variant:"borderLeft",size:"medium",text:"見出し",count:3}},l={args:{variant:"borderLeft",size:"medium",text:"見出し","right-section-slot":'<nl-button slot="right-section" size="medium">次へ</nl-button>'}},b={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"これは非常に長いサブテキストの例です。画面幅が狭い場合に縦並びになることを確認するためのテストです。",breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},v={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"これは非常に長いサブテキストの例です。画面幅が狭い場合に縦並びになることを確認するためのテストです。","right-section-slot":'<nl-button slot="right-section" size="medium">次へ</nl-button>',breadCrumbs:[]},parameters:{design:{type:"figma",url:t("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}};var K,C,j;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    subText: '',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var N,S,T;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    subText: 'サンプルテキスト',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var z,y,U;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    color: 'white',
    size: 'medium',
    text: '見出し',
    subText: '',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(U=(y=m.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};var Y,A,G;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'small',
    text: '見出し',
    subText: '',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(G=(A=o.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,Z,B;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'small',
    text: '見出し',
    subText: 'サンプルテキスト',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(B=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var P,F,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    color: 'white',
    size: 'small',
    text: '見出し',
    subText: '',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(M=(F=g.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var _,$,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    size: 'medium',
    text: '見出し',
    subText: '',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(H=($=u.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var O,D,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    size: 'small',
    text: '見出し',
    subText: '',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var E,q,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    subText: '',
    breadCrumbs: [{
      title: 'ホーム'
    }, {
      title: 'ページ'
    }, {
      title: 'サブページ'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(I=(q=p.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var Q,V,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    count: 3
  }
}`,...(X=(V=f.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var k,ee,te;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    "right-section-slot": '<nl-button slot="right-section" size="medium">次へ</nl-button>'
  }
}`,...(te=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,ie;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    subText: 'これは非常に長いサブテキストの例です。画面幅が狭い場合に縦並びになることを確認するためのテストです。',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(ie=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var se,ne,me;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    subText: 'これは非常に長いサブテキストの例です。画面幅が狭い場合に縦並びになることを確認するためのテストです。',
    "right-section-slot": '<nl-button slot="right-section" size="medium">次へ</nl-button>',
    breadCrumbs: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1')
    }
  }
}`,...(me=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:me.source}}};const Oe=["BorderLeftMedium","BorderLeftMediumSubText","BorderLeftMediumWhite","BorderLeftSmall","BorderLeftSmallSubText","BorderLeftSmallWhite","UnderLineMedium","UnderLineSmall","BorderLeftBreadCrumbs","CountDisplay","RightSection","LongSubText","LongSubTextWithButton"];export{p as BorderLeftBreadCrumbs,s as BorderLeftMedium,n as BorderLeftMediumSubText,m as BorderLeftMediumWhite,o as BorderLeftSmall,d as BorderLeftSmallSubText,g as BorderLeftSmallWhite,f as CountDisplay,b as LongSubText,v as LongSubTextWithButton,l as RightSection,u as UnderLineMedium,c as UnderLineSmall,Oe as __namedExportsOrder,He as default};
