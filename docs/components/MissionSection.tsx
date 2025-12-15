import { Target, TrendingUp, Users } from 'lucide-react';

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            YSDにおけるUXUI浸透活動
          </h2>
          <p className="text-xl text-gray-600">
            グループシステム部 UXユニットのミッション
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 mb-16 border border-white/40 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">目的</h3>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            ユーザー視点の考え方を組織の"当たり前"にし、<br />
            顧客へ<span className="font-bold text-blue-600">"感動的価値"</span>を届け続ける！
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 活動の柱① */}
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40 hover:border-blue-300 transition-all hover:shadow-2xl hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              活動の柱①
            </h3>
            <h4 className="font-bold text-blue-600 mb-3">
              プロジェクト伴走支援で「顧客視点の開発」を当たり前にする
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              各プロジェクトに参画し、企画から開発までを伴走。メンバー全員が自然と顧客視点で考え、判断できる状態を作り出します。
            </p>
          </div>

          {/* 活動の柱② */}
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40 hover:border-indigo-300 transition-all hover:shadow-2xl hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              活動の柱②
            </h3>
            <h4 className="font-bold text-indigo-600 mb-3">
              開発の生産性と品質を最大化する基盤を構築する
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              属人化からの脱却。誰もが効率的かつ高品質なアウトプットを出せる「仕組み」を構築し、開発プロセス全体の生産性を向上させます。
            </p>
          </div>

          {/* 活動の柱③ */}
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40 hover:border-purple-300 transition-all hover:shadow-2xl hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              活動の柱③
            </h3>
            <h4 className="font-bold text-purple-600 mb-3">
              持続的成長を支えるUXカルチャーを醸成する
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              UXユニットへの依存から脱却し、社員一人ひとりが顧客視点を持つ組織文化を醸成。組織全体の力を底上げします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}