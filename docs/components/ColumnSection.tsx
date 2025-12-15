import { BookOpen, ExternalLink, Sparkles, Globe } from 'lucide-react';

export function ColumnSection() {
  const columns = [
    {
      title: 'Figma完全招待制イベント潜入！AI全盛期、私たちの仕事はどう変わる？',
      description: 'Figma Japan主催の限定イベント「Maker Collective Tokyo: Happy Hour」参加報告。AI時代のデザイナーの役割、他社事例、交流会の様子をレポート。',
      author: 'UXユニット 堤',
      date: '2025.11',
      tag: 'イベントレポート',
      icon: <Sparkles className="w-5 h-5" />,
      gradient: 'from-purple-500 to-pink-500',
      link: '/newsletter.html' // 最初のニュースレター
    },
    {
      title: '外国人から見た日本のWebサイト - これは私が慣れ親しんだ世界じゃない！',
      description: 'YSD初の外国人エンジニアが語る、日本のWebサイトとYSD社内システムのインターフェースについての率直な感想と気づき。',
      author: 'UXユニット サーメル',
      date: '2025.12',
      tag: '異文化UX視点',
      icon: <Globe className="w-5 h-5" />,
      gradient: 'from-orange-500 to-yellow-500',
      link: '/newsletter.html' // 2番目のニュースレター（同じファイルを参照）
    }
  ];

  return (
    <section id="columns" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/40">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">UXコラム</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            ✎ UXUIに関する活動 ✎
          </h2>
          <p className="text-xl text-gray-600">
            活動内容紹介・ツール紹介・イベント潜入報告
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {columns.map((column, index) => (
            <a
              key={index}
              href={column.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-white/40 hover:border-blue-300"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${column.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white">
                    {column.icon}
                  </div>
                </div>
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {column.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{column.date}</span>
                  <span>•</span>
                  <span>{column.author}</span>
                </div>

                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {column.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {column.description}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>コラムを読む</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="font-bold text-gray-900 mb-6 text-center">コラムカテゴリー</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['活動内容紹介（案件・勉強会等）', 'ツール紹介（Figma等）', 'イベント潜入報告', '外から見たヤマトのUX'].map((category, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}