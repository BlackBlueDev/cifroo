import React from 'react';
import { Icons } from './Icons';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function Hero({ onDownload }) {
  return (
    <section className="pt-12 sm:pt-16 pb-20 border-b border-border relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-primary/30 mb-6 shadow-sm">
              <img
                src="/cifroo_logo.svg"
                alt="Novo Ícone Stitch"
                className="w-5 h-5 rounded-md object-contain"
              />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Cifroo Mobile <span className="text-primary">{APP_VERSION}</span> • Exclusivo Android
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              O App de Cifras Feito para o{' '}
              <span className="text-primary block sm:inline">Músico no Palco</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-textSec leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Desenvolvido exclusivamente para <strong>Android</strong>. Nova versão <strong>{APP_VERSION}</strong> com Design System Stitch oficial, importação cirúrgica de versões simplificadas 1:1, alinhamento milimétrico de acordes sobre a letra e dock de palco com autoscroll suave.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={GITHUB_RELEASE_APK_URL}
                onClick={onDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-[#E65100] text-white font-black text-base transition-all cursor-pointer shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Icons.Download className="w-5 h-5" />
                <span>Baixar {APK_FILENAME} (Android APK)</span>
              </a>

              <a
                href="#telas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-surface hover:bg-[#262626] text-white border border-border font-bold text-base transition-all"
              >
                <span>Ver Telas no Xiaomi</span>
                <span className="text-primary">↓</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-textSec pt-8 border-t border-border">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Icons.WifiOff className="w-4 h-4 text-primary" />
                <span>100% Offline</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Icons.Zap className="w-4 h-4 text-primary" />
                <span>1-Toque Import</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Icons.Columns className="w-4 h-4 text-primary" />
                <span>Anti-Scroll 2 Col</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Icons.ShieldCheck className="w-4 h-4 text-primary" />
                <span>Zero Anúncios</span>
              </div>
            </div>
          </div>

          {/* Right Column: Xiaomi 17 Pro Device Mockup Preview (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
              {/* Glow background */}
              <div className="absolute -inset-2 rounded-[46px] bg-gradient-to-tr from-primary/30 to-primary/5 blur-xl" />

              {/* Xiaomi 17 Pro Smartphone Frame */}
              <div className="relative rounded-[40px] bg-[#1a1a1a] p-2.5 shadow-2xl border-2 border-[#383838]">
                {/* Hardware Buttons on Right */}
                <div className="w-1 h-10 bg-[#333] rounded-r-md absolute -right-2 top-20 border-y border-r border-[#444]" />
                <div className="w-1 h-6 bg-[#333] rounded-r-md absolute -right-2 top-34 border-y border-r border-[#444]" />

                {/* Xiaomi Ear Speaker Slit */}
                <div className="w-10 h-1 bg-[#252525] rounded-full mx-auto mb-1" />

                {/* Xiaomi DotDisplay Punch-Hole Camera (Centered Dot, NOT iPhone notch!) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#050505] border border-[#2d2d2d] z-30 flex items-center justify-center shadow-inner pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/80 ring-1 ring-white/10" />
                </div>

                {/* Screenshot inside frame */}
                <div className="rounded-[32px] overflow-hidden bg-[#111111] aspect-[9/19.5] relative border border-[#222]">
                  <img
                    src="/screens/cifroo_stage.png?v=2"
                    alt="Cifroo Mobile v0.0.2 Stage Screen on Xiaomi 17 Pro"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Android Navigation Gesture Bar */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-20 pointer-events-none" />

                  {/* Floating chip */}
                  <div className="absolute bottom-4 left-3 right-3 p-2 rounded-xl bg-black/80 backdrop-blur border border-white/10 flex items-center justify-between text-[11px] text-white">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Xiaomi 17 Pro
                    </span>
                    <span className="text-primary font-mono font-bold">Android Nativo</span>
                  </div>
                </div>
              </div>

              {/* Floating feature pills around device */}
              <div className="hidden sm:flex absolute -left-6 top-1/4 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-surface/95 backdrop-blur border border-border shadow-xl items-center gap-2 text-xs font-bold text-white z-20">
                <span className="text-primary">🎸</span> Smart Capo
              </div>
              <div className="hidden sm:flex absolute -right-6 bottom-1/4 translate-y-1/2 px-3 py-1.5 rounded-xl bg-surface/95 backdrop-blur border border-border shadow-xl items-center gap-2 text-xs font-bold text-white z-20">
                <span className="text-primary">⚡</span> Autoscroll Palco
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
