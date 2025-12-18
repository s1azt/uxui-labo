import{i as c,x as g}from"./lit-element-C4bBeaiV.js";import{t as d,E as f}from"./element-BmCHZ0P_.js";import{n as o}from"./property-BacG-Vag.js";import{c as b}from"./index-Br9a1yed.js";import{c as l}from"./calculateSize-BEzCU_f7.js";var u=Object.defineProperty,m=Object.getOwnPropertyDescriptor,s=(e,i,h,a)=>{for(var t=a>1?void 0:a?m(i,h):i,n=e.length-1,p;n>=0;n--)(p=e[n])&&(t=(a?p(i,h,t):p(t))||t);return a&&t&&u(i,h,t),t};const x=b({base:'flex items-center truncate border-[0.5px] border-["#C3C6CF"] bg-white p-2 text-left text-body-medium',variants:{align:{left:"text-left",center:"text-center",right:"text-right"},fontSize:{medium:"!text-[14px]",large:"!text-[16px]"}}},{twMerge:!1});let r=class extends f{constructor(){super(c`
      :host {
        display: inline-block;
      }
    `.cssText),this.align="left",this.width="120px",this.height="48px",this.fontSize="medium"}updated(e){super.updated(e),this.style.setProperty("width",String(l(this==null?void 0:this.width))||"auto"),this.style.setProperty("height",String(l(this==null?void 0:this.height))||"auto")}basicTableDataCellStyle(){return x}render(){const e=l(this==null?void 0:this.width),i=l(this==null?void 0:this.height);return g`
      <div
        class=${this.basicTableDataCellStyle()({align:this.align,fontSize:this.fontSize})}
        style="width: ${e}; height: ${i};"
      >
        <p class="truncate w-full">
          <slot></slot>
        </p>
      </div>
    `}};s([o({type:String})],r.prototype,"align",2);s([o({type:String})],r.prototype,"width",2);s([o({type:String})],r.prototype,"height",2);s([o({type:String,attribute:"font-size"})],r.prototype,"fontSize",2);r=s([d("yg-basic-table-data-cell")],r);export{r as Y,x as b};
