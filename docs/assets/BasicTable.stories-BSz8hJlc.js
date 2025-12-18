import{i as j,x as m}from"./lit-element-C4bBeaiV.js";import{f as S}from"./fixFigmaPath-DxFz5b9E.js";import{t as H}from"./element-BmCHZ0P_.js";import{Y as T}from"./BasicTable-Ca5DUgBM.js";import{N}from"./element-BHnNw0zf.js";import{w as _}from"./decorator-Dt3Huotz.js";import{g as v}from"./storybook-utils-CyXQhEhe.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./property-BacG-Vag.js";import"./constants-rkZZCW-e.js";import"./v4-CQkTLCs1.js";import"./directive-helpers-BAuZLZmz.js";var W=Object.defineProperty,B=Object.getOwnPropertyDescriptor,C=(t,e,p,i)=>{for(var n=i>1?void 0:i?B(e,p):e,d=t.length-1,l;d>=0;d--)(l=t[d])&&(n=(i?l(e,p,n):l(n))||n);return i&&n&&W(e,p,n),n};let h=class extends N(T){static get styles(){const t=super.styles||[],e=j`
      .jexcel_content {
        /* 常にスクロールバーが表示されるのを防ぐ */
        overflow: auto;
      }
      /* ヘッダーの高さを52pxに設定 */
      .jexcel > thead > tr {
        height: 52px !important;
      }

      /* ヘッダーセルの左右ボーダーを削除、上下のみ残す + タイポグラフィ設定 + シャドウ削除 */
      .jexcel > thead > tr > td {
        border-left-width: 0px !important;
        border-right-width: 0px !important;
        font-size: 16px !important;
        font-style: normal !important;
        font-weight: 700 !important;
        box-shadow: none !important;
      }
      .jexcel > tbody > tr > td {
        padding-top: 4px !important;
        padding-bottom: 4px !important;
      }
      .jexcel > tbody > tr:hover {
        background: #fcfbfa !important;
      }
      /* テーブル全体のシャドウも削除 */
      .jexcel {
        box-shadow: none !important;
      }

      /* データセルの左右ボーダーを削除、上下のみ残す */
      .jexcel > tbody > tr > td {
        border-left-width: 0px !important;
        border-right-width: 0px !important;
        border-top-width: 1px !important;
        border-bottom-width: 1px !important;
      }

      /* ヘッダーセルの疑似要素も左右ボーダーを削除 */
      .jexcel > thead > tr > td::before {
        border-left: none !important;
        border-right: none !important;
      }
    `;return Array.isArray(t)?[...t,e]:[t,e]}};h=C([H("nk-basic-table")],h);let{events:F,args:K,argTypes:s,template:Q}=v("nk-basic-table");s.options.control="object";s={...s,waitForVisible:{name:"waitForVisible",description:"(中身の処理を削除したため非推奨) コンポーネントが画面上に描画されるまで処理を待機する非同期メソッド。これを使用しないと、適切にOptionsなどが設定できない",table:{category:"methods"}},getSpreadsheetInstance:{name:"getSpreadsheetInstance",description:"JspreadSheet固有のメソッドを呼び出すためのインスタンスを取得する非同期メソッド",table:{category:"methods"}},setFontSize:{name:"setFontSize",description:"テーブル全体のフォントサイズを設定するメソッド。引数はmediumまたはlarge",table:{category:"methods",type:{summary:"medium | large"}}}};const c=[["ヤマト太郎",28,"営業部","東京","2023-04-01"],["田中花子",32,"開発部","大阪","2022-03-15"],["佐藤次郎",45,"企画部","名古屋","2020-01-20"],["山田美咲",29,"人事部","福岡","2021-07-10"],["高橋健一",38,"営業部","札幌","2019-11-05"]],tt={title:"Components/Ninkei/BasicTable",component:"nk-basic-table",args:K,argTypes:s,parameters:{actions:{handles:F}},decorators:[_]},r={render:t=>m`
    <nk-basic-table .options=${t.options}> </nk-basic-table>
  `,args:{options:{data:c,columns:[{type:"text",title:"氏名",width:120},{type:"numeric",title:"年齢",width:80},{type:"text",title:"部署",width:120},{type:"text",title:"勤務地",width:120},{type:"text",title:"入社日",width:120}],custom:{headerHeight:48}}},parameters:{design:{type:"figma",url:S("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")},docs:{description:{story:"Ninkei版のBasicTableです。ヘッダーの高さは48px、フォントサイズ16px・ボールド、シャドウなし、セルは格子状ではなく上下のボーダーのみが表示されます。"}}}},o={render:t=>m`
    <nk-basic-table .options=${t.options}> </nk-basic-table>
  `,args:{options:{data:c,columns:[{type:"text",title:"氏名",width:120},{type:"numeric",title:"年齢",width:80},{type:"text",title:"部署",width:120},{type:"text",title:"勤務地",width:120},{type:"text",title:"入社日",width:120}],tableHeight:"300px",custom:{headerHeight:48}}},parameters:{docs:{description:{story:"テーブルの高さをカスタマイズした例です。ヘッダーの高さはNinkei標準の48pxです。"}}}},a={render:t=>m`
    <nk-basic-table .options=${t.options}> </nk-basic-table>
  `,args:{options:{data:c,columns:[{type:"text",title:"氏名",width:120,readOnly:!0},{type:"numeric",title:"年齢",width:80,readOnly:!0},{type:"text",title:"部署",width:120,readOnly:!0},{type:"text",title:"勤務地",width:120,readOnly:!0},{type:"text",title:"入社日",width:120,readOnly:!0}],editable:!1,custom:{headerHeight:48}}},parameters:{docs:{description:{story:"読み取り専用のテーブルです。編集はできません。セルのボーダーは上下のみで格子状ではありません。"}}}};var b,y,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`
    <nk-basic-table .options=\${args.options}> </nk-basic-table>
  \`,
  args: {
    options: {
      data,
      columns: [{
        type: 'text',
        title: '氏名',
        width: 120
      }, {
        type: 'numeric',
        title: '年齢',
        width: 80
      }, {
        type: 'text',
        title: '部署',
        width: 120
      }, {
        type: 'text',
        title: '勤務地',
        width: 120
      }, {
        type: 'text',
        title: '入社日',
        width: 120
      }],
      custom: {
        headerHeight: 48 // ヘッダーの高さ48px
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    },
    docs: {
      description: {
        story: 'Ninkei版のBasicTableです。ヘッダーの高さは48px、フォントサイズ16px・ボールド、シャドウなし、セルは格子状ではなく上下のボーダーのみが表示されます。'
      }
    }
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,w,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\`
    <nk-basic-table .options=\${args.options}> </nk-basic-table>
  \`,
  args: {
    options: {
      data,
      columns: [{
        type: 'text',
        title: '氏名',
        width: 120
      }, {
        type: 'numeric',
        title: '年齢',
        width: 80
      }, {
        type: 'text',
        title: '部署',
        width: 120
      }, {
        type: 'text',
        title: '勤務地',
        width: 120
      }, {
        type: 'text',
        title: '入社日',
        width: 120
      }],
      tableHeight: '300px',
      custom: {
        headerHeight: 48 // Ninkei標準の48px
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'テーブルの高さをカスタマイズした例です。ヘッダーの高さはNinkei標準の48pxです。'
      }
    }
  }
}`,...(u=(w=o.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var f,k,O;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <nk-basic-table .options=\${args.options}> </nk-basic-table>
  \`,
  args: {
    options: {
      data,
      columns: [{
        type: 'text',
        title: '氏名',
        width: 120,
        readOnly: true
      }, {
        type: 'numeric',
        title: '年齢',
        width: 80,
        readOnly: true
      }, {
        type: 'text',
        title: '部署',
        width: 120,
        readOnly: true
      }, {
        type: 'text',
        title: '勤務地',
        width: 120,
        readOnly: true
      }, {
        type: 'text',
        title: '入社日',
        width: 120,
        readOnly: true
      }],
      editable: false,
      custom: {
        headerHeight: 48 // Ninkei標準の48px
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: '読み取り専用のテーブルです。編集はできません。セルのボーダーは上下のみで格子状ではありません。'
      }
    }
  }
}`,...(O=(k=a.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const et=["Default","WithCustomHeight","ReadOnlyTable"];export{r as Default,a as ReadOnlyTable,o as WithCustomHeight,et as __namedExportsOrder,tt as default};
