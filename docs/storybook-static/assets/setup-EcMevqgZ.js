import{ae as n,af as l}from"./index-CeKuR49N.js";import{u as i}from"./index-Bq67ke2T.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./index-DrFu-skq.js";function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"USAGE/Setup"}),`
`,n.jsx(e.h1,{id:"setup",children:"Setup"}),`
`,n.jsx(e.p,{children:`こちらのUIライブラリでは、コンポーネントをWeb Componentsとして提供しています。Web Componentsとは、HTMLの標準仕様であるカスタム要素を利用して、独自のコンポーネントを作成するための仕組みです。
こちらの技術を用いて、再利用可能なコンポーネントを提供しています。
JSP環境へのセットアップ方法を説明します。`}),`
`,n.jsx(e.h2,{id:"成果物ファイルのダウンロード",children:"成果物ファイルのダウンロード"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"以下のURLからGitlabのリリースページにアクセスする。"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://gitlab.com/azuta_home/yamatoautoworks-vehicle-management/-/releases",rel:"nofollow",children:"https://gitlab.com/azuta_home/yamatoautoworks-vehicle-management/-/releases"})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:"適切なバージョンの、「Build Artifacts」をクリックし、成果物をダウンロードする"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/5.png",alt:""})}),`
`,n.jsx(e.h2,{id:"成果物の展開と設置",children:"成果物の展開と設置"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"ダウンロードしたzipファイルを展開します。"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/3.png",alt:""})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:"展開したファイルを、JSP側の任意の場所に配置します。HTMLが読み取れる場所に配置します。"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/4.png",alt:""})}),`
`,n.jsx(e.h2,{id:"jspへの適用",children:"JSPへの適用"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"JSPファイルに以下のように記述し、展開されたファイルを読み込みます。"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!doctype html>
<html>
  <head>
    <!--コンポーネントを読み込む-->
    <script
      type="module"
      src="<%=request.getContextPath()%>/yg-artifacts/yg-index.bundled.js"
    ><\/script>
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
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:"ブラウザを開き、コンポーネント・スタイルが正常に表示されることを確認します。"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/1.png",alt:""})}),`
`,n.jsx(e.h3,{id:"補足",children:"補足"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["各コンポーネントの使い方については、",n.jsx(e.code,{children:"COMPONENTS"}),"ページを参照してください。"]}),`
`,n.jsxs(e.li,{children:["スタイルについては、",n.jsx(e.code,{children:"style"}),"ページにて説明しています。"]}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{j as default};
