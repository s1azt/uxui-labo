import{i as h,x as p}from"./lit-element-C4bBeaiV.js";import{t as c,E as m,g as u}from"./element-BmCHZ0P_.js";import{n as a}from"./property-BacG-Vag.js";import{c as b}from"./index-Br9a1yed.js";import"./addCollection-Coy8QxYf.js";var g=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(d,e,t,i)=>{for(var r=i>1?void 0:i?w(e,t):e,l=d.length-1,n;l>=0;l--)(n=d[l])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&g(e,t,r),r};const f=b({base:"h-full",variants:{color:{primary:"bg-primary text-white",white:"bg-white text-black"},gradient:{true:"",false:""},shadow:{none:"shadow-none",small:"shadow-1",medium:"shadow-2",large:"shadow-3"},rounded:{none:"rounded-none",small:"rounded-sm",medium:"rounded",large:"rounded-lg",xl:"rounded-xl",full:"rounded-full"},border:{true:"border border-border-base",false:"border-0"}},compoundVariants:[{color:"primary",gradient:!0,class:"bg-gradient-to-b from-others-sidebar-top to-others-sidebar-bottom text-white"}],defaultVariants:{shadow:"small",rounded:"medium"}},{twMerge:!1});let o=class extends m{constructor(){super(h`
      :host {
        width: 100%;
      }
    `.cssText),this.color="white",this.gradient=!1,this.shadow="small",this.rounded="medium",this.border=!1}cardStyle(){return f}render(){const d=this.color==="white"||this.color==="primary",e=d?this.color:"white",t=!d&&this.color?u(this.fixedTheme).colors[this.color]||this.color:"";return p`
      <div
        part="wrapper"
        class="${this.cardStyle()({color:e,gradient:this.gradient,shadow:this.shadow,rounded:this.rounded,border:this.border})}"
        style="${t?`background-color: ${t} !important;`:""}"
      >
        <slot name="media"></slot>
        <div class="px-6 py-4" part="content">
          <slot></slot>
        </div>
      </div>
    `}};s([a({type:String})],o.prototype,"color",2);s([a({type:Boolean})],o.prototype,"gradient",2);s([a({type:String})],o.prototype,"shadow",2);s([a({type:String})],o.prototype,"rounded",2);s([a({type:Boolean})],o.prototype,"border",2);o=s([c("yg-card")],o);export{o as Y,f as c};
