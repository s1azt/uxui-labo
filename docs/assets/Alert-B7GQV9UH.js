import{i as f,x as i}from"./lit-element-C4bBeaiV.js";import{t as u,E as b}from"./element-BmCHZ0P_.js";import{n as h}from"./property-BacG-Vag.js";import{r as p}from"./state-CLgbQenF.js";import{c as a}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,c=(e,r,o,s)=>{for(var t=s>1?void 0:s?g(r,o):r,l=e.length-1,d;l>=0;l--)(d=e[l])&&(t=(s?d(r,o,t):d(t))||t);return s&&t&&v(r,o,t),t};const y=a({base:"text-label-small relative flex flex-col gap-4 p-4 rounded border",variants:{severity:{default:"bg-back-ground-base text-text-base border-border-base",caution:"bg-[#fefce8] text-[#a16207] border-[#a16207]",warning:"bg-[#ffeeee] text-text-error border-border-error",safe:"bg-[#f5fff7] text-others-green border-others-green"}},defaultVariants:{severity:"default"}},{twMerge:!1}),m=a({base:"flex flex-shrink-0 items-center justify-center",variants:{severity:{default:"text-text-base",caution:"text-[#a16207]",warning:"text-text-error",safe:"text-others-green"}}}),x=a({base:"flex-shrink-0"}),C=a({base:"p-1 -m-1 rounded hover:bg-black/10 transition-colors cursor-pointer",variants:{severity:{default:"text-text-base",caution:"text-[#a16207]",warning:"text-text-error",safe:"text-others-green"}}});let n=class extends b{constructor(){super(f`
      :host {
        display: block;
      }
    `.cssText),this.severity="default",this.closable=!1,this.hasTitleSlotContent=!1,this.applyTitleSlotStyles=e=>{e.target.assignedNodes().forEach(s=>{s instanceof HTMLElement&&s.classList.add("text-label-medium")})}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.checkTitleSlotContent()})}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}checkTitleSlotContent(){var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector('slot[name="title"]');if(!e)return;const o=e.assignedNodes().some(t=>{var l;return t.nodeType===Node.TEXT_NODE?((l=t.textContent)==null?void 0:l.trim())!=="":t.nodeType===Node.ELEMENT_NODE});this.hasTitleSlotContent!==o&&(this.hasTitleSlotContent=o)}handleTitleSlotChange(e){this.checkTitleSlotContent(),e&&this.applyTitleSlotStyles(e)}getDefaultIcon(){return{default:"mdi:information",caution:"mdi:alert",warning:"mdi:alert",safe:"mdi:check-circle"}[this.severity]}renderIcon(){const e=this.getDefaultIcon();return i`
      <div class="${m({severity:this.severity})}">
        <yg-icon icon="${e}" width="18" height="18"></yg-icon>
      </div>
    `}renderCloseButton(){return this.closable?i`
      <div class="${x()}">
        <button
          class="${C({severity:this.severity})}"
          @click="${this.handleClose}"
          aria-label="閉じる"
        >
          <yg-icon icon="mdi:close" width="16" height="16"></yg-icon>
        </button>
      </div>
    `:""}render(){return i`
      <div class="${y({severity:this.severity})}" role="alert">
        <!-- 上部：アイコン + タイトル + 閉じるボタン -->
        <div class="flex items-center justify-between w-full gap-3">
          <div class="flex items-center gap-2 min-w-0 flex-1">
            ${this.renderIcon()}
            ${this.hasTitleSlotContent?i`
                  <div class="min-w-0 break-words">
                    <slot
                      name="title"
                      @slotchange="${this.handleTitleSlotChange}"
                    ></slot>
                  </div>
                `:i`
                  <div class="min-w-0 break-words">
                    <slot></slot>
                  </div>
                `}
          </div>
          ${this.renderCloseButton()}
        </div>

        ${this.hasTitleSlotContent?i`
              <!-- 下部：デフォルトスロット（コンテンツ） -->
              <div class="content-slot">
                <slot></slot>
              </div>
            `:""}

        <!-- 初期状態でtitleスロットの監視のため非表示で配置 -->
        ${this.hasTitleSlotContent?"":i`<slot
              name="title"
              style="display: none;"
              @slotchange="${this.handleTitleSlotChange}"
            ></slot>`}
      </div>
    `}};c([h({type:String})],n.prototype,"severity",2);c([h({type:Boolean})],n.prototype,"closable",2);c([p()],n.prototype,"hasTitleSlotContent",2);n=c([u("yg-alert")],n);export{n as Y};
