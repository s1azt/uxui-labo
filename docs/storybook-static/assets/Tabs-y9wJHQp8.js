import{t as n}from"./element-BmCHZ0P_.js";import{x as o}from"./lit-element-C4bBeaiV.js";import{N as c}from"./element-BHnNw0zf.js";import{Y as p,a as v,t as m}from"./Tabs-DTd4m-RM.js";import{c as h}from"./index-Br9a1yed.js";var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(s,e,t,a)=>{for(var r=a>1?void 0:a?f(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(r=(a?d(e,t,r):d(r))||r);return a&&r&&x(e,t,r),r};let i=class extends c(p){};i=u([n("nk-tab")],i);var w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,P=(s,e,t,a)=>{for(var r=a>1?void 0:a?_(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(r=(a?d(e,t,r):d(r))||r);return a&&r&&w(e,t,r),r};const g=h({base:"relative border border-transparent line-clamp-2 flex h-12 min-w-[100px] items-center justify-center whitespace-pre-wrap px-2 text-center",variants:{tabPattern:{tabSelected:"rounded-t-md border-x-border-base border-t-border-base bg-white text-label-medium text-primary",tabUnselected:"text-body-medium text-text-base-light border-b-border-base"},disabled:{true:"!hover:text-body-small !hover:text-text-disabled !cursor-not-allowed !border-none !text-body-small !text-text-disabled",false:"cursor-pointer"},variant:{fullWidth:"flex-1 shrink grow",standard:"w-auto shrink-0 grow-0",scrollable:"w-auto shrink-0 grow-0"}}});let b=class extends c(v){render(){const s=m({variant:this.variant,centered:this.centered});return o`
      <div class="flex flex-col w-full">
        <div class="${s}">
          ${this.tabs.map(e=>{const t=g({tabPattern:e.name===this.selected?"tabSelected":"tabUnselected",disabled:e.disabled,variant:this.variant});return o`
              <div
                class="${t}"
                @click=${()=>!e.disabled&&this.selectTab(e.name)}
              >
                <p>${e.label||e.name}</p>
              </div>
            `})}
        </div>
        
        <div class="rounded-b-md border border-t-transparent border-b-border-base border-l-border-base border-r-border-base shadow-md p-4">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `}};b=P([n("nk-tabs")],b);export{i as N,b as a};
