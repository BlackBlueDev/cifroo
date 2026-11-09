import React, { useState } from 'react';

const CAPO_OPTIONS = [
  { fret: 0, label: 'Sem Capo', badge: 'ORIGINAL' },
  { fret: 1, label: '1ª Casa' },
  { fret: 2, label: '2ª Casa' },
  { fret: 3, label: '3ª Casa' },
  { fret: 4, label: '4ª Casa' },
  { fret: 5, label: '5ª Casa' },
  { fret: 6, label: '6ª Casa' },
  { fret: 7, label: '7ª Casa' },
  { fret: 8, label: '8ª Casa' },
  { fret: 9, label: '9ª Casa' }
];

export default function CapoModal({
  isOpen,
  onClose,
  currentCapoFret,
  onSelectCapoFret,
  fingeringKey,
  concertKey
}) {
  const [autoTranspose, setAutoTranspose] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-[#181818] border-t sm:border border-[#2a2a2a] rounded-t-[32px] sm:rounded-3xl max-w-md w-full shadow-2xl p-6 sm:p-8 animate-in slide-in-from-bottom-8 duration-200">
        
        {/* Header 1:1 App */}
        <div className="flex items-center justify-between pb-4 border-b border-[#242424]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-lg">
              ⚯
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Capotraste no Palco</h3>
              <p className="text-xs text-[#8E8E93]">
                {currentCapoFret === 0 ? 'Sem Capo' : `Capo na ${currentCapoFret}ª Casa`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#303030] text-gray-300 hover:text-white flex items-center justify-center text-lg font-bold cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Switch Transposição Automática */}
        <div className="my-5 p-4 rounded-2xl bg-[#1f1f1f] border border-[#2c2c2c] flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <span className="text-primary font-bold">↻</span>
              <span>Transposição Automática</span>
            </div>
            <p className="text-xs text-[#8E8E93] mt-1 leading-relaxed">
              Ao mudar o capo, os acordes se adaptam para manter a mesma afinação da banda.
            </p>
          </div>
          <button
            onClick={() => setAutoTranspose(prev => !prev)}
            className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${
              autoTranspose ? 'bg-primary' : 'bg-[#333]'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                autoTranspose ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Comparação Som Real x Formato dos Dedos */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="p-3.5 rounded-2xl bg-[#141414] border border-[#242424] text-center">
            <span className="text-[10px] font-bold text-[#8E8E93] uppercase tracking-wider block mb-1">
              Tom do Culto (Som Real)
            </span>
            <span className="text-2xl font-black text-primary font-mono">{concertKey}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#141414] border border-[#242424] text-center">
            <span className="text-[10px] font-bold text-[#8E8E93] uppercase tracking-wider block mb-1">
              Formato dos Dedos
            </span>
            <span className="text-2xl font-black text-primary font-mono">{fingeringKey}</span>
          </div>
        </div>

        {/* Grid de Opções de Casas */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E8E93] block mb-3 font-mono">
            Selecione a Casa da Pestana:
          </span>
          <div className="grid grid-cols-2 gap-2.5 max-h-56 overflow-y-auto no-scrollbar">
            {CAPO_OPTIONS.map(opt => {
              const isSelected = opt.fret === currentCapoFret;
              return (
                <button
                  key={opt.fret}
                  onClick={() => onSelectCapoFret(opt.fret)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]'
                      : 'bg-[#202020] hover:bg-[#282828] text-white border border-[#2a2a2a]'
                  }`}
                >
                  <span>{opt.label}</span>
                  {opt.badge && (
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#2c2c2c] text-[#8E8E93]'
                      }`}
                    >
                      {opt.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Ações Inferiores */}
        <div className="mt-6 pt-4 border-t border-[#242424] flex items-center justify-between">
          {currentCapoFret > 0 ? (
            <button
              onClick={() => onSelectCapoFret(0)}
              className="text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>↺</span>
              <span>Restaurar Original</span>
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-primary hover:bg-[#E65100] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
}
