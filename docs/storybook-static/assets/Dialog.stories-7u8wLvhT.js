import{x as o}from"./lit-element-C4bBeaiV.js";import{g as P}from"./storybook-utils-CyXQhEhe.js";import"./Button-Drw3qSHJ.js";import"./Dialog-CA9i3lT0.js";import"./FormControl-2GUpcIp4.js";import"./Input-Czg9PuiZ.js";import{f as S}from"./fixFigmaPath-DxFz5b9E.js";import"./directive-helpers-BAuZLZmz.js";import"./if-defined-DhMdV329.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./state-CLgbQenF.js";import"./base-DIkkzJ-c.js";import"./query-DXShiZ7f.js";import"./redispatch-event-saXtg2yW.js";import"./validator-Z-Is_xbn.js";import"./form-associated-C1RJQ55l.js";import"./on-report-validity-Dy401omy.js";import"./text-field-validator-BUChPS26.js";import"./_commonjsHelpers-CqkleIqs.js";var c=Object.freeze,O=Object.defineProperty,q=(e,t)=>c(O(e,"raw",{value:c(e.slice())})),m;let{events:F,args:A,argTypes:p,template:i}=P("yg-dialog");p={...p,show:{name:"show",description:"ダイアログを表示するメソッド",table:{category:"methods"}},close:{name:"close",description:"ダイアログを閉じるメソッド",table:{category:"methods"}}};F.push("beforeClose");const he={title:"Components/Base/Dialog",component:"yg-dialog",args:A,argTypes:p,parameters:{actions:{handles:F}}},d={render:e=>o`
    <div style="height: 200px;">
      ${i({...e,id:"dialog"})}
      <yg-button
        @click=${()=>{document.getElementById("dialog").show()}}
      >
        開く
      </yg-button>
    </div>
  `,args:{title:"タイトル","default-slot":`<div>コンテンツ</div>
    `,"footer-slot":`
        <div
      slot="footer"
      style="display: inline-flex; 
      gap: 1.25rem; 
      justify-content: flex-end; 
      align-items: flex-start; 
      align-self: stretch; "
    >
      <yg-button
        onclick="document.getElementById('dialog').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="submit"
      >決定</yg-button>         
    </div>
    `,open:!0,width:"auto"},parameters:{design:{type:"figma",url:S("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=6210-51003")}}},a={render:e=>o`
    <div style="height: 500px;">
      ${i({...e,id:"dialog-form"})}
      <yg-button
        @click=${()=>{document.getElementById("dialog-form").show()}}
      >
        開く
      </yg-button>
    </div>
  `,args:{title:"ユーザー情報","default-slot":`
<form onsubmit="alert('submit'); return false;">
  <div
    style="display: flex; flex-direction: column; gap: 2rem;"
  >
    <div
      style="display: flex; flex-direction: column; gap: 1.25rem;"
    >
      <yg-form-control label="名前" mandatory>
      <yg-input
        placeholder="入力してください"
        required
        width="400"
      ></yg-input>
      </yg-form-control>
      <yg-form-control label="メールアドレス" mandatory>
      <yg-input
        placeholder="入力してください"
        type="email"
        required
        width="400"
        ></yg-input>
      </yg-form-control>
    </div>
    <div
      slot="footer"
      style="display: inline-flex; 
      gap: 1.25rem; 
      justify-content: flex-end; 
      align-items: flex-start; 
      align-self: stretch; "
    >
      <yg-button
        click="document.getElementById('dialog').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="submit"
      >決定</yg-button>         
    </div>
  </div>
</form>
    `,open:!0,width:"auto"},parameters:{design:{type:"figma",url:S("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=6210-51003")}}},s={render:e=>o(m||(m=q([`
    <div style="height: 500px;">
      `,`
      <yg-button
        @click=`,`
      >
        開く
      </yg-button>
      <p>このダイアログは閉じる前に確認ダイアログを表示します。</p>
      <script>
        const dialog = document.getElementById('dialog-with-before-close');
        dialog.addEventListener('before-close', (e) => {
          // 確認ダイアログを表示
          if (!confirm('本当に閉じますか？')) {
            e.preventDefault(); // キャンセルする場合はイベントをキャンセル
          }
        });
      <\/script>
    </div>
  `])),i({...e,id:"dialog-with-before-close"}),()=>{document.getElementById("dialog-with-before-close").show()}),args:{title:"before-closeイベントのデモ","default-slot":`
    <div style="padding: 1rem;">
      <p>このダイアログを閉じようとすると、確認ダイアログが表示されます。</p>
      <p>「キャンセル」を選択すると、ダイアログは閉じません。</p>
      <p>「OK」を選択すると、ダイアログが閉じます。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-with-before-close').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
    </div>
    `,open:!0,width:"500px"},parameters:{docs:{description:{story:"before-closeイベントを使用して、ダイアログが閉じる前に処理を実行する例です。このサンプルでは、ダイアログを閉じる前に確認ダイアログを表示し、ユーザーが「キャンセル」を選択した場合はダイアログを閉じないようにしています。"}}}},l={render:e=>o`
    <div style="height: 200px;">
      ${i({...e,id:"dialog-no-close"})}
      <yg-button
        @click=${()=>{document.getElementById("dialog-no-close").show()}}
      >
        開く（閉じるボタンなし）
      </yg-button>
    </div>
  `,args:{title:"閉じるボタンなしのダイアログ","default-slot":`<div style="padding: 1rem;">
      <p>このダイアログには右上の×ボタンがありません。</p>
      <p>フッターのボタンでのみ閉じることができます。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-no-close').close()"
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>        
    </div>
    `,open:!0,width:"400px","show-close-button":!1},parameters:{docs:{description:{story:'show-close-button="false"を設定することで、ヘッダーの×ボタンを非表示にできます。この場合、フッターのボタンなど他の手段でダイアログを閉じる必要があります。'}}}},n={render:e=>o`
    <div style="height: 200px;">
      ${i({...e,id:"dialog-no-header"})}
      <yg-button
        @click=${()=>{document.getElementById("dialog-no-header").show()}}
      >
        開く（ヘッダーなし）
      </yg-button>
    </div>
  `,args:{title:"","default-slot":`<div style="padding: 1rem;">
      <p>このダイアログはタイトルも閉じるボタンもないため、</p>
      <p>ヘッダー部分のDiv全体が表示されません。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-no-header').close()"
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>        
    </div>
    `,open:!0,width:"400px","show-close-button":!1},parameters:{docs:{description:{story:'titleが空でshow-close-button="false"の場合、ヘッダー部分のDiv全体が非表示になります。コンテンツがより上部に配置され、すっきりとした表示になります。'}}}},r={render:e=>o`
    <div style="height: 500px;">
      ${i({...e,id:"dialog-fullscreen"})}
      <yg-button
        @click=${()=>{document.getElementById("dialog-fullscreen").show()}}
      >
        画面いっぱい表示で開く
      </yg-button>
    </div>
  `,args:{title:"画面いっぱい表示ダイアログ","default-slot":`
    <div style="padding: 1rem;">
      <p>このダイアログは画面いっぱいに表示されます。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-fullscreen').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >保存</yg-button>
    </div>
    `,open:!0,fullscreen:!0},parameters:{docs:{description:{story:"fullscreenプロパティを使用して、ダイアログを画面いっぱいに表示する例です。footerは画面下部に固定され、コンテンツエリアはスクロール可能です。長いコンテンツでもボタンにアクセスしやすくなっています。"}}}},g={render:e=>o`
    <div style="height: 500px;">
      ${i({...e,id:"dialog-custom-padding"})}
      <yg-button
        @click=${()=>{document.getElementById("dialog-custom-padding").show()}}
      >
        開く（カスタムpadding）
      </yg-button>
    </div>
  `,args:{title:"カスタムpaddingのダイアログ",padding:32,"default-slot":`
    <div>
      <p>このダイアログはpadding="32"（32px）に設定されています。</p>
      <p>デフォルトは24pxです。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-custom-padding').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >決定</yg-button>
    </div>
    `,open:!0,width:"500px"},parameters:{docs:{description:{story:"paddingプロパティを使用して、ダイアログ全体のpaddingを調整する例です。数値でピクセル値を指定できます（例: 16, 24, 32）。デフォルト値は24pxです。"}}}};var u,y,f;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog'
  })}
      <yg-button
        @click=\${() => {
    const dialog = document.getElementById('dialog') as YgDialog;
    dialog.show();
  }}
      >
        開く
      </yg-button>
    </div>
  \`,
  args: {
    title: 'タイトル',
    'default-slot': \`<div>コンテンツ</div>
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
      <yg-button
        onclick="document.getElementById('dialog').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="submit"
      >決定</yg-button>         
    </div>
    \`,
    open: true,
    width: 'auto'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=6210-51003')
    }
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,h,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-form'
  })}
      <yg-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-form') as YgDialog;
    dialog.show();
  }}
      >
        開く
      </yg-button>
    </div>
  \`,
  args: {
    title: 'ユーザー情報',
    'default-slot': \`
<form onsubmit="alert('submit'); return false;">
  <div
    style="display: flex; flex-direction: column; gap: 2rem;"
  >
    <div
      style="display: flex; flex-direction: column; gap: 1.25rem;"
    >
      <yg-form-control label="名前" mandatory>
      <yg-input
        placeholder="入力してください"
        required
        width="400"
      ></yg-input>
      </yg-form-control>
      <yg-form-control label="メールアドレス" mandatory>
      <yg-input
        placeholder="入力してください"
        type="email"
        required
        width="400"
        ></yg-input>
      </yg-form-control>
    </div>
    <div
      slot="footer"
      style="display: inline-flex; 
      gap: 1.25rem; 
      justify-content: flex-end; 
      align-items: flex-start; 
      align-self: stretch; "
    >
      <yg-button
        click="document.getElementById('dialog').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="submit"
      >決定</yg-button>         
    </div>
  </div>
</form>
    \`,
    open: true,
    width: 'auto'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=6210-51003')
    }
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,w,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-with-before-close'
  })}
      <yg-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-with-before-close') as YgDialog;
    dialog.show();
  }}
      >
        開く
      </yg-button>
      <p>このダイアログは閉じる前に確認ダイアログを表示します。</p>
      <script>
        const dialog = document.getElementById('dialog-with-before-close');
        dialog.addEventListener('before-close', (e) => {
          // 確認ダイアログを表示
          if (!confirm('本当に閉じますか？')) {
            e.preventDefault(); // キャンセルする場合はイベントをキャンセル
          }
        });
      <\/script>
    </div>
  \`,
  args: {
    title: 'before-closeイベントのデモ',
    'default-slot': \`
    <div style="padding: 1rem;">
      <p>このダイアログを閉じようとすると、確認ダイアログが表示されます。</p>
      <p>「キャンセル」を選択すると、ダイアログは閉じません。</p>
      <p>「OK」を選択すると、ダイアログが閉じます。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-with-before-close').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
    </div>
    \`,
    open: true,
    width: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'before-closeイベントを使用して、ダイアログが閉じる前に処理を実行する例です。このサンプルでは、ダイアログを閉じる前に確認ダイアログを表示し、ユーザーが「キャンセル」を選択した場合はダイアログを閉じないようにしています。'
      }
    }
  }
}`,...(B=(w=s.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var k,E,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog-no-close'
  })}
      <yg-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-no-close') as YgDialog;
    dialog.show();
  }}
      >
        開く（閉じるボタンなし）
      </yg-button>
    </div>
  \`,
  args: {
    title: '閉じるボタンなしのダイアログ',
    'default-slot': \`<div style="padding: 1rem;">
      <p>このダイアログには右上の×ボタンがありません。</p>
      <p>フッターのボタンでのみ閉じることができます。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-no-close').close()"
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>        
    </div>
    \`,
    open: true,
    width: '400px',
    'show-close-button': false
  },
  parameters: {
    docs: {
      description: {
        story: 'show-close-button="false"を設定することで、ヘッダーの×ボタンを非表示にできます。この場合、フッターのボタンなど他の手段でダイアログを閉じる必要があります。'
      }
    }
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var $,z,j;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog-no-header'
  })}
      <yg-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-no-header') as YgDialog;
    dialog.show();
  }}
      >
        開く（ヘッダーなし）
      </yg-button>
    </div>
  \`,
  args: {
    title: '',
    // タイトルなし
    'default-slot': \`<div style="padding: 1rem;">
      <p>このダイアログはタイトルも閉じるボタンもないため、</p>
      <p>ヘッダー部分のDiv全体が表示されません。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-no-header').close()"
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>        
    </div>
    \`,
    open: true,
    width: '400px',
    'show-close-button': false // 閉じるボタンなし
  },
  parameters: {
    docs: {
      description: {
        story: 'titleが空でshow-close-button="false"の場合、ヘッダー部分のDiv全体が非表示になります。コンテンツがより上部に配置され、すっきりとした表示になります。'
      }
    }
  }
}`,...(j=(z=n.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var D,K,C;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-fullscreen'
  })}
      <yg-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-fullscreen') as YgDialog;
    dialog.show();
  }}
      >
        画面いっぱい表示で開く
      </yg-button>
    </div>
  \`,
  args: {
    title: '画面いっぱい表示ダイアログ',
    'default-slot': \`
    <div style="padding: 1rem;">
      <p>このダイアログは画面いっぱいに表示されます。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-fullscreen').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >保存</yg-button>
    </div>
    \`,
    open: true,
    fullscreen: true
  },
  parameters: {
    docs: {
      description: {
        story: 'fullscreenプロパティを使用して、ダイアログを画面いっぱいに表示する例です。footerは画面下部に固定され、コンテンツエリアはスクロール可能です。長いコンテンツでもボタンにアクセスしやすくなっています。'
      }
    }
  }
}`,...(C=(K=r.parameters)==null?void 0:K.docs)==null?void 0:C.source}}};var W,Y,_;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-custom-padding'
  })}
      <yg-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-custom-padding') as YgDialog;
    dialog.show();
  }}
      >
        開く（カスタムpadding）
      </yg-button>
    </div>
  \`,
  args: {
    title: 'カスタムpaddingのダイアログ',
    padding: 32,
    'default-slot': \`
    <div>
      <p>このダイアログはpadding="32"（32px）に設定されています。</p>
      <p>デフォルトは24pxです。</p>
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
      <yg-button
        onclick="document.getElementById('dialog-custom-padding').close()"
        variant="outlined"
        radius="base"
        size="medium"
        type="button"
      >閉じる</yg-button>
      <yg-button
        variant="contained"
        radius="base"
        size="medium"
        type="button"
      >決定</yg-button>
    </div>
    \`,
    open: true,
    width: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'paddingプロパティを使用して、ダイアログ全体のpaddingを調整する例です。数値でピクセル値を指定できます（例: 16, 24, 32）。デフォルト値は24pxです。'
      }
    }
  }
}`,...(_=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const ve=["Default","Form","WithBeforeClose","NoCloseButton","NoHeader","Fullscreen","CustomPadding"];export{g as CustomPadding,d as Default,a as Form,r as Fullscreen,l as NoCloseButton,n as NoHeader,s as WithBeforeClose,ve as __namedExportsOrder,he as default};
