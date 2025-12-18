import{x as t}from"./lit-element-C4bBeaiV.js";import{f as s}from"./fixFigmaPath-DxFz5b9E.js";import{w as u}from"./decorator-Dt3Huotz.js";import{g as b}from"./storybook-utils-CyXQhEhe.js";function S(n){const{componentName:e,title:o,componentType:y}=n,{events:a,args:i,argTypes:r,template:d}=b(e),l={render:g=>t` ${d(g)} `,args:{"default-slot":"ボタン"},parameters:{design:{type:"figma",url:s("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};return{default:{title:o,component:e,args:i,argTypes:r,parameters:{actions:{handles:a}},decorators:[u]},Default:l,Variants:{render:()=>t`
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <yg-button variant="contained">Contained</yg-button>
        <yg-button variant="outlined">Outlined</yg-button>
        <yg-button variant="text">Text</yg-button>
      </div>
    </div>
  `},Sizes:{render:()=>t`
    <div class="flex items-center gap-4">
      <yg-button size="small">Small</yg-button>
      <yg-button size="medium">Medium</yg-button>
      <yg-button size="large">Large</yg-button>
    </div>
  `},Colors:{render:()=>t`
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <yg-button color="primary" variant="contained">Primary</yg-button>
        <yg-button color="red" variant="contained">Red</yg-button>
        <yg-button
          color="white"
          variant="contained"
          style="background-color: #333;"
          >White</yg-button
        >
      </div>
      <div class="flex gap-4">
        <yg-button color="primary" variant="outlined">Primary</yg-button>
        <yg-button color="red" variant="outlined">Red</yg-button>
        <yg-button
          color="white"
          variant="outlined"
          style="background-color: #333;"
          >White</yg-button
        >
      </div>
      <div class="flex gap-4">
        <yg-button color="primary" variant="text">Primary</yg-button>
        <yg-button color="red" variant="text">Red</yg-button>
        <yg-button color="white" variant="text" style="background-color: #333;"
          >White</yg-button
        >
      </div>
    </div>
  `},WithIcons:{render:()=>t`
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <yg-button left-icon="mdi:home">Left Icon</yg-button>
        <yg-button right-icon="mdi:arrow-right">Right Icon</yg-button>
        <yg-button left-icon="mdi:home" right-icon="mdi:arrow-right"
          >Both Icons</yg-button
        >
      </div>
    </div>
  `},Disabled:{render:()=>t`
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <yg-button disabled variant="contained">Disabled Contained</yg-button>
        <yg-button disabled variant="outlined">Disabled Outlined</yg-button>
        <yg-button disabled variant="text">Disabled Text</yg-button>
      </div>
    </div>
  `},BorderRadius:{render:()=>t`
    <div class="flex gap-4">
      <yg-button radius="base">Base Radius</yg-button>
      <yg-button radius="full">Full Radius</yg-button>
    </div>
  `},ButtonTypes:{render:()=>t`
    <div class="flex gap-4">
      <yg-button type="button">Button Type</yg-button>
      <yg-button type="submit">Submit Type</yg-button>
      <yg-button type="reset">Reset Type</yg-button>
    </div>
  `},WithHref:{render:()=>t`
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <yg-button href="#page1" variant="contained">リンクボタン（Contained）</yg-button>
        <yg-button href="#page2" variant="outlined">リンクボタン（Outlined）</yg-button>
        <yg-button href="#page3" variant="text">リンクボタン（Text）</yg-button>
      </div>
      <div class="flex gap-4">
        <yg-button href="#page4" variant="contained" left-icon="mdi:home">アイコン付きリンク</yg-button>
        <yg-button href="#page5" variant="outlined" right-icon="mdi:arrow-right">右アイコン付きリンク</yg-button>
      </div>
    </div>
  `},WithTarget:{render:()=>t`
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <yg-button href="https://example.com" target="_self" variant="contained">同じタブで開く（_self）</yg-button>
        <yg-button href="https://example.com" target="_blank" variant="contained">新しいタブで開く（_blank）</yg-button>
      </div>
      <div class="flex gap-4">
        <yg-button href="https://example.com" target="_blank" variant="outlined" left-icon="mdi:open-in-new">外部リンク（新しいタブ）</yg-button>
      </div>
    </div>
  `},DisabledLink:{render:()=>t`
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <yg-button href="#disabled1" disabled variant="contained">無効なリンク（Contained）</yg-button>
        <yg-button href="#disabled2" disabled variant="outlined">無効なリンク（Outlined）</yg-button>
        <yg-button href="#disabled3" disabled variant="text">無効なリンク（Text）</yg-button>
      </div>
    </div>
  `}}}export{S as c};
