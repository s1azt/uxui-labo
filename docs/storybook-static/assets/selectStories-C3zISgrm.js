import{x as l}from"./lit-element-C4bBeaiV.js";import{f as p}from"./fixFigmaPath-DxFz5b9E.js";import{w as K}from"./decorator-Dt3Huotz.js";import{g as k}from"./storybook-utils-CyXQhEhe.js";import{w as A,u as W}from"./index-fMYyyWa4.js";var b=Object.freeze,J=Object.defineProperty,N=(i,d)=>b(J(i,"raw",{value:b(i.slice())})),y;function c(i,d="yg"){var m;const v=`${d}-select`;return l`
    <div ?data-error=${i.error||!1}
         ?data-disabled=${i.disabled||!1}
         ?data-readonly=${i.readonly||!1}
>
      <select class="${v}"
        ?disabled=${i.disabled||!1}
        ?readonly=${i.readonly||!1}
        ?required=${i.required||!1}>
        <option value="" disabled selected>
          ${i.placeholder||"Select an option"}
        </option>
        ${(m=i.options)==null?void 0:m.map(n=>l`
          <option value="${n.value}">${n.label}</option>
        `)}
      </select>
    </div>
  `}function P(i){const{componentName:d,title:v,componentType:m,renderWithCssAndComponent:n,prefix:o="yg",theme:f="blue"}=i,{events:h,args:S,argTypes:u,template:a}=k(d);u!=null&&u.options&&(u.options.control="object");const w={render:(s,r)=>{const t={placeholder:"Select an option",options:JSON.stringify([{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}])};return n?n({args:t,renderComponent:e=>a(e),renderCss:e=>c({...e,options:JSON.parse(e.options||"[]")},o)}):l`${a(t)}`},parameters:{design:{type:"figma",url:p("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6360-15736&m=dev")}}},O={render:(s,r)=>{const t={placeholder:"Search and select",searchable:!0,options:JSON.stringify([{value:"1",label:"Apple"},{value:"2",label:"Banana"},{value:"3",label:"Cherry"},{value:"4",label:"Date"},{value:"5",label:"Elderberry"}])};return n?n({args:t,renderComponent:e=>a(e),renderCss:e=>c({...e,options:JSON.parse(e.options||"[]")},o)}):l`${a(t)}`},parameters:{design:{type:"figma",url:p("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6360-15736&m=dev")}}},C={render:(s,r)=>{const t={placeholder:"Select an option",error:!0,options:JSON.stringify([{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}])};return n?n({args:t,renderComponent:e=>a(e),renderCss:e=>c({...e,options:JSON.parse(e.options||"[]")},o)}):l`${a(t)}`},parameters:{design:{type:"figma",url:p("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6360-15790&m=dev")}}},x={render:(s,r)=>{const t={placeholder:"Select an option","data-testid":o+"-select",options:JSON.stringify([{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}])};return n?n({args:t,renderComponent:e=>a(e),renderCss:e=>c({...e,options:JSON.parse(e.options||"[]")},o)}):l`${a(t)}`},play:async({canvasElement:s})=>{var g;const t=A(s).getByTestId(o+"-select"),e=((g=t.shadowRoot)==null?void 0:g.querySelector("div > div"))||t.querySelector("select");e&&await W.click(e)},parameters:{design:{type:"figma",url:p("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6360-15789&m=dev")}}},$={render:(s,r)=>{const t={placeholder:"Select an option",disabled:!0,options:JSON.stringify([{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}])};return n?n({args:t,renderComponent:e=>a(e),renderCss:e=>c({...e,options:JSON.parse(e.options||"[]")},o)}):l`${a(t)}`},parameters:{design:{type:"figma",url:p("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6360-15791&m=dev")}}},j={render:(s,r)=>{const t={placeholder:"Select an option",options:JSON.stringify([{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]),headerKey:"",headerValue:"Please select..."};return n?n({args:t,renderComponent:e=>a(e),renderCss:e=>c({...e,options:JSON.parse(e.options||"[]")},o)}):l`${a(t)}`},parameters:{design:{type:"figma",url:p("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6360-15790&m=dev")}}};return{default:{title:v,component:d,args:S,argTypes:u,parameters:{actions:{handles:h},theme:f},decorators:[K]},Default:w,Searchable:O,Error:C,Focus:x,Disabled:$,WithHeaderOptions:j,Select2Demo:{render:()=>l(y||(y=N([`
      <div style="padding: 20px;">
        <h3>Select2ライブラリを使用したCSS版Select</h3>
        
        <!-- Select2のCSS -->
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
        
        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">基本的なSelect2セレクトボックス</label>
          <div>
            <select id="basic-select2-`,`" style="width: 300px;">
              <option value="">選択してください</option>
              <option value="1">選択肢1</option>
              <option value="2">選択肢2</option>
              <option value="3">選択肢3</option>
              <option value="4">選択肢4</option>
              <option value="5">選択肢5</option>
            </select>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">検索可能なSelect2セレクトボックス</label>
          <div>
            <select id="searchable-select2-`,`" style="width: 300px;">
              <option value="">都道府県を選択してください</option>
              <option value="hokkaido">北海道</option>
              <option value="aomori">青森県</option>
              <option value="iwate">岩手県</option>
              <option value="miyagi">宮城県</option>
              <option value="akita">秋田県</option>
              <option value="yamagata">山形県</option>
              <option value="fukushima">福島県</option>
              <option value="ibaraki">茨城県</option>
              <option value="tochigi">栃木県</option>
              <option value="gunma">群馬県</option>
              <option value="saitama">埼玉県</option>
              <option value="chiba">千葉県</option>
              <option value="tokyo">東京都</option>
              <option value="kanagawa">神奈川県</option>
              <option value="niigata">新潟県</option>
              <option value="toyama">富山県</option>
              <option value="ishikawa">石川県</option>
              <option value="fukui">福井県</option>
              <option value="yamanashi">山梨県</option>
              <option value="nagano">長野県</option>
              <option value="gifu">岐阜県</option>
              <option value="shizuoka">静岡県</option>
              <option value="aichi">愛知県</option>
              <option value="mie">三重県</option>
            </select>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">複数選択可能なSelect2セレクトボックス</label>
          <div>
            <select id="multiple-select2-`,`" style="width: 300px;" multiple>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="react">React</option>
              <option value="vue">Vue.js</option>
              <option value="angular">Angular</option>
              <option value="nodejs">Node.js</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">選択クリア可能なSelect2セレクトボックス</label>
          <div>
            <select id="clearable-select2-`,`" style="width: 300px;">
              <option value="">カテゴリを選択してください</option>
              <option value="web">Web開発</option>
              <option value="mobile">モバイル開発</option>
              <option value="backend">バックエンド開発</option>
              <option value="database">データベース</option>
              <option value="devops">DevOps</option>
              <option value="ai">AI・機械学習</option>
            </select>
          </div>
        </div>

        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>
        <!-- Select2のJS -->
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"><\/script>
        
        <script>
          // DOM読み込み完了後にSelect2を初期化
          $(document).ready(function() {
            // 基本的なSelect2
            const $basicSelect2 = $('#basic-select2-`,`').select2({
              width: '100%',
              placeholder: '選択してください'
            });

            // 検索可能なSelect2
            $('#searchable-select2-`,`').select2({
              width: '100%',
              placeholder: '都道府県を検索または選択してください'
            });

            // 複数選択可能なSelect2
            $('#multiple-select2-`,`').select2({
              width: '100%',
              placeholder: '技術スタックを選択してください（複数選択可）'
            });

            // 選択クリア可能なSelect2
            $('#clearable-select2-`,`').select2({
              width: '100%',
              placeholder: 'カテゴリを選択してください',
              allowClear: true
            });
          });
        <\/script>
      </div>
    `])),o,o,o,o,o,o,o,o),parameters:{docs:{description:{story:"CSS版のSelectコンポーネントでSelect2ライブラリを使用した例です。検索機能、複数選択、選択クリア機能などを提供します。"}}}}}}export{P as c};
