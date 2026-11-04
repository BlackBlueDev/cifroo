import React from 'react';
import { Icons } from './Icons';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function Hero({ onDownload }) {
  return (
    <section className="pt-16 pb-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold text-textSec uppercase tracking-wider">
              Cifroo Mobile {APP_VERSION} Oficial • 100% Offline
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            O App de Cifras Feito para o{' '}
            <span className="text-primary">Músico no Palco</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-textSec leading-relaxed max-w-2xl mx-auto">
            Nova versão <strong>v0.0.2</strong> disponível para download! Design Cifra Club PRO, importação de versões simplificadas 1:1, alinhamento milimétrico de acordes sobre a letra e novo dock de palco com autoscroll.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GITHUB_RELEASE_APK_URL}
              onClick={onDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-[#E65100] text-white font-black text-base transition-all cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              <Icons.Download className="w-5 h-5" />
              <span>Baixar {APK_FILENAME} (v0.0.2)</span>
            </a>

            <a
              href="#novidades"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-surface hover:bg-[#262626] text-white border border-border font-bold text-base transition-all"
            >
              <span>Ver O Que Mudou</span>
              <span className="text-primary">↓</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-textSec pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-2">
              <Icons.WifiOff className="w-4 h-4 text-primary" />
              <span>100% Offline</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icons.Zap className="w-4 h-4 text-primary" />
              <span>1-Toque Import</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icons.Columns className="w-4 h-4 text-primary" />
              <span>Anti-Scroll 2 Col</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icons.ShieldCheck className="w-4 h-4 text-primary" />
              <span>Zero Anúncios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
