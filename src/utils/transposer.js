/**
 * Cifroo Website - Utilitário Harmônico e Transpositor para o Simulador
 */

export const NOTE_TO_PITCH = {
  'B#': 0, 'C': 0,
  'C#': 1, 'Db': 1,
  'D': 2,
  'D#': 3, 'Eb': 3,
  'E': 4, 'Fb': 4,
  'E#': 5, 'F': 5,
  'F#': 6, 'Gb': 6,
  'G': 7,
  'G#': 8, 'Ab': 8,
  'A': 9,
  'A#': 10, 'Bb': 10,
  'B': 11, 'Cb': 11
};

export const CHROMATIC_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const CHROMATIC_FLATS  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export function transposeNote(note, semitones) {
  if (!note || NOTE_TO_PITCH[note] === undefined) return note;
  const targetPitch = ((NOTE_TO_PITCH[note] + semitones) % 12 + 12) % 12;
  const useFlats = note.includes('b') || targetPitch === 10 || targetPitch === 3;
  const scale = useFlats ? CHROMATIC_FLATS : CHROMATIC_SHARPS;
  return scale[targetPitch];
}

export function transposeSingleChord(chord, semitones) {
  if (!chord || semitones === 0) return chord;
  return chord.replace(/([A-G][#b]?)/g, (match) => transposeNote(match, semitones));
}

export function isChord(token) {
  if (!token) return false;
  const clean = token.replace(/^[\[\(]+|[\]\)]+$/g, '').trim();
  if (!clean) return false;
  return /^([A-G][#b]?(?:m|M|maj|min|dim|aug|sus|add|alt|º|°|ø|\+|\-)?[0-9\(\)\#\bMmajminsusaddalt]*(?:\/[A-G][#b]?)?)$/.test(clean);
}

export function isChordLine(line) {
  if (!line || typeof line !== 'string') return false;
  const trimmed = line.trim();
  if (!trimmed || /^\[.+\]$/.test(trimmed)) return false;
  if (/^[eEbBgGdDaA][#b]?\s*\|/i.test(trimmed) || /\|-{2,}/.test(trimmed)) return false;

  const tokens = trimmed.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return false;
  const contentTokens = tokens.filter(t => !/^[\|\:\/\(\)\[\]\-\.]+$/.test(t) && !/^[\(\[]?[0-9]+x[\]\)]?$/i.test(t));
  if (contentTokens.length === 0) return false;

  for (const token of contentTokens) {
    if (!isChord(token)) return false;
  }
  return true;
}

export function transposeChordLine(line, semitones) {
  if (!line || semitones === 0) return line;
  return line.replace(/(^|[\s\|\(\)])([A-G][#b]?(?:m|M|maj|min|dim|aug|sus|add|alt|º|°|ø|\+|\-)?[0-9\(\)\#\bMmajminsusaddalt]*(?:\/[A-G][#b]?)?)(?=[\s\|\(\)]|$)/g,
    (match, prefix, chord) => {
      if (isChord(chord)) {
        return prefix + transposeSingleChord(chord, semitones);
      }
      return match;
    }
  );
}
