export const sampleSongs = {
  'nada-alem': {
    title: 'Nada Além do Sangue',
    artist: 'Fernandinho',
    shapeKey: 'A',
    soundingKey: 'Bb',
    rhythm: 'Padrão 4/4',
    instrument: 'Violão',
    notes: 'Versão para violão com Capo na 1ª casa. Arpejo suave na intro e levada cheia no refrão.',
    diagrams: [
      { name: 'A', fingers: ['x', '0', '1', '2', '3', '0'], frets: ['x', 0, 2, 2, 2, 0], markers: ['x', 'o', '', '', '', 'o'] },
      { name: 'D9/F#', fingers: ['1', '0', '0', '2', '3', '0'], frets: [2, 0, 0, 2, 3, 0], markers: ['', 'o', 'o', '', '', 'o'] },
      { name: 'F#m7(11)', fingers: ['1', 'x', '2', '3', '0', '0'], frets: [2, 'x', 2, 2, 0, 0], markers: ['', 'x', '', '', 'o', 'o'] },
      { name: 'E', fingers: ['0', '2', '3', '1', '0', '0'], frets: [0, 2, 2, 1, 0, 0], markers: ['o', '', '', '', 'o', 'o'] },
      { name: 'D9', fingers: ['x', 'x', '0', '1', '2', '0'], frets: ['x', 'x', 0, 2, 3, 0], markers: ['x', 'x', 'o', '', '', 'o'] }
    ],
    compact: [
      { section: '[Intro]', chords: 'A   D9/F#   A   D9/F#' },
      { section: '[Verso 1]', chords: 'A   D9/F#   A   D9/F#\nF#m7(11)   E   D9   A' },
      { section: '[Refrão]', chords: 'A   E   F#m7(11)   D9\nA   E   D9' }
    ],
    lyrics: [
      '[Intro]',
      'A   D9/F#   A   D9/F#',
      '',
      '[Verso 1]',
      'A             D9/F#',
      'Teu sangue leva-me além',
      'A            D9/F#',
      'A todas as bênçãos que em ti se têm',
      'F#m7(11)        E',
      'Liberto eu sou, curado eu sou',
      'D9            A',
      'Pelo sangue de Jesus',
      '',
      '[Refrão]',
      'A                E',
      'Nada além do sangue',
      'F#m7(11)         D9',
      'Nada além do sangue de Jesus',
      'A                E',
      'Que me faz branco como a neve',
      'D9',
      'Nada além do sangue de Jesus'
    ]
  },
  'porque-ele-vive': {
    title: 'Porque Ele Vive',
    artist: 'Harpa Cristã',
    shapeKey: 'G',
    soundingKey: 'G',
    rhythm: 'Guarânia 3/4',
    instrument: 'Violão',
    notes: 'Clássico da Harpa. Toque dedilhado na primeira parte e aumente a intensidade no refrão.',
    diagrams: [
      { name: 'G', fingers: ['3', '2', '0', '0', '0', '4'], frets: [3, 2, 0, 0, 0, 3], markers: ['', '', 'o', 'o', 'o', ''] },
      { name: 'C', fingers: ['x', '3', '2', '0', '1', '0'], frets: ['x', 3, 2, 0, 1, 0], markers: ['x', '', '', 'o', '', 'o'] },
      { name: 'D', fingers: ['x', 'x', '0', '1', '3', '2'], frets: ['x', 'x', 0, 2, 3, 2], markers: ['x', 'x', 'o', '', '', ''] },
      { name: 'G7', fingers: ['3', '2', '0', '0', '0', '1'], frets: [3, 2, 0, 0, 0, 1], markers: ['', '', 'o', 'o', 'o', ''] }
    ],
    compact: [
      { section: '[Intro]', chords: 'G   C   G   D' },
      { section: '[Primeira Parte]', chords: 'G   C\nG   D\nG   G7   C   Cm\nG   Em   Am   D7   G' },
      { section: '[Refrão]', chords: 'G   G7   C\nG   Em   Am   D\nG   G7   C   Cm\nG   Em   Am   D7   G' }
    ],
    lyrics: [
      '[Intro]',
      'G   C   G   D',
      '',
      '[Primeira Parte]',
      'G               C',
      'Deus enviou seu Filho amado',
      'G               D',
      'Para salvar e perdoar',
      'G          G7   C        Cm',
      'Na cruz morreu por meu pecado',
      'G         Em    Am   D7   G',
      'Mas ressurgiu e vivo com o Pai está',
      '',
      '[Refrão]',
      'G            G7  C',
      'Porque Ele vive, eu posso crer no amanhã',
      'G            Em     Am   D',
      'Porque Ele vive, temor não há'
    ]
  }
};
