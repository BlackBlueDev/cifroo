import React from 'react';
import { Icons } from './Icons';
import { changelogItems } from '../data/changelog';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function Changelog({ onDownload }) {
  return (
    <section id="novidades" className="py-20 border-b border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darkBg border border-primary/40 text-xs font-bold text-primary mb-3">
            <Icons.Sparkles className="w-4 h-4 text-primary" />
            <span>Changelog Oficial {APP_VERSION}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            O que há de novo no <span className="text-primary">Cifroo {APP_VERSION}</span>?
          </h2>
          <p className="mt-3 text-textSec text-sm sm:text-base">
            Construído ouvindo a pressão real de quem sobe ao palco. Confira as melhorias de engenharia e usabilidade da nova versão:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {changelogItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-darkBg border border-border hover:border-primary transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-surface text-primary font-bold text-xs border border-border">
                  {item.tag}
                </span>
                <span className="text-xs text-textSec font-mono">{item.num}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-textSec leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner de download da nova versão */}
        <div className="mt-12 p-6 rounded-2xl bg-darkBg border border-primary/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              Arquivo de instalação atualizado: <code className="text-primary font-mono">{APK_FILENAME}</code>
            </h4>
            <p className="text-xs text-textSec mt-1">
              O nome do arquivo agora traz a versão explícita para que você tenha certeza de que está baixando a versão mais recente sem se confundir com versões antigas.
            </p>
          </div>
          <a
            href={GITHUB_RELEASE_APK_URL}
            onClick={onDownload}
            className="px-6 py-3 rounded-xl bg-primary hover:bg-[#E65100] text-white font-bold text-sm whitespace-nowrap transition-all shadow-md shadow-primary/20"
          >
            Baixar {APK_FILENAME}
          </a>
        </div>
      </div>
    </section>
  );
}
