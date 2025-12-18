import{x as n}from"./lit-element-C4bBeaiV.js";import{g as c}from"./storybook-utils-CyXQhEhe.js";import{f as d}from"./fixFigmaPath-DxFz5b9E.js";function t(s,e={}){const m=e.value||"item",o=e.disabled||!1,a=e.selected||!1,l=e.icon||"";switch(s){case"yg-menu-item":return n`
        <yg-menu-item 
          value="${m}" 
          ?disabled="${o}"
          ?selected="${a}"
          icon="${l}"
        >
          ${e.text||"メニュー項目"}
        </yg-menu-item>
      `;case"nk-menu-item":return n`
        <nk-menu-item 
          value="${m}" 
          ?disabled="${o}"
          ?selected="${a}"
          icon="${l}"
        >
          ${e.text||"メニュー項目"}
        </nk-menu-item>
      `;default:return n`<div>Unknown component: ${s}</div>`}}function W(s){const{componentName:e,title:m}=s,{args:o,argTypes:a}=c(e),i={design:{type:"figma",url:d("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=8615-18656&t=rALyGCVj0mWytV8R-1")}};return{default:{title:m,component:e,args:o,argTypes:a,parameters:{actions:{handles:["menu-item-click"]},docs:{description:{component:"メニュー項目コンポーネントです。メニュー内の個別の項目を表示します。"}}}},Default:{render:u=>t(e,u),args:{value:"item",disabled:!1,checked:!1,icon:"",type:"normal",text:"メニュー項目"},parameters:i},BasicItem:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">基本的なメニュー項目</h3>
        <div class="border rounded bg-white w-48">
          ${t(e,{text:"メニュー項目"})}
        </div>
      </div>
    `,parameters:i},WithIcon:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">アイコン付きメニュー項目</h3>
        <div class="border rounded bg-white w-48">
          ${t(e,{text:"切り取り",icon:"yg:cut"})}
          ${t(e,{text:"コピー",icon:"yg:copy"})}
          ${t(e,{text:"貼り付け",icon:"yg:paste"})}
          ${t(e,{text:"削除",icon:"yg:delete"})}
        </div>
      </div>
    `,parameters:i},DisabledItem:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">無効化された項目</h3>
        <div class="border rounded bg-white w-48">
          ${t(e,{text:"切り取り",icon:"yg:cut"})}
          ${t(e,{text:"コピー",icon:"yg:copy"})}
          ${t(e,{text:"貼り付け",icon:"yg:paste",disabled:!0})}
          ${t(e,{text:"削除",icon:"yg:delete",disabled:!0})}
        </div>
      </div>
    `,parameters:i},WithSubmenu:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">サブメニュー付き</h3>
        <div class="border rounded bg-white w-48">
          ${e==="yg-menu-item"?n`
            <yg-menu-item value="file">
              ファイル
              <yg-menu slot="submenu">
                <yg-menu-item value="new" icon="yg:add">新規作成</yg-menu-item>
                <yg-menu-item value="open" icon="yg:folder">開く</yg-menu-item>
                <yg-menu-item value="save" icon="yg:save">保存</yg-menu-item>
              </yg-menu>
            </yg-menu-item>
            <yg-menu-item value="edit">
              編集
              <yg-menu slot="submenu">
                <yg-menu-item value="undo" icon="yg:undo">元に戻す</yg-menu-item>
                <yg-menu-item value="redo" icon="yg:redo">やり直し</yg-menu-item>
              </yg-menu>
            </yg-menu-item>
          `:n`
            <nk-menu-item value="file">
              ファイル
              <nk-menu slot="submenu">
                <nk-menu-item value="new" icon="yg:add">新規作成</nk-menu-item>
                <nk-menu-item value="open" icon="yg:folder">開く</nk-menu-item>
                <nk-menu-item value="save" icon="yg:save">保存</nk-menu-item>
              </nk-menu>
            </nk-menu-item>
            <nk-menu-item value="edit">
              編集
              <nk-menu slot="submenu">
                <nk-menu-item value="undo" icon="yg:undo">元に戻す</nk-menu-item>
                <nk-menu-item value="redo" icon="yg:redo">やり直し</nk-menu-item>
              </nk-menu>
            </nk-menu-item>
          `}
        </div>
      </div>
    `,parameters:i},WithSlots:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">プレフィックス・サフィックススロット</h3>
        <div class="border rounded bg-white w-48">
          ${e==="yg-menu-item"?n`
            <yg-menu-item value="item1">
              <iconify-icon slot="prefix" icon="yg:star" class="text-yellow-500"></iconify-icon>
              お気に入り
              <span slot="suffix" class="text-xs text-gray-500">Ctrl+F</span>
            </yg-menu-item>
            <yg-menu-item value="item2">
              <iconify-icon slot="prefix" icon="yg:settings" class="text-blue-500"></iconify-icon>
              設定
              <span slot="suffix" class="text-xs text-gray-500">Ctrl+,</span>
            </yg-menu-item>
          `:n`
            <nk-menu-item value="item1">
              <iconify-icon slot="prefix" icon="yg:star" class="text-yellow-500"></iconify-icon>
              お気に入り
              <span slot="suffix" class="text-xs text-gray-500">Ctrl+F</span>
            </nk-menu-item>
            <nk-menu-item value="item2">
              <iconify-icon slot="prefix" icon="yg:settings" class="text-blue-500"></iconify-icon>
              設定
              <span slot="suffix" class="text-xs text-gray-500">Ctrl+,</span>
            </nk-menu-item>
          `}
        </div>
      </div>
    `,parameters:i},States:{render:()=>n`
      <div class="p-4">
        <h3 class="text-lg font-bold mb-4">状態のバリエーション</h3>
        <div class="border rounded bg-white w-48">
          ${t(e,{text:"通常の項目"})}
          ${t(e,{text:"選択された項目",selected:!0})}
          ${t(e,{text:"無効化された項目",disabled:!0})}
          ${t(e,{text:"アイコン付き",icon:"yg:info"})}
        </div>
      </div>
    `,parameters:i},Playground:{render:u=>t(e,u),args:{value:"item",disabled:!1,selected:!1,icon:"",text:"メニュー項目"},parameters:i}}}export{W as c};
