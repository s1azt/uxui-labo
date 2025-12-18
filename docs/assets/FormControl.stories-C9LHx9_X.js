import{x as q}from"./lit-element-C4bBeaiV.js";import{f as C}from"./fixFigmaPath-DxFz5b9E.js";import"./FormControl-Oc9TqZBO.js";/* empty css              */import"./index-Br9a1yed.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./FormControl-2GUpcIp4.js";import"./property-BacG-Vag.js";import"./element-DjMGbAoC.js";const S={design:{type:"figma",url:C("...")}},L={title:"Components/network-line/FormControl",component:"nl-form-control",args:{label:"メールアドレス",mandatory:!1,required:!1,order:"vertical","error-message":"",status:"default",fixedTheme:null},argTypes:{label:{control:"text",description:"ラベル",table:{category:"attributes"}},mandatory:{control:"boolean",description:"@deprecated 必須項目かどうか(非推奨)",table:{category:"attributes"}},required:{control:"boolean",description:"必須項目かどうか",table:{category:"attributes"}},order:{control:"select",options:["vertical","horizontal"],description:"ラベルと入力フォームの配置",table:{category:"attributes"}},status:{control:"select",options:["default","modified"],description:"ステータス（modifiedで変更箇所強調）",table:{category:"attributes"}},"error-message":{control:"text",description:"エラーメッセージ",table:{category:"attributes"}},fixedTheme:{control:"text",table:{category:"properties"}},styles:{table:{disable:!0}},errorMessage:{table:{disable:!0}},inputElement:{table:{disable:!0}},handleSlotChange:{table:{disable:!0}},handleLabelClick:{table:{disable:!0}},currentTheme:{table:{disable:!0}},formControlStyle:{table:{disable:!0}},formControlMandatoryStyle:{table:{disable:!0}},formControlModifiedBadge:{table:{disable:!0}}}},e={render:r=>q`
    <nl-form-control
      label=${r.label}
      ?mandatory=${r.mandatory}
      ?required=${r.required}
      order=${r.order}
      status=${r.status} error-message=${r["error-message"]}
    >
      <input class="nl-input" placeholder="入力してください" style="width: 290px;" />
    </nl-form-control>
  `,parameters:S},t={...e,args:{label:"メールアドレス",mandatory:!0,order:"vertical"}},a={...e,args:{label:"メールアドレス",mandatory:!1,order:"horizontal"}},o={...e,args:{label:"変更箇所",status:"modified",mandatory:!1}},s={...e,render:r=>q`
    <nl-form-control
      label=${r.label}
      ?mandatory=${r.mandatory}
      ?required=${r.required}
      order=${r.order}
      status=${r.status} error-message=${r["error-message"]}
    >
      <input class="nl-input nl-input--error" placeholder="入力してください" style="width: 290px;" />
    </nl-form-control>
  `,args:{label:"メールアドレス",mandatory:!0,order:"vertical","error-message":"入力内容に誤りがあります。"}};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <nl-form-control
      label=\${args.label}
      ?mandatory=\${args.mandatory}
      ?required=\${args.required}
      order=\${args.order}
      status=\${args.status} error-message=\${args['error-message']}
    >
      <input class="nl-input" placeholder="入力してください" style="width: 290px;" />
    </nl-form-control>
  \`,
  parameters: figmaParameters
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'メールアドレス',
    mandatory: true,
    order: 'vertical'
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'メールアドレス',
    mandatory: false,
    order: 'horizontal'
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: '変更箇所',
    status: 'modified',
    mandatory: false
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var $,h,x;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Default,
  render: (args: any) => html\`
    <nl-form-control
      label=\${args.label}
      ?mandatory=\${args.mandatory}
      ?required=\${args.required}
      order=\${args.order}
      status=\${args.status} error-message=\${args['error-message']}
    >
      <input class="nl-input nl-input--error" placeholder="入力してください" style="width: 290px;" />
    </nl-form-control>
  \`,
  args: {
    label: 'メールアドレス',
    mandatory: true,
    order: 'vertical',
    'error-message': '入力内容に誤りがあります。'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const O=["Default","VerticalMandatory","Horizontal","Modified","WithError"];export{e as Default,a as Horizontal,o as Modified,t as VerticalMandatory,s as WithError,O as __namedExportsOrder,L as default};
