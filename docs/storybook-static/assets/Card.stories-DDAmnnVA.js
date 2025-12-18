import{x as l}from"./lit-element-C4bBeaiV.js";import{g as N}from"./storybook-utils-CyXQhEhe.js";import{c as O}from"./index-Br9a1yed.js";import{t as D}from"./element-BmCHZ0P_.js";import{c as g,Y as L}from"./card-DYLUl-bD.js";import{N as T}from"./element-DjMGbAoC.js";import{w as j}from"./decorator-Dt3Huotz.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./v4-CQkTLCs1.js";var A=Object.defineProperty,G=Object.getOwnPropertyDescriptor,V=(a,e,m,n)=>{for(var r=n>1?void 0:n?G(e,m):e,c=a.length-1,i;c>=0;c--)(i=a[c])&&(r=(n?i(e,m,r):i(r))||r);return n&&r&&A(e,m,r),r};const Y=O({extend:g,variants:{...g.variants,rounded:{none:"rounded-none",small:"rounded",medium:"rounded-lg",large:"rounded-xl",xl:"rounded-2xl",full:"rounded-full"}}});let p=class extends T(L){cardStyle(){return Y}};p=V([D("nl-card")],p);const{events:$,args:k,argTypes:E,template:H}=N("nl-card"),M={...E},nr={title:"Components/network-line/Card",component:"nl-card",componentType:p,args:{...k,"default-slot":"コンテンツ"},argTypes:M,parameters:{actions:{handles:$}},decorators:[j]},o={render:a=>l` ${H(a)} `,args:{"default-slot":"コンテンツ"}},s={render:()=>l`
    <nl-card color="primary">
      <h3 class="text-lg font-semibold mb-2">プライマリカード</h3>
      <p>プライマリカラーの背景を持つカードです。</p>
    </nl-card>
  `,args:{color:"primary",gradient:!1}},t={render:()=>l`
    <nl-card color="primary" gradient>
      <h3 class="text-lg font-semibold mb-2">グラデーションカード</h3>
      <p>グラデーション背景を持つカードです。</p>
    </nl-card>
  `,args:{color:"primary",gradient:!0}},d={render:()=>l`
    <div class="grid grid-cols-2 gap-4">
      <nl-card shadow="none">
        <h4 class="text-md font-semibold mb-2">シャドウなし</h4>
        <p>デフォルトのNetworkLineCard（シャドウなし）</p>
      </nl-card>
      <nl-card shadow="small">
        <h4 class="text-md font-semibold mb-2">スモールシャドウ</h4>
        <p>軽微な影を持つカード</p>
      </nl-card>
      <nl-card shadow="medium">
        <h4 class="text-md font-semibold mb-2">ミディアムシャドウ</h4>
        <p>中程度の影を持つカード</p>
      </nl-card>
      <nl-card shadow="large">
        <h4 class="text-md font-semibold mb-2">ラージシャドウ</h4>
        <p>強い影を持つカード</p>
      </nl-card>
    </div>
  `,args:{color:"white",gradient:!1}};var h,f,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': 'コンテンツ'
  }
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var b,w,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <nl-card color="primary">
      <h3 class="text-lg font-semibold mb-2">プライマリカード</h3>
      <p>プライマリカラーの背景を持つカードです。</p>
    </nl-card>
  \`,
  args: {
    color: 'primary',
    gradient: false
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,v,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <nl-card color="primary" gradient>
      <h3 class="text-lg font-semibold mb-2">グラデーションカード</h3>
      <p>グラデーション背景を持つカードです。</p>
    </nl-card>
  \`,
  args: {
    color: 'primary',
    gradient: true
  }
}`,...(C=(v=t.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,_,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div class="grid grid-cols-2 gap-4">
      <nl-card shadow="none">
        <h4 class="text-md font-semibold mb-2">シャドウなし</h4>
        <p>デフォルトのNetworkLineCard（シャドウなし）</p>
      </nl-card>
      <nl-card shadow="small">
        <h4 class="text-md font-semibold mb-2">スモールシャドウ</h4>
        <p>軽微な影を持つカード</p>
      </nl-card>
      <nl-card shadow="medium">
        <h4 class="text-md font-semibold mb-2">ミディアムシャドウ</h4>
        <p>中程度の影を持つカード</p>
      </nl-card>
      <nl-card shadow="large">
        <h4 class="text-md font-semibold mb-2">ラージシャドウ</h4>
        <p>強い影を持つカード</p>
      </nl-card>
    </div>
  \`,
  args: {
    color: 'white',
    gradient: false
  }
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const or=["Default","PrimaryCard","GradientCard","ShadowVariations"];export{o as Default,t as GradientCard,s as PrimaryCard,d as ShadowVariations,or as __namedExportsOrder,nr as default};
