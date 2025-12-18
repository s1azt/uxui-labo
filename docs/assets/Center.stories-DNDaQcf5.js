import{x as h}from"./lit-element-C4bBeaiV.js";import{t as v,E as w}from"./element-BmCHZ0P_.js";import{n as g}from"./property-BacG-Vag.js";import{N as b}from"./element-BHnNw0zf.js";import{e as $}from"./class-map-CsidGjsZ.js";import{g as k}from"./storybook-utils-CyXQhEhe.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./directive-helpers-BAuZLZmz.js";var _=Object.defineProperty,C=Object.getOwnPropertyDescriptor,a=(t,e,n,i)=>{for(var r=i>1?void 0:i?C(e,n):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(r=(i?d(e,n,r):d(r))||r);return i&&r&&_(e,n,r),r};let o=class extends b(w){constructor(){super(...arguments),this.width="auto",this.height="auto",this.gap="0"}render(){const t={flex:!0,"justify-center":!0,"items-center":!0,[`gap-${this.gap}`]:this.gap!=="0"},e={width:this.width,height:this.height};return h`
      <div class=${$(t)} style=${this._styleMap(e)}>
        <slot></slot>
      </div>
    `}_styleMap(t){return Object.entries(t).map(([e,n])=>`${e}: ${n};`).join(" ")}};a([g({type:String})],o.prototype,"width",2);a([g({type:String})],o.prototype,"height",2);a([g({type:String})],o.prototype,"gap",2);o=a([v("nk-center")],o);const{args:A,argTypes:S,template:B}=k("nk-center"),F={title:"Components/Ninkei/Center",component:"nk-center",argTypes:{...S,width:{control:"text"},height:{control:"text"},gap:{control:{type:"select"},options:["0","1","2","3","4"]}}},I=t=>h`
  <nk-center width=${t.width} height=${t.height} gap=${t.gap}>
    <div
      style="background-color: #f0f0f0; padding: 16px; border: 1px solid #ccc;"
    >
      Centered Content
    </div>
  </nk-center>
`,s={render:I,args:{width:"100%",height:"200px",gap:"0"}},p={render:t=>h`
    <nk-center width=${t.width} height=${t.height} gap=${t.gap}>
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
    </nk-center>
  `,args:{width:"100%",height:"200px",gap:"4"}};var l,m,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: render,
  args: {
    width: '100%',
    height: '200px',
    gap: '0'
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var u,x,y;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <nk-center width=\${args.width} height=\${args.height} gap=\${args.gap}>
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
    </nk-center>
  \`,
  args: {
    width: '100%',
    height: '200px',
    gap: '4'
  }
}`,...(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const G=["Default","WithMultipleItems"];export{s as Default,p as WithMultipleItems,G as __namedExportsOrder,F as default};
