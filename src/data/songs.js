export const sampleSongs = {
  'a-tua-graca': {
    title: 'A Tua Graça Me Basta',
    artist: 'Trazendo a Arca',
    shapeKey: 'E',
    soundingKey: 'E',
    rhythm: 'Padrão 4/4',
    instrument: 'Violão',
    version: 'Principal',
    notes: 'Arranjo oficial de palco. Intro com dedilhado aberto e transição dinâmica com pestanas no refrão.',
    diagrams: [
      { name: 'C#m7(9)*', strings: '• • • • • •', fret: '9ª', badge: 'PESTANA 9ª' },
      { name: 'C#m/B*', strings: 'x • • • • •', fret: '4ª', badge: 'PESTANA 4ª' },
      { name: 'A7M*', strings: 'x o • • • o', fret: 'PADRÃO', badge: '1, 2, 3' },
      { name: 'E/G#*', strings: '• • • • • x', fret: '2ª', badge: 'CASA 2' },
      { name: 'F#m7(9)*', strings: '• • • • • •', fret: '2ª', badge: 'PESTANA 2ª' },
      { name: 'A/B*', strings: 'x • • • • o', fret: '2ª', badge: 'PADRÃO' },
      { name: 'B9*', strings: 'x • • • • •', fret: '2ª', badge: 'PESTANA 2ª' }
    ],
    compact: [
      { section: '[Intro]', chords: 'C#m7(9)   C#m/B   A7M   E/G#   F#m7(9)   C#m7(9)   C#m/B   A7M   A/B' },
      { section: '[Primeira Parte]', chords: 'E   A9\nC#m   B   A9   E   F#m   B9\nE   A9\nC#m   B   A9   E   F#m   B9' },
      { section: '[Refrão]', chords: 'A9   E   F#m\nB   C#m   B   A9\nE   F#m   C#m\nB   A9   B9   E' }
    ],
    lyrics: [
      '[Intro]',
      'C#m7(9)   C#m/B   A7M   E/G#   F#m7(9)   C#m7(9)   C#m/B   A7M   A/B',
      '',
      '[Primeira Parte]',
      'E             A9',
      'Eu não preciso ser reconhecido por ninguém',
      'E             A9',
      'A minha glória é fazer com que conheçam a ti',
      'C#m         B             A9             E     F#m',
      'E que diminua eu pra que tu cresças Senhor mais e mais',
      '     B9',
      'Mais e mais',
      '',
      '[Refrão]',
      'A9           E             F#m',
      'A tua graça me basta, a tua presença pra mim é o bastante',
      'B         C#m         B         A9',
      'Tua presença é o ar que respiro a cada instante',
      'E           F#m       C#m',
      'Tua presença é meu alimento',
      'B             A9      B9      E',
      'Sem ti eu não posso viver'
    ]
  },
  'isaias-9': {
    title: 'Isaías 9',
    artist: 'Carol Braga',
    shapeKey: 'B',
    soundingKey: 'B',
    rhythm: 'Padrão 6/8',
    instrument: 'Violão',
    version: 'Principal',
    notes: 'Tom original em B. Cifra com marcação estrita de introdução e compasso ternário.',
    diagrams: [
      { name: 'B', strings: 'x • • • • •', fret: '2ª', badge: 'PESTANA 2ª' },
      { name: 'F#/A#', strings: '• x • • • •', fret: '1ª', badge: 'PADRÃO' },
      { name: 'G#m', strings: '• • • • • •', fret: '4ª', badge: 'PESTANA 4ª' },
      { name: 'E', strings: 'o • • • o o', fret: 'PADRÃO', badge: '1, 2, 3' }
    ],
    compact: [
      { section: '[Intro]', chords: 'B   F#/A#   G#m   E' },
      { section: '[Primeira Parte]', chords: 'B   F#/A#   G#m   E' },
      { section: '[Refrão]', chords: 'B   F#/A#   G#m   E' }
    ],
    lyrics: [
      '[Intro]',
      'B   F#/A#   G#m   E',
      '',
      '[Primeira Parte]',
      'B               F#/A#',
      'Um menino nos nasceu',
      'G#m             E',
      'Um filho se nos deu',
      'B                 F#/A#',
      'O principado está sobre os seus ombros',
      'G#m               E',
      'E o seu nome será Maravilhoso',
      '',
      '[Refrão]',
      'B          F#/A#',
      'Conselheiro, Deus Forte',
      'G#m        E',
      'Pai da Eternidade, Príncipe da Paz'
    ]
  },
  'e-ele': {
    title: 'É Ele',
    artist: 'Drops INA',
    shapeKey: 'G',
    soundingKey: 'G',
    rhythm: 'Pop Worship',
    instrument: 'Violão',
    version: 'Simplificada',
    notes: 'Versão simplificada com 4 acordes básicos sem pestana, ideal para transição rápida de palco.',
    diagrams: [
      { name: 'G', strings: '• • o o • •', fret: 'PADRÃO', badge: '1, 2, 3, 4' },
      { name: 'Em7', strings: 'o • • o • •', fret: 'PADRÃO', badge: '1, 2, 3, 4' },
      { name: 'C9', strings: 'x • • o • •', fret: 'PADRÃO', badge: '1, 2, 3, 4' },
      { name: 'D', strings: 'x x o • • •', fret: 'PADRÃO', badge: '1, 2, 3' }
    ],
    compact: [
      { section: '[Intro]', chords: 'G   Em7   C9   D' },
      { section: '[Verso]', chords: 'G   Em7   C9   D' },
      { section: '[Refrão]', chords: 'G   Em7   C9   D' }
    ],
    lyrics: [
      '[Intro]',
      'G   Em7   C9   D',
      '',
      '[Primeira Parte]',
      'G',
      'Quem é esse que o vento obedece?',
      'Em7',
      'Quem é esse que o mar se aquieta?',
      'C9',
      'Quem é esse que cura os enfermos?',
      'D',
      'É Jesus, o autor da nossa fé',
      '',
      '[Refrão]',
      'G                   Em7',
      'É Ele, que venceu a morte na cruz',
      'C9                  D',
      'É Ele, o cordeiro que vivo está'
    ]
  }
};
