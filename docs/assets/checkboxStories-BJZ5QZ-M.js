import{x as a}from"./lit-element-C4bBeaiV.js";import{f as u}from"./fixFigmaPath-DxFz5b9E.js";import{w}from"./decorator-Dt3Huotz.js";import{g as A}from"./storybook-utils-CyXQhEhe.js";import{w as K,u as W}from"./index-fMYyyWa4.js";function l(s,d="yg"){const f=[`${d}-checkbox`].filter(Boolean).join(" ");return a`
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        class="${f}"
        ?checked="${s.checked}"
        ?disabled="${s.disabled}"
        value="${s.value||""}"
        name="${s.name||""}"

      />
      <span class="text-body-large">${s["default-slot"]||""}</span>
    </label>
  `}function H(s){const{componentName:d,title:f,componentType:X,renderWithCssAndComponent:r,prefix:t="yg",theme:m="blue"}=s,{events:h,args:b,argTypes:p,template:e}=A(d),g={render:(i,o)=>r?r({args:i,renderComponent:n=>e(n),renderCss:n=>l(n,t)}):a` ${e(i)} `,args:{"default-slot":"チェックボックス",checked:!0,disabled:!1,name:"",value:""},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73743&t=FtXeHGXeierL1oPz-1")}}},x={render:(i,o)=>{const n={"default-slot":"チェックされていない",checked:!1,disabled:!1};return r?r({args:n,renderComponent:c=>e(c),renderCss:c=>l(c,t)}):a`${e(n)}`},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73743&t=FtXeHGXeierL1oPz-1")}}},k={render:(i,o)=>{const n={"default-slot":"無効状態",checked:!0,disabled:!0};return r?r({args:n,renderComponent:c=>e(c),renderCss:c=>l(c,t)}):a`${e(n)}`},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73743&t=FtXeHGXeierL1oPz-1")}}},y={render:(i,o)=>{const n={"default-slot":"フォーカス状態",checked:!1,disabled:!1,"data-testid":t+"-checkbox"};return r?r({args:n,renderComponent:c=>e(c),renderCss:c=>l(c,t)}):a`${e(n)}`},play:async({canvasElement:i})=>{const n=K(i).getByTestId(t+"-checkbox");await W.click(n)},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73743&t=FtXeHGXeierL1oPz-1")}}},v={render:(i,o)=>r?r({args:{},renderComponent:()=>d==="yg-checkbox"?a`
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
              ${l({checked:!1},t)}
              ${l({checked:!0},t)}
              ${l({checked:!1,disabled:!0},t)}
              ${l({checked:!0,disabled:!0},t)}
            </div>
          `}):d==="yg-checkbox"?a`
          <div class="inline-flex gap-4">
            <yg-checkbox></yg-checkbox>
            <yg-checkbox checked></yg-checkbox>
            <yg-checkbox disabled></yg-checkbox>
            <yg-checkbox checked disabled></yg-checkbox>
          </div>
        `:a`
          <div class="inline-flex gap-4">
            <nk-checkbox></nk-checkbox>
            <nk-checkbox checked></nk-checkbox>
            <nk-checkbox disabled></nk-checkbox>
            <nk-checkbox checked disabled></nk-checkbox>
          </div>
        `,parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73743&t=FtXeHGXeierL1oPz-1")}}},$={render:(i,o)=>r?r({args:{},renderComponent:()=>d==="yg-checkbox"?a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple","default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana","default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry","default-slot":"Cherry"})}
                </div>
              `:a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple","default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana","default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry","default-slot":"Cherry"})}
                </div>
              `,renderCss:()=>a`
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${l({name:"fruit",value:"apple","default-slot":"Apple"},t)}
              ${l({name:"fruit",value:"banana","default-slot":"Banana"},t)}
              ${l({name:"fruit",value:"cherry","default-slot":"Cherry"},t)}
            </div>
          `}):d==="yg-checkbox"?a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <yg-checkbox name="fruit" value="apple">Apple</yg-checkbox>
            <yg-checkbox name="fruit" value="banana">Banana</yg-checkbox>
            <yg-checkbox name="fruit" value="cherry">Cherry</yg-checkbox>
          </div>
        `:a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <nk-checkbox name="fruit" value="apple">Apple</nk-checkbox>
            <nk-checkbox name="fruit" value="banana">Banana</nk-checkbox>
            <nk-checkbox name="fruit" value="cherry">Cherry</nk-checkbox>
          </div>
        `,parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73743&t=FtXeHGXeierL1oPz-1")}}},C={render:(i,o)=>r?r({args:{},renderComponent:()=>d==="yg-checkbox"?a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple",disabled:!0,"default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana",disabled:!0,"default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry",disabled:!0,"default-slot":"Cherry"})}
                </div>
              `:a`
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${e({name:"fruit",value:"apple",disabled:!0,"default-slot":"Apple"})}
                  ${e({name:"fruit",value:"banana",disabled:!0,"default-slot":"Banana"})}
                  ${e({name:"fruit",value:"cherry",disabled:!0,"default-slot":"Cherry"})}
                </div>
              `,renderCss:()=>a`
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${l({name:"fruit",value:"apple",disabled:!0,"default-slot":"Apple"},t)}
              ${l({name:"fruit",value:"banana",disabled:!0,"default-slot":"Banana"},t)}
              ${l({name:"fruit",value:"cherry",disabled:!0,"default-slot":"Cherry"},t)}
            </div>
          `}):d==="yg-checkbox"?a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <yg-checkbox name="fruit" value="apple" disabled>Apple</yg-checkbox>
            <yg-checkbox name="fruit" value="banana" disabled>Banana</yg-checkbox>
            <yg-checkbox name="fruit" value="cherry" disabled>Cherry</yg-checkbox>
          </div>
        `:a`
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <nk-checkbox name="fruit" value="apple" disabled>Apple</nk-checkbox>
            <nk-checkbox name="fruit" value="banana" disabled>Banana</nk-checkbox>
            <nk-checkbox name="fruit" value="cherry" disabled>Cherry</nk-checkbox>
          </div>
        `,parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=8606-73743&t=FtXeHGXeierL1oPz-1")}}};return{default:{title:f,component:d,args:b,argTypes:{...p,required:{...p.required,table:{disable:!0}},"data-testid":{...p["data-testid"],table:{disable:!0}}},parameters:{actions:{handles:h},theme:m},decorators:[w]},Default:g,Unchecked:x,Disabled:k,Focus:y,UnlabeledCheckbox:v,CheckboxGroup:$,DisabledCheckboxGroup:C}}export{H as c};
