import{x as s}from"./lit-element-C4bBeaiV.js";import{f as c}from"./fixFigmaPath-DxFz5b9E.js";import{w as J}from"./decorator-Dt3Huotz.js";import{g as M}from"./storybook-utils-CyXQhEhe.js";import{w as U,u as X}from"./index-fMYyyWa4.js";function w(t,p,m="yg"){const g=p==="left"?"absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none":"absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none",n=document.createElement(`${m}-icon`);return n.setAttribute("class",g),n.setAttribute("icon",t),n.setAttribute("width","16"),n.setAttribute("height","16"),n}function d(t,p="yg"){const m=[`${p}-input`,t.error?`${p}-input--error`:""].filter(Boolean).join(" "),g=t["left-icon"]||t["right-icon"],n=g?"relative w-full":"",i=g?"relative inline-block":"",f=[t["left-icon"]?"!pl-8":"",t["right-icon"]?"!pr-8":""].filter(Boolean).join(" "),h=t.width?`width: ${t.width}px;`:"width: 100%;";return g?s`
      <div class="${i}">
        <input
          class="${m} ${n} ${f}"
          type="${t.type||"text"}"
          .value="${t.value||""}"
          placeholder="${t.placeholder||""}"
          ?readonly="${t.readonly}"
          ?disabled="${t.disabled}"
          minlength="${t.minlength}"
          maxlength="${t.maxlength}"
          size="${t.size}"
          name="${t.name}"
          min="${t.min||""}"
          max="${t.max||""}"

          style="${h}"
        />
        ${t["left-icon"]?w(t["left-icon"],"left",p):""}
        ${t["right-icon"]?w(t["right-icon"],"right",p):""}
      </div>
    `:s`
      <input
        class="${m}"
        type="${t.type||"text"}"
        .value="${t.value||""}"
        placeholder="${t.placeholder||""}"
        ?readonly="${t.readonly}"
        ?disabled="${t.disabled}"
        minlength="${t.minlength}"
        maxlength="${t.maxlength}"
        size="${t.size}"
        name="${t.name}"
        min="${t.min||""}"
        max="${t.max||""}"

        style="${h}"
      />
    `}function E(t){const{componentName:p,title:m,componentType:g,renderWithCssAndComponent:n,prefix:i="yg",theme:f="blue"}=t,{events:h,args:u,argTypes:y,template:o}=M(p),$={render:(a,l)=>n?n({args:a,renderComponent:r=>o(r),renderCss:r=>d(r,i)}):s` ${o(a)} `,args:{"right-icon":`${i}:close`,"left-icon":"",placeholder:"テキストを入力",readonly:!1,disabled:!1,name:"",value:"テキスト",minlength:1,maxlength:25,width:"290",size:15,error:!1},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},x={render:(a,l)=>{const r={"left-icon":`${i}:search`,placeholder:"検索",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},C={render:(a,l)=>{const r={"right-icon":`${i}:calendar`,placeholder:"日付を選択",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},W={render:(a,l)=>{const r={"left-icon":`${i}:search`,"right-icon":`${i}:close`,placeholder:"検索して×で消去",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},K={render:(a,l)=>{const r={error:!0,placeholder:"エラー状態",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},A={render:(a,l)=>{const r={readonly:!0,value:"読み取り専用",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},j={render:(a,l)=>{const r={disabled:!0,value:"無効",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},Y={render:(a,l)=>{const r={type:"password",placeholder:"パスワードを入力",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},v={render:(a,l)=>{const r={type:"number",placeholder:"数値を入力",min:"0",max:"100",width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},b={render:(a,l)=>{const r={type:"date",placeholder:"日付を選択","right-icon":`${i}:calendar`,width:"290"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},S={render:(a,l)=>{const r={placeholder:"フォーカス状態",width:"290","data-testid":i+"-input"};return n?n({args:r,renderComponent:e=>o(e),renderCss:e=>d(e,i)}):s`${o(r)}`},play:async({canvasElement:a})=>{const r=U(a).getByTestId(i+"-input");await X.click(r)},parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},T={render:(a,l)=>n?n({args:{},renderComponent:()=>s`
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${o({placeholder:"幅150px",width:"150"})}
              ${o({placeholder:"幅290px（デフォルト）",width:"290"})}
              ${o({placeholder:"幅400px",width:"400"})}
            </div>
          `,renderCss:()=>s`
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${d({placeholder:"幅150px",width:"150"},i)}
              ${d({placeholder:"幅290px（デフォルト）",width:"290"},i)}
              ${d({placeholder:"幅400px",width:"400"},i)}
            </div>
          `}):s`
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${o({placeholder:"幅150px",width:"150"})}
          ${o({placeholder:"幅290px（デフォルト）",width:"290"})}
          ${o({placeholder:"幅400px",width:"400"})}
        </div>
      `,parameters:{design:{type:"figma",url:c("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};return{default:{title:m,component:p,args:u,argTypes:y,parameters:{actions:{handles:h},theme:f},decorators:[J]},Default:$,WithLeftIcon:x,WithRightIcon:C,WithBothIcons:W,Error:K,Readonly:A,Disabled:j,Password:Y,Number:v,Date:b,Focus:S,DifferentWidths:T}}export{E as c};
