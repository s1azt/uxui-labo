import { Palette, FileText, Wrench, ExternalLink } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'デザインシステム「Coknock」',
      description: 'お客様品質を、すべての画面に。技術で扉を開き、品質で心をつなぐYSDのデザインシステム。',
      features: [
        'AI-Ready：AIと共創する標準化',
        'グループと共に進化する技術',
        'ブランドの統一と拡張性'
      ],
      link: 'https://zeroheight.com/952b47b51/p/370894-',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'UXテンプレート',
      description: 'YSD開発工程における進め方の指標。ペルソナ、カスタマージャーニーマップなど、主要なUX手法のテンプレート。',
      features: [
        'ペルソナ作成テンプレート',
        'カスタマージャーニーマップ',
        '実案件での活用事例'
      ],
      link: 'https://www.figma.com/board/batm4wZXITChxofXTAt3cu/UX%E3%83%86%E3%83%B5%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88?t=tl0hSMdzLeUc2bBr-1',
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'UXUIツール',
      description: 'Figmaを中心としたUXUIツールの紹介と活用ガイド。チーム全体で効率的に開発を進めるためのリソース。',
      features: [
        'Figma活用ガイド',
        'ツール比較・選定支援',
        'チーム連携ベストプラクティス'
      ],
      link: 'https://www.figma.com/board/du0Ycf1sxH7wVkJ1DtEm0x/UX-UI%E3%83%81%E3%83%BC%E3%83%A0?node-id=5357-4427&t=tl0hSMdzLeUc2bBr-1',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            サービス・ツールの紹介
          </h2>
          <p className="text-xl text-gray-600">
            UX活動を支える基盤とツール
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-white/40"
            >
              {/* Header */}
              <div className={`${service.bgColor} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all group-hover:gap-3`}
                >
                  <span>詳細を見る</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 text-center">Coknockコンセプト</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🚪</div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Connection + Knock</p>
              <p className="text-xs text-gray-600">つながりの扉を開く</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🤖</div>
              <p className="text-sm font-semibold text-gray-900 mb-1">AI-Ready</p>
              <p className="text-xs text-gray-600">AIと共創する標準化</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <p className="text-sm font-semibold text-gray-900 mb-1">品質で心をつなぐ</p>
              <p className="text-xs text-gray-600">全ての画面にお客様品質</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}