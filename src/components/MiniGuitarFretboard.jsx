import React from 'react';
import { getChordDetails } from '../utils/chordDb';

export default function MiniGuitarFretboard({
  chordName,
  capoFret = 0,
  onPress,
  isActive = false
}) {
  const details = getChordDetails(chordName);
  const baseFret = details.baseFret || 1;
  const numFrets = 4;
  const stringXs = [6, 16, 26, 36, 46, 56]; // 6 cordas
  const fretYs = [15, 29, 43, 57]; // 4 trastes

  // Subtítulo do acorde
  let subLabel = details.subLabel || 'Padrão';
  let isSubLabelOrange = false;
  if (capoFret > 0) {
    subLabel = `${capoFret} CAPO`;
  } else if (details.bar && details.bar.fret) {
    subLabel = `PESTANA ${details.bar.fret}ª`;
    isSubLabelOrange = true;
  } else if (baseFret > 1) {
    subLabel = `CASA ${baseFret}`;
  } else {
    subLabel = 'PADRÃO';
  }

  return (
    <button
      onClick={() => onPress && onPress(chordName)}
      className={`group shrink-0 flex flex-col items-center py-2 px-1.5 rounded-xl transition-all cursor-pointer select-none text-left ${
        isActive
          ? 'bg-[#222222] ring-1 ring-primary shadow-lg shadow-primary/20 scale-105'
          : 'bg-transparent hover:bg-[#1f1f1f]/80'
      }`}
      style={{ minWidth: '78px' }}
      title={`Clique para ver detalhes harmônicos de ${chordName}`}
    >
      {/* 1. Nome do Acorde */}
      <div className="flex items-center text-xs font-bold tracking-tight text-white group-hover:text-primary transition-colors mb-0.5">
        <span>{details.name}</span>
        <span className="text-primary ml-0.5 font-bold">*</span>
      </div>

      {/* 2. Indicador das cordas: • • • • • • */}
      <div className="text-[9px] font-mono tracking-widest text-[#8E8E93] mb-1">
        {details.stringTokens || '• • • • • •'}
      </div>

      {/* 3. Braço do Violão (SVG com 6 Cordas, 4 Trastes, Pestana e Dedos) */}
      <div className="relative w-[62px] h-[60px] flex items-center justify-center my-0.5">
        {/* Indicador de casa base na lateral esquerda */}
        {baseFret > 1 && (
          <span className="absolute -left-3 top-1 text-[9px] font-bold font-mono text-primary">
            {baseFret}ª
          </span>
        )}

        <svg width="62" height="60" viewBox="0 0 62 60" className="overflow-visible">
          {/* Pestana Nut Superior (fret 0) - branca se casa 1, sutil se baseFret > 1 */}
          <rect
            x="4"
            y="1"
            width="54"
            height={baseFret === 1 ? '3' : '1.5'}
            rx="1"
            fill={baseFret === 1 ? '#E2E8F0' : '#475569'}
          />

          {/* 6 Cordas Verticais (E, A, D, G, B, e) */}
          {stringXs.map((x, idx) => (
            <line
              key={`string_${idx}`}
              x1={x}
              y1="2"
              x2={x}
              y2="58"
              stroke="#52525B"
              strokeWidth={1 + (5 - idx) * 0.18}
            />
          ))}

          {/* 4 Trastes Metálicos Horizontais */}
          {fretYs.map((y, idx) => (
            <line
              key={`fret_${idx}`}
              x1="4"
              y1={y}
              x2="58"
              y2={y}
              stroke="#3F3F46"
              strokeWidth="1"
            />
          ))}

          {/* Barra de Pestana em Laranja #FF6B00 */}
          {details.bar && (
            <rect
              x={stringXs[6 - (details.bar.from || 6)] - 2}
              y={fretYs[details.bar.fret - baseFret] - 11}
              width={stringXs[6 - (details.bar.to || 1)] - stringXs[6 - (details.bar.from || 6)] + 4}
              height="8"
              rx="4"
              fill="#FF6B00"
            />
          )}

          {/* Bolinhas dos Dedos nas Cordas em #FF6B00 */}
          {details.frets.map((fVal, sIdx) => {
            if (fVal === 'x' || fVal === 'X' || fVal === 0) return null;
            const fretRelative = fVal - baseFret;
            if (fretRelative < 0 || fretRelative >= numFrets) return null;

            const cx = stringXs[sIdx];
            const cy = fretYs[fretRelative] - 7;
            const fingerNum = details.fingers ? details.fingers[sIdx] : '';

            // Se for pestana na mesma casa, omite a bolinha duplicada se coberta
            if (details.bar && details.bar.fret === fVal && sIdx >= (6 - details.bar.from) && sIdx <= (6 - details.bar.to)) {
              return null;
            }

            return (
              <g key={`dot_${sIdx}`}>
                <circle cx={cx} cy={cy} r="4" fill="#FF6B00" />
                {fingerNum && fingerNum !== '0' && (
                  <text
                    x={cx}
                    y={cy + 2.5}
                    fontSize="6"
                    fontWeight="bold"
                    fill="#FFFFFF"
                    textAnchor="middle"
                  >
                    {fingerNum}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* 4. Subtítulo Inferior */}
      <div
        className={`text-[9px] font-bold uppercase tracking-wider mt-1 truncate ${
          isSubLabelOrange ? 'text-primary' : 'text-[#8E8E93]'
        }`}
      >
        {subLabel}
      </div>
    </button>
  );
}
