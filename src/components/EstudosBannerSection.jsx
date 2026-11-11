import React from 'react';
import { TOTAL_MATERIALS_COUNT } from '../data/materialsData';

export default function EstudosBannerSection({ onOpenEstudos }) {
  return (
    <section id="estudos-banner" className="py-16 sm:py-20 bg-[#0D0D0D] border-t border-b border-[#222222] relative overflow-hidden">
      {/* GLOW DE FUNDO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#161616] via-[#1A1613] to-[#161616] border border-primary/30 p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-black uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Nova Biblioteca de Estudos Cifroo
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Métodos para Iniciante, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FFA726] to-[#FFCC80]">
                  Intermediário & Avançado
                </span>
              </h2>

              <p className="text-base sm:text-lg text-textSec leading-relaxed mb-6">
                Todos os <strong className="text-white">{TOTAL_MATERIALS_COUNT} arquivos didáticos</strong> organizados por nível de aprendizado: 
                Violão, Teclado, Contrabaixo, Teoria e Planejamento. Baixe arquivo por arquivo ou todos de uma vez só em formato .ZIP!
              </p>

              {/* CHIPS DOS 3 NÍVEIS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#111111] border border-[#2A2A2A] text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  01 • Iniciante (16 PDFs)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#111111] border border-[#2A2A2A] text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  02 • Intermediário (14 PDFs)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#111111] border border-[#2A2A2A] text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  03 • Avançado (10 PDFs)
                </span>
              </div>
            </div>

            {/* AÇÃO PRINCIPAL */}
            <div className="flex flex-col items-center lg:items-end gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenEstudos}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-primary hover:bg-[#E65100] text-white font-black text-base sm:text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Acessar Métodos de Estudos</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <span className="text-xs text-textSec font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download individual ou pacote .ZIP por nível
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
