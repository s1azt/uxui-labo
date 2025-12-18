import{i as b,x as h}from"./lit-element-C4bBeaiV.js";import{t as g,E as m}from"./element-BmCHZ0P_.js";import{n as o}from"./property-BacG-Vag.js";import{c as l}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";var c=Object.defineProperty,x=Object.getOwnPropertyDescriptor,n=(e,t,a,s)=>{for(var i=s>1?void 0:s?x(t,a):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(i=(s?d(t,a,i):d(i))||i);return s&&i&&c(t,a,i),i};const y=l({base:"shadow-basic relative flex flex-col items-center justify-center rounded-[6px] border",variants:{type:{regular:" border-split bg-white text-body",light:" border-others-yellow bg-others-yellow text-body",regularBusiness:" border-others-green bg-others-green text-white",lightBusiness:" border-number-plate-dark bg-number-plate-dark text-others-yellow",none:" border-input bg-neutral text-neutral-dark-text"},size:{medium:"h-[63px] w-[131px]",small:"h-[47px] w-[95px]"},link:{true:"cursor-pointer",false:""}},compoundVariants:[{size:"small",link:!0,class:"active:top-[2px]"},{size:"medium",link:!0,class:"active:top-1"}]},{twMerge:!1}),v=l({base:"",variants:{type:{regular:"text-base-light",light:"text-base-light",regularBusiness:"text-white",lightBusiness:"text-others-yellow",none:""}}}),f=l({base:"absolute rounded-[10px]",variants:{type:{regular:"bg-[#A7A7A7]",light:"bg-[#D4C74F]",regularBusiness:"bg-[#005C27]",lightBusiness:"bg-black",none:""},size:{medium:"top-1 h-[63px] w-[131px]",small:"top-[2px] h-[47px] w-[95px]"},link:{true:"block",false:"hidden"}}}),z=l({base:"flex items-center justify-center gap-1",variants:{size:{small:"text-label-small",medium:"text-label-large"}}},{twMerge:!1}),u=l({base:"flex items-center justify-center gap-1",variants:{size:{small:"text-headline-small leading-[26px]",medium:"text-headline-medium leading-[30px]"}}},{twMerge:!1});let r=class extends m{constructor(){super(b`
      :host {
        display: inline-block;
        z-index: 2;
      }
    `.cssText),this.type="regular",this.size="medium",this.data={classificationNumber:"",hiragana:"",region:"",registrationNumber:""},this.link=!1}updated(e){super.updated(e),e.has("size")&&this.style.setProperty("width",this.size==="small"?"80px":"130px")}render(){var e,t,a,s;return h`
      <!-- ナンバープレート -->
      <div class="relative">
        <div
          class="${f({type:this.type,size:this.size,link:this.link})}"
        ></div>
        <div
          class="${y({type:this.type,size:this.size,link:this.link})}"
        >
          ${this.type==="none"?h`
                <div class="${u({size:this.size})}">-</div>
              `:h`
                <div class="${z({size:this.size})}">
                  <span>${(e=this.data)==null?void 0:e.region}</span>
                  <span>${(t=this.data)==null?void 0:t.classificationNumber}</span>
                </div>
                <div class="${u({size:this.size})}">
                  <span>${(a=this.data)==null?void 0:a.hiragana}</span>
                  <span>${(s=this.data)==null?void 0:s.registrationNumber}</span>
                </div>
              `}

          <yg-icon
            class="${this.link?"absolute right-1 top-1":"hidden"}"
            icon="yg:open-in-new"
            color="${v({type:this.type})}"
            width="${this.size==="small"?8:14}"
            height="${this.size==="small"?8:14}"
          ></yg-icon>
        </div>
      </div>
    `}};n([o({type:String})],r.prototype,"type",2);n([o({type:String})],r.prototype,"size",2);n([o({type:Object})],r.prototype,"data",2);n([o({type:Boolean})],r.prototype,"link",2);r=n([g("yg-number-plate")],r);
