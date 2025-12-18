import{x as n}from"./lit-element-C4bBeaiV.js";import{f as l}from"./fixFigmaPath-DxFz5b9E.js";import{t as J,E as L}from"./element-BmCHZ0P_.js";import{c as a}from"./index-Br9a1yed.js";import{A as R,b as G,c as y,a as z}from"./accordion-item-mixin-3QUFrK7n.js";import{m as j}from"./element-internals-CBp_Vcyn.js";import{N as M}from"./element-BHnNw0zf.js";import"./Icon-BaQ5x4F3.js";import"./Divider-Dlsl_grt.js";import"./Input-CE835Vkk.js";import"./FormControl-BGoCopNs.js";import{g as K}from"./storybook-utils-CyXQhEhe.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./Icon-CzSa45Vk.js";import"./Input-Czg9PuiZ.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./Button-Drw3qSHJ.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./redispatch-event-saXtg2yW.js";import"./validator-Z-Is_xbn.js";import"./form-associated-C1RJQ55l.js";import"./on-report-validity-Dy401omy.js";import"./text-field-validator-BUChPS26.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FormControl-2GUpcIp4.js";import"./directive-helpers-BAuZLZmz.js";var U=Object.defineProperty,V=Object.getOwnPropertyDescriptor,X=(t,e,r,o)=>{for(var i=o>1?void 0:o?V(e,r):e,s=t.length-1,d;s>=0;s--)(d=t[s])&&(i=(o?d(e,r,i):d(i))||i);return o&&i&&U(e,r,i),i};const Y=a({extend:G,base:"flex flex-col"});let q=class extends R(j(M(L))){_getStyles(){return Y}};q=X([J("nk-faq")],q);var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,et=(t,e,r,o)=>{for(var i=o>1?void 0:o?tt(e,r):e,s=t.length-1,d;s>=0;s--)(d=t[s])&&(i=(o?d(e,r,i):d(i))||i);return o&&i&&Z(e,r,i),i};const it={root:a({extend:y.root,base:"bg-white rounded transition-all duration-200 ease-in-out",variants:{open:{true:"bg-white shadow-md  ",false:"hover:bg-white hover:shadow-md "}}}),header:a({extend:y.header}),contentWrapper:a({extend:y.contentWrapper}),qaIconWrapper:a({base:"flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full mr-4",variants:{type:{Q:"bg-primary",A:"bg-back-ground-primary-light"}}}),qaIconText:a({base:"text-xl font-semibold font-['A-OTF_Shin_Maru_Go_Pro']",variants:{type:{Q:"text-white",A:"text-primary"}}}),textContent:a({base:"flex-1 px-2.5 py-1 text-lg font-bold font-['Noto_Sans_JP'] leading-loose"}),toggleIconWrapper:a({base:"flex flex-shrink-0 items-center relative w-8 h-8"}),toggleIcon:a({base:"absolute top-0 left-0 transition-opacity duration-200 ease-in-out",variants:{type:{add:"text-primary",remove:"text-disabled-text"},state:{visible:"opacity-100",hidden:"opacity-0"}}})},nt=z(j(M(L)));let k=class extends nt{_getStyles(){return it}_renderQaIcon(t){const e=this._getStyles();return n`
      <div class="${e.qaIconWrapper({type:t})}">
        <span class="${e.qaIconText({type:t})}">${t}</span>
      </div>
    `}_renderIcon(){const t=this._getStyles(),e=this.isOpen;return n`
      <div class="${t.toggleIconWrapper()}">
        <yg-icon
          icon="material-symbols:add-circle-outline"
          class="${t.toggleIcon({type:"add",state:e?"hidden":"visible"})}"
          height="32"
          width="32"
        ></yg-icon>

        <yg-icon
          icon="material-symbols:do-not-disturb-on-outline"
          class="${t.toggleIcon({type:"remove",state:e?"visible":"hidden"})}"
          height="32"
          width="32"
        ></yg-icon>
      </div>
    `}_renderHeader(){const t=this._getStyles();return n`
      <div class="${t.header()}">
        ${this._renderQaIcon("Q")}
        <div class="${t.textContent()}">
          <slot name="title"></slot>
        </div>
        <div class="${t.toggleIconWrapper()}">${this._renderIcon()}</div>
      </div>
    `}_renderContent(){const t=this._getStyles();return n`
      <div class="${t.contentWrapper()}">
        <div class="flex items-start">
          ${this._renderQaIcon("A")}
          <div class="${t.textContent()}">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `}};k=et([J("nk-faq-item")],k);const{events:ot,args:at,argTypes:Mt,template:rt}=K("nk-faq"),Rt={title:"Components/Ninkei/Faq",component:"nk-faq",args:at,argTypes:{addDividers:{table:{disable:!0}}},parameters:{actions:{handles:ot}}},m={render:t=>n`
      ${rt(t,n`
          <nk-faq-item>
            <div slot="title">タイトル</div>
            <div slot="content">コンテンツ</div>
          </nk-faq-item>
        `)}
    `,parameters:{design:{type:"figma",url:l("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789")}}},p={render:t=>n`
      <nk-faq>
        <nk-faq-item>
          <div slot="title">任意継続被保険者とは何ですか？</div>
          <div slot="content">
            これは回答のサンプルテキストです。任意継続被保険者とは、退職後も引き続き健康保険に加入できる制度です。
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">途中で任意継続をやめることはできますか？</div>
          <div slot="content">
            はい、特定の条件下でやめることが可能です。詳細については、関連部署にお問い合わせください。
          </div>
        </nk-faq-item>
        <nk-faq-item default-open>
          <div slot="title">どのような場合に任意継続の資格を失いますか？</div>
          <div slot="content">
            次のいずれかに該当した場合、資格を喪失します。<br />
            ・保険料を期限内に支払わなかったとき<br />
            ・就職して他の健康保険に加入したとき<br />
            ・65歳に達したとき<br />
            ・任意継続の期間（2年）が満了したとき
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">任意継続できる条件を教えてください。</div>
          <div slot="content">
            退職日までに継続して2か月以上の被保険者期間があることが条件となります。
          </div>
        </nk-faq-item>
      </nk-faq>
    `,parameters:{design:{type:"figma",url:l("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789")}}},f={render:t=>n`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h3 class="font-bold text-lg mb-2">モード: "between" (デフォルト)</h3>
        <p class="text-sm mb-4">各アイテムの間に区切り線が追加されます。</p>
        <nk-faq divider-mode="between">
          <nk-faq-item>
            <div slot="title">アイテム1</div>
            <div slot="content">コンテンツ1</div>
          </nk-faq-item>
          <nk-faq-item>
            <div slot="title">アイテム2</div>
            <div slot="content">コンテンツ2</div>
          </nk-faq-item>
        </nk-faq>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-2">モード: "after"</h3>
        <p class="text-sm mb-4">
          最後のアイテムを含む、各アイテムの後に区切り線が追加されます。
        </p>
        <nk-faq divider-mode="after">
          <nk-faq-item>
            <div slot="title">アイテム1</div>
            <div slot="content">コンテンツ1</div>
          </nk-faq-item>
          <nk-faq-item>
            <div slot="title">アイテム2</div>
            <div slot="content">コンテンツ2</div>
          </nk-faq-item>
        </nk-faq>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-2">モード: "none"</h3>
        <p class="text-sm mb-4">
          区切り線は自動的に追加されません。（デモ用に手動でマージンを追加しています）。
        </p>
        <nk-faq divider-mode="none">
          <nk-faq-item style="margin-bottom: 8px;">
            <div slot="title">アイテム1</div>
            <div slot="content">コンテンツ1</div>
          </nk-faq-item>
          <nk-faq-item>
            <div slot="title">アイテム2</div>
            <div slot="content">コンテンツ2</div>
          </nk-faq-item>
        </nk-faq>
      </div>
    </div>
  `},c={render:t=>n`
      <nk-faq multiple>
        <nk-faq-item>
          <div slot="title">複数開くことができます 1</div>
          <div slot="content">
            <p>
              このアコーディオンは複数のアイテムを同時に開くことができます。
            </p>
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">複数開くことができます 2</div>
          <div slot="content">
            <p>他のアイテムを開いても、このアイテムは閉じません。</p>
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">複数開くことができます 3</div>
          <div slot="content">
            <p>すべてのアイテムを同時に開くことができます。</p>
          </div>
        </nk-faq-item>
      </nk-faq>
    `,parameters:{argTypes:{multiple:{control:"boolean",description:"Allows multiple items to be open at the same time.",table:{category:"Container Properties"}}},args:{multiple:!1},design:{type:"figma",url:l("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789")}}},v={render:t=>n`
      <nk-faq>
        <nk-faq-item>
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
        </nk-faq-item>
        <nk-faq-item>
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
        </nk-faq-item>
      </nk-faq>
    `,parameters:{design:{type:"figma",url:l("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789")}}},g={render:t=>n`
      <nk-faq>
        <nk-faq-item>
          <div slot="title">
            手続きや保険料について、さらに詳しく教えてください。
          </div>
          <div slot="content">
            任意継続には、手続きの期限や保険料の計算方法など、いくつかの重要な点があります。以下に詳細なQ&Aを記載します。
            <div style="margin-top: 16px;">
              <nk-faq>
                <nk-faq-item>
                  <div slot="title">保険料はどのように計算されますか？</div>
                  <div slot="content">
                    保険料は、退職時の標準報酬月額か、その健康保険組合の全被保険者の平均標準報酬月額のうち、いずれか低い方の額を基に計算されます。会社負担分がなくなるため、原則として在職中の保険料の約2倍となります。
                  </div>
                </nk-faq-item>
                <nk-faq-item>
                  <div slot="title">手続きの期限はいつまでですか？</div>
                  <div slot="content">
                    原則として、退職日の翌日から20日以内に「任意継続被保険者資格取得申出書」を提出する必要があります。この期限は厳格ですのでご注意ください。
                  </div>
                </nk-faq-item>
                <nk-faq-item>
                  <div slot="title">家族（被扶養者）はどうなりますか？</div>
                  <div slot="content">
                    退職時に被扶養者として認定されていたご家族は、追加の保険料なしで、引き続き被扶養者として健康保険に加入できます。
                  </div>
                </nk-faq-item>
              </nk-faq>
            </div>
          </div>
        </nk-faq-item>
      </nk-faq>
    `,parameters:{design:{type:"figma",url:l("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789")}}},u={render:t=>n`
      <nk-faq>
        <nk-faq-item>
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
        </nk-faq-item>
      </nk-faq>
    `,parameters:{design:{type:"figma",url:l("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789")}}};var B,x,h;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return html\`
      \${template(args, html\`
          <nk-faq-item>
            <div slot="title">タイトル</div>
            <div slot="content">コンテンツ</div>
          </nk-faq-item>
        \`)}
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789')
    }
  }
}`,...(h=(x=m.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,E,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <nk-faq>
        <nk-faq-item>
          <div slot="title">任意継続被保険者とは何ですか？</div>
          <div slot="content">
            これは回答のサンプルテキストです。任意継続被保険者とは、退職後も引き続き健康保険に加入できる制度です。
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">途中で任意継続をやめることはできますか？</div>
          <div slot="content">
            はい、特定の条件下でやめることが可能です。詳細については、関連部署にお問い合わせください。
          </div>
        </nk-faq-item>
        <nk-faq-item default-open>
          <div slot="title">どのような場合に任意継続の資格を失いますか？</div>
          <div slot="content">
            次のいずれかに該当した場合、資格を喪失します。<br />
            ・保険料を期限内に支払わなかったとき<br />
            ・就職して他の健康保険に加入したとき<br />
            ・65歳に達したとき<br />
            ・任意継続の期間（2年）が満了したとき
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">任意継続できる条件を教えてください。</div>
          <div slot="content">
            退職日までに継続して2か月以上の被保険者期間があることが条件となります。
          </div>
        </nk-faq-item>
      </nk-faq>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789')
    }
  }
}`,...(w=(E=p.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var _,D,C;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h3 class="font-bold text-lg mb-2">モード: "between" (デフォルト)</h3>
        <p class="text-sm mb-4">各アイテムの間に区切り線が追加されます。</p>
        <nk-faq divider-mode="between">
          <nk-faq-item>
            <div slot="title">アイテム1</div>
            <div slot="content">コンテンツ1</div>
          </nk-faq-item>
          <nk-faq-item>
            <div slot="title">アイテム2</div>
            <div slot="content">コンテンツ2</div>
          </nk-faq-item>
        </nk-faq>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-2">モード: "after"</h3>
        <p class="text-sm mb-4">
          最後のアイテムを含む、各アイテムの後に区切り線が追加されます。
        </p>
        <nk-faq divider-mode="after">
          <nk-faq-item>
            <div slot="title">アイテム1</div>
            <div slot="content">コンテンツ1</div>
          </nk-faq-item>
          <nk-faq-item>
            <div slot="title">アイテム2</div>
            <div slot="content">コンテンツ2</div>
          </nk-faq-item>
        </nk-faq>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-2">モード: "none"</h3>
        <p class="text-sm mb-4">
          区切り線は自動的に追加されません。（デモ用に手動でマージンを追加しています）。
        </p>
        <nk-faq divider-mode="none">
          <nk-faq-item style="margin-bottom: 8px;">
            <div slot="title">アイテム1</div>
            <div slot="content">コンテンツ1</div>
          </nk-faq-item>
          <nk-faq-item>
            <div slot="title">アイテム2</div>
            <div slot="content">コンテンツ2</div>
          </nk-faq-item>
        </nk-faq>
      </div>
    </div>
  \`
}`,...(C=(D=f.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var F,A,S;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <nk-faq multiple>
        <nk-faq-item>
          <div slot="title">複数開くことができます 1</div>
          <div slot="content">
            <p>
              このアコーディオンは複数のアイテムを同時に開くことができます。
            </p>
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">複数開くことができます 2</div>
          <div slot="content">
            <p>他のアイテムを開いても、このアイテムは閉じません。</p>
          </div>
        </nk-faq-item>
        <nk-faq-item>
          <div slot="title">複数開くことができます 3</div>
          <div slot="content">
            <p>すべてのアイテムを同時に開くことができます。</p>
          </div>
        </nk-faq-item>
      </nk-faq>
    \`;
  },
  parameters: {
    argTypes: {
      multiple: {
        control: 'boolean',
        description: 'Allows multiple items to be open at the same time.',
        table: {
          category: 'Container Properties'
        }
      }
    },
    args: {
      multiple: false
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789')
    }
  }
}`,...(S=(A=c.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var I,N,Q;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <nk-faq>
        <nk-faq-item>
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
        </nk-faq-item>
        <nk-faq-item>
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
        </nk-faq-item>
      </nk-faq>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789')
    }
  }
}`,...(Q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var P,T,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <nk-faq>
        <nk-faq-item>
          <div slot="title">
            手続きや保険料について、さらに詳しく教えてください。
          </div>
          <div slot="content">
            任意継続には、手続きの期限や保険料の計算方法など、いくつかの重要な点があります。以下に詳細なQ&Aを記載します。
            <div style="margin-top: 16px;">
              <nk-faq>
                <nk-faq-item>
                  <div slot="title">保険料はどのように計算されますか？</div>
                  <div slot="content">
                    保険料は、退職時の標準報酬月額か、その健康保険組合の全被保険者の平均標準報酬月額のうち、いずれか低い方の額を基に計算されます。会社負担分がなくなるため、原則として在職中の保険料の約2倍となります。
                  </div>
                </nk-faq-item>
                <nk-faq-item>
                  <div slot="title">手続きの期限はいつまでですか？</div>
                  <div slot="content">
                    原則として、退職日の翌日から20日以内に「任意継続被保険者資格取得申出書」を提出する必要があります。この期限は厳格ですのでご注意ください。
                  </div>
                </nk-faq-item>
                <nk-faq-item>
                  <div slot="title">家族（被扶養者）はどうなりますか？</div>
                  <div slot="content">
                    退職時に被扶養者として認定されていたご家族は、追加の保険料なしで、引き続き被扶養者として健康保険に加入できます。
                  </div>
                </nk-faq-item>
              </nk-faq>
            </div>
          </div>
        </nk-faq-item>
      </nk-faq>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789')
    }
  }
}`,...($=(T=g.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var O,W,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <nk-faq>
        <nk-faq-item>
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
        </nk-faq-item>
      </nk-faq>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?m=auto&node-id=6111-70789')
    }
  }
}`,...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const Gt=["Default","defaultOpen","DividerModes","MultipleOpen","WithForm","WithNestedContent","WithRichContent"];export{m as Default,f as DividerModes,c as MultipleOpen,v as WithForm,g as WithNestedContent,u as WithRichContent,Gt as __namedExportsOrder,Rt as default,p as defaultOpen};
