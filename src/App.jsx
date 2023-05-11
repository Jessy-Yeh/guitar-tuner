import { useState } from "react";

import "./App.css";
import String from "./components/String/String";
import SelectInstrument from "./components/SelectInstrument/SelectInstrument";

import getFrequency from "./utils/getFrequency";

const notes = ["E4", "B3", "G3", "D3", "A2", "E2"];

const context = new AudioContext();
// const gainNode = context.createGain();
let oscillator = null;

const play = (frequency = 300, duration = 1e3) => {
  oscillator = context.createOscillator();
  oscillator.frequency.value = frequency;
  // oscillator.connect(gainNode);
  oscillator.connect(context.destination);
  oscillator.start();
};

function App() {
  const [currentNote, setCurrentNote] = useState(null);

  function stopSound() {
    if (oscillator) oscillator.stop();
    oscillator = null;
    setCurrentNote(null);
  }

  function playSound(note) {
    stopSound();
    const frequency = getFrequency(note);
    play(frequency, 1e3);
    setCurrentNote(note);
  }

  return (
    <div className="App">
      <h1 className="header">The Best Guitar Tuner</h1>
      <SelectInstrument />
      <ol className="stringGroup">
        {notes.map((note, index) => (
          <String
            key={note}
            stringNumber={index}
            note={note}
            playSound={playSound}
            stopSound={stopSound}
            isPlaying={currentNote === note}
          />
        ))}
      </ol>
    </div>
  );
}

export default App;
