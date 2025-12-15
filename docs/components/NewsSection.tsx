import { Bell, Calendar, ArrowRight } from 'lucide-react';

export function NewsSection() {
  const news = [
    {
      date: '2026.01',
      category: 'アンケート',
      title: 'UX浸透度アンケート実施予定',
      description: 'YSD全体のUXUI浸透度を可視化し、今後の施策に活かすためのアンケートを実施します。開発チーム向けと全社向けの2種類を予定。',
      badge: '実施予定',
      badgeColor: 'bg-orange-100 text-orange-700'
    },
    {
      date: '2025.12',
      category: 'イベント',
      title: 'Figma開発研修（入門編）開催予定',
      description: 'Figma・Figjamの基本操作と業務への活用方法を学ぶ研修を2026年1月〜2月に開催予定です。',
      badge: '募集予定',
      badgeColor: 'bg-green-100 text-green-700'
    },
    {
      date: '2025.11',
      category: 'アンケート結果',
      title: 'UXUIへの意識アンケート結果を公開',
      description: '全社的にUX/UIの関心が非常に高いことが判明。デザインシステム導入の親和性を確認しました。',
      badge: '完了',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      date: '2025.11',
      category: 'コラム',
      title: 'Figma Maker Collective Tokyo参加レポート公開',
      description: 'AI時代のデザイナーの役割について、最新の知見をお届けします。',
      badge: '公開中',
      badgeColor: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <section id="news" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Bell className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl font-black text-gray-900">
            最新情報
          </h2>
        </div>

        <div className="grid gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-white/40 hover:border-blue-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.date}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-blue-600 font-semibold mb-1">
                        {item.category}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}