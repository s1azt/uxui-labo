import{x as c}from"./lit-element-C4bBeaiV.js";import{t as y,E as h,g as d}from"./element-BmCHZ0P_.js";import{n as i}from"./property-BacG-Vag.js";import{c as a}from"./index-Br9a1yed.js";import"./addCollection-Coy8QxYf.js";import"./Icon-CzSa45Vk.js";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,t=(l,s,n,o)=>{for(var r=o>1?void 0:o?b(s,n):s,p=l.length-1,u;p>=0;p--)(u=l[p])&&(r=(o?u(s,n,r):u(r))||r);return o&&r&&g(s,n,r),r};const v=a({base:"flex w-full items-center justify-between gap-4 rounded bg-neutral-screen",variants:{size:{medium:"py-2 pl-4 pr-2",small:"px-2 py-[2px]"},linkType:{icon:"cursor-pointer",underline:"cursor-pointer"}},defaultVariants:{size:"medium"}}),m=a({base:"text-nowrap text-body",variants:{size:{medium:"text-headline-small",small:"text-label-large"}}},{twMerge:!1}),f=a({base:"inline-block text-body",variants:{size:{medium:"text-display-small",small:"text-headline-medium"},linkType:{icon:"",underline:"underline"}}},{twMerge:!1}),x=a({base:"w-full truncate",variants:{align:{center:"text-center",right:"text-right"}}});let e=class extends h{constructor(){super(...arguments),this.title="",this.unit="",this.value="",this.size="medium",this.comma=!1,this.linkType=void 0,this.align="center",this.backgroundColor=""}render(){const l=typeof this.value=="number"||!isNaN(Number(this.value))&&typeof this.value=="string",s=l?Number(this.value):this.value,n=this.backgroundColor?d(this.fixedTheme).colors[this.backgroundColor]||this.backgroundColor:"";return c`
      <div
        class="${v({size:this.size,linkType:this.linkType})}"
        style="${n?`background-color: ${n} !important;`:""}"
      >
        <span
          class="${m({size:this.size})}"
          style="white-space: nowrap;"
        >
          ${this.title}
        </span>
        <div class="${x({align:this.align})}">
          <span
            class="${f({size:this.size,linkType:this.linkType})}"
            style="${this.linkType==="underline"?"text-decoration-skip-ink: none;":""}"
          >
            ${this.comma&&l?s.toLocaleString():this.value}
          </span>
          <span class="text-body ${m({size:this.size})}">
            ${this.unit}
          </span>
        </div>
        ${this.linkType==="icon"?c`
              <yg-icon
                icon="yg:arrow-forward-with-line"
                height="${this.size==="medium"?24:12}"
                width="${this.size==="medium"?24:12}"
              ></yg-icon>
            `:null}
      </div>
    `}};t([i({type:String})],e.prototype,"title",2);t([i({type:String})],e.prototype,"unit",2);t([i({type:String})],e.prototype,"value",2);t([i({type:String})],e.prototype,"size",2);t([i({type:Boolean})],e.prototype,"comma",2);t([i({type:String,attribute:"link-type"})],e.prototype,"linkType",2);t([i({type:String})],e.prototype,"align",2);t([i({type:String,attribute:"background-color"})],e.prototype,"backgroundColor",2);e=t([y("yg-number-value-bar")],e);
