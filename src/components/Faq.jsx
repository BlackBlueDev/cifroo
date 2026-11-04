import React, { useState } from 'react';
import { Icons } from './Icons';
import { faqList } from '../data/faq';
import { APP_VERSION } from '../data/constants';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="py-20 border-b border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">Perguntas Frequentes</h2>
          <p className="mt-2 text-sm text-textSec">Tudo o que você precisa saber sobre o Cifroo {APP_VERSION}.</p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-surface border border-border overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-sm text-white flex items-center justify-between hover:text-primary transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-textSec leading-relaxed border-t border-border pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
