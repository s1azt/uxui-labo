import{x as r}from"./lit-element-C4bBeaiV.js";import{t as b,E as m}from"./element-BmCHZ0P_.js";import{n}from"./property-BacG-Vag.js";import{r as p}from"./state-CLgbQenF.js";import{c as u}from"./index-Br9a1yed.js";import"./Button-Drw3qSHJ.js";const x=u({base:"flex w-full flex-grow items-center justify-between gap-4 py-2",variants:{variant:{borderLeft:"",underline:"border-b pb-2"},size:{medium:"h-9",small:"h-6"}}}),g=u({base:"inline-flex w-full items-center",variants:{variant:{borderLeft:"w-1",underline:"hidden"},size:{medium:"h-8",small:"h-6"}}}),v=u({base:"flex items-center gap-4 truncate",variants:{size:{medium:"text-headline-small",small:"text-label-large"}}},{twMerge:!1}),f=()=>({area:x,left:g,text:v});var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(t,e,a,o)=>{for(var l=o>1?void 0:o?w(e,a):e,h=t.length-1,c;h>=0;h--)(c=t[h])&&(l=(o?c(e,a,l):c(l))||l);return o&&l&&y(e,a,l),l};const d=f();let i=class extends m{constructor(){super(...arguments),this.variant="borderLeft",this.color="default",this.size="medium",this.subText="",this.text="",this.count="",this.breadCrumbs=[],this.arrowForward="uiw:right",this.isMobile=!1,this.supportMobile=!1}connectedCallback(){super.connectedCallback();const t=window.matchMedia("(max-width: 768px)");this.supportMobile&&(this.isMobile=t.matches),t.addEventListener("change",e=>{this.supportMobile&&(this.isMobile=e.matches)})}headingStyles(){return d}getHeadingColor(){return this.color==="default"?"neutral-dark":"white"}getTextColor(){return this.color==="default"?"neutral-dark":"white"}headingAreaStyles(t){return d.area({variant:this.variant,size:this.size,class:`${t}`})}render(){var o;const t=this.getHeadingColor(),e=this.getTextColor(),a=`border-${t}`;return r`
    <div class="flex flex-col gap-2 w-full">
      <div
        class="${this.headingAreaStyles(a)}"
      >
        <div
          class="${d.left({variant:this.variant,size:this.size,class:`bg-${t}`})} "
        > </div>

        <div
          class="${d.text({size:this.size,class:`text-${e}`})} "
        >
          ${(o=this.breadCrumbs)!=null&&o[0]?this.renderBreadCrumbs():r`<span> ${this.text} </span>`}
          <!--未読件数が１以上の時のみ表示-->
          <!--TODO: Badge Componentと差し替える-->
          ${this.count&&this.count!="0"?r`<div class=" flex text-primary text-label-small items-start">${this.count}</div>`:null}
        </div>
        
        <div class="ml-auto w-auto flex gap-1 items-center">
          ${this.subText&&!this.isMobile?r`<div
                class="text-${e} text-xs text-right whitespace-nowrap"
              >
                ${this.subText}
              </div>`:null} 
            <slot
              name="right-section"
              ></slot>
        </div>
      </div>

      ${this.subText&&this.isMobile?r`<div
                class="text-${e} text-xs whitespace-nowrap"
              >
                ${this.subText}
              </div>`:null} 


      </div>
    `}renderBreadCrumbs(){const t=this.getTextColor();return r`
      <div class="flex items-center gap-4">
        ${this.breadCrumbs.map((e,a)=>r`
            ${a>0?r`<iconify-icon
                  height="24"
                  width="24"
                  icon="${this.arrowForward}"
                  class="stroke-${t}"
                ></iconify-icon>`:null}
            <div class="text-${t}">${e.title}</div>
          `)}
      </div>
    </div>
    `}};s([n({type:String})],i.prototype,"variant",2);s([n({type:String})],i.prototype,"color",2);s([n({type:String})],i.prototype,"size",2);s([n({type:String,attribute:"sub-text"})],i.prototype,"subText",2);s([n({type:String})],i.prototype,"text",2);s([n({type:String})],i.prototype,"count",2);s([n({type:Array,attribute:"bread-crumbs"})],i.prototype,"breadCrumbs",2);s([p()],i.prototype,"arrowForward",2);s([p()],i.prototype,"isMobile",2);s([p()],i.prototype,"supportMobile",2);i=s([b("yg-heading")],i);export{i as Y,f as h};
