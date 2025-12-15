import { Mail, Phone, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-blue-100">
            UXUIに関するご相談・ご質問はお気軽にどうぞ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* デジタル開発・運用本部 運用技術部 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">デジタル開発・運用本部</h3>
                <p className="text-sm text-blue-100">運用技術部</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm text-blue-100 mb-2">担当者</div>
                <div className="font-semibold">〇〇、〇〇、〇〇</div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-blue-100 mb-1">内線</div>
                  <div className="font-semibold">7-1-000-000000 / 000000</div>
                </div>
              </div>
            </div>
          </div>

          {/* デジタル開発・運用本部 人材開発部 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">デジタル開発・運用本部</h3>
                <p className="text-sm text-blue-100">人材開発部</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm text-blue-100 mb-2">担当者</div>
                <div className="font-semibold">東條、金子</div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-blue-100 mb-1">内線</div>
                  <div className="font-semibold">7-1-000-838108 / 818041</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-bold mb-4">一緒にYSDのUX/UIを変革しませんか？</h3>
          <div className="space-y-2 text-blue-100 mb-6">
            <p>「Figmaを使って、爆速で画面を作ってみたい！」</p>
            <p>「FigJamを使って、会議をもっと効率化したい！」</p>
            <p>「とりあえずAI×デザインの話を聞いてみたい」</p>
          </div>
          <p className="font-semibold text-lg">
            そんな方がいれば、ぜひお気軽にUXユニットまでお声がけください。<br />
            YSDのUX/UI浸透を、ぜひ最前線で一緒にやっていきましょう！
          </p>
        </div>
      </div>
    </section>
  );
}
