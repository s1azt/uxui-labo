import{x as l}from"./lit-element-C4bBeaiV.js";import{t as h,E as c}from"./element-BmCHZ0P_.js";import{n as r}from"./property-BacG-Vag.js";import{c as u}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,s=(a,e,o,n)=>{for(var i=n>1?void 0:n?v(e,o):e,m=a.length-1,p;m>=0;m--)(p=a[m])&&(i=(n?p(e,o,i):p(i))||i);return n&&i&&y(e,o,i),i};const b=u({base:"relative flex justify-between border-b border-neutral px-2  pt-4",variants:{size:{medium:"px-2 pt-4",small:"px-2 pt-2"}},defaultVariants:{size:"medium",link:!1}}),d=u({base:"truncate text-nowrap text-body",variants:{size:{medium:"text-headline-small",small:"text-label-large"}}}),g=u({base:"items-center truncate text-center text-body",variants:{size:{medium:"text-display-small",small:"text-headline-medium"}}});let t=class extends c{constructor(){super(...arguments),this.title="",this.unit="",this.value="",this.size="medium",this.comma=!1,this.trend="up"}render(){const a=typeof this.value=="number"||!isNaN(Number(this.value))&&typeof this.value=="string",e=a?Number(this.value):this.value;return l`
      <div class="${b({size:this.size})}">
        <div class="w-full flex items-center justify-start gap-4">
          <span
            class="${d({size:this.size})}"
            style="white-space: nowrap;"
          >
            ${this.title}
          </span>
          <div
            class="w-full gap-2 flex items-end justify-end grow shrink basis-0"
          >
            <span class="${g({size:this.size})}">
              ${this.trend==="up"?l`<yg-icon
                    icon="mdi:arrow-up-bold"
                    class="text-others-green"
                    height="${this.size==="medium"?36:24}"
                    width="${this.size==="medium"?36:24}"
                    style="vertical-align: ${this.size==="medium"?"-5px":"-2px"};"
                  ></yg-icon>`:this.trend==="down"?l`<yg-icon
                      icon="mdi:arrow-down-bold"
                      class="text-error-base"
                      height="${this.size==="medium"?36:24}"
                      width="${this.size==="medium"?36:24}"
                      style="vertical-align: ${this.size==="medium"?"-5px":"-2px"};"
                    ></yg-icon>`:l`<yg-icon
                      icon="mdi:arrow-right-bold"
                      class="text-neutral-thin"
                      height="${this.size==="medium"?36:24}"
                      width="${this.size==="medium"?36:24}"
                      style="vertical-align: ${this.size==="medium"?"-5px":"-2px"};"
                    ></yg-icon>`}
              ${this.comma&&typeof e=="number"?Math.abs(e).toLocaleString():typeof e=="number"?Math.abs(e):this.value}
            </span>
            <span class="text-body ${d({size:this.size})}">
              ${this.unit}
            </span>
          </div>
        </div>
      </div>
    `}};s([r({type:String})],t.prototype,"title",2);s([r({type:String})],t.prototype,"unit",2);s([r({type:String})],t.prototype,"value",2);s([r({type:String})],t.prototype,"size",2);s([r({type:Boolean})],t.prototype,"comma",2);s([r({type:String})],t.prototype,"trend",2);t=s([h("yg-trend-bar")],t);
