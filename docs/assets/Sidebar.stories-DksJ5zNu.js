import{i as $,x as s}from"./lit-element-C4bBeaiV.js";import{g as N}from"./storybook-utils-CyXQhEhe.js";import{f as O}from"./fixFigmaPath-DxFz5b9E.js";import{t as P,E as B}from"./element-BmCHZ0P_.js";import{n as c}from"./property-BacG-Vag.js";import{r as y}from"./state-CLgbQenF.js";import{c as d}from"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";import"./Icon-D1f_g8IV.js";import{o as f}from"./if-defined-DhMdV329.js";import{N as D}from"./element-DjMGbAoC.js";import"./Alert-B7GQV9UH.js";import"./Button-Drw3qSHJ.js";import"./Dialog-CA9i3lT0.js";import"./Heading-jXrO10pE.js";import"./ImageControl-CD6NW0wE.js";import"./NumberPlate-C1bX_6-U.js";import"./Pagination-BMRm9RyA.js";import"./StatusLabel-DmoJy1fm.js";import"./Tabs-DTd4m-RM.js";import"./Title-DtrnF7R7.js";import"./Select-8YlRDi8V.js";import"./Sidebar-BuJ9dN2t.js";import"./BasicTable-Ca5DUgBM.js";import"./BasicTableDataCell-DaT-vcNN.js";import"./BasicTableHeaderCell-n4bV0r_X.js";import"./Input-Czg9PuiZ.js";import"./FormControl-2GUpcIp4.js";import"./Checkbox-PigucBoI.js";import"./Radio-Do_SVHAJ.js";import"./Divider-Dlsl_grt.js";import"./card-DYLUl-bD.js";import"./Textarea-gnl254_E.js";import"./AccordionItem-tnJ2xEa8.js";import"./DashBoardCard-D9Gz3Gox.js";import"./NumberValueBar-Bl7Fy_O7.js";import"./Tooltip-DZb2M2Cl.js";import"./ProgressStepper-By3TNlqg.js";import"./Slider-DExaVQYb.js";import"./SyakensyoTable-Bh7lO4eY.js";import"./InformationBar-BZaZQyvt.js";import"./TrendBar-DqQMT_gz.js";import"./EmptyState-BvzRIJh5.js";import"./Dropdown-BEqMBhHt.js";import"./Menu-CqC2flvl.js";import"./MenuItem-1gePcUBa.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./base-DIkkzJ-c.js";import"./validator-Z-Is_xbn.js";import"./form-associated-C1RJQ55l.js";import"./select-validator-x4M-aYN7.js";import"./query-DXShiZ7f.js";import"./on-report-validity-Dy401omy.js";import"./constants-rkZZCW-e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./redispatch-event-saXtg2yW.js";import"./text-field-validator-BUChPS26.js";import"./accordion-item-mixin-3QUFrK7n.js";var T=Object.defineProperty,U=Object.getOwnPropertyDescriptor,l=(e,i,t,a)=>{for(var r=a>1?void 0:a?U(i,t):i,o=e.length-1,g;o>=0;o--)(g=e[o])&&(r=(a?g(i,t,r):g(r))||r);return a&&r&&T(i,t,r),r};const A=d({base:"shadow-1 relative rounded-2xl z-50 flex h-full flex-col text-white transition-all duration-300",variants:{expanded:{true:"w-[300px]",false:"w-[60px] overflow-hidden"},fixed:{true:"relative w-[300px]",false:""},gradient:{false:"bg-back-ground-sidebar-back",true:"bg-back-ground-sidebar-back"}},defaultVariants:{expanded:!1}}),K=d({base:"flex-grow overflow-auto flex flex-col gap-2",variants:{expanded:{true:"p-4",false:"py-4"}}}),v=d({base:"w-full flex h-12 cursor-pointer items-center gap-3 px-4 py-2 text-sm transition-all bg-primary rounded-2xl",variants:{expanded:{true:"",false:"justify-center"}}}),V=d({base:"cursor-pointer overflow-hidden  text-sm transition-all duration-300"}),Y=d({base:"rounded-t-2xl flex h-[93px]  bg-white items-center gap-4 text-headline-small",variants:{expanded:{true:"p-4",false:"p-2"}}}),z=d({base:"flex h-[112px] items-center  p-4",variants:{expanded:{true:"p-4",false:""}}}),X=d({base:" flex flex-col gap-2",variants:{expanded:{true:"p-4",false:"py-4"}}}),w=d({base:"h-8 w-full p-2 flex items-center justify-center gap-2 rounded-full text-label-small border",variants:{color:{gray:"border-text-base-light bg-transparent text-text-base-light",error:"border-error-text bg-transparent text-error-text",green:"border-others-green bg-transparent text-others-green",warning:"border-others-yellow bg-transparent text-others-yellow",primary:"border-primary bg-transparent text-primary"}},defaultVariants:{color:"gray"}}),L=d({base:"text-text-base-light",variants:{color:{gray:"text-text-base-light",error:"text-error-text",green:"text-others-green",warning:"text-text-base-light",primary:"text-primary"}}});let n=class extends D(B){constructor(){super($`
      :host {
        display: block;
        height: 100vh;
        position: relative;
      }
    `.cssText),this.width="width:60px",this.systemName="",this.companyName="",this.headerIcon="",this.items=[],this.bottoms=[],this.gradient=!1,this._expanded=!1,this.openMenus=[],this._fixed=!1}static get styles(){const e=super.styles||[],i=$`
      :host {
        padding:16px;
      }
    `;return Array.isArray(e)?[...e,i]:[e,i]}get fixed(){return this._fixed}set fixed(e){const i=this._fixed;this._fixed=e,this.requestUpdate("fixed",i),this.dispatchEvent(new CustomEvent("pin-toggled",{detail:{fixed:e},bubbles:!0,composed:!0}))}get expanded(){return this._expanded}set expanded(e){const i=this._expanded;this._expanded=e,this.requestUpdate("expanded",i)}toggleMenu(e){this.openMenus.includes(e)?this.openMenus=this.openMenus.filter(i=>i!==e):this.openMenus=[...this.openMenus,e]}handleMouseOver(){this.expanded=!0}handleMouseLeave(){this.expanded=!1}isImageUrl(e){return e?e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")||e.startsWith("data:")||e.startsWith("./"):!1}sidebarStyle(){return A}headerElm(){return s`
      <!-- ヘッダー -->
      <div class="${Y({expanded:this.expanded})}">
        <div
          class="min-w-7 min-h-7 bg-white rounded-full flex items-center justify-center"
        >
          ${this.isImageUrl(this.headerIcon)?s`<img
                src="${this.headerIcon}"
                alt="header icon"
                width="68px"
                height="51px"
                class="w-[68px]"
              />`:s`<nl-icon
                color="primary"
                icon="${this.headerIcon}"
              ></nl-icon>`}
        </div>
        ${this.expanded||this.fixed?s`
              <div class="flex items-center justify-between flex-grow gap-3">
            
              <span 
              style="max-height: 68px;"
              class="flex font-bold text-headline-small text-back-ground-sidebar-back truncate whitespace-pre-line">
                  ${this.systemName}
                </span>
              
                <nl-icon
                  icon="${this.fixed?"mdi:chevron-down":"mdi:pin-outline"}"
                  class="cursor-pointer"
                  color="black"
                  rotate="45"
                  @click="${()=>this.fixed=!this.fixed}"
                ></nl-icon>
              </div>
            `:s``}
      </div>
    `}header2Elm(){return this.companyName?s` <!-- ヘッダー２ -->
      <div
        class="${z({expanded:this.expanded||this.fixed})}"
      >
        ${(this.expanded||this.fixed)&&this.companyName?s`
              <div class="flex flex-col">
                <span class="text-headline-small  truncate"
                  >${this.companyName}</span
                >
                <p @click="${()=>this.fixed=!this.fixed}"></p>
              </div>
            `:s``}
      </div>`:s``}statusLabelElm(){return this.statusLabel?this.expanded||this.fixed?s`
      <div class="px-4">
        <div class="${w({color:this.statusLabel.color})}">
          ${this.statusLabel.icon?s`<nl-icon
                icon="${this.statusLabel.icon}"
                class="size-[14px]"
                color="${L({color:this.statusLabel.color})}"
              ></nl-icon>`:s``}
          <span class="truncate text-label-large">${this.statusLabel.text}</span>
        </div>
      </div>
    `:this.statusLabel.icon?s`
          <div class="flex justify-center p-2">
            <div class="${w({color:this.statusLabel.color})}">
              <nl-icon
                icon="${this.statusLabel.icon}"
                class="size-[14px]"
                color="${L({color:this.statusLabel.color})}"
              ></nl-icon>
            </div>
          </div>
        `:s``:s``}render(){var e,i;return s`
    

      <div
        class="${this.sidebarStyle()({expanded:this.expanded,fixed:this.fixed,gradient:this.gradient})}"
        @mouseover="${()=>!this.fixed&&this.handleMouseOver()}"
        @mouseleave="${()=>!this.fixed&&this.handleMouseLeave()}"
      >
        ${this.headerElm()} ${this.header2Elm()}

        <!-- 中央部分のItems -->
        <div
          class="${K({expanded:this.expanded})}"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
      
          ${(e=this.items)==null?void 0:e.map(t=>s`
              <div class="flex flex-col bg-primary rounded-2xl">
              <a
                class="${v({expanded:this.expanded})}"
                @click="${a=>{var r,o;t.href||a.preventDefault(),t.children?(this.toggleMenu(t.id),(r=t.onClick)==null||r.call(t)):(o=t.onClick)==null||o.call(t)}}"
                href="${f(t.href)}"
              >
                <nl-icon
                  color="white"
                  icon="${t.icon}"
                  class="text-lg"
                ></nl-icon>
                ${this.expanded||this.fixed?s`<span
                        class="line-clamp-2 whitespace-pre-wrap text-label-large"
                        >${t.text}</span
                      >
                      ${t.children?s`
                            <nl-icon
                              color="white"
                              icon="mdi:chevron-down"
                              class="ml-auto text-sm transform transition-transform duration-300 ${this.openMenus.includes(t.id)?"rotate-180":""}"
                            ></nl-icon>
                          `:null} `:null}
              </a>

              ${t.children&&(this.expanded||this.fixed)?s`
                    <div
                      class="${V()}"
                      style="max-height: ${this.openMenus.includes(t.id)?t.children.length*48+"px":"0"}"
                    >
                      ${t.children.map(a=>s`
                          <a
                            class="pl-4 flex items-center hover:bg-others-primary-push h-12"
                            @click="${r=>{var o;r.stopPropagation(),a.href||r.preventDefault(),(o=a.onClick)==null||o.call(a)}}"
                            href="${f(a.href)}"
                          >
                            <div
                              class="pl-9 py-2 truncate"
                              @click="${r=>{var o;a.href||r.preventDefault(),(o=a.onClick)==null||o.call(a)}}"
                            >
                              <span
                                class="line-clamp-2 whitespace-pre-wrap text-label-large"
                                >${a.text}</span
                              >
                            </div>
                          </a>
                        `)}
                    </div>
                  `:null}
                   </div>
            `)}
       
        </div>
     <!-- statusを表示 -->
        ${this.statusLabelElm()}
        <!-- 下部のItems -->
        <div class="${X({expanded:this.expanded})}">
          ${(i=this.bottoms)==null?void 0:i.map(t=>s`
              <a
                class="${v({expanded:this.expanded})}"
                href="${f(t.href)}"
                @click="${a=>{var r;t.href||a.preventDefault(),(r=t.onClick)==null||r.call(t)}}"
              >
                <nl-icon
                  color="white"
                  icon="${t.icon}"
                  class="text-lg"
                ></nl-icon>
                ${this.expanded||this.fixed?s`<span
                      class="line-clamp-2 whitespace-pre-wrap text-body-small"
                      >${t.text}</span
                    >`:null}
              </a>
            `)}
        </div>
      </div>
    `}};l([c({type:String,attribute:"system-name"})],n.prototype,"systemName",2);l([c({type:String,attribute:"company-name"})],n.prototype,"companyName",2);l([c({type:String,attribute:"header-icon"})],n.prototype,"headerIcon",2);l([c({type:Array})],n.prototype,"items",2);l([c({type:Array,attribute:"bottoms"})],n.prototype,"bottoms",2);l([c({type:Boolean})],n.prototype,"gradient",2);l([c({type:Object,attribute:"status-label"})],n.prototype,"statusLabel",2);l([y()],n.prototype,"_expanded",2);l([y()],n.prototype,"openMenus",2);l([y()],n.prototype,"_fixed",2);n=l([P("nl-sidebar")],n);const p=""+new URL("icon-3rocNX_M.png",import.meta.url).href,{args:q,argTypes:F}=N("nl-sidebar"),lt={title:"Components/network-line/Sidebar",component:"nl-sidebar",args:q,argTypes:{...F,"status-label":{control:"object",description:"ステータスラベルの設定（icon, text, color）"}}},m=[{id:"dashboard",icon:"nl:dashboard",text:"TOP",onClick:()=>console.log("TOPがクリックされました")},{id:"vehicles",icon:"nl:file-copy",text:"請求",children:[{id:"vehicle-list",text:"車両一覧",onClick:()=>console.log("車両一覧がクリックされました")},{id:"vehicle-registration",text:"車両登録",onClick:()=>console.log("車両登録がクリックされました")}]},{id:"maintenance",icon:"nl:search",text:"検索",onClick:()=>console.log("整備管理がクリックされました")},{id:"reports",icon:"nl:settings",text:"設定",onClick:()=>console.log("レポートがクリックされました")},{id:"reports",icon:"nl:calendar-add-on",text:`システム
メンテナンス`,onClick:()=>console.log("レポートがクリックされました")}],h=[{id:"settings",icon:"nl:settings",text:"設定",onClick:()=>console.log("設定がクリックされました")},{id:"help",icon:"nl:help",text:"ヘルプ",onClick:()=>console.log("ヘルプがクリックされました")}],u={render:e=>s`
    <div style="height: 600px; position: relative;">
      <nl-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        .statusLabel="${e["status-label"]}"
        ?gradient="${e.gradient}"
      ></nl-sidebar>
    </div>
  `,args:{"system-name":`通信回線管理 
 システム`,"company-name":"","header-icon":p,items:m,bottoms:h,"status-label":{icon:"nl:warning",text:"注意",color:"warning"},gradient:!0},parameters:{design:{type:"figma",url:O("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},x={render:e=>s`
    <div style="height: 600px; position: relative;">
      <nl-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        .statusLabel="${e["status-label"]}"
        ?gradient="${e.gradient}"
      ></nl-sidebar>
    </div>
  `,args:{"system-name":`通信回線管理 
 システム`,"company-name":"","header-icon":p,items:m,bottoms:h,"status-label":{icon:"nl:check-circle",text:"処理中",color:"primary"},gradient:!0}},b={render:()=>s`
      <div class="flex gap-4" style="height: 600px;">
        <nl-sidebar
          system-name="システム1"
          header-icon="${p}"
          .items="${m}"
          .bottoms="${h}"
          .statusLabel="${{icon:"nl:check-circle",text:"完了",color:"green"}}"
          ?gradient="${!0}"
        ></nl-sidebar>
        <nl-sidebar
          system-name="システム2"
          header-icon="${p}"
          .items="${m}"
          .bottoms="${h}"
          .statusLabel="${{icon:"nl:alert-circle",text:"エラー",color:"error"}}"
          ?gradient="${!0}"
        ></nl-sidebar>
        <nl-sidebar
          system-name="システム3"
          header-icon="${p}"
          .items="${m}"
          .bottoms="${h}"
          .statusLabel="${{icon:"nl:alert",text:"警告",color:"warning"}}"
          ?gradient="${!0}"
        ></nl-sidebar>
        <nl-sidebar
          system-name="システム4"
          header-icon="${p}"
          .items="${m}"
          .bottoms="${h}"
          .statusLabel="${{text:"未処理",color:"gray"}}"
          ?gradient="${!0}"
        ></nl-sidebar>
      </div>
    `};var k,S,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <nl-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        .statusLabel="\${args['status-label']}"
        ?gradient="\${args.gradient}"
      ></nl-sidebar>
    </div>
  \`,
  args: {
    'system-name': '通信回線管理 \\n システム',
    'company-name': '',
    'header-icon': iconImage,
    items: defaultItems,
    bottoms: defaultBottoms,
    'status-label': {
      icon: 'nl:warning',
      text: '注意',
      color: 'warning'
    },
    gradient: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var C,_,M;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <nl-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        .statusLabel="\${args['status-label']}"
        ?gradient="\${args.gradient}"
      ></nl-sidebar>
    </div>
  \`,
  args: {
    'system-name': '通信回線管理 \\n システム',
    'company-name': '',
    'header-icon': iconImage,
    items: defaultItems,
    bottoms: defaultBottoms,
    'status-label': {
      icon: 'nl:check-circle',
      text: '処理中',
      color: 'primary'
    },
    gradient: true
  }
}`,...(M=(_=x.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var W,E,j;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const statusLabel1: {
      icon: string;
      text: string;
      color: 'green';
    } = {
      icon: 'nl:check-circle',
      text: '完了',
      color: 'green'
    };
    const statusLabel2: {
      icon: string;
      text: string;
      color: 'error';
    } = {
      icon: 'nl:alert-circle',
      text: 'エラー',
      color: 'error'
    };
    const statusLabel3: {
      icon: string;
      text: string;
      color: 'warning';
    } = {
      icon: 'nl:alert',
      text: '警告',
      color: 'warning'
    };
    const statusLabel4: {
      text: string;
      color: 'gray';
    } = {
      text: '未処理',
      color: 'gray'
    };
    return html\`
      <div class="flex gap-4" style="height: 600px;">
        <nl-sidebar
          system-name="システム1"
          header-icon="\${iconImage}"
          .items="\${defaultItems}"
          .bottoms="\${defaultBottoms}"
          .statusLabel="\${statusLabel1}"
          ?gradient="\${true}"
        ></nl-sidebar>
        <nl-sidebar
          system-name="システム2"
          header-icon="\${iconImage}"
          .items="\${defaultItems}"
          .bottoms="\${defaultBottoms}"
          .statusLabel="\${statusLabel2}"
          ?gradient="\${true}"
        ></nl-sidebar>
        <nl-sidebar
          system-name="システム3"
          header-icon="\${iconImage}"
          .items="\${defaultItems}"
          .bottoms="\${defaultBottoms}"
          .statusLabel="\${statusLabel3}"
          ?gradient="\${true}"
        ></nl-sidebar>
        <nl-sidebar
          system-name="システム4"
          header-icon="\${iconImage}"
          .items="\${defaultItems}"
          .bottoms="\${defaultBottoms}"
          .statusLabel="\${statusLabel4}"
          ?gradient="\${true}"
        ></nl-sidebar>
      </div>
    \`;
  }
}`,...(j=(E=b.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const dt=["Default","WithStatusLabel","WithStatusLabelColors"];export{u as Default,x as WithStatusLabel,b as WithStatusLabelColors,dt as __namedExportsOrder,lt as default};
