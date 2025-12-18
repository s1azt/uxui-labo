import{x as c}from"./lit-element-C4bBeaiV.js";import{o as n}from"./if-defined-DhMdV329.js";import{w as T}from"./decorator-Dt3Huotz.js";import{g as K}from"./storybook-utils-CyXQhEhe.js";import{f as A}from"./fixFigmaPath-DxFz5b9E.js";function $(e,a){return c`
    <yg-tabs
      gap="${n(e.gap)}"
      selected="${n(e.selected)}"
      variant="${n(e.variant)}"
      ?centered="${n(e.centered)}"
    >
      ${a}
    </yg-tabs>
  `}function G(e,a){return c`
    <nk-tabs
      gap="${n(e.gap)}"
      selected="${n(e.selected)}"
      variant="${n(e.variant)}"
      ?centered="${n(e.centered)}"
    >
      ${a}
    </nk-tabs>
  `}function V(e,a){return c`
    <nl-tabs
      gap="${n(e.gap)}"
      selected="${n(e.selected)}"
      variant="${n(e.variant)}"
      ?centered="${n(e.centered)}"
    >
      ${a}
    </nl-tabs>
  `}function D(e,a){return c`
    <nl-tab
      name="${e.name}"
      tab-label="${e.label}"
      color="${n(e.color)}"
      ?disabled="${n(e.disabled)}"
    >
      ${a?a(e.content):e.content}
    </nl-tab>
  `}function u(e,a){return c`
    <yg-tab
      name="${e.name}"
      tab-label="${e.label}"
      color="${n(e.color)}"
      ?disabled="${n(e.disabled)}"
    >
      ${a?a(e.content):e.content}
    </yg-tab>
  `}function F(e,a){return c`
    <nk-tab
      name="${e.name}"
      tab-label="${e.label}"
      color="${n(e.color)}"
      ?disabled="${n(e.disabled)}"
    >
      ${a?a(e.content):e.content}
    </nk-tab>
  `}function s(e,a,p,m,f){let l;e==="yg-tabs"?l=u:e==="nk-tabs"?l=F:e==="nl-tabs"?l=D:l=u;const i=p.map(r=>l(r,f));let o;return e==="yg-tabs"?o=$(a,i):e==="nk-tabs"?o=G(a,i):e==="nl-tabs"?o=V(a,i):o=$(a,i),m?c`<div style="${m}">${o}</div>`:o}function C(e){const{componentName:a,title:p,componentType:m}=e,{events:f,args:l,argTypes:i}=K(a),r={design:{type:"figma",url:A(a==="yg-tabs"?"https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8615-18656&t=rALyGCVj0mWytV8R-1":"https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13792-16713&node-type=symbol&m=dev")}},d=[{name:"tab1",label:`【タブ１】
タブ1`,content:"テキスト１",color:"default",disabled:!1},{name:"tab2",label:"タブ２",content:"テキスト２",color:"default",disabled:!1},{name:"tab3",label:"タブ３",content:"テキスト３",color:"default",disabled:!1}],g={render:t=>s(a,t,t.tabs),args:{...l,selected:"tab1",tabs:d,gap:void 0,variant:void 0,centered:!1},parameters:r},v={render:t=>s(a,t,(t.tabs||d).map(b=>({...b,color:"white"})),"background-color: black;",b=>c`<span style="color: white;"> ${b} </span>`),args:{...l,tabs:d.map(t=>({...t,color:"white"})),selected:"tab1"},parameters:r},h={render:t=>s(a,t,(t.tabs||d).map(b=>({...b,disabled:!0}))),args:{...l,tabs:d.map(t=>({...t,disabled:!0})),selected:"tab1"},parameters:r},y={render:t=>s(a,t,t.tabs),args:{...l,tabs:d.map(t=>({...t,content:`standardバリアントの${t.label.replace(`【タブ１】
`,"")}のコンテンツ`})),variant:"standard",selected:"tab1"},parameters:r},x={render:t=>s(a,t,t.tabs),args:{...l,tabs:d.map(t=>({...t,content:`fullWidthバリアントの${t.label.replace(`【タブ１】
`,"")}のコンテンツ`})),variant:"fullWidth",selected:"tab1"},parameters:r},k={render:t=>s(a,t,t.tabs,"width: 400px; border: 1px solid #ccc; padding: 8px;"),args:{...l,tabs:[{name:"tab1",label:"長いタブラベル1",content:"scrollableバリアントのタブ1のコンテンツ"},{name:"tab2",label:"長いタブラベル2",content:"scrollableバリアントのタブ2のコンテンツ"},{name:"tab3",label:"長いタブラベル3",content:"scrollableバリアントのタブ3のコンテンツ"},{name:"tab4",label:"長いタブラベル4",content:"scrollableバリアントのタブ4のコンテンツ"},{name:"tab5",label:"長いタブラベル5",content:"scrollableバリアントのタブ5のコンテンツ"}],variant:"scrollable",selected:"tab1"},parameters:r},w={render:t=>s(a,t,t.tabs),args:{...l,tabs:d.map(t=>({...t,content:`中央揃えの${t.label.replace(`【タブ１】
`,"")}のコンテンツ`})),centered:!0,selected:"tab1"},parameters:r},W={render:t=>c`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3>Gap: 2 (8px)</h3>
          ${s(a,{...t,gap:"2"},t.tabs)}
        </div>
        <div>
          <h3>Gap: 4 (16px, デフォルト)</h3>
          ${s(a,{...t,gap:"4"},t.tabs)}
        </div>
        <div>
          <h3>Gap: 8 (32px)</h3>
          ${s(a,{...t,gap:"8"},t.tabs)}
        </div>
      </div>
    `,args:{...l,tabs:d.map(t=>({...t,content:`${t.label.replace(`【タブ１】
`,"")}のコンテンツ`})),selected:"tab1"},parameters:r};return{default:{title:p,component:a,args:l,argTypes:i,parameters:{actions:{handles:f}},decorators:[T]},Default:g,White:v,Disabled:h,StandardVariant:y,FullWidthVariant:x,ScrollableVariant:k,CenteredTabs:w,WithDifferentGap:W}}export{C as c};
