import{x as u}from"./lit-element-C4bBeaiV.js";import{t as h,E as m}from"./element-BmCHZ0P_.js";import{n as i}from"./property-BacG-Vag.js";import{r as d}from"./state-CLgbQenF.js";import{c as o}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,e=(s,r,l,n)=>{for(var a=n>1?void 0:n?b(r,l):r,p=s.length-1,c;p>=0;p--)(c=s[p])&&(a=(n?c(r,l,a):c(a))||a);return n&&a&&y(r,l,a),a};const f=o({base:"flex min-w-[220px] items-center justify-center rounded-lg bg-white px-4 py-1",variants:{transparent:{true:"",false:"border-[0.5px] border-border-base"}}}),x=o({base:"flex items-center justify-center gap-1",variants:{color:{primary:"text-text-primary",error:"text-text-error"}}}),v=o({base:"text-body-large"}),g=o({base:"text-display-medium text-text-base"},{twMerge:!1}),$=o({base:"text-label-large text-text-base"},{twMerge:!1});let t=class extends m{constructor(){super(...arguments),this.color="primary",this.icon="",this.title="",this.value="",this.unit="",this.subText="",this.comma=!0,this.transparent=!1,this.isMobile=!1,this.supportMobile=!1}connectedCallback(){super.connectedCallback();const s=window.matchMedia("(max-width: 768px)");this.supportMobile&&(this.isMobile=s.matches),s.addEventListener("change",r=>{this.supportMobile&&(this.isMobile=r.matches)})}dashBoardCardStyles(){return f}render(){const s=typeof this.value=="number"||!isNaN(Number(this.value))&&typeof this.value=="string",r=s?Number(this.value):this.value;return u`
      <!-- ダッシュボードカード -->
      <div
        class="${this.dashBoardCardStyles()({transparent:this.transparent})}"
      >
        <!-- カード内コンテンツ -->
        <div class="${this.isMobile?"flex-row items-center justify-between w-full":"flex-col justify-center gap-1"} flex">
          <!-- アイコンとタイトル -->
          <div
            class="${x({color:this.color})}  "
          >
            ${this.icon?u` <div class="flex items-center">
                  <yg-icon
                    icon="${this.icon}"
                    class="bg-back-ground-${this.color==="primary"?"primary-light":"error-light"}
                  rounded-[20px]
                  min-w-8
                  min-h-8
                  "
                  ></yg-icon>
                </div>`:""}
            <div class="flex justify-start items-center">
              <span class="${v()}">${this.title}</span>
            </div>
          </div>
          <!-- 値と単位 -->
          <div class="justify-center flex">
            <div class="justify-start items-end flex gap-1">
              <span class="${g()}">
                ${this.comma&&s?r.toLocaleString():this.value}
              </span>
              <span class="${$()}">${this.unit}</span>
            </div>
          </div>
          <!-- サブテキスト -->
          
            ${this.subText?u`<span class="flex text-center justify-center text-body-small text-text-base-light">${this.subText} </span>`:""}
         
        </div>
      </div>
    `}};e([i({type:String})],t.prototype,"color",2);e([i({type:String})],t.prototype,"icon",2);e([i({type:String})],t.prototype,"title",2);e([i({type:String})],t.prototype,"value",2);e([i({type:String})],t.prototype,"unit",2);e([i({type:String,attribute:"sub-text"})],t.prototype,"subText",2);e([i({type:Boolean})],t.prototype,"comma",2);e([i({type:Boolean})],t.prototype,"transparent",2);e([d()],t.prototype,"isMobile",2);e([d()],t.prototype,"supportMobile",2);t=e([h("yg-dash-board-card")],t);export{t as Y,f as d};
