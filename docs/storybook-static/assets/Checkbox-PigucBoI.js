import{s as b,i as u,x as p}from"./lit-element-C4bBeaiV.js";import{t as m,E as x}from"./element-BmCHZ0P_.js";import{n}from"./property-BacG-Vag.js";import{r as l}from"./state-CLgbQenF.js";import{e as k}from"./query-DXShiZ7f.js";import{c as a}from"./index-Br9a1yed.js";import{m as f}from"./delegate-CzAH-NQ8.js";import{V as y,m as v,c as g,g as C}from"./validator-Z-Is_xbn.js";import{m as S}from"./element-internals-CBp_Vcyn.js";import{m as w,g as L,a as E}from"./form-associated-C1RJQ55l.js";import{r as $}from"./redispatch-event-saXtg2yW.js";import{i as q,d as V}from"./form-label-activation-C-ZPsH8j.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _ extends y{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,s){return e.checked===s.checked&&e.required===s.required}copy({checked:e,required:s}){return{checked:e,required:s}}}var A=Object.defineProperty,F=Object.getOwnPropertyDescriptor,o=(t,e,s,c)=>{for(var r=c>1?void 0:c?F(e,s):e,h=t.length-1,d;h>=0;h--)(d=t[h])&&(r=(c?d(e,s,r):d(r))||r);return c&&r&&A(e,s,r),r};const I=a({base:"flex h-[38px] w-fit cursor-pointer items-center justify-start",variants:{disabled:{true:"cursor-not-allowed"}}}),O=a({base:"rounded-full p-[9px]",variants:{disabled:{false:"hover:bg-primary-hover"}}}),R=a({base:"relative box-border size-[18px] rounded-sm border-2 border-primary bg-primary",variants:{disabled:{true:"border-disabled-base bg-disabled-base"},checked:{false:"border-disabled-base bg-transparent"}}}),T=a({base:"absolute left-px top-[2px] h-[7px] w-[12px] -rotate-45 border-b-2 border-l-2 border-b-white border-l-white opacity-0",variants:{checked:{true:"opacity-100"}}}),B=a({base:"mr-2 inline-flex content-center items-center text-base font-medium text-body",variants:{disabled:{true:"text-disabled-text"},isEmpty:{true:"hidden"}}}),j=f(v(w(S(x))));let i=class extends j{constructor(){super(u`
      :host {
        display: inline-block;
        outline: none; /* ホバー時の枠線を削除する */
        width: -moz-fit-content;
        width: fit-content; /* 横幅いっぱいになって押下範囲不適切になるのを防ぐ */
      }
      .shadow-transition {
        transition: background-color 0.3s ease;
      }
    `.cssText),this.focused=!1,this.value="on",this.checked=!1,this.required=!1,this.autocomplete="on",this.slotLength=0,this._handleSlotChange=()=>{const t=this.textContent||"";this.slotLength=t.length},this.addEventListener("click",t=>{setTimeout(()=>{var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".shadow-transition");e==null||e.classList.remove("!bg-back-ground-primary-light")},300),!(!q(t)||!this.input)&&(this.focus(),V(this.input))}),this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}checkboxLabelStyle(){return I}checkboxContainerStyle(){return O}checkboxStyle(){return R}checkboxInnerStyle(){return T}checkboxLabelTextStyle(){return B}render(){const t=this.focused?"!bg-back-ground-primary-light":"";return p`
      <label
        class="${this.checkboxLabelStyle()({disabled:this.disabled})}"
      >
        <input
          type="checkbox"
          name="${this.name}"
          .value="${this.value}"
          class="appearance-none"
          .checked="${this.checked}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          @input=${this.handleInput}
          @change=${this.handleChange}
        />
        <div
          class="${this.checkboxContainerStyle()({disabled:this.disabled,class:t+" shadow-transition"})}"
        >
          <div class="flex items-center justify-center">
            <div
              class="${this.checkboxStyle()({checked:this.checked,disabled:this.disabled})}"
            >
              <div
                class="${this.checkboxInnerStyle()({checked:this.checked})}"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="${this.checkboxLabelTextStyle()({disabled:this.disabled,isEmpty:this.slotLength===0})}"
        >
          <slot></slot>
        </div>
      </label>
    `}firstUpdated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t==null||t.addEventListener("slotchange",this._handleSlotChange)}handleInput(t){const e=t.target;this.checked=e.checked}handleChange(t){$(this,t)}[L](){return this.checked?this.value:null}[E](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(t){this.checked=t==="true"}[g](){return new _(()=>this)}[C](){return this.input}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}};i.shadowRootOptions={...b.shadowRootOptions,delegatesFocus:!0};o([l()],i.prototype,"focused",2);o([n({type:String})],i.prototype,"value",2);o([n({type:Boolean,reflect:!0})],i.prototype,"checked",2);o([n({type:Boolean,reflect:!0})],i.prototype,"required",2);o([n({type:String})],i.prototype,"autocomplete",2);o([l()],i.prototype,"slotLength",2);o([k("input")],i.prototype,"input",2);i=o([m("yg-checkbox")],i);export{i as Y,T as a,R as c};
