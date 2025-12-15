import { Users, ArrowLeftRight } from 'lucide-react';

export function TeamStructure() {
  return (
    <section id="team" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-black text-gray-900">
              UXUI浸透活動 体制図
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            部門横断での協力体制
          </p>
        </div>

        {/* Organization Chart */}
        <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/40 shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left: Group System Department */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-center font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-100">
                デジタル開発・運用本部<br />グループシステム部
              </h3>
              
              {/* UX Unit */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 mb-6 text-white">
                <h4 className="font-bold text-center mb-4 text-lg">UXユニット</h4>
                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-semibold mb-2">ユニット長</div>
                    <div className="font-bold">堤　圭佑</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>礒沼　純</div>
                      <div>Samer Salm</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Management */}
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-600 mb-1">マネジメント</div>
                  <div className="font-bold text-gray-900">吾田　秀樹MG</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-600 mb-1">エバンジェリスト</div>
                  <div className="font-bold text-gray-900">井戸　志早馬</div>
                </div>
              </div>
            </div>

            {/* Center: Arrows */}
            <div className="flex flex-col items-center justify-center gap-4">
              <ArrowLeftRight className="w-12 h-12 text-blue-600 hidden lg:block" />
              <div className="text-center text-sm font-semibold text-gray-600 hidden lg:block">
                連携
              </div>
              <ArrowLeftRight className="w-12 h-12 text-blue-600 rotate-90 lg:hidden" />
            </div>

            {/* Right Column: HR and NCDC */}
            <div className="space-y-6">
              {/* HR Department */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-indigo-200">
                <h3 className="text-center font-bold text-gray-900 mb-4 pb-3 border-b-2 border-indigo-100">
                  デジタル開発・運用本部<br />人材開発部
                </h3>
                <div className="space-y-2">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="text-sm font-semibold text-gray-600 mb-1">マネジメント</div>
                    <div className="font-bold text-gray-900">車後　健MG</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="text-sm font-semibold text-gray-600 mb-1">企画立案・推進</div>
                    <div className="grid grid-cols-2 gap-2 text-sm font-bold text-gray-900">
                      <div>金子</div>
                      <div>亜沙海</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Arrow */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-0.5 bg-gray-300" />
                  <ArrowLeftRight className="w-8 h-8 text-gray-400 rotate-90" />
                  <div className="h-8 w-0.5 bg-gray-300" />
                </div>
              </div>

              {/* NCDC */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
                <h3 className="text-center font-bold text-gray-900 mb-4">
                  NCDC株式会社様
                </h3>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="grid grid-cols-3 gap-2 text-sm font-bold text-gray-900 text-center">
                    <div>菅原</div>
                    <div>西村</div>
                    <div>大塚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Summary */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-bold text-gray-900 mb-4 text-center">参画メンバー</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">グルシス(HC70)</div>
                <div className="text-gray-700">吾田、堤、礒沼、サーメル</div>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">人材育成(HA20)</div>
                <div className="text-gray-700">金子、東條</div>
              </div>
              <div>
                <div className="font-semibold text-purple-600 mb-1">Web制作(KB10)</div>
                <div className="text-gray-700">岩瀬、中原</div>
              </div>
              <div>
                <div className="font-semibold text-pink-600 mb-1">NCDC</div>
                <div className="text-gray-700">菅原、西村、大塚</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}