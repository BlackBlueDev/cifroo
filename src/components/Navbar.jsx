import React from 'react';
import { Icons } from './Icons';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function Navbar({ onDownload, onOpenEstudos }) {
  return (
    <header className="sticky top-0 z-50 bg-darkBg/95 backdrop-blur border-b border-border py-4 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="#" className="flex items-center gap-3 sm:gap-3.5 group">
            <img
              src="/cifroo_logo.svg"
              alt="Cifroo Logo Oficial"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl shadow-lg shadow-primary/25 shrink-0 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl sm:text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              Cifr<span className="text-primary">oo</span>
            </span>
          </a>
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider rounded-md bg-surface text-primary border border-border shadow-sm">
            {APP_VERSION}
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-textSec">
          <a href="#telas" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Telas do App
          </a>
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
          <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-primary transition-colors">Perguntas</a>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Botão de Estudos visível em telas intermediárias e mobile */}
          <button
            onClick={onOpenEstudos}
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-[#252525] border border-border text-textSec hover:text-white font-semibold text-xs transition-colors cursor-pointer"
            title="Abrir Métodos & Estudos"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="hidden sm:inline">Métodos & Estudos</span>
            <span className="sm:hidden">Estudos</span>
          </button>

          <a
            href={GITHUB_RELEASE_APK_URL}
            onClick={onDownload}
            className="inline-flex items-center gap-2 sm:gap-3 px-3.5 py-2 sm:px-7 sm:py-3.5 rounded-xl bg-primary hover:bg-[#E65100] text-white font-bold text-xs sm:text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
          >
            <Icons.Download className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="hidden sm:inline">Baixar {APK_FILENAME}</span>
            <span className="sm:hidden">Baixar APK</span>
          </a>
        </div>
      </div>
    </header>
  );
}
