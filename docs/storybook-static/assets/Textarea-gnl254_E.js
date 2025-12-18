import{s as m,i as c,x as f,T as d}from"./lit-element-C4bBeaiV.js";import{t as y,E as x}from"./element-BmCHZ0P_.js";import{n as s}from"./property-BacG-Vag.js";import{r as p}from"./state-CLgbQenF.js";import{e as g}from"./query-DXShiZ7f.js";import{c as b}from"./index-Br9a1yed.js";import{m as v}from"./delegate-CzAH-NQ8.js";import{r as w}from"./redispatch-event-saXtg2yW.js";import{m as $,c as C,g as z}from"./validator-Z-Is_xbn.js";import{m as S}from"./element-internals-CBp_Vcyn.js";import{m as L,g as E}from"./form-associated-C1RJQ55l.js";import{m as F,o as V}from"./on-report-validity-Dy401omy.js";import{T as O}from"./text-field-validator-BUChPS26.js";import{c as u}from"./calculateSize-BEzCU_f7.js";var P=Object.defineProperty,R=Object.getOwnPropertyDescriptor,r=(t,i,a,n)=>{for(var o=n>1?void 0:n?R(i,a):i,h=t.length-1,l;h>=0;h--)(l=t[h])&&(o=(n?l(i,a,o):l(o))||o);return n&&o&&P(i,a,o),o};const _=v(F($(L(S(x))))),T=b({base:"flex flex-shrink-0 items-center gap-3 p-2 text-left text-body-medium",variants:{state:{default:"rounded border border-input focus-within:border-primary focus-within:shadow-input-focus",disabled:"border-disabled cursor-not-allowed rounded border bg-neutral-screen text-body-medium shadow-none text-disabled-text",readonly:"cursor-text rounded-none border-b border-input shadow-none",error:"rounded border border-error-base text-body-medium"}},defaultVariants:{state:"default"}});let e=class extends _{constructor(){super(c`
      :host {
        display: inline-block;
      }
    `.cssText),this.placeholder="",this.required=!1,this.readonly=!1,this.minLength=-1,this.maxLength=-1,this.width="240",this.size=15,this.rows=1,this.error=!1,this.value="",this.autocomplete="on",this.type="textarea",this.dirty=!1,this.focused=!1,this.fixSize=!0}reset(){this.dirty=!1,this.value=this.getAttribute("value")??""}attributeChangedCallback(t,i,a){t==="value"&&this.dirty||super.attributeChangedCallback(t,i,a)}updated(t){super.updated(t),this.style.setProperty("width",String(u(this==null?void 0:this.width))||"auto"),this.style.setProperty("height",`${this.rows*38}px`);const i=this.value;this.value!==i&&(this.value=i)}textareaStyles(){return T}render(){const t=u(this==null?void 0:this.width),i=`${this.rows*38}px`,a=this.textareaStyles()({state:this.disabled?"disabled":this.readonly?"readonly":this.error?"error":"default"}),n=`${t}`,o=`${this.size}rem`,h=(this.maxLength??-1)>-1,l=(this.minLength??-1)>-1;return f`
      <div
        class=${a}
        style="width: ${this.fixSize?n||o:"auto"}; height: ${this.fixSize?i:"auto"};"
      >
        <textarea
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readonly}"
          width="${this.width}"
          size="${this.size}"
          ?disabled="${this.disabled}"
          class="flex-grow outline-none bg-transparent w-full h-full resize-none"
          .value=${this.value}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
          ?error="${this.error}"
          id="${this.id}"
          autocomplete=${this.autocomplete||d}
          name=${this.name||d}
          maxlength=${h?this.maxLength:d}
          minlength=${l?this.minLength:d}
        ></textarea>
      </div>
    `}handleFocusChange(){this.focused=this.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){w(this,t)}[E](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){var t;(t=this.textarea)==null||t.focus()}[C](){return new O(()=>({state:this,renderedControl:this.textarea}))}[z](){return this.textarea}[V](t){}};e.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};r([s({type:String})],e.prototype,"placeholder",2);r([s({type:Boolean,reflect:!0})],e.prototype,"required",2);r([s({type:Boolean,reflect:!0})],e.prototype,"readonly",2);r([s({type:Number,attribute:"minlength"})],e.prototype,"minLength",2);r([s({type:Number,attribute:"maxlength"})],e.prototype,"maxLength",2);r([s({type:String})],e.prototype,"width",2);r([s({type:Number})],e.prototype,"size",2);r([s({type:Number})],e.prototype,"rows",2);r([s({type:Boolean,reflect:!0})],e.prototype,"error",2);r([s()],e.prototype,"value",2);r([s({type:String})],e.prototype,"autocomplete",2);r([p()],e.prototype,"type",2);r([p()],e.prototype,"dirty",2);r([p()],e.prototype,"focused",2);r([g("textarea")],e.prototype,"textarea",2);r([p()],e.prototype,"fixSize",2);e=r([y("yg-textarea")],e);export{e as Y,T as t};
