import{x as n}from"./lit-element-C4bBeaiV.js";import{g as F}from"./storybook-utils-CyXQhEhe.js";import{t as Y}from"./element-BmCHZ0P_.js";import{Y as L}from"./Dialog-CA9i3lT0.js";import{N as H}from"./element-BHnNw0zf.js";import"./Button-BLyu90HC.js";import"./FormControl-BGoCopNs.js";import"./Input-CE835Vkk.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./base-DIkkzJ-c.js";import"./index-Br9a1yed.js";import"./calculateSize-BEzCU_f7.js";import"./Button-Drw3qSHJ.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./FormControl-2GUpcIp4.js";import"./Input-Czg9PuiZ.js";import"./query-DXShiZ7f.js";import"./redispatch-event-saXtg2yW.js";import"./validator-Z-Is_xbn.js";import"./form-associated-C1RJQ55l.js";import"./on-report-validity-Dy401omy.js";import"./text-field-validator-BUChPS26.js";import"./_commonjsHelpers-CqkleIqs.js";var M=Object.defineProperty,T=Object.getOwnPropertyDescriptor,A=(t,e,m,l)=>{for(var i=l>1?void 0:l?T(e,m):e,c=t.length-1,g;c>=0;c--)(g=t[c])&&(i=(l?g(e,m,i):g(i))||i);return l&&i&&M(e,m,i),i};let k=class extends H(L){constructor(){super(...arguments),this.showCloseButton=!1,this.padding=20,this.closeOnOutsideClick=!0}};k=A([Y("nk-dialog")],k);var b=Object.freeze,G=Object.defineProperty,J=(t,e)=>b(G(t,"raw",{value:b(t.slice())})),y;const{events:q,args:K,argTypes:f,template:o}=F("nk-dialog");f.show={name:"show",description:"ダイアログを表示するメソッド",table:{category:"methods"}};f.close={name:"close",description:"ダイアログを閉じるメソッド",table:{category:"methods"}};q.push("beforeClose");const De={title:"Components/Ninkei/Dialog",component:"nk-dialog",args:K,argTypes:f,parameters:{actions:{handles:q}}},r={render:t=>n`
    <div style="height: 200px;">
      ${o({...t,id:"dialog-ninkei"})}
      <nk-button @click=${()=>{var e;return(e=document.getElementById("dialog-ninkei"))==null?void 0:e.show()}}>
        開く
      </nk-button>
    </div>
  `,args:{title:"タイトル","default-slot":"<div>コンテンツ</div>","footer-slot":`
      <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
        <nk-button onclick="document.getElementById('dialog-ninkei').close()" variant="outlined" radius="base" size="medium" type="button">
          閉じる
        </nk-button>
        <nk-button variant="contained" radius="base" size="medium" type="submit">
          決定
        </nk-button>
      </div>
    `,open:!0}},s={render:t=>n`
    <div style="height: 500px;">
      ${o({...t,id:"dialog-ninkei-form"})}
      <nk-button @click=${()=>{var e;return(e=document.getElementById("dialog-ninkei-form"))==null?void 0:e.show()}}>
        開く
      </nk-button>
    </div>
  `,args:{title:"ユーザー情報","default-slot":`
      <form onsubmit="alert('submit'); return false;">
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <nk-form-control label="名前" mandatory>
              <nk-input placeholder="入力してください" required width="400"></nk-input>
            </nk-form-control>
            <nk-form-control label="メールアドレス" mandatory>
              <nk-input placeholder="入力してください" type="email" required width="400"></nk-input>
            </nk-form-control>
          </div>
          <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
            <nk-button onclick="document.getElementById('dialog-ninkei-form').close()" variant="outlined" radius="base" size="medium" type="button">
              閉じる
            </nk-button>
            <nk-button variant="contained" radius="base" size="medium" type="submit">
              決定
            </nk-button>
          </div>
        </div>
      </form>
    `,open:!0}},d={render:t=>n(y||(y=J([`
    <div style="height: 500px;">
      `,`
      <nk-button @click=`,`>
        開く
      </nk-button>
      <p>このダイアログは閉じる前に確認ダイアログを表示します。</p>
      <script>
        const dialog = document.getElementById('dialog-ninkei-before-close');
        dialog.addEventListener('before-close', (e) => {
          if (!confirm('本当に閉じますか？')) {
            e.preventDefault();
          }
        });
      <\/script>
    </div>
  `])),o({...t,id:"dialog-ninkei-before-close"}),()=>{var e;return(e=document.getElementById("dialog-ninkei-before-close"))==null?void 0:e.show()}),args:{title:"before-closeイベントのデモ","default-slot":'<div style="padding: 1rem;"><p>このダイアログを閉じようとすると、確認ダイアログが表示されます。</p></div>',"footer-slot":`
      <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
        <nk-button onclick="document.getElementById('dialog-ninkei-before-close').close()" variant="outlined" radius="base" size="medium" type="button">
          閉じる
        </nk-button>
      </div>
    `,open:!0}},a={render:t=>n`
    <div style="height: 200px;">
      ${o({...t,id:"dialog-ninkei-with-close"})}
      <nk-button @click=${()=>{var e;return(e=document.getElementById("dialog-ninkei-with-close"))==null?void 0:e.show()}}>
        開く（閉じるボタンあり）
      </nk-button>
    </div>
  `,args:{title:"閉じるボタンありのダイアログ","default-slot":`<div style="padding: 1rem;">
      <p>nk-dialogは初期値で閉じるボタンが非表示ですが、</p>
      <p>show-close-button="true"を設定することで表示できます。</p>
    </div>`,"footer-slot":`
      <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
        <nk-button onclick="document.getElementById('dialog-ninkei-with-close').close()" variant="outlined" radius="base" size="medium" type="button">
          閉じる
        </nk-button>
      </div>
    `,open:!0,"show-close-button":!0},parameters:{docs:{description:{story:'nk-dialogでは初期値で閉じるボタンが非表示になっています。show-close-button="true"を明示的に設定することで、ヘッダーの×ボタンを表示できます。'}}}},u={render:t=>n`
    <div style="height: 500px;">
      ${o({...t,id:"dialog-ninkei-fullscreen"})}
      <nk-button @click=${()=>{var e;return(e=document.getElementById("dialog-ninkei-fullscreen"))==null?void 0:e.show()}}>
        画面いっぱい表示で開く
      </nk-button>
    </div>
  `,args:{title:"ninkei 画面いっぱい表示ダイアログ","default-slot":`
    <div style="padding: 1rem;">
      <p>このダイアログは画面いっぱいに表示されます。</p>
      <p>ninkei派生では、モバイル対応も有効になっています。</p>
      <p>footerは画面下部に固定され、コンテンツエリアはスクロール可能です。</p>
      <div style="height: 200vh; background: linear-gradient(to bottom, #f0f0f0, #e0e0e0); padding: 2rem;">
        <h3>長いコンテンツの例</h3>
        <p>このエリアはスクロールできます。</p>
        <p>footerは常に画面下部に固定されています。</p>
        <p>コンテンツが長い場合でも、ボタンにアクセスしやすくなっています。</p>
        <div style="height: 100vh; background: #d0d0d0; margin: 1rem 0; padding: 1rem;">
          <p>さらに長いコンテンツ...</p>
        </div>
        <div style="height: 100vh; background: #c0c0c0; margin: 1rem 0; padding: 1rem;">
          <p>最後のコンテンツ...</p>
        </div>
      </div>
    </div>
    `,"footer-slot":`
    <div
      slot="footer"
      style="display: inline-flex; 
      gap: 1.25rem; 
      justify-content: flex-end; 
      align-items: flex-start; 
      align-self: stretch; "
    >
      <nk-button
        onclick="document.getElementById('dialog-ninkei-fullscreen').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</nk-button>
      <nk-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >保存</nk-button>
    </div>
    `,open:!0,fullscreen:!0},parameters:{docs:{description:{story:"ninkei派生のDialogでfullscreenプロパティを使用して、画面いっぱいに表示する例です。ninkei派生ではモバイル対応も有効になっているため、モバイルでもフルスクリーン表示されます。footerは画面下部に固定され、コンテンツエリアはスクロール可能です。"}}}},p={render:t=>n`
    <div style="height: 500px;">
      ${o({...t,id:"dialog-ninkei-custom-padding"})}
      <nk-button @click=${()=>{var e;return(e=document.getElementById("dialog-ninkei-custom-padding"))==null?void 0:e.show()}}>
        開く（カスタムpadding）
      </nk-button>
    </div>
  `,args:{title:"カスタムpaddingのダイアログ",padding:32,"default-slot":`
    <div>
      <p>このダイアログはpadding="32"（32px）に設定されています。</p>
      <p>デフォルトは20pxです。</p>
      <p>数値でピクセル値を指定できます（例: 16, 24, 32）。</p>
    </div>
    `,"footer-slot":`
    <div
      slot="footer"
      style="display: inline-flex; 
      gap: 1.25rem; 
      justify-content: flex-end; 
      align-items: flex-start; 
      align-self: stretch; "
    >
      <nk-button
        onclick="document.getElementById('dialog-ninkei-custom-padding').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</nk-button>
      <nk-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >決定</nk-button>
    </div>
    `,open:!0,width:"500px"},parameters:{docs:{description:{story:"paddingプロパティを使用して、ダイアログ全体のpaddingを調整する例です。数値でピクセル値を指定できます（例: 16, 24, 32）。デフォルト値は24pxです。NinkeiDialogはYgDialogを継承しているため、同じpaddingプロパティが利用できます。"}}}};var v,h,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog-ninkei'
  })}
      <nk-button @click=\${() => (document.getElementById('dialog-ninkei') as NinkeiDialog)?.show()}>
        開く
      </nk-button>
    </div>
  \`,
  args: {
    title: 'タイトル',
    'default-slot': \`<div>コンテンツ</div>\`,
    'footer-slot': \`
      <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
        <nk-button onclick="document.getElementById('dialog-ninkei').close()" variant="outlined" radius="base" size="medium" type="button">
          閉じる
        </nk-button>
        <nk-button variant="contained" radius="base" size="medium" type="submit">
          決定
        </nk-button>
      </div>
    \`,
    open: true
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,B,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-ninkei-form'
  })}
      <nk-button @click=\${() => (document.getElementById('dialog-ninkei-form') as NinkeiDialog)?.show()}>
        開く
      </nk-button>
    </div>
  \`,
  args: {
    title: 'ユーザー情報',
    'default-slot': \`
      <form onsubmit="alert('submit'); return false;">
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <nk-form-control label="名前" mandatory>
              <nk-input placeholder="入力してください" required width="400"></nk-input>
            </nk-form-control>
            <nk-form-control label="メールアドレス" mandatory>
              <nk-input placeholder="入力してください" type="email" required width="400"></nk-input>
            </nk-form-control>
          </div>
          <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
            <nk-button onclick="document.getElementById('dialog-ninkei-form').close()" variant="outlined" radius="base" size="medium" type="button">
              閉じる
            </nk-button>
            <nk-button variant="contained" radius="base" size="medium" type="submit">
              決定
            </nk-button>
          </div>
        </div>
      </form>
    \`,
    open: true
  }
}`,...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,$,z;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-ninkei-before-close'
  })}
      <nk-button @click=\${() => (document.getElementById('dialog-ninkei-before-close') as NinkeiDialog)?.show()}>
        開く
      </nk-button>
      <p>このダイアログは閉じる前に確認ダイアログを表示します。</p>
      <script>
        const dialog = document.getElementById('dialog-ninkei-before-close');
        dialog.addEventListener('before-close', (e) => {
          if (!confirm('本当に閉じますか？')) {
            e.preventDefault();
          }
        });
      <\/script>
    </div>
  \`,
  args: {
    title: 'before-closeイベントのデモ',
    'default-slot': \`<div style="padding: 1rem;"><p>このダイアログを閉じようとすると、確認ダイアログが表示されます。</p></div>\`,
    'footer-slot': \`
      <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
        <nk-button onclick="document.getElementById('dialog-ninkei-before-close').close()" variant="outlined" radius="base" size="medium" type="button">
          閉じる
        </nk-button>
      </div>
    \`,
    open: true
  }
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var D,j,_;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog-ninkei-with-close'
  })}
      <nk-button @click=\${() => (document.getElementById('dialog-ninkei-with-close') as NinkeiDialog)?.show()}>
        開く（閉じるボタンあり）
      </nk-button>
    </div>
  \`,
  args: {
    title: '閉じるボタンありのダイアログ',
    'default-slot': \`<div style="padding: 1rem;">
      <p>nk-dialogは初期値で閉じるボタンが非表示ですが、</p>
      <p>show-close-button="true"を設定することで表示できます。</p>
    </div>\`,
    'footer-slot': \`
      <div slot="footer" style="display: inline-flex; gap: 1.25rem; justify-content: flex-end; align-items: flex-start; align-self: stretch;">
        <nk-button onclick="document.getElementById('dialog-ninkei-with-close').close()" variant="outlined" radius="base" size="medium" type="button">
          閉じる
        </nk-button>
      </div>
    \`,
    open: true,
    'show-close-button': true
  },
  parameters: {
    docs: {
      description: {
        story: 'nk-dialogでは初期値で閉じるボタンが非表示になっています。show-close-button="true"を明示的に設定することで、ヘッダーの×ボタンを表示できます。'
      }
    }
  }
}`,...(_=(j=a.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var N,C,O;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-ninkei-fullscreen'
  })}
      <nk-button @click=\${() => (document.getElementById('dialog-ninkei-fullscreen') as NinkeiDialog)?.show()}>
        画面いっぱい表示で開く
      </nk-button>
    </div>
  \`,
  args: {
    title: 'ninkei 画面いっぱい表示ダイアログ',
    'default-slot': \`
    <div style="padding: 1rem;">
      <p>このダイアログは画面いっぱいに表示されます。</p>
      <p>ninkei派生では、モバイル対応も有効になっています。</p>
      <p>footerは画面下部に固定され、コンテンツエリアはスクロール可能です。</p>
      <div style="height: 200vh; background: linear-gradient(to bottom, #f0f0f0, #e0e0e0); padding: 2rem;">
        <h3>長いコンテンツの例</h3>
        <p>このエリアはスクロールできます。</p>
        <p>footerは常に画面下部に固定されています。</p>
        <p>コンテンツが長い場合でも、ボタンにアクセスしやすくなっています。</p>
        <div style="height: 100vh; background: #d0d0d0; margin: 1rem 0; padding: 1rem;">
          <p>さらに長いコンテンツ...</p>
        </div>
        <div style="height: 100vh; background: #c0c0c0; margin: 1rem 0; padding: 1rem;">
          <p>最後のコンテンツ...</p>
        </div>
      </div>
    </div>
    \`,
    'footer-slot': \`
    <div
      slot="footer"
      style="display: inline-flex; 
      gap: 1.25rem; 
      justify-content: flex-end; 
      align-items: flex-start; 
      align-self: stretch; "
    >
      <nk-button
        onclick="document.getElementById('dialog-ninkei-fullscreen').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</nk-button>
      <nk-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >保存</nk-button>
    </div>
    \`,
    open: true,
    fullscreen: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ninkei派生のDialogでfullscreenプロパティを使用して、画面いっぱいに表示する例です。ninkei派生ではモバイル対応も有効になっているため、モバイルでもフルスクリーン表示されます。footerは画面下部に固定され、コンテンツエリアはスクロール可能です。'
      }
    }
  }
}`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var P,S,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-ninkei-custom-padding'
  })}
      <nk-button @click=\${() => (document.getElementById('dialog-ninkei-custom-padding') as NinkeiDialog)?.show()}>
        開く（カスタムpadding）
      </nk-button>
    </div>
  \`,
  args: {
    title: 'カスタムpaddingのダイアログ',
    padding: 32,
    'default-slot': \`
    <div>
      <p>このダイアログはpadding="32"（32px）に設定されています。</p>
      <p>デフォルトは20pxです。</p>
      <p>数値でピクセル値を指定できます（例: 16, 24, 32）。</p>
    </div>
    \`,
    'footer-slot': \`
    <div
      slot="footer"
      style="display: inline-flex; 
      gap: 1.25rem; 
      justify-content: flex-end; 
      align-items: flex-start; 
      align-self: stretch; "
    >
      <nk-button
        onclick="document.getElementById('dialog-ninkei-custom-padding').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</nk-button>
      <nk-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >決定</nk-button>
    </div>
    \`,
    open: true,
    width: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'paddingプロパティを使用して、ダイアログ全体のpaddingを調整する例です。数値でピクセル値を指定できます（例: 16, 24, 32）。デフォルト値は24pxです。NinkeiDialogはYgDialogを継承しているため、同じpaddingプロパティが利用できます。'
      }
    }
  }
}`,...(W=(S=p.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const je=["Default","Form","WithBeforeClose","WithCloseButton","Fullscreen","CustomPadding"];export{p as CustomPadding,r as Default,s as Form,u as Fullscreen,d as WithBeforeClose,a as WithCloseButton,je as __namedExportsOrder,De as default};
