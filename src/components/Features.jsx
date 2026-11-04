import React from 'react';
import { Icons } from './Icons';
import { studioFeatures } from '../data/features';

export default function Features() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap': return <Icons.Zap className="w-6 h-6 text-primary" />;
      case 'WifiOff': return <Icons.WifiOff className="w-6 h-6 text-primary" />;
      case 'Sliders': return <Icons.Sliders className="w-6 h-6 text-primary" />;
      case 'Eye': return <Icons.Eye className="w-6 h-6 text-primary" />;
      case 'Columns': return <Icons.Columns className="w-6 h-6 text-primary" />;
      case 'FileText': return <Icons.FileText className="w-6 h-6 text-primary" />;
      default: return <Icons.Zap className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="recursos" className="py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Funcionalidades de Estúdio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
            Blindado para Qualquer Apresentação
          </h2>
          <p className="mt-4 text-textSec text-sm sm:text-base">
            Desenvolvido para violonistas, guitarristas, tecladistas e baixistas tocarem com total segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studioFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-primary transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-darkBg border border-border flex items-center justify-center mb-5">
                {getIcon(feat.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-textSec leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
