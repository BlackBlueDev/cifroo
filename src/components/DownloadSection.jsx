import React from 'react';
import { Icons } from './Icons';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function DownloadSection({ onDownload }) {
  return (
    <section id="download" className="py-24 border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 bg-surface border border-border text-center shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-darkBg border border-border text-xs font-bold text-primary mb-6">
            <Icons.Smartphone />
            <span>Instalação Oficial e Atualização Segura</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Baixe o Cifroo Mobile {APP_VERSION} Agora
          </h2>

          <p className="mt-4 text-textSec text-sm sm:text-base max-w-xl mx-auto">
            Nova versão <strong className="text-white">{APP_VERSION}</strong> com suporte a capotraste inteligente, galeria visual de acordes, design Cifra Club PRO e blindagem offline.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GITHUB_RELEASE_APK_URL}
              onClick={onDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-primary hover:bg-[#E65100] text-white font-black text-lg transition-all cursor-pointer shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              <Icons.Download className="w-6 h-6" />
              <span>Baixar {APK_FILENAME}</span>
            </a>
          </div>

          <div className="mt-10 p-5 rounded-xl bg-darkBg border border-border text-left max-w-xl mx-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
              <Icons.ShieldCheck className="w-4 h-4 text-primary" /> Atualização In-Place Sem Perda de Dados
            </h4>
            <p className="text-xs text-textSec leading-relaxed">
              • <strong>Nome de arquivo explícito:</strong> O APK foi nomeado como <code className="text-white font-mono">{APK_FILENAME}</code> para que você saiba com clareza a versão exata que está instalando.<br />
              • <strong>Se você já tem a v0.0.1 instalada:</strong> Basta baixar e instalar este novo APK por cima. O Android realiza a atualização <em>in-place</em> — <strong>nenhuma cifra, anotação ou repertório salvo será apagado!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
