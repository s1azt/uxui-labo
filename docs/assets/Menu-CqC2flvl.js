import{x as d}from"./lit-element-C4bBeaiV.js";import{t as h,E as u}from"./element-BmCHZ0P_.js";import{n as m}from"./property-BacG-Vag.js";import{c as p}from"./index-Br9a1yed.js";import{c as a}from"./calculateSize-BEzCU_f7.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,c=(i,e,n,r)=>{for(var t=r>1?void 0:r?b(e,n):e,l=i.length-1,o;l>=0;l--)(o=i[l])&&(t=(r?o(e,n,t):o(t))||t);return r&&t&&v(e,n,t),t};const f=p({base:"bg-white border border-divider rounded-lg overflow-auto flex flex-col"});let s=class extends u{constructor(){super(...arguments),this.width="200",this.maxHeight="300",this.handleItemClick=i=>{const e=i;this.dispatchEvent(new CustomEvent("menu-select",{detail:{item:e.detail.item,value:e.detail.value},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("menu-item-click",this.handleItemClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("menu-item-click",this.handleItemClick)}render(){const i=a(this.width),e=a(this.maxHeight);return d`
      <div
        class="${f()}"
        style="width: ${i}; max-height: ${e};"
        role="menu"
      >
        <slot></slot>
      </div>
    `}};c([m({type:String})],s.prototype,"width",2);c([m({type:String,attribute:"max-height"})],s.prototype,"maxHeight",2);s=c([h("yg-menu")],s);export{s as Y};
