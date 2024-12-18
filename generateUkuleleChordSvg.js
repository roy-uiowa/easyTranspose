import Svg, { Line, Circle, Rect, Text } from "react-native-svg";
import ukuleleChordDatabase from "./ukuleleChordDatabase"; // For Piano chords
const generateUkuleleChordSvg = (note, type) => {
  const chordKey = `${note}${type}`;
  const chordData = ukuleleChordDatabase[chordKey] || {}; // Fallback for undefined chords
  const { fingers = [], barres = [], openStrings = [], mutedStrings = [], position = 1 } = chordData;

  return (
    <Svg width={35} height={40} viewBox="0 0 45 40">
      {/* Strings */}
      {[1, 2, 3, 4].map((i) => (
        <Line
          key={`string-${i}`}
          x1={10 * i}
          y1="5"
          x2={10 * i}
          y2="35"
          stroke="black"
          strokeWidth="1"
        />
      ))}

      {/* Frets */}
      {[1, 2, 3, 4].map((i) => (
        <Line
          key={`fret-${i}`}
          x1="10"
          y1={5 + i * 7.5}
          x2="40"
          y2={5 + i * 7.5}
          stroke="black"
          strokeWidth="1"
        />
      ))}

      {/* Nut */}
      {position === 1 && (
        <Line x1="10" y1="5" x2="40" y2="5" stroke="black" strokeWidth="2" />
      )}

      {/* Open Strings */}
      {openStrings.map((string) => (
        <Circle
          key={`open-${string}`}
          cx={10 * string}
          cy="2"
          r="2"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      ))}

      {/* Muted Strings */}
      {mutedStrings.map((string) => (
        <Text
          key={`mute-${string}`}
          x={10 * string - 2}
          y="2"
          fontSize="4"
          fill="black"
        >
          X
        </Text>
      ))}

      {/* Barre Chords */}
      {barres.map((barre, index) => (
        <Rect
          key={`barre-${index}`}
          x={10 * barre.fromString - 5}
          y={5 + barre.fret * 7.5 - 3.5}
          width={(barre.toString - barre.fromString + 1) * 10}
          height="7"
          rx="3.5"
          fill="black"
        />
      ))}

      {/* Finger Positions */}
      {fingers.map((finger, index) => (
        <Circle
          key={`finger-${index}`}
          cx={10 * finger.string}
          cy={5 + finger.fret * 7.5}
          r="3"
          fill="black"
        />
      ))}

      {/* Fret Numbers */}
      {[1, 2, 3, 4].map((i) => (
        <Text
          key={`fret-num-${i}`}
          x="5"
          y={5 + i * 7.5 + 3}
          fontSize="4"
          fill="black"
        >
          {position + i - 1}
        </Text>
      ))}
    </Svg>
  );
};

// Export the database
export default generateUkuleleChordSvg;