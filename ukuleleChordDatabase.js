const ukuleleChordDatabase = {
  // C Chords
  "CMajor": {
    fingers: [{ string: 1, fret: 3 }], // 1st string, 3rd fret
    barres: [],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    position: 1,
  },
  "Cm": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 3 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 3, fret: 3 }],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "C7": {
    fingers: [{ string: 1, fret: 1 }],
    barres: [],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    position: 1,
  },

  // C# Chords
  "C#Major": {
    fingers: [{ string: 1, fret: 4 }],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "C#m": {
    fingers: [
      { string: 1, fret: 4 },
      { string: 2, fret: 4 },
      { string: 3, fret: 4 },
    ],
    barres: [{ fromString: 1, toString: 3, fret: 4 }],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "C#7": {
    fingers: [
      { string: 1, fret: 4 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // D Chords
  "DMajor": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 2 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "Dm": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 2 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "D7": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [2, 4],
    mutedStrings: [],
    position: 1,
  },

  // D# Chords
  "D#Major": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 3 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 3 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "D#m": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 2 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 3 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "D#7": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 2 },
      { string: 3, fret: 3 },
      { string: 4, fret: 4 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // E Chords
  "EMajor": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 4, fret: 1 },
    ],
    barres: [],
    openStrings: [2, 3],
    mutedStrings: [],
    position: 1,
  },
  "Em": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 3 },
      { string: 3, fret: 4 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "E7": {
    fingers: [{ string: 4, fret: 1 }],
    barres: [],
    openStrings: [1, 2, 3],
    mutedStrings: [],
    position: 1,
  },

  // F Chords
  "FMajor": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
    ],
    barres: [],
    openStrings: [3, 4],
    mutedStrings: [],
    position: 1,
  },
  "Fm": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
    ],
    barres: [{ fromString: 1, toString: 3, fret: 1 }],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "F7": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 1 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // F# Chords
  "F#Major": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 2 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "F#m": {
    fingers: [
      { string: 1, fret: 4 },
      { string: 2, fret: 3 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 3, fret: 3 }],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "F#7": {
    fingers: [
      { string: 1, fret: 4 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [2, 4],
    mutedStrings: [],
    position: 1,
  },

  // Add remaining notes: G, G#, A, A#, B...
  // G Chords
  "GMajor": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 3 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "Gm": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 3 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },
  "G7": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [],
    position: 1,
  },

  // G# Chords
  "G#Major": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 4 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "G#m": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 4 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "G#7": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 2 },
      { string: 3, fret: 3 },
      { string: 4, fret: 4 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // A Chords
  "AMajor": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [1, 4],
    mutedStrings: [],
    position: 1,
  },
  "Am": {
    fingers: [{ string: 4, fret: 2 }],
    barres: [],
    openStrings: [1, 2, 3],
    mutedStrings: [],
    position: 1,
  },
  "A7": {
    fingers: [{ string: 1, fret: 1 }],
    barres: [],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    position: 1,
  },

  // A# Chords
  "A#Major": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: 2 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "A#m": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "A#7": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 1 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // B Chords
  "BMajor": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 2 },
      { string: 3, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 2 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "Bm": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 2 },
      { string: 3, fret: 2 },
    ],
    barres: [{ fromString: 1, toString: 4, fret: 2 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "B7": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 2 },
      { string: 3, fret: 3 },
      { string: 4, fret: 4 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
};

// Export the database
export default ukuleleChordDatabase;