import{i as u,x as a}from"./lit-element-C4bBeaiV.js";import{t as y,E as m}from"./element-BmCHZ0P_.js";import{n as p}from"./property-BacG-Vag.js";import{r as f}from"./state-CLgbQenF.js";import{c as d}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";import{o as c}from"./if-defined-DhMdV329.js";var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,l=(n,o,e,t)=>{for(var s=t>1?void 0:t?g(o,e):o,i=n.length-1,h;i>=0;i--)(h=n[i])&&(s=(t?h(o,e,s):h(s))||s);return t&&s&&v(o,e,s),s};const $=d({base:"absolute left-0 top-0 z-50 flex h-full flex-col text-white transition-all duration-300",variants:{expanded:{true:"w-[300px]",false:"w-[60px] overflow-hidden"},fixed:{true:"relative w-[300px]",false:""},gradient:{true:"bg-gradient-to-b from-others-sidebar-top to-others-sidebar-bottom opacity-80 ",false:"bg-others-sidebar-top"}},defaultVariants:{expanded:!1}}),x=d({base:"flex h-12 cursor-pointer items-center gap-3 px-4 py-2 text-sm transition-all hover:bg-others-primary-push"}),b=d({base:"cursor-pointer overflow-hidden  text-sm transition-all duration-300"}),w=d({base:"flex h-[93px]  items-center gap-2 p-4 text-headline-small"}),M=d({base:"flex h-[112px] items-center  p-4",variants:{expanded:{true:"p-4",false:""}}}),I=d({base:""});let r=class extends m{constructor(){super(u`
      :host {
        display: block;
        height: 100vh;
        position: relative;
      }
    `.cssText),this.systemName="",this.companyName="",this.headerIcon="",this.items=[],this.bottoms=[],this.gradient=!0,this._expanded=!1,this.openMenus=[],this.fixed=!1}get expanded(){return this._expanded}set expanded(n){const o=this._expanded;this._expanded=n,this.requestUpdate("expanded",o)}toggleMenu(n){this.openMenus.includes(n)?this.openMenus=this.openMenus.filter(o=>o!==n):this.openMenus=[...this.openMenus,n]}handleMouseOver(){this.expanded=!0}handleMouseLeave(){this.expanded=!1}render(){var n,o;return a`
      <div
        style="height:100vh; width:60px;
               display: ${this.fixed?"none":"block"} !important;"
      ></div>

      <div
        class="${$({expanded:this.expanded,fixed:this.fixed,gradient:this.gradient})}"
        @mouseover="${()=>!this.fixed&&this.handleMouseOver()}"
        @mouseleave="${()=>!this.fixed&&this.handleMouseLeave()}"
      >
        <!-- ヘッダー -->
        <div class="${w()}">
          ${this.headerIcon&&(this.headerIcon.startsWith("http")||this.headerIcon.startsWith("/")||this.headerIcon.includes("."))?a`
                <img
                  src="${this.headerIcon}"
                  alt="Header Image"
                  class="w-7 h-7 rounded-full object-cover"
                />
              `:a`
                <div
                  class="min-w-7 min-h-7 bg-white rounded-full flex items-center justify-center"
                >
                  <yg-icon color="primary" icon="${this.headerIcon}"></yg-icon>
                </div>
              `}
          ${this.expanded||this.fixed?a`
                <div class="flex items-center justify-between flex-grow gap-3">
                  <span class="font-bold text-headline-small truncate">
                    ${this.systemName}
                  </span>
                  <yg-icon
                    icon="${this.fixed?"mdi:chevron-down":"mdi:pin-outline"}"
                    class="cursor-pointer"
                    color="white"
                    rotate="45"
                    @click="${()=>this.fixed=!this.fixed}"
                  ></yg-icon>
                </div>
              `:a``}
        </div>

        <!-- ヘッダー２ -->
        <div
          class="${M({expanded:this.expanded||this.fixed})}"
        >
          ${this.expanded||this.fixed?a`
                <div class="flex flex-col">
                  <span class="text-headline-small  truncate"
                    >${this.companyName}</span
                  >
                  <p @click="${()=>this.fixed=!this.fixed}"></p>
                </div>
              `:a``}
        </div>

        <!-- 中央部分のItems -->
        <div
          class="flex-grow overflow-auto"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          ${(n=this.items)==null?void 0:n.map(e=>a`
              <a
                class="${x()}"
                @click="${t=>{var s,i;e.href||t.preventDefault(),e.children?(this.toggleMenu(e.id),(s=e.onClick)==null||s.call(e)):(i=e.onClick)==null||i.call(e)}}"
                href="${c(e.href)}"
              >
                <yg-icon
                  color="white"
                  icon="${e.icon}"
                  class="text-lg"
                ></yg-icon>
                ${this.expanded||this.fixed?a`<span
                        class="line-clamp-2 whitespace-pre-wrap text-label-large"
                        >${e.text}</span
                      >
                      ${e.children?a`
                            <yg-icon
                              color="white"
                              icon="mdi:chevron-down"
                              class="ml-auto text-sm transform transition-transform duration-300 ${this.openMenus.includes(e.id)?"rotate-180":""}"
                            ></yg-icon>
                          `:null} `:null}
              </a>

              ${e.children&&(this.expanded||this.fixed)?a`
                    <div
                      class="${b()}"
                      style="max-height: ${this.openMenus.includes(e.id)?e.children.length*48+"px":"0"}"
                    >
                      ${e.children.map(t=>a`
                          <a
                            class="pl-4 flex items-center hover:bg-others-primary-push h-12"
                            @click="${s=>{var i;s.stopPropagation(),t.href||s.preventDefault(),(i=t.onClick)==null||i.call(t)}}"
                            href="${c(t.href)}"
                          >
                            <div
                              class="pl-9 py-2 truncate"
                              @click="${s=>{var i;t.href||s.preventDefault(),(i=t.onClick)==null||i.call(t)}}"
                            >
                              <span
                                class="line-clamp-2 whitespace-pre-wrap text-label-large"
                                >${t.text}</span
                              >
                            </div>
                          </a>
                        `)}
                    </div>
                  `:null}
            `)}
        </div>

        <!-- 下部のItems -->
        <div class="${I()}">
          ${(o=this.bottoms)==null?void 0:o.map(e=>a`
              <a
                class="${x()}"
                href="${c(e.href)}"
                @click="${t=>{var s;e.href||t.preventDefault(),(s=e.onClick)==null||s.call(e)}}"
              >
                <yg-icon
                  color="white"
                  icon="${e.icon}"
                  class="text-lg"
                ></yg-icon>
                ${this.expanded||this.fixed?a`<span
                      class="line-clamp-2 whitespace-pre-wrap text-body-small"
                      >${e.text}</span
                    >`:null}
              </a>
            `)}
        </div>
      </div>
    `}};l([p({type:String,attribute:"system-name"})],r.prototype,"systemName",2);l([p({type:String,attribute:"company-name"})],r.prototype,"companyName",2);l([p({type:String,attribute:"header-icon"})],r.prototype,"headerIcon",2);l([p({type:Array})],r.prototype,"items",2);l([p({type:Array,attribute:"bottoms"})],r.prototype,"bottoms",2);l([p({type:Boolean})],r.prototype,"gradient",2);l([f()],r.prototype,"_expanded",2);l([f()],r.prototype,"openMenus",2);l([f()],r.prototype,"fixed",2);r=l([y("yg-sidebar")],r);
