const pianoChordDatabase = {
  // C Chords
  "CMajor": { keys: [1, 5, 8] }, // C, E, G
  "Cm": { keys: [1, 4, 8] }, // C, D#, G
  "C7": { keys: [1, 5, 8, 10] }, // C, E, G, A#

  // C# Chords
  "C#Major": { keys: [2, 6, 9] }, // C#, F, G#
  "C#m": { keys: [2, 5, 9] }, // C#, E, G#
  "C#7": { keys: [2, 6, 9, 11] }, // C#, F, G#, B

  // D Chords
  "DMajor": { keys: [3, 7, 10] }, // D, F#, A
  "Dm": { keys: [3, 6, 10] }, // D, F, A
  "D7": { keys: [3, 7, 10, 12] }, // D, F#, A, C

  // D# Chords
  "D#Major": { keys: [4, 8, 11] }, // D#, G, A#
  "D#m": { keys: [4, 7, 11] }, // D#, F#, A#
  "D#7": { keys: [4, 8, 11, 1] }, // D#, G, A#, C#

  // E Chords
  "EMajor": { keys: [5, 9, 12] }, // E, G#, B
  "Em": { keys: [5, 8, 12] }, // E, G, B
  "E7": { keys: [5, 9, 12, 2] }, // E, G#, B, D

  // F Chords
  "FMajor": { keys: [6, 10, 1] }, // F, A, C
  "Fm": { keys: [6, 9, 1] }, // F, G#, C
  "F7": { keys: [6, 10, 1, 3] }, // F, A, C, D#

  // F# Chords
  "F#Major": { keys: [7, 11, 2] }, // F#, A#, C#
  "F#m": { keys: [7, 10, 2] }, // F#, A, C#
  "F#7": { keys: [7, 11, 2, 4] }, // F#, A#, C#, E

  // G Chords
  "GMajor": { keys: [8, 12, 3] }, // G, B, D
  "Gm": { keys: [8, 11, 3] }, // G, A#, D
  "G7": { keys: [8, 12, 3, 5] }, // G, B, D, F

  // G# Chords
  "G#Major": { keys: [9, 1, 4] }, // G#, C, D#
  "G#m": { keys: [9, 12, 4] }, // G#, B, D#
  "G#7": { keys: [9, 1, 4, 6] }, // G#, C, D#, F#

  // A Chords
  "AMajor": { keys: [10, 2, 5] }, // A, C#, E
  "Am": { keys: [10, 1, 5] }, // A, C, E
  "A7": { keys: [10, 2, 5, 7] }, // A, C#, E, G

  // A# Chords
  "A#Major": { keys: [11, 3, 6] }, // A#, D, F
  "A#m": { keys: [11, 2, 6] }, // A#, C#, F
  "A#7": { keys: [11, 3, 6, 8] }, // A#, D, F, G

  // B Chords
  "BMajor": { keys: [12, 4, 7] }, // B, D#, F#
  "Bm": { keys: [12, 3, 7] }, // B, D, F#
  "B7": { keys: [12, 4, 7, 9] }, // B, D#, F#, A
};


// Export the database
export default pianoChordDatabase;