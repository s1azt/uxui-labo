import{x as f}from"./lit-element-C4bBeaiV.js";import{t as m,E as p}from"./element-BmCHZ0P_.js";import{n as h}from"./property-BacG-Vag.js";import{c as a}from"./index-Br9a1yed.js";import"./Button-Drw3qSHJ.js";var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=(s,l,r,t)=>{for(var e=t>1?void 0:t?u(l,r):l,i=s.length-1,n;i>=0;i--)(n=s[i])&&(e=(t?n(l,r,e):n(e))||e);return t&&e&&g(l,r,e),e};const d=a({base:"w-full h-11 justify-start items-center gap-2 inline-flex"}),y=a({base:"w-full text-display-small text-primary truncate"},{twMerge:!1});let o=class extends p{constructor(){super(...arguments),this.title=""}titleContainerStyle(){return d}titleTextStyle(s){return y(s)}render(){return f`
      <div class="${this.titleContainerStyle()()}">
        <slot name="left-section"></slot>
        <div class="${this.titleTextStyle({})}">
          ${this.title}
          <!-- タイトルのスロット -->
        </div>
        <slot
          @slotchange="${this.handleSlotChange}"
          name="right-section"
        ></slot>
      </div>
    `}handleSlotChange(s){s.target.assignedNodes().forEach(t=>{t instanceof HTMLElement&&(t.style.marginLeft="auto")})}};c([h({type:String})],o.prototype,"title",2);o=c([m("yg-title")],o);export{o as Y,d as t};
