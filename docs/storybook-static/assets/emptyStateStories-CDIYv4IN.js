import{x as e,T as p}from"./lit-element-C4bBeaiV.js";import{o as r}from"./if-defined-DhMdV329.js";import{f as k}from"./fixFigmaPath-DxFz5b9E.js";import{w}from"./decorator-Dt3Huotz.js";import{g as C}from"./storybook-utils-CyXQhEhe.js";function s(c,t){const{variant:m="contained",color:o="primary",size:d,content:l}=t;switch(c){case"nk-button":return e`<nk-button variant=${m} color=${o} size=${r(d)}>${l}</nk-button>`;case"yg-button":return e`<yg-button variant=${m} color=${o} size=${r(d)}>${l}</yg-button>`;default:return p}}function a(c,t){switch(c){case"nk-empty-state":return e`<nk-empty-state 
        title=${t.title} 
        description=${t.description} 
        image=${r(t.image)}
        size=${r(t.size)}
      >${t.children}</nk-empty-state>`;case"yg-empty-state":return e`<yg-empty-state 
        title=${t.title} 
        description=${t.description} 
        image=${r(t.image)}
        size=${r(t.size)}
      >${t.children}</yg-empty-state>`;default:return p}}function V(c){const{componentName:t,title:m,buttonComponentName:o="yg-button"}=c,{events:d,args:l,argTypes:g,template:n}=C(t),u={...g,title:{control:"text",description:"Empty Stateのタイトルテキスト",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{control:"text",description:"Empty Stateの説明テキスト",table:{type:{summary:"string"},defaultValue:{summary:""}}},image:{control:"text",description:"表示する画像のパス",table:{type:{summary:"string"},defaultValue:{summary:""}}},"action-slot":{control:"text",description:"アクション部分のスロットコンテンツ（ボタンなど）",table:{type:{summary:"HTML"},defaultValue:{summary:""}}}},y={render:i=>e`${n(i)}`,args:{title:"データがありません",description:"条件を変更して再度お試しください",image:"","action-slot":""},parameters:{design:{type:"figma",url:k("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=13792-16713&node-type=symbol&m=dev")}}},$={render:i=>e`${n(i)}`,args:{title:"まだ何もありません",description:"最初のアイテムを追加してみましょう",image:"https://picsum.photos/250/200?random=1","action-slot":""}},h={render:i=>e`
      ${n(i,e`
        <div slot="action">
          ${s(o,{content:"新規作成"})}
        </div>
      `)}
    `,args:{title:"コンテンツがありません",description:"新しいコンテンツを作成して始めましょう",image:""}},f={render:i=>e`
      ${n(i,e`
        <div slot="action" class="flex gap-2">
          ${s(o,{variant:"outlined",content:"フィルターをリセット"})}
          ${s(o,{content:"新しい検索"})}
        </div>
      `)}
    `,args:{title:"検索結果が見つかりません",description:"別のキーワードで検索するか、フィルターを変更してみてください",image:"https://picsum.photos/250/200?random=1"}},v={render:i=>e`
      ${n(i,e`
        <div slot="action">
          ${s(o,{color:"red",content:"再試行"})}
        </div>
      `)}
    `,args:{title:"データの読み込みに失敗しました",description:"ネットワーク接続を確認して、もう一度お試しください",image:"https://picsum.photos/250/200?random=1"}},x={render:i=>e`
      ${n(i,e`
        <div slot="action">
          ${s(o,{content:"ダッシュボードへ"})}
        </div>
      `)}
    `,args:{title:"すべて完了しました！",description:"タスクがすべて処理されました。お疲れ様でした",image:"https://picsum.photos/250/200?random=1"}},b={render:()=>e`
      <div class="space-y-8">
        <!-- ファイルアップロード用 -->
        ${a(t,{title:"ファイルをアップロード",description:"ドラッグ&ドロップまたはクリックしてファイルを選択してください",image:"https://picsum.photos/250/200?random=1",children:e`
            <div slot="action" class="flex flex-col items-center gap-2">
              ${s(o,{size:"large",content:"ファイルを選択"})}
              <p class="text-sm text-gray-500">対応形式: PDF, JPG, PNG (最大 10MB)</p>
            </div>
          `})}

        <!-- お気に入り空状態 -->
        ${a(t,{title:"お気に入りがありません",description:"気になるアイテムをお気に入りに追加して、後で簡単にアクセスできます",image:"https://picsum.photos/250/200?random=1",children:e`
            <div slot="action">
              ${s(o,{content:"商品を探す"})}
            </div>
          `})}

        <!-- 通知空状態 -->
        ${a(t,{title:"新しい通知はありません",description:"重要な更新があった場合はここに表示されます",image:"https://picsum.photos/250/200?random=1",children:e`
            <div slot="action">
              ${s(o,{content:"設定を確認"})}
            </div>
          `})}
      </div>
    `},z={render:()=>e`
      <div class="flex flex-col gap-4 lg:flex-row lg:items-start">
        ${a(t,{size:"large",title:"ラージサイズ (大)",description:"これはコンポーネントのラージサイズです。",image:"https://picsum.photos/450/400?random=1"})}
        ${a(t,{size:"medium",title:"ミディアムサイズ (中)",description:"これはコンポーネントのミディアムサイズ（デフォルト）です。",image:"https://picsum.photos/450/400?random=1"})}
        ${a(t,{size:"small",title:"スモールサイズ (小)",description:"これはコンポーネントのスモールサイズです。",image:"https://picsum.photos/450/400?random=1"})}
      </div>
    `},S={render:i=>e`${n(i)}`,args:{title:"テキスト改行の例",description:`上に表示されている画像はランダムなプレースホルダー画像です。
ページを更新するたびに異なる画像が表示されます。`,image:"https://picsum.photos/250/200?random=1"},parameters:{docs:{description:{story:"説明テキスト内で改行するには、文字列に `\\n`（改行文字）を含めます。コンポーネントがこれらの改行を検出し、各行が中央揃えで表示されるように処理します。なお、このコンポーネントではテキストの折り返しは行われません。"}}}};return{default:{title:m,component:t,args:{...l,title:"データがありません",description:"条件を変更して再度お試しください",image:"","action-slot":""},argTypes:u,parameters:{actions:{handles:d}},decorators:[w]},Default:y,WithImage:$,WithAction:h,Complete:f,ErrorState:v,SuccessState:x,CustomUseCase:b,CustomSize:z,WithLineBreak:S}}export{V as c};
