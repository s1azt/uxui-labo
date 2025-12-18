import{i as f,x as b}from"./lit-element-C4bBeaiV.js";import{t as d,E as h}from"./element-BmCHZ0P_.js";import{n as l}from"./property-BacG-Vag.js";import{r as m}from"./state-CLgbQenF.js";import{e as u}from"./query-DXShiZ7f.js";import{c}from"./index-Br9a1yed.js";import{S as y}from"./constants-rkZZCW-e.js";var x=Object.defineProperty,v=Object.getOwnPropertyDescriptor,e=(r,s,a,i)=>{for(var o=i>1?void 0:i?v(s,a):s,p=r.length-1,n;p>=0;p--)(n=r[p])&&(o=(i?n(s,a,o):n(o))||o);return i&&o&&x(s,a,o),o};const g=c({base:"z-50 rounded bg-back-ground-black p-2 text-body-small opacity-0 shadow-lg transition-opacity duration-200",variants:{position:{top:"-translate-x-1/2 transform",bottom:"-translate-x-1/2 transform",left:"-translate-y-1/2 transform",right:"-translate-y-1/2 transform"},visible:{true:"visible opacity-100",false:"invisible opacity-0"},storybook:{true:"absolute",false:"fixed"},color:{black:"border border-back-ground-black bg-back-ground-black text-white",white:"border border-border-base bg-white text-text-base"}},defaultVariants:{position:"top",visible:!1},compoundVariants:[{storybook:!0,position:"top",class:"bottom-full left-1/2 mb-4 -translate-x-1/2"},{storybook:!0,position:"bottom",class:"left-1/2 top-full mt-4 -translate-x-1/2"},{storybook:!0,position:"left",class:"right-full top-1/2 mr-4 -translate-y-1/2"},{storybook:!0,position:"right",class:"left-full top-1/2 ml-4 -translate-y-1/2"}]},{twMerge:!1}),k=c({base:"invisible absolute z-20 opacity-0 transition-opacity duration-200 before:absolute after:absolute",variants:{position:{top:"right-1/2 top-[calc(100%-1px)] mb-5 -translate-x-1/2 transform before:top-px",bottom:"bottom-[calc(100%-1px)] left-1/2 mt-5 translate-x-1/2 rotate-180 transform before:top-px",left:"left-[calc(100%-1px)] top-1/2 mr-5 translate-y-1/2 rotate-[270deg] transform before:top-px",right:"bottom-1/2 right-[calc(100%-1px)] ml-5 -translate-y-1/2 rotate-90 transform before:top-px"},visible:{true:"visible opacity-100",false:"invisible opacity-0"},color:{black:"before:border-t-back-ground-black after:border-t-back-ground-black",white:"before:border-t-border-base after:border-t-white"}},defaultVariants:{position:"top"}});let t=class extends h{constructor(){super(f`
      :host {
        display: inline-block;
      }
    `.cssText),this.open=!1,this.position="top",this.content="",this.color="black",this.tooltipStyles=""}showTooltip(){this.open=!0}hideTooltip(){this.open=!1}updated(r){super.updated(r)}render(){return b`
      <div
      class=${"relative"}
        @mouseenter="${this.showTooltip}"
        @mouseleave="${this.hideTooltip}"
        @focusin="${this.showTooltip}"
        @focusout="${this.hideTooltip}"
        @click="${this.showTooltip}"
        tabindex="0"
        aria-describedby="tooltip-content"
      >
        <slot></slot>

        <div
          id="tooltip-content"
          class="tooltip ${g({position:this.position,visible:this.open,storybook:y,color:this.color})}"
          style="${this.tooltipStyles}"
          role="tooltip"
        >
          ${this.content?b`<p class="whitespace-pre-line">${this.content.replace(/\\n/g,`
`)}</p>`:b`<slot name="content"></slot>`}

          <div
            class="w-[7px] h-[7px] before:border-x-[10px] before:border-t-[10px] before:border-transparent before:top-0 after:border-x-[10px] after:border-t-[10px] after:border-transparent ${k({position:this.position,visible:this.open,color:this.color})}"
          ></div>
        </div>
      </div>
    `}};e([l({type:Boolean,reflect:!0})],t.prototype,"open",2);e([l({type:String})],t.prototype,"position",2);e([l({type:String})],t.prototype,"content",2);e([l({type:String})],t.prototype,"color",2);e([m()],t.prototype,"tooltipStyles",2);e([u("slot")],t.prototype,"slotElement",2);t=e([d("yg-tooltip")],t);export{t as Y};
