import{x as d}from"./lit-element-C4bBeaiV.js";import{n as c}from"./property-BacG-Vag.js";import{c as a}from"./index-Br9a1yed.js";import{r as f}from"./state-CLgbQenF.js";var v=Object.defineProperty,h=(s,i,o,e)=>{for(var t=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(t=n(i,o,t)||t);return t&&v(i,o,t),t};const g=a({base:"w-full"});function O(s){class i extends s{constructor(){super(...arguments),this.multiple=!1,this.dividerMode="between",this.isUpdatingSlot=!1}_getStyles(){return g}toggleAccordion(e){Array.from(this.querySelectorAll(":scope >[data-accordion-item]")).forEach(r=>{r===e?r.toggle():this.multiple||r.close()})}_createDivider(){const e=document.createElement("yg-divider");return e.setAttribute("data-accordion-divider",""),e}handleSlotChange(){if(this.dividerMode==="none"||this.isUpdatingSlot)return;this.isUpdatingSlot=!0,Array.from(this.querySelectorAll(":scope >[data-accordion-item]")).forEach((t,r)=>{var n,p;if(this.dividerMode==="between"&&r>0&&!((n=t.previousElementSibling)!=null&&n.hasAttribute("data-accordion-divider"))){const l=this._createDivider();t.insertAdjacentElement("beforebegin",l)}if(this.dividerMode==="after"&&!((p=t.nextElementSibling)!=null&&p.hasAttribute("data-accordion-divider"))){const l=this._createDivider();t.insertAdjacentElement("afterend",l)}}),this.isUpdatingSlot=!1}render(){const e=this._getStyles();return d`
        <div class="${e()}">
          <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
      `}firstUpdated(){this.addEventListener("toggle-item",e=>{e.stopPropagation();const t=e;this.toggleAccordion(t.detail.item)})}}return h([c({type:Boolean})],i.prototype,"multiple"),h([c({type:String,attribute:"divider-mode"})],i.prototype,"dividerMode"),i}var m=Object.defineProperty,u=(s,i,o,e)=>{for(var t=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(t=n(i,o,t)||t);return t&&m(i,o,t),t};const y={root:a({base:"",variants:{open:{true:"",false:"hover:bg-others-primary-hover"}}}),header:a({base:"p-4 flex cursor-pointer items-center justify-between rounded"}),contentWrapper:a({base:"pb-4 px-4"})};function E(s){class i extends s{constructor(...e){super(...e),this.isOpen=!1,this.defaultOpen=!1,this.setAttribute("data-accordion-item","")}_getStyles(){return y}toggle(){this.isOpen=!this.isOpen}close(){this.isOpen=!1}handleToggle(e){this.dispatchEvent(new CustomEvent("toggle-item",{detail:{item:this},bubbles:!0,composed:!0}))}_renderHeader(){const e=this._getStyles();return d`
        <div class="${e.header()}">
          <slot name="title"></slot>
          ${this._renderIcon()}
        </div>
      `}_renderIcon(){return d`
        <yg-icon
          icon="material-symbols:keyboard-arrow-right"
          rotate="${this.isOpen?"270deg":"90deg"}"
          style="height: 24px;"
        ></yg-icon>
      `}_renderContent(){const e=this._getStyles();return d`
        <div class="${e.contentWrapper()}">
          <slot name="content"></slot>
        </div>
      `}firstUpdated(e){super.firstUpdated(e),this.defaultOpen&&(this.isOpen=!0)}render(){const e=this._getStyles();return d`
        <div class="${e.root({open:this.isOpen})}">
          <div @click="${this.handleToggle}">${this._renderHeader()}</div>

          <div
            class="grid transition-[grid-template-rows] duration-300 ease-in-out items-start overflow-hidden ${this.isOpen?"grid-rows-[1fr]":"grid-rows-[0fr]"}"
          >
            <div class="min-h-0">${this._renderContent()}</div>
          </div>
        </div>
      `}}return u([f()],i.prototype,"isOpen"),u([c({type:Boolean,attribute:"default-open"})],i.prototype,"defaultOpen"),i}export{O as A,E as a,g as b,y as c};
