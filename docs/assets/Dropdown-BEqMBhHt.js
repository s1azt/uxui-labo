import{i as h,x as u}from"./lit-element-C4bBeaiV.js";import{t as m,E as f}from"./element-BmCHZ0P_.js";import{n as r}from"./property-BacG-Vag.js";import{r as b}from"./state-CLgbQenF.js";import{e as c}from"./query-DXShiZ7f.js";import{c as a}from"./index-Br9a1yed.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(e,t,i,o)=>{for(var n=o>1?void 0:o?v(t,i):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(n=(o?d(t,i,n):d(n))||n);return o&&n&&g(t,i,n),n};const w=a({base:"relative inline-block"}),k=a({base:"absolute z-50 mt-1",variants:{placement:{bottom:"top-full left-0","bottom-start":"top-full left-0","bottom-end":"top-full right-0",top:"bottom-full left-0","top-start":"bottom-full left-0","top-end":"bottom-full right-0",left:"right-full top-0",right:"left-full top-0"},open:{true:"visible opacity-100",false:"invisible opacity-0 pointer-events-none"}},defaultVariants:{placement:"bottom-start",open:!1}});let s=class extends f{constructor(){super(h`
      :host {
        display: inline-block;
      }
    `.cssText),this.open=!1,this.placement="bottom-start",this.hoist=!1,this.closeOnOutsideClick=!0,this.closeOnSelect=!0,this.distance=4,this.dropdownPosition={top:0,left:0},this.handleTriggerClick=e=>{e.stopPropagation(),this.toggle()},this.handleOutsideClick=e=>{this.contains(e.target)||this.hide()},this.handleMenuItemClick=()=>{this.closeOnSelect&&this.hide()}}connectedCallback(){super.connectedCallback(),this.closeOnOutsideClick&&document.addEventListener("click",this.handleOutsideClick),this.addEventListener("menu-item-click",this.handleMenuItemClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleOutsideClick),this.removeEventListener("menu-item-click",this.handleMenuItemClick)}show(){this.open||(this.open=!0,this.updateDropdownPosition(),this.dispatchEvent(new CustomEvent("dropdown-show",{detail:{dropdown:this},bubbles:!0,composed:!0})))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("dropdown-hide",{detail:{dropdown:this},bubbles:!0,composed:!0})))}toggle(){this.open?this.hide():this.show()}updateDropdownPosition(){this.hoist&&this.updateComplete.then(()=>{var n;const e=(n=this.triggerSlot)==null?void 0:n.assignedElements()[0];if(!e)return;const t=e.getBoundingClientRect();let i=0,o=0;switch(this.placement){case"bottom":case"bottom-start":i=t.bottom+this.distance,o=t.left;break;case"bottom-end":i=t.bottom+this.distance,o=t.right;break;case"top":case"top-start":i=t.top-this.distance,o=t.left;break;case"top-end":i=t.top-this.distance,o=t.right;break;case"right":i=t.top,o=t.right+this.distance;break;case"left":i=t.top,o=t.left-this.distance;break}this.dropdownPosition={top:i,left:o}})}render(){const e=this.hoist?`position: fixed; top: ${this.dropdownPosition.top}px; left: ${this.dropdownPosition.left}px;`:"";return u`
      <div class="${w()}">
        <!-- トリガー -->
        <div @click="${this.handleTriggerClick}" id="trigger-slot">
          <slot name="trigger"></slot>
        </div>

        <!-- ドロップダウン内容 -->
        <div
          id="dropdown-content"
          class="${k({placement:this.placement,open:this.open})}"
          style="${e}"
        >
          <slot></slot>
        </div>
      </div>
    `}updated(e){super.updated(e),e.has("open")&&this.open&&this.hoist&&this.updateDropdownPosition()}};l([r({type:Boolean,reflect:!0})],s.prototype,"open",2);l([r({type:String})],s.prototype,"placement",2);l([r({type:Boolean})],s.prototype,"hoist",2);l([r({type:Boolean,attribute:"close-on-outside-click"})],s.prototype,"closeOnOutsideClick",2);l([r({type:Boolean,attribute:"close-on-select"})],s.prototype,"closeOnSelect",2);l([r({type:Number})],s.prototype,"distance",2);l([c("#trigger-slot")],s.prototype,"triggerSlot",2);l([c("#dropdown-content")],s.prototype,"dropdownContent",2);l([b()],s.prototype,"dropdownPosition",2);s=l([m("yg-dropdown")],s);export{s as Y};
