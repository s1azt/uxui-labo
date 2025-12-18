import{x as S}from"./lit-element-C4bBeaiV.js";import{t as b,E as w}from"./element-BmCHZ0P_.js";import{n}from"./property-BacG-Vag.js";import{N as _}from"./element-BHnNw0zf.js";import{e as $}from"./class-map-CsidGjsZ.js";import{g as O}from"./storybook-utils-CyXQhEhe.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./directive-helpers-BAuZLZmz.js";var C=Object.defineProperty,D=Object.getOwnPropertyDescriptor,o=(t,s,p,i)=>{for(var e=i>1?void 0:i?D(s,p):s,d=t.length-1,u;d>=0;d--)(u=t[d])&&(e=(i?u(s,p,e):u(e))||e);return i&&e&&C(s,p,e),e};let r=class extends _(w){constructor(){super(...arguments),this.direction="column",this.gap="4",this.justify="start",this.align="start",this.fullWidth=!1}render(){const t={flex:!0,"flex-col":this.direction==="column","flex-row":this.direction==="row",[`gap-${this.gap}`]:!0,[`justify-${this.justify}`]:!0,[`items-${this.align}`]:!0,"w-full":this.fullWidth};return S`
      <div class=${$(t)}>
        <slot></slot>
      </div>
    `}};o([n({type:String})],r.prototype,"direction",2);o([n({type:String})],r.prototype,"gap",2);o([n({type:String})],r.prototype,"justify",2);o([n({type:String})],r.prototype,"align",2);o([n({type:Boolean})],r.prototype,"fullWidth",2);r=o([b("nk-stack")],r);const{args:G,argTypes:E,template:J}=O("nk-stack"),K={title:"Components/Ninkei/Stack",component:"nk-stack",argTypes:{...E,direction:{control:{type:"select"},options:["row","column"]},gap:{control:{type:"select"},options:["1","2","3","4","5","6","8","12"]},justify:{control:{type:"select"},options:["start","center","end","between"]},align:{control:{type:"select"},options:["start","center","end","stretch"]},fullWidth:{control:{type:"boolean"}}}},f=t=>S`
  <nk-stack
    direction=${t.direction}
    gap=${t.gap}
    justify=${t.justify}
    align=${t.align}
    ?fullWidth=${t.fullWidth}
  >
    <div
      style="background-color: #f0f0f0; padding: 16px; border: 1px solid #ccc;"
    >
      Item 1
    </div>
    <div
      style="background-color: #f0f0f0; padding: 16px; border: 1px solid #ccc;"
    >
      Item 2
    </div>
    <div
      style="background-color: #f0f0f0; padding: 16px; border: 1px solid #ccc;"
    >
      Item 3
    </div>
  </nk-stack>
`,a={render:f,args:{direction:"column",gap:"4",justify:"start",align:"start",fullWidth:!1}},c={render:f,args:{direction:"row",gap:"4",justify:"start",align:"center",fullWidth:!1}},l={render:f,args:{direction:"column",gap:"4",justify:"center",align:"center",fullWidth:!0}};var m,g,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: render,
  args: {
    direction: 'column',
    gap: '4',
    justify: 'start',
    align: 'start',
    fullWidth: false
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,j,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: render,
  args: {
    direction: 'row',
    gap: '4',
    justify: 'start',
    align: 'center',
    fullWidth: false
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var x,v,W;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: render,
  args: {
    direction: 'column',
    gap: '4',
    justify: 'center',
    align: 'center',
    fullWidth: true
  }
}`,...(W=(v=l.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};const Q=["Default","Row","Centered"];export{l as Centered,a as Default,c as Row,Q as __namedExportsOrder,K as default};
