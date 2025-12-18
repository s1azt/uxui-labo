import{i as g,x as h}from"./lit-element-C4bBeaiV.js";import{t as d,E as y}from"./element-BmCHZ0P_.js";import{n as o}from"./property-BacG-Vag.js";import{c as u}from"./index-Br9a1yed.js";import{c as n}from"./calculateSize-BEzCU_f7.js";var f=Object.defineProperty,m=Object.getOwnPropertyDescriptor,l=(t,a,s,e)=>{for(var r=e>1?void 0:e?m(a,s):a,c=t.length-1,p;c>=0;c--)(p=t[c])&&(r=(e?p(a,s,r):p(r))||r);return e&&r&&f(a,s,r),r};const v=u({base:"relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"});let i=class extends y{constructor(){super(g`
      :host {
        display: block;
      }
    `.cssText),this.src="",this.url="",this.alt="",this.height="180"}updated(t){super.updated(t),this.style.setProperty("height",String(n(this==null?void 0:this.height))||"auto")}cardMediaStyles(){return v}render(){const t=this.url||this.src,s=this.cardMediaStyles()(),e=n(this==null?void 0:this.height);return t?h`
      <div
        class="${s}"
        style="background-image: url(${t}); height: ${e};"
        role="img"
        aria-label="${this.alt||"画像"}"
      >
        <slot></slot>
      </div>
    `:h`
        <div class="${s} bg-gray-200 flex items-center justify-center" style="height: ${e};">
          <span class="text-gray-500">画像が設定されていません</span>
          <slot></slot>
        </div>
      `}};l([o({type:String})],i.prototype,"src",2);l([o({type:String})],i.prototype,"url",2);l([o({type:String})],i.prototype,"alt",2);l([o({type:String})],i.prototype,"height",2);i=l([d("yg-card-media")],i);export{i as Y,v as c};
