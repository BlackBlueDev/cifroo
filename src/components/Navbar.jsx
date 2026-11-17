import React from 'react';
import { Icons } from './Icons';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function Navbar({ onDownload, onOpenEstudos }) {
  return (
    <header className="sticky top-0 z-50 bg-darkBg/95 backdrop-blur border-b border-border py-3 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-5 min-w-0">
          <a href="#" className="flex items-center gap-2 sm:gap-3.5 group shrink-0">
            <img
              src="/cifroo_logo.svg"
              alt="Cifroo Logo Oficial"
              className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl shadow-lg shadow-primary/25 shrink-0 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-lg sm:text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              Cifr<span className="text-primary">oo</span>
            </span>
          </a>
          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider rounded-md bg-surface text-primary border border-border shadow-sm shrink-0">
            {APP_VERSION}
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-textSec">
          <a href="#novidades" className="text-primary hover:text-white transition-colors flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Novidades v0.0.2
          </a>
          <button
            onClick={onOpenEstudos}
            className="hover:text-primary transition-colors flex items-center gap-1.5 font-semibold text-textSec cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Métodos & Estudos
          </button>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
          {/* Botão de Estudos visível em telas intermediárias e mobile */}
          <button
            onClick={onOpenEstudos}
            className="lg:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-lg bg-surface hover:bg-[#252525] border border-border text-textSec hover:text-white font-semibold text-[11px] sm:text-xs transition-colors cursor-pointer whitespace-nowrap"
            title="Abrir Métodos & Estudos"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span className="hidden sm:inline">Métodos & Estudos</span>
            <span className="sm:hidden">Estudos</span>
          </button>

          <a
            href={GITHUB_RELEASE_APK_URL}
            onClick={onDownload}
            className="inline-flex items-center gap-1.5 sm:gap-3 px-2.5 py-1.5 sm:px-7 sm:py-3.5 rounded-lg sm:rounded-xl bg-primary hover:bg-[#E65100] text-white font-bold text-[11px] sm:text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0 whitespace-nowrap"
          >
            <Icons.Download className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="hidden sm:inline">Baixar {APK_FILENAME}</span>
            <span className="sm:hidden">Baixar APK</span>
          </a>
        </div>
      </div>
    </header>
  );
}
