import Svg, { Line, Circle, Rect, Text as SvgText } from "react-native-svg";
import pianoChordDatabase from "./pianoChordDatabase"; // For Piano chords
const generatePianoChordSvg = (note, type) => {
  const chordKey = `${note}${type}`;
  const chordData = pianoChordDatabase[chordKey] || { keys: [] }; // Fallback if chord not found
  const highlightedKeys = chordData.keys;

  const whiteKeys = [1, 3, 5, 6, 8, 10, 12]; // White keys in an octave
  const blackKeys = [2, 4, 7, 9, 11]; // Black keys in an octave

  return (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      {/* White Keys */}
      {whiteKeys.map((key, index) => {
        const x = index * 5.5; // Position for white keys
        return (
          <Rect
            key={`white-${key}`}
            x={x}
            y="0"
            width="5.5"
            height="40"
            fill="white"
            stroke="black"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Black Keys */}
      {blackKeys.map((key, index) => {
        const x = (index >= 2 ? index + 0.5 : index) * 5.5 + 3.5; // Offset for black keys
        return (
          <Rect
            key={`black-${key}`}
            x={x}
            y="0"
            width="4"
            height="25"
            fill="black"
          />
        );
      })}

      {/* Red Dots on White Keys */}
      {highlightedKeys
        .filter((key) => whiteKeys.includes(key))
        .map((key) => {
          const x = whiteKeys.indexOf(key) * 5.5 + 2.75; // Center of white key
          return (
            <Circle key={`dot-white-${key}`} cx={x} cy="30" r="2" fill="red" />
          );
        })}

      {/* Red Dots on Black Keys */}
      {highlightedKeys
        .filter((key) => blackKeys.includes(key))
        .map((key) => {
          const x = (blackKeys.indexOf(key) >= 2
            ? blackKeys.indexOf(key) + 0.5
            : blackKeys.indexOf(key)) * 5.5 + 5.5; // Center of black key
          return (
            <Circle key={`dot-black-${key}`} cx={x} cy="15" r="2" fill="red" />
          );
        })}
    </Svg>
  );
};

// Export the database
export default generatePianoChordSvg;
