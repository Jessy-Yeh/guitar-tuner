import "./App.css";
import String from "./components/String/String";
import SelectInstrument from "./components/SelectInstrument/SelectInstrument";

const notes = ["E4", "B3", "G3", "D3", "A2", "E2"];

function App() {
  return (
    <div className="App">
      <h1 className="header">The Best Guitar Tuner</h1>
      <SelectInstrument />
      <div className="string-container">
        {notes.map((note, index) => (
          <String stringNumber={index} note={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
