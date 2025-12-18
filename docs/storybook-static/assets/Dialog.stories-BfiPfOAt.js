import{i as F,x as i}from"./lit-element-C4bBeaiV.js";import{g as Y}from"./storybook-utils-CyXQhEhe.js";import{f as P}from"./fixFigmaPath-DxFz5b9E.js";import{t as q}from"./element-BmCHZ0P_.js";import{Y as A}from"./Dialog-CA9i3lT0.js";import{N as U}from"./element-DjMGbAoC.js";import"./Button-9kO0EHpa.js";import"./FormControl-Oc9TqZBO.js";/* empty css              */import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./base-DIkkzJ-c.js";import"./index-Br9a1yed.js";import"./calculateSize-BEzCU_f7.js";import"./Button-Drw3qSHJ.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./FormControl-2GUpcIp4.js";var Z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,M=(e,t,p,n)=>{for(var o=n>1?void 0:n?H(t,p):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(o=(n?g(t,p,o):g(o))||o);return n&&o&&Z(t,p,o),o};let b=class extends U(A){static get styles(){return[super.styles,F`
        /* 親のShadow DOM内の#content要素のスタイルを上書き */
        #content {
          border-radius: 16px; /* ★角の丸みを16pxに設定 */
        }
      `]}};b=M([q("nl-dialog")],b);var y=Object.freeze,T=Object.defineProperty,G=(e,t)=>y(T(e,"raw",{value:y(e.slice())})),h;let{events:S,args:J,argTypes:f,template:l}=Y("nl-dialog");f={...f,show:{name:"show",description:"ダイアログを表示するメソッド",table:{category:"methods"}},close:{name:"close",description:"ダイアログを閉じるメソッド",table:{category:"methods"}}};S.push("beforeClose");const Be={title:"Components/network-line/Dialog",component:"nl-dialog",args:J,argTypes:f,parameters:{actions:{handles:S}}},s={render:e=>i`
    <div style="height: 200px;">
      ${l({...e,id:"dialog"})}
      <nl-button
        @click=${()=>{document.getElementById("dialog").show()}}
      >
        開く
      </nl-button>
    </div>
  `,args:{title:"タイトル","default-slot":"<div>コンテンツ</div>","footer-slot":`
      <div
        slot="footer"
        style="display: inline-flex; 
        gap: 1.25rem; 
        justify-content: flex-end; 
        align-items: flex-start; 
        align-self: stretch; "
      >
        <nl-button
          onclick="document.getElementById('dialog').close()"
          variant="outlined"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
        <nl-button
          variant="contained"
          radius="base"
          size="medium"
          type="submit"
        >決定</nl-button>
      </div>
    `,open:!0,width:"auto"},parameters:{design:{type:"figma",url:P("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=6210-51003")}}},r={render:e=>i`
    <div style="height: 500px;">
      ${l({...e,id:"dialog-form"})}
      <nl-button
        @click=${()=>{document.getElementById("dialog-form").show()}}
      >
        開く
      </nl-button>
    </div>
  `,args:{title:"ユーザー情報","default-slot":`
      <form onsubmit="alert('submit'); return false;">
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <nl-form-control label="名前" mandatory>
              <input class="nl-input" placeholder="入力してください" required style="width: 400px;" />
            </nl-form-control>
            <nl-form-control label="メールアドレス" mandatory>
              <input class="nl-input" placeholder="入力してください" type="email" required style="width: 400px;" />
            </nl-form-control>
          </div>
          <div
            slot="footer"
            style="display: inline-flex; 
            gap: 1.25rem; 
            justify-content: flex-end; 
            align-items: flex-start; 
            align-self: stretch; "
          >
            <nl-button
              onclick="document.getElementById('dialog-form').close()"
              variant="outlined"
              radius="base"
              size="medium"
              type="button"
            >閉じる</nl-button>
            <nl-button
              variant="contained"
              radius="base"
              size="medium"
              type="submit"
            >決定</nl-button>
          </div>
        </div>
      </form>
    `,open:!0,width:"auto"},parameters:{design:{type:"figma",url:P("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=6210-51003")}}},a={render:e=>i(h||(h=G([`
    <div style="height: 500px;">
      `,`
      <nl-button
        @click=`,`
      >
        開く
      </nl-button>
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
  `])),l({...e,id:"dialog-with-before-close"}),()=>{document.getElementById("dialog-with-before-close").show()}),args:{title:"before-closeイベントのデモ","default-slot":`
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
        <nl-button
          onclick="document.getElementById('dialog-with-before-close').close()"
          variant="outlined"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
      </div>
    `,open:!0,width:"500px"},parameters:{docs:{description:{story:"before-closeイベントを使用して、ダイアログが閉じる前に処理を実行する例です。このサンプルでは、ダイアログを閉じる前に確認ダイアログを表示し、ユーザーが「キャンセル」を選択した場合はダイアログを閉じないようにしています。"}}}},d={render:e=>i`
    <div style="height: 200px;">
      ${l({...e,id:"dialog-no-close"})}
      <nl-button
        @click=${()=>{document.getElementById("dialog-no-close").show()}}
      >
        開く（閉じるボタンなし）
      </nl-button>
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
        <nl-button
          onclick="document.getElementById('dialog-no-close').close()"
          variant="contained"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
      </div>
    `,open:!0,width:"400px","show-close-button":!1},parameters:{docs:{description:{story:'show-close-button="false"を設定することで、ヘッダーの×ボタンを非表示にできます。この場合、フッターのボタンなど他の手段でダイアログを閉じる必要があります。'}}}},c={render:e=>i`
    <div style="height: 200px;">
      ${l({...e,id:"dialog-no-header"})}
      <nl-button
        @click=${()=>{document.getElementById("dialog-no-header").show()}}
      >
        開く（ヘッダーなし）
      </nl-button>
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
        <nl-button
          onclick="document.getElementById('dialog-no-header').close()"
          variant="contained"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
      </div>
    `,open:!0,width:"400px","show-close-button":!1},parameters:{docs:{description:{story:'titleが空でshow-close-button="false"の場合、ヘッダー部分のDiv全体が非表示になります。コンテンツがより上部に配置され、すっきりとした表示になります。'}}}},m={render:e=>i`
    <div style="height: 500px;">
      ${l({...e,id:"dialog-fullscreen"})}
      <nl-button
        @click=${()=>{document.getElementById("dialog-fullscreen").show()}}
      >
        画面いっぱい表示で開く
      </nl-button>
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
        <nl-button
          onclick="document.getElementById('dialog-fullscreen').close()"
          variant="outlined"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
        <nl-button
          variant="contained"
          radius="base"
          size="medium"
          type="button"
        >保存</nl-button>
      </div>
    `,open:!0,fullscreen:!0},parameters:{docs:{description:{story:"fullscreenプロパティを使用して、ダイアログを画面いっぱいに表示する例です。footerは画面下部に固定され、コンテンツエリアはスクロール可能です。長いコンテンツでもボタンにアクセスしやすくなっています。"}}}};var v,x,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog'
  })}
      <nl-button
        @click=\${() => {
    const dialog = document.getElementById('dialog') as NetworkLineDialog;
    dialog.show();
  }}
      >
        開く
      </nl-button>
    </div>
  \`,
  args: {
    title: 'タイトル',
    'default-slot': \`<div>コンテンツ</div>\`,
    'footer-slot': \`
      <div
        slot="footer"
        style="display: inline-flex; 
        gap: 1.25rem; 
        justify-content: flex-end; 
        align-items: flex-start; 
        align-self: stretch; "
      >
        <nl-button
          onclick="document.getElementById('dialog').close()"
          variant="outlined"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
        <nl-button
          variant="contained"
          radius="base"
          size="medium"
          type="submit"
        >決定</nl-button>
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
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var k,B,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-form'
  })}
      <nl-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-form') as NetworkLineDialog;
    dialog.show();
  }}
      >
        開く
      </nl-button>
    </div>
  \`,
  args: {
    title: 'ユーザー情報',
    'default-slot': \`
      <form onsubmit="alert('submit'); return false;">
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <nl-form-control label="名前" mandatory>
              <input class="nl-input" placeholder="入力してください" required style="width: 400px;" />
            </nl-form-control>
            <nl-form-control label="メールアドレス" mandatory>
              <input class="nl-input" placeholder="入力してください" type="email" required style="width: 400px;" />
            </nl-form-control>
          </div>
          <div
            slot="footer"
            style="display: inline-flex; 
            gap: 1.25rem; 
            justify-content: flex-end; 
            align-items: flex-start; 
            align-self: stretch; "
          >
            <nl-button
              onclick="document.getElementById('dialog-form').close()"
              variant="outlined"
              radius="base"
              size="medium"
              type="button"
            >閉じる</nl-button>
            <nl-button
              variant="contained"
              radius="base"
              size="medium"
              type="submit"
            >決定</nl-button>
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
}`,...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,$,D;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-with-before-close'
  })}
      <nl-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-with-before-close') as NetworkLineDialog;
    dialog.show();
  }}
      >
        開く
      </nl-button>
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
        <nl-button
          onclick="document.getElementById('dialog-with-before-close').close()"
          variant="outlined"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
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
}`,...(D=($=a.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var j,z,_;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog-no-close'
  })}
      <nl-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-no-close') as NetworkLineDialog;
    dialog.show();
  }}
      >
        開く（閉じるボタンなし）
      </nl-button>
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
        <nl-button
          onclick="document.getElementById('dialog-no-close').close()"
          variant="contained"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
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
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var K,N,C;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 200px;">
      \${template({
    ...args,
    id: 'dialog-no-header'
  })}
      <nl-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-no-header') as NetworkLineDialog;
    dialog.show();
  }}
      >
        開く（ヘッダーなし）
      </nl-button>
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
        <nl-button
          onclick="document.getElementById('dialog-no-header').close()"
          variant="contained"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
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
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var W,L,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 500px;">
      \${template({
    ...args,
    id: 'dialog-fullscreen'
  })}
      <nl-button
        @click=\${() => {
    const dialog = document.getElementById('dialog-fullscreen') as NetworkLineDialog;
    dialog.show();
  }}
      >
        画面いっぱい表示で開く
      </nl-button>
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
        <nl-button
          onclick="document.getElementById('dialog-fullscreen').close()"
          variant="outlined"
          radius="base"
          size="medium"
          type="button"
        >閉じる</nl-button>
        <nl-button
          variant="contained"
          radius="base"
          size="medium"
          type="button"
        >保存</nl-button>
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
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const Ee=["Default","Form","WithBeforeClose","NoCloseButton","NoHeader","Fullscreen"];export{s as Default,r as Form,m as Fullscreen,d as NoCloseButton,c as NoHeader,a as WithBeforeClose,Ee as __namedExportsOrder,Be as default};
