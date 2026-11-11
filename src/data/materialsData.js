export const STUDY_LEVELS = [
  {
    id: 'iniciante',
    num: '01',
    title: 'Iniciante',
    label: 'Nível 1 • Fundamentos & Primeiros Passos',
    headline: 'Para quem está começando do zero ou quer corrigir postura e fundamentos',
    description: 'Alfabetização na pauta musical, postura corporal correta, digitação limpa, primeiros acordes abertos, notas no braço e mapeamento das teclas.',
    count: 16,
    color: '#10B981', // Emerald green
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    accentBorder: 'border-emerald-500/40',
    zipFile: {
      name: 'Cifroo_Estudos_Nivel_Iniciante.zip',
      path: '/downloads/Cifroo_Estudos_Nivel_Iniciante.zip',
      size: '8.8 MB',
      label: 'Baixar Todos os 16 Materiais de Iniciante (.ZIP)'
    },
    sections: [
      {
        subject: 'Planejamento & Rotina de Treino',
        icon: 'Compass',
        items: [
          {
            id: 'ini-plan-01',
            title: 'Como Organizar Seus Estudos Musicais',
            subtitle: 'Rotina diária, cronograma e divisão de tempo com metrônomo',
            instrument: 'Geral',
            filename: '00_Como_Organizar_Seus_Estudos.pdf',
            path: '/materiais/00_Planejamento_e_Metodologia/00_Como_Organizar_Seus_Estudos.pdf',
            size: '812 KB',
            type: 'pdf',
            badge: 'Essencial',
            description: 'Aprenda a dividir os 60 minutos diários entre técnica, leitura, harmonia e repertório para acelerar sua evolução sem cansaço.'
          },
          {
            id: 'ini-plan-02',
            title: 'Guia Mestre Pedagógico de Estudos',
            subtitle: 'Estrutura curricular integrada em 4 Fases para louvor',
            instrument: 'Liderança',
            filename: 'GUIA_MESTRE_PEDAGOGICO.pdf',
            path: '/materiais/00_Planejamento_e_Metodologia/GUIA_MESTRE_PEDAGOGICO.pdf',
            size: '8 KB',
            type: 'pdf',
            badge: 'Guia Mestre',
            description: 'Metodologia prática e filosofia de ensino para líderes de ministério, professores e novos aprendizes.'
          },
          {
            id: 'ini-plan-03',
            title: 'Manual de Notação: Software Finale 2007',
            subtitle: 'Como escrever e diagramar partituras limpas no computador',
            instrument: 'Edição',
            filename: 'Guia_Software_Partituras_Finale_2007.pdf',
            path: '/materiais/00_Planejamento_e_Metodologia/Guia_Software_Partituras_Finale_2007.pdf',
            size: '1.2 MB',
            type: 'pdf',
            badge: 'Software',
            description: 'Passo a passo para digitar, formatar e imprimir partituras profissionais para sua equipe.'
          },
          {
            id: 'ini-plan-04',
            title: 'Catálogo Geral de E-books Cifra Club',
            subtitle: 'Índice didático e mapeamento completo de temas',
            instrument: 'Referência',
            filename: 'CATALOGO_EBOOKS_CIFRACLUB.pdf',
            path: '/materiais/CATALOGO_EBOOKS_CIFRACLUB.pdf',
            size: '5 KB',
            type: 'pdf',
            badge: 'Índice',
            description: 'Guia de consulta rápida contendo todos os métodos e e-books oficiais mapeados.'
          }
        ]
      },
      {
        subject: 'Teoria Musical & Leitura de Partitura',
        icon: 'BookOpen',
        items: [
          {
            id: 'ini-teo-01',
            title: 'Apostila de Partituras Vol. 1 — Iniciação na Pauta',
            subtitle: 'Claves de Sol e Fá, linhas, espaços e figuras musicais',
            instrument: 'Teoria',
            filename: '01_Apostila_Partituras_Vol_1_Iniciacao_Pauta.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_1_Fundamentos/01_Apostila_Partituras_Vol_1_Iniciacao_Pauta.pdf',
            size: '1.3 MB',
            type: 'pdf',
            badge: 'Básico',
            description: 'Reconhecimento visual instantâneo de notas na clave de Sol e clave de Fá de maneira descomplicada.'
          },
          {
            id: 'ini-teo-02',
            title: 'Apostila Curso Básico de Teoria Musical',
            subtitle: 'Propriedades do som, notação, sustenidos e bemóis',
            instrument: 'Teoria',
            filename: '02_Apostila_Curso_Basico_de_Teoria_Musical.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_1_Fundamentos/02_Apostila_Curso_Basico_de_Teoria_Musical.pdf',
            size: '226 KB',
            type: 'pdf',
            badge: 'Fundamento',
            description: 'Altura, intensidade, timbre, duração e os primeiros passos na física e lógica das notas.'
          },
          {
            id: 'ini-teo-03',
            title: 'Teoria Musical Geral Aplicada',
            subtitle: 'Fórmulas de compasso, ligaduras e convenções de pauta',
            instrument: 'Teoria',
            filename: '03_Teoria_Musical_Geral.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_1_Fundamentos/03_Teoria_Musical_Geral.pdf',
            size: '253 KB',
            type: 'pdf',
            badge: 'Consulta',
            description: 'Resumo estrutural para tirar dúvidas rápidas sobre símbolos e indicações na partitura.'
          },
          {
            id: 'ini-teo-04',
            title: 'Como Ler Partitura no Teclado (Cifra Club)',
            subtitle: 'Guia visual para integração simultânea das duas mãos',
            instrument: 'Teclado/Teoria',
            filename: '04_Como_Ler_Partitura_no_Teclado_CifraClub.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_1_Fundamentos/04_Como_Ler_Partitura_no_Teclado_CifraClub.pdf',
            size: '1.7 MB',
            type: 'pdf',
            badge: 'Cifra Club',
            description: 'Método visual ilustrado para ler a clave de Sol na mão direita e clave de Fá na mão esquerda.'
          }
        ]
      },
      {
        subject: 'Violão Iniciante',
        icon: 'Guitar',
        items: [
          {
            id: 'ini-vio-01',
            title: 'Apostila de Violão para Iniciantes',
            subtitle: 'Postura das mãos, afinação e primeiros acordes abertos',
            instrument: 'Violão',
            filename: '01_Apostila_de_Violao_Iniciante.pdf',
            path: '/materiais/02_Violao/Nivel_1_Iniciante_Postura_e_Acordes_Basicos/01_Apostila_de_Violao_Iniciante.pdf',
            size: '331 KB',
            type: 'pdf',
            badge: 'Primeiros Acordes',
            description: 'Como posicionar o polegar atrás do braço sem dores e tocar os primeiros louvores com Em, C, G, D e Am.'
          },
          {
            id: 'ini-vio-02',
            title: 'Método Completo de Violão',
            subtitle: 'Técnica de palhetada, dedilhados e levadas rítmicas básicas',
            instrument: 'Violão',
            filename: '02_Metodo_Violao_Completo.pdf',
            path: '/materiais/02_Violao/Nivel_1_Iniciante_Postura_e_Acordes_Basicos/02_Metodo_Violao_Completo.pdf',
            size: '991 KB',
            type: 'pdf',
            badge: 'Método',
            description: 'Curso passo a passo para destravar a troca ágil de acordes e o ritmo contínuo no violão.'
          }
        ]
      },
      {
        subject: 'Teclado Iniciante',
        icon: 'Piano',
        items: [
          {
            id: 'ini-tec-01',
            title: 'Aula 1: Primeiros Passos no Teclado',
            subtitle: 'Identificação visual através do grupo de 2 e 3 teclas pretas',
            instrument: 'Teclado',
            filename: '01_Aula_1_Teclado_CifraClub.pdf',
            path: '/materiais/03_Teclado/Nivel_1_Iniciante_Teclas_Postura_e_Primeiros_Acordes/01_Aula_1_Teclado_CifraClub.pdf',
            size: '20 KB',
            type: 'pdf',
            badge: 'Aula 1',
            description: 'Encontre o Dó Central em 2 segundos e toque as primeiras notas sem travar.'
          },
          {
            id: 'ini-tec-02',
            title: 'Mapa Visual: Posicionamento Esquerda & Direita',
            subtitle: 'Infográfico didático da numeração dos dedos (1 a 5)',
            instrument: 'Teclado',
            filename: '02_Posicionamento_Esquerda_Direita.png',
            path: '/materiais/03_Teclado/Nivel_1_Iniciante_Teclas_Postura_e_Primeiros_Acordes/02_Posicionamento_Esquerda_Direita.png',
            size: '37 KB',
            type: 'image',
            badge: 'Infográfico',
            description: 'Diagrama visual com a numeração correta dos dedos e postura relaxada dos pulsos.'
          },
          {
            id: 'ini-tec-03',
            title: 'Mapa Completo de Oitavas no Teclado',
            subtitle: 'Visão panorâmica de C1 até C7 no arranjador e piano',
            instrument: 'Teclado',
            filename: '03_Mapa_de_Oitavas_no_Teclado.png',
            path: '/materiais/03_Teclado/Nivel_1_Iniciante_Teclas_Postura_e_Primeiros_Acordes/03_Mapa_de_Oitavas_no_Teclado.png',
            size: '79 KB',
            type: 'image',
            badge: 'Infográfico',
            description: 'Entenda os registros graves, médios e agudos para equilibrar a mão esquerda e direita.'
          },
          {
            id: 'ini-tec-04',
            title: 'Curso de Teclado: Fundamentos',
            subtitle: 'Coordenação motora, independência e primeiras tríades',
            instrument: 'Teclado',
            filename: '04_Curso_de_Teclado_Fundamentos.pdf',
            path: '/materiais/03_Teclado/Nivel_1_Iniciante_Teclas_Postura_e_Primeiros_Acordes/04_Curso_de_Teclado_Fundamentos.pdf',
            size: '1.2 MB',
            type: 'pdf',
            badge: 'Fundamentos',
            description: 'Exercícios práticos para destravar as duas mãos e tocar com tempo firme.'
          },
          {
            id: 'ini-tec-05',
            title: 'Como Ler Partitura no Teclado (Guia Cifra Club)',
            subtitle: 'Coordenação entre mão esquerda no baixo e direita nos acordes',
            instrument: 'Teclado',
            filename: '05_Como_Ler_Partitura_no_Teclado_CifraClub.pdf',
            path: '/materiais/03_Teclado/Nivel_1_Iniciante_Teclas_Postura_e_Primeiros_Acordes/05_Como_Ler_Partitura_no_Teclado_CifraClub.pdf',
            size: '1.7 MB',
            type: 'pdf',
            badge: 'Cifra Club',
            description: 'Técnicas diretas para associar as notas da folha diretamente com as teclas do teclado.'
          }
        ]
      },
      {
        subject: 'Contrabaixo Iniciante',
        icon: 'Disc',
        items: [
          {
            id: 'ini-bas-01',
            title: 'Apostila de Contrabaixo Completa',
            subtitle: 'Postura, técnica de pizzicato I/M, afinação e notas no braço',
            instrument: 'Contrabaixo',
            filename: '01_Apostila_Contra_Baixo_Completa.pdf',
            path: '/materiais/04_Contra_Baixo/Nivel_1_Fundamentos_e_Postura/01_Apostila_Contra_Baixo_Completa.pdf',
            size: '186 KB',
            type: 'pdf',
            badge: 'Iniciante',
            description: 'Apoio do polegar nos captadores, alternância de dedos indicador e médio e localização das tônicas.'
          }
        ]
      }
    ]
  },
  {
    id: 'intermediario',
    num: '02',
    title: 'Intermediário',
    label: 'Nível 2 • Harmonia, Ritmo, Tríades & Tétrades',
    headline: 'Para quem já toca o básico e quer entender acordes com 7ª, ritmo firme e condução',
    description: 'Divisão rítmica com síncopes, exercícios de intervalos, formação de acordes em tríades e tétrades, extensões (add9, sus4), inversões de baixo (C/E, G/B) e linhas de walking bass.',
    count: 14,
    color: '#F59E0B', // Amber / Orange
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    accentBorder: 'border-amber-500/40',
    zipFile: {
      name: 'Cifroo_Estudos_Nivel_Intermediario.zip',
      path: '/downloads/Cifroo_Estudos_Nivel_Intermediario.zip',
      size: '10.0 MB',
      label: 'Baixar Todos os 14 Materiais de Intermediário (.ZIP)'
    },
    sections: [
      {
        subject: 'Teoria, Percepção & Ritmo',
        icon: 'BookOpen',
        items: [
          {
            id: 'int-teo-01',
            title: 'Apostila de Partituras Vol. 2 — Divisão e Ritmo',
            subtitle: 'Subdivisões rítmicas, síncopes, contratempos e pausas',
            instrument: 'Teoria/Ritmo',
            filename: '01_Apostila_Partituras_Vol_2_Divisao_e_Ritmo.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_2_Intervalos_e_Leitura/01_Apostila_Partituras_Vol_2_Divisao_e_Ritmo.pdf',
            size: '3.7 MB',
            type: 'pdf',
            badge: 'Ritmo',
            description: 'Treinamento de precisão de tempo para tocar cravado com bateria e contrabaixo.'
          },
          {
            id: 'int-teo-02',
            title: 'Caderno de Exercícios de Intervalos',
            subtitle: 'Identificação auditiva e visual de 2ª a 7ª',
            instrument: 'Percepção',
            filename: '02_Exercicios_de_Intervalos.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_2_Intervalos_e_Leitura/02_Exercicios_de_Intervalos.pdf',
            size: '252 KB',
            type: 'pdf',
            badge: 'Exercícios',
            description: 'Exercícios focados para identificar intervalos maiores, menores, justos e aumentados no ouvido.'
          },
          {
            id: 'int-teo-03',
            title: 'Escalas, Acordes e Intervalos (Especial)',
            subtitle: 'Relação direta entre intervalos e formação de tríades',
            instrument: 'Harmonia',
            filename: '03_Escalas_Acordes_Intervalos_Especial.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_2_Intervalos_e_Leitura/03_Escalas_Acordes_Intervalos_Especial.pdf',
            size: '1.2 MB',
            type: 'pdf',
            badge: 'Especial',
            description: 'Entenda como as escalas geram acordes e ganhe autonomia para transpor cifras.'
          },
          {
            id: 'int-teo-04',
            title: 'Intervalos na Prática (Cifra Club)',
            subtitle: 'Aplicações em arranjos e solos usando terças e sextas',
            instrument: 'Harmonia',
            filename: '04_Ebook_Intervalos_na_Pratica_CifraClub.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_2_Intervalos_e_Leitura/04_Ebook_Intervalos_na_Pratica_CifraClub.pdf',
            size: '291 KB',
            type: 'pdf',
            badge: 'Cifra Club',
            description: 'E-book oficial com desenhos e frases melódicas práticas para instrumentos harmônicos.'
          }
        ]
      },
      {
        subject: 'Violão Harmônico (Tríades, Tétrades & Inversões)',
        icon: 'Guitar',
        items: [
          {
            id: 'int-vio-01',
            title: 'Formação de Acordes: Teoria dos Intervalos',
            subtitle: 'Como o braço do violão é construído nota por nota',
            instrument: 'Violão',
            filename: '01_Formacao_de_Acordes_Teoria.pdf',
            path: '/materiais/02_Violao/Nivel_2_Intermediario_Triades_Tetrades_e_Ritmos/01_Formacao_de_Acordes_Teoria.pdf',
            size: '149 KB',
            type: 'pdf',
            badge: 'Teoria',
            description: 'Pare de depender de diagramas prontos: ache a tônica, terça e quinta em qualquer casa.'
          },
          {
            id: 'int-vio-02',
            title: 'Formação de Acordes: Módulo 1 — Tríades',
            subtitle: 'Tríades Maiores, Menores, Aumentadas e Diminutas',
            instrument: 'Violão',
            filename: '02_Formacao_de_Acordes_Modulo_1_Triades.pdf',
            path: '/materiais/02_Violao/Nivel_2_Intermediario_Triades_Tetrades_e_Ritmos/02_Formacao_de_Acordes_Modulo_1_Triades.pdf',
            size: '446 KB',
            type: 'pdf',
            badge: 'Tríades',
            description: 'Montagem de tríades no braço todo e formas mais leves de executar pestanas.'
          },
          {
            id: 'int-vio-03',
            title: 'Formação de Acordes: Módulo 2 — Tétrades',
            subtitle: 'Acordes com 7M, 7, m7 e m7b5 no violão',
            instrument: 'Violão',
            filename: '03_Formacao_de_Acordes_Modulo_2_Tetrades.pdf',
            path: '/materiais/02_Violao/Nivel_2_Intermediario_Triades_Tetrades_e_Ritmos/03_Formacao_de_Acordes_Modulo_2_Tetrades.pdf',
            size: '1.7 MB',
            type: 'pdf',
            badge: 'Harmonia Rica',
            description: 'Sofisticação harmônica com tétrades limpas para enriquecer as músicas da igreja.'
          },
          {
            id: 'int-vio-04',
            title: 'Formação de Acordes: Módulo 3 — Extensões',
            subtitle: 'Acordes abertos com 9ª, add9 e sus4 para adoração',
            instrument: 'Violão',
            filename: '04_Formacao_de_Acordes_Modulo_3_Extensoes.pdf',
            path: '/materiais/02_Violao/Nivel_2_Intermediario_Triades_Tetrades_e_Ritmos/04_Formacao_de_Acordes_Modulo_3_Extensoes.pdf',
            size: '982 KB',
            type: 'pdf',
            badge: 'Extensões',
            description: 'Os acordes abertos mais bonitos com cordas soltas ressoando para criar ambiência.'
          },
          {
            id: 'int-vio-05',
            title: 'Formação de Acordes: Módulo 4 — Inversões de Baixo',
            subtitle: 'Baixos caminhantes, condução de vozes e acordes com barra (/)',
            instrument: 'Violão',
            filename: '05_Formacao_de_Acordes_Modulo_4_Inversoes_de_Baixo.pdf',
            path: '/materiais/02_Violao/Nivel_2_Intermediario_Triades_Tetrades_e_Ritmos/05_Formacao_de_Acordes_Modulo_4_Inversoes_de_Baixo.pdf',
            size: '1.1 MB',
            type: 'pdf',
            badge: 'Inversões',
            description: 'Aprenda a tocar C/E, G/B, D/F# com suavidade e conduzir o baixo de forma elegante.'
          }
        ]
      },
      {
        subject: 'Teclado Intermediário & Harmonia',
        icon: 'Piano',
        items: [
          {
            id: 'int-tec-01',
            title: 'Curso de Teclado: Apostila Completa',
            subtitle: 'Inversões de acordes, arpejos fluidos e voice leading',
            instrument: 'Teclado',
            filename: '01_Curso_de_Teclado_Apostila_Completa.pdf',
            path: '/materiais/03_Teclado/Nivel_2_Intermediario_Harmonia_e_Pratica/01_Curso_de_Teclado_Apostila_Completa.pdf',
            size: '2.2 MB',
            type: 'pdf',
            badge: 'Completo',
            description: 'Como tocar sem pular a mão pelo teclado usando as inversões mais próximas (voice leading).'
          },
          {
            id: 'int-tec-02',
            title: 'Prática em Harmonia Vol. 1',
            subtitle: 'Cadências II-V-I e aplicações de progressões no louvor',
            instrument: 'Teclado',
            filename: '02_Pratica_em_Harmonia_1.pdf',
            path: '/materiais/03_Teclado/Nivel_2_Intermediario_Harmonia_e_Pratica/02_Pratica_em_Harmonia_1.pdf',
            size: '62 KB',
            type: 'pdf',
            badge: 'Cadências',
            description: 'Estudo prático de condução harmônica para hinos e canções contemporâneas.'
          },
          {
            id: 'int-tec-03',
            title: 'Improvisação & Harmonia: Parte 1',
            subtitle: 'Frases melódicas, notas de passagem e arpejos nas introduções',
            instrument: 'Teclado',
            filename: '03_Improvisacao_e_Harmonia_Parte_1.pdf',
            path: '/materiais/03_Teclado/Nivel_2_Intermediario_Harmonia_e_Pratica/03_Improvisacao_e_Harmonia_Parte_1.pdf',
            size: '182 KB',
            type: 'pdf',
            badge: 'Improviso',
            description: 'Como criar introduções marcantes e preenchimentos suaves durante ministrações e orações.'
          }
        ]
      },
      {
        subject: 'Contrabaixo & Groove de Louvor',
        icon: 'Disc',
        items: [
          {
            id: 'int-bas-01',
            title: 'Walking Bass: Linhas e Condução Rítmica',
            subtitle: 'Condução contínua, arpejos e notas de aproximação cromática',
            instrument: 'Contrabaixo',
            filename: '01_Walking_Bass_Linhas_e_Conducao.pdf',
            path: '/materiais/04_Contra_Baixo/Nivel_2_Escalas_Groove_e_Walking_Bass/01_Walking_Bass_Linhas_e_Conducao.pdf',
            size: '461 KB',
            type: 'pdf',
            badge: 'Walking Bass',
            description: 'Como construir linhas elegantes que conectam os acordes e sustentam a pulsação do louvor.'
          },
          {
            id: 'int-bas-02',
            title: 'Guia do Contrabaixo no Louvor & Ministério',
            subtitle: 'Manual de sincronia com a bateria e sensibilidade ministerial',
            instrument: 'Contrabaixo',
            filename: 'GUIA_CONTRABAIXO_LOUVOR_E_MINISTERIO.pdf',
            path: '/materiais/04_Contra_Baixo/Nivel_2_Escalas_Groove_e_Walking_Bass/GUIA_CONTRABAIXO_LOUVOR_E_MINISTERIO.pdf',
            size: '3 KB',
            type: 'pdf',
            badge: 'Ministério',
            description: 'Sincronia milimétrica com o bumbo, dinâmica de oração e postura de servo na banda.'
          }
        ]
      }
    ]
  },
  {
    id: 'avancado',
    num: '03',
    title: 'Avançado',
    label: 'Nível 3 • Harmonia Funcional, Modos Gregos & Worship',
    headline: 'Para músicos experientes, líderes de banda, arranjadores e ministros de louvor',
    description: 'Armaduras de clave, ciclo de quintas, campo harmônico maior em tétrades com funções harmônicas, modos gregos (Jônio a Lócrio), dominantes secundários, acordes substitutos (SubV7) e arranjos modernos de Worship.',
    count: 10,
    color: '#8B5CF6', // Purple / Violet
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    accentBorder: 'border-purple-500/40',
    zipFile: {
      name: 'Cifroo_Estudos_Nivel_Avancado.zip',
      path: '/downloads/Cifroo_Estudos_Nivel_Avancado.zip',
      size: '8.1 MB',
      label: 'Baixar Todos os 10 Materiais de Avançado (.ZIP)'
    },
    sections: [
      {
        subject: 'Harmonia Funcional, Armaduras & Modos Gregos',
        icon: 'BookOpen',
        items: [
          {
            id: 'ava-teo-01',
            title: 'Apostila de Partituras Vol. 3 — Armaduras de Clave',
            subtitle: 'Círculo de quintas e quartas, acidentes e tonalidades',
            instrument: 'Harmonia',
            filename: '01_Apostila_Partituras_Vol_3_Armaduras_de_Clave.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_3_Harmonia_e_Modos/01_Apostila_Partituras_Vol_3_Armaduras_de_Clave.pdf',
            size: '3.3 MB',
            type: 'pdf',
            badge: 'Tonalidades',
            description: 'Descubra a tonalidade de qualquer música em 2 segundos olhando a armadura de clave.'
          },
          {
            id: 'ava-teo-02',
            title: 'Escala Maior Natural: Aula Especial',
            subtitle: 'Construção da fórmula T-T-ST-T-T-T-ST e graus melódicos',
            instrument: 'Teoria',
            filename: '02_Escala_Maior_Natural_Aula_Especial.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_3_Harmonia_e_Modos/02_Escala_Maior_Natural_Aula_Especial.pdf',
            size: '483 KB',
            type: 'pdf',
            badge: 'Fundamento Maior',
            description: 'A fundação da harmonia ocidental: como transpor e aplicar em qualquer tonalidade.'
          },
          {
            id: 'ava-teo-03',
            title: 'Escala Menor Natural e suas Variações',
            subtitle: 'Menor relativa, harmônica e melódica para solos e arranjos',
            instrument: 'Teoria',
            filename: '03_Escala_Menor_Natural.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_3_Harmonia_e_Modos/03_Escala_Menor_Natural.pdf',
            size: '564 KB',
            type: 'pdf',
            badge: 'Menor',
            description: 'Compreenda a sonoridade solene das escalas menores e suas aplicações no louvor.'
          },
          {
            id: 'ava-teo-04',
            title: 'Campo Harmônico da Escala Maior Natural',
            subtitle: 'Funções Tônica, Subdominante e Dominante em tétrades',
            instrument: 'Harmonia Funcional',
            filename: '04_Campo_Harmonico_Escala_Maior_Natural.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_3_Harmonia_e_Modos/04_Campo_Harmonico_Escala_Maior_Natural.pdf',
            size: '458 KB',
            type: 'pdf',
            badge: 'Obrigatório',
            description: 'O mapa do tesouro para tirar músicas de ouvido! Saiba quais acordes combinam e por que funcionam.'
          },
          {
            id: 'ava-teo-05',
            title: 'Apostila Completa de Modos Gregos',
            subtitle: 'Jônio, Dórico, Frígio, Lídio, Mixolídio, Eólio e Lócrio',
            instrument: 'Modos',
            filename: '05_Apostila_Modos_Gregos_Completo.pdf',
            path: '/materiais/01_Teoria_e_Percepcao_Musical/Nivel_3_Harmonia_e_Modos/05_Apostila_Modos_Gregos_Completo.pdf',
            size: '3.2 MB',
            type: 'pdf',
            badge: 'Modos Gregos',
            description: 'Descubra a atmosfera individual de cada modo grego e use em solos, intros e dedilhados ricos.'
          }
        ]
      },
      {
        subject: 'Violão Worship & Palco',
        icon: 'Guitar',
        items: [
          {
            id: 'ava-vio-01',
            title: 'Desvendando o Worship no Violão (Cifra Club)',
            subtitle: 'Técnicas de ambiência, capotraste e preenchimento sonoro',
            instrument: 'Violão Worship',
            filename: '02_Desvendando_o_Worship_no_Violao_CifraClub.pdf',
            path: '/materiais/02_Violao/Nivel_3_Avancado_e_Aplicacao_Worship/02_Desvendando_o_Worship_no_Violao_CifraClub.pdf',
            size: '1.4 MB',
            type: 'pdf',
            badge: 'Cifra Club',
            description: 'Como preencher o espaço do culto mesmo quando você for o único instrumentista.'
          },
          {
            id: 'ava-vio-02',
            title: 'Guia do Violão Worship & Ministério',
            subtitle: 'Manual prático de oração instrumental e dinâmica de palco',
            instrument: 'Violão/Ministério',
            filename: 'GUIA_VIOLAO_WORSHIP_E_LOUVOR.pdf',
            path: '/materiais/02_Violao/Nivel_3_Avancado_e_Aplicacao_Worship/GUIA_VIOLAO_WORSHIP_E_LOUVOR.pdf',
            size: '4 KB',
            type: 'pdf',
            badge: 'Ministério',
            description: 'Dicas práticas para transições suaves de tom, dinâmicas de louvor e comunhão com o vocal.'
          }
        ]
      },
      {
        subject: 'Harmonia Funcional Avançada & Substituições no Teclado',
        icon: 'Piano',
        items: [
          {
            id: 'ava-tec-01',
            title: 'Dominantes Secundários Aplicados',
            subtitle: 'Acordes preparatórios com tensão dominante (V7/V, V7/II)',
            instrument: 'Teclado/Harmonia',
            filename: '01_Dominantes_Secundarios_Aplicados.pdf',
            path: '/materiais/03_Teclado/Nivel_3_Avancado_Harmonia_Funcional_e_Substituicoes/01_Dominantes_Secundarios_Aplicados.pdf',
            size: '92 KB',
            type: 'pdf',
            badge: 'Harmonia Avançada',
            description: 'Como transformar progressões simples em arranjos com tensão e resolução profissional.'
          },
          {
            id: 'ava-tec-02',
            title: 'Acordes Substitutos & Empréstimo Modal',
            subtitle: 'SubV7, substituição tritônica e acordes diminutos de passagem',
            instrument: 'Teclado/Rearmonização',
            filename: '02_Acordes_Substitutos.pdf',
            path: '/materiais/03_Teclado/Nivel_3_Avancado_Harmonia_Funcional_e_Substituicoes/02_Acordes_Substitutos.pdf',
            size: '63 KB',
            type: 'pdf',
            badge: 'Rearmonização',
            description: 'Segredos da rearmonização: substituições surpreendentes para elevar a beleza dos hinos.'
          },
          {
            id: 'ava-tec-03',
            title: 'Walking Bass no Teclado',
            subtitle: 'Independência da mão esquerda para linhas de baixo com groove',
            instrument: 'Teclado/Baixo',
            filename: '03_Walking_Bass_no_Teclado.pdf',
            path: '/materiais/03_Teclado/Nivel_3_Avancado_Harmonia_Funcional_e_Substituicoes/03_Walking_Bass_no_Teclado.pdf',
            size: '461 KB',
            type: 'pdf',
            badge: 'Walking Bass',
            description: 'Toque o baixo com firmeza na mão esquerda na ausência de baixista na equipe.'
          }
        ]
      }
    ]
  }
];

export const GLOBAL_ZIP_PACKAGE = {
  name: 'Cifroo_Biblioteca_Completa_40_Materiais.zip',
  path: '/downloads/Cifroo_Biblioteca_Completa_40_Materiais.zip',
  size: '27.1 MB',
  label: 'Baixar Todos os 40 Materiais em 1 Único Arquivo (.ZIP)'
};

export const TOTAL_MATERIALS_COUNT = STUDY_LEVELS.reduce(
  (total, lvl) => total + lvl.sections.reduce((sTotal, sec) => sTotal + sec.items.length, 0),
  0
);
