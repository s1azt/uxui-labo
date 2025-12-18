import{x as a}from"./lit-element-C4bBeaiV.js";import{f as c}from"./fixFigmaPath-DxFz5b9E.js";import{w}from"./decorator-Dt3Huotz.js";import{g as A}from"./storybook-utils-CyXQhEhe.js";import{w as K,u as W}from"./index-fMYyyWa4.js";function i(o,l="yg"){const f=[`${l}-radio`].filter(Boolean).join(" ");return a`
    <label class="flex items-center gap-2">
      <input
        type="radio"
        class="${f}"
        ?checked="${o.checked}"
        ?disabled="${o.disabled}"
        value="${o.value||""}"
        name="${o.name||""}"

      />
      <span class="text-body-large">${o["default-slot"]||""}</span>
    </label>
  `}function T(o){const{componentName:l,title:f,componentType:B,renderWithCssAndComponent:d,prefix:r="yg",theme:m="blue"}=o,{events:g,args:y,argTypes:p,template:e}=A(l),v={render:(s,u)=>d?d({args:s,renderComponent:t=>e(t),renderCss:t=>i(t,r)}):a` ${e(s)} `,args:{"default-slot":"ラジオボタン",checked:!0,disabled:!1,name:"",value:""},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73749")}}},h={render:(s,u)=>{const t={"default-slot":"チェックされていない",checked:!1,disabled:!1};return d?d({args:t,renderComponent:n=>e(n),renderCss:n=>i(n,r)}):a`${e(t)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73749")}}},k={render:(s,u)=>{const t={"default-slot":"無効状態",checked:!0,disabled:!0};return d?d({args:t,renderComponent:n=>e(n),renderCss:n=>i(n,r)}):a`${e(t)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73749")}}},b={render:(s,u)=>{const t={"default-slot":"フォーカス状態",checked:!1,disabled:!1,"data-testid":r+"-radio"};return d?d({args:t,renderComponent:n=>e(n),renderCss:n=>i(n,r)}):a`${e(t)}`},play:async({canvasElement:s})=>{const t=K(s).getByTestId(r+"-radio");await W.click(t)},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73749")}}},x={render:(s,u)=>d?d({args:{},renderComponent:()=>l==="yg-radio"?a`
                <div class="inline-flex gap-4">
                  ${e({checked:!1})}
                  ${e({checked:!0})}
                  ${e({checked:!1,disabled:!0})}
                  ${e({checked:!0,disabled:!0})}
                </div>
              `:a`
                <div class="inline-flex gap-4">
                  ${e({checked:!1})}
                  ${e({checked:!0})}
                  ${e({checked:!1,disabled:!0})}
                  ${e({checked:!0,disabled:!0})}
                </div>
              `,renderCss:()=>a`
            <div class="inline-flex gap-4">
              ${i({checked:!1},r)}
              ${i({checked:!0},r)}
              ${i({checked:!1,disabled:!0},r)}
              ${i({checked:!0,disabled:!0},r)}
            </div>
          `}):l==="yg-radio"?a`
          <div class="inline-flex gap-4">
            <yg-radio></yg-radio>
            <yg-radio checked></yg-radio>
            <yg-radio disabled></yg-radio>
            <yg-radio checked disabled></yg-radio>
          </div>
        `:a`
          <div class="inline-flex gap-4">
            <nk-radio></nk-radio>
            <nk-radio checked></nk-radio>
            <nk-radio disabled></nk-radio>
            <nk-radio checked disabled></nk-radio>
          </div>
        `,parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73749")}}},$={render:(s,u)=>d?d({args:{},renderComponent:()=>l==="yg-radio"?a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple",checked:!0,"default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana","default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry","default-slot":"Cherry"})}
                </div>
              `:a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple",checked:!0,"default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana","default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry","default-slot":"Cherry"})}
                </div>
              `,renderCss:()=>a`
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${i({name:"fruit",value:"apple",checked:!0,"default-slot":"Apple"},r)}
              ${i({name:"fruit",value:"banana","default-slot":"Banana"},r)}
              ${i({name:"fruit",value:"cherry","default-slot":"Cherry"},r)}
            </div>
          `}):l==="yg-radio"?a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <yg-radio name="fruit" value="apple" checked>Apple</yg-radio>
            <yg-radio name="fruit" value="banana">Banana</yg-radio>
            <yg-radio name="fruit" value="cherry">Cherry</yg-radio>
          </div>
        `:a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <nk-radio name="fruit" value="apple" checked>Apple</nk-radio>
            <nk-radio name="fruit" value="banana">Banana</nk-radio>
            <nk-radio name="fruit" value="cherry">Cherry</nk-radio>
          </div>
        `,parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73749")}}},C={render:(s,u)=>d?d({args:{},renderComponent:()=>l==="yg-radio"?a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple",checked:!0,disabled:!0,"default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana",disabled:!0,"default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry",disabled:!0,"default-slot":"Cherry"})}
                </div>
              `:a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple",checked:!0,disabled:!0,"default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana",disabled:!0,"default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry",disabled:!0,"default-slot":"Cherry"})}
                </div>
              `,renderCss:()=>a`
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${i({name:"fruit",value:"apple",checked:!0,disabled:!0,"default-slot":"Apple"},r)}
              ${i({name:"fruit",value:"banana",disabled:!0,"default-slot":"Banana"},r)}
              ${i({name:"fruit",value:"cherry",disabled:!0,"default-slot":"Cherry"},r)}
            </div>
          `}):l==="yg-radio"?a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <yg-radio name="fruit" value="apple" checked disabled>Apple</yg-radio>
            <yg-radio name="fruit" value="banana" disabled>Banana</yg-radio>
            <yg-radio name="fruit" value="cherry" disabled>Cherry</yg-radio>
          </div>
        `:a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <nk-radio name="fruit" value="apple" checked disabled>Apple</nk-radio>
            <nk-radio name="fruit" value="banana" disabled>Banana</nk-radio>
            <nk-radio name="fruit" value="cherry" disabled>Cherry</nk-radio>
          </div>
        `,parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73749")}}};return{default:{title:f,component:l,args:y,argTypes:{...p,required:{...p.required,table:{disable:!0}},"data-testid":{...p["data-testid"],table:{disable:!0}}},parameters:{actions:{handles:g},theme:m},decorators:[w]},Default:v,Unchecked:h,Disabled:k,Focus:b,UnlabeledRadio:x,RadioGroup:$,DisabledRadioGroup:C}}export{T as c};
