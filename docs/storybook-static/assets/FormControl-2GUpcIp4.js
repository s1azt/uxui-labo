import{x as n}from"./lit-element-C4bBeaiV.js";import{t as p,E as m}from"./element-BmCHZ0P_.js";import{n as i}from"./property-BacG-Vag.js";import{c as h}from"./index-Br9a1yed.js";var f=Object.defineProperty,c=Object.getOwnPropertyDescriptor,a=(t,e,r,o)=>{for(var l=o>1?void 0:o?c(e,r):e,d=t.length-1,u;d>=0;d--)(u=t[d])&&(l=(o?u(e,r,l):u(l))||l);return o&&l&&f(e,r,l),l};const y=h({base:"flex gap-1",variants:{order:{vertical:"flex-col",horizontal:"flex-row"},status:{default:"",modified:"bg-[#FFF8E6]"}},defaultVariants:{order:"vertical",status:"default"}},{twMerge:!1}),b=h({base:"text-label-medium",variants:{mandatory:{true:"rounded bg-error-base px-1 text-label-small text-white"},required:{true:"rounded bg-error-base px-1 text-label-small text-white"}}},{twMerge:!1}),g=h({base:"rounded px-1 text-label-small text-white bg-[#F49507]"},{twMerge:!1});let s=class extends m{constructor(){super(...arguments),this.label="",this.mandatory=!1,this.required=!1,this.errorMessage="",this.order="vertical",this.status="default",this.inputElement=null,this.handleSlotChange=()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");if(t){const r=t.assignedElements();r.length>0&&(this.inputElement=r[0])}},this.handleLabelClick=()=>{var t,e,r;if(this.inputElement){const o=((t=this.inputElement.shadowRoot)==null?void 0:t.querySelector("input"))||((e=this.inputElement.shadowRoot)==null?void 0:e.querySelector("textarea"))||((r=this.inputElement.shadowRoot)==null?void 0:r.querySelector("select"));o&&o.focus()}}}firstUpdated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t&&t.addEventListener("slotchange",this.handleSlotChange)}focus(){var t;(t=this.inputElement)==null||t.focus()}blur(){var t;(t=this.inputElement)==null||t.blur()}formControlStyle(){return y}formControlMandatoryStyle(){return b}render(){const t=this.errorMessage!=="";return n`
      <div
        class="${this.formControlStyle()({order:this.order,status:this.status})}"
      >
        <div class="flex gap-2 items-center">
          <label
            class="text-label-medium text-nowrap text-text-base"
            @click="${this.handleLabelClick}"
          >
            ${this.label}
          </label>
          
          ${this.mandatory||this.required?n`<span
                class="${this.formControlMandatoryStyle()({mandatory:this.mandatory,required:this.required})}"
                >必須</span
              >`:""}

          ${this.status==="modified"?n`<span class="${g()}">変更箇所</span>`:""}
        </div>
        <div class="flex flex-col w-full">
          <slot></slot>
          ${t?n`<p class="text-error-base text-label-small mt-1">
                ${this.errorMessage}
              </p>`:""}
        </div>
      </div>
    `}};a([i({type:String})],s.prototype,"label",2);a([i({type:Boolean})],s.prototype,"mandatory",2);a([i({type:Boolean})],s.prototype,"required",2);a([i({type:String,attribute:"error-message"})],s.prototype,"errorMessage",2);a([i({type:String})],s.prototype,"order",2);a([i({type:String})],s.prototype,"status",2);s=a([p("yg-form-control")],s);export{s as Y,b as a,y as f};
