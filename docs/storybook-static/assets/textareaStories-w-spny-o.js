import{x as d}from"./lit-element-C4bBeaiV.js";import{f as m}from"./fixFigmaPath-DxFz5b9E.js";import{w as v}from"./decorator-Dt3Huotz.js";import{g as j}from"./storybook-utils-CyXQhEhe.js";import{w as T,u as A}from"./index-fMYyyWa4.js";function l(a,p="yg"){const w=[`${p}-textarea`,a.error?`${p}-textarea--error`:""].filter(Boolean).join(" "),g=a.width?`width: ${a.width}px;`:"width: 100%;",o=a.rows?`height: ${a.rows*38}px;`:"";return d`
    <textarea
      class="${w}"
      .value="${a.value||""}"
      placeholder="${a.placeholder||""}"
      ?readonly="${a.readonly}"
      ?disabled="${a.disabled}"
      minlength="${a.minlength}"
      maxlength="${a.maxlength}"
      rows="${a.rows||3}"
      name="${a.name}"

      style="${g} ${o}"
    ></textarea>
  `}function X(a){const{componentName:p,title:w,componentType:g,renderWithCssAndComponent:o,prefix:n="yg",theme:u="blue"}=a,{events:f,args:y,argTypes:s,template:t}=j(p),x={render:(i,c)=>o?o({args:i,renderComponent:r=>t(r),renderCss:r=>l(r,n)}):d` ${t(i)} `,args:{placeholder:"テキストを入力",readonly:!1,disabled:!1,name:"",value:"テキスト",required:!1,minlength:1,maxlength:500,rows:3,width:"290",size:15,error:!1},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},$={render:(i,c)=>{const r={error:!0,placeholder:"エラー状態",value:"エラーがあります",width:"290",rows:3};return o?o({args:r,renderComponent:e=>t(e),renderCss:e=>l(e,n)}):d`${t(r)}`},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},b={render:(i,c)=>{const r={placeholder:"フォーカス状態",width:"290",rows:3,"data-testid":n+"-textarea"};return o?o({args:r,renderComponent:e=>t(e),renderCss:e=>l(e,n)}):d`${t(r)}`},play:async({canvasElement:i})=>{const e=T(i).getByTestId(n+"-textarea").shadowRoot;if(e){const h=e.querySelector("textarea");h&&await A.click(h)}},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},C={render:(i,c)=>{const r={disabled:!0,value:"無効状態",width:"290",rows:3};return o?o({args:r,renderComponent:e=>t(e),renderCss:e=>l(e,n)}):d`${t(r)}`},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},W={render:(i,c)=>{const r={readonly:!0,value:`読み取り専用
複数行のテキスト`,width:"290",rows:3};return o?o({args:r,renderComponent:e=>t(e),renderCss:e=>l(e,n)}):d`${t(r)}`},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},K={render:(i,c)=>o?o({args:{},renderComponent:()=>d`
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${t({placeholder:"3行（小）",width:"290",rows:3})}
              ${t({placeholder:"5行（中）",width:"290",rows:5})}
              ${t({placeholder:"8行（大）",width:"290",rows:8})}
            </div>
          `,renderCss:()=>d`
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${l({placeholder:"3行（小）",width:"290",rows:3},n)}
              ${l({placeholder:"5行（中）",width:"290",rows:5},n)}
              ${l({placeholder:"8行（大）",width:"290",rows:8},n)}
            </div>
          `}):d`
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${t({placeholder:"3行（小）",width:"290",rows:3})}
          ${t({placeholder:"5行（中）",width:"290",rows:5})}
          ${t({placeholder:"8行（大）",width:"290",rows:8})}
        </div>
      `,parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};return{default:{title:w,component:p,args:y,argTypes:{...s,required:{...s.required,table:{disable:!0}},minlength:{...s.minlength,table:{disable:!0}},pattern:{...s.pattern,table:{disable:!0}},step:{...s.step,table:{disable:!0}},min:{...s.min,table:{disable:!0}},max:{...s.max,table:{disable:!0}},type:{...s.type,table:{disable:!0}},"data-testid":{...s["data-testid"],table:{disable:!0}},focus:{name:"focus",description:"フォーカスを当てるメソッド",table:{category:"methods"}}},parameters:{actions:{handles:f},theme:u},decorators:[v]},Default:x,Error:$,Focus:b,Disabled:C,Readonly:W,DifferentSizes:K}}export{X as c};
