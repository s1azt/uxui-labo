import{x as r}from"./lit-element-C4bBeaiV.js";import{f as s}from"./fixFigmaPath-DxFz5b9E.js";import"./BasicTable-Ca5DUgBM.js";import{w as m}from"./decorator-Dt3Huotz.js";import{g as p}from"./storybook-utils-CyXQhEhe.js";import"./_commonjsHelpers-CqkleIqs.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./constants-rkZZCW-e.js";import"./v4-CQkTLCs1.js";import"./directive-helpers-BAuZLZmz.js";let{events:d,args:c,argTypes:e,template:$}=p("yg-basic-table");e.options.control="object";e={...e,waitForVisible:{name:"waitForVisible",description:"(中身の処理を削除したため非推奨) コンポーネントが画面上に描画されるまで処理を待機する非同期メソッド。これを使用しないと、適切にOptionsなどが設定できない",table:{category:"methods"}},getSpreadsheetInstance:{name:"getSpreadsheetInstance",description:"JspreadSheet固有のメソッドを呼び出すためのインスタンスを取得する非同期メソッド",table:{category:"methods"}},setFontSize:{name:"setFontSize",description:"テーブル全体のフォントサイズを設定するメソッド。引数はmediumまたはlarge",table:{category:"methods",type:{summary:"medium | large"}}}};const j={title:"Components/Base/BasicTable",component:"yg-basic-table",args:c,argTypes:e,parameters:{actions:{handles:d}},decorators:[m]},l=[["Jazz","Honda","2019-02-12","",!0,"$ 2.000,00","#777700"],["Civic","Honda","2018-07-11","",!0,"$ 4.000,01","#007777"]],t={render:n=>r` <yg-basic-table .options=${n.options}> </yg-basic-table> `,args:{options:{data:l,columns:[{type:"text",title:"Car",width:90},{type:"dropdown",title:"Make",width:120,source:["Alfa Romeo","Audi","Bmw","Chevrolet","Chrystler"]},{type:"calendar",title:"Available",width:120},{type:"image",title:"Photo",width:120},{type:"checkbox",title:"Stock",width:80},{type:"numeric",title:"Price",mask:"$ #.##,00",width:80,decimal:","},{type:"color",width:80,render:"square"}]}},parameters:{design:{type:"figma",url:s("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return html\` <yg-basic-table .options=\${args.options}> </yg-basic-table> \`;
  },
  args: {
    options: {
      data: data,
      columns: [{
        type: 'text',
        title: 'Car',
        width: 90
      }, {
        type: 'dropdown',
        title: 'Make',
        width: 120,
        source: ['Alfa Romeo', 'Audi', 'Bmw', 'Chevrolet', 'Chrystler'
        // (...)
        ]
      }, {
        type: 'calendar',
        title: 'Available',
        width: 120
      }, {
        type: 'image',
        title: 'Photo',
        width: 120
      }, {
        type: 'checkbox',
        title: 'Stock',
        width: 80
      }, {
        type: 'numeric',
        title: 'Price',
        mask: '$ #.##,00',
        width: 80,
        decimal: ','
      }, {
        type: 'color',
        width: 80,
        render: 'square'
      }]
    } as JSpreadsheetOptions
  },
  //@storybook/addon-designs の設定
  parameters: {
    design: {
      type: 'figma',
      // デザイン参照をFigmaに設定
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,j as default};
