// ========================================
// コラムデータ管理ファイル
// ========================================
// このファイルを編集することで、トップページの「UXコラム」セクションを更新できます
//
// 【更新方法】
// 1. 下記の配列に新しいコラムを追加します
// 2. 最新のものを配列の先頭（一番上）に追加してください
// 3. featured: true にすると、注目記事として表示されます（1つのみ推奨）
//
// 【各項目の説明】
// - date: 日付（例: "2025.11"）
// - link: コラムページへのリンク（例: "./column1.html"）
// - image: サムネイル画像のURL
// - authorInitial: 著者イニシャル（アイコンに表示）
// - authorName: 著者名
// - authorColor: 著者アイコンの色（Tailwind CSSクラス）
// - title: コラムタイトル
// - description: コラムの説明文
// - featured: 注目記事フラグ（true/false）
// - accentColor: アクセントカラー（"purple", "blue", "green", "orange"など）
// ========================================

const columnsData = [
    {
        date: "2025.11",
        link: "./coknock-story.html",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        authorInitial: "吾",
        authorName: "吾田 秀樹",
        authorColor: "from-purple-500 to-pink-500",
        title: "デザインシステム「Coknock」開発ストーリー",
        description: "なぜ今、デザインシステムが必要なのか？YSDにおけるデザインシステム構築の背景、コンセプト、そして未来への展望を語ります。",
        featured: true,
        accentColor: "purple"
    },
    {
        date: "2025.11",
        link: "./column1.html",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        authorInitial: "堤",
        authorName: "堤 圭佑",
        authorColor: "from-blue-500 to-indigo-500",
        title: "Figma Maker Collective Tokyo 2025 参加レポート",
        description: "AI時代のデザイナーの役割とは？Figmaの最新機能やデザインコミュニティの動向について、現地からレポートします。",
        featured: false,
        accentColor: "blue"
    },
    {
        date: "2025.11",
        link: "./column3.html",
        image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        authorInitial: "磯",
        authorName: "磯沼 純",
        authorColor: "from-green-500 to-emerald-500",
        title: "UXUIへの意識調査で見えた組織の可能性",
        description: "全社的に高いUX/UI関心度を確認。アンケート結果が示すデザインシステム導入の好機とこれからの展開について。",
        featured: false,
        accentColor: "green"
    }
];

// ========================================
// 新しいコラムの追加例（コピー＆ペーストして使用）
// ========================================
// {
//     date: "2026.01",
//     link: "./column4.html",
//     image: "https://images.unsplash.com/photo-xxxxxxxx",
//     authorInitial: "山",
//     authorName: "山田 太郎",
//     authorColor: "from-orange-500 to-red-500",
//     title: "新しいコラムのタイトル",
//     description: "コラムの説明文をここに記載します。",
//     featured: false,
//     accentColor: "orange"
// },
//
// 【アクセントカラーの選択肢】
// - "purple" : 紫系
// - "blue"   : 青系
// - "green"  : 緑系
// - "orange" : オレンジ系
// - "pink"   : ピンク系
// - "indigo" : インディゴ系
