import{x as t}from"./lit-element-C4bBeaiV.js";import{g as l}from"./storybook-utils-CyXQhEhe.js";import{f as c}from"./fixFigmaPath-DxFz5b9E.js";function e(n,i={}){const a=i.orientation||"horizontal",o=i.class||"";switch(n){case"yg-divider":return t`<yg-divider orientation="${a}" class="${o}"></yg-divider>`;case"nk-divider":return t`<nk-divider orientation="${a}" class="${o}"></nk-divider>`;case"nl-divider":return t`<nl-divider orientation="${a}" class="${o}"></nl-divider>`;default:return t`<div>Unknown component: ${n}</div>`}}function z(n){const{componentName:i,title:a}=n,{args:o,argTypes:d}=l(i),r={design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=8615-18656&t=rALyGCVj0mWytV8R-1")}};return{default:{title:a,component:i,args:o,argTypes:d,parameters:{actions:{handles:[]},docs:{description:{component:"区切り線コンポーネントです。水平方向と垂直方向の区切り線を表示できます。"}}}},Default:{render:s=>e(i,s),args:{orientation:"horizontal"},parameters:r},Horizontal:{render:()=>t`
      <div class="p-4">
        <div class="mb-4">上部コンテンツ</div>
        ${e(i,{orientation:"horizontal"})}
        <div class="mt-4">下部コンテンツ</div>
      </div>
    `,parameters:r},Vertical:{render:()=>t`
      <div class="flex h-20 items-center p-4">
        <div>左側コンテンツ</div>
        ${e(i,{orientation:"vertical",class:"mx-4"})}
        <div>右側コンテンツ</div>
      </div>
    `,parameters:r},InContext:{render:()=>t`
      <div class="p-4 border rounded">
        <h3 class="text-lg font-bold">セクションタイトル</h3>
        ${e(i,{orientation:"horizontal",class:"my-2"})}
        <p>
          これはセクションの内容です。区切り線を使用することで、視覚的に内容を分けることができます。
        </p>
      </div>
    `,parameters:r},InForm:{render:()=>t`
      <div class="p-4 border rounded">
        <form class="flex flex-col gap-4">
          <div>
            <label class="block mb-1">名前</label>
            <input type="text" class="border rounded px-2 py-1 w-full" />
          </div>
          ${e(i,{orientation:"horizontal"})}
          <div>
            <label class="block mb-1">メールアドレス</label>
            <input type="email" class="border rounded px-2 py-1 w-full" />
          </div>
          ${e(i,{orientation:"horizontal"})}
          <div>
            <label class="block mb-1">メッセージ</label>
            <textarea class="border rounded px-2 py-1 w-full h-20"></textarea>
          </div>
          <div class="flex justify-end">
            <button class="bg-primary text-white rounded px-4 py-2">送信</button>
          </div>
        </form>
      </div>
    `,parameters:r},MultipleUsage:{render:()=>t`
      <div class="flex items-center p-4">
        <div>項目1</div>
        ${e(i,{orientation:"vertical",class:"mx-2 h-6"})}
        <div>項目2</div>
        ${e(i,{orientation:"vertical",class:"mx-2 h-6"})}
        <div>項目3</div>
        ${e(i,{orientation:"vertical",class:"mx-2 h-6"})}
        <div>項目4</div>
      </div>
      ${e(i,{orientation:"horizontal",class:"my-4"})}
      <div class="flex flex-col">
        <div class="py-2">セクション1</div>
        ${e(i,{orientation:"horizontal"})}
        <div class="py-2">セクション2</div>
        ${e(i,{orientation:"horizontal"})}
        <div class="py-2">セクション3</div>
      </div>
    `,parameters:r},Playground:{render:s=>e(i,s),args:{orientation:"horizontal"},parameters:r}}}export{z as c};
