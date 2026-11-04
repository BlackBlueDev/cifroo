import React, { useState, useMemo } from 'react';
import { Icons } from './Icons';
import { sampleSongs } from '../data/songs';
import { transposeSingleChord, transposeChordLine, isChordLine } from '../utils/transposer';
import { APP_VERSION } from '../data/constants';

export default function Simulator() {
  const [selectedSong, setSelectedSong] = useState('nada-alem');
  const [capoFret, setCapoFret] = useState(1);
  const [semitoneShift, setSemitoneShift] = useState(0);
  const [showDiagrams, setShowDiagrams] = useState(true);
  const [showNotes, setShowNotes] = useState(true);
  const [columns, setColumns] = useState(2);
  const [textAlign, setTextAlign] = useState('left');
  const [viewMode, setViewMode] = useState('map');

  const currentSong = sampleSongs[selectedSong];

  // Tom escrito (shape) atualizado em tempo real pelo semitoneShift
  const currentFingeringKey = useMemo(() => {
    return transposeSingleChord(currentSong.shapeKey, semitoneShift);
  }, [currentSong.shapeKey, semitoneShift]);

  // Som real (congregação/banda) = shape + capo
  const currentConcertKey = useMemo(() => {
    return transposeSingleChord(currentFingeringKey, capoFret);
  }, [currentFingeringKey, capoFret]);

  // Cifra com transposição harmônica em tempo real (atualiza tela instantaneamente)
  const transposedCompact = useMemo(() => {
    return currentSong.compact.map(b => ({
      ...b,
      chords: transposeChordLine(b.chords, semitoneShift)
    }));
  }, [currentSong.compact, semitoneShift]);

  const transposedLyrics = useMemo(() => {
    return currentSong.lyrics.map(line => {
      if (line.startsWith('[')) return line;
      if (isChordLine(line)) {
        return transposeChordLine(line, semitoneShift);
      }
      return line;
    });
  }, [currentSong.lyrics, semitoneShift]);

  return (
    <div id="simulador" className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface p-4 sm:p-8 shadow-xl">
          {/* Simulador Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-textSec">
                Simulador de Palco em Tempo Real (Cifroo {APP_VERSION})
              </span>
            </div>

            <div className="flex items-center gap-2 bg-darkBg p-1 rounded-xl border border-border">
              <button
                onClick={() => { setSelectedSong('nada-alem'); setCapoFret(1); setSemitoneShift(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedSong === 'nada-alem'
                    ? 'bg-primary text-white shadow'
                    : 'text-textSec hover:text-white'
                }`}
              >
                Nada Além do Sangue (Bb / Capo 1)
              </button>
              <button
                onClick={() => { setSelectedSong('porque-ele-vive'); setCapoFret(0); setSemitoneShift(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedSong === 'porque-ele-vive'
                    ? 'bg-primary text-white shadow'
                    : 'text-textSec hover:text-white'
                }`}
              >
                Porque Ele Vive (G)
              </button>
            </div>
          </div>

          {/* Ficha da Música */}
          <div className="mt-6 bg-darkBg rounded-xl border border-border p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  {currentSong.title}
                  <span className="text-xs px-2 py-0.5 rounded bg-surface text-textSec border border-border font-semibold">
                    {currentSong.artist}
                  </span>
                </h3>
                <p className="text-xs text-textSec mt-1">
                  Forma Escrita: <span className="font-bold text-white">{currentSong.shapeKey}</span> • Ritmo: {currentSong.rhythm} • {currentSong.instrument}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs">
                  <span className="text-textSec">Som Real:</span>{' '}
                  <strong className="text-primary font-bold">{currentConcertKey}</strong>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs">
                  <span className="text-textSec">Capo:</span>{' '}
                  <strong className="text-primary font-bold">
                    {capoFret === 0 ? 'Sem Capo' : `${capoFret}ª Casa`}
                  </strong>
                </div>
              </div>
            </div>

            {/* Barra de Controles do Simulador */}
            <div className="py-3 flex flex-wrap items-center gap-2 text-xs border-b border-border">
              {/* Transposição de Tom (- / +) com atualização imediata */}
              <div className="flex items-center bg-surface rounded-full border border-border overflow-hidden">
                <button
                  onClick={() => setSemitoneShift(prev => prev - 1)}
                  className="px-3 py-1.5 hover:bg-[#262626] text-white font-bold transition-colors"
                  title="Descer 1/2 tom"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-primary font-bold border-x border-border">
                  Tom: {currentFingeringKey}
                </span>
                <button
                  onClick={() => setSemitoneShift(prev => prev + 1)}
                  className="px-3 py-1.5 hover:bg-[#262626] text-white font-bold transition-colors"
                  title="Subir 1/2 tom"
                >
                  +
                </button>
              </div>

              {/* Capotraste (- / +) */}
              <div className="flex items-center bg-surface rounded-full border border-border overflow-hidden">
                <button
                  onClick={() => setCapoFret(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 hover:bg-[#262626] text-white font-bold transition-colors"
                  title="Voltar 1 casa de Capo"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-white font-bold border-x border-border">
                  Capo: {capoFret === 0 ? 'Sem' : `${capoFret}ª`}
                </span>
                <button
                  onClick={() => setCapoFret(prev => Math.min(9, prev + 1))}
                  className="px-3 py-1.5 hover:bg-[#262626] text-white font-bold transition-colors"
                  title="Avançar 1 casa de Capo"
                >
                  +
                </button>
              </div>

              {/* Diagramas de Acordes */}
              <button
                onClick={() => setShowDiagrams(prev => !prev)}
                className={`px-3 py-1.5 rounded-full border flex items-center gap-1.5 font-bold transition-all ${
                  showDiagrams
                    ? 'bg-primary/20 text-primary border-primary/40'
                    : 'bg-surface text-textSec border-border'
                }`}
              >
                {showDiagrams ? <Icons.Eye /> : <Icons.EyeOff />}
                <span>Acordes ({currentSong.diagrams.length}) {showDiagrams ? '⌃' : '⌄'}</span>
              </button>

              {/* Anotações */}
              <button
                onClick={() => setShowNotes(prev => !prev)}
                className={`px-3 py-1.5 rounded-full border flex items-center gap-1.5 font-bold transition-all ${
                  showNotes
                    ? 'bg-surface text-primary border-primary/40'
                    : 'bg-surface text-textSec border-border'
                }`}
              >
                <Icons.FileText />
                <span>Notas {showNotes ? '⌃' : '⌄'}</span>
              </button>

              {/* Mapa vs Letra */}
              <button
                onClick={() => setViewMode(prev => prev === 'map' ? 'lyrics' : 'map')}
                className="px-3 py-1.5 rounded-full bg-surface border border-border text-white hover:border-primary font-bold transition-all"
              >
                {viewMode === 'map' ? 'Modo Mapa' : 'Modo Letra'}
              </button>

              {/* Colunas */}
              <button
                onClick={() => setColumns(prev => prev === 2 ? 1 : 2)}
                className="px-3 py-1.5 rounded-full bg-surface border border-border text-white hover:border-primary font-bold flex items-center gap-1 transition-all"
              >
                {columns === 2 ? <Icons.Columns className="w-3.5 h-3.5 text-primary" /> : <Icons.Square className="w-3.5 h-3.5 text-textSec" />}
                <span>{columns} Col</span>
              </button>

              {/* Alinhamento */}
              <div className="flex items-center bg-surface rounded-full border border-border p-0.5 ml-auto">
                <button
                  onClick={() => setTextAlign('left')}
                  className={`p-1.5 rounded-full transition-all ${textAlign === 'left' ? 'bg-primary text-white shadow' : 'text-textSec hover:text-white'}`}
                  title="Esquerda"
                >
                  <Icons.AlignLeft />
                </button>
                <button
                  onClick={() => setTextAlign('center')}
                  className={`p-1.5 rounded-full transition-all ${textAlign === 'center' ? 'bg-primary text-white shadow' : 'text-textSec hover:text-white'}`}
                  title="Centralizado"
                >
                  <Icons.AlignCenter />
                </button>
                <button
                  onClick={() => setTextAlign('right')}
                  className={`p-1.5 rounded-full transition-all ${textAlign === 'right' ? 'bg-primary text-white shadow' : 'text-textSec hover:text-white'}`}
                  title="Direita"
                >
                  <Icons.AlignRight />
                </button>
              </div>
            </div>

            {/* FORMAÇÃO VISUAL DE ACORDES NO BRAÇO DO VIOLÃO COM CASAS VERTICAIS */}
            {showDiagrams && (
              <div className="py-4 border-b border-border bg-surface/50 rounded-xl p-3 my-2">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">
                      Formação dos Acordes no Braço do Violão
                    </span>
                    <span className="text-[11px] text-textSec">
                      • Digitação com Capo na {capoFret}ª Casa
                    </span>
                  </div>
                  <button
                    onClick={() => setShowDiagrams(false)}
                    className="text-xs text-primary hover:underline font-bold"
                  >
                    Recolher ⌃
                  </button>
                </div>

                <div className="flex items-center gap-4 overflow-x-auto pb-2">
                  {currentSong.diagrams.map((diag, idx) => {
                    const transposedChordName = transposeSingleChord(diag.name, semitoneShift);
                    return (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-32 bg-darkBg rounded-xl border border-border p-2.5 text-center shadow-inner"
                      >
                        <span className="text-sm font-black text-primary">
                          {transposedChordName}
                        </span>
                        
                        {/* Marcadores de corda solta (o) ou abafada (x) */}
                        <div className="grid grid-cols-6 gap-1 mt-1 text-[10px] text-textSec font-mono">
                          {diag.markers.map((m, sIdx) => (
                            <span key={sIdx}>{m || ' '}</span>
                          ))}
                        </div>

                        {/* Barra de Capo ou Pestana */}
                        <div className="mt-1 h-3 bg-textSec text-darkBg rounded-sm text-[8px] font-black flex items-center justify-center tracking-widest">
                          {capoFret > 0 ? `${capoFret} CAPO` : 'NUT'}
                        </div>

                        {/* BRAÇO VERTICAL COM CASAS 1, 2, 3 */}
                        <div className="mt-1 bg-surface/80 border border-border rounded overflow-hidden">
                          {[1, 2, 3].map((fretNum) => (
                            <div
                              key={fretNum}
                              className={`grid grid-cols-6 h-5 relative ${
                                fretNum < 3 ? 'border-b border-border' : ''
                              }`}
                            >
                              {/* 6 cordas verticais */}
                              {[0, 1, 2, 3, 4, 5].map((stringIdx) => {
                                const chordFret = diag.frets[stringIdx];
                                const finger = diag.fingers[stringIdx];
                                const hasFingerOnThisFret = chordFret === fretNum;

                                return (
                                  <div
                                    key={stringIdx}
                                    className="relative flex items-center justify-center"
                                  >
                                    <div className="absolute inset-y-0 w-[1px] bg-[#333333] pointer-events-none" />

                                    {hasFingerOnThisFret && (
                                      <div className="w-3.5 h-3.5 rounded-full bg-primary text-white font-black text-[9px] flex items-center justify-center z-10 shadow">
                                        {finger || '•'}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                        </div>

                        <div className="text-[9px] text-textSec mt-1">
                          Casas 1 • 2 • 3
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Caixa de Anotações do Músico */}
            {showNotes ? (
              <div className="my-3 p-3 rounded-xl bg-surface border border-border flex items-start justify-between gap-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <Icons.FileText className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-xs font-bold text-primary block">
                      Anotações do Músico (Palco / Culto)
                    </span>
                    <p className="text-xs text-textSec mt-0.5">
                      {currentSong.notes}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowNotes(false)}
                  className="px-2.5 py-1 rounded-full bg-darkBg text-textSec hover:text-white font-bold text-[11px] whitespace-nowrap border border-border transition-colors"
                >
                  Recolher ⌃
                </button>
              </div>
            ) : (
              <div
                onClick={() => setShowNotes(true)}
                className="my-2 px-3 py-2 rounded-xl bg-surface border border-border flex items-center justify-between cursor-pointer hover:border-textSec transition-all"
              >
                <div className="flex items-center gap-2">
                  <Icons.FileText className="w-4 h-4 text-textSec" />
                  <span className="text-xs font-semibold text-textSec">
                    Anotações do Músico (Recolhidas para desobstruir a tela)
                  </span>
                </div>
                <span className="text-xs font-bold text-primary">
                  Expandir ⌄
                </span>
              </div>
            )}

            {/* ÁREA DA CIFRA: SEÇÕES BRANCAS EM NEGRITO, ACORDES LARANJA, LETRAS CINZAS */}
            <div className="mt-4 font-mono text-sm leading-relaxed">
              {viewMode === 'map' ? (
                <div className={`grid gap-4 ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {transposedCompact.map((block, bIdx) => (
                    <div key={bIdx} className="bg-surface p-3.5 rounded-xl border border-border shadow-sm">
                      <span className="text-xs font-bold text-white block mb-2">
                        {block.section}
                      </span>
                      <pre
                        style={{ textAlign }}
                        className="text-primary font-black text-sm whitespace-pre-wrap font-mono leading-relaxed"
                      >
                        {block.chords}
                      </pre>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-surface p-4 rounded-xl border border-border font-mono text-xs text-gray-200 whitespace-pre-wrap leading-loose shadow-sm">
                  {transposedLyrics.map((line, lIdx) => (
                    <div key={lIdx} style={{ textAlign }}>
                      {line.startsWith('[') ? (
                        <span className="text-white font-bold block mt-3 mb-1 text-sm">{line}</span>
                      ) : isChordLine(line) ? (
                        <span className="text-primary font-bold block">{line}</span>
                      ) : (
                        <span className="text-gray-300 block">{line}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
