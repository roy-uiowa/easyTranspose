import chordDatabase from "./chordDatabase"; // For Guitar chords
import Svg, { Line, Circle, Rect, Text as SvgText } from "react-native-svg";
  // Generate SVG Chord Diagram
const generateChordSvg = (note, type) => {
  const chordKey = `${note}${type}`;
  const chordData = chordDatabase[chordKey] || {}; // Retrieve chord data or default
  const fingers = chordData.fingers || [];
  const barres = chordData.barres || [];
  const startingFret = chordData.position || 1;
  const openStrings = chordData.openStrings || [];
  const mutedStrings = chordData.mutedStrings || [];

  return (
    <Svg width={40} height={50} viewBox="0 0 40 50">
      {/* Open/Muted Strings */}
      {[1, 2, 3, 4, 5, 6].map((string, index) => {
        const x = 5 + index * 5; // Spacing for strings
        if (openStrings.includes(string)) {
          return (
            <SvgText
              key={`open-${string}`}
              x={x}
              y="6" // Position above fretboard
              textAnchor="middle"
              fontSize="3"
              fontWeight="bold"
              fill="black"
            >
              O
            </SvgText>
          );
        } else if (mutedStrings.includes(string)) {
          return (
            <SvgText
              key={`mute-${string}`}
              x={x}
              y="6" // Position above fretboard
              textAnchor="middle"
              fontSize="3"
              fontWeight="bold"
              fill="black"
            >
              X
            </SvgText>
          );
        }
        return null;
      })}

      {/* Fretboard */}
      <Rect x="4" y="10" width="30" height="30" fill="none" stroke="black" strokeWidth="0.5" />
      {[1, 2, 3, 4].map((i) => (
        <Line
          key={`fret-${i}`}
          x1="4"
          y1={10 + i * 6}
          x2="34"
          y2={10 + i * 6}
          stroke="black"
          strokeWidth="0.5"
        />
      ))}
      {[1, 2, 3, 4, 5].map((i) => (
        <Line
          key={`string-${i}`}
          x1={4 + i * 5}
          y1="10"
          x2={4 + i * 5}
          y2="40"
          stroke="black"
          strokeWidth="0.5"
        />
      ))}

      {/* Nut (Thicker Line) */}
      {startingFret === 1 && (
        <Line x1="4" y1="10" x2="34" y2="10" stroke="black" strokeWidth="1" />
      )}

      {/* Fret Numbers */}
      {[1, 2, 3, 4].map((i) => (
        <SvgText
          key={`fret-num-${i}`}
          x="2"
          y={10 + i * 6 + 2} // Slightly below each fret
          fontSize="2.5"
          textAnchor="middle"
          fill="black"
        >
          {startingFret + i - 1}
        </SvgText>
      ))}

      {/* Finger Positions */}
      {fingers.map((finger, index) => (
        <Circle
          key={`finger-${index}`}
          cx={4 + finger.string * 5}
          cy={10 + finger.fret * 6}
          r="2"
          fill="black"
        />
      ))}

      {/* Barre Chords */}
      {barres.map((barre, index) => (
        <Rect
          key={`barre-${index}`}
          x={4 + barre.fromString * 5}
          y={10 + barre.fret * 6 - 2}
          width={(barre.toString - barre.fromString) * 5}
          height="4"
          rx="2"
          fill="black"
        />
      ))}

      {/* Chord Label */}
      <SvgText
        x="20"
        y="48" // Positioned below the fretboard
        textAnchor="middle"
        fontSize="3"
        fontWeight="bold"
        fill="black"
      >
        {chordKey}
      </SvgText>
    </Svg>
  );
};

// Export the database
export default generateChordSvg;