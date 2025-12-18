import{i as m,x as u}from"./lit-element-C4bBeaiV.js";import{E as f,t as b}from"./element-BmCHZ0P_.js";import{n as l}from"./property-BacG-Vag.js";import{r as y}from"./state-CLgbQenF.js";import{e as v}from"./base-DIkkzJ-c.js";import{t as d}from"./index-Br9a1yed.js";import{c as x}from"./calculateSize-BEzCU_f7.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(t){return(e,s)=>{const{slot:n,selector:i}=t,a="slot"+(n?`[name=${n}]`:":not([name])");return v(e,s,{get(){var p;const c=(p=this.renderRoot)==null?void 0:p.querySelector(a),h=(c==null?void 0:c.assignedElements(t))??[];return i===void 0?h:h.filter(g=>g.matches(i))}})}}var w=Object.defineProperty,E=Object.getOwnPropertyDescriptor,r=(t,e,s,n)=>{for(var i=n>1?void 0:n?E(e,s):e,a=t.length-1,c;a>=0;a--)(c=t[a])&&(i=(n?c(e,s,i):c(i))||i);return n&&i&&w(e,s,i),i};let o=class extends f{constructor(){super(...arguments),this.title="",this.errorMessage="",this.leftButton="キャンセル",this.rightButton="登録",this.width="auto",this.open=!1,this.buttonArea=!1,this.showCloseButton=!0,this.fullscreen=!1,this.padding=24,this.closeOnOutsideClick=!1,this.hasFooterSlotContent=!1,this._onFocusChange=t=>{const e=t.target;if(!this.contains(e)){const s=this._getFocusableElements();s.length>0&&s[0].focus()}}}update(t){super.update(t)}render(){const t=x(this==null?void 0:this.width),e=this.fullscreen,s=`${this.padding}px`;return u`
      <div 
        id="container"
        @click=${this.closeOnOutsideClick?this._handleContainerClick:void 0}
      >
        <div
          id="content"
          class=${d("relative bg-white rounded shadow flex-col justify-center items-center gap-6 inline-flex",e?"fullscreen":"")}
          style="width: ${e?"100vw":t}; padding: ${s};"
          @click=${this.closeOnOutsideClick?this._handleContentClick:void 0}
        >
          ${this.title||this.showCloseButton?u`<div
                class="w-full flex justify-between items-center text-primary text-headline-medium"
              >
                ${this.title}
                ${this.showCloseButton?u`<iconify-icon
                      style="color: black; cursor: pointer;"
                      icon="yg:close"
                      id="close-icon"
                      @click=${this.close}
                    ></iconify-icon>`:null}
              </div>`:null}

          ${this.errorMessage.length>0?u`<div
                  class="w-full whitespace-pre-wrap flex justify-start items-start text-error-text text-label-large leading-[21px] tracking-tight"
                >
                  ${this.errorMessage}
                </div>`:null}

          <!-- スクロールが有効なコンテンツ部分 -->
          <div class="w-full flex-col gap-6 inline-flex scrollable-content">
            <slot></slot>
          </div>

     
         
            ${this.buttonArea?u`
                    <div
                      class="self-stretch justify-end items-start gap-5 inline-flex"
                    >
                      <yg-button
                        @click=${this.close}
                        variant="outlined"
                        radius="base"
                        size="medium"
                        id="close-button"
                        type="button"
                        >${this.leftButton}</yg-button
                      >
                      <yg-button
                        @click=${this._dispatchClickEdit}
                        variant="contained"
                        radius="base"
                        size="medium"
                        type="button"
                        >${this.rightButton}</yg-button
                      >
                    </div>
                  `:null}
            ${this.hasFooterSlotContent?u`<div
                  class=${d("w-full",e?"footer-area":"")}
                >
                  <slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
                </div>`:u`<slot name="footer" @slotchange=${this.handleFooterSlotChange} style="display: none;"></slot>`}
          </div>
          
        </div>
      </div>
    `}_dispatchClickEdit(){const t={bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("submit",t))}_handleContainerClick(t){t.target===t.currentTarget&&this.close({target:{id:"container"}})}_handleContentClick(t){t.stopPropagation()}show(){this.open=!0}close(t){var n;const e=new CustomEvent("before-close",{detail:{item:this},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&((!t||!(t!=null&&t.target.id))&&(this.open=!1),["container","close-icon","close-button"].includes((n=t==null?void 0:t.target)==null?void 0:n.id)&&(this.open=!1),this.dispatchEvent(new CustomEvent("closed",{detail:{item:this},bubbles:!0,composed:!0})))}checkFooterSlotContent(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector('slot[name="footer"]');if(!t)return;const s=t.assignedNodes().some(i=>{var a;return i.nodeType===Node.TEXT_NODE?((a=i.textContent)==null?void 0:a.trim())!=="":i.nodeType===Node.ELEMENT_NODE});this.hasFooterSlotContent!==s&&(this.hasFooterSlotContent=s)}handleFooterSlotChange(t){this.checkFooterSlotContent()}_getFocusableElements(){const t=this.tagName.toLowerCase().split("-")[0],e=`${t}-form-control, ${t}-button, ${t}-input, ${t}-select, ${t}-textarea, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`;return this.slottedElements.flatMap(n=>Array.from(n.querySelectorAll(e)))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.checkFooterSlotContent()})}updated(t){super.updated(t),t.has("open")&&(this.open?(document.addEventListener("focusin",this._onFocusChange),this._initializeFocus()):document.removeEventListener("focusin",this._onFocusChange))}_initializeFocus(){const t=this._getFocusableElements();t.length>0&&t[0].focus()}};o.styles=[f.styles,m`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      #content {
        position: relative; /* fixed ではなく relative */
        opacity: 0;
        transition: opacity 0.3s ease;
        margin: auto; /* flexbox による中央配置 */
        max-width: 90vw; /* 横幅の調整 */
        max-height: 80vh; /* 縦幅の調整 */
        overflow: auto; /* 必要に応じてスクロール */
        background: white;
        border-radius: 8px;
        padding: 24px;
      }

      /* 画面いっぱい表示 */
      :host([fullscreen]) #container {
        align-items: stretch;
        justify-content: stretch;
      }

      :host([fullscreen]) #content {
        max-width: 100vw;
        max-height: 100dvh;
        width: 100vw;
        height: 100dvh;
        border-radius: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        padding: 16px !important; /* 24px (p-6) → 16px */
        gap: 16px !important; /* 24px (gap-6) → 16px */
      }

      :host([fullscreen]) .scrollable-content {
        flex: 1;
        overflow-y: auto;
        max-height: none; /* 高さ制限を解除 */
        max-width: 100vw;
      }

      :host([fullscreen]) .footer-area {
        flex-shrink: 0; /* footerの高さを固定 */
        margin-top: auto; /* 下部に配置 */
      }

      :host([open]) #container {
        pointer-events: auto;
      }

      :host([open]) #container::before {
        opacity: 1;
      }

      :host([open]) #content {
        opacity: 1;
      }

      /* スクロール範囲を限定 */
      .scrollable-content {
        max-height: 70vh; /* 必要に応じて高さを調整 */
        max-width: 90vw; /* 必要に応じて幅を調整 */
        overflow: auto; /* 縦方向のスクロールを有効化 */
      }
    `];r([l({type:String})],o.prototype,"title",2);r([l({type:String,attribute:"error-message"})],o.prototype,"errorMessage",2);r([l({type:String,attribute:"left-button"})],o.prototype,"leftButton",2);r([l({type:String,attribute:"right-button"})],o.prototype,"rightButton",2);r([l({type:String})],o.prototype,"width",2);r([l({type:Boolean,reflect:!0})],o.prototype,"open",2);r([l({type:Boolean,reflect:!0,attribute:"button-area"})],o.prototype,"buttonArea",2);r([l({type:Boolean,reflect:!0,attribute:"show-close-button"})],o.prototype,"showCloseButton",2);r([l({type:Boolean})],o.prototype,"fullscreen",2);r([l({type:Number})],o.prototype,"padding",2);r([l({type:Boolean,reflect:!0,attribute:"close-on-outside-click"})],o.prototype,"closeOnOutsideClick",2);r([C({flatten:!0})],o.prototype,"slottedElements",2);r([y()],o.prototype,"hasFooterSlotContent",2);o=r([b("yg-dialog")],o);export{o as Y};
