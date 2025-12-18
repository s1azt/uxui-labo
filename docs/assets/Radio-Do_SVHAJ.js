import{i as L,x as T}from"./lit-element-C4bBeaiV.js";import{t as F,E as _}from"./element-BmCHZ0P_.js";import{n as y}from"./property-BacG-Vag.js";import{r as S}from"./state-CLgbQenF.js";import{e as $}from"./query-DXShiZ7f.js";import{c as u}from"./index-Br9a1yed.js";import{i as q}from"./form-label-activation-C-ZPsH8j.js";import{r as A}from"./redispatch-event-saXtg2yW.js";import{V as R,m as D,c as O,g as P}from"./validator-Z-Is_xbn.js";import{m as V,i as w}from"./element-internals-CBp_Vcyn.js";import{m as U,g as K,a as j}from"./form-associated-C1RJQ55l.js";var B=Object.defineProperty,z=(t,e,s,i)=>{for(var n=void 0,o=t.length-1,r;o>=0;o--)(r=t[o])&&(n=r(e,s,n)||n);return n&&B(e,s,n),n};const f=Symbol("isFocusable"),v=Symbol("privateIsFocusable"),p=Symbol("externalTabIndex"),m=Symbol("isUpdatingTabIndex"),g=Symbol("updateTabIndex");function M(t){var e,s,i;class n extends t{constructor(){super(...arguments),this[i]=!0,this[s]=null,this[e]=!1}get[f](){return this[v]}set[f](r){this[f]!==r&&(this[v]=r,this[g]())}connectedCallback(){super.connectedCallback(),this[g]()}attributeChangedCallback(r,a,C){if(r!=="tabindex"){super.attributeChangedCallback(r,a,C);return}if(this.requestUpdate("tabIndex",Number(a??-1)),!this[m]){if(!this.hasAttribute("tabindex")){this[p]=null,this[g]();return}this[p]=this.tabIndex}}[(i=v,s=p,e=m,g)](){const r=this[f]?0:-1,a=this[p]??r;this[m]=!0,this.tabIndex=a,this[m]=!1}}return z([y({noAccessor:!0})],n.prototype,"tabIndex"),n}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class N{constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=s=>{const i=s.key==="ArrowDown",n=s.key==="ArrowUp",o=s.key==="ArrowLeft",r=s.key==="ArrowRight";if(!o&&!r&&!i&&!n)return;const a=this.controls;if(!a.length)return;s.preventDefault();const I=getComputedStyle(this.host).direction==="rtl"?o||i:r||i,k=a.indexOf(this.host);let d=I?k+1:k-1;for(;d!==k;){d>=a.length?d=0:d<0&&(d=a.length-1);const c=a[d];if(c.hasAttribute("disabled")){I?d++:d--;continue}for(const b of a)b!==c&&(b.checked=!1,b.tabIndex=-1,b.blur());c.checked=!0,c.tabIndex=0,c.focus(),c.dispatchEvent(new Event("change",{bubbles:!0}));break}}}get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,s=e.find(i=>i.checked);if(s||this.focused){const i=s||this.host;i.tabIndex=0;for(const n of e)n!==i&&(n.tabIndex=-1);return}for(const i of e)i.tabIndex=0}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Y extends R{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let s=!1,i=!1;for(const{checked:n,required:o}of e)o&&(s=!0),n&&(i=!0);return this.radioElement.checked=i,this.radioElement.required=s,{validity:{valueMissing:s&&!i},validationMessage:this.radioElement.validationMessage}}equals(e,s){if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++){const n=e[i],o=s[i];if(n.checked!==o.checked||n.required!==o.required)return!1}return!0}copy(e){return e.map(({checked:s,required:i})=>({checked:s,required:i}))}}var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,l=(t,e,s,i)=>{for(var n=i>1?void 0:i?J(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&H(e,s,n),n},E;const Q=u({base:"flex h-[38px] w-fit cursor-pointer items-center justify-start",variants:{disabled:{true:"cursor-not-allowed"}}}),W=u({base:"rounded-full p-[9px]",variants:{disabled:{false:"hover:bg-primary-hover"}}}),X=u({base:"flex size-5 items-center justify-center rounded-full border-2 border-solid border-disabled-base",variants:{checked:{true:"border-primary"},disabled:{true:"border-disabled-base"}}}),Z=u({base:"size-[10px] rounded-full opacity-0 transition-opacity duration-200 ease-in-out",variants:{checked:{true:"bg-primary opacity-100"},disabled:{true:"bg-disabled-base"}}}),G=u({base:"mr-2 inline-flex content-center items-center text-base font-medium text-body",variants:{disabled:{true:"text-disabled-text"},isEmpty:{true:"hidden"}}}),x=Symbol("checked"),ee=D(U(V(M(_))));let h=class extends ee{constructor(){super(L`
      :host {
        display: inline-block;
        outline: none; /* ホバー時の枠線を削除する */
        width: -moz-fit-content;
        width: fit-content; /* 横幅いっぱいになって押下範囲不適切になるのを防ぐ */
      }
      .shadow-transition {
        transition: background-color 0.3s ease;
      }
    `.cssText),this.selectionController=new N(this),this.focused=!1,this.value="on",this[E]=!1,this.required=!1,this.slotLength=0,this._handleSlotChange=()=>{const t=this.textContent||"";this.slotLength=t.length},this.addController(this.selectionController),this[w].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}get checked(){return this[x]}set checked(t){const e=this.checked;e!==t&&(this[x]=t,this.requestUpdate("checked",e),this.selectionController.handleCheckedChange())}radioLabelStyle(){return Q}radioContainerStyle(){return W}radioStyle(){return X}radioInnerStyle(){return Z}radioLabelTextStyle(){return G}render(){const t=this.focused?"!bg-back-ground-primary-light":"";return T`
      <label class="${this.radioLabelStyle()({disabled:this.disabled})}">
        <input
          type="radio"
          name="${this.name}"
          .value="${this.value}"
          class="appearance-none"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input=${this.handleInput}
          @change=${this.handleChange}
          @click=${e=>{e.stopPropagation()}}
        />
        <div
          class="${this.radioContainerStyle()({disabled:this.disabled,class:t+" shadow-transition"})}"
        >
          <div
            class="${this.radioStyle()({checked:this.checked,disabled:this.disabled})}"
          >
            <div
              class="${this.radioInnerStyle()({checked:this.checked,disabled:this.disabled})}"
            ></div>
          </div>
        </div>
        <div
          class="${this.radioLabelTextStyle()({disabled:this.disabled,isEmpty:this.slotLength===0})}"
        >
          <slot></slot>
        </div>
      </label>
    `}firstUpdated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t==null||t.addEventListener("slotchange",this._handleSlotChange)}handleInput(t){const e=t.target;this.checked=e.checked}handleChange(t){A(this,t)}updated(t){super.updated(t),this[w].ariaChecked=String(this.checked)}async handleClick(t){this.disabled||(await 0,!t.defaultPrevented&&(q(t)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),setTimeout(()=>{var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".shadow-transition");e==null||e.classList.remove("!bg-back-ground-primary-light")},300)))}async handleKeydown(t){await 0,!(t.key!==" "||t.defaultPrevented)&&this.click()}[(E=x,K)](){return this.checked?this.value:null}[j](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(t){this.checked=t==="true"}[O](){return new Y(()=>this.selectionController?this.selectionController.controls:[this])}[P](){return this.container}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}};l([$(".container")],h.prototype,"container",2);l([S()],h.prototype,"focused",2);l([y()],h.prototype,"value",2);l([y({type:Boolean,reflect:!0})],h.prototype,"checked",1);l([y({type:Boolean,reflect:!0})],h.prototype,"required",2);l([S()],h.prototype,"slotLength",2);h=l([F("yg-radio")],h);export{h as Y,X as r};
