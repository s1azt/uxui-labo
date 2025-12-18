import{ae as n,af as s}from"./index-CeKuR49N.js";import{u as r}from"./index-Bq67ke2T.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./index-DrFu-skq.js";function l(i){const e={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"USAGE/Component"}),`
`,n.jsx(e.h1,{id:"component",children:"Component"}),`
`,n.jsx(e.p,{children:"コンポーネントには、プロパティとイベントを指定することができます。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"プロパティ: コンポーネントの見た目や挙動を変更するための値"}),`
`,n.jsx(e.li,{children:"イベント: コンポーネントの挙動を変更するための関数"}),`
`]}),`
`,n.jsx(e.p,{children:"例えば、Buttonコンポーネントには以下のようなプロパティとイベントがあります。(一部抜粋)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["プロパティ",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"variant: ボタンの形状や色の種類を指定します"}),`
`,n.jsx(e.li,{children:"size: ボタンのサイズを指定します"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["イベント",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"onclick: ボタンがクリックされた時に呼び出される関数を指定します"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"こちらを、JSPファイルに埋め込むことで、ボタンを表示することができます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<yg-button variant="primary" size="large" onclick="alert('Hello!')"
  >Click me!</yg-button
>
`})}),`
`,n.jsx(e.p,{children:"このようなコンポーネントのプロパティ、イベントはStorybook上で確認することができます。"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/7.png",alt:""})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"/images/8.png",alt:""})}),`
`,n.jsxs(e.p,{children:["プロパティ内で、",n.jsx(e.code,{children:"children"}),"、",n.jsx(e.code,{children:"slot"}),`と表現されるものがあります。
これらは、コンポーネント内に表示される要素を指定するためのものです。`]}),`
`,n.jsxs(e.p,{children:["例えば、以下のように記述した場合は、",n.jsx(e.code,{children:"Click me!"}),"というテキストがボタン内に表示されます。これが",n.jsx(e.code,{children:"children"}),"および",n.jsx(e.code,{children:"slot"}),"です。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<yg-button variant="primary" size="large"> Click me! </yg-button>
`})})]})}function m(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{m as default};
