import{i as h,x as u}from"./lit-element-C4bBeaiV.js";import{t as p,E as g}from"./element-BmCHZ0P_.js";import{n as d}from"./property-BacG-Vag.js";import{c as b}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l=(t,e,r,s)=>{for(var i=s>1?void 0:s?f(e,r):e,a=t.length-1,c;a>=0;a--)(c=t[a])&&(i=(s?c(e,r,i):c(i))||i);return s&&i&&y(e,r,i),i};const m=b({base:"inline-flex size-7 items-center justify-center rounded border border-input bg-white hover:bg-others-primary-hover transition-colors duration-200",variants:{disabled:{true:"cursor-not-allowed bg-disabled-bg hover:bg-disabled-bg",false:"cursor-pointer"}}}),o=b({base:"",variants:{disabled:{true:"disabled-text",false:"body"}}});let n=class extends g{constructor(){super(h`
      :host {
        display: inline-block;
      }
    `.cssText),this.total=1,this.current=1,this._change=t=>{t>0&&t<=this.total&&t!==this.current&&(this.current=t,this._dispatchChange(this.current))}}buttonStyle(){return m}render(){const t=()=>this.current===1,e=()=>this.current===this.total;return u`
      <div class="h-7 justify-start items-center gap-3 inline-flex">
        <button
          class="${this.buttonStyle()({disabled:t()})}"
          ?disabled=${t()}
          @click=${this._change.bind(this,1)}
        >
          <yg-icon
            color="${o({disabled:t()})}"
            icon="yg:page-first"
          ></yg-icon>
        </button>
        <button
          class="${this.buttonStyle()({disabled:t()})}"
          ?disabled=${t()}
          @click=${this._change.bind(this,this.current-1)}
        >
          <yg-icon
            color="${o({disabled:t()})}"
            icon="yg:chevron-left"
          ></yg-icon>
        </button>
        <span class="text-body text-base font-bold leading-loose tracking-tight"
          >${this.current} / ${this.total}</span
        >
        <button
          class="${this.buttonStyle()({disabled:e()})}"
          ?disabled=${e()}
          @click=${this._change.bind(this,this.current+1)}
        >
          <yg-icon
            color="${o({disabled:e()})}"
            icon="yg:arrow-forward-small"
          ></yg-icon>
        </button>
        <button
          class="${this.buttonStyle()({disabled:e()})}"
          ?disabled=${e()}
          @click=${this._change.bind(this,this.total)}
        >
          <yg-icon
            color="${o({disabled:e()})}"
            icon="yg:page-last"
          ></yg-icon>
        </button>
      </div>
    `}_dispatchChange(t){const e={bubbles:!0,composed:!0,detail:{value:t}};this.dispatchEvent(new CustomEvent("change",e))}};l([d({type:Number})],n.prototype,"total",2);l([d({type:Number})],n.prototype,"current",2);n=l([p("yg-pagination")],n);export{n as Y,m as p};
