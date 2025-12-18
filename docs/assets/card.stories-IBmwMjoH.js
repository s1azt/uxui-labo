import{x as e}from"./lit-element-C4bBeaiV.js";import{f as O}from"./fixFigmaPath-DxFz5b9E.js";import"./card-DYLUl-bD.js";import"./CardMedia-CZh9rZar.js";import"./NumberValueBar-Bl7Fy_O7.js";import{w as _}from"./decorator-Dt3Huotz.js";import{g as D}from"./storybook-utils-CyXQhEhe.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./calculateSize-BEzCU_f7.js";import"./Icon-CzSa45Vk.js";import"./v4-CQkTLCs1.js";import"./directive-helpers-BAuZLZmz.js";const{events:G,args:P,argTypes:U,template:g}=D("yg-card"),Y={...U,"media-slot":{control:"text",description:"カードのメディア部分（yg-card-mediaなど）",table:{type:{summary:"HTML"},defaultValue:{summary:""}}}},me={title:"Components/Base/Card",component:"yg-card",args:{...P,"default-slot":"コンテンツ","media-slot":""},argTypes:Y,parameters:{actions:{handles:G}},decorators:[_]},a={render:t=>e` ${g(t)} `,args:{"default-slot":"コンテンツ","media-slot":""},parameters:{design:{type:"figma",url:O("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13792-16713&node-type=symbol&m=dev")}}},s={render:()=>e`
    <div class="flex flex-col gap-4">
      <yg-card color="white" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          ホワイトカード
        </div>
      </yg-card>
      <yg-card color="primary" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          プライマリカード
        </div>
      </yg-card>
    </div>
  `},l={render:()=>e`
    <div class="flex flex-col gap-4">
      <yg-card color="primary" gradient style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          グラデーションカード
        </div>
      </yg-card>
    </div>
  `},r={render:()=>e`
    <div class="grid grid-cols-2 gap-4">
      <yg-card shadow="none" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          シャドウなし
        </div>
      </yg-card>
      <yg-card shadow="small" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          スモールシャドウ
        </div>
      </yg-card>
      <yg-card shadow="medium" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          ミディアムシャドウ
        </div>
      </yg-card>
      <yg-card shadow="large" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          ラージシャドウ
        </div>
      </yg-card>
    </div>
  `},n={render:t=>e` ${g(t)} `,args:{"default-slot":`<h3 class="text-lg font-bold mb-2">メディア付きカード</h3>
<p class="text-gray-600">カードメディアをHTMLとして編集できます。Controlsパネルで内容を変更してみてください。</p>`,"media-slot":'<yg-card-media slot="media" url="https://picsum.photos/400/200" height="192"></yg-card-media>',shadow:"medium"}},i={render:t=>e` ${g(t)} `,args:{"default-slot":'<p class="text-gray-600">メディア上にオーバーレイコンテンツを表示した例です。</p>',"media-slot":`<yg-card-media slot="media" url="https://picsum.photos/400/200?random=1" height="192">
  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end">
    <div class="text-white p-4">
      <h3 class="text-lg font-semibold">オーバーレイタイトル</h3>
      <p class="text-sm">画像上にコンテンツを配置</p>
    </div>
  </div>
</yg-card-media>`,shadow:"medium"}},d={render:()=>e`
    <div class="flex flex-col gap-4">
      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">カードタイトル</h3>
          <p>
            カードの内容をここに記述します。様々なコンテンツを含めることができます。
          </p>
        </div>
      </yg-card>

      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">フォーム付きカード</h3>
          <div class="flex flex-col gap-2">
            <label class="block">
              名前
              <input
                type="text"
                class="border rounded px-2 py-1 w-full"
                placeholder="名前を入力"
              />
            </label>
            <label class="block">
              メールアドレス
              <input
                type="email"
                class="border rounded px-2 py-1 w-full"
                placeholder="メールアドレスを入力"
              />
            </label>
            <button class="bg-primary text-white rounded px-4 py-2 mt-2">
              送信
            </button>
          </div>
        </div>
      </yg-card>
    </div>
  `},o={render:()=>e`
    <div class="flex flex-col gap-4">
      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">ダッシュボードカード</h3>
            <yg-icon icon="mdi:dots-vertical"></yg-icon>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="flex flex-col">
              <span class="text-sm text-gray-500">総売上</span>
              <span class="text-2xl font-bold">¥1,234,567</span>
            </div>
            <div class="flex items-center text-green-500">
              <yg-icon icon="mdi:arrow-up"></yg-icon>
              <span>12.5%</span>
            </div>
          </div>
        </div>
      </yg-card>

      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">ボタン付きカード</h3>
          <p>
            カードの内容をここに記述します。様々なコンテンツを含めることができます。
          </p>
          <div class="flex justify-end gap-2 mt-2">
            <yg-button variant="outlined">キャンセル</yg-button>
            <yg-button>確認</yg-button>
          </div>
        </div>
      </yg-card>
    </div>
  `},c={render:()=>e`
    <div class="flex flex-col gap-4">
      <!-- 単一のNumberValueBarを含むカード -->
      <yg-card style="height: auto;">
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">売上データ</h3>
          <yg-number-value-bar
            title="今月の売上"
            value="1234567"
            unit="円"
            size="medium"
            comma
            align="right"
          ></yg-number-value-bar>
        </div>
   
      </yg-card>
      <yg-card color="primary" style="height: auto;">
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">売上データ</h3>
          <yg-number-value-bar
            title="今月の売上"
            value="1234567"
            unit="円"
            size="medium"
            comma
            align="right"
          ></yg-number-value-bar>
        </div>
   
      </yg-card>
    </div>
  `};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': 'コンテンツ',
    'media-slot': ''
  },
  //@storybook/addon-designs の設定
  parameters: {
    design: {
      type: 'figma',
      // デザイン参照をFigmaに設定
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13792-16713&node-type=symbol&m=dev')
    }
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var u,h,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-4">
      <yg-card color="white" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          ホワイトカード
        </div>
      </yg-card>
      <yg-card color="primary" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          プライマリカード
        </div>
      </yg-card>
    </div>
  \`
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,v,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-4">
      <yg-card color="primary" gradient style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          グラデーションカード
        </div>
      </yg-card>
    </div>
  \`
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,j,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div class="grid grid-cols-2 gap-4">
      <yg-card shadow="none" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          シャドウなし
        </div>
      </yg-card>
      <yg-card shadow="small" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          スモールシャドウ
        </div>
      </yg-card>
      <yg-card shadow="medium" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          ミディアムシャドウ
        </div>
      </yg-card>
      <yg-card shadow="large" style="height: 100px;">
        <div class="h-full flex items-center justify-center">
          ラージシャドウ
        </div>
      </yg-card>
    </div>
  \`
}`,...(C=(j=r.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,W,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': \`<h3 class="text-lg font-bold mb-2">メディア付きカード</h3>
<p class="text-gray-600">カードメディアをHTMLとして編集できます。Controlsパネルで内容を変更してみてください。</p>\`,
    'media-slot': \`<yg-card-media slot="media" url="https://picsum.photos/400/200" height="192"></yg-card-media>\`,
    shadow: 'medium'
  }
}`,...(k=(W=n.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var M,V,K;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    'default-slot': \`<p class="text-gray-600">メディア上にオーバーレイコンテンツを表示した例です。</p>\`,
    'media-slot': \`<yg-card-media slot="media" url="https://picsum.photos/400/200?random=1" height="192">
  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end">
    <div class="text-white p-4">
      <h3 class="text-lg font-semibold">オーバーレイタイトル</h3>
      <p class="text-sm">画像上にコンテンツを配置</p>
    </div>
  </div>
</yg-card-media>\`,
    shadow: 'medium'
  }
}`,...(K=(V=i.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var T,$,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-4">
      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">カードタイトル</h3>
          <p>
            カードの内容をここに記述します。様々なコンテンツを含めることができます。
          </p>
        </div>
      </yg-card>

      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">フォーム付きカード</h3>
          <div class="flex flex-col gap-2">
            <label class="block">
              名前
              <input
                type="text"
                class="border rounded px-2 py-1 w-full"
                placeholder="名前を入力"
              />
            </label>
            <label class="block">
              メールアドレス
              <input
                type="email"
                class="border rounded px-2 py-1 w-full"
                placeholder="メールアドレスを入力"
              />
            </label>
            <button class="bg-primary text-white rounded px-4 py-2 mt-2">
              送信
            </button>
          </div>
        </div>
      </yg-card>
    </div>
  \`
}`,...(B=($=d.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var z,A,H;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-4">
      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">ダッシュボードカード</h3>
            <yg-icon icon="mdi:dots-vertical"></yg-icon>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="flex flex-col">
              <span class="text-sm text-gray-500">総売上</span>
              <span class="text-2xl font-bold">¥1,234,567</span>
            </div>
            <div class="flex items-center text-green-500">
              <yg-icon icon="mdi:arrow-up"></yg-icon>
              <span>12.5%</span>
            </div>
          </div>
        </div>
      </yg-card>

      <yg-card style="height: auto;">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">ボタン付きカード</h3>
          <p>
            カードの内容をここに記述します。様々なコンテンツを含めることができます。
          </p>
          <div class="flex justify-end gap-2 mt-2">
            <yg-button variant="outlined">キャンセル</yg-button>
            <yg-button>確認</yg-button>
          </div>
        </div>
      </yg-card>
    </div>
  \`
}`,...(H=(A=o.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var N,F,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-4">
      <!-- 単一のNumberValueBarを含むカード -->
      <yg-card style="height: auto;">
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">売上データ</h3>
          <yg-number-value-bar
            title="今月の売上"
            value="1234567"
            unit="円"
            size="medium"
            comma
            align="right"
          ></yg-number-value-bar>
        </div>
   
      </yg-card>
      <yg-card color="primary" style="height: auto;">
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">売上データ</h3>
          <yg-number-value-bar
            title="今月の売上"
            value="1234567"
            unit="円"
            size="medium"
            comma
            align="right"
          ></yg-number-value-bar>
        </div>
   
      </yg-card>
    </div>
  \`
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const pe=["Default","Colors","Gradient","Shadows","WithMedia","WithMediaOverlay","ContentVariations","CompoundComponents","WithNumberValueBar"];export{s as Colors,o as CompoundComponents,d as ContentVariations,a as Default,l as Gradient,r as Shadows,n as WithMedia,i as WithMediaOverlay,c as WithNumberValueBar,pe as __namedExportsOrder,me as default};
