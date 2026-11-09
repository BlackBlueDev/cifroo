import React, { useState } from 'react';
import { getChordDetails } from '../utils/chordDb';

export default function ChordDiagramModal({
  isOpen,
  onClose,
  initialChord = 'C#m7(9)',
  allChords = []
}) {
  const [selectedChord, setSelectedChord] = useState(initialChord);
  const [activeTab, setActiveTab] = useState('violao'); // 'violao' | 'teclado' | 'baixo'

  React.useEffect(() => {
    if (initialChord) {
      setSelectedChord(initialChord);
    }
  }, [initialChord, isOpen]);

  if (!isOpen) return null;

  const details = getChordDetails(selectedChord);
  const baseFret = details.baseFret || 1;
  const stringXs = [24, 56, 88, 120, 152, 184];
  const fretYs = [40, 80, 120, 160];

  // Piano keys simulation (C3 to B4)
  const whiteKeys = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si', 'Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
  const blackKeys = [
    { note: 'C#', label: 'C#', pos: 0 },
    { note: 'D#', label: 'D#', pos: 1 },
    { note: 'F#', label: 'F#', pos: 3 },
    { note: 'G#', label: 'G#', pos: 4 },
    { note: 'A#', label: 'A#', pos: 5 },
    { note: 'C#2', label: 'C#', pos: 7 },
    { note: 'D#2', label: 'D#', pos: 8 },
    { note: 'F#2', label: 'F#', pos: 10 },
    { note: 'G#2', label: 'G#', pos: 11 },
    { note: 'A#2', label: 'A#', pos: 12 }
  ];

  const chordNotes = details.notes || ['C#', 'E', 'G#', 'B'];

  // Clean chord list without duplicate stars
  const chordList = (allChords.length > 0 ? allChords : [selectedChord]).map(c => c.replace('*', ''));

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-[#181818] border-t sm:border border-[#2a2a2a] rounded-t-[32px] sm:rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in slide-in-from-bottom-8 duration-200">
        
        {/* Header do Modal 1:1 Cifroo Mobile */}
        <div className="flex items-start justify-between pb-3">
          <div>
            <h3 className="text-3xl font-black text-primary tracking-tight">
              {details.name}
            </h3>
            <p className="text-xs text-[#8E8E93] mt-0.5">
              {details.rootPt || 'Dó#'} {details.suffix || 'm7(9'} • Acorde {details.suffix || 'm7(9'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#303030] text-gray-300 hover:text-white flex items-center justify-center text-lg font-bold cursor-pointer transition-colors"
            title="Fechar visualizador de acordes"
          >
            ✕
          </button>
        </div>

        {/* Carrossel Horizontal de Acordes da Música */}
        <div className="py-3 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-[#242424]">
          {chordList.map(c => {
            const isSel = c === selectedChord.replace('*', '');
            return (
              <button
                key={c}
                onClick={() => setSelectedChord(c)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSel
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-[#222222] hover:bg-[#2c2c2c] text-white border border-[#333333]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Abas de Instrumento (Violão, Teclado, Contrabaixo) */}
        <div className="grid grid-cols-3 border-b border-[#242424] mt-4 mb-6">
          {[
            { id: 'violao', label: 'Violão', icon: '🎵' },
            { id: 'teclado', label: 'Teclado', icon: '⚏' },
            { id: 'baixo', label: 'Contrabaixo', icon: '⚡' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`py-3 px-2 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border-b-2 ${
                activeTab === t.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-[#8E8E93] hover:text-white'
              }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Violão (Diagrama Fiel ao Cifroo Mobile) */}
        {activeTab === 'violao' && (
          <div className="flex flex-col items-center">
            <div className="relative w-[210px] h-[210px] my-2">
              {/* Badge 9ª casa na lateral */}
              {baseFret > 1 && (
                <div className="absolute -left-10 top-6 px-2 py-0.5 rounded-md bg-[#242424] border border-[#333] text-[10px] font-bold font-mono text-gray-200">
                  {baseFret}ª casa
                </div>
              )}

              <svg width="210" height="210" viewBox="0 0 210 200" className="overflow-visible">
                {/* Nut (apenas se baseFret === 1) */}
                {baseFret === 1 && (
                  <rect x="20" y="8" width="168" height="4" rx="2" fill="#E2E8F0" />
                )}

                {/* 6 Cordas Verticais (E, A, D, G, B, e) em tom azulado sutil #3A4454 */}
                {stringXs.map((x, idx) => (
                  <line
                    key={`str_${idx}`}
                    x1={x}
                    y1="10"
                    x2={x}
                    y2="170"
                    stroke="#384353"
                    strokeWidth={idx === 0 ? 2.5 : idx < 3 ? 2 : 1.5}
                  />
                ))}

                {/* 4 Trastes Metálicos Horizontais */}
                {fretYs.map((y, idx) => (
                  <line key={`fr_${idx}`} x1="20" y1={y} x2="188" y2={y} stroke="#384353" strokeWidth="1.5" />
                ))}

                {/* Pestana Gráfica em Laranja #FF6B00 com círculos nas pontas */}
                {details.bar && (
                  <g>
                    <rect
                      x={stringXs[6 - (details.bar.from || 6)] - 6}
                      y={fretYs[details.bar.fret - baseFret] - 25}
                      width={stringXs[6 - (details.bar.to || 1)] - stringXs[6 - (details.bar.from || 6)] + 12}
                      height="14"
                      rx="7"
                      fill="#FF6B00"
                    />
                    <circle cx={stringXs[6 - (details.bar.from || 6)]} cy={fretYs[details.bar.fret - baseFret] - 18} r="6" fill="#FF6B00" />
                    <circle cx={stringXs[6 - (details.bar.to || 1)]} cy={fretYs[details.bar.fret - baseFret] - 18} r="6" fill="#FF6B00" />
                  </g>
                )}

                {/* Bolinhas dos Dedos nas Cordas */}
                {details.frets.map((fVal, sIdx) => {
                  if (fVal === 'x' || fVal === 'X' || fVal === 0) return null;
                  const fretRelative = fVal - baseFret;
                  if (fretRelative < 0 || fretRelative >= 4) return null;
                  const cx = stringXs[sIdx];
                  const cy = fretYs[fretRelative] - 18;
                  const fingerNum = details.fingers ? details.fingers[sIdx] : '';

                  // Se for pestana na mesma casa, omite a bolinha duplicada
                  if (details.bar && details.bar.fret === fVal && sIdx >= (6 - details.bar.from) && sIdx <= (6 - details.bar.to)) {
                    return null;
                  }

                  return (
                    <g key={`dot_lg_${sIdx}`}>
                      <circle cx={cx} cy={cy} r="8" fill="#FF6B00" />
                      {fingerNum && fingerNum !== '0' && (
                        <text x={cx} y={cy + 3.5} fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                          {fingerNum}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* Letras das Cordas na Base (E, A, D, G, B, e) */}
                {['E', 'A', 'D', 'G', 'B', 'e'].map((sName, idx) => (
                  <text
                    key={`label_${idx}`}
                    x={stringXs[idx]}
                    y="190"
                    fontSize="11"
                    fontWeight="bold"
                    fill="#8E8E93"
                    textAnchor="middle"
                  >
                    {sName}
                  </text>
                ))}
              </svg>
            </div>

            <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-[#202020] border border-[#2d2d2d] text-xs text-[#8E8E93] w-full">
              <span className="text-primary font-bold">ⓘ</span>
              <span>Toque as cordas com &quot;O&quot; e abafe com o polegar as marcadas com &quot;X&quot;.</span>
            </div>
          </div>
        )}

        {/* Tab 2: Teclado (Piano Keyboard com Teclas Iluminadas) */}
        {activeTab === 'teclado' && (
          <div className="flex flex-col items-center">
            {/* Badges das Notas */}
            <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
              <span className="text-xs font-bold text-[#8E8E93]">Notas:</span>
              {chordNotes.map(n => (
                <span
                  key={n}
                  className="px-3 py-1 rounded-lg bg-primary text-white font-bold text-xs shadow-sm"
                >
                  {n}
                </span>
              ))}
            </div>

            {/* Teclado de Piano */}
            <div className="relative w-full max-w-sm h-32 bg-white rounded-xl p-1 border border-black shadow-inner flex overflow-hidden">
              {/* Teclas Brancas */}
              <div className="flex w-full h-full">
                {whiteKeys.map((wNote, idx) => {
                  const isNote = chordNotes.some(cn => cn.startsWith(wNote.substring(0, 2)));
                  return (
                    <div
                      key={idx}
                      className={`flex-1 border-r border-gray-300 rounded-b-md flex flex-col justify-end items-center pb-2 select-none ${
                        isNote ? 'bg-primary text-white font-black' : 'bg-white text-gray-600'
                      }`}
                    >
                      <span className="text-[9px] font-bold">{wNote}</span>
                    </div>
                  );
                })}
              </div>

              {/* Teclas Pretas */}
              <div className="absolute top-1 left-3 right-3 h-20 flex pointer-events-none">
                {blackKeys.map((bk, idx) => {
                  const isNote = chordNotes.includes(bk.note.replace('2', ''));
                  return (
                    <div
                      key={idx}
                      style={{ left: `${(bk.pos / 14) * 100 + 3}%` }}
                      className={`absolute top-0 w-5 h-full rounded-b-md border border-black z-10 flex flex-col justify-end items-center pb-1 ${
                        isNote ? 'bg-primary text-white font-black shadow-md' : 'bg-[#181818] text-white/50'
                      }`}
                    >
                      <span className="text-[7px] font-bold">{bk.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 p-3 rounded-xl bg-[#202020] border border-[#2d2d2d] text-xs text-[#8E8E93] w-full">
              <span className="text-primary font-bold">ⓘ</span>
              <span>Pressione as teclas destacadas em laranja com a mão direita.</span>
            </div>
          </div>
        )}

        {/* Tab 3: Contrabaixo */}
        {activeTab === 'baixo' && (
          <div className="flex flex-col items-center">
            <div className="w-full p-4 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-300">Tônica Principal:</span>
                <span className="px-3.5 py-1 rounded-lg bg-primary text-white font-black text-sm">
                  {details.bassNote || details.name.split('/')[1] || details.name[0]}
                </span>
              </div>
              <p className="text-xs text-[#8E8E93] leading-relaxed">
                Braço de 4 cordas (E • A • D • G). Sustente a tônica no tempo 1 do compasso e use a 3ª e 5ª ({chordNotes.join(', ')}) para notas de passagem.
              </p>
            </div>

            <div className="mt-2 flex items-center gap-2 p-3 rounded-xl bg-[#202020] border border-[#2d2d2d] text-xs text-[#8E8E93] w-full">
              <span className="text-primary font-bold">ⓘ</span>
              <span>Sustente a tônica no tempo 1 e utilize as notas destacadas para condução de palco.</span>
            </div>
          </div>
        )}

        {/* Rodapé de Ação */}
        <div className="mt-6 pt-4 border-t border-[#242424] flex items-center justify-between">
          <span className="text-[11px] text-[#8E8E93]">
            Recurso 100% nativo do Cifroo Mobile
          </span>
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
