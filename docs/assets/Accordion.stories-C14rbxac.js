import{x as i}from"./lit-element-C4bBeaiV.js";import{f as o}from"./fixFigmaPath-DxFz5b9E.js";import"./AccordionItem-tnJ2xEa8.js";import"./Icon-CzSa45Vk.js";import"./Divider-Dlsl_grt.js";import"./Input-Czg9PuiZ.js";import"./FormControl-2GUpcIp4.js";import{g as b}from"./storybook-utils-CyXQhEhe.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./accordion-item-mixin-3QUFrK7n.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./state-CLgbQenF.js";import"./element-internals-CBp_Vcyn.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./Button-Drw3qSHJ.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./redispatch-event-saXtg2yW.js";import"./validator-Z-Is_xbn.js";import"./form-associated-C1RJQ55l.js";import"./on-report-validity-Dy401omy.js";import"./text-field-validator-BUChPS26.js";import"./_commonjsHelpers-CqkleIqs.js";import"./directive-helpers-BAuZLZmz.js";const{events:C,args:j,argTypes:A,template:U}=b("yg-accordion"),ai={title:"Components/Base/Accordion",component:"yg-accordion",args:j,argTypes:A,parameters:{actions:{handles:C}}},e={render:t=>i`
      ${U(t,i`
          <yg-accordion-item>
            <div slot="title">タイトル1</div>
            <div slot="content">
              <p>コンテンツ1</p>
            </div>
          </yg-accordion-item>
          <yg-accordion-item>
            <div slot="title">タイトル2</div>
            <div slot="content">
              <p>コンテンツ2</p>
            </div>
          </yg-accordion-item>
          <yg-accordion-item>
            <div slot="title">タイトル3</div>
            <div slot="content">
              <p>コンテンツ3</p>
            </div>
          </yg-accordion-item>
        `)}
    `,args:{multiple:!1},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev")}}},r={render:t=>i`
      <yg-accordion multiple>
        <yg-accordion-item>
          <div slot="title">複数開くことができます 1</div>
          <div slot="content">
            <p>
              このアコーディオンは複数のアイテムを同時に開くことができます。
            </p>
          </div>
        </yg-accordion-item>
        <yg-accordion-item>
          <div slot="title">複数開くことができます 2</div>
          <div slot="content">
            <p>他のアイテムを開いても、このアイテムは閉じません。</p>
          </div>
        </yg-accordion-item>
        <yg-accordion-item>
          <div slot="title">複数開くことができます 3</div>
          <div slot="content">
            <p>すべてのアイテムを同時に開くことができます。</p>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    `,parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev")}}},n={render:t=>i`
      <yg-accordion>
        <yg-accordion-item>
          <div slot="title">個人情報</div>
          <div slot="content">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <yg-form-control label="氏名">
                <yg-input placeholder="氏名を入力"></yg-input>
              </yg-form-control>
              <yg-form-control label="メールアドレス">
                <yg-input
                  placeholder="メールアドレスを入力"
                  type="email"
                ></yg-input>
              </yg-form-control>
              <yg-form-control label="電話番号">
                <yg-input placeholder="電話番号を入力" type="tel"></yg-input>
              </yg-form-control>
            </div>
          </div>
        </yg-accordion-item>
        <yg-accordion-item>
          <div slot="title">住所情報</div>
          <div slot="content">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <yg-form-control label="郵便番号">
                <yg-input placeholder="郵便番号を入力"></yg-input>
              </yg-form-control>
              <yg-form-control label="住所">
                <yg-input placeholder="住所を入力"></yg-input>
              </yg-form-control>
            </div>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    `,parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev")}}},d={render:t=>i`
      <yg-accordion>
        <yg-accordion-item>
          <div slot="title">ネストされたコンテンツ</div>
          <div slot="content">
            <p>メインコンテンツ</p>
            <div style="margin-top: 16px;">
              <yg-accordion>
                <yg-accordion-item>
                  <div slot="title">サブアコーディオン 1</div>
                  <div slot="content">
                    <p>サブコンテンツ 1</p>
                  </div>
                </yg-accordion-item>
                <yg-accordion-item>
                  <div slot="title">サブアコーディオン 2</div>
                  <div slot="content">
                    <p>サブコンテンツ 2</p>
                  </div>
                </yg-accordion-item>
              </yg-accordion>
            </div>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    `,parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev")}}},c={render:t=>i`
      <yg-accordion>
        <yg-accordion-item>
          <div
            slot="title"
            style="display: flex; align-items: center; gap: 8px;"
          >
            <yg-icon icon="yg:info"></yg-icon>
            <span>リッチなタイトル</span>
          </div>
          <div slot="content">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <p>
                アコーディオンのコンテンツには様々な要素を含めることができます。
              </p>
              <div style="display: flex; gap: 16px;">
                <div
                  style="width: 100px; height: 100px; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center;"
                >
                  画像
                </div>
                <div>
                  <h3 style="margin: 0 0 8px 0;">見出し</h3>
                  <p style="margin: 0;">説明テキスト</p>
                </div>
              </div>
              <div style="display: flex; justify-content: flex-end;">
                <yg-button>ボタン</yg-button>
              </div>
            </div>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    `,parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev")}}};var a,l,g;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return html\`
      \${template(args, html\`
          <yg-accordion-item>
            <div slot="title">タイトル1</div>
            <div slot="content">
              <p>コンテンツ1</p>
            </div>
          </yg-accordion-item>
          <yg-accordion-item>
            <div slot="title">タイトル2</div>
            <div slot="content">
              <p>コンテンツ2</p>
            </div>
          </yg-accordion-item>
          <yg-accordion-item>
            <div slot="title">タイトル3</div>
            <div slot="content">
              <p>コンテンツ3</p>
            </div>
          </yg-accordion-item>
        \`)}
    \`;
  },
  args: {
    multiple: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev')
    }
  }
}`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,p,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <yg-accordion multiple>
        <yg-accordion-item>
          <div slot="title">複数開くことができます 1</div>
          <div slot="content">
            <p>
              このアコーディオンは複数のアイテムを同時に開くことができます。
            </p>
          </div>
        </yg-accordion-item>
        <yg-accordion-item>
          <div slot="title">複数開くことができます 2</div>
          <div slot="content">
            <p>他のアイテムを開いても、このアイテムは閉じません。</p>
          </div>
        </yg-accordion-item>
        <yg-accordion-item>
          <div slot="title">複数開くことができます 3</div>
          <div slot="content">
            <p>すべてのアイテムを同時に開くことができます。</p>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev')
    }
  }
}`,...(s=(p=r.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var y,v,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <yg-accordion>
        <yg-accordion-item>
          <div slot="title">個人情報</div>
          <div slot="content">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <yg-form-control label="氏名">
                <yg-input placeholder="氏名を入力"></yg-input>
              </yg-form-control>
              <yg-form-control label="メールアドレス">
                <yg-input
                  placeholder="メールアドレスを入力"
                  type="email"
                ></yg-input>
              </yg-form-control>
              <yg-form-control label="電話番号">
                <yg-input placeholder="電話番号を入力" type="tel"></yg-input>
              </yg-form-control>
            </div>
          </div>
        </yg-accordion-item>
        <yg-accordion-item>
          <div slot="title">住所情報</div>
          <div slot="content">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <yg-form-control label="郵便番号">
                <yg-input placeholder="郵便番号を入力"></yg-input>
              </yg-form-control>
              <yg-form-control label="住所">
                <yg-input placeholder="住所を入力"></yg-input>
              </yg-form-control>
            </div>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev')
    }
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var u,h,x;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <yg-accordion>
        <yg-accordion-item>
          <div slot="title">ネストされたコンテンツ</div>
          <div slot="content">
            <p>メインコンテンツ</p>
            <div style="margin-top: 16px;">
              <yg-accordion>
                <yg-accordion-item>
                  <div slot="title">サブアコーディオン 1</div>
                  <div slot="content">
                    <p>サブコンテンツ 1</p>
                  </div>
                </yg-accordion-item>
                <yg-accordion-item>
                  <div slot="title">サブアコーディオン 2</div>
                  <div slot="content">
                    <p>サブコンテンツ 2</p>
                  </div>
                </yg-accordion-item>
              </yg-accordion>
            </div>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev')
    }
  }
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,K,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <yg-accordion>
        <yg-accordion-item>
          <div
            slot="title"
            style="display: flex; align-items: center; gap: 8px;"
          >
            <yg-icon icon="yg:info"></yg-icon>
            <span>リッチなタイトル</span>
          </div>
          <div slot="content">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <p>
                アコーディオンのコンテンツには様々な要素を含めることができます。
              </p>
              <div style="display: flex; gap: 16px;">
                <div
                  style="width: 100px; height: 100px; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center;"
                >
                  画像
                </div>
                <div>
                  <h3 style="margin: 0 0 8px 0;">見出し</h3>
                  <p style="margin: 0;">説明テキスト</p>
                </div>
              </div>
              <div style="display: flex; justify-content: flex-end;">
                <yg-button>ボタン</yg-button>
              </div>
            </div>
          </div>
        </yg-accordion-item>
      </yg-accordion>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=15526-48917&m=dev')
    }
  }
}`,...(W=(K=c.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const li=["Default","MultipleOpen","WithForm","WithNestedContent","WithRichContent"];export{e as Default,r as MultipleOpen,n as WithForm,d as WithNestedContent,c as WithRichContent,li as __namedExportsOrder,ai as default};
