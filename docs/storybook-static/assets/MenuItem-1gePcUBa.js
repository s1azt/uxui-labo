import{i as m,x as l}from"./lit-element-C4bBeaiV.js";import{t as d,E as b}from"./element-BmCHZ0P_.js";import{n as a}from"./property-BacG-Vag.js";import{r as c}from"./state-CLgbQenF.js";import{e as p}from"./query-DXShiZ7f.js";import{c as f}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var g=Object.defineProperty,y=Object.getOwnPropertyDescriptor,t=(s,o,r,n)=>{for(var i=n>1?void 0:n?y(o,r):o,u=s.length-1,h;u>=0;u--)(h=s[u])&&(i=(n?h(o,r,i):h(i))||i);return n&&i&&g(o,r,i),i};const v=f({base:"flex items-center gap-2 px-2 py-3 cursor-pointer select-none border-b border-divider w-full last:border-b-0 transition-colors",variants:{disabled:{true:"opacity-50 cursor-not-allowed pointer-events-none text-disabled-text",false:"text-text-base text-[16px] leading-[24px]"},selected:{true:"bg-back-ground-primary-light text-primary",false:"bg-white"},hover:{true:"hover:bg-back-ground-primary-light",false:""},hasSubmenu:{true:"justify-between",false:""}},defaultVariants:{disabled:!1,selected:!1,hover:!0,hasSubmenu:!1}});let e=class extends b{constructor(){super(m`
      :host {
        display: block;
      }
    `.cssText),this.value="",this.disabled=!1,this.selected=!1,this.icon="",this.hasSubmenu=!1,this.showSubmenu=!1,this.handleClick=s=>{if(this.disabled){s.preventDefault();return}if(this.hasSubmenu){s.stopPropagation(),this.showSubmenu=!this.showSubmenu;return}this.dispatchEvent(new CustomEvent("menu-item-click",{detail:{value:this.value,item:this},bubbles:!0,composed:!0}))}}firstUpdated(){this.checkSubmenu()}checkSubmenu(){if(this.submenuSlot){const s=this.submenuSlot.assignedElements();this.hasSubmenu=s.length>0}}render(){return l`
      <div
        class="${v({disabled:this.disabled,selected:this.selected,hover:!this.disabled,hasSubmenu:this.hasSubmenu})}"
        @click="${this.handleClick}"
        role="menuitem"
        aria-disabled="${this.disabled}"
        aria-selected="${this.selected}"
      >
        <!-- 左側のコンテンツ -->
        ${this.icon?l`<yg-icon
              icon="${this.icon}"
              class="text-base"
              width="16"
              height="16"
            ></yg-icon>`:l`<slot name="prefix"></slot>`}

        <!-- メインコンテンツ -->
        <span class="flex-1 truncate">
          <slot></slot>
        </span>

        <!-- 右側のコンテンツ -->
        <slot name="suffix"></slot>

        <!-- サブメニューインジケーター -->
        ${this.hasSubmenu?l`<yg-icon
              icon="yg:arrow-right-small"
              class="text-base"
              width="16"
              height="16"
            ></yg-icon>`:null}
      </div>

      <!-- サブメニュー -->
      ${this.hasSubmenu&&this.showSubmenu?l`<div class="pl-4">
            <slot name="submenu" @slotchange="${this.checkSubmenu}"></slot>
          </div>`:l`<slot
            name="submenu"
            @slotchange="${this.checkSubmenu}"
            style="display: none;"
          ></slot>`}
    `}};t([a({type:String})],e.prototype,"value",2);t([a({type:Boolean,reflect:!0})],e.prototype,"disabled",2);t([a({type:Boolean,reflect:!0})],e.prototype,"selected",2);t([a({type:String})],e.prototype,"icon",2);t([c()],e.prototype,"hasSubmenu",2);t([c()],e.prototype,"showSubmenu",2);t([p('slot[name="submenu"]')],e.prototype,"submenuSlot",2);e=t([d("yg-menu-item")],e);export{e as Y};
