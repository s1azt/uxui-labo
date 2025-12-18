import{x as n}from"./lit-element-C4bBeaiV.js";import{g as u}from"./storybook-utils-CyXQhEhe.js";import{f as g}from"./fixFigmaPath-DxFz5b9E.js";function t(i,e={}){const m=e.placement||"bottom-start",s=e.open||!1,l=e.closeOnOutsideClick!==!1,a=e.closeOnSelect!==!1;switch(i){case"yg-dropdown":return n`
        <yg-dropdown 
          placement="${m}" 
          ?open="${s}"
          ?close-on-outside-click="${l}"
          ?close-on-select="${a}"
        >
          <yg-button slot="trigger" right-icon="yg:arrow-down-small">編集</yg-button>
          <yg-menu>
            <yg-menu-item value="cut" icon="yg:cut">切り取り</yg-menu-item>
            <yg-menu-item value="copy" icon="yg:copy">コピー</yg-menu-item>
            <yg-menu-item value="paste" icon="yg:paste">貼り付け</yg-menu-item>
            <yg-divider></yg-divider>
            <yg-menu-item value="delete" icon="yg:delete">削除</yg-menu-item>
          </yg-menu>
        </yg-dropdown>
      `;case"nk-dropdown":return n`
        <nk-dropdown 
          placement="${m}" 
          ?open="${s}"
          ?close-on-outside-click="${l}"
          ?close-on-select="${a}"
        >
          <nk-button slot="trigger" right-icon="yg:arrow-down-small">編集</nk-button>
          <nk-menu>
            <nk-menu-item value="cut" icon="yg:cut">切り取り</nk-menu-item>
            <nk-menu-item value="copy" icon="yg:copy">コピー</nk-menu-item>
            <nk-menu-item value="paste" icon="yg:paste">貼り付け</nk-menu-item>
            <nk-divider></nk-divider>
            <nk-menu-item value="delete" icon="yg:delete">削除</nk-menu-item>
          </nk-menu>
        </nk-dropdown>
      `;default:return n`<div>Unknown component: ${i}</div>`}}function j(i){const{componentName:e,title:m}=i,{args:s,argTypes:l}=u(e),o={design:{type:"figma",url:g("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=8615-18656&t=rALyGCVj0mWytV8R-1")}};return{default:{title:m,component:e,args:s,argTypes:l,parameters:{actions:{handles:["dropdown-show","dropdown-hide","menu-select"]},docs:{description:{component:"ドロップダウンメニューコンポーネントです。トリガー要素をクリックするとメニューが表示されます。"}}}},Default:{render:c=>t(e,c),args:{placement:"bottom-start",open:!1,closeOnOutsideClick:!0,closeOnSelect:!0},parameters:o},BasicMenu:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">基本的なドロップダウンメニュー</h3>
        <div class="flex gap-4">
          ${t(e,{placement:"bottom-start"})}
          ${t(e,{placement:"bottom-end"})}
        </div>
      </div>
    `,parameters:o},Placements:{render:()=>n`
      <div class="p-8">
        <h3 class="text-lg font-bold mb-4">配置位置のバリエーション</h3>
        <div class="grid grid-cols-3 gap-8 h-64">
          <!-- Top -->
          <div class="flex justify-center items-end">
            ${t(e,{placement:"top"})}
          </div>
          <div class="flex justify-center items-end">
            ${t(e,{placement:"top-start"})}
          </div>
          <div class="flex justify-center items-end">
            ${t(e,{placement:"top-end"})}
          </div>
          
          <!-- Middle -->
          <div class="flex justify-start items-center">
            ${t(e,{placement:"right"})}
          </div>
          <div class="flex justify-center items-center">
            <span class="text-gray-500">中央</span>
          </div>
          <div class="flex justify-end items-center">
            ${t(e,{placement:"left"})}
          </div>
          
          <!-- Bottom -->
          <div class="flex justify-center items-start">
            ${t(e,{placement:"bottom"})}
          </div>
          <div class="flex justify-center items-start">
            ${t(e,{placement:"bottom-start"})}
          </div>
          <div class="flex justify-center items-start">
            ${t(e,{placement:"bottom-end"})}
          </div>
        </div>
      </div>
    `,parameters:o},CheckboxMenu:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">チェックボックス付きメニュー</h3>
        ${t(e,{})}
      </div>
    `,parameters:o},SubmenuMenu:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">サブメニュー付き</h3>
        <${e}>
          <yg-button slot="trigger" right-icon="yg:arrow-down-small">ファイル</yg-button>
          <yg-menu>
            <yg-menu-item value="new" icon="yg:add">新規作成</yg-menu-item>
            <yg-menu-item value="open" icon="yg:folder">開く</yg-menu-item>
            <yg-divider></yg-divider>
            <yg-menu-item value="export">
              エクスポート
              <yg-menu slot="submenu">
                <yg-menu-item value="export-pdf">PDF</yg-menu-item>
                <yg-menu-item value="export-excel">Excel</yg-menu-item>
                <yg-menu-item value="export-csv">CSV</yg-menu-item>
              </yg-menu>
            </yg-menu-item>
          </yg-menu>
        </${e}>
      </div>
    `,parameters:o},DisabledItems:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">無効化された項目</h3>
        <${e}>
          <yg-button slot="trigger" right-icon="yg:arrow-down-small">編集</yg-button>
          <yg-menu>
            <yg-menu-item value="cut" icon="yg:cut">切り取り</yg-menu-item>
            <yg-menu-item value="copy" icon="yg:copy">コピー</yg-menu-item>
            <yg-menu-item value="paste" icon="yg:paste" disabled>貼り付け</yg-menu-item>
            <yg-divider></yg-divider>
            <yg-menu-item value="delete" icon="yg:delete" disabled>削除</yg-menu-item>
          </yg-menu>
        </${e}>
      </div>
    `,parameters:o},MultipleDropdowns:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">複数のドロップダウン</h3>
        <div class="flex gap-4">
          <${e}>
            <yg-button slot="trigger" right-icon="yg:arrow-down-small">編集</yg-button>
            <yg-menu>
              <yg-menu-item value="cut" icon="yg:cut">切り取り</yg-menu-item>
              <yg-menu-item value="copy" icon="yg:copy">コピー</yg-menu-item>
              <yg-menu-item value="paste" icon="yg:paste">貼り付け</yg-menu-item>
            </yg-menu>
          </${e}>
          
          <${e}>
            <yg-button slot="trigger" right-icon="yg:arrow-down-small">表示</yg-button>
            <yg-menu>
              <yg-menu-item value="toolbar" type="checkbox" checked>ツールバー</yg-menu-item>
              <yg-menu-item value="sidebar" type="checkbox">サイドバー</yg-menu-item>
              <yg-menu-item value="footer" type="checkbox">フッター</yg-menu-item>
            </yg-menu>
          </${e}>
          
          <${e}>
            <yg-button slot="trigger" right-icon="yg:arrow-down-small">ヘルプ</yg-button>
            <yg-menu>
              <yg-menu-item value="help" icon="yg:help">ヘルプ</yg-menu-item>
              <yg-menu-item value="about" icon="yg:info">このアプリについて</yg-menu-item>
            </yg-menu>
          </${e}>
        </div>
      </div>
    `,parameters:o},Playground:{render:c=>t(e,c),args:{placement:"bottom-start",open:!1,closeOnOutsideClick:!0,closeOnSelect:!0},parameters:o}}}export{j as c};
