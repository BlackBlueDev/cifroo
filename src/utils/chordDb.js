/**
 * Cifroo Web - Banco de Dados de Acordes Multi-Instrumento
 * Extraído diretamente do motor harmônico do Cifroo Mobile (chordDictionary.js)
 */

export const GUITAR_CHORD_DATA = {
  // Canção Principal: A Tua Graça Me Basta
  'C#m7(9)': {
    name: 'C#m7(9)',
    baseFret: 9,
    frets: [9, 11, 11, 9, 9, 11],
    fingers: [1, 3, 4, 1, 1, 2],
    bar: { fret: 9, from: 6, to: 1 },
    stringTokens: '• • • • • •',
    subLabel: 'Pestana 9ª',
    notes: ['C#', 'E', 'G#', 'B', 'D#'],
    bassNote: 'C#'
  },
  'C#m/B': {
    name: 'C#m/B',
    baseFret: 4,
    frets: ['x', 2, 4, 4, 5, 4],
    fingers: ['', 1, 3, 3, 4, 3],
    bar: { fret: 4, from: 4, to: 1 },
    stringTokens: 'x • • • • •',
    subLabel: 'Pestana 4ª',
    notes: ['B', 'C#', 'E', 'G#'],
    bassNote: 'B'
  },
  'A7M': {
    name: 'A7M',
    baseFret: 1,
    frets: ['x', 0, 2, 1, 2, 0],
    fingers: ['', 0, 2, 1, 3, 0],
    stringTokens: 'x o • • • o',
    subLabel: 'Padrão',
    notes: ['A', 'C#', 'E', 'G#'],
    bassNote: 'A'
  },
  'E/G#': {
    name: 'E/G#',
    baseFret: 2,
    frets: [4, 2, 2, 4, 5, 'x'],
    fingers: [3, 1, 1, 3, 4, ''],
    stringTokens: '• • • • • x',
    subLabel: 'Casa 2',
    notes: ['G#', 'E', 'B'],
    bassNote: 'G#'
  },
  'F#m7(9)': {
    name: 'F#m7(9)',
    baseFret: 2,
    frets: [2, 4, 2, 2, 2, 4],
    fingers: [1, 3, 1, 1, 1, 4],
    bar: { fret: 2, from: 6, to: 1 },
    stringTokens: '• • • • • •',
    subLabel: 'Pestana 2ª',
    notes: ['F#', 'A', 'C#', 'E', 'G#'],
    bassNote: 'F#'
  },
  'A/B': {
    name: 'A/B',
    baseFret: 2,
    frets: ['x', 2, 2, 2, 2, 0],
    fingers: ['', 1, 1, 1, 1, 0],
    bar: { fret: 2, from: 5, to: 2 },
    stringTokens: 'x • • • • o',
    subLabel: 'Padrão',
    notes: ['B', 'A', 'C#', 'E'],
    bassNote: 'B'
  },
  'E': {
    name: 'E',
    baseFret: 1,
    frets: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    stringTokens: 'o • • • o o',
    subLabel: 'Padrão',
    notes: ['E', 'G#', 'B'],
    bassNote: 'E'
  },
  'A9': {
    name: 'A9',
    baseFret: 1,
    frets: ['x', 0, 2, 2, 0, 0],
    fingers: ['', 0, 1, 2, 0, 0],
    stringTokens: 'x o • • o o',
    subLabel: 'Padrão',
    notes: ['A', 'C#', 'E', 'B'],
    bassNote: 'A'
  },
  'B9': {
    name: 'B9',
    baseFret: 2,
    frets: ['x', 2, 4, 4, 2, 2],
    fingers: ['', 1, 3, 4, 1, 1],
    bar: { fret: 2, from: 5, to: 1 },
    stringTokens: 'x • • • • •',
    subLabel: 'Pestana 2ª',
    notes: ['B', 'D#', 'F#', 'C#'],
    bassNote: 'B'
  },
  'C#m': {
    name: 'C#m',
    baseFret: 4,
    frets: ['x', 4, 6, 6, 5, 4],
    fingers: ['', 1, 3, 4, 2, 1],
    bar: { fret: 4, from: 5, to: 1 },
    stringTokens: 'x • • • • •',
    subLabel: 'Pestana 4ª',
    notes: ['C#', 'E', 'G#'],
    bassNote: 'C#'
  },
  'B': {
    name: 'B',
    baseFret: 2,
    frets: ['x', 2, 4, 4, 4, 2],
    fingers: ['', 1, 2, 3, 4, 1],
    bar: { fret: 2, from: 5, to: 1 },
    stringTokens: 'x • • • • •',
    subLabel: 'Pestana 2ª',
    notes: ['B', 'D#', 'F#'],
    bassNote: 'B'
  },
  'F#m': {
    name: 'F#m',
    baseFret: 2,
    frets: [2, 4, 4, 2, 2, 2],
    fingers: [1, 3, 4, 1, 1, 1],
    bar: { fret: 2, from: 6, to: 1 },
    stringTokens: '• • • • • •',
    subLabel: 'Pestana 2ª',
    notes: ['F#', 'A', 'C#'],
    bassNote: 'F#'
  },

  // Isaías 9
  'F#/A#': {
    name: 'F#/A#',
    baseFret: 1,
    frets: ['x', 1, 4, 3, 2, 2],
    fingers: ['', 1, 4, 3, 2, 2],
    stringTokens: 'x • • • • •',
    subLabel: 'Casa 1',
    notes: ['A#', 'F#', 'C#'],
    bassNote: 'A#'
  },
  'G#m': {
    name: 'G#m',
    baseFret: 4,
    frets: [4, 6, 6, 4, 4, 4],
    fingers: [1, 3, 4, 1, 1, 1],
    bar: { fret: 4, from: 6, to: 1 },
    stringTokens: '• • • • • •',
    subLabel: 'Pestana 4ª',
    notes: ['G#', 'B', 'D#'],
    bassNote: 'G#'
  },

  // É Ele
  'G': {
    name: 'G',
    baseFret: 1,
    frets: [3, 2, 0, 0, 3, 3],
    fingers: [2, 1, 0, 0, 3, 4],
    stringTokens: '• • o o • •',
    subLabel: 'Padrão',
    notes: ['G', 'B', 'D'],
    bassNote: 'G'
  },
  'Em7': {
    name: 'Em7',
    baseFret: 1,
    frets: [0, 2, 2, 0, 3, 3],
    fingers: [0, 1, 2, 0, 3, 4],
    stringTokens: 'o • • o • •',
    subLabel: 'Padrão',
    notes: ['E', 'G', 'B', 'D'],
    bassNote: 'E'
  },
  'C9': {
    name: 'C9',
    baseFret: 1,
    frets: ['x', 3, 2, 0, 3, 3],
    fingers: ['', 2, 1, 0, 3, 4],
    stringTokens: 'x • • o • •',
    subLabel: 'Padrão',
    notes: ['C', 'E', 'G', 'D'],
    bassNote: 'C'
  },
  'D': {
    name: 'D',
    baseFret: 1,
    frets: ['x', 'x', 0, 2, 3, 2],
    fingers: ['', '', 0, 1, 3, 2],
    stringTokens: 'x x o • • •',
    subLabel: 'Padrão',
    notes: ['D', 'F#', 'A'],
    bassNote: 'D'
  }
};

export function getChordDetails(chordName) {
  if (!chordName) return GUITAR_CHORD_DATA['E'];
  const clean = chordName.replace('*', '').trim();
  if (GUITAR_CHORD_DATA[clean]) return GUITAR_CHORD_DATA[clean];
  
  // Fallback defensivo
  return {
    name: clean,
    baseFret: 1,
    frets: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    stringTokens: 'o • • • o o',
    subLabel: 'Padrão',
    notes: ['C', 'E', 'G'],
    bassNote: clean[0] || 'C'
  };
}
