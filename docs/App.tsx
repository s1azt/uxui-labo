import { useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Mail, Phone, Users, BookOpen, Lightbulb, Target, TrendingUp, Award } from 'lucide-react';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { NewsSection } from './components/NewsSection';
import { ColumnSection } from './components/ColumnSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillDefinitionSection } from './components/SkillDefinitionSection';
import { TeamStructure } from './components/TeamStructure';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background pattern */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">UX</span>
              </div>
              <span className="text-xl font-bold text-gray-900">UXUI Labo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-blue-600 transition-colors">
                ミッション
              </button>
              <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-blue-600 transition-colors">
                お知らせ
              </button>
              <button onClick={() => scrollToSection('columns')} className="text-gray-700 hover:text-blue-600 transition-colors">
                コラム
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
                サービス
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors">
                体制図
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
                お問い合わせ
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button onClick={() => scrollToSection('mission')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                ミッション
              </button>
              <button onClick={() => scrollToSection('news')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                お知らせ
              </button>
              <button onClick={() => scrollToSection('columns')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                コラム
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                サービス
              </button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                体制図
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <MissionSection />
        <NewsSection />
        <ColumnSection />
        <ServicesSection />
        <SkillDefinitionSection />
        <TeamStructure />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">UX</span>
              </div>
              <span className="text-xl font-bold">UXUI Labo</span>
            </div>
            <p className="text-gray-400 mb-4">
              ヤマトシステム開発株式会社<br />
              グループシステム部 UXユニット
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Yamato System Development Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}