import{x as S,T as c}from"./lit-element-C4bBeaiV.js";import{g as Y}from"./storybook-utils-CyXQhEhe.js";import{t as Z,E as q}from"./element-BmCHZ0P_.js";import{n as d}from"./property-BacG-Vag.js";import{c as V}from"./index-Br9a1yed.js";import"./Icon-BaQ5x4F3.js";import{N as J}from"./element-BHnNw0zf.js";import{f as Q}from"./fixFigmaPath-DxFz5b9E.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./Icon-CzSa45Vk.js";function X(e){if(!e||e<=0)return"0 Bytes";const r=1024,t=["Bytes","KB","MB","GB","TB"],a=Math.floor(Math.log(e)/Math.log(r));return`${parseFloat((e/Math.pow(r,a)).toFixed(1))} ${t[a]}`}const ee="fa6-regular:file-pdf",te="healthicons:excel-logo",ae="healthicons:excel-logo",re="fa6-regular:file-word",ie="fa6-regular:file-word",se="fa6-regular:file-powerpoint",oe="fa6-regular:file-powerpoint",le="fa6-regular:file-zipper",ne="fa6-regular:file-image",de="fa6-regular:file-image",ce="fa6-regular:file-image",pe={pdf:ee,xlsx:te,xls:ae,docx:re,doc:ie,pptx:se,ppt:oe,zip:le,png:ne,jpg:de,jpeg:ce};function fe(e){var t;const r=((t=e.split(".").pop())==null?void 0:t.toLowerCase())||"";return pe[r]||"fa6-regular:file"}var me=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,n=(e,r,t,a)=>{for(var i=a>1?void 0:a?ue(r,t):r,y=e.length-1,v;y>=0;y--)(v=e[y])&&(i=(a?v(r,t,i):v(i))||i);return a&&i&&me(r,t,i),i};const xe=V({base:"border-base flex w-full items-center justify-between gap-4 rounded-lg border px-4 py-2",variants:{disabled:{true:"cursor-not-allowed bg-neutral-100 text-disabled-text opacity-70",false:"cursor-pointer hover:bg-[#E6E6E6]"}}}),z=V({base:"size-6 transition duration-150",variants:{variant:{contained:" text-white",outlined:" text-primary",text:"text-primary",containedNoShadow:" text-white",base:"text-black"},disabled:{true:"text-disabled-text"},size:{small:"size-[14px]",medium:"size-6",large:"size-10"}}});let l=class extends J(q){constructor(){super(...arguments),this.filename="",this.fileSize=null,this.disabled=!1,this.href="",this.subText=""}render(){return S`
      <a
        target="_blank"
        href="${this.disabled?c:this.href}"
        download="${this.disabled?c:this.filename}"
        class="${xe({disabled:this.disabled})}"
       
      >
      <iconify-icon
          class="${z({size:"large",variant:"base",disabled:this.disabled})}"
          height="unset"
          icon="${fe(this.filename)}"
      ></iconify-icon>

      <div class="flex flex-col ml-2 flex-grow text-start leading-tight min-w-0 gap-1">
          <div class="text-body-medium truncate">
            ${this.filename}
          </div>
          ${this.subText?S`
            <p class="text-body-small text-text-base-light truncate">
              ${this.subText}
          </p>
          `:c}
          ${this.fileSize!=null&&this.fileSize>=0?S`
            <div class="text-body-small text-text-base-light">
              ${X(this.fileSize)}
            </div>
          `:c}
        </div>
        <iconify-icon
          class="${z({size:"medium",variant:"text",disabled:this.disabled})}"
          height="unset"
          icon="material-symbols:download-sharp"
        ></iconify-icon>
      </a>
    `}};n([d({type:String})],l.prototype,"filename",2);n([d({type:Number,attribute:"file-size"})],l.prototype,"fileSize",2);n([d({type:Boolean})],l.prototype,"disabled",2);n([d({type:String})],l.prototype,"href",2);n([d({type:String,attribute:"sub-text"})],l.prototype,"subText",2);l=n([Z("nk-file-downloader")],l);const{args:he,argTypes:ge,template:je}=Y("nk-file-downloader"),be={...ge,"sub-text":{control:"text",description:"ファイル名の下に表示するサブテキスト",table:{type:{summary:"string"},defaultValue:{summary:""}}}};function s(e,r){let t,a;e==="pdf"?(t="",a="application/pdf"):(t=`名前,年齢,部署
田中太郎,30,営業部
佐藤花子,25,開発部
山田次郎,35,総務部
鈴木一郎,28,マーケティング部
高橋美咲,32,人事部`,a="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");const i=new Blob([t],{type:a});return URL.createObjectURL(i)}const ke={title:"Components/Ninkei/FileDownload",component:"nk-file-downloader",args:{...he,"sub-text":""},argTypes:be},o={render:e=>S`
    <nk-file-downloader
      ?disabled=${e.disabled}
      filename=${e.filename}
      file-size=${e["file-size"]}
      href=${e.href}
      sub-text=${e["sub-text"]||""}
    ></nk-file-downloader>
  `,parameters:{design:{type:"figma",url:Q("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13401-15875&m=dev&focus-id=13401-15875")}}},p={...o,args:{filename:"dummy.pdf","file-size":13264,href:s("pdf")}},f={...o,args:{filename:"Archived_Document.pdf","file-size":15e5,href:s("pdf")}},m={...o,args:{filename:"Sale Data.xlsx","file-size":15e3,href:s("excel")}},u={...o,args:{filename:"Budget_Summary.xlsx","file-size":150,href:s("excel")}},x={...o,args:{filename:"Report_2024.pdf","file-size":2048e3,"sub-text":"2024年度月次売上レポート",href:s("pdf")}},h={...o,args:{filename:"vehicle_maintenance_records.xlsx","file-size":512e3,"sub-text":"車両メンテナンス記録 - 全車両の点検履歴と修理データを含む詳細レポート",href:s("excel")}},g={...o,args:{filename:"Archived_Data.pdf","file-size":1024e3,"sub-text":"アーカイブされたデータ（現在利用不可）",href:s("pdf"),disabled:!0}},b={...o,args:{filename:"Document.pdf",href:s("pdf")}};var w,_,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'dummy.pdf',
    'file-size': 13264,
    href: createSampleFile('pdf', 'dummy.pdf')
  }
}`,...(T=(_=p.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var D,F,$;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'Archived_Document.pdf',
    'file-size': 1500000,
    href: createSampleFile('pdf', 'Archived_Document.pdf')
  }
}`,...($=(F=f.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var E,B,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'Sale Data.xlsx',
    'file-size': 15000,
    href: createSampleFile('excel', 'Sale Data.xlsx')
  }
}`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var H,P,A;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'Budget_Summary.xlsx',
    'file-size': 150,
    href: createSampleFile('excel', 'Budget_Summary.xlsx')
  }
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var j,k,M;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'Report_2024.pdf',
    'file-size': 2048000,
    'sub-text': '2024年度月次売上レポート',
    href: createSampleFile('pdf', 'Report_2024.pdf')
  }
}`,...(M=(k=x.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var L,N,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'vehicle_maintenance_records.xlsx',
    'file-size': 512000,
    'sub-text': '車両メンテナンス記録 - 全車両の点検履歴と修理データを含む詳細レポート',
    href: createSampleFile('excel', 'vehicle_maintenance_records.xlsx')
  }
}`,...(O=(N=h.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,C,K;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'Archived_Data.pdf',
    'file-size': 1024000,
    'sub-text': 'アーカイブされたデータ（現在利用不可）',
    href: createSampleFile('pdf', 'Archived_Data.pdf'),
    disabled: true
  }
}`,...(K=(C=g.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var U,I,G;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Template,
  args: {
    filename: 'Document.pdf',
    href: createSampleFile('pdf', 'Document.pdf')
  }
}`,...(G=(I=b.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const Me=["PdfHoverEnabled","PdfHoverDisabled","ExcelHoverEnabled","ExcelHoverDisabled","WithSubText","WithLongSubText","DisabledWithSubText","WithoutFileSize"];export{g as DisabledWithSubText,u as ExcelHoverDisabled,m as ExcelHoverEnabled,f as PdfHoverDisabled,p as PdfHoverEnabled,h as WithLongSubText,x as WithSubText,b as WithoutFileSize,Me as __namedExportsOrder,ke as default};
