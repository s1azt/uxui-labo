import{i as b,x as c}from"./lit-element-C4bBeaiV.js";import{o as h}from"./if-defined-DhMdV329.js";import{t as m,E as y}from"./element-BmCHZ0P_.js";import{n as r}from"./property-BacG-Vag.js";import{c as u}from"./index-Br9a1yed.js";import{m as g}from"./delegate-CzAH-NQ8.js";import{i as f,m as x}from"./element-internals-CBp_Vcyn.js";import{i as v,d as w}from"./form-label-activation-C-ZPsH8j.js";import{c as S}from"./calculateSize-BEzCU_f7.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function z(e){e.addInitializer(a=>{const s=a;s.addEventListener("click",async n=>{const{type:o,[f]:d}=s,{form:l}=d;if(!(!l||o==="button")&&(await new Promise(p=>{setTimeout(p)}),!n.defaultPrevented)){if(o==="reset"){l.reset();return}l.addEventListener("submit",p=>{Object.defineProperty(p,"submitter",{configurable:!0,enumerable:!0,get:()=>s})},{capture:!0,once:!0}),d.setFormValue(s.value),l.requestSubmit()}})})}var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,i=(e,a,s,n)=>{for(var o=n>1?void 0:n?C(a,s):a,d=e.length-1,l;d>=0;d--)(l=e[d])&&(o=(n?l(a,s,o):l(o))||o);return n&&o&&$(a,s,o),o};const I=u({base:"flex size-full cursor-pointer flex-nowrap items-center justify-center whitespace-nowrap rounded font-medium transition duration-150 disabled:cursor-not-allowed disabled:border-disabled-bg disabled:text-disabled-text disabled:shadow-none",variants:{size:{small:"h-[30px] gap-1 px-2 text-[13px] leading-[30px]",medium:"h-[38px] gap-[6px] px-3 text-[14px] leading-[38px]",large:"h-[46px] gap-2 px-4 text-[15px] leading-[46px]"},radius:{base:"rounded",full:"rounded-full"},transparent:{true:"!bg-transparent"},color:{primary:"",white:"",red:""},variant:{contained:"",outlined:"",text:""}},compoundVariants:[{color:"primary",variant:"contained",class:"bg-primary text-white shadow-elevation-2 disabled:bg-disabled-bg hover:bg-others-primary-push hover:shadow-elevation-4"},{color:"primary",variant:"outlined",class:"border border-primary bg-white text-primary hover:bg-primary-thin"},{color:"primary",variant:"text",class:"bg-white text-primary hover:bg-primary-thin"},{color:"white",variant:["contained","outlined","text"],class:"border border-white bg-white text-white"},{color:"red",variant:"contained",class:"bg-error-text text-white shadow-elevation-2 disabled:bg-disabled-bg hover:bg-error-hover hover:shadow-elevation-4"},{color:"red",variant:"outlined",class:"border border-error-text bg-white text-error-text hover:bg-error-thin"},{color:"red",variant:"text",class:"bg-white text-error-text hover:bg-error-thin"}]},{twMerge:!1}),k=u({base:"size-6 transition duration-150",variants:{variant:{contained:" text-white",outlined:" text-primary",text:"text-primary",containedNoShadow:" text-white"},size:{small:"size-[14px]",medium:"size-4",large:"size-5"},disabled:{true:"text-disabled-text"}}}),P=g(x(y));let t=class extends P{constructor(){super(b`
      :host {
        display: inline-block;
      }
    `.cssText),this.variant="contained",this.size="medium",this.disabled=!1,this.leftIcon="",this.rightIcon="",this.iconSize=0,this.radius="base",this.width="auto",this.type="submit",this.transparent=!1,this.color="primary",this.href="",this.target="",this.value="",this.addEventListener("click",this.handleClick.bind(this))}iconStyle(){return k}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}updated(e){super.updated(e),this.style.setProperty("width",String(S(this==null?void 0:this.width))||"auto")}buttonStyle(){return I}render(){const e=o=>this.iconSize?`
        display:${o?"block":"none"};
        width: ${this.iconSize}px !important;
        height: ${this.iconSize}px !important;
      `:`
        display:${o?"block":"none"};
      `,a=this.buttonStyle()({size:this.size,variant:this.variant,radius:this.radius,transparent:this.transparent,color:this.color}),s=this.iconStyle()({variant:this.variant,size:this.size,disabled:this.disabled,color:this.color}),n=c`
      <iconify-icon
        style=${e(this.leftIcon)}
        class="${s}"  height="unset"
        icon="${this.leftIcon}"
      ></iconify-icon>
      <slot></slot>
      <iconify-icon
        style=${e(this.rightIcon)}
        class="${s}"  height="unset"
        icon="${this.rightIcon}"
      ></iconify-icon>
    `;return this.href?c`
        <a
          class="${a}"
          href="${h(this.disabled?void 0:this.href)}"
          target="${h(this.target||void 0)}"
          aria-disabled="${h(this.disabled?"true":void 0)}"
          @click="${this.handleLinkClick}"
        >
          ${n}
        </a>
      `:c`
      <button
        class="${a}"
        ?disabled="${this.disabled}"
        type="${this.type}"
      >
        ${n}
      </button>
    `}handleClick(e){!v(e)||!this||(this.focus(),w(this))}handleLinkClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}}};z(t);t.formAssociated=!0;t.shadowRootOptions={mode:"open",delegatesFocus:!0};i([r({type:String})],t.prototype,"variant",2);i([r({type:String})],t.prototype,"size",2);i([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2);i([r({type:String,attribute:"left-icon"})],t.prototype,"leftIcon",2);i([r({type:String,attribute:"right-icon"})],t.prototype,"rightIcon",2);i([r({type:Number,attribute:"icon-size"})],t.prototype,"iconSize",2);i([r({type:String})],t.prototype,"radius",2);i([r({type:String})],t.prototype,"width",2);i([r({type:String})],t.prototype,"type",2);i([r({type:Boolean})],t.prototype,"transparent",2);i([r({type:String})],t.prototype,"color",2);i([r({type:String})],t.prototype,"href",2);i([r({type:String})],t.prototype,"target",2);i([r({reflect:!0})],t.prototype,"value",2);t=i([m("yg-button")],t);export{t as Y,I as b,k as i};
