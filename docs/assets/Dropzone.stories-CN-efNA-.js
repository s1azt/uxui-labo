import{x as a,T as I}from"./lit-element-C4bBeaiV.js";import{g as fe}from"./storybook-utils-CyXQhEhe.js";import{t as P,E as k}from"./element-BmCHZ0P_.js";import{n as l}from"./property-BacG-Vag.js";import{r as _}from"./state-CLgbQenF.js";import{e as he}from"./query-DXShiZ7f.js";import"./Icon-BaQ5x4F3.js";import"./Button-BLyu90HC.js";import{m as ue}from"./element-internals-CBp_Vcyn.js";import{m as ge,g as ve}from"./form-associated-C1RJQ55l.js";import{V as we,m as xe,c as ye,g as be}from"./validator-Z-Is_xbn.js";import{m as Be,o as Fe}from"./on-report-validity-Dy401omy.js";import{c as m}from"./index-Br9a1yed.js";import{N as L}from"./element-BHnNw0zf.js";import{f}from"./fixFigmaPath-DxFz5b9E.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./base-DIkkzJ-c.js";import"./Icon-CzSa45Vk.js";import"./Button-Drw3qSHJ.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";class Ee extends we{computeValidity(t){if(!t||!t.state)return{validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},validationMessage:""};const{state:i,renderedControl:s}=t;let r=s;return r||(r=this.inputControl||document.createElement("input"),this.inputControl=r),r.required=i.required,i.required&&(!i.files||i.files.length===0)?r.setCustomValidity("このフィールドは必須です"):r.setCustomValidity(""),{validity:r.validity,validationMessage:r.validationMessage}}equals(t,i){if(!t||!i||!t.state||!i.state)return!1;const s=t.state,r=i.state,n=s.files?s.files.length:0,o=r.files?r.files.length:0;return s.required===r.required&&n===o}copy(t){if(!t||!t.state)return{state:{required:!1,files:[]},renderedControl:null};const i=t.state;return{state:{required:i.required,files:i.files?[...i.files]:[]},renderedControl:null}}}const c={container:m({base:"w-full"}),dropArea:m({base:"flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-border-base px-6 py-4 transition-colors duration-200 ease-in-out ",variants:{isDragging:{true:"border-primary bg-back-ground-primary-light",false:""},disabled:{true:"cursor-not-allowed opacity-50",false:""}},compoundVariants:[{isDragging:!1,disabled:!1,class:"hover:border-primary hover:bg-primary-thin"}],defaultVariants:{isDragging:!1,disabled:!1}}),icon:m({base:"mb-2 text-text-base"}),text:m({base:"mb-2 text-center text-[16px] text-text-base"},{twMerge:!1}),fileList:m({base:"mt-4 flex flex-col gap-2 space-y-2"}),fileItem:m({base:"flex items-center justify-between gap-4 rounded-lg border border-border-base px-6 py-4",variants:{status:{idle:"",error:"border-red-300 bg-red-50"}},defaultVariants:{status:"idle"}}),fileInfo:m({base:"flex items-center"}),fileIcon:m({base:"mr-4 text-text-base"}),fileName:m({base:"mb-2 break-all text-base font-medium text-text-base"},{twMerge:!1}),fileSize:m({base:"text-sm text-text-base"},{twMerge:!1}),fileActions:m({base:"flex items-center"}),errorMessage:m({base:"mt-1 text-xs text-red-500"},{twMerge:!1})},$e="border border-gray-200 rounded-lg p-4",De="w-full",ze="flex items-center justify-between mb-3",Ce="text-lg font-medium";class Se{constructor(t,i){this.isDragging=!1,this.disabled=!1,this.host=t,this.onDragStateChange=i.onDragStateChange,this.onFilesDropped=i.onFilesDropped,this.disabled=i.disabled||!1,this.handleDragEnter=this.handleDragEnter.bind(this),this.handleDragOver=this.handleDragOver.bind(this),this.handleDragLeave=this.handleDragLeave.bind(this),this.handleDrop=this.handleDrop.bind(this)}setupListeners(){this.host.addEventListener("dragenter",this.handleDragEnter),this.host.addEventListener("dragover",this.handleDragOver),this.host.addEventListener("dragleave",this.handleDragLeave),this.host.addEventListener("drop",this.handleDrop)}removeListeners(){this.host.removeEventListener("dragenter",this.handleDragEnter),this.host.removeEventListener("dragover",this.handleDragOver),this.host.removeEventListener("dragleave",this.handleDragLeave),this.host.removeEventListener("drop",this.handleDrop)}setDisabled(t){this.disabled=t}handleDragEnter(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(this.isDragging=!0,this.onDragStateChange(!0))}handleDragOver(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(this.isDragging=!0,this.onDragStateChange(!0))}handleDragLeave(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(this.isDragging=!1,this.onDragStateChange(!1))}handleDrop(t){if(t.preventDefault(),t.stopPropagation(),this.disabled)return;this.isDragging=!1,this.onDragStateChange(!1);const i=t.dataTransfer;i!=null&&i.files&&this.onFilesDropped(i.files)}}class pe{constructor(t){this.accept=t.accept||"",this.maxSize=t.maxSize||1/0,this.maxFiles=t.maxFiles||1/0}updateOptions(t){t.accept!==void 0&&(this.accept=t.accept),t.maxSize!==void 0&&(this.maxSize=t.maxSize),t.maxFiles!==void 0&&(this.maxFiles=t.maxFiles)}isAcceptedFileType(t){return!!(!this.accept||this.accept.split(",").map(s=>s.trim()).some(s=>{if(s.endsWith("/*")){const r=s.split("/")[0];return t.type.startsWith(`${r}/`)}return t.type===s?!0:s.startsWith(".")?`.${t.name.split(".").pop()}`.toLowerCase()===s.toLowerCase():!1}))}isAcceptedFileSize(t){return t.size<=this.maxSize}isAcceptedFileCount(t,i){return t+i<=this.maxFiles}formatFileSize(t){if(t===0)return"0 B";const i=1024,s=["B","KB","MB","GB","TB"],r=Math.floor(Math.log(t)/Math.log(i));return`${parseFloat((t/Math.pow(i,r)).toFixed(2))} ${s[r]}`}_getFileIcon(t){return t.type.startsWith("image/")?"mdi:file-image-outline":t.type.startsWith("video/")?"mdi:file-video-outline":t.type.startsWith("audio/")?"mdi:file-music-outline":t.type==="application/pdf"?"mdi:file-pdf-outline":t.type.includes("word")?"mdi:file-word-outline":t.type.includes("excel")||t.type.includes("spreadsheet")?"mdi:file-excel-outline":t.type.includes("powerpoint")||t.type.includes("presentation")?"mdi:file-powerpoint-outline":t.type.includes("zip")||t.type.includes("compressed")?"mdi:file-zip-outline":"mdi:file-outline"}}function me(e){return e.type.startsWith("image/")}function ce(e){return e.type==="application/pdf"}function C(e){return e.type.startsWith("text/")||e.type==="application/json"||e.type==="application/xml"}function Pe(e){if(me(e)||ce(e)||C(e))return URL.createObjectURL(e)}function T(e){e&&e.startsWith("blob:")&&URL.revokeObjectURL(e)}function ke(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=r=>{var n;t(((n=r.target)==null?void 0:n.result)||"")},s.onerror=()=>{i(new Error("ファイルの読み取りに失敗しました"))},s.readAsText(e)})}var Le=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,A=(e,t,i,s)=>{for(var r=s>1?void 0:s?Ie(t,i):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(s?o(t,i,r):o(r))||r);return s&&r&&Le(t,i,r),r};let S=class extends L(k){constructor(){super(...arguments),this.isDragging=!1,this.disabled=!1}handleSelectClick(e){e.stopPropagation(),!this.disabled&&this.dispatchEvent(new CustomEvent("select-click",{bubbles:!0,composed:!0}))}render(){return a`
      <div
        class="${c.dropArea({isDragging:this.isDragging,disabled:this.disabled})}"
        @click="${this.handleSelectClick}"
      >
        <nk-icon
          icon="yg:file-upload"
          width="40"
          height="40"
          class="${c.icon()}"
        ></nk-icon>
        <p
          class="${c.text()} cursor-pointer"
          @click="${this.handleSelectClick}"
        >
          ここにファイルをドラッグ&ドロップ<br />
          または
        </p>
        <nk-button
          variant="outlined"
          color="primary"
          size="small"
          @click="${this.handleSelectClick}"
          ?disabled="${this.disabled}"
        >
          ファイルを選択
        </nk-button>
      </div>
    `}};A([l({type:Boolean})],S.prototype,"isDragging",2);A([l({type:Boolean})],S.prototype,"disabled",2);S=A([P("nk-dropzone-area")],S);var Te=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,g=(e,t,i,s)=>{for(var r=s>1?void 0:s?_e(t,i):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(s?o(t,i,r):o(r))||r);return s&&r&&Te(t,i,r),r};let h=class extends L(k){constructor(){super(...arguments),this.index=0,this.disabled=!1,this.readonly=!1,this.showPreview=!1,this.fileTextContent="",this.fileValidator=new pe({})}handleRemove(e){e.stopPropagation(),!(this.disabled||this.readonly)&&this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file.file,index:this.index},bubbles:!0,composed:!0}))}handleRetry(e){e.stopPropagation(),!(this.disabled||this.readonly)&&this.dispatchEvent(new CustomEvent("file-retry",{detail:{file:this.file.file,index:this.index},bubbles:!0,composed:!0}))}async loadTextContent(){if(C(this.file.file)&&!this.fileTextContent)try{this.fileTextContent=await ke(this.file.file)}catch(e){console.error("テキストファイルの読み取りに失敗しました:",e),this.fileTextContent="ファイルの読み取りに失敗しました"}}renderPreviewContent(){return!this.showPreview||!this.file.previewUrl?"":(C(this.file.file)&&!this.fileTextContent&&this.loadTextContent(),me(this.file.file)?a`
        <div class="mt-2 bg-gray-50 rounded border">
          <img
            src="${this.file.previewUrl}"
            alt="${this.file.file.name}"
            class="max-w-full max-h-32 object-contain mx-auto block rounded"
            loading="lazy"
          />
        </div>
      `:ce(this.file.file)?a`
        <div class="mt-2 bg-gray-50 rounded border">
          <iframe
            src="${this.file.previewUrl}"
            class="w-full h-32 border-0 rounded"
            title="PDF Preview"
          ></iframe>
        </div>
      `:C(this.file.file)?a`
        <div class="mt-2 p-2 bg-gray-50 rounded border">
          <pre class="text-xs text-gray-700 whitespace-pre-wrap max-h-32 overflow-y-auto font-mono">${this.fileTextContent}</pre>
        </div>
      `:"")}render(){return a`
      <div
        class="${c.fileItem({status:this.file.status})}"
      >
        <div class="${c.fileInfo()}">
          <nk-icon
            icon="yg:file-outline"
            width="48"
            height="48"
            class="${c.fileIcon()}"
          ></nk-icon>
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <span class="${c.fileName()}"
                >${this.file.file.name}</span
              >
            </div>
            <div class="${c.fileSize()}">
              ${this.fileValidator.formatFileSize(this.file.file.size)}
            </div>
            ${this.file.status==="error"?a`
                  <div class="${c.errorMessage()}">
                    ${this.file.errorMessage||"アップロードに失敗しました"}
                  </div>
                `:""}
            
            ${this.renderPreviewContent()}
          </div>
        </div>
        ${this.readonly?"":a`
          <div class="${c.fileActions()}">
            ${this.file.status==="error"?a`
                  <nk-icon
                    icon="yg:refresh"
                    width="20"
                    height="20"
                    class="text-gray-400 cursor-pointer hover:text-gray-600 mr-2"
                    @click="${this.handleRetry}"
                    
                  ></nk-icon>
                  <nk-icon
                    icon="yg:dust-box"
                    width="20"
                    height="20"
                    class="text-gray-400 cursor-pointer hover:text-red-500"
                    @click="${this.handleRemove}"
                   
                  ></nk-icon>
                `:a`
                  <nk-icon
                    icon="yg:dust-box"
                    width="24"
                    height="24"
                    class="text-text-base cursor-pointer hover:text-red-500"
                    @click="${this.handleRemove}"
                    title="削除"
                  ></nk-icon>
                `}
          </div>
        `}
      </div>
    `}};g([l({type:Object})],h.prototype,"file",2);g([l({type:Number})],h.prototype,"index",2);g([l({type:Boolean})],h.prototype,"disabled",2);g([l({type:Boolean})],h.prototype,"readonly",2);g([l({type:Boolean,attribute:"show-preview"})],h.prototype,"showPreview",2);g([_()],h.prototype,"fileTextContent",2);h=g([P("nk-dropzone-file-item")],h);var Ae=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,v=(e,t,i,s)=>{for(var r=s>1?void 0:s?Oe(t,i):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(s?o(t,i,r):o(r))||r);return s&&r&&Ae(t,i,r),r};let u=class extends L(k){constructor(){super(...arguments),this.files=[],this.disabled=!1,this.multiple=!1,this.readonly=!1,this.showPreview=!1}handleAddFileClick(e){e.stopPropagation(),!this.disabled&&this.dispatchEvent(new CustomEvent("add-file-click",{bubbles:!0,composed:!0}))}handleFileRemove(e){this.disabled||this.dispatchEvent(new CustomEvent("file-removed",{detail:e.detail,bubbles:!0,composed:!0}))}handleFileRetry(e){this.disabled||this.dispatchEvent(new CustomEvent("file-retry",{detail:e.detail,bubbles:!0,composed:!0}))}render(){var e,t;return this.multiple?a`
        <div>
          <div class="${ze}">
            <h3 class="${Ce}">アップロードファイル</h3>
            ${!this.readonly&&!this.disabled?a`
                  <nk-button
                    variant="text"
                    color="primary"
                    @click="${this.handleAddFileClick}"
                    ?disabled="${this.disabled}"
                  >
                    ファイルを追加
                  </nk-button>
                `:""}
          </div>
          <div class="${c.fileList()}">
            ${(e=this.files)==null?void 0:e.map((i,s)=>a`
                <nk-dropzone-file-item
                  .file="${i}"
                  .index="${s}"
                  ?disabled="${this.disabled}"
                  ?readonly="${this.readonly}"
                  ?show-preview="${this.showPreview}"
                  @file-remove="${this.handleFileRemove}"
                  @file-retry="${this.handleFileRetry}"
                ></nk-dropzone-file-item>
              `)}
          </div>
        </div>
      `:((t=this.files)==null?void 0:t.length)>0?a`
        <nk-dropzone-file-item
          .file="${this.files[0]}"
          .index="${0}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?show-preview="${this.showPreview}"
          @file-remove="${this.handleFileRemove}"
          @file-retry="${this.handleFileRetry}"
        ></nk-dropzone-file-item>
      `:a``}};v([l({type:Array})],u.prototype,"files",2);v([l({type:Boolean})],u.prototype,"disabled",2);v([l({type:Boolean})],u.prototype,"multiple",2);v([l({type:Boolean})],u.prototype,"readonly",2);v([l({type:Boolean,attribute:"show-preview"})],u.prototype,"showPreview",2);u=v([P("nk-dropzone-file-list")],u);var je=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,p=(e,t,i,s)=>{for(var r=s>1?void 0:s?Ne(t,i):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(s?o(t,i,r):o(r))||r);return s&&r&&je(t,i,r),r};const Re=Be(xe(ge(ue(L(k)))));let d=class extends Re{constructor(){super(...arguments),this.accept="",this.value="",this.multiple=!1,this.maxFiles=1/0,this.maxSize=1/0,this.required=!1,this.readonly=!1,this.showPreview=!1,this.error=!1,this.isDragging=!1,this.files=[],this.fileValidator=new pe({accept:this.accept,maxSize:this.maxSize,maxFiles:this.maxFiles})}firstUpdated(){this.dropzoneController=new Se(this,{onDragStateChange:e=>{this.isDragging=e},onFilesDropped:e=>{this.handleFiles(e)},disabled:this.disabled}),this.dropzoneController.setupListeners(),setTimeout(()=>{this._updateValidation()},0)}updated(e){(e.has("accept")||e.has("maxSize")||e.has("maxFiles"))&&this.fileValidator.updateOptions({accept:this.accept,maxSize:this.maxSize,maxFiles:this.maxFiles}),e.has("disabled")&&this.dropzoneController&&this.dropzoneController.setDisabled(this.disabled),super.updated(e)}disconnectedCallback(){this.dropzoneController&&this.dropzoneController.removeListeners(),this.files.forEach(e=>{e.previewUrl&&T(e.previewUrl)}),super.disconnectedCallback()}_updateValidation(){var e;if(this.internals)try{this.required&&(!this.files||((e=this.files)==null?void 0:e.length)===0)?(this.internals.setValidity({valueMissing:!0},"このフィールドは必須です",this),this.setAttribute("aria-invalid","true")):(this.internals.setValidity({}),this.removeAttribute("aria-invalid"))}catch(t){console.error("Failed to set validity:",t)}}handleSelectClick(){var e;this.disabled||((e=this.files)==null?void 0:e.length)>0||this.fileInput.click()}handleAddFileClick(){this.disabled||this.fileInput.click()}handleFileSelect(e){const t=e.target;t.files&&this.handleFiles(t.files)}handleFileRemoved(e){if(this.disabled)return;const{index:t}=e.detail,i=this.files[t];i.previewUrl&&T(i.previewUrl),this.files=this.files.filter((s,r)=>r!==t),this._updateInputFiles(),setTimeout(()=>{this._updateValidation()},0),this.dispatchEvent(new CustomEvent("file-removed",{detail:{file:i.file,index:t},bubbles:!0,composed:!0}))}handleFileRetry(e){if(this.disabled)return;const{index:t}=e.detail;console.log("Retry file upload:",t)}handleFiles(e){var i;if(this.disabled)return;if(!this.fileValidator.isAcceptedFileCount((i=this.files)==null?void 0:i.length,e.length)){this._showError(`最大${this.maxFiles}ファイルまで選択できます`);return}const t=[];Array.from(e).forEach(s=>{var o;if(!this.fileValidator.isAcceptedFileType(s)){this._showError(`${s.name}は許可されていないファイル形式です`),alert(`${s.name}は許可されていないファイル形式です`);return}if(!this.fileValidator.isAcceptedFileSize(s)){this._showError(`${s.name}のサイズが大きすぎます（最大${this.fileValidator.formatFileSize(this.maxSize)}）`);return}t.push(s);const r=this.showPreview?Pe(s):void 0,n={file:s,status:"idle",previewUrl:r};this.files=[...this.files,n],this.dispatchEvent(new CustomEvent("file-added",{detail:{file:s,index:((o=this.files)==null?void 0:o.length)-1},bubbles:!0,composed:!0}))}),t.length>0&&this._updateInputFiles(),setTimeout(()=>{this._updateValidation()},0)}_updateInputFiles(){var e;if(this.fileInput)try{const t=new DataTransfer;(e=this.files)==null||e.forEach(i=>{t.items.add(i.file)}),this.fileInput.files=t.files}catch(t){console.warn("input要素のfilesプロパティの更新に失敗しました:",t)}}_showError(e){console.error(e)}setFileError(e,t){var s;if(e<0||e>=((s=this.files)==null?void 0:s.length))return;const i=[...this.files];i[e]={...i[e],status:"error",errorMessage:t},this.files=i,this.dispatchEvent(new CustomEvent("upload-error",{detail:{file:this.files[e].file,error:t,index:e},bubbles:!0,composed:!0}))}clearFiles(){this.files.forEach(e=>{e.previewUrl&&T(e.previewUrl)}),this.files=[],this.value="",this._updateInputFiles(),setTimeout(()=>{this._updateValidation()},0),this.dispatchEvent(new Event("change",{bubbles:!0}))}getFiles(){var e;return((e=this.files)==null?void 0:e.map(t=>t.file))||[]}addFilesToFormData(e){var t;!this.files||((t=this.files)==null?void 0:t.length)===0||(this.multiple?this.files.forEach((i,s)=>{e.append(`${this.name}[${s}]`,i.file)}):e.append(this.name,this.files[0].file))}[ve](){var t;if(!this.files||((t=this.files)==null?void 0:t.length)===0)return"";const e=new FormData;return!this.files||this.files.length===0||this.files.forEach(i=>{e.append(this.name,i.file)}),e}formResetCallback(){this.clearFiles()}formStateRestoreCallback(e){if(!e){this.clearFiles();return}try{const t=JSON.parse(e);this.value=e}catch(t){console.error("Failed to restore dropzone state:",t)}}[ye](){return new Ee(()=>({state:{required:this.required,files:this.files},renderedControl:this.fileInput}))}[be](){return this.fileInput}[Fe](e){this.error=e!==null}render(){var e;return a`
      <div class="${c.container()}">
        <!-- input要素は常に存在し、@queryで参照可能にする -->
        <input
          type="file"
          style="position: absolute; opacity: 0; width: 1px; height: 1px;"
          name="${this.name||I}"
          ?multiple="${this.multiple||I}"
          accept="${this.accept||I}"
          @change="${this.handleFileSelect}"
          ?disabled="${this.disabled}"
          tabindex="-1"
        />
        
        ${((e=this.files)==null?void 0:e.length)===0?a`
              <nk-dropzone-area
                ?isDragging="${this.isDragging}"
                ?disabled="${this.disabled}"
                @select-click="${this.handleSelectClick}"
              ></nk-dropzone-area>
            `:a`
              <div
                class="${this.multiple?$e:De}"
              >
                <nk-dropzone-file-list
                  .files="${this.files}"
                  ?multiple="${this.multiple}"
                  ?disabled="${this.disabled}"
                  ?readonly="${this.readonly}"
                  ?show-preview="${this.showPreview}"
                  @file-removed="${this.handleFileRemoved}"
                  @file-retry="${this.handleFileRetry}"
                  @add-file-click="${this.handleAddFileClick}"
                ></nk-dropzone-file-list>
              </div>
            `}
      </div>
    `}};d.formAssociated=!0;p([l({type:String})],d.prototype,"accept",2);p([l({reflect:!0})],d.prototype,"value",2);p([l({type:Boolean})],d.prototype,"multiple",2);p([l({type:Number,attribute:"max-files"})],d.prototype,"maxFiles",2);p([l({type:Number,attribute:"max-size"})],d.prototype,"maxSize",2);p([l({type:Boolean})],d.prototype,"required",2);p([l({type:Boolean})],d.prototype,"readonly",2);p([l({type:Boolean,attribute:"show-preview"})],d.prototype,"showPreview",2);p([l({type:Boolean,reflect:!0})],d.prototype,"error",2);p([_()],d.prototype,"isDragging",2);p([_()],d.prototype,"files",2);p([he('input[type="file"]')],d.prototype,"fileInput",2);d=p([P("nk-dropzone")],d);const Ue=""+new URL("sample-1-_k43dI0i.jpg",import.meta.url).href,{args:Ve,argTypes:Me,template:w,events:Je}=fe("nk-dropzone"),yt={title:"Components/Ninkei/Dropzone",component:"nk-dropzone",args:Ve,argTypes:Me,parameters:{actions:{handles:Je},docs:{description:{component:"ファイルアップロード用のドロップゾーンコンポーネントです。"}}}},x={render:e=>a`
    <nk-dropzone
      .accept=${e.accept}
      ?multiple=${e.multiple}
      .maxFiles=${e.maxFiles}
      .maxSize=${e.maxSize}
      ?disabled=${e.disabled}
      .files=${e.files}
      @file-added=${t=>{console.log("File added:",t.detail)}}
      @file-removed=${t=>{console.log("File removed:",t.detail)}}
    ></nk-dropzone>
  `,args:{accept:"",multiple:!1,maxFiles:1/0,maxSize:1/0,disabled:!1,files:[]},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")}}},y={render:e=>a` ${w(e)} `,args:{accept:"image/*",multiple:!0,maxFiles:5,maxSize:50*1024*1024,disabled:!1},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")}}},b={render:e=>a` ${w(e)} `,args:{accept:".pdf,.doc,.docx,.xls,.xlsx",multiple:!0,maxFiles:3,maxSize:100*1024*1024,disabled:!1},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")}}},B={render:e=>a` ${w(e)} `,args:{accept:"",multiple:!0,maxFiles:5,maxSize:1/0,disabled:!0},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")}}},F={render:e=>a` ${w(e)} `,args:{accept:"",multiple:!0,maxFiles:5,maxSize:1/0,disabled:!1,files:[{file:new File(["サンプルファイル1の内容"],"sample1.txt",{type:"text/plain"}),status:"idle"},{file:new File(["サンプル画像ファイル"],"sample-image.jpg",{type:"image/jpeg"}),status:"idle"},{file:new File(["エラーファイルの内容"],"error-file.txt",{type:"text/plain"}),status:"error",errorMessage:"ファイルのアップロードに失敗しました"}]},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")},docs:{description:{story:"最初からファイルが追加されている状態のDropzoneです。正常なファイルとエラー状態のファイルの両方を含みます。"}}}},E={render:e=>a` ${w(e)} `,args:{accept:"",multiple:!0,maxFiles:5,maxSize:1/0,disabled:!1,readonly:!0,files:[{file:new File(["読み取り専用ファイル1"],"readonly-document.pdf",{type:"application/pdf"}),status:"idle"},{file:new File(["読み取り専用ファイル2"],"readonly-image.png",{type:"image/png"}),status:"idle"},{file:new File(["読み取り専用エラーファイル"],"readonly-error.txt",{type:"text/plain"}),status:"error",errorMessage:"アップロードエラー（読み取り専用モード）"}]},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")},docs:{description:{story:"読み取り専用モードのDropzoneです。ファイルは表示されますが、削除ボタン（ゴミ箱アイコン）は表示されません。"}}}},$={render:e=>a` ${w(e)} `,args:{accept:".pdf,.doc,.docx",multiple:!1,maxFiles:1,maxSize:1/0,disabled:!1,readonly:!0,files:[{file:new File(["単一ファイルの内容"],"single-readonly-file.pdf",{type:"application/pdf"}),status:"idle"}]},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")},docs:{description:{story:"単一ファイル選択モードでの読み取り専用Dropzoneです。削除ボタンは表示されません。"}}}},D={render:e=>a`
    <nk-dropzone
      .accept=${e.accept}
      ?multiple=${e.multiple}
      .maxFiles=${e.maxFiles}
      .maxSize=${e.maxSize}
      ?disabled=${e.disabled}
      ?show-preview=${e.showPreview}
      @file-added=${t=>{console.log("File added:",t.detail)}}
      @file-removed=${t=>{console.log("File removed:",t.detail)}}
    ></nk-dropzone>
  `,args:{accept:"image/*,application/pdf,text/*",multiple:!0,maxFiles:5,maxSize:1/0,disabled:!1,showPreview:!0},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")},docs:{description:{story:"ファイルプレビュー機能が有効なDropzoneです。画像、PDF、テキストファイルのプレビューが表示されます。ファイル名の横にある目のアイコンをクリックしてプレビューを表示/非表示できます。"}}}},z={render:e=>a`
    <nk-dropzone
      .accept=${e.accept}
      ?multiple=${e.multiple}
      .maxFiles=${e.maxFiles}
      .maxSize=${e.maxSize}
      ?disabled=${e.disabled}
      ?show-preview=${e.showPreview}
      .files=${e.files}
      @file-added=${t=>{console.log("File added:",t.detail)}}
      @file-removed=${t=>{console.log("File removed:",t.detail)}}
    ></nk-dropzone>
  `,args:{accept:"image/*,application/pdf,text/*",multiple:!0,maxFiles:5,maxSize:1/0,disabled:!1,showPreview:!0,files:[{file:new File([""],"sample-1.jpg",{type:"image/jpeg"}),status:"idle",previewUrl:Ue},{file:new File([`Hello, World!
This is a sample text file.
You can preview its content here.`],"sample.txt",{type:"text/plain"}),status:"idle",previewUrl:"blob:http://localhost:6006/sample-text-preview"},{file:new File([`{
  "name": "sample-config",
  "version": "1.0.0",
  "description": "Sample JSON configuration file"
}`],"config.json",{type:"application/json"}),status:"idle",previewUrl:"blob:http://localhost:6006/sample-json-preview"}]},parameters:{design:{type:"figma",url:f("https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev")},docs:{description:{story:"プレビュー機能が有効で、事前にファイルが読み込まれている状態のDropzoneです。サンプル画像（sample-1.jpg）、テキストファイル、JSONファイルのプレビューを確認できます。"}}}};var O,j,N;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => html\`
    <nk-dropzone
      .accept=\${args.accept}
      ?multiple=\${args.multiple}
      .maxFiles=\${args.maxFiles}
      .maxSize=\${args.maxSize}
      ?disabled=\${args.disabled}
      .files=\${args.files}
      @file-added=\${(e: CustomEvent) => {
    console.log('File added:', e.detail);
  }}
      @file-removed=\${(e: CustomEvent) => {
    console.log('File removed:', e.detail);
  }}
    ></nk-dropzone>
  \`,
  args: {
    accept: '',
    multiple: false,
    maxFiles: Infinity,
    maxSize: Infinity,
    disabled: false,
    files: []
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    }
  }
}`,...(N=(j=x.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var R,U,V;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    accept: 'image/*',
    multiple: true,
    maxFiles: 5,
    maxSize: 50 * 1024 * 1024,
    // 50MB
    disabled: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    }
  }
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var M,J,H;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    accept: '.pdf,.doc,.docx,.xls,.xlsx',
    multiple: true,
    maxFiles: 3,
    maxSize: 100 * 1024 * 1024,
    // 100MB
    disabled: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    }
  }
}`,...(H=(J=b.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var Q,W,q;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    accept: '',
    multiple: true,
    maxFiles: 5,
    maxSize: Infinity,
    disabled: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    }
  }
}`,...(q=(W=B.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var Y,G,K;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    accept: '',
    multiple: true,
    maxFiles: 5,
    maxSize: Infinity,
    disabled: false,
    files: [{
      file: new File(['サンプルファイル1の内容'], 'sample1.txt', {
        type: 'text/plain'
      }),
      status: 'idle' as const
    }, {
      file: new File(['サンプル画像ファイル'], 'sample-image.jpg', {
        type: 'image/jpeg'
      }),
      status: 'idle' as const
    }, {
      file: new File(['エラーファイルの内容'], 'error-file.txt', {
        type: 'text/plain'
      }),
      status: 'error' as const,
      errorMessage: 'ファイルのアップロードに失敗しました'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    },
    docs: {
      description: {
        story: '最初からファイルが追加されている状態のDropzoneです。正常なファイルとエラー状態のファイルの両方を含みます。'
      }
    }
  }
}`,...(K=(G=F.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,Z,ee;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    accept: '',
    multiple: true,
    maxFiles: 5,
    maxSize: Infinity,
    disabled: false,
    readonly: true,
    files: [{
      file: new File(['読み取り専用ファイル1'], 'readonly-document.pdf', {
        type: 'application/pdf'
      }),
      status: 'idle' as const
    }, {
      file: new File(['読み取り専用ファイル2'], 'readonly-image.png', {
        type: 'image/png'
      }),
      status: 'idle' as const
    }, {
      file: new File(['読み取り専用エラーファイル'], 'readonly-error.txt', {
        type: 'text/plain'
      }),
      status: 'error' as const,
      errorMessage: 'アップロードエラー（読み取り専用モード）'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    },
    docs: {
      description: {
        story: '読み取り専用モードのDropzoneです。ファイルは表示されますが、削除ボタン（ゴミ箱アイコン）は表示されません。'
      }
    }
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ie,se;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => html\` \${template(args)} \`,
  args: {
    accept: '.pdf,.doc,.docx',
    multiple: false,
    maxFiles: 1,
    maxSize: Infinity,
    disabled: false,
    readonly: true,
    files: [{
      file: new File(['単一ファイルの内容'], 'single-readonly-file.pdf', {
        type: 'application/pdf'
      }),
      status: 'idle' as const
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    },
    docs: {
      description: {
        story: '単一ファイル選択モードでの読み取り専用Dropzoneです。削除ボタンは表示されません。'
      }
    }
  }
}`,...(se=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var re,ae,ne;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => html\`
    <nk-dropzone
      .accept=\${args.accept}
      ?multiple=\${args.multiple}
      .maxFiles=\${args.maxFiles}
      .maxSize=\${args.maxSize}
      ?disabled=\${args.disabled}
      ?show-preview=\${args.showPreview}
      @file-added=\${(e: CustomEvent) => {
    console.log('File added:', e.detail);
  }}
      @file-removed=\${(e: CustomEvent) => {
    console.log('File removed:', e.detail);
  }}
    ></nk-dropzone>
  \`,
  args: {
    accept: 'image/*,application/pdf,text/*',
    multiple: true,
    maxFiles: 5,
    maxSize: Infinity,
    disabled: false,
    showPreview: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    },
    docs: {
      description: {
        story: 'ファイルプレビュー機能が有効なDropzoneです。画像、PDF、テキストファイルのプレビューが表示されます。ファイル名の横にある目のアイコンをクリックしてプレビューを表示/非表示できます。'
      }
    }
  }
}`,...(ne=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,oe,de;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => html\`
    <nk-dropzone
      .accept=\${args.accept}
      ?multiple=\${args.multiple}
      .maxFiles=\${args.maxFiles}
      .maxSize=\${args.maxSize}
      ?disabled=\${args.disabled}
      ?show-preview=\${args.showPreview}
      .files=\${args.files}
      @file-added=\${(e: CustomEvent) => {
    console.log('File added:', e.detail);
  }}
      @file-removed=\${(e: CustomEvent) => {
    console.log('File removed:', e.detail);
  }}
    ></nk-dropzone>
  \`,
  args: {
    accept: 'image/*,application/pdf,text/*',
    multiple: true,
    maxFiles: 5,
    maxSize: Infinity,
    disabled: false,
    showPreview: true,
    files: [{
      file: new File([''], 'sample-1.jpg', {
        type: 'image/jpeg'
      }),
      status: 'idle' as const,
      previewUrl: sampleImage
    }, {
      file: new File(['Hello, World!\\nThis is a sample text file.\\nYou can preview its content here.'], 'sample.txt', {
        type: 'text/plain'
      }),
      status: 'idle' as const,
      previewUrl: 'blob:http://localhost:6006/sample-text-preview'
    }, {
      file: new File(['{\\n  "name": "sample-config",\\n  "version": "1.0.0",\\n  "description": "Sample JSON configuration file"\\n}'], 'config.json', {
        type: 'application/json'
      }),
      status: 'idle' as const,
      previewUrl: 'blob:http://localhost:6006/sample-json-preview'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/TmBJLH8s3r97nQi8NBDuwx/%E4%BB%BB%E7%B6%99%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB?node-id=5975-52466&m=dev')
    },
    docs: {
      description: {
        story: 'プレビュー機能が有効で、事前にファイルが読み込まれている状態のDropzoneです。サンプル画像（sample-1.jpg）、テキストファイル、JSONファイルのプレビューを確認できます。'
      }
    }
  }
}`,...(de=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const bt=["Default","ImageUpload","DocumentUpload","Disabled","PreloadedFiles","ReadonlyWithFiles","ReadonlySingleFile","WithPreview","PreviewWithPreloadedFiles"];export{x as Default,B as Disabled,b as DocumentUpload,y as ImageUpload,F as PreloadedFiles,z as PreviewWithPreloadedFiles,$ as ReadonlySingleFile,E as ReadonlyWithFiles,D as WithPreview,bt as __namedExportsOrder,yt as default};
