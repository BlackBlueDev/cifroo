import React, { useState, useMemo, useRef, useEffect } from 'react';
import { sampleSongs } from '../data/songs';
import { transposeSingleChord, transposeChordLine, isChordLine } from '../utils/transposer';
import { APP_VERSION } from '../data/constants';
import MiniGuitarFretboard from './MiniGuitarFretboard';
import ChordDiagramModal from './ChordDiagramModal';
import CapoModal from './CapoModal';
import HowAppWorksGuide from './HowAppWorksGuide';

export default function Simulator() {
  const [selectedSongKey, setSelectedSongKey] = useState('a-tua-graca');
  const [semitoneShift, setSemitoneShift] = useState(0);
  const [capoFret, setCapoFret] = useState(0);
  const [viewMode, setViewMode] = useState('lyrics'); // 'lyrics' | 'map'
  const [columns, setColumns] = useState(1);
  const [fontSize, setFontSize] = useState(15);
  const [showChordStrip, setShowChordStrip] = useState(true);
  const [isChordStripCollapsed, setIsChordStripCollapsed] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [showAutoscrollDock, setShowAutoscrollDock] = useState(false);

  // Modais do App
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('map');
  const [isCapoModalOpen, setIsCapoModalOpen] = useState(false);
  const [isChordModalOpen, setIsChordModalOpen] = useState(false);
  const [activeChordForModal, setActiveChordForModal] = useState('C#m7(9)');
  const [toastMessage, setToastMessage] = useState(null);

  const scrollContainerRef = useRef(null);
  const currentSong = sampleSongs[selectedSongKey];
  const songKeys = Object.keys(sampleSongs);
  const currentSongIndex = songKeys.indexOf(selectedSongKey);

  // Forma escrita (shapeKey) transposta
  const currentFingeringKey = useMemo(() => {
    return transposeSingleChord(currentSong.shapeKey, semitoneShift);
  }, [currentSong.shapeKey, semitoneShift]);

  // Som real ouvido pela banda = forma escrita + capo
  const currentConcertKey = useMemo(() => {
    return transposeSingleChord(currentFingeringKey, capoFret);
  }, [currentFingeringKey, capoFret]);

  // Transposição dinâmica das linhas de letra e acordes
  const transposedLyrics = useMemo(() => {
    return currentSong.lyrics.map(line => {
      if (line.startsWith('[')) return line;
      if (isChordLine(line)) {
        return transposeChordLine(line, semitoneShift);
      }
      return line;
    });
  }, [currentSong.lyrics, semitoneShift]);

  // Lista unificada de acordes da canção
  const songChords = useMemo(() => {
    const list = [];
    currentSong.diagrams.forEach(d => {
      const trans = transposeSingleChord(d.name.replace('*', ''), semitoneShift);
      if (!list.includes(trans)) list.push(trans);
    });
    return list;
  }, [currentSong.diagrams, semitoneShift]);

  // Efeito do Autoscroll funcional
  useEffect(() => {
    let intervalId;
    if (isAutoScrolling && scrollContainerRef.current) {
      intervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
          if (scrollTop + clientHeight >= scrollHeight - 5) {
            setIsAutoScrolling(false);
          } else {
            scrollContainerRef.current.scrollTop += scrollSpeed * 1.5;
          }
        }
      }, 50);
    }
    return () => clearInterval(intervalId);
  }, [isAutoScrolling, scrollSpeed]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const openChordModal = (chord) => {
    const clean = chord.replace(/^[\[\(]+|[\]\)\*.,]+$/g, '').trim();
    if (clean) {
      setActiveChordForModal(clean);
      setIsChordModalOpen(true);
    }
  };

  const handleCleanTabs = () => {
    showToast('✓ Limpeza Automática: Tablaturas eliminadas e arranjo pronto para o palco!');
  };

  const handleNextSong = () => {
    const nextIdx = (currentSongIndex + 1) % songKeys.length;
    setSelectedSongKey(songKeys[nextIdx]);
    setSemitoneShift(0);
    setCapoFret(0);
  };

  const handlePrevSong = () => {
    const prevIdx = (currentSongIndex - 1 + songKeys.length) % songKeys.length;
    setSelectedSongKey(songKeys[prevIdx]);
    setSemitoneShift(0);
    setCapoFret(0);
  };

  return (
    <section id="simulador" className="py-24 border-b border-border bg-darkBg relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-primary/40 text-xs font-bold text-primary mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Simulador Interativo • Design System 1:1 Cifroo Mobile</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Experimente o <span className="text-primary">Modo Palco Oficial</span>
          </h2>
          <p className="mt-3 text-textSec text-base sm:text-lg">
            Esta interface reproduz fielmente as funções e o design nativo da tela de palco do Cifroo Mobile {APP_VERSION}. Clique nos diagramas do braço de violão, nos acordes sobre a letra, no Smart Capo ou no autoscroll para testar:
          </p>

          {/* Quick Song Switcher Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {songKeys.map((k, idx) => {
              const s = sampleSongs[k];
              const isSel = k === selectedSongKey;
              return (
                <button
                  key={k}
                  onClick={() => { setSelectedSongKey(k); setSemitoneShift(0); setCapoFret(0); }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSel
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105 ring-2 ring-primary'
                      : 'bg-surface hover:bg-[#262626] text-textSec hover:text-white border border-border'
                  }`}
                >
                  {idx + 1}. {s.title} ({s.shapeKey})
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Screen Container (Native Dark Studio Stitch Frame 1:1 com Cifroo Mobile) */}
        <div className="rounded-3xl border-2 border-[#2c2c2c] bg-[#121212] shadow-2xl overflow-hidden relative">
          
          {/* Top Bar (Nativa do App: < Repertório à esquerda | Setlist e Editar Cifra à direita) */}
          <div className="px-5 py-3.5 bg-[#121212] border-b border-[#202020] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => showToast(`Repertório ativo: ${currentSongIndex + 1} de ${songKeys.length} músicas salvas`)}
                className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-primary transition-colors cursor-pointer"
              >
                <span className="text-sm">‹</span>
                <span>Repertório</span>
              </button>

              {/* Setlist Navigation Arrows */}
              <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-[#303030] overflow-hidden ml-2">
                <button
                  onClick={handlePrevSong}
                  className="px-2.5 py-1 text-xs text-gray-300 hover:text-white hover:bg-[#282828] transition-colors cursor-pointer"
                  title="Música anterior do repertório"
                >
                  ◀
                </button>
                <button
                  onClick={handleNextSong}
                  className="px-2.5 py-1 text-xs text-gray-300 hover:text-white hover:bg-[#282828] transition-colors cursor-pointer border-l border-[#303030]"
                  title="Próxima música do repertório"
                >
                  ▶
                </button>
              </div>
            </div>

            {/* Ações Direitas: Botão Editar Cifra */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditorOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e1e1e] hover:bg-[#282828] border border-[#303030] text-gray-200 hover:text-white text-xs font-bold transition-all cursor-pointer"
                title="Editar Cifra e Configurações"
              >
                <span>⚙</span>
                <span>Editar Cifra</span>
              </button>
            </div>
          </div>

          {/* Song Title & Artist Block */}
          <div className="p-5 sm:p-6 pb-3 bg-[#121212]">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {currentSong.title}
            </h3>
            <p className="text-sm font-semibold text-[#8E8E93] mt-1">
              {currentSong.artist}
            </p>

            {/* Pílulas Horizontais Clicáveis (Stitch Design System 1:1) */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              
              {/* 1. Pílula: Tom com Transposição em 1 Toque */}
              <div className="flex items-center bg-[#1A1A1A] rounded-full border border-[#333333] overflow-hidden shrink-0">
                <button
                  onClick={() => setSemitoneShift(prev => prev - 1)}
                  className="px-3.5 py-1.5 hover:bg-[#262626] text-white font-bold transition-colors cursor-pointer text-xs"
                  title="Descer 1/2 tom"
                >
                  -
                </button>
                <div className="px-3 py-1.5 text-xs font-bold border-x border-[#333333] flex items-center gap-1">
                  <span className="text-white">Tom:</span>
                  <span className="text-primary font-mono font-black">{currentFingeringKey}</span>
                  {semitoneShift !== 0 && (
                    <span className="text-[10px] text-gray-400 font-mono">
                      ({semitoneShift > 0 ? `+${semitoneShift}` : semitoneShift})
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSemitoneShift(prev => prev + 1)}
                  className="px-3.5 py-1.5 hover:bg-[#262626] text-white font-bold transition-colors cursor-pointer text-xs"
                  title="Subir 1/2 tom"
                >
                  +
                </button>
              </div>

              {/* 2. Pílula: Capotraste (Abre o CapoModal) */}
              <button
                onClick={() => setIsCapoModalOpen(true)}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                  capoFret > 0
                    ? 'bg-primary/15 border-primary text-primary'
                    : 'bg-[#1A1A1A] hover:bg-[#262626] border-[#333333] text-white'
                }`}
                title="Clique para ajustar a casa do Capotraste"
              >
                <span>Capo:</span>
                <span className="font-mono">{capoFret === 0 ? 'Sem Capo' : `${capoFret}ª casa`}</span>
              </button>

              {/* 3. Pílula: Modo de Visualização (Mapa de Acordes vs Cifra com Letra) */}
              <button
                onClick={() => setViewMode(prev => (prev === 'lyrics' ? 'map' : 'lyrics'))}
                className="px-3.5 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#262626] border border-[#333333] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                title="Alternar entre Cifra com Letra e Mapa de Acordes"
              >
                <span>{viewMode === 'lyrics' ? 'Cifra com Letra' : 'Mapa de Acordes'}</span>
              </button>

              {/* 4. Pílula: Rolagem Auto (Toggle do Dock) */}
              <button
                onClick={() => setShowAutoscrollDock(prev => !prev)}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                  showAutoscrollDock || isAutoScrolling
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-[#1A1A1A] hover:bg-[#262626] border-[#333333] text-white'
                }`}
                title="Ativar dock flutuante de rolagem de palco"
              >
                <span>{isAutoScrolling ? '⏸' : '▶'}</span>
                <span>{isAutoScrolling ? `Rolando (${scrollSpeed}x)` : 'Rolagem Auto'}</span>
              </button>

              {/* 5. Pílula: Exibir / Ocultar Acordes */}
              <button
                onClick={() => setShowChordStrip(prev => !prev)}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  showChordStrip
                    ? 'bg-[#1A1A1A] border-primary text-primary'
                    : 'bg-[#1A1A1A] border-[#333333] text-gray-300'
                }`}
                title="Exibir ou ocultar a barra de diagramas de acordes"
              >
                {showChordStrip ? 'Ocultar Acordes' : 'Exibir Acordes'}
              </button>

              {/* 6. Pílula: Ritmo */}
              <div className="px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#333333] text-[#8E8E93] text-xs font-bold shrink-0">
                Ritmo: <span className="text-white">{currentSong.rhythm}</span>
              </div>

              {/* 7. Pílula: Som Real Ouvido (Se Capo ativo) */}
              {capoFret > 0 && (
                <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary text-xs font-bold shrink-0 flex items-center gap-1">
                  <span className="text-[#8E8E93]">Som Real:</span>
                  <span className="text-primary font-mono font-black">{currentConcertKey}</span>
                </div>
              )}
            </div>
          </div>

          {/* CARD DE ACORDES PRINCIPAIS (ChordDiagramStrip 1:1) */}
          {showChordStrip && (
            <div className="mx-5 sm:mx-6 mb-4 p-3.5 rounded-2xl bg-[#161616] border border-[#242424]">
              {/* Header do Card (Stitch: Acordes Principais + Badge + Recolher) */}
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#242424]/80">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-wider font-mono">
                    Acordes Principais
                  </span>
                  {capoFret > 0 ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono border border-primary/40 bg-primary/10 text-primary">
                      CAPO {capoFret}ª
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono border border-[#333] bg-[#202020] text-[#8E8E93]">
                      PADRÃO
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsChordStripCollapsed(prev => !prev)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{isChordStripCollapsed ? 'Expandir' : 'Recolher'}</span>
                    <span>{isChordStripCollapsed ? '▾' : '▴'}</span>
                  </button>
                </div>
              </div>

              {/* Faixa Horizontal com Mini Fretboards Reais de Violão */}
              {!isChordStripCollapsed && (
                <div>
                  <div className="flex items-center gap-4 overflow-x-auto pb-1 no-scrollbar">
                    {currentSong.diagrams.map((diag, idx) => {
                      const transposedName = transposeSingleChord(diag.name.replace('*', ''), semitoneShift);
                      return (
                        <MiniGuitarFretboard
                          key={`fret_${idx}_${transposedName}`}
                          chordName={transposedName}
                          capoFret={capoFret}
                          onPress={openChordModal}
                        />
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-[#8E8E93] mt-2 pt-2 border-t border-[#222]">
                    💡 <strong>Dica de Palco:</strong> Toque em qualquer acorde para abrir o visualizador de digitação no <strong>Violão, Teclado e Contrabaixo</strong>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Cifra Monospace de Alta Fidelidade (Corpo Scrollável) */}
          <div
            ref={scrollContainerRef}
            className="p-5 sm:p-8 max-h-[480px] overflow-y-auto font-mono select-none bg-[#0e0e0e] relative"
            style={{ fontSize: `${fontSize}px`, lineHeight: '1.75' }}
          >
            {/* Visualização: Modo Mapa de Acordes vs Cifra com Letra */}
            {viewMode === 'map' ? (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-[#181818] border border-primary/30 text-xs text-primary font-sans">
                  💡 <strong>Modo Mapa de Acordes:</strong> Visualização sintética de palco. Exibe apenas a sequência harmônica por seções, ideal para quem já sabe a letra de cor.
                </div>
                {currentSong.compact.map((block, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#141414] border border-[#222]">
                    <span className="text-primary font-black text-xs uppercase tracking-wider font-sans block mb-2">
                      {block.section}
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      {transposeChordLine(block.chords, semitoneShift).split(/\s+/).filter(Boolean).map((ch, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => openChordModal(ch)}
                          className="px-3 py-1.5 rounded-lg bg-[#1f1f1f] hover:bg-primary/20 border border-primary/40 text-primary font-mono font-bold text-sm transition-all cursor-pointer"
                        >
                          {ch}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`grid ${columns === 2 ? 'grid-cols-1 md:grid-cols-2 gap-8' : 'grid-cols-1'}`}>
                <div className="space-y-1">
                  {transposedLyrics.map((line, idx) => {
                    if (line.startsWith('[')) {
                      return (
                        <div key={idx} className="pt-4 pb-1 text-primary font-black text-xs sm:text-sm tracking-wider uppercase font-sans">
                          {line}
                        </div>
                      );
                    }
                    if (isChordLine(line)) {
                      // Acordes clicáveis individualmente na linha
                      const tokens = line.split(/(\s+)/);
                      return (
                        <div key={idx} className="flex flex-wrap items-center font-bold tracking-wide">
                          {tokens.map((tok, tIdx) => {
                            const trimmed = tok.trim();
                            if (!trimmed) {
                              return <span key={tIdx} className="whitespace-pre">{tok}</span>;
                            }
                            return (
                              <button
                                key={tIdx}
                                onClick={() => openChordModal(trimmed)}
                                className="text-primary hover:text-white hover:bg-primary/30 px-1 py-0.5 rounded transition-all cursor-pointer font-bold inline-block"
                                title={`Toque para ver a digitação de ${trimmed}`}
                              >
                                {trimmed}
                              </button>
                            );
                          })}
                        </div>
                      );
                    }
                    return (
                      <div key={idx} className="text-gray-100 font-medium whitespace-pre pb-1">
                        {line}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RODAPÉ STICKY DE ROLAGEM AUTO (Dock de Palco Nativo) */}
          {showAutoscrollDock && (
            <div className="px-5 py-3.5 bg-[#161616] border-t border-[#252525] flex flex-wrap items-center justify-between gap-3 shadow-2xl">
              {/* Autoscroll Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoScrolling(prev => !prev)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isAutoScrolling
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25 animate-pulse'
                      : 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-[#E65100]'
                  }`}
                >
                  <span>{isAutoScrolling ? '⏸ Pausar' : '▶ Autoscroll'}</span>
                </button>

                <div className="flex items-center bg-[#202020] rounded-xl border border-[#303030] p-1">
                  {[1, 1.5, 2].map(spd => (
                    <button
                      key={spd}
                      onClick={() => setScrollSpeed(spd)}
                      className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-colors cursor-pointer ${
                        scrollSpeed === spd
                          ? 'bg-primary text-white'
                          : 'text-textSec hover:text-white'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Zoom Controls */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#8E8E93] font-bold hidden sm:inline">Fonte:</span>
                <div className="flex items-center bg-[#202020] rounded-xl border border-[#303030] overflow-hidden">
                  <button
                    onClick={() => setFontSize(prev => Math.max(12, prev - 1))}
                    className="px-3 py-1.5 text-xs text-white hover:bg-[#2c2c2c] transition-colors cursor-pointer font-bold"
                    title="Diminuir fonte"
                  >
                    A-
                  </button>
                  <span className="px-2.5 py-1.5 text-xs font-mono font-bold text-primary border-x border-[#303030]">
                    {fontSize}px
                  </span>
                  <button
                    onClick={() => setFontSize(prev => Math.min(24, prev + 1))}
                    className="px-3 py-1.5 text-xs text-white hover:bg-[#2c2c2c] transition-colors cursor-pointer font-bold"
                    title="Aumentar fonte"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Column Layout Switcher */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setColumns(1)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    columns === 1
                      ? 'bg-primary text-white'
                      : 'bg-[#202020] text-textSec hover:text-white'
                  }`}
                  title="1 Coluna com rolagem contínua"
                >
                  1 Coluna
                </button>
                <button
                  onClick={() => setColumns(2)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    columns === 2
                      ? 'bg-primary text-white'
                      : 'bg-[#202020] text-textSec hover:text-white'
                  }`}
                  title="2 Colunas (Anti-scroll para tablets e palcos)"
                >
                  2 Colunas
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Guia Didático: Como o Cifroo Funciona na Prática */}
        <HowAppWorksGuide />
      </div>

      {/* Modal 1: Visualizador Multi-Instrumento (Violão, Teclado, Contrabaixo) */}
      <ChordDiagramModal
        isOpen={isChordModalOpen}
        onClose={() => setIsChordModalOpen(false)}
        initialChord={activeChordForModal}
        allChords={songChords}
      />

      {/* Modal 2: Smart Capo com Cálculo Dinâmico */}
      <CapoModal
        isOpen={isCapoModalOpen}
        onClose={() => setIsCapoModalOpen(false)}
        currentCapoFret={capoFret}
        onSelectCapoFret={(fret) => {
          setCapoFret(fret);
          showToast(`Capotraste ajustado na ${fret === 0 ? 'posição original (Sem Capo)' : `${fret}ª casa`}!`);
        }}
        fingeringKey={currentFingeringKey}
        concertKey={currentConcertKey}
      />

      {/* Modal 3: Editor de Cifra ao Vivo */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161616] border-2 border-primary/50 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-black text-lg">
                  ⚙
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">Editor de Cifra <span className="text-primary text-xs font-mono px-2 py-0.5 rounded bg-primary/10 border border-primary/30">CIFROO</span></h4>
                  <p className="text-xs text-textSec">Modo de edição ao vivo com persistência offline</p>
                </div>
              </div>

              <button
                onClick={() => setIsEditorOpen(false)}
                className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#333] text-gray-400 hover:text-white flex items-center justify-center text-base font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Inputs de Configuração Rápida */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
              <div>
                <label className="text-[10px] font-bold text-textSec uppercase tracking-wider block mb-1">Título</label>
                <input
                  type="text"
                  defaultValue={currentSong.title}
                  className="w-full bg-[#111] border border-[#2c2c2c] rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-textSec uppercase tracking-wider block mb-1">Artista</label>
                <input
                  type="text"
                  defaultValue={currentSong.artist}
                  className="w-full bg-[#111] border border-[#2c2c2c] rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-textSec uppercase tracking-wider block mb-1">Tom Base</label>
                <input
                  type="text"
                  defaultValue={currentSong.shapeKey}
                  className="w-full bg-[#111] border border-[#2c2c2c] rounded-xl px-3 py-2 text-xs text-primary font-bold font-mono"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-textSec uppercase tracking-wider block mb-1">Capo</label>
                <input
                  type="text"
                  defaultValue={currentSong.capo}
                  className="w-full bg-[#111] border border-[#2c2c2c] rounded-xl px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>

            {/* Abas do Editor */}
            <div className="flex items-center gap-2 border-b border-[#262626] pb-3 mb-4">
              {[
                { id: 'map', label: 'Mapa de Acordes' },
                { id: 'lyrics', label: 'Cifra com Letra' },
                { id: 'notes', label: 'Anotações' },
                { id: 'settings', label: 'Configurações' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveEditorTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeEditorTab === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-[#202020] hover:bg-[#282828] text-textSec'
                  }`}
                >
                  {tab.label}
                </button>
              ))}

              <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>PALCO PRONTO</span>
              </div>
            </div>

            {/* Live Editor Textarea */}
            <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-[#242424] mb-5">
              <textarea
                rows={9}
                defaultValue={currentSong.lyrics.join('\n')}
                className="w-full bg-transparent text-gray-200 font-mono text-xs focus:outline-none leading-relaxed resize-none"
              />
            </div>

            {/* Clean Tabs & Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#262626]">
              <button
                onClick={handleCleanTabs}
                className="px-4 py-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>✨</span>
                <span>Limpeza Automática</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditorOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#222] hover:bg-[#2c2c2c] text-textSec text-xs font-bold cursor-pointer transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setIsEditorOpen(false);
                    showToast('✓ Alterações salvas com sucesso no banco de dados local!');
                  }}
                  className="px-5 py-2 rounded-xl bg-primary hover:bg-[#E65100] text-white text-xs font-bold shadow-md shadow-primary/20 cursor-pointer transition-all"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1e1e1e] border-2 border-primary text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-5 duration-200 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
