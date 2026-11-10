import React, { useState } from 'react';
import { Icons } from './Icons';
import { APP_VERSION } from '../data/constants';

const SCREENS = [
  {
    id: 'stage',
    title: 'Modo Palco em Ação',
    shortTitle: 'Modo Palco',
    tag: 'Stage View',
    image: '/screens/cifroo_stage.png?v=2',
    badge: 'Stage View Oficial',
    description: 'A visualização definitiva para tocar ao vivo. Grade oficial de Acordes Principais no topo com pestanas e posições das cordas, transposição em 1 toque, Smart Capo e cifras monospace alinhadas sobre as sílabas com autoscroll suave.',
    highlights: [
      'Grade de Acordes no topo com pestanas, casas base e dedilhados',
      'Smart Capo: cálculo automático entre Som Real e Forma Digitada',
      'Transposição em tempo real ([- 1/2 tom +]) sem recarregar tela',
      'Dock flutuante com autoscroll mãos-livres e modo 2 colunas anti-scroll'
    ]
  },
  {
    id: 'home',
    title: 'Lista de Repertório Edge-to-Edge',
    shortTitle: 'Lista de Músicas',
    tag: 'Dark Studio PRO',
    image: '/screens/cifroo_home.png?v=2',
    badge: 'Dark Studio PRO',
    description: 'Interface contínua Dark Studio PRO inspirada no padrão Cifra Club PRO. Sem caixotes genéricos ou bordas pesadas. Encontre suas músicas e repertórios com busca instantânea.',
    highlights: [
      'Design contínuo edge-to-edge sem poluição visual',
      'Chips de filtro rápido: Todas (9), Repertório (4) e Criar Cifra',
      'Badges dinâmicos de tom (E, B, G, BB, EM, A) e instrumento',
      'Acesso com 1 toque às configurações e repertório de culto'
    ]
  },
  {
    id: 'customization',
    title: 'Smart Capo Inteligente',
    shortTitle: 'Smart Capo',
    tag: 'Afinação de Palco',
    image: '/screens/cifroo_customization.png?v=2',
    badge: 'Transposição Automática',
    description: 'Nunca mais erre o tom com a banda ao colocar o capotraste. O Cifroo separa matematicamente o Tom do Culto (Som Real) da Forma dos Dedos (o que você lê na cifra) e ajusta as posições na hora.',
    highlights: [
      'Seletor rápido de casas do Capotraste (Sem Capo até 9ª Casa)',
      'Switch de Transposição Automática para sincronizar com a banda',
      'Cálculo simultâneo de Tom do Culto vs Formato dos Dedos',
      'Botão "Restaurar Original" em 1 toque para voltar ao tom base'
    ]
  },
  {
    id: 'import',
    title: 'Editor de Cifra e Limpeza de Palco',
    shortTitle: 'Editor & Limpeza',
    tag: 'Palco Pronto',
    image: '/screens/cifroo_import.png?v=2',
    badge: 'Editor de Palco',
    description: 'Edite qualquer cifra diretamente no smartphone com persistência 100% offline. Ferramenta exclusiva de Limpeza Automática para remover tablaturas indesejadas e deixar o arranjo pronto para a apresentação.',
    highlights: [
      'Edição ao vivo de tom, capotraste, instrumento e ritmo/batida',
      'Botão "Limpeza Automática": aniquila tablaturas confusas e ruídos',
      'Abas de edição: Mapa de Acordes, Cifra com Letra, Anotações e Ajustes',
      'Status "Palco Pronto" garantindo conformidade harmônica ao vivo'
    ]
  }
];

export default function ScreenshotsGallery() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = SCREENS[activeScreenIndex];

  return (
    <section id="telas" className="py-24 border-b border-border bg-gradient-to-b from-darkBg via-surface/30 to-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-primary/40 text-xs font-bold text-primary mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Prints Reais no Android • Xiaomi 17 Pro • {APP_VERSION}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Conheça o Cifroo Mobile <span className="text-primary">em Ação Real</span>
          </h2>
          <p className="mt-4 text-textSec text-base sm:text-lg leading-relaxed">
            Capturas 100% reais tiradas diretamente do aplicativo nativo em execução no dispositivo Android. Sem maquetes conceituais: esta é a interface exata que você terá nas mãos durante seus ensaios e apresentações.
          </p>
        </div>

        {/* Screen Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {SCREENS.map((s, idx) => {
            const isActive = idx === activeScreenIndex;
            return (
              <button
                key={s.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-[1.03] ring-2 ring-primary'
                    : 'bg-surface hover:bg-[#252525] text-textSec hover:text-white border border-border'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-primary'}`} />
                <span>{s.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Screen Showcase: Xiaomi 17 Pro Device Mockup + Detailed Explanations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface/50 border border-border rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Device Mockup (Xiaomi 17 Pro) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-[46px] bg-gradient-to-tr from-primary/30 to-primary/5 blur-xl opacity-75" />

              {/* Smartphone Frame (Xiaomi 17 Pro Android Flagship) */}
              <div className="relative rounded-[42px] bg-[#1a1a1a] p-2.5 shadow-2xl border-2 border-[#383838]">
                {/* Hardware Volume & Power Buttons on Right Edge */}
                <div className="w-1 h-10 bg-[#333] rounded-r-md absolute -right-2 top-24 border-y border-r border-[#444]" />
                <div className="w-1 h-6 bg-[#333] rounded-r-md absolute -right-2 top-38 border-y border-r border-[#444]" />

                {/* Xiaomi Ear Speaker Slit */}
                <div className="w-12 h-1 bg-[#252525] rounded-full mx-auto mb-1" />

                {/* Xiaomi DotDisplay Punch-Hole Camera (Centered Dot) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#050505] border border-[#2d2d2d] z-30 flex items-center justify-center shadow-inner pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/80 ring-1 ring-white/10" />
                </div>

                {/* Real Screenshot Container */}
                <div className="rounded-[34px] overflow-hidden bg-[#111111] aspect-[9/19.5] relative border border-[#222]">
                  <img
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    className="w-full h-full object-cover object-top transition-all duration-300"
                  />
                </div>
              </div>

              {/* Device Model Label */}
              <div className="mt-3 text-center">
                <span className="text-[11px] font-mono text-gray-500 font-bold uppercase tracking-widest">
                  Xiaomi 17 Pro • Android Nativo
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Screen Details & Technical Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary mb-4 font-mono">
              <span>{activeScreen.tag}</span>
              <span>•</span>
              <span>{activeScreen.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              {activeScreen.title}
            </h3>

            <p className="mt-4 text-textSec text-base sm:text-lg leading-relaxed">
              {activeScreen.description}
            </p>

            <div className="mt-8 space-y-3.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Destaques Arquiteturais Desta Tela:
              </h4>
              <ul className="space-y-3">
                {activeScreen.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-4">
              <a
                href="#simulador"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-[#E65100] text-white text-xs sm:text-sm font-bold shadow-md shadow-primary/20 transition-all cursor-pointer"
              >
                <span>Testar no Simulador Interativo</span>
                <span>→</span>
              </a>

              <span className="text-xs text-textSec">
                Passo {activeScreenIndex + 1} de {SCREENS.length} da experiência de palco
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
