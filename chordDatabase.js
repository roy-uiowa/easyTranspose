const chordDatabase = {
  // C Chords
  "CMajor": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 4, fret: 2 },
      { string: 5, fret: 3 },
    ],
    barres: [],
    openStrings: [1],
    mutedStrings: [6],
    position: 1,
  },
  "Cm": {
    fingers: [
      { string: 2, fret: 4 },
      { string: 3, fret: 5 },
      { string: 4, fret: 5 },
    ],
    barres: [{ fromString: 1, toString: 5, fret: 3 }],
    openStrings: [],
    mutedStrings: [6],
    position: 3,
  },
  "C7": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 4, fret: 2 },
      { string: 5, fret: 3 },
      { string: 3, fret: 3 },
    ],
    barres: [],
    openStrings: [1],
    mutedStrings: [6],
    position: 1,
  },

  // C# Chords
  "C#Major": {
    fingers: [
      { string: 3, fret: 6 },
      { string: 4, fret: 6 },
      { string: 5, fret: 6 },
    ],
    barres: [{ fromString: 1, toString: 5, fret: 4 }],
    openStrings: [],
    mutedStrings: [6],
    position: 4,
  },
  "C#m": {
    fingers: [
      { string: 3, fret: 5 },
      { string: 4, fret: 6 },
      { string: 5, fret: 6 },
    ],
    barres: [{ fromString: 1, toString: 5, fret: 4 }],
    openStrings: [],
    mutedStrings: [6],
    position: 4,
  },
  "C#7": {
    fingers: [
      { string: 2, fret: 2 },
      { string: 3, fret: 3 },
      { string: 5, fret: 4 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [6],
    position: 1,
  },

  // D Chords
  "DMajor": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 3 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [5, 6],
    position: 1,
  },
  "Dm": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 3 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [5, 6],
    position: 1,
  },
  "D7": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [5, 6],
    position: 1,
  },

  // D# Chords
  "D#Major": {
    fingers: [
      { string: 2, fret: 4 },
      { string: 3, fret: 3 },
      { string: 4, fret: 5 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 3 }],
    openStrings: [],
    mutedStrings: [],
    position: 3,
  },
  "D#m": {
    fingers: [
      { string: 2, fret: 4 },
      { string: 3, fret: 3 },
      { string: 4, fret: 5 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 3 }],
    openStrings: [],
    mutedStrings: [],
    position: 3,
  },
  "D#7": {
    fingers: [
      { string: 2, fret: 4 },
      { string: 3, fret: 5 },
      { string: 4, fret: 6 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // E Chords
  "EMajor": {
    fingers: [
      { string: 3, fret: 1 },
      { string: 4, fret: 2 },
      { string: 5, fret: 2 },
    ],
    barres: [],
    openStrings: [1, 2, 6],
    mutedStrings: [],
    position: 1,
  },
  "Em": {
    fingers: [
      { string: 4, fret: 2 },
      { string: 5, fret: 2 },
    ],
    barres: [],
    openStrings: [1, 2, 3, 6],
    mutedStrings: [],
    position: 1,
  },
  "E7": {
    fingers: [
      { string: 3, fret: 1 },
      { string: 5, fret: 2 },
    ],
    barres: [],
    openStrings: [1, 2, 4, 6],
    mutedStrings: [],
    position: 1,
  },

  // F Chords
  "FMajor": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 3, fret: 2 },
      { string: 4, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "Fm": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 3, fret: 1 },
      { string: 4, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "F7": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 3, fret: 3 },
      { string: 4, fret: 4 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // F# Chords
  "F#Major": {
    fingers: [
      { string: 3, fret: 2 },
      { string: 4, fret: 4 },
      { string: 5, fret: 4 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 2 }],
    openStrings: [],
    mutedStrings: [],
    position: 2,
  },
  "F#m": {
    fingers: [
      { string: 3, fret: 2 },
      { string: 4, fret: 4 },
      { string: 5, fret: 4 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 2 }],
    openStrings: [],
    mutedStrings: [],
    position: 2,
  },
  "F#7": {
    fingers: [
      { string: 2, fret: 3 },
      { string: 3, fret: 4 },
      { string: 4, fret: 5 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 2,
  },

  // Repeat this structure for G, G#, A, A#, and B chords...
    // G Chords
  "GMajor": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 5, fret: 2 },
      { string: 6, fret: 3 },
    ],
    barres: [],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    position: 1,
  },
  "Gm": {
    fingers: [
      { string: 1, fret: 3 },
      { string: 2, fret: 3 },
      { string: 6, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 3 }],
    openStrings: [],
    mutedStrings: [],
    position: 3,
  },
  "G7": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 5, fret: 2 },
      { string: 6, fret: 3 },
    ],
    barres: [],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    position: 1,
  },

  // G# Chords
  "G#Major": {
    fingers: [
      { string: 1, fret: 4 },
      { string: 2, fret: 4 },
      { string: 3, fret: 5 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 4 }],
    openStrings: [],
    mutedStrings: [],
    position: 4,
  },
  "G#m": {
    fingers: [
      { string: 3, fret: 4 },
      { string: 4, fret: 6 },
      { string: 5, fret: 6 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 4 }],
    openStrings: [],
    mutedStrings: [],
    position: 4,
  },
  "G#7": {
    fingers: [
      { string: 1, fret: 1 },
      { string: 2, fret: 3 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // A Chords
  "AMajor": {
    fingers: [
      { string: 2, fret: 2 },
      { string: 3, fret: 2 },
      { string: 4, fret: 2 },
    ],
    barres: [],
    openStrings: [1, 5],
    mutedStrings: [6],
    position: 1,
  },
  "Am": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 3, fret: 2 },
      { string: 4, fret: 2 },
    ],
    barres: [],
    openStrings: [1, 5],
    mutedStrings: [6],
    position: 1,
  },
  "A7": {
    fingers: [
      { string: 2, fret: 2 },
      { string: 4, fret: 2 },
    ],
    barres: [],
    openStrings: [1, 3, 5],
    mutedStrings: [6],
    position: 1,
  },

  // A# Chords
  "A#Major": {
    fingers: [
      { string: 3, fret: 3 },
      { string: 4, fret: 3 },
      { string: 5, fret: 3 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 1 }],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },
  "A#m": {
    fingers: [
      { string: 2, fret: 4 },
      { string: 3, fret: 5 },
      { string: 4, fret: 5 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 3 }],
    openStrings: [],
    mutedStrings: [],
    position: 3,
  },
  "A#7": {
    fingers: [
      { string: 2, fret: 1 },
      { string: 4, fret: 2 },
      { string: 5, fret: 3 },
    ],
    barres: [],
    openStrings: [],
    mutedStrings: [],
    position: 1,
  },

  // B Chords
  "BMajor": {
    fingers: [
      { string: 3, fret: 4 },
      { string: 4, fret: 4 },
      { string: 5, fret: 4 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 2 }],
    openStrings: [],
    mutedStrings: [],
    position: 2,
  },
  "Bm": {
    fingers: [
      { string: 2, fret: 2 },
      { string: 3, fret: 4 },
      { string: 4, fret: 4 },
    ],
    barres: [{ fromString: 1, toString: 6, fret: 2 }],
    openStrings: [],
    mutedStrings: [],
    position: 2,
  },
  "B7": {
    fingers: [
      { string: 1, fret: 2 },
      { string: 2, fret: 1 },
      { string: 3, fret: 2 },
    ],
    barres: [],
    openStrings: [4],
    mutedStrings: [5, 6],
    position: 1,
  },
};


// Export the database
export default chordDatabase;
