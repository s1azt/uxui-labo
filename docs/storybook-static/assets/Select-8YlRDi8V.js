import{x as l}from"./lit-element-C4bBeaiV.js";import{t as h}from"./element-BmCHZ0P_.js";import{n as u}from"./property-BacG-Vag.js";import{c}from"./validator-Z-Is_xbn.js";import{g as p}from"./form-associated-C1RJQ55l.js";import{B as f,S as b}from"./select-validator-x4M-aYN7.js";import"./Icon-CzSa45Vk.js";import{c as m}from"./calculateSize-BEzCU_f7.js";import{c as v}from"./index-Br9a1yed.js";var w=Object.defineProperty,g=Object.getOwnPropertyDescriptor,n=(e,t,r,o)=>{for(var s=o>1?void 0:o?g(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&w(t,r,s),s};const x=v({base:"flex flex-shrink-0 items-center gap-3 text-left text-body-medium",variants:{state:{default:"rounded border border-input",disabled:"border-disabled cursor-not-allowed rounded border bg-neutral-screen text-body-medium shadow-none text-disabled-text",readonly:"cursor-text rounded-none border-b border-input shadow-none",error:"rounded border border-error-base text-body-medium",dropdown:"rounded border border-primary"},focused:{true:"shadow-input-focus",false:"shadow-none"}},defaultVariants:{state:"default",focused:!1}});let d=class extends f{constructor(){super(),this.value="",this.options.length>0&&!this.value&&(this.value=this.options[0].value)}selectOption(e){this.value=e,this.searchText="",this.showDropdown=!1,this.filteredOptions=this.options,this.dispatchSelectEvents()}getTriggerContent(){return l`
      <span class="truncate">
        ${this.getSelectedLabel()||this.placeholder}
      </span>
      <yg-icon icon="yg:arrow-down-small"> </yg-icon>
    `}renderOption(e){return l`<div
      class="min-h-[37px] p-2 hover:bg-gray-100 cursor-pointer"
      @mousedown="${()=>this.selectOption(e.value)}"
    >
      ${e.label}
    </div>`}selectStyles(){return x}render(){const e=m(this==null?void 0:this.width),t=this.selectStyles()({state:this.disabled?"disabled":this.readonly?"readonly":this.error?"error":this.showDropdown?"dropdown":"default",focused:this.focused||this.showDropdown}),r=`${this.size*this.calcHeight}px`;return l`
      <select
        .focused=${this.focused||this.showDropdown}
        class="w-0 h-0 absolute"
      ></select>
      <div
        class=${t}
        style="width: ${this.fixSize?e:"auto"}; height: ${this.fixSize?r:"auto"}; position: ${"relative"}"
        id="container"
      >
        <!-- 選択されている項目のラベル表示 -->
        <div
          @click="${this.toggleDropdown}"
          class="w-full h-full flex items-center p-2 gap-3 justify-between"
          id="trigger"
        >
          ${this.getTriggerContent()}
        </div>
        <!-- カスタムドロップダウンリスト -->
        ${this.renderDropdown()}
      </div>
    `}getSelectedLabel(){const e=this.options.find(t=>t.value===this.value);return e?e.label:""}updated(e){super.updated(e),e.has("options")&&(!this.value||this.value==="")&&this.options.length>0&&(this.value=this.options[0].value)}[p](){return this.value}formStateRestoreCallback(e){this.value=e}[c](){return new b(()=>this)}};n([u()],d.prototype,"value",2);d=n([h("yg-select")],d);export{d as Y,x as s};
