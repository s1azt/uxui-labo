import{x as p}from"./lit-element-C4bBeaiV.js";import{t as v,E as u}from"./element-BmCHZ0P_.js";import{n as m}from"./property-BacG-Vag.js";import{r as g}from"./state-CLgbQenF.js";import{c as n}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,f=(t,s,a,i)=>{for(var e=i>1?void 0:i?x(s,a):s,r=t.length-1,l;r>=0;r--)(l=t[r])&&(e=(i?l(s,a,e):l(e))||e);return i&&e&&y(s,a,e),e};let h=class extends u{constructor(){super(...arguments),this.label=""}render(){return p`<slot></slot>`}};f([m({type:String})],h.prototype,"label",2);h=f([v("yg-progress-step")],h);var S=Object.defineProperty,w=Object.getOwnPropertyDescriptor,c=(t,s,a,i)=>{for(var e=i>1?void 0:i?w(s,a):s,r=t.length-1,l;r>=0;r--)(l=t[r])&&(e=(i?l(s,a,e):l(e))||e);return i&&e&&S(s,a,e),e};const b={circle:n({base:"flex size-8 items-center justify-center rounded-full border text-body-medium",variants:{state:{completed:"border-primary bg-primary text-white",active:"border-primary bg-white text-primary",inactive:"text-base-light border-back-ground-base bg-back-ground-base"}}}),line:n({base:"mb-5 flex h-1 flex-1 rounded-full",variants:{active:{true:"bg-primary",false:"bg-table-bg-th-default"},supportMobile:{true:"md:mb-5 mb-0",false:"mb-5"}}}),label:n({base:"text-body-medium",variants:{state:{completed:"text-body",active:"text-primary",inactive:"text-text-base-light"},supportMobile:{true:"md:block hidden",false:"block"}}},{twMerge:!1}),mobileActiveLabel:n({base:"text-body-medium text-primary text-center md:hidden block"})};let o=class extends u{constructor(){super(...arguments),this.activeStep=1,this.gap=4,this.supportMobile=!1,this.steps=[]}render(){var a;const t=this.activeStep>this.steps.length&&this.steps.length>0,s=((a=this.steps.find((i,e)=>e+1===this.activeStep))==null?void 0:a.getAttribute("label"))||"";return p`
      <div class="relative flex flex-col" style="gap: ${this.gap*4}px;">

          <!-- Mobile: Active Label at the top (only when supportMobile is true) -->
          ${this.supportMobile&&s?p`
            <div class=${b.mobileActiveLabel()}>
              ${s}
            </div>
          `:""}
          
          <div class="flex items-center w-full">
            ${this.steps.map((i,e)=>{const r=e+1,l=r<this.activeStep,d=r===this.activeStep;return p`
                <div class="flex flex-1 flex-col items-center text-center gap-2">
                  <!-- Circle -->
                  <div
                    class=${b.circle({state:l?"completed":d?"active":"inactive"})}
                  >
                    ${l?p`<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_17727_1349"
                            style="mask-type:alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_17727_1349)">
                            <path
                              d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z"
                              fill="white"
                            />
                          </g>
                        </svg> `:r}
                  </div>

                  <!-- Label -->
                  <span
                    class=${b.label({state:l?"completed":d?"active":"inactive",supportMobile:this.supportMobile})}
                  >
                    ${i.getAttribute("label")}
                  </span>
                </div>

                <!-- Line -->
                ${e<this.steps.length-1?p`
                      <div
                        class=${b.line({active:r<this.activeStep,supportMobile:this.supportMobile})}
                      ></div>
                    `:""}
              `})}
          </div>
       
        
        <!-- 全ステップ完了時のコンテンツ -->
        ${t?p`
          <slot name="completion"></slot>
        `:""}
        
        <!-- Slot for children -->
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}updated(t){super.updated(t),t.has("activeStep")&&this.handleSlotChange()}handleSlotChange(){this.steps=Array.from(this.children).filter(t=>t instanceof h),this.steps.forEach((t,s)=>{t.style.display=this.activeStep===s+1?"block":"none"})}};c([m({type:Number,attribute:"active-step"})],o.prototype,"activeStep",2);c([m({type:Number})],o.prototype,"gap",2);c([m({type:Boolean,attribute:"support-mobile"})],o.prototype,"supportMobile",2);c([g()],o.prototype,"steps",2);o=c([v("yg-progress-stepper")],o);export{o as Y,h as a};
