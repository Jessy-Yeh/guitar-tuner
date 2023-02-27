import "./App.css";
import String from "./components/String/String";
import SelectInstrument from "./components/SelectInstrument/SelectInstrument";

function App() {
  return (
    <div className="App">
      <h1 className="header">The Best Guitar Tuner</h1>
      <SelectInstrument />
      <ol className="stringGroup">
        <String stringNumber="1" note="E4" />
        <String stringNumber="2" note="B3" />
        <String stringNumber="3" note="G3" />
        <String stringNumber="4" note="D3" />
        <String stringNumber="5" note="A2" />
        <String stringNumber="6" note="E2" />
      </ol>
    </div>
  );
}

export default App;
