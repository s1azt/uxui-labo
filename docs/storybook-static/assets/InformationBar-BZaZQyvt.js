import{x as c}from"./lit-element-C4bBeaiV.js";import{t as p,E as m}from"./element-BmCHZ0P_.js";import{n as f}from"./property-BacG-Vag.js";import{c as u}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var g=Object.defineProperty,x=Object.getOwnPropertyDescriptor,a=(s,t,o,e)=>{for(var r=e>1?void 0:e?x(t,o):t,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=(e?i(t,o,r):i(r))||r);return e&&r&&g(t,o,r),r};const v=u({base:"relative inline-flex h-[30px] w-full items-center  justify-center gap-3 rounded-lg px-3 py-2 ",variants:{color:{warning:"bg-error-bg text-error-text",default:"bg-neutral text-neutral-dark-text"}}});let l=class extends m{constructor(){super(...arguments),this.color="default"}informationBarStyle(){return v}render(){return c`
      <div class="${this.informationBarStyle()({color:this.color})}">
        <p class="text-label-medium truncate">
          <slot></slot>
        </p>
        <yg-icon
          @click="${()=>this.remove()}"
          icon="yg:close"
          color="text-base-light"
          class="cursor-pointer absolute right-[4px]"
        >
        </yg-icon>
      </div>
    `}};a([f({type:String})],l.prototype,"color",2);l=a([p("yg-information-bar")],l);export{v as B,l as Y};
