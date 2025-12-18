import{i as c,x as h}from"./lit-element-C4bBeaiV.js";import{t as y,E as x}from"./element-BmCHZ0P_.js";import{n as g}from"./property-BacG-Vag.js";import{c as n}from"./index-Br9a1yed.js";var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(r,e,s,l)=>{for(var t=l>1?void 0:l?b(e,s):e,i=r.length-1,p;i>=0;i--)(p=r[i])&&(t=(l?p(e,s,t):p(t))||t);return l&&t&&m(e,s,t),t};const u=n({base:"flex items-center justify-center gap-1 rounded-full",variants:{color:{gray:"",error:"",green:"",warning:"",primary:""},type:{dark:"",light:""},size:{small:"h-6 px-[10px] py-1 text-label-small min-w-[70px]",medium:"h-8 px-2 py-1 text-label-large min-w-[96px]",large:"h-10 px-4 py-1 text-headline-small min-w-[128px]"}},compoundVariants:[{color:"gray",type:"light",class:" bg-back-ground-base text-text-base-light"},{color:"green",type:"light",class:" bg-others-green-light text-others-green"},{color:"warning",type:"light",class:"bg-others-yellow text-text-base-light"},{color:"primary",type:"light",class:" bg-back-ground-primary-light text-primary"},{color:"error",type:"light",class:" bg-back-ground-error-light text-error-text"},{color:"gray",type:"dark",class:"bg-back-ground-black text-text-white"},{color:"green",type:"dark",class:"bg-others-green text-text-white"},{color:"warning",type:"dark",class:"bg-others-yellow text-text-base"},{color:"primary",type:"dark",class:"bg-back-ground-primary text-text-white"},{color:"error",type:"dark",class:" bg-back-ground-error text-text-white"}]},{twMerge:!1});n({variants:{size:{small:"size-[14px]",medium:"size-[18px]",large:"size-6"}}});let a=class extends x{constructor(){super(c`
      :host {
        display: inline-block;
      }
    `.cssText),this.color="gray",this.type="light",this.size="small"}updated(r){if(super.updated(r),r.has("size")){const[e,s]=(()=>{switch(this.size){case"small":return["64px","26px"];case"medium":return["128px","32px"];case"large":return["180px","40px"]}})();this.style.setProperty("min-width",String(e)||"auto"),this.style.setProperty("height",String(s)||"auto")}}render(){return h`
      <div
        class="${u({color:this.color,type:this.type,size:this.size})}"
      >
        <!-- 文字を折り返すようにする -->
        <span class="truncate">
          <slot></slot>
        </span>
      </div>
    `}};o([g({type:String})],a.prototype,"color",2);o([g({type:String})],a.prototype,"type",2);o([g({type:String})],a.prototype,"size",2);a=o([y("yg-status-label")],a);export{a as Y,u as s};
