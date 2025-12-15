import { GraduationCap, Code, Palette, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function SkillDefinitionSection() {
  const [activeTab, setActiveTab] = useState<'designer' | 'engineer'>('designer');

  const designerSkills = [
    {
      level: 'レベル1',
      title: 'UIUXビギナー',
      emoji: '🐣',
      range: 'UI課題・画面サンプル',
      skills: ['Figmaなどのデザインツールの基本操作', 'システムの課題に気づく'],
      keywords: ['Figma', 'UIUXに対する興味関心']
    },
    {
      level: 'レベル2',
      title: 'ジュニアデザイナー',
      emoji: '🌱',
      range: 'デザイン案件の一部作業',
      skills: ['ワイヤーフレーム作成', 'UIコンポーネント作成', 'ペルソナ・ジャーニー作成', 'プロダクト理解', 'デザイン原則の適用'],
      keywords: ['UIデザイン', 'ワイヤーフレーム', 'UIコンポーネント', 'ペルソナ', 'カスタマージャーニーマップ']
    },
    {
      level: 'レベル3',
      title: 'ミドルデザイナー',
      emoji: '🌿',
      range: 'デザイン案件の全て',
      skills: ['画面改善の提案', 'レスポンシブ設計', '非同期UIの設計', 'レビュー対応', 'ユーザビリティテスト'],
      keywords: ['レスポンシブ対応', '非同期UI設計', '画面改善提案', 'ユーザビリティテスト']
    },
    {
      level: 'レベル4',
      title: 'リードデザイナー',
      emoji: '🌳',
      range: '新規システム企画やPoC・MVP開発に合わせたデザイン',
      skills: ['UIデザイン全般の設計', 'デザインシステムの活用と改善', 'データ分析と改善策立案', '実装コストの予見と調整', 'アクセシビリティ対応', 'KPI理解とデザイン改善'],
      keywords: ['デザインシステム', 'データ分析', '実装コスト判断', 'アクセシビリティ']
    },
    {
      level: 'レベル5',
      title: 'シニアデザイナー',
      emoji: '🎓',
      range: 'デザインシステムの発展・組織文化の醸成',
      skills: ['UIデザイン全般の戦略設計', 'トレードオフ判断と意思決定のリード', 'データ分析と意思決定の指導', '実装・技術戦略の調整', 'KPIとUX改善の戦略設計', 'デザインシステム戦略の策定と推進', '組織横断的なUX推進'],
      keywords: ['デザインシステム戦略', '技術調整', 'UX戦略推進', '組織横断ファシリテーション']
    }
  ];

  const engineerSkills = [
    {
      level: 'レベル1',
      title: 'エンジニアビギナー',
      emoji: '🐣',
      range: '学習・環境構築',
      skills: ['HTML、CSS、JavaScriptの基本的な構文や役割を理解', '開発環境の構築', 'デザインシステムの理解'],
      keywords: ['HTML/CSS/JS基礎', '開発環境構築(Git、VSCode等)']
    },
    {
      level: 'レベル2',
      title: 'ジュニアエンジニア',
      emoji: '🌱',
      range: '軽微な修正・既存コンポーネントを利用した実装',
      skills: ['バグ修正とスタイル調整', 'UIコンポーネント利用', 'デザインシステムの理解と説明', 'Dev Modeの活用', 'AIによる不明点解消'],
      keywords: ['Figma Dev Mode', 'Storybook', 'Props利用', 'AI活用（実装補助）']
    },
    {
      level: 'レベル3',
      title: 'ミドルエンジニア',
      emoji: '🌿',
      range: '機能単位の実装・新規コンポーネント開発',
      skills: ['新規UIコンポーネントの実装', 'チーム開発とコードレビュー', '画面実装とレスポンシブ対応', 'サーバーサイド連携', 'エンジニア視点のフィードバック', 'AIによる品質・速度向上'],
      keywords: ['コンポーネント設計', 'レスポンシブ(Flexbox/Grid)', 'Java(MPA)連携', '実装フィードバック']
    },
    {
      level: 'レベル4',
      title: 'シニアエンジニア',
      emoji: '🌳',
      range: 'デザインシステム基盤構築・難易度の高い機能設計',
      skills: ['デザインシステム基盤構築', '高度なコンポーネント設計と統制', 'Webアプリ基盤構築', 'AIによるプロセス革新'],
      keywords: ['デザインシステム基盤', 'アーキテクチャ選定', 'タスク分解', 'AIプロセス改善']
    },
    {
      level: 'レベル5',
      title: 'エンジニアリーダー',
      emoji: '🎓',
      range: 'デザインシステム導入戦略・組織文化の醸成',
      skills: ['顧客視点の品質担保', 'デザインシステム導入推進', 'UXカルチャーとAI活用の浸透', '効果測定と改善提案'],
      keywords: ['デザインシステム導入戦略', 'Webアプリ設計(MPA)', 'UXカルチャー醸成', '効果測定']
    }
  ];

  const currentSkills = activeTab === 'designer' ? designerSkills : engineerSkills;

  return (
    <section id="skills" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-black text-gray-900">
              UXUIスキル定義
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            段階的な成長をサポートするスキルロードマップ
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/60 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/40">
            <button
              onClick={() => setActiveTab('designer')}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'designer'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Palette className="w-5 h-5" />
              <span>デザイナー</span>
            </button>
            <button
              onClick={() => setActiveTab('engineer')}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'engineer'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Code className="w-5 h-5" />
              <span>エンジニア</span>
            </button>
          </div>
        </div>

        {/* Purpose Statement */}
        <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/40 shadow-xl">
          <p className="text-center text-gray-700 leading-relaxed">
            {activeTab === 'designer' 
              ? '自社プロダクト開発においてUXの考え方を浸透させUI/UXデザインの具体的な方法論やマインドセットを段階的に習得することで、プロダクト価値およびYSDブランドの向上に寄与できる力を育成します。'
              : 'Webフロントエンドの基礎から、デザインシステム基盤構築、そして組織的なUXカルチャーの醸成まで。顧客視点での開発をリードできる人材を育成します。'
            }
          </p>
        </div>

        {/* Skill Levels */}
        <div className="space-y-6">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-white/40 group"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Left: Level and Title */}
                  <div className="lg:w-1/4 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{skill.emoji}</span>
                      <div>
                        <div className="text-sm font-semibold text-blue-600">{skill.level}</div>
                        <h3 className="font-bold text-gray-900 text-lg">{skill.title}</h3>
                      </div>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-xs font-medium text-gray-700">担当範囲</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{skill.range}</p>
                  </div>

                  {/* Middle: Skills */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      具体的なスキル
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {skill.skills.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Keywords */}
                  <div className="lg:w-1/4 flex-shrink-0">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">キーワード</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-xs font-medium text-gray-700 border border-blue-100"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/40 shadow-md">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm text-gray-700">
              各レベルで実践的な経験を積みながら、段階的に成長できます
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
