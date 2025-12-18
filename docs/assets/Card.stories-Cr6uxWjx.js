import{x as n}from"./lit-element-C4bBeaiV.js";import{g as I}from"./storybook-utils-CyXQhEhe.js";import{g as J,t as z}from"./element-BmCHZ0P_.js";import{c as K,Y as Q}from"./card-DYLUl-bD.js";import{N as B}from"./element-BHnNw0zf.js";import{c as F}from"./index-Br9a1yed.js";import"./addCollection-Coy8QxYf.js";import{c as R,Y as U}from"./CardMedia-CZh9rZar.js";import{w as X}from"./decorator-Dt3Huotz.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./calculateSize-BEzCU_f7.js";import"./v4-CQkTLCs1.js";var Z=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,as=(a,e,t,r)=>{for(var s=r>1?void 0:r?ss(e,t):e,d=a.length-1,o;d>=0;d--)(o=a[d])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Z(e,t,s),s};const es=F({extend:K,defaultVariants:{shadow:"none"}},{twMerge:!0});let f=class extends B(Q){constructor(){super(...arguments),this.shadow="none"}cardStyle(){return es}render(){const a=this.color==="white"||this.color==="primary",e=a?this.color:"white",t=!a&&this.color?J(this.fixedTheme).colors[this.color]||this.color:"";return n`
      <div
        class="${this.cardStyle()({color:e,gradient:this.gradient,shadow:this.shadow,border:this.border})}"
        style="${t?`background-color: ${t} !important;`:""}"
      >
        <slot name="media"></slot>
        <div class="px-5 py-5">
          <slot></slot>
        </div>
      </div>
    `}};f=as([z("nk-card")],f);var ts=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,ns=(a,e,t,r)=>{for(var s=r>1?void 0:r?rs(e,t):e,d=a.length-1,o;d>=0;d--)(o=a[d])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ts(e,t,s),s};const ds=F({extend:R},{twMerge:!0});let u=class extends B(U){cardMediaStyles(){return ds}};u=ns([z("nk-card-media")],u);const{events:os,args:is,argTypes:ls,template:v}=I("nk-card"),cs={...ls,"media-slot":{control:"text",description:"カードのメディア部分（nk-card-mediaなど）",table:{type:{summary:"HTML"},defaultValue:{summary:""}}}},Os={title:"Components/Ninkei/Card",component:"nk-card",componentType:f,args:{...is,"default-slot":"コンテンツ","media-slot":""},argTypes:cs,parameters:{actions:{handles:os}},decorators:[X]},i={render:a=>n` ${v(a)} `,args:{"default-slot":"コンテンツ","media-slot":""}},l={render:()=>n`
    <nk-card color="primary">
      <h3 class="text-lg font-semibold mb-2">プライマリカード</h3>
      <p>プライマリカラーの背景を持つカードです。</p>
    </nk-card>
  `,args:{color:"primary",gradient:!1}},c={render:()=>n`
    <nk-card color="primary" gradient>
      <h3 class="text-lg font-semibold mb-2">グラデーションカード</h3>
      <p>グラデーション背景を持つカードです。</p>
    </nk-card>
  `,args:{color:"primary",gradient:!0}},m={render:()=>n`
    <div class="grid grid-cols-2 gap-4">
      <nk-card shadow="none">
        <h4 class="text-md font-semibold mb-2">シャドウなし</h4>
        <p>デフォルトのNinkeiCard（シャドウなし）</p>
      </nk-card>
      <nk-card shadow="small">
        <h4 class="text-md font-semibold mb-2">スモールシャドウ</h4>
        <p>軽微な影を持つカード</p>
      </nk-card>
      <nk-card shadow="medium">
        <h4 class="text-md font-semibold mb-2">ミディアムシャドウ</h4>
        <p>中程度の影を持つカード</p>
      </nk-card>
      <nk-card shadow="large">
        <h4 class="text-md font-semibold mb-2">ラージシャドウ</h4>
        <p>強い影を持つカード</p>
      </nk-card>
    </div>
  `,args:{color:"white",gradient:!1}},p={render:a=>n` ${v(a)} `,args:{"default-slot":`<h3 class="text-lg font-semibold mb-2">任継メディアカード</h3>
<p class="text-gray-600">任継ポータル用のメディア付きカード。Controlsパネルでmedia-slotを編集できます。</p>`,"media-slot":'<nk-card-media slot="media" url="https://picsum.photos/400/200" height="192"></nk-card-media>',shadow:"small"}},g={render:a=>n` ${v(a)} `,args:{"default-slot":'<p class="text-gray-600">メディア上にオーバーレイコンテンツを表示した任継カードの例です。</p>',"media-slot":`<nk-card-media slot="media" url="https://picsum.photos/400/200?random=1" height="192">
  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end">
    <div class="text-white p-4">
      <h3 class="text-lg font-semibold">任継オーバーレイ</h3>
      <p class="text-sm">画像上にコンテンツを配置</p>
    </div>
  </div>
</nk-card-media>`,shadow:"small"}},h={render:()=>n`
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <nk-card>
        <h3 class="text-lg font-semibold mb-3">お客様情報</h3>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">名前:</span>
            <span>山田 太郎</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">電話番号:</span>
            <span>090-1234-5678</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">住所:</span>
            <span>東京都渋谷区</span>
          </div>
        </div>
      </nk-card>

      <nk-card>
        <h3 class="text-lg font-semibold mb-3">車両情報</h3>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">車種:</span>
            <span>プリウス</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">年式:</span>
            <span>2022年</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">グレード:</span>
            <span>S</span>
          </div>
        </div>
      </nk-card>
    </div>
  `,args:{color:"white",gradient:!1}},x={render:()=>n`
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <nk-card class="text-center">
        <h4 class="text-sm text-gray-600 mb-2">今月の申請数</h4>
        <div class="text-2xl font-bold text-primary">245</div>
        <div class="text-sm text-green-500 flex items-center justify-center mt-1">
          ↑ 12.5%
        </div>
      </nk-card>

      <nk-card class="text-center">
        <h4 class="text-sm text-gray-600 mb-2">承認待ち</h4>
        <div class="text-2xl font-bold text-yellow-600">8</div>
        <div class="text-sm text-gray-500 mt-1">
          件
        </div>
      </nk-card>

      <nk-card class="text-center">
        <h4 class="text-sm text-gray-600 mb-2">完了済み</h4>
        <div class="text-2xl font-bold text-green-600">237</div>
        <div class="text-sm text-gray-500 mt-1">
          件
        </div>
      </nk-card>
    </div>
  `,args:{color:"white",gradient:!1}};var b,y,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': 'コンテンツ',
    'media-slot': ''
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,C,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <nk-card color="primary">
      <h3 class="text-lg font-semibold mb-2">プライマリカード</h3>
      <p>プライマリカラーの背景を持つカードです。</p>
    </nk-card>
  \`,
  args: {
    color: 'primary',
    gradient: false
  }
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var j,_,$;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <nk-card color="primary" gradient>
      <h3 class="text-lg font-semibold mb-2">グラデーションカード</h3>
      <p>グラデーション背景を持つカードです。</p>
    </nk-card>
  \`,
  args: {
    color: 'primary',
    gradient: true
  }
}`,...($=(_=c.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var M,O,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div class="grid grid-cols-2 gap-4">
      <nk-card shadow="none">
        <h4 class="text-md font-semibold mb-2">シャドウなし</h4>
        <p>デフォルトのNinkeiCard（シャドウなし）</p>
      </nk-card>
      <nk-card shadow="small">
        <h4 class="text-md font-semibold mb-2">スモールシャドウ</h4>
        <p>軽微な影を持つカード</p>
      </nk-card>
      <nk-card shadow="medium">
        <h4 class="text-md font-semibold mb-2">ミディアムシャドウ</h4>
        <p>中程度の影を持つカード</p>
      </nk-card>
      <nk-card shadow="large">
        <h4 class="text-md font-semibold mb-2">ラージシャドウ</h4>
        <p>強い影を持つカード</p>
      </nk-card>
    </div>
  \`,
  args: {
    color: 'white',
    gradient: false
  }
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var N,T,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': \`<h3 class="text-lg font-semibold mb-2">任継メディアカード</h3>
<p class="text-gray-600">任継ポータル用のメディア付きカード。Controlsパネルでmedia-slotを編集できます。</p>\`,
    'media-slot': \`<nk-card-media slot="media" url="https://picsum.photos/400/200" height="192"></nk-card-media>\`,
    shadow: 'small'
  }
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var W,A,V;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': \`<p class="text-gray-600">メディア上にオーバーレイコンテンツを表示した任継カードの例です。</p>\`,
    'media-slot': \`<nk-card-media slot="media" url="https://picsum.photos/400/200?random=1" height="192">
  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end">
    <div class="text-white p-4">
      <h3 class="text-lg font-semibold">任継オーバーレイ</h3>
      <p class="text-sm">画像上にコンテンツを配置</p>
    </div>
  </div>
</nk-card-media>\`,
    shadow: 'small'
  }
}`,...(V=(A=g.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var Y,G,H;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <nk-card>
        <h3 class="text-lg font-semibold mb-3">お客様情報</h3>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">名前:</span>
            <span>山田 太郎</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">電話番号:</span>
            <span>090-1234-5678</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">住所:</span>
            <span>東京都渋谷区</span>
          </div>
        </div>
      </nk-card>

      <nk-card>
        <h3 class="text-lg font-semibold mb-3">車両情報</h3>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">車種:</span>
            <span>プリウス</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">年式:</span>
            <span>2022年</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">グレード:</span>
            <span>S</span>
          </div>
        </div>
      </nk-card>
    </div>
  \`,
  args: {
    color: 'white',
    gradient: false
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var E,L,q;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <nk-card class="text-center">
        <h4 class="text-sm text-gray-600 mb-2">今月の申請数</h4>
        <div class="text-2xl font-bold text-primary">245</div>
        <div class="text-sm text-green-500 flex items-center justify-center mt-1">
          ↑ 12.5%
        </div>
      </nk-card>

      <nk-card class="text-center">
        <h4 class="text-sm text-gray-600 mb-2">承認待ち</h4>
        <div class="text-2xl font-bold text-yellow-600">8</div>
        <div class="text-sm text-gray-500 mt-1">
          件
        </div>
      </nk-card>

      <nk-card class="text-center">
        <h4 class="text-sm text-gray-600 mb-2">完了済み</h4>
        <div class="text-2xl font-bold text-green-600">237</div>
        <div class="text-sm text-gray-500 mt-1">
          件
        </div>
      </nk-card>
    </div>
  \`,
  args: {
    color: 'white',
    gradient: false
  }
}`,...(q=(L=x.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const Ps=["Default","PrimaryCard","GradientCard","ShadowVariations","WithMedia","WithMediaOverlay","ApplicationCard","StatisticsCard"];export{h as ApplicationCard,i as Default,c as GradientCard,l as PrimaryCard,m as ShadowVariations,x as StatisticsCard,p as WithMedia,g as WithMediaOverlay,Ps as __namedExportsOrder,Os as default};
