import React from 'react';
import { APK_FILENAME, APP_VERSION } from '../data/constants';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Passo a Passo</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Pronto para o Palco em 3 Etapas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-surface border border-border text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-base font-bold text-white mb-2">Instale o APK {APP_VERSION}</h3>
            <p className="text-xs text-textSec">
              Baixe o <code className="text-primary font-mono">{APK_FILENAME}</code> pelo botão desta página e instale no seu celular Android.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface text-primary border border-primary font-black flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-base font-bold text-white mb-2">Cole o Link da Cifra</h3>
            <p className="text-xs text-textSec">
              Cole a URL do Cifra Club. O app limpa as tablaturas e salva tudo no armazenamento offline local.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-base font-bold text-white mb-2">Toque sem Internet</h3>
            <p className="text-xs text-textSec">
              Suba no palco, ative o Modo Palco e toque com tranquilidade total, até mesmo em Modo Avião!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
