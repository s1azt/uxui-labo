import{i as c,x as d}from"./lit-element-C4bBeaiV.js";import{t as g,E as f}from"./element-BmCHZ0P_.js";import{n as s}from"./property-BacG-Vag.js";import{c as b}from"./index-Br9a1yed.js";import{c as a}from"./calculateSize-BEzCU_f7.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,l=(r,i,h,o)=>{for(var t=o>1?void 0:o?y(i,h):i,p=r.length-1,n;p>=0;p--)(n=r[p])&&(t=(o?n(i,h,t):n(t))||t);return o&&t&&u(i,h,t),t};const m=b({base:"flex items-center truncate border-[0.5px] p-2 text-left text-body-medium",variants:{align:{left:"text-left",center:"text-center",right:"text-right"},color:{default:"border-table-border-th-default bg-table-bg-th-default text-base",primary:"border-white bg-primary text-white"},fontSize:{medium:"!text-[14px]",large:"!text-[16px]"}}},{twMerge:!1});let e=class extends f{constructor(){super(c`
      :host {
        display: inline-block;
      }
    `.cssText),this.align="left",this.width="120px",this.height="48px",this.color="default",this.fontSize="medium"}updated(r){super.updated(r),this.style.setProperty("width",String(a(this==null?void 0:this.width))||"auto"),this.style.setProperty("height",String(a(this==null?void 0:this.height))||"auto")}basicTableHeaderCellStyle(){return m}render(){const r=a(this==null?void 0:this.width),i=a(this==null?void 0:this.height);return d`
      <div
        class=${this.basicTableHeaderCellStyle()({align:this.align,color:this.color,fontSize:this.fontSize})}
        style="width: ${r}; height: ${i};"
      >
        <p class="truncate w-full">
          <slot></slot>
        </p>
      </div>
    `}};l([s({type:String})],e.prototype,"align",2);l([s({type:String})],e.prototype,"width",2);l([s({type:String})],e.prototype,"height",2);l([s({type:String})],e.prototype,"color",2);l([s({type:String,attribute:"font-size"})],e.prototype,"fontSize",2);e=l([g("yg-basic-table-header-cell")],e);export{e as Y,m as b};
