import{x as t}from"./lit-element-C4bBeaiV.js";import{f as g}from"./fixFigmaPath-DxFz5b9E.js";import{w as c}from"./decorator-Dt3Huotz.js";import{g as f}from"./storybook-utils-CyXQhEhe.js";function x(i){const{componentName:e,title:o,componentType:d,buttonComponentName:n}=i,{events:y,args:l,argTypes:r,template:s}=f(e),a={render:u=>t` ${s(u)} `,args:{title:"タイトル","left-section-slot":`<${n} slot="left-section">戻る</${n}>`,"right-section-slot":`<${n} slot="right-section">使い方</${n}>`},parameters:{design:{type:"figma",url:g("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=2316-192452&t=JdZhRC62Xlasnvxu-1")}}};return{default:{title:o,component:e,args:l,argTypes:r,decorators:[c]},Default:a,LeftSectionOnly:{render:()=>e==="yg-title"?t`
          <yg-title title="左側のみのタイトル">
            <yg-button
              slot="left-section"
              variant="outlined"
              left-icon="mdi:arrow-left"
              >戻る</yg-button
            >
          </yg-title>
        `:t`
          <nk-title title="左側のみのタイトル">
            <nk-button
              slot="left-section"
              variant="outlined"
              left-icon="mdi:arrow-left"
              >戻る</nk-button
            >
          </nk-title>
        `},RightSectionOnly:{render:()=>e==="yg-title"?t`
          <yg-title title="右側のみのタイトル">
            <yg-button slot="right-section" size="large">使い方</yg-button>
          </yg-title>
        `:t`
          <nk-title title="右側のみのタイトル">
            <nk-button slot="right-section" size="large">使い方</nk-button>
          </nk-title>
        `},NoSections:{render:()=>e==="yg-title"?t` <yg-title title="セクションなしのタイトル"></yg-title> `:t` <nk-title title="セクションなしのタイトル"></nk-title> `},MultipleButtons:{render:()=>e==="yg-title"?t`
          <yg-title title="複数ボタン付きタイトル">
            <div slot="left-section" class="flex gap-2">
              <yg-button variant="outlined" left-icon="mdi:arrow-left"
                >戻る</yg-button
              >
              <yg-button variant="outlined" left-icon="mdi:refresh">更新</yg-button>
            </div>
            <div slot="right-section" class="flex gap-2">
              <yg-button variant="outlined">キャンセル</yg-button>
              <yg-button>保存</yg-button>
            </div>
          </yg-title>
        `:t`
          <nk-title title="複数ボタン付きタイトル">
            <div slot="left-section" class="flex gap-2">
              <nk-button variant="outlined" left-icon="mdi:arrow-left"
                >戻る</nk-button
              >
              <nk-button variant="outlined" left-icon="mdi:refresh">更新</nk-button>
            </div>
            <div slot="right-section" class="flex gap-2">
              <nk-button variant="outlined">キャンセル</nk-button>
              <nk-button>保存</nk-button>
            </div>
          </nk-title>
        `}}}export{x as c};
