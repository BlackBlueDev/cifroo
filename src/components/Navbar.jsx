import React from 'react';
import { Icons } from './Icons';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function Navbar({ onDownload }) {
  return (
    <header className="sticky top-0 z-50 bg-darkBg/95 backdrop-blur border-b border-border py-4 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 sm:gap-5">
          <a href="#" className="flex items-center gap-3.5 group">
            <img
              src="/cifroo_logo.svg"
              alt="Cifroo Logo Oficial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl shadow-lg shadow-primary/25 shrink-0 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              Cifr<span className="text-primary">oo</span>
            </span>
          </a>
          <span className="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-md bg-surface text-primary border border-border shadow-sm">
            {APP_VERSION}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold text-textSec">
          <a href="#telas" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Telas do App
          </a>
          <a href="#novidades" className="text-primary hover:text-white transition-colors flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Novidades v0.0.2
          </a>
          <a href="#simulador" className="hover:text-primary transition-colors">Simulador de Palco</a>
          <a href="#recursos" className="hover:text-primary transition-colors">Recursos</a>
          <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-primary transition-colors">Perguntas</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={GITHUB_RELEASE_APK_URL}
            onClick={onDownload}
            className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-primary hover:bg-[#E65100] text-white font-bold text-sm sm:text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
          >
            <Icons.Download className="w-5 h-5" />
            <span>Baixar {APK_FILENAME}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
