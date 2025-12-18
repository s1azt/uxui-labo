import{i as S,x as d}from"./lit-element-C4bBeaiV.js";import{f as T}from"./fixFigmaPath-DxFz5b9E.js";import{g as W}from"./storybook-utils-CyXQhEhe.js";import{t as _}from"./element-BmCHZ0P_.js";import{Y as v}from"./BasicTable-Ca5DUgBM.js";import{N}from"./element-DjMGbAoC.js";import{w as B}from"./decorator-Dt3Huotz.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./property-BacG-Vag.js";import"./constants-rkZZCW-e.js";import"./v4-CQkTLCs1.js";var C=Object.defineProperty,F=Object.getOwnPropertyDescriptor,K=(t,e,p,r)=>{for(var n=r>1?void 0:r?F(e,p):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(n=(r?c(e,p,n):c(n))||n);return r&&n&&C(e,p,n),n};let b=class extends N(v){static get styles(){const t=super.styles||[],e=S`
      /* ヘッダーの高さを52pxに設定 */
      .jexcel > thead > tr {
        height: 52px !important;
      }

      /* ヘッダーセルの左右ボーダーを削除、上下のみ残す + タイポグラフィ設定 + シャドウ削除 */
      .jexcel > thead > tr > td {
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
        border-collapse: separate;
        border-spacing: 0;
      }

      .jexcel > thead > tr > td::before {
        border: none !important;
      }
      /* データセルの上下ボーダーを調整 */
      .jexcel > thead > tr > td {
        border-top: 1px solid #cccccc !important;
        border-bottom: none !important;
        border-right: none !important;
      }
      /* 一番右のセルだけ下ボーダーを付与 */
      .jexcel > thead > tr > td:last-child {
        border-right: 1px solid #cccccc !important;
      }

      .jexcel > tbody > tr:last-child > td:first-child {
        border-left: 1px solid #cccccc !important;
        border-bottom: 1px solid #cccccc !important;
      }
      /* データセルの上下ボーダーを調整 */
      .jexcel > tbody > tr > td {
        border-top: 1px solid #cccccc !important;
        border-bottom: none !important;
        border-right: none !important;
      }

      /* 最終行だけ下ボーダーを付与 */
      .jexcel > tbody > tr:last-child > td {
        border-bottom: 1px solid #cccccc !important;
      }

      /* 一番右のセルだけ下ボーダーを付与 */
      .jexcel > tbody > tr > td:last-child {
        border-right: 1px solid #cccccc !important;
      }
    `;return Array.isArray(t)?[...t,e]:[t,e]}};b=K([_("nl-basic-table")],b);let{events:P,args:Y,argTypes:s,template:Q}=W("nl-basic-table");s.options.control="object";s={...s,waitForVisible:{name:"waitForVisible",description:"(中身の処理を削除したため非推奨) コンポーネントが画面上に描画されるまで処理を待機する非同期メソッド。これを使用しないと、適切にOptionsなどが設定できない",table:{category:"methods"}},getSpreadsheetInstance:{name:"getSpreadsheetInstance",description:"JspreadSheet固有のメソッドを呼び出すためのインスタンスを取得する非同期メソッド",table:{category:"methods"}},setFontSize:{name:"setFontSize",description:"テーブル全体のフォントサイズを設定するメソッド。引数はmediumまたはlarge",table:{category:"methods",type:{summary:"medium | large"}}}};const m=[["ヤマト太郎",28,"営業部","東京","2023-04-01"],["田中花子",32,"開発部","大阪","2022-03-15"],["佐藤次郎",45,"企画部","名古屋","2020-01-20"],["山田美咲",29,"人事部","福岡","2021-07-10"],["高橋健一",38,"営業部","札幌","2019-11-05"]],tt={title:"Components/network-line/BasicTable",component:"nl-basic-table",args:Y,argTypes:s,parameters:{actions:{handles:P}},decorators:[B]},i={render:t=>d`
    <nl-basic-table .options=${t.options}> </nl-basic-table>
  `,args:{options:{data:m,columns:[{type:"text",title:"氏名",width:120},{type:"numeric",title:"年齢",width:80},{type:"text",title:"部署",width:120},{type:"text",title:"勤務地",width:120},{type:"text",title:"入社日",width:120}]}},parameters:{design:{type:"figma",url:T("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")},docs:{description:{story:"Ninkei版のBasicTableです。ヘッダーの高さは48px、フォントサイズ16px・ボールド、シャドウなし、セルは格子状ではなく上下のボーダーのみが表示されます。"}}}},o={render:t=>d`
    <nl-basic-table .options=${t.options}> </nl-basic-table>
  `,args:{options:{data:m,columns:[{type:"text",title:"氏名",width:120},{type:"numeric",title:"年齢",width:80},{type:"text",title:"部署",width:120},{type:"text",title:"勤務地",width:120},{type:"text",title:"入社日",width:120}],tableHeight:"300px"}},parameters:{docs:{description:{story:"テーブルの高さをカスタマイズした例です。ヘッダーの高さはNinkei標準の48pxです。"}}}},a={render:t=>d`
    <nl-basic-table .options=${t.options}> </nl-basic-table>
  `,args:{options:{data:m,columns:[{type:"text",title:"氏名",width:120,readOnly:!0},{type:"numeric",title:"年齢",width:80,readOnly:!0},{type:"text",title:"部署",width:120,readOnly:!0},{type:"text",title:"勤務地",width:120,readOnly:!0},{type:"text",title:"入社日",width:120,readOnly:!0}],editable:!1}},parameters:{docs:{description:{story:"読み取り専用のテーブルです。編集はできません。セルのボーダーは上下のみで格子状ではありません。"}}}};var h,y,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => html\`
    <nl-basic-table .options=\${args.options}> </nl-basic-table>
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
      }]
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
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,w,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\`
    <nl-basic-table .options=\${args.options}> </nl-basic-table>
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
      tableHeight: '300px'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'テーブルの高さをカスタマイズした例です。ヘッダーの高さはNinkei標準の48pxです。'
      }
    }
  }
}`,...(u=(w=o.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var f,j,O;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <nl-basic-table .options=\${args.options}> </nl-basic-table>
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
      editable: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: '読み取り専用のテーブルです。編集はできません。セルのボーダーは上下のみで格子状ではありません。'
      }
    }
  }
}`,...(O=(j=a.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const et=["Default","WithCustomHeight","ReadOnlyTable"];export{i as Default,a as ReadOnlyTable,o as WithCustomHeight,et as __namedExportsOrder,tt as default};
