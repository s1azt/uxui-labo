import{s as x,i as w,r as d,x as g}from"./lit-element-C4bBeaiV.js";import{g as h,t as $,E as k}from"./element-BmCHZ0P_.js";import{n as p}from"./property-BacG-Vag.js";import{r as v}from"./state-CLgbQenF.js";import{e as C}from"./query-DXShiZ7f.js";import{c as f}from"./index-Br9a1yed.js";import"./addCollection-Coy8QxYf.js";import{m as S}from"./delegate-CzAH-NQ8.js";import{r as u}from"./redispatch-event-saXtg2yW.js";import{m as N}from"./element-internals-CBp_Vcyn.js";import{m as z,g as _}from"./form-associated-C1RJQ55l.js";import{c as y}from"./calculateSize-BEzCU_f7.js";var E=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(t,e,a,n)=>{for(var s=n>1?void 0:n?O(e,a):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(s=(n?l(e,a,s):l(s))||s);return n&&s&&E(e,a,s),s};const A=S(z(N(k))),P=f({base:"relative h-2 rounded bg-gray-300",variants:{disabled:{true:"cursor-not-allowed opacity-60",false:"opacity-100"}}}),F=f({base:"absolute h-full rounded-l bg-primary",variants:{disabled:{true:"bg-disabled-bg",false:"bg-primary"}}});let r=class extends A{constructor(){var t,e,a,n,s,i,l,m,c,b;super(w`
      :host {
        display: inline;
      }

      input[type='range'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        height: 8px;
        background: transparent; /* 背景を透明にして見えなくする */
        position: absolute;
        z-index: 1;
      }
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        background-color: ${d((e=(t=h())==null?void 0:t.colors)==null?void 0:e.primary)}; /* ハンドルの青色 */
        border: none;
        border-radius: 4px; /* 角の丸みを小さく */
        cursor: pointer;
        position: relative;
        z-index: 2;
      }

      input[type='range']::-moz-range-thumb {
        width: 16px;
        height: 16px;
        background-color: ${d((n=(a=h())==null?void 0:a.colors)==null?void 0:n.primary)}; /* ハンドルの青色 */
        border: none;
        border-radius: 4px; /* 角の丸みを小さく */
        cursor: pointer;
        position: relative;
        z-index: 2;
      }
      /* 無効化時のスタイル */
      input[type='range']:disabled::-webkit-slider-thumb {
        background-color: ${d((l=(i=(s=h())==null?void 0:s.colors)==null?void 0:i.disabled)==null?void 0:l.bg)}; /* 無効時の灰色 */
        cursor: not-allowed;
      }

      input[type='range']:disabled::-moz-range-thumb {
        background-color: ${d((b=(c=(m=h())==null?void 0:m.colors)==null?void 0:c.disabled)==null?void 0:b.bg)}; /* 無効時の灰色 */
        cursor: not-allowed;
      }

      input[type='range']:disabled {
        cursor: not-allowed;
      }
    `.cssText),this.value=0,this.min=0,this.max=100,this.step=1,this.width="100%",this.marks=0,this.dirty=!1,this.focused=!1}reset(){this.dirty=!1}attributeChangedCallback(t,e,a){t==="value"&&this.dirty||super.attributeChangedCallback(t,e,a)}updated(t){super.updated(t),this.style.setProperty("width",String(y(this==null?void 0:this.width))||"auto");const e=this.value;this.value!==e&&(this.value=e)}render(){var s;const t=y(this==null?void 0:this.width),e=(Number(this.value)-this.min)/(this.max-this.min)*100,a=(this.max-this.min)/(this.marks-1),n=this.marks>1?Array.from({length:this.marks},(i,l)=>this.min+l*a).map(i=>Math.round(i)):[];return g`
      <div
        style="width: ${t};"
        class="${P({disabled:this.disabled})}"
      >
        <div
          class="${F({disabled:this.disabled})}"
          style="width: ${e}%;"
        ></div>
        <input
          type="range"
          .value="${(s=this.value)==null?void 0:s.toString()}"
          .min="${this.min.toString()}"
          .max="${this.max.toString()}"
          .step="${this.step.toString()}"
          @input="${this.handleInput}"
          ?disabled="${this.disabled}"
          @change=${this.handleChange}
        />
        <!-- 目盛りラベル -->
        <div class="flex justify-between pt-4">
          ${n.map(i=>g`<div
                class="flex flex-col gap-1 items-center"
                style="left: ${(i-this.min)/(this.max-this.min)*100}%"
              >
                <div class="h-[10px] w-[2px] bg-text-base-light"></div>
                <span class="text-body-medium text-text-base-light"
                  >${i}</span
                >
              </div>`)}
        </div>
      </div>
    `}redispatchEvent(t){u(this,t)}focus(){this.focus()}handleInput(t){this.value=Number(t.target.value),u(this,t)}handleChange(t){u(this,t)}[_](){return String(this.value)}formResetCallback(){const t=this.getAttribute("value");this.value=t?Number(t):0}formStateRestoreCallback(t){this.value=Number(t)}};r.shadowRootOptions={...x.shadowRootOptions,delegatesFocus:!0};o([p({type:Number})],r.prototype,"value",2);o([p({type:Number})],r.prototype,"min",2);o([p({type:Number})],r.prototype,"max",2);o([p({type:Number})],r.prototype,"step",2);o([p({type:String})],r.prototype,"width",2);o([p({type:Number})],r.prototype,"marks",2);o([v()],r.prototype,"dirty",2);o([v()],r.prototype,"focused",2);o([C("input")],r.prototype,"input",2);r=o([$("yg-slider")],r);
