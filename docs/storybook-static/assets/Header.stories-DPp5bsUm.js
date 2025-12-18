import{x as i}from"./lit-element-C4bBeaiV.js";import{g as j}from"./storybook-utils-CyXQhEhe.js";import{t as P,E as T}from"./element-BmCHZ0P_.js";import{n as c}from"./property-BacG-Vag.js";import{r as C}from"./state-CLgbQenF.js";import{e as D}from"./query-DXShiZ7f.js";import{c as d}from"./index-Br9a1yed.js";import"./Icon-BaQ5x4F3.js";import"./Divider-Dlsl_grt.js";import{N as S}from"./element-BHnNw0zf.js";import{f as N}from"./fixFigmaPath-DxFz5b9E.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./base-DIkkzJ-c.js";import"./Icon-CzSa45Vk.js";const f=""+new URL("yamato_logo-8_MtZS1y.svg",import.meta.url).href;var F=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(e,n,t,r)=>{for(var s=r>1?void 0:r?O(n,t):n,h=e.length-1,m;h>=0;h--)(m=e[h])&&(s=(r?m(n,t,s):m(s))||s);return r&&s&&F(n,t,s),s};const w=d({base:"relative flex w-full items-center justify-between rounded-b-[20px] bg-primary py-2.5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",variants:{isMobile:{true:"h-[80px] px-8",false:"h-[100px] px-10"}}}),x=d({base:"flex  flex-col items-start justify-center",variants:{isMobile:{true:"h-[50px]",false:"h-24 gap-1 px-10 py-3"}}}),v=d({base:"block rounded-full bg-white px-2 py-1",variants:{isMobile:{true:"h-[26px] w-[145px]",false:"h-[35px] w-[209px] "}}}),p=d({base:"text-nowrap !text-white",variants:{isMobile:{true:"text-label-medium",false:"text-headline-small "}}}),A=d({base:"absolute inset-0 flex items-center justify-center "}),k=d({base:"absolute z-10 overflow-hidden border-x border-t border-border-base bg-white text-body-medium  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",variants:{isMobile:{true:"left-0 top-0 w-full",false:" right-[38px] top-[72px] rounded "}}}),a=d({base:"flex h-14 w-[179px] cursor-pointer items-center   p-4 text-text-base-light hover:bg-disabled-bg",variants:{isMobile:{true:"w-full justify-start px-6",false:"border-b border-border-base"}}});let l=class extends S(T){constructor(){super(),this.handleOutsideClick=e=>{var h;const n={x:e.clientX,y:e.clientY},t=this.dropdown,r=(h=this.trigger)==null?void 0:h.getBoundingClientRect(),s=t==null?void 0:t.getBoundingClientRect();s&&t&&r&&(n.x<r.left||n.x>r.right||n.y<r.top||n.y>s.bottom)&&(this.showDropdown=!1)},this.handleEscapeKey=e=>{e.key==="Escape"&&(this.showDropdown=!1)},this.showDropdown=!1,this.isMobile=!1,this.loggedIn=!1,this.logoHref=null,this.userName="",this.linkList=[],this.menuList=[],window.addEventListener("click",this.handleOutsideClick.bind(this)),window.addEventListener("keydown",this.handleEscapeKey.bind(this))}connectedCallback(){super.connectedCallback();const e=window.matchMedia("(max-width: 768px)");this.isMobile=e.matches,e.addEventListener("change",n=>{this.isMobile=n.matches})}render(){return i`
      ${this.isMobile?this.renderMobileMenu():this.renderPcMenu()}
    `}renderMobileMenu(){return i` <div class="${w({isMobile:this.isMobile})}">
      <!-- タイトル -->
      <div class="${x({isMobile:this.isMobile})}">
        <div class="${v({isMobile:this.isMobile})}">
          <img src=${f} width="145" height="26" />
        </div>
        <!-- タイトル名 -->
        ${this.logoHref?i`
              <a
                class="inline-flex justify-start items-center gap-1"
                href="${this.logoHref}"
              >
                <nk-icon
                  icon="streamline:insurance-hand-solid"
                  color="white"
                  width="20"
                  height="20"
                ></nk-icon>
                <div class="${p({isMobile:this.isMobile})}">
                  任意継続手続きポータルサイト
                </div>
              </a>
            `:i`
              <div class="inline-flex justify-start items-center gap-1">
                <nk-icon
                  icon="streamline:insurance-hand-solid"
                  color="white"
                  width="20"
                  height="20"
                ></nk-icon>
                <div
                  class="${p({isMobile:this.isMobile})} cursor-none"
                >
                  任意継続手続きポータルサイト
                </div>
              </div>
            `}
      </div>

      ${this.loggedIn?i`
            <div
              class="cursor-pointer w-9 h-9 relative rounded-full hover:bg-primary-hover"
              tabindex="0"
              @keydown="${this.handleTriggerKeydown}"
              @click=${this.toggleDropdown}
            >
              <span class="${A()}">
                <nk-icon
                  icon="yg:menu"
                  width="36"
                  height="36"
                  color="white"
                ></nk-icon>
              </span>
            </div>
          `:null}
      <div
        class="${k({isMobile:this.isMobile})}
        ${this.showDropdown?"opacity-100 max-h-[1000px] pointer-events-auto":"opacity-0 max-h-0 pointer-events-none"}
        "
        id="header-dropdown-list"
      >
        <div
          class="${a({isMobile:this.isMobile})} cursor-default hover:bg-white
          px-8 py-4 h-[80px]
          flex items-center justify-between"
        >
          <div class="flex justify-start items-center gap-2 text-label-large">
            <nk-icon icon="yg:human" width="32" height="32"></nk-icon>
            ${this.userName.length>10?this.userName.slice(0,10)+"…":this.userName+" さん"}
          </div>
          <div
            tabindex="0"
            @keydown="${this.handleTriggerKeydown}"
            @click="${this.toggleDropdown}"
          >
            <nk-icon icon="yg:close" width="32" height="32"></nk-icon>
          </div>
        </div>

        ${this.linkList!=null?i` <yg-divider orientation="horizontal"></yg-divider> `:null}
        ${this.linkList!=null?this.linkList.map(e=>"label"in e&&"href"in e?i`
                    <a href="${e.href}">
                      <div
                        class="${a({isMobile:this.isMobile})}"
                      >
                        ${e.label}
                      </div>
                    </a>
                  `:"label"in e&&"onClick"in e?i`<a tabindex="0" @click=${e.onClick}>
                      <div
                        class="${a({isMobile:this.isMobile})}"
                      >
                        ${e.label}
                      </div>
                    </a>`:null):null}
        ${this.menuList!=null?i` <yg-divider orientation="horizontal"></yg-divider> `:null}
        ${this.menuList!=null?this.menuList.map(e=>"label"in e&&"href"in e?i`
                    <a href="${e.href}">
                      <div
                        class="${a({isMobile:this.isMobile})}"
                      >
                        ${e.label}
                      </div>
                    </a>
                  `:"label"in e&&"onClick"in e?i`<a tabindex="0" @click=${e.onClick}>
                      <div
                        class="${a({isMobile:this.isMobile})}"
                      >
                        ${e.label}
                      </div>
                    </a>`:null):null}
      </div>
    </div>`}renderPcMenu(){return i`
      <div class="${w({isMobile:this.isMobile})}">
        <!-- タイトル -->
        <div class="${x({isMobile:this.isMobile})}">
          <div class="${v({isMobile:this.isMobile})}">
            <img src=${f} width="193" height="35" />
          </div>
          ${this.logoHref?i`
                <a
                  class="inline-flex justify-start items-center gap-1"
                  href="${this.logoHref}"
                >
                  <nk-icon
                    icon="streamline:insurance-hand-solid"
                    color="white"
                  ></nk-icon>
                  <div class="${p({isMobile:this.isMobile})}">
                    任意継続手続きポータルサイト
                  </div>
                </a>
              `:i`
                <div class="inline-flex justify-start items-center gap-1">
                  <nk-icon
                    icon="streamline:insurance-hand-solid"
                    color="white"
                  ></nk-icon>
                  <div class="${p({isMobile:this.isMobile})}">
                    任意継続手続きポータルサイト
                  </div>
                </div>
              `}
        </div>
        ${this.loggedIn?i`
              <!-- リンクメニュー -->
              <div
                class="w-full inline-flex self-stretch justify-end items-center px-4 gap-4 text-white text-label-medium"
              >
                ${this.linkList!=null?this.linkList.map(e=>"label"in e&&"href"in e?i`<a href="${e.href}">${e.label}</a>`:"label"in e&&"onClick"in e?i`<a
                              tabindex="0"
                              class="cursor-pointer"
                              @click=${e.onClick}
                              >${e.label}</a
                            >`:null):null}
              </div>
              <!-- ドロップダウン -->
              <div
                class="flex items-center h-8 flex-shrink-0 gap-4 text-white text-label-medium"
                id="trigger"
                tabindex="0"
                @keydown="${this.handleTriggerKeydown}"
                @click="${this.toggleDropdown}"
              >
                <yg-divider orientation="vertical"></yg-divider>
                <div
                  class="flex gap-2 items-center hover:bg-primary-hover cursor-pointer rounded-full"
                >
                  <nk-icon
                    icon="yg:human"
                    width="24"
                    height="24"
                    color="white"
                  ></nk-icon>
                  <div class="h-full flex justify-end">
                    ${this.userName.length>10?this.userName.slice(0,10)+"…":this.userName+" さん"}
                  </div>
                  <nk-icon
                    icon="yg:arrow-down-small"
                    width="24"
                    height="24"
                    color="white"
                  ></nk-icon>
                </div>
              </div>
              <!-- ドロップダウンリスト -->
              <div
                class="${k({isMobile:this.isMobile})}"
                id="header-dropdown-list"
                style="visibility: ${this.showDropdown?"visible":"hidden"};"
              >
                ${this.menuList!=null?this.menuList.map(e=>"label"in e&&"href"in e?i`
                            <a href="${e.href}">
                              <div
                                class="${a({isMobile:this.isMobile})}"
                              >
                                ${e.label}
                              </div>
                            </a>
                          `:"label"in e&&"onClick"in e?i`<a tabindex="0" @click=${e.onClick}>
                              <div
                                class="${a({isMobile:this.isMobile})}"
                              >
                                ${e.label}
                              </div>
                            </a>`:null):null}
              </div>
            `:null}
      </div>
    `}async toggleDropdown(){var n;if(this.showDropdown=!this.showDropdown,this.trigger&&this.showDropdown){await this.updateComplete;const t=(n=this.dropdown)==null?void 0:n.querySelector('a, button, [tabindex]:not([tabindex="-1"])');t&&t.focus()}}handleTriggerKeydown(e){e.key=="Enter"&&this.toggleDropdown()}};o([C()],l.prototype,"showDropdown",2);o([C()],l.prototype,"isMobile",2);o([c({type:Boolean,attribute:"logged-in"})],l.prototype,"loggedIn",2);o([c({type:String,attribute:"logo-href"})],l.prototype,"logoHref",2);o([c({type:String,attribute:"user-name"})],l.prototype,"userName",2);o([c({type:Array,attribute:"link-list"})],l.prototype,"linkList",2);o([c({type:Array,attribute:"menu-list"})],l.prototype,"menuList",2);o([D("#trigger")],l.prototype,"trigger",2);o([D("#header-dropdown-list")],l.prototype,"dropdown",2);l=o([P("nk-header")],l);const{args:K,argTypes:b,template:re}=j("nk-header");b["menu-list"].control="object";b["link-list"].control="object";const ae={title:"Components/Ninkei/Header",component:"nk-header",args:K,argTypes:b};function _(){console.log("download")}function H(){console.log("logout")}const g={render:e=>i`
    <nk-header
      .logoHref=${e["logo-href"]}
      ?logged-in=${e["logged-in"]}
      .userName=${e["user-name"]}
      .menuList=${e["menu-list"]}
      .linkList=${e["link-list"]}
    >
    </nk-header>
  `,args:{"user-name":"あいうえおあいうえお","logged-in":!0,"logo-href":"https://www.example.com","link-list":[{href:"https://example.com",label:"ホーム"},{onClick:_,label:"ダウンロード"},{href:"https://www.example.com/turorial",label:"チュートリアル"},{href:"./contact",label:"お問い合わせ"}],"menu-list":[{href:"https://www.example.com",label:"マイぺージ"},{href:"/setting",label:"設定"},{onClick:H,label:"ログアウト"}]},parameters:{design:{type:"figma",url:N("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=4919-37652&m=dev")}}},u={render:e=>i`
    <div style="width: 480px">
      <nk-header
        .logoHref=${e["logo-href"]}
        ?logged-in=${e["logged-in"]}
        .userName=${e["user-name"]}
        .menuList=${e["menu-list"]}
        .linkList=${e["link-list"]}
      >
      </nk-header>
    </div>
  `,args:{"user-name":"あいうえおあいうえお","logged-in":!0,"logo-href":"https://www.example.com","link-list":[{href:"https://example.com",label:"ホーム"},{onClick:_,label:"ダウンロード"},{href:"https://www.example.com/turorial",label:"チュートリアル"},{href:"./contact",label:"お問い合わせ"}],"menu-list":[{href:"https://www.example.com",label:"マイぺージ"},{href:"/setting",label:"設定"},{onClick:H,label:"ログアウト"}]},parameters:{design:{type:"figma",url:N("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=4919-37652&m=dev")}}};var $,y,M;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <nk-header
      .logoHref=\${args['logo-href']}
      ?logged-in=\${args['logged-in']}
      .userName=\${args['user-name']}
      .menuList=\${args['menu-list']}
      .linkList=\${args['link-list']}
    >
    </nk-header>
  \`,
  args: {
    'user-name': 'あいうえおあいうえお',
    'logged-in': true,
    'logo-href': 'https://www.example.com',
    'link-list': [{
      href: 'https://example.com',
      label: 'ホーム'
    }, {
      onClick: download,
      label: 'ダウンロード'
    }, {
      href: 'https://www.example.com/turorial',
      label: 'チュートリアル'
    }, {
      href: './contact',
      label: 'お問い合わせ'
    }],
    'menu-list': [{
      href: 'https://www.example.com',
      label: 'マイぺージ'
    }, {
      href: '/setting',
      label: '設定'
    }, {
      onClick: logout,
      label: 'ログアウト'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=4919-37652&m=dev')
    }
  }
}`,...(M=(y=g.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var B,E,L;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => html\`
    <div style="width: 480px">
      <nk-header
        .logoHref=\${args['logo-href']}
        ?logged-in=\${args['logged-in']}
        .userName=\${args['user-name']}
        .menuList=\${args['menu-list']}
        .linkList=\${args['link-list']}
      >
      </nk-header>
    </div>
  \`,
  args: {
    'user-name': 'あいうえおあいうえお',
    'logged-in': true,
    'logo-href': 'https://www.example.com',
    'link-list': [{
      href: 'https://example.com',
      label: 'ホーム'
    }, {
      onClick: download,
      label: 'ダウンロード'
    }, {
      href: 'https://www.example.com/turorial',
      label: 'チュートリアル'
    }, {
      href: './contact',
      label: 'お問い合わせ'
    }],
    'menu-list': [{
      href: 'https://www.example.com',
      label: 'マイぺージ'
    }, {
      href: '/setting',
      label: '設定'
    }, {
      onClick: logout,
      label: 'ログアウト'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=4919-37652&m=dev')
    }
  }
}`,...(L=(E=u.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const de=["Default","Mobile"];export{g as Default,u as Mobile,de as __namedExportsOrder,ae as default};
