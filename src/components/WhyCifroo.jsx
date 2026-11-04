import React from 'react';
import { Icons } from './Icons';
import { comparisonPoints } from '../data/features';

export default function WhyCifroo() {
  return (
    <section className="py-20 bg-darkBg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Por que os músicos escolhem o <span className="text-primary">Cifroo</span> no palco?
          </h2>
          <p className="mt-3 text-textSec text-sm sm:text-base">
            A maioria dos sites de cifras foi pensada para desktop. O Cifroo foi projetado para a pressão real do púlpito, do culto e do show.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Sites Tradicionais */}
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <h3 className="text-lg font-bold text-textSec flex items-center gap-2 mb-4">
              <span>✕</span> Sites Tradicionais no Navegador
            </h3>
            <ul className="space-y-3 text-sm text-textSec">
              {comparisonPoints.traditional.map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-textSec font-bold">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cifroo Mobile */}
          <div className="p-6 rounded-2xl bg-surface border border-primary/50 shadow-lg shadow-primary/5">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
              <Icons.CheckCircle /> Cifroo Mobile (App Oficial)
            </h3>
            <ul className="space-y-3 text-sm text-white">
              {comparisonPoints.cifroo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>{item.title}</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
