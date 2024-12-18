import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
const logoUri = require('./assets/imgs/roys_logo.png');
import generateChordSvg from './generateChordSvg';
import generatePianoChordSvg from './generatePianoChordSvg';
import generateUkuleleChordSvg from './generateUkuleleChordSvg';
const chordTypes = ['Major', 'm', '7', 'sus', 'aug', 'dim'];
const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export default function App() {
  const [selectedTab, setSelectedTab] = useState('Guitar');
  const [chordSections, setChordSections] = useState({
    Intro: [],
    'Verse 1': [],
    'Chorus 1': [],
    'Verse 2': [],
    'Chorus 2': [],
    Outro: [],
  });
  const [uniqueChords, setUniqueChords] = useState([]); // Unique chords for Chords Section
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [selectedNote, setSelectedNote] = useState('C');
  const [selectedType, setSelectedType] = useState('Major');

  // Function to reset the app
  const resetApp = () => {
    setChordSections({
    Intro: [],
    'Verse 1': [],
    'Chorus 1': [],
    'Verse 2': [],
    'Chorus 2': [],
    Outro: [],
    }); // Clear selected chords
    setUniqueChords([]);          // Clear cards
  };

  const renderChordSvg = (selectedChord) => {
    const { note, type } = selectedChord;

    switch (selectedTab) {
      case 'Guitar':
        return generateChordSvg(note, type); // Guitar SVG
      case 'Piano':
        return generatePianoChordSvg(note, type); // Piano SVG
      case 'Ukulele':
        return generateUkuleleChordSvg(note, type); // Ukulele SVG
      default:
        return null;
    }
  };

  // Add Chord to Section
  const addChordToSection = () => {
    const newChord = { note: selectedNote, type: selectedType };
    setChordSections((prev) => ({
      ...prev,
      [currentSection]: [
        ...prev[currentSection],
        // `${selectedNote}${selectedType === "Major" ? "" : ` ${selectedType}`}`,
        { note: selectedNote, type: selectedType },
      ],
    }));

    // Add chord to uniqueChords if not already present
    setUniqueChords((prev) => {
      const exists = prev.some(
        (chord) => chord.note === newChord.note && chord.type === newChord.type
      );
      if (!exists) {
        return [...prev, newChord];
      }
      return prev;
    });

    setModalVisible(false);
  };

  const [transposeSteps, setTransposeSteps] = useState(0);
  const transposeChords = (steps) => {
    setTransposeSteps((prevSteps) => prevSteps + steps);
    setChordSections((prev) => {
      const updatedSections = {};
      Object.keys(prev).forEach((section) => {
        updatedSections[section] = prev[section].map((chord) => {
          const currentIndex = notes.indexOf(chord.note);
          if (currentIndex === -1) return chord; // If note not found, return as-is
          const newIndex = (currentIndex + steps + notes.length) % notes.length;
          return { ...chord, note: notes[newIndex] }; // Update the note
        });
      });

      // Update uniqueChords dynamically
      setUniqueChords((prev) => {
        const updatedChords = prev.map((chord) => {
          const currentIndex = notes.indexOf(chord.note);
          if (currentIndex === -1) return chord;
          const newIndex = (currentIndex + steps + notes.length) % notes.length;
          return { ...chord, note: notes[newIndex] };
        });
        return updatedChords;
      });

      return updatedSections;
    });
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="black" />
        <Text style={styles.title}>EasyTranspose</Text>
        <Image source={logoUri} style={styles.avatar} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Guitar', 'Ukulele', 'Piano'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Chords Section */}
      <View style={{ height: 100 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chordScroll}>
          {uniqueChords.map((chord, index) => (
            <View key={index} style={styles.chordCard}>
              <Text style={styles.chordName}>
                {chord.note} {chord.type === 'Major' ? '' : chord.type}
              </Text>
              {/*<Image source={{ uri: "https://via.placeholder.com/40" }} style={styles.chordImage} />*/}
              {/*generateChordSvg(chord.note, chord.type)*/}
              {renderChordSvg(chord)}
              <TouchableOpacity>
                <Text style={styles.alternativeText}>Alt ></Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Song Sections */}
      <View style={styles.songSections}>
        {Object.keys(chordSections).map((section, index) => (
          <View key={index} style={styles.songSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section}</Text>
              <TouchableOpacity
                // onPress={() => addChordToSection(section)}
                onPress={() => {
                  setCurrentSection(section);
                  setModalVisible(true);
                }}
                style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.chordsRow}>
              {chordSections[section].map((chord, index) => (
                <View key={index} style={styles.chordCircle}>
                  <Text style={styles.chordText}>{chord.note}</Text>
                  <Text style={styles.chordTypeText}>
                    {' '}
                    {chord.type === 'Major' ? '' : ` ${chord.type}`}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Transpose Controls */}
      <View style={styles.transposeControls}>
        <TouchableOpacity
          onPress={() => transposeChords(0 - transposeSteps)}
          style={styles.transposeButtonRed}>
          <Text style={styles.transposeText}>Transpose: {transposeSteps}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => transposeChords(1)}
          style={styles.transposeButtonGreen}>
          <Text style={styles.transposeText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => transposeChords(-1)}
          style={styles.transposeButtonGreen}>
          <Text style={styles.transposeText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      {/*<View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} color="black" />
        <Ionicons name="search-outline" size={28} color="black" />
        <Ionicons name="sync-outline" size={28} color="black" />
        <MaterialIcons name="library-music" size={28} color="black" />
      </View>*/}
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => console.log("Home pressed")}>
          <Ionicons name="home-outline" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Search pressed")}>
          <Ionicons name="search-outline" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={resetApp}>
          <Ionicons name="sync-outline" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Library pressed")}>
          <MaterialIcons name="library-music" size={28} color="black" />
        </TouchableOpacity>
      </View>
      {/* Add Chord Modal */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Chord</Text>
            <View style={styles.pickers}>
              {/* Note Selector */}
              <Picker
                selectedValue={selectedNote}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedNote(itemValue)}>
                {notes.map((note) => (
                  <Picker.Item key={note} label={note} value={note} />
                ))}
              </Picker>
              {/* Chord Type Selector */}
              <Picker
                selectedValue={selectedType}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedType(itemValue)}>
                {chordTypes.map((type) => (
                  <Picker.Item key={type} label={type} value={type} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity
              onPress={addChordToSection}
              style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Chord</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  chordScroll: {
    marginVertical: 1,
    // height:1,
  },
  chordCard: {
    width: 60,
    height: 90,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    marginRight: 5,
  },
  chordName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  // chordImage: {
  //   width: 40,
  //   height: 40,
  //   marginBottom: 5,
  // },
  alternativeText: {
    fontSize: 10,
    color: '#007BFF',
  },
  songSections: {
    flex: 1,
  },
  songSection: {
    marginBottom: 5,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#444',
    borderRadius: 5,
  },

  addButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    // backgroundColor: "#000",
    color: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  chordsRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  chordCircle: {
    width: 30,
    height: 30,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  chordText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  // chordTypeCircle: {
  //   width: 5,
  //   height: 10,
  //   backgroundColor: "#f1f1f1",
  //   borderRadius: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginRight: 10,
  // },
  chordTypeText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  transposeControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  transposeButtonRed: {
    flex: 2,
    backgroundColor: '#FF6347',
    padding: 1,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  transposeButtonGreen: {
    flex: 1,
    backgroundColor: '#32CD32',
    padding: 3,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  transposeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  // Add your styles here based on the original code. Below are new styles for the modal.
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pickers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  picker: {
    width: 120,
    height: 100,
  },
  // addButton: {
  //   backgroundColor: "green",
  //   padding: 10,
  //   borderRadius: 5,
  //   marginTop: 20,
  // },
  // addButtonText: {
  //   color: "#fff",
  //   fontWeight: "bold",
  // },
});
