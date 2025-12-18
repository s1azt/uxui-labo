import{x as c}from"./lit-element-C4bBeaiV.js";import{t as x,E as d}from"./element-BmCHZ0P_.js";import{n as r}from"./property-BacG-Vag.js";import{c as m}from"./index-Br9a1yed.js";var g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,s=(i,a,p,l)=>{for(var t=l>1?void 0:l?h(a,p):a,n=i.length-1,o;n>=0;n--)(o=i[n])&&(t=(l?o(a,p,t):o(t))||t);return l&&t&&g(a,p,t),t};const f=m({base:"mx-auto flex flex-col items-center justify-center w-full",variants:{size:{large:"md:max-w-[400px] md:min-h-[400px] gap-6",medium:"md:max-w-[300px] md:min-h-[300px] gap-5",small:"md:max-w-[200px] md:min-h-[200px] gap-3"}}}),y=m({base:"flex items-center justify-center self-stretch",variants:{size:{large:"h-[260px]",medium:"h-[190px]",small:"md:max-w-[180px]"}}}),u=m({base:"text-text-base font-bold text-center",variants:{size:{large:"text-headline-small",medium:"text-label-large",small:"text-label-small"}}}),b=m({base:"text-text-base-light text-center whitespace-nowrap",variants:{size:{large:"text-body-large",medium:"text-body-medium",small:"text-body-small"}}});let e=class extends d{constructor(){super(...arguments),this.title="",this.description="",this.image="",this.size="medium"}render(){return c`
      <div class="${f({size:this.size})}">
        ${this.image?c`
          <div class="${y({size:this.size})}">
            <img
                src="${this.image}"
                alt="Empty state illustration"
                class="max-w-full max-h-full object-contain"
            />
          </div>
        `:""}
        <!-- テキスト部分 -->
        <div class="flex flex-col items-center justify-center gap-2 self-stretch">
          <p class="${u({size:this.size})}">
            ${this.title}
          </p>
          <p class="${b({size:this.size})}">
            ${this.description.split(`
`).map(i=>c`${i}<br />`)}
          </p>
        </div>

        <!-- アクション部分（オプション） -->
        <slot name="action"></slot>
      </div>
    `}};s([r({type:String})],e.prototype,"title",2);s([r({type:String})],e.prototype,"description",2);s([r({type:String})],e.prototype,"image",2);s([r({type:String})],e.prototype,"size",2);e=s([x("yg-empty-state")],e);export{e as Y};
