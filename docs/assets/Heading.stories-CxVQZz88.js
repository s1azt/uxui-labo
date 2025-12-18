import{x as ee,T as re}from"./lit-element-C4bBeaiV.js";import{o as w}from"./if-defined-DhMdV329.js";import{f as r}from"./fixFigmaPath-DxFz5b9E.js";import{c as te}from"./index-Br9a1yed.js";import{t as ae}from"./element-BmCHZ0P_.js";import{h as ie,Y as se}from"./Heading-jXrO10pE.js";import{N as ne}from"./element-BHnNw0zf.js";import{g as me}from"./storybook-utils-CyXQhEhe.js";import{o as oe}from"./unsafe-html-CEV8KNn8.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./Button-Drw3qSHJ.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./directive-helpers-BAuZLZmz.js";var de=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,ce=(e,a,b,i)=>{for(var t=i>1?void 0:i?ge(a,b):a,v=e.length-1,x;v>=0;v--)(x=e[v])&&(t=(i?x(a,b,t):x(t))||t);return i&&t&&de(a,b,t),t};te({extend:ie().area,variants:{size:{medium:"h-10",small:"h-8"}}});let h=class extends ne(se){constructor(){super(...arguments),this.supportMobile=!0}getHeadingColor(){return this.color==="default"?"primary":"white"}};h=ce([ae("nk-heading")],h);const{argTypes:ue}=me("nk-heading"),Ze={title:"Components/Ninkei/Heading",component:"nk-heading",render:e=>{console.log(e);const a=e["right-section-slot"]!=null;return ee`
      <nk-heading
        variant=${w(e.variant)}
        size=${w(e.size)}
        color=${w(e.color)}
        text=${e.text}
        sub-text=${e["sub-text"]}
        .breadCrumbs=${e.breadCrumbs}
        count=${e.count}
      >
      ${a?oe(e["right-section-slot"]):re}

    </nk-heading>
    `},argTypes:{...ue,"bread-crumbs":{control:{type:"object"},description:"パンくずリストの内容を設定します（初期表示あり）"}}},s={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},n={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"サンプルテキスト",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},m={args:{variant:"borderLeft",color:"white",size:"medium",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},o={args:{variant:"borderLeft",size:"small",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},d={args:{variant:"borderLeft",size:"small",text:"見出し",subText:"サンプルテキスト",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},g={args:{variant:"borderLeft",color:"white",size:"small",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},c={args:{variant:"underline",size:"medium",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},u={args:{variant:"underline",size:"small",text:"見出し",subText:"",breadCrumbs:[]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},p={args:{variant:"borderLeft",size:"medium",text:"見出し",subText:"",breadCrumbs:[{title:"ホーム"},{title:"ページ"},{title:"サブページ"}]},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=13401-15776&t=N4cWeLivGjJmNv22-1")}}},f={args:{variant:"borderLeft",size:"medium",text:"見出し",count:3}},l={args:{variant:"borderLeft",size:"medium",text:"見出し","right-section-slot":'<nk-button slot="right-section" size="medium">次へ</nk-button>'}};var W,K,L;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(K=s.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var C,N,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var S,z,y;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(z=m.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var T,U,Y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(Y=(U=o.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var A,G,J;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Z,B,P;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(P=(B=g.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,M,_;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,k,H;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(k=u.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var O,D,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var E,q,I;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    count: 3
  }
}`,...(I=(q=f.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var Q,V,X;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'borderLeft',
    size: 'medium',
    text: '見出し',
    "right-section-slot": '<nk-button slot="right-section" size="medium">次へ</nk-button>'
  }
}`,...(X=(V=l.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const Be=["BorderLeftMedium","BorderLeftMediumSubText","BorderLeftMediumWhite","BorderLeftSmall","BorderLeftSmallSubText","BorderLeftSmallWhite","UnderLineMedium","UnderLineSmall","BorderLeftBreadCrumbs","CountDisplay","RightSection"];export{p as BorderLeftBreadCrumbs,s as BorderLeftMedium,n as BorderLeftMediumSubText,m as BorderLeftMediumWhite,o as BorderLeftSmall,d as BorderLeftSmallSubText,g as BorderLeftSmallWhite,f as CountDisplay,l as RightSection,c as UnderLineMedium,u as UnderLineSmall,Be as __namedExportsOrder,Ze as default};
