import{x as t}from"./lit-element-C4bBeaiV.js";import{o as l}from"./if-defined-DhMdV329.js";import{w as y}from"./decorator-Dt3Huotz.js";import{g as h}from"./storybook-utils-CyXQhEhe.js";import{f as v}from"./fixFigmaPath-DxFz5b9E.js";function s(d,e){return d==="yg-tab"?t`
      <yg-tab
        name="${e.name}"
        tab-label="${e["tab-label"]}"
        color="${l(e.color)}"
        ?disabled="${l(e.disabled)}"
        ?selected="${l(e.selected)}"
      >
        ${e["default-slot"]}
      </yg-tab>
    `:d==="nk-tab"?t`
      <nk-tab
        name="${e.name}"
        tab-label="${e["tab-label"]}"
        color="${l(e.color)}"
        ?disabled="${l(e.disabled)}"
        ?selected="${l(e.selected)}"
      >
        ${e["default-slot"]}
      </nk-tab>
    `:d==="nl-tab"?t`
      <nl-tab
        name="${e.name}"
        tab-label="${e["tab-label"]}"
        color="${l(e.color)}"
        ?disabled="${l(e.disabled)}"
        ?selected="${l(e.selected)}"
      >
        ${e["default-slot"]}
      </nl-tab>
    `:t``}function c(d,e,n){let b;return d==="yg-tabs"?b=t`<yg-tabs>${e}</yg-tabs>`:d==="nk-tabs"?b=t`<nk-tabs>${e}</nk-tabs>`:b=t``,n?t`<div style="${n}">${b}</div>`:b}function C(d){const{componentName:e,parentComponentName:n,title:b,componentType:w}=d,{events:m,args:i,argTypes:o}=h(e),r={design:{type:"figma",url:v("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8615-18656&t=rALyGCVj0mWytV8R-1")}},f={render:a=>c(n,s(e,a)),args:{...i,"default-slot":"コンテンツ",name:"tab1","tab-label":"タブ1",color:"default",disabled:!1,selected:!0},parameters:r},g={render:a=>c(n,s(e,{...a,color:"white","default-slot":t`<div style="color: white; padding: 16px;">
            白のタブのコンテンツ
          </div>`}),"background-color: #333; padding: 16px;"),args:{...i,"default-slot":"白のタブのコンテンツ",name:"tab1","tab-label":"白色のタブ",color:"white",selected:!0},parameters:r},u={render:a=>t`
      ${c(n,t`
          ${s(e,{...a,name:"tab1","tab-label":"通常のタブ",selected:a.name==="tab1"})}
          ${s(e,{...a,name:"tab2","tab-label":"無効化されたタブ",disabled:!0,"default-slot":"このコンテンツは表示されません",selected:a.name==="tab2"})}
        `)}
    `,args:{...i,name:"tab1",selected:!0,"default-slot":"通常のタブのコンテンツ"},parameters:r},$={render:a=>t`
      ${c(n,t`
          ${s(e,{...a,name:"tab1","tab-label":"タブ1",selected:a.name==="tab1","default-slot":t`<div style="padding: 16px;">
              <h3>タブ1のコンテンツ</h3>
              <p>
                これはタブ1のコンテンツです。タブをクリックすると、このコンテンツが表示されます。
              </p>
            </div>`})}
          ${s(e,{...a,name:"tab2","tab-label":"タブ2",selected:a.name==="tab2","default-slot":t`<div style="padding: 16px;">
              <h3>タブ2のコンテンツ</h3>
              <p>
                これはタブ2のコンテンツです。タブをクリックすると、このコンテンツが表示されます。
              </p>
            </div>`})}
          ${s(e,{...a,name:"tab3","tab-label":"タブ3",selected:a.name==="tab3","default-slot":t`<div style="padding: 16px;">
              <h3>タブ3のコンテンツ</h3>
              <p>
                これはタブ3のコンテンツです。タブをクリックすると、このコンテンツが表示されます。
              </p>
            </div>`})}
        `)}
    `,args:{...i,name:"tab1",selected:!0},parameters:r};return{default:{title:b,component:e,args:i,argTypes:o,parameters:{actions:{handles:m}},decorators:[y]},Default:f,WhiteTab:g,DisabledTab:u,MultipleTabsWithContent:$}}export{C as c};
