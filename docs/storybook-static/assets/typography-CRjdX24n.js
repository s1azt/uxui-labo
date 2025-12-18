import{ae as n,af as l}from"./index-CeKuR49N.js";import{u as r}from"./index-Bq67ke2T.js";import{c as a}from"./theme-blue-DE0pcxX7.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./index-DrFu-skq.js";const x="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function i(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",td:"td",th:"th",tr:"tr",...r(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(l,{title:"DESIGN_TOKENS/Typography"}),`
`,`
`,n.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,n.jsx(t.h2,{id:"base",children:"Base"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Font:"})," Noto Sans JP"]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{scope:"col",children:"Name"}),n.jsx("th",{scope:"col",children:"Example"})]})}),n.jsx("tbody",{children:Object.entries(a).map(([o,s])=>{const c=s[0],h=s[1].lineHeight,d=s[1].letterSpacing,p=s[1].fontWeight;return n.jsxs(t.tr,{children:[n.jsx(t.th,{scope:"row",children:o}),n.jsx(t.td,{children:n.jsx(t.span,{style:{fontSize:`${c}px`,lineHeight:`${h}`,letterSpacing:`${d}`,fontWeight:`${p}`},children:x})})]})})})]}),`
`,n.jsx(t.h2,{id:"ninkei",children:"Ninkei"}),`
`,n.jsx(t.p,{children:"TODO"}),`
`,n.jsx(t.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(t.p,{children:"Tailwindの構文に則ってフォントサイズを指定してください。例えば、フォントサイズを指定する場合は以下のように指定します。"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<span class="yg-text-body-medium"> フォントサイズがs1になります </span>
`})})]})}function b(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as SampleText,b as default};
