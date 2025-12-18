import{ae as n,af as d}from"./index-CeKuR49N.js";import{u as s}from"./index-Bq67ke2T.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./index-DrFu-skq.js";function i(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"USAGE/Style"}),`
`,n.jsx(e.h1,{id:"style",children:"Style"}),`
`,n.jsxs(e.p,{children:[`こちらのUIライブラリでは、独自にカスタマイズされたTailwindCSSを提供しています。
`,n.jsx(e.a,{href:"https://tailwindcss.com/",rel:"nofollow",children:"https://tailwindcss.com/"})]}),`
`,n.jsx(e.h2,{id:"tailwindcssとは",children:"TailwindCSSとは"}),`
`,n.jsx(e.p,{children:`TailwindCSSは、CSSフレームワークの1つで、クラス名を用いてスタイルを適用することができるフレームワークです。
例えば、以下のようにクラス名を用いてスタイルを適用することができます。`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="bg-blue-500 text-white p-4">Hello, World!</div>
`})}),`
`,n.jsx(e.p,{children:"上記の例では、背景色を青色に、文字色を白色に、paddingを4に設定しています。このように、スタイルを簡単に適用することができます。"}),`
`,n.jsx(e.h2,{id:"独自にカスタマイズされたtailwindcss",children:"独自にカスタマイズされたTailwindCSS"}),`
`,n.jsx(e.p,{children:"こちらのUIライブラリでは、TailwindCSSを独自にカスタマイズしています。以下のようなカスタマイズが行われています。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"接頭辞の追加"}),`
`,n.jsx(e.li,{children:"デザイントークンの定義"}),`
`]}),`
`,n.jsx(e.h3,{id:"接頭辞の追加",children:"接頭辞の追加"}),`
`,n.jsxs(e.p,{children:["接頭辞を追加することで、他のライブラリとの競合を避けることができます。こちらのUIライブラリでは、",n.jsx(e.code,{children:"yg-"}),"という接頭辞を追加しています。"]}),`
`,n.jsx(e.p,{children:"例えば、以下のようにクラス名を用いてスタイルを適用することができます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="yg-bg-blue-500 yg-text-white yg-p-4">Hello, World!</div>
`})}),`
`,n.jsx(e.h3,{id:"デザイントークンの定義",children:"デザイントークンの定義"}),`
`,n.jsx(e.p,{children:"デザイントークンとは、色やタイポグラフィなどのデザインに関する情報を定義したものです。デザイントークンを定義することで、スタイルの一貫性を保つことができます。"}),`
`,n.jsxs(e.p,{children:["TailwindCSSでは、こういったデザイントークンを独自に登録できます。こちらのUIライブラリで登録しているデザイントークンについては、",n.jsx(e.code,{children:"DESIGN_TOKENS"}),"を参照してください。"]}),`
`,n.jsx(e.p,{children:"例えば、テキストをPrimaryカラーに設定する場合、以下のようにクラス名を用いてスタイルを適用することができます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="yg-text-primary">Hello, World!</div>
`})}),`
`,n.jsx(e.h2,{id:"読み込み方",children:"読み込み方"}),`
`,n.jsxs(e.p,{children:["スタイルを適用するJSPファイルにて、",n.jsx(e.code,{children:"yg-tailwind.js"}),"ファイルを読み込むことで、TailwindCSSを使用することができます。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!doctype html>
<html>
  <head>
    <!--Tailwindを読み込む-->
    <script
      type="module"
      src="<%=request.getContextPath()%>/yg-artifacts/yg-tailwind.js"
    ><\/script>
  </head>
  <body>
    <div class="yg-p-10 yg-bg-neutral-screen">
      <yg-button left-icon="oi:home">Button</yg-button>
    </div>
  </body>
</html>
`})}),`
`,n.jsx(e.h2,{id:"注意点",children:"注意点"}),`
`,n.jsxs(e.p,{children:["TailwindCSSは、CSSファイル内に切り出して記述することができます。例えば、以下のように",n.jsx(e.code,{children:"@apply"}),"ディレクティブを用いてTailwindCSSを記述することができます。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* styles.css */
.container {
  @apply bg-blue-500 text-white p-4;
}
`})}),`
`,n.jsxs(e.p,{children:["ただ、こちらのUIライブラリでは、都合上",n.jsx(e.code,{children:"@apply"}),"ディレクティブを使用することはできません。そのため、対象の要素のクラス名を直接記述することでスタイルを適用するようにしてください。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="yg-bg-blue-500 yg-text-white yg-p-4">Hello, World!</div>
`})})]})}function j(l={}){const{wrapper:e}={...s(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(i,{...l})}):i(l)}export{j as default};
