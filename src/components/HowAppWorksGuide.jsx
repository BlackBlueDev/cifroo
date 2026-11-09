import React from 'react';
import { Icons } from './Icons';

export default function HowAppWorksGuide() {
  const guides = [
    {
      icon: '🎸',
      badge: 'Visualização Harmônica',
      title: 'Braço de Violão & Multi-Instrumento',
      desc: 'No Cifroo, cada acorde tem um diagrama real de braço de violão com trastes, pestanas em laranja e numeração dos dedos. Toque em qualquer acorde na cifra para ver também no Teclado e no Contrabaixo.'
    },
    {
      icon: '🧲',
      badge: 'Smart Capo',
      title: 'Separação Estrita de Tom',
      desc: 'O app calcula matematicamente a diferença entre a Forma Escrita (o formato que sua mão faz) e o Som Real (o tom que a banda e congregação ouvem), impedindo qualquer desafinação no palco.'
    },
    {
      icon: '⚡',
      badge: 'Transposição 1-Toque',
      title: 'Ajuste Instantâneo de Tom',
      desc: 'Precisa mudar o tom para o vocalista de última hora? Use os botões [-] e [+] na barra superior do palco para transpor todos os acordes e diagramas em milissegundos sem travar o app.'
    },
    {
      icon: '📜',
      badge: 'Autoscroll Mãos-Livres',
      title: 'Dock de Palco com Rolagem Suave',
      desc: 'Ative a rolagem automática com velocidade ajustável (1x, 2x, 3x) e ajuste o tamanho da fonte (A- e A+) diretamente no dock de rodapé para tocar sem tirar as mãos do instrumento.'
    },
    {
      icon: '🔄',
      badge: 'Visualização Dupla',
      title: 'Mapa de Acordes vs Cifra c/ Letra',
      desc: 'Alterne com um único toque entre a Cifra Completa com Letra ou o Mapa de Acordes compacto (ideal para quem já conhece a letra e precisa apenas da sequência harmônica).'
    },
    {
      icon: '🧹',
      badge: 'Limpeza de Palco',
      title: 'Eliminação Cirúrgica de Tabs',
      desc: 'O motor inteligente do Cifroo higieniza as cifras, removendo tablaturas confusas e comentários desnecessários, deixando a tela limpa e focada no que importa.'
    }
  ];

  return (
    <div className="mt-16 pt-12 border-t border-[#262626]">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-primary uppercase tracking-wider">
          Guia do Músico de Palco
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
          Como o Cifroo Mobile Funciona na Prática?
        </h3>
        <p className="text-xs sm:text-sm text-textSec mt-2">
          Recursos projetados especificamente para eliminar o estresse durante ensaios, cultos e apresentações ao vivo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((g, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#141414] border border-[#242424] hover:border-primary/50 transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{g.icon}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1e1e1e] border border-[#2d2d2d] text-[10px] font-bold text-primary uppercase font-mono">
                  {g.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">{g.title}</h4>
              <p className="text-xs text-textSec leading-relaxed">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
