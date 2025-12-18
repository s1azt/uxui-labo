import{x as s}from"./lit-element-C4bBeaiV.js";import{g as p}from"./storybook-utils-CyXQhEhe.js";import{f as y}from"./fixFigmaPath-DxFz5b9E.js";function e(o,t={}){const a=t.severity||"default",d=t.closable!==void 0?t.closable:!1,l=t.titleSlot||"",c=t.content||"",r=t.class||"",n=t.titleSlotHTML||null,i=t.contentHTML||null;switch(o){case"yg-alert":return s`
        <yg-alert
          severity="${a}"
          ?closable="${d}"
          class="${r}"
          @close="${t.onClose||(()=>console.log("Alert closed"))}"
        >
          ${n||(l?s`<span slot="title">${l}</span>`:"")}
          ${i||c}
        </yg-alert>
      `;case"nk-alert":return s`
        <nk-alert
          severity="${a}"
          ?closable="${d}"
          class="${r}"
          @close="${t.onClose||(()=>console.log("Alert closed"))}"
        >
          ${n||(l?s`<span slot="title">${l}</span>`:"")}
          ${i||c}
        </nk-alert>
      `;default:return s`<div>Unknown component: ${o}</div>`}}function L(o){const{componentName:t,title:a,componentType:d,theme:l="blue"}=o,{events:c,args:r,argTypes:n,template:i}=p(t),g={render:v=>s`${i(v)}`,args:{"default-slot":"これはアラートメッセージです。"},parameters:{design:{type:"figma",url:y("https://www.figma.com/design/niLtVwrXTcgciOlGE7Wmjp/YAW-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA?node-id=17505-7154&m=dev")}}},m={render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"safe",content:"操作が正常に完了しました。"})}
        ${e(t,{severity:"default",content:"こちらは情報メッセージです。"})}
        ${e(t,{severity:"caution",content:"注意が必要な状況です。"})}
        ${e(t,{severity:"warning",content:"エラーが発生しました。"})}
      </div>
    `,parameters:{design:{type:"figma",url:y("https://www.figma.com/design/niLtVwrXTcgciOlGE7Wmjp/YAW-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA?node-id=17505-7162&m=dev")}}},u={render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"safe",titleSlot:"操作完了",content:"ファイルのアップロードが正常に完了しました。"})}
        ${e(t,{severity:"default",titleSlot:"お知らせ",content:"システムメンテナンスが予定されています。"})}
        ${e(t,{severity:"caution",titleSlot:"注意",content:"パスワードの有効期限が近づいています。"})}
        ${e(t,{severity:"warning",titleSlot:"エラー",content:"ネットワークエラーが発生しました。再試行してください。"})}
      </div>
    `,parameters:{design:{type:"figma",url:y("https://www.figma.com/design/niLtVwrXTcgciOlGE7Wmjp/YAW-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA?node-id=17505-7168&m=dev")}}};return{default:{title:a,component:t,args:r,argTypes:n,parameters:{theme:l,actions:{handles:c},docs:{description:{}}}},Default:g,Severities:m,WithTitles:u,Closable:{render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"safe",closable:!0,content:"閉じるボタン付きの成功メッセージ",onClose:()=>console.log("Alert closed")})}
        ${e(t,{severity:"default",closable:!0,titleSlot:"閉じることができます",content:"右上の×ボタンをクリックして閉じてください。"})}
        ${e(t,{severity:"caution",closable:!0,content:"閉じるボタン付きの警告メッセージ"})}
        ${e(t,{severity:"warning",closable:!0,content:"閉じるボタン付きのエラーメッセージ"})}
      </div>
    `},SlotCombinations:{render:()=>s`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">
            両方のスロットを使用
          </h3>
          ${e(t,{severity:"safe",titleSlot:"操作完了",content:"ファイルの処理が正常に完了しました。続行してください。"})}
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">
            タイトルスロットのみ
          </h3>
          ${e(t,{severity:"default",titleSlot:"重要なお知らせ"})}
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">
            デフォルトスロットのみ（タイトル位置に表示）
          </h3>
          ${e(t,{severity:"caution",content:"タイトルがない場合、このメッセージはアイコンの右側（タイトル位置）に表示されます。"})}
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">
            デフォルトスロットのみ（複数行）
          </h3>
          ${e(t,{severity:"warning",content:"複数行のメッセージもタイトル位置に表示されます。改行も適切に処理されます。"})}
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">
            タイトル + 複数行コンテンツ
          </h3>
          ${e(t,{severity:"default",titleSlot:"詳細情報",contentHTML:s`
              <div class="space-y-1">
                <p>タイトルがある場合、このコンテンツは下に表示されます。</p>
                <p>複数の段落や要素も含むことができます。</p>
              </div>
            `})}
        </div>
      </div>
    `},WithSlotContent:{render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"info",titleSlot:"リッチコンテンツ例",contentHTML:s`
            <div class="space-y-2">
              <p>これはスロットを使用したコンテンツです。</p>
              <p><strong>太字</strong>や<em>斜体</em>なども使用できます。</p>
              <ul class="list-disc ml-4">
                <li>リスト項目1</li>
                <li>リスト項目2</li>
                <li>リスト項目3</li>
              </ul>
            </div>
          `})}
        ${e(t,{severity:"success",titleSlot:"アクション付きのアラート",contentHTML:s`
            <div class="flex items-center gap-2">
              <span>このアラートには操作ボタンが含まれています。</span>
              <button
                class="px-2 py-1 text-xs bg-black/10 rounded hover:bg-black/20 transition-colors"
              >
                詳細を見る
              </button>
            </div>
          `})}
      </div>
    `},TitleSlotOnly:{render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"safe",titleSlot:"成功しました"})}
        ${e(t,{severity:"default",titleSlot:"情報"})}
        ${e(t,{severity:"caution",titleSlot:"注意"})}
        ${e(t,{severity:"warning",titleSlot:"エラー"})}
      </div>
    `},DefaultSlotOnly:{render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"safe",content:"操作が正常に完了しました。"})}
        ${e(t,{severity:"default",content:"こちらは詳細な情報メッセージです。必要に応じて確認してください。"})}
        ${e(t,{severity:"caution",content:"この操作を続行する前に、設定を確認することをお勧めします。"})}
        ${e(t,{severity:"warning",content:"予期しないエラーが発生しました。ページを再読み込みして再試行してください。"})}
      </div>
    `},NoSlots:{render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"safe"})}
        ${e(t,{severity:"default"})}
        ${e(t,{severity:"caution"})}
        ${e(t,{severity:"warning"})}
      </div>
    `},ComplexContent:{render:()=>s`
      <div class="space-y-4">
        ${e(t,{severity:"default",titleSlotHTML:s`<div slot="title">システムメンテナンス予定</div>`,contentHTML:s`
            <div class="space-y-2">
              <p>以下の日時でシステムメンテナンスを実施いたします：</p>
              <ul class="list-disc ml-4">
                <li>日時：2024年3月15日 02:00〜04:00</li>
                <li>対象：全システム</li>
                <li>影響：サービス停止</li>
              </ul>
              <p class="font-semibold">
                ご迷惑をおかけしますが、よろしくお願いいたします。
              </p>
            </div>
          `})}
        ${e(t,{severity:"warning",titleSlotHTML:s`<div slot="title">データ削除の確認</div>`,contentHTML:s`
            <div class="space-y-2">
              <p>この操作により、以下のデータが完全に削除されます：</p>
              <div class="bg-black/10 p-2 rounded text-sm">
                ・ユーザー情報<br />
                ・購入履歴<br />
                ・設定データ
              </div>
              <div class="flex gap-2 mt-3">
                <button
                  class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                >
                  削除する
                </button>
                <button
                  class="px-3 py-1 bg-black/10 rounded text-sm hover:bg-black/20"
                >
                  キャンセル
                </button>
              </div>
            </div>
          `})}
      </div>
    `},Playground:{render:v=>s`${i(v,s`こちらで様々なプロパティを試すことができます。`)}`,args:{severity:"default",closable:!0}}}}export{L as c};
