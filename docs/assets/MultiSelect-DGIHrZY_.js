import{x as i}from"./lit-element-C4bBeaiV.js";import{t as b}from"./element-BmCHZ0P_.js";import{n as f}from"./property-BacG-Vag.js";import{c as m}from"./index-Br9a1yed.js";import{B as g,S as x}from"./select-validator-x4M-aYN7.js";import{c as y}from"./validator-Z-Is_xbn.js";import{g as S}from"./form-associated-C1RJQ55l.js";import{c as w}from"./calculateSize-BEzCU_f7.js";import"./Checkbox-PigucBoI.js";const n=[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"},{value:"option3",label:"オプション3"},{value:"option4",label:"オプション4"},{value:"option5",label:"オプション5"}],$=[{value:"tokyo",label:"東京都"},{value:"osaka",label:"大阪府"},{value:"kyoto",label:"京都府"},{value:"hokkaido",label:"北海道"},{value:"okinawa",label:"沖縄県"},{value:"kanagawa",label:"神奈川県"},{value:"saitama",label:"埼玉県"},{value:"chiba",label:"千葉県"},{value:"gunma",label:"群馬県"},{value:"tochigi",label:"栃木県"}],p=[{value:"frontend",label:"フロントエンド開発"},{value:"backend",label:"バックエンド開発"},{value:"mobile",label:"モバイル開発"},{value:"devops",label:"DevOps"},{value:"design",label:"UI/UXデザイン"},{value:"qa",label:"QA・テスト"},{value:"pm",label:"プロダクトマネジメント"},{value:"data",label:"データサイエンス"}],R=e=>(e!=null&&e.options&&(e.options.control="object"),e!=null&&e.value&&(e.value.control="object"),e!=null&&e.maxSelections&&(e.maxSelections.control="number"),e),B=(e,t)=>({Default:{render:l=>{var o;return i`${e({...l,options:(o=l.options)!=null&&o.length?l.options:JSON.stringify(n)})}`}},WithPreselectedValues:{render:()=>i`${e({placeholder:"オプションを選択してください",options:JSON.stringify(n),value:JSON.stringify(["option1","option3"]),searchable:!0})}`,parameters:{docs:{description:{story:`初期選択値が設定された${t==="base"?"":"Ninkei "}MultiSelectの例です。`}}}},WithMaxSelections:{render:()=>i`${e({placeholder:"最大3つまで選択可能",options:JSON.stringify(n),"max-selections":3,searchable:!0})}`,parameters:{docs:{description:{story:`最大選択数を制限した${t==="base"?"":"Ninkei "}MultiSelectの例です。3つまで選択可能で、それ以上は選択できなくなります。`}}}},Searchable:{render:()=>i`${e({placeholder:"都道府県を検索・選択してください",options:JSON.stringify($),searchable:!0,width:"400"})}`,parameters:{docs:{description:{story:`検索機能付きの${t==="base"?"":"Ninkei "}MultiSelectの例です。多くの選択肢から効率的に選択できます。`}}}},...t==="base"?{WithoutTags:{render:()=>i`${e({placeholder:"オプションを選択してください",options:JSON.stringify(n),value:JSON.stringify(["option1","option2"])})}`,parameters:{docs:{description:{story:"タグ表示をオフにしたMultiSelectの例です。選択した項目はテキストで表示されます。"}}}},ErrorState:{render:()=>i`${e({placeholder:"エラー状態のMultiSelect",options:JSON.stringify(n),error:!0,value:JSON.stringify(["option1"])})}`,parameters:{docs:{description:{story:"エラー状態のMultiSelectの例です。"}}}},Disabled:{render:()=>i`${e({placeholder:"無効状態のMultiSelect",options:JSON.stringify(n),disabled:!0,value:JSON.stringify(["option1","option2"])})}`,parameters:{docs:{description:{story:"無効状態のMultiSelectの例です。選択や削除ができません。"}}}},ReadOnly:{render:()=>i`${e({placeholder:"読み取り専用のMultiSelect",options:JSON.stringify(n),readonly:!0,value:JSON.stringify(["option1","option2"])})}`,parameters:{docs:{description:{story:"読み取り専用のMultiSelectの例です。選択は変更できませんが、内容は確認できます。"}}}},InteractiveDemo:{render:()=>t==="base"?i`
        <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px;">
          <div>
            <h3>技術スタック選択</h3>
            <yg-multi-select
              placeholder="興味のある技術分野を選択してください"
              .options="${p}"
              searchable
              max-selections="5"
              width="100%"
              @change="${l=>{const o=l.target.value,d=document.getElementById("selected-display");d&&(d.textContent=`選択中: ${o.join(", ")}`)}}"
            ></yg-multi-select>
            <p id="selected-display" style="margin-top: 10px; color: #666;">
              選択中: (なし)
            </p>
          </div>

          <div>
            <h3>フォーム連携例</h3>
            <form @submit="${l=>{l.preventDefault(),new FormData(l.target);const o=l.target.querySelector("yg-multi-select");alert(`送信データ: ${o.value.join(", ")}`)}}">
              <yg-multi-select
                name="skills"
                placeholder="必要なスキルを選択してください"
                .options="${p}"
                required
                max-selections="3"
                width="400px"
              ></yg-multi-select>
              <br><br>
              <button type="submit" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px;">
                送信
              </button>
            </form>
          </div>
        </div>
      `:i`
        <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px;">
          <div>
            <h3>技術スタック選択</h3>
            <nk-multi-select
              placeholder="興味のある技術分野を選択してください"
              .options="${p}"
              searchable
              max-selections="5"
              width="100%"
              @change="${l=>{const o=l.target.value,d=document.getElementById("selected-display-nk");d&&(d.textContent=`選択中: ${o.join(", ")}`)}}"
            ></nk-multi-select>
            <p id="selected-display-nk" style="margin-top: 10px; color: #666;">
              選択中: (なし)
            </p>
          </div>

          <div>
            <h3>フォーム連携例</h3>
            <form @submit="${l=>{l.preventDefault(),new FormData(l.target);const o=l.target.querySelector("nk-multi-select");alert(`送信データ: ${o.value.join(", ")}`)}}">
              <nk-multi-select
                name="skills"
                placeholder="必要なスキルを選択してください"
                .options="${p}"
                required
                max-selections="3"
                width="400px"
              ></nk-multi-select>
              <br><br>
              <button type="submit" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px;">
                送信
              </button>
            </form>
          </div>
        </div>
      `,parameters:{docs:{description:{story:"MultiSelectの実際の使用例です。選択イベントやフォーム連携を確認できます。"}}}}}:{}});var O=Object.defineProperty,k=Object.getOwnPropertyDescriptor,v=(e,t,r,s)=>{for(var a=s>1?void 0:s?k(t,r):t,c=e.length-1,u;c>=0;c--)(u=e[c])&&(a=(s?u(t,r,a):u(a))||a);return s&&a&&O(t,r,a),a};const D=m({base:"flex flex-shrink-0 items-center gap-3 text-left text-body-medium",variants:{state:{default:"rounded border border-input",disabled:"cursor-not-allowed rounded border border-gray-300 bg-neutral-screen text-body-medium shadow-none",readonly:"cursor-text rounded-none border-b border-input shadow-none",error:"rounded border border-error-base text-body-medium",dropdown:"rounded border border-primary"},focused:{true:"shadow-input-focus",false:"shadow-none"}},defaultVariants:{state:"default",focused:!1}});let h=class extends g{constructor(){super(),this.value=[]}firstUpdated(){super.firstUpdated()}selectOption(e){this.value||(this.value=[]),this.value.includes(e)?this.removeOption(e):(this.value=[...this.value,e],this.dispatchSelectEvents())}removeOption(e){if(!this.value){this.value=[];return}this.value=this.value.filter(t=>t!==e),this.dispatchSelectEvents()}getSelectedLabels(){return this.value?this.value.map(e=>{const t=(this.options||[]).find(r=>r.value===e);return(t==null?void 0:t.label)||e}):[]}getTriggerContent(){return!this.value||this.value.length===0?i`<span class="text-gray-500 truncate">${this.placeholder}</span>`:this.renderSelectedTags()}renderSelectedTags(){const e=this.value||[];return i`
      <div class="flex flex-wrap gap-1 flex-1 min-w-0">
        ${e.map(t=>this.renderTag(t))}
        ${e.length===0?i`<span class="text-gray-500">${this.placeholder}</span>`:""}
      </div>
    `}renderTag(e){const t=this.options.find(s=>s.value===e),r=(t==null?void 0:t.label)||e;return i`
      <div class="inline-flex items-center gap-1 px-2 py-1 text-body-small text-text-base bg-back-ground-base rounded max-w-32">
        <span class="truncate">${r}</span>
        ${!this.disabled&&!this.readonly?i`
          <iconify-icon
           @click="${s=>this.handleTagRemove(s,e)}"
          height="14px"
          icon="carbon:close-filled"
        ></iconify-icon>
        `:""}
      </div>
    `}handleTagRemove(e,t){e.preventDefault(),e.stopPropagation(),this.removeOption(t)}renderOption(e){const r=(this.value||[]).includes(e.value);return i`
      <div 
        class="min-h-[37px] py-[2px] px-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer ${r?"bg-blue-50":""}"
        @mousedown="${s=>this.handleOptionClick(s,e.value)}"
      >
        <yg-checkbox
          .checked="${r}" 
          class="flex-shrink-0"
          tabindex="-1"
        ></yg-checkbox>
        <span class="flex-1 truncate">${e.label}</span>
      </div>
    `}handleOptionClick(e,t){e.preventDefault(),e.stopPropagation(),this.selectOption(t)}render(){const e=w(this==null?void 0:this.width),t=this.selectStyles()({state:this.disabled?"disabled":this.readonly?"readonly":this.error?"error":this.showDropdown?"dropdown":"default",focused:this.focused||this.showDropdown});return i`
      <select
        .focused=${this.focused||this.showDropdown}
        class="w-0 h-0 absolute"
      ></select>
      <div
        class=${t}
        style="width: ${this.fixSize?e:"auto"}; min-height: auto; position: ${"relative"}"
        id="container"
      >
        <!-- 選択されている項目の表示 -->
        <div
          @click="${this.toggleDropdown}"
          class="w-full min-h-full flex items-center p-2 gap-3 justify-between cursor-pointer"
          id="trigger"
        >
          <div class="flex-1 min-w-0 flex items-center">
            ${this.getTriggerContent()}
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <yg-icon icon="yg:arrow-down-small"></yg-icon>
          </div>
        </div>
        
        <!-- ドロップダウンリスト -->
        ${this.renderDropdown()}
      </div>
    `}[S](){return(this.value||[]).join(",")}formStateRestoreCallback(e){if(Array.isArray(e))this.value=e;else if(typeof e=="string")try{this.value=JSON.parse(e)}catch{this.value=e?e.split(",").map(t=>t.trim()).filter(t=>t):[]}else this.value=[]}[y](){return new x(()=>({value:(this.value||[]).join(","),options:this.options||[],required:this.required}))}selectStyles(){return D}updated(e){super.updated(e),e.has("value")&&(this.searchText="",this.filteredOptions=this.options)}};v([f({type:Array,converter:{fromAttribute:e=>{if(!e)return[];try{return JSON.parse(e)}catch{return e.split(",").map(t=>t.trim()).filter(t=>t)}},toAttribute:e=>JSON.stringify(e)}})],h.prototype,"value",2);h=v([b("yg-multi-select")],h);export{h as Y,B as c,D as m,R as s};
