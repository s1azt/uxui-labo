import{x as m}from"./lit-element-C4bBeaiV.js";import{g as l}from"./storybook-utils-CyXQhEhe.js";import{f as y}from"./fixFigmaPath-DxFz5b9E.js";function t(i,e={}){const u=e.width||"200",a=e.maxHeight||"300";switch(i){case"yg-menu":return m`
        <yg-menu width="${u}" max-height="${a}">
          <yg-menu-item value="undo" icon="yg:undo">元に戻す</yg-menu-item>
          <yg-menu-item value="redo" icon="yg:redo">やり直し</yg-menu-item>
          <yg-menu-item value="cut" icon="yg:cut">切り取り</yg-menu-item>
          <yg-menu-item value="copy" icon="yg:copy">コピー</yg-menu-item>
          <yg-menu-item value="paste" icon="yg:paste">貼り付け</yg-menu-item>
          <yg-menu-item value="delete" icon="yg:delete">削除</yg-menu-item>
        </yg-menu>
      `;case"nk-menu":return m`
        <nk-menu width="${u}" max-height="${a}">
          <nk-menu-item value="undo" icon="yg:undo">元に戻す</nk-menu-item>
          <nk-menu-item value="redo" icon="yg:redo">やり直し</nk-menu-item>
          <nk-menu-item value="cut" icon="yg:cut">切り取り</nk-menu-item>
          <nk-menu-item value="copy" icon="yg:copy">コピー</nk-menu-item>
          <nk-menu-item value="paste" icon="yg:paste">貼り付け</nk-menu-item>
          <nk-menu-item value="delete" icon="yg:delete">削除</nk-menu-item>
        </nk-menu>
      `;default:return m`<div>Unknown component: ${i}</div>`}}function x(i){const{componentName:e,title:u}=i,{args:a,argTypes:o}=l(e),n={design:{type:"figma",url:y("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=8615-18656&t=rALyGCVj0mWytV8R-1")}};return{default:{title:u,component:e,args:a,argTypes:o,parameters:{actions:{handles:["menu-select"]},docs:{description:{component:"メニューコンテナコンポーネントです。メニュー項目を表示できます。"}}}},Default:{render:g=>t(e,g),args:{width:"200",maxHeight:"300"},parameters:n},Widths:{render:()=>m`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">幅のバリエーション</h3>
        <div class="flex gap-4">
          <div>
            <h4 class="text-sm font-semibold mb-2">150px</h4>
            ${t(e,{width:"150"})}
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-2">200px</h4>
            ${t(e,{width:"200"})}
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-2">300px</h4>
            ${t(e,{width:"300"})}
          </div>
        </div>
      </div>
    `,parameters:n},DisabledItems:{render:()=>m`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">無効化された項目</h3>
        ${e==="yg-menu"?m`
          <yg-menu>
            <yg-menu-item value="cut" icon="yg:cut">切り取り</yg-menu-item>
            <yg-menu-item value="copy" icon="yg:copy">コピー</yg-menu-item>
            <yg-menu-item value="paste" icon="yg:paste" disabled>貼り付け</yg-menu-item>
            <yg-menu-item value="delete" icon="yg:delete" disabled>削除</yg-menu-item>
          </yg-menu>
        `:m`
          <nk-menu>
            <nk-menu-item value="cut" icon="yg:cut">切り取り</nk-menu-item>
            <nk-menu-item value="copy" icon="yg:copy">コピー</nk-menu-item>
            <nk-menu-item value="paste" icon="yg:paste" disabled>貼り付け</nk-menu-item>
            <nk-menu-item value="delete" icon="yg:delete" disabled>削除</nk-menu-item>
          </nk-menu>
        `}
      </div>
    `,parameters:n},LongMenu:{render:()=>m`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">長いメニュー（スクロール）</h3>
        ${e==="yg-menu"?m`
          <yg-menu max-height="200">
            <yg-menu-item value="item1">項目 1</yg-menu-item>
            <yg-menu-item value="item2">項目 2</yg-menu-item>
            <yg-menu-item value="item3">項目 3</yg-menu-item>
            <yg-menu-item value="item4">項目 4</yg-menu-item>
            <yg-menu-item value="item5">項目 5</yg-menu-item>
            <yg-menu-item value="item6">項目 6</yg-menu-item>
            <yg-menu-item value="item7">項目 7</yg-menu-item>
            <yg-menu-item value="item8">項目 8</yg-menu-item>
            <yg-menu-item value="item9">項目 9</yg-menu-item>
            <yg-menu-item value="item10">項目 10</yg-menu-item>
            <yg-menu-item value="item11">項目 11</yg-menu-item>
            <yg-menu-item value="item12">項目 12</yg-menu-item>
          </yg-menu>
        `:m`
          <nk-menu max-height="200">
            <nk-menu-item value="item1">項目 1</nk-menu-item>
            <nk-menu-item value="item2">項目 2</nk-menu-item>
            <nk-menu-item value="item3">項目 3</nk-menu-item>
            <nk-menu-item value="item4">項目 4</nk-menu-item>
            <nk-menu-item value="item5">項目 5</nk-menu-item>
            <nk-menu-item value="item6">項目 6</nk-menu-item>
            <nk-menu-item value="item7">項目 7</nk-menu-item>
            <nk-menu-item value="item8">項目 8</nk-menu-item>
            <nk-menu-item value="item9">項目 9</nk-menu-item>
            <nk-menu-item value="item10">項目 10</nk-menu-item>
            <nk-menu-item value="item11">項目 11</nk-menu-item>
            <nk-menu-item value="item12">項目 12</nk-menu-item>
          </nk-menu>
        `}
      </div>
    `,parameters:n},Playground:{render:g=>t(e,g),args:{width:"200",maxHeight:"300"},parameters:n}}}export{x as c};
