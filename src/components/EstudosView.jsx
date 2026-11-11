import React, { useState, useMemo } from 'react';
import { STUDY_LEVELS, GLOBAL_ZIP_PACKAGE, TOTAL_MATERIALS_COUNT } from '../data/materialsData';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function EstudosView({ onBack, onDownload }) {
  const [activeLevelId, setActiveLevelId] = useState('iniciante');
  const [instrumentFilter, setInstrumentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Nível ativo
  const currentLevel = useMemo(() => {
    return STUDY_LEVELS.find((lvl) => lvl.id === activeLevelId) || STUDY_LEVELS[0];
  }, [activeLevelId]);

  // Lista plana de itens do nível ativo com numeração sequencial de passos (1, 2, 3...)
  const allLevelItems = useMemo(() => {
    const list = [];
    let step = 1;
    currentLevel.sections.forEach((sec) => {
      sec.items.forEach((item) => {
        list.push({
          ...item,
          categorySubject: sec.subject,
          stepIndex: step++
        });
      });
    });
    return list;
  }, [currentLevel]);

  // Extrair instrumentos únicos para os filtros rápidos
  const availableInstruments = useMemo(() => {
    const set = new Set();
    allLevelItems.forEach((item) => {
      if (item.instrument) {
        const clean = item.instrument.split('/')[0].trim();
        set.add(clean);
      }
    });
    return Array.from(set);
  }, [allLevelItems]);

  // Itens filtrados (se busca ou filtro por instrumento)
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allLevelItems.filter((item) => {
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.filename.toLowerCase().includes(q) ||
        item.categorySubject.toLowerCase().includes(q);

      const matchesInst =
        instrumentFilter === 'all' ||
        (item.instrument && item.instrument.toLowerCase().includes(instrumentFilter.toLowerCase()));

      return matchesSearch && matchesInst;
    });
  }, [allLevelItems, searchQuery, instrumentFilter]);

  // Trocar de nível e resetar filtros para garantir que todos os arquivos apareçam de imediato
  const handleLevelChange = (levelId) => {
    setActiveLevelId(levelId);
    setInstrumentFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-primary/30 selection:text-primary flex flex-col font-sans">
      {/* 1. HEADER COMPACTO */}
      <header className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur border-b border-[#222222] py-2.5 sm:py-3">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#181818] hover:bg-[#222222] border border-[#2D2D2D] text-xs font-bold text-textSec hover:text-white transition-colors cursor-pointer"
              title="Voltar para a página inicial"
            >
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Voltar</span>
            </button>

            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-black tracking-tight text-white">
                Cifr<span className="text-primary">oo</span>
              </span>
              <span className="text-xs font-semibold text-textSec">/ Métodos Sequenciais</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/25">
              40 Apostilas & Métodos
            </span>

            <a
              href={GITHUB_RELEASE_APK_URL}
              onClick={onDownload}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-[#E65100] text-white font-bold text-xs shadow-sm transition-all cursor-pointer shrink-0"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>App {APP_VERSION}</span>
            </a>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL DIRETO AO PONTO */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
        {/* 2. SELETOR DE NÍVEL EM ABAS COMPACTAS (INICIANTE / INTERMEDIÁRIO / AVANÇADO) */}
        <div className="bg-[#141414] p-1 rounded-2xl border border-[#242424] mb-3 grid grid-cols-3 gap-1 shadow-sm">
          {STUDY_LEVELS.map((lvl) => {
            const isSelected = activeLevelId === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => handleLevelChange(lvl.id)}
                className={`py-2 px-1 sm:px-3 rounded-xl text-center font-bold text-xs sm:text-sm transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
                  isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'text-textSec hover:text-white hover:bg-[#1C1C1C]'
                }`}
              >
                <span>{lvl.title}</span>
                <span
                  className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/35 text-white' : 'bg-[#222222] text-textSec'
                  }`}
                >
                  {lvl.count} arquivos
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. BARRA DE STATUS SEQUENCIAL & DOWNLOAD EM LOTE */}
        <div className="bg-[#151515] border border-[#282828] rounded-2xl p-3 sm:p-4 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary font-black text-xs shrink-0">
              {currentLevel.num}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base font-extrabold text-white">
                  Trilha de {currentLevel.title}
                </h2>
                <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                  {filteredItems.length} de {currentLevel.count} arquivos disponíveis
                </span>
              </div>
              <p className="text-[11px] text-textSec">
                Estude na ordem numérica (Passo 01 ao {String(currentLevel.count).padStart(2, '0')}) baixando um a um ou baixe o pacote completo:
              </p>
            </div>
          </div>

          {/* BOTÕES DE DOWNLOAD EM LOTE */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={currentLevel.zipFile.path}
              download={currentLevel.zipFile.name}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary hover:bg-[#E65100] text-white font-extrabold text-xs shadow-md shadow-primary/20 transition-all cursor-pointer"
              title={`Baixar todos os ${currentLevel.count} arquivos de ${currentLevel.title} em ZIP`}
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Baixar Todos ({currentLevel.zipFile.size})</span>
            </a>

            <a
              href={GLOBAL_ZIP_PACKAGE.path}
              download={GLOBAL_ZIP_PACKAGE.name}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1E1E1E] hover:bg-[#282828] border border-[#2E2E2E] text-textSec hover:text-white font-bold text-xs transition-colors"
              title="Baixar toda a biblioteca com os 40 arquivos (27 MB)"
            >
              <span>Todos os 40 (27 MB)</span>
            </a>
          </div>
        </div>

        {/* 4. FILTROS RÁPIDOS POR INSTRUMENTO + BUSCA COMPACTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 mb-3">
          {/* CHIPS DE INSTRUMENTO */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setInstrumentFilter('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                instrumentFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-[#181818] text-textSec hover:text-white border border-[#262626]'
              }`}
            >
              Todos ({allLevelItems.length})
            </button>
            {availableInstruments.map((inst) => (
              <button
                key={inst}
                onClick={() => setInstrumentFilter(inst)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  instrumentFilter === inst
                    ? 'bg-primary text-white'
                    : 'bg-[#181818] text-textSec hover:text-white border border-[#262626]'
                }`}
              >
                {inst}
              </button>
            ))}
          </div>

          {/* BUSCA COMPACTA */}
          <div className="relative min-w-[200px] sm:w-64">
            <svg className="w-3.5 h-3.5 text-textSec absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar título ou assunto..."
              className="w-full bg-[#141414] border border-[#262626] rounded-lg pl-8 pr-7 py-1.5 text-xs text-white placeholder-textSec/60 focus:outline-none focus:border-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-textSec hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 5. LISTA SEQUENCIAL DE MATERIAIS PARA BAIXAR UM POR UM OU VISUALIZAR */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#141414] hover:bg-[#181818] border border-[#242424] hover:border-[#383838] rounded-xl p-3 flex flex-col justify-between gap-2.5 transition-all"
              >
                {/* LINHA SUPERIOR COM NÚMERO DE ORDEM, TÍTULO E DETALHES */}
                <div className="flex items-start gap-2.5">
                  {/* BADGE DE ORDEM SEQUENCIAL */}
                  <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5 text-primary font-black text-xs">
                    {String(item.stepIndex).padStart(2, '0')}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-[#202020] text-primary border border-[#2A2A2A]">
                        {item.instrument || 'Geral'}
                      </span>
                      <span className="text-[10px] font-mono text-textSec">
                        {item.size}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] text-textSec/80 bg-[#1A1A1A] px-1.5 py-0.2 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-xs sm:text-sm text-white leading-tight truncate" title={item.title}>
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-textSec line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* BOTÕES COMPACTOS DE AÇÃO: VER E BAIXAR UM POR UM */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#202020]">
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] border border-[#2C2C2C] text-xs font-bold text-textSec hover:text-white transition-colors cursor-pointer"
                    title={`Visualizar ${item.title}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Ver</span>
                  </a>

                  <a
                    href={item.path}
                    download={item.filename}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg bg-primary hover:bg-[#E65100] text-xs font-bold text-white transition-colors cursor-pointer shadow-sm"
                    title={`Baixar ${item.filename}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Baixar</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center rounded-xl bg-[#141414] border border-[#222222]">
            <p className="text-xs text-textSec mb-3">Nenhum material encontrado com o filtro selecionado.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setInstrumentFilter('all');
              }}
              className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold"
            >
              Exibir Todos os Materiais
            </button>
          </div>
        )}

        {/* 6. ATALHO GLOBAL NO RODAPÉ */}
        <div className="mt-6 pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textSec">
          <span>Biblioteca Cifroo: 40 métodos sequenciais organizados para estudo individual</span>
          <a
            href={GLOBAL_ZIP_PACKAGE.path}
            download={GLOBAL_ZIP_PACKAGE.name}
            className="inline-flex items-center gap-1.5 text-primary hover:underline font-bold"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Baixar todos os 40 PDFs em 1 arquivo ZIP (27 MB)</span>
          </a>
        </div>
      </main>
    </div>
  );
}
