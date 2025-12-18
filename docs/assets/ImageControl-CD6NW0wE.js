import{i as p,x as r}from"./lit-element-C4bBeaiV.js";import{t as h,E as u}from"./element-BmCHZ0P_.js";import{n as l}from"./property-BacG-Vag.js";import{c as m}from"./index-Br9a1yed.js";import"./Button-Drw3qSHJ.js";import"./Icon-CzSa45Vk.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,n=(i,a,t,o)=>{for(var e=o>1?void 0:o?g(a,t):a,c=i.length-1,d;c>=0;c--)(d=i[c])&&(e=(o?d(a,t,e):d(e))||e);return o&&e&&f(a,t,e),e};const b=m({base:"flex h-5 w-[260px] flex-col items-center justify-center rounded-t bg-primary shadow",variants:{hasLabel:{false:"opacity-0"}}});let s=class extends u{constructor(){super(p`
      :host {
        display: inline-block;
        width: 260px;
      }
    `.cssText),this.index="0",this.editable=!1,this.showLabel=!1,this.updateDate="",this.src="",this.icon=""}render(){return r`
      <div class="h-56 flex-col justify-start items-start inline-flex">
        <div class="flex-col justify-end items-center flex">
          <div
            class="${b({hasLabel:this.showLabel})}"
          >
            <div
              class="text-white text-xs font-medium leading-none tracking-wide"
            >
              メイン画像
            </div>
          </div>
          <div class="hover:flex relative">
            ${this.editable?r`
                  <div
                    class="opacity-0 hover:opacity-100 flex absolute left-0 top-0 w-full h-full rounded-b bg-black bg-opacity-40 transition-all z-10 justify-center items-center"
                  >
                    <yg-button
                      size="medium"
                      variant="outlined"
                      @click=${this._uploadHandle}
                      ?transparent=${!0}
                      color="white"
                      >変更</yg-button
                    >
                    <input
                      type="file"
                      id="image${this.index}"
                      accept="image/jpeg"
                      class="hidden"
                      @change=${this._changeImage}
                    />
                  </div>
                `:r`<div></div>`}
            ${this.src===""?r`
                  <div
                    class="w-[260px] h-[164px] rounded-b bg-neutral flex justify-center items-center"
                  >
                    <p class=" font-medium text-white text-[40px] text-center">
                      <yg-icon
                        icon="${this.icon}"
                        height="100"
                        width="100"
                      ></yg-icon>
                    </p>
                  </div>
                `:r`
                  <img
                    class="w-[260px] h-[164px] rounded-b border border-split"
                    src="${this.src}"
                  />
                `}
          </div>
          <div
            class="self-stretch h-10 justify-between items-center inline-flex"
          >
            <div
              class="text-netural-dark text-xs font-medium leading-none tracking-wide"
            >
              ${this.updateDate} 更新
            </div>
            <yg-button
              size="small"
              variant="outlined"
              left-icon="mdi:trash-can-outline"
              @click=${this._clickDelete}
            ></yg-button>
          </div>
        </div>
      </div>
    `}_uploadHandle(){var t;const i=`image${this.index}`;((t=this.shadowRoot)==null?void 0:t.getElementById(i)).click()}_changeImage(i){var e;const t=(e=i.target.files)==null?void 0:e.item(0);if(!t)return;const o={bubbles:!0,composed:!0,detail:{file:t,index:this.index}};this.dispatchEvent(new CustomEvent("change-image",o))}_clickDelete(){const i={bubbles:!0,composed:!0,detail:{index:this.index}};this.dispatchEvent(new CustomEvent("click-delete",i))}};n([l({type:String})],s.prototype,"index",2);n([l({type:Boolean})],s.prototype,"editable",2);n([l({type:Boolean,attribute:"show-label"})],s.prototype,"showLabel",2);n([l({type:String,attribute:"update-date"})],s.prototype,"updateDate",2);n([l({type:String,reflect:!0})],s.prototype,"src",2);n([l({type:String})],s.prototype,"icon",2);s=n([h("yg-image-control")],s);
