import "./App.css";
import Button from "./components/Button/Button";
import SelectInstrument from "./components/SelectInstrument/SelectInstrument";

function App() {
  return (
    <div className="App">
      <h1 className="header">The Best Guitar Tuner</h1>
      <SelectInstrument />
      <div className="button-container">
        <Button stringNumber="1" note="E4" />
        <Button stringNumber="2" note="B3" />
        <Button stringNumber="3" note="G3" />
        <Button stringNumber="4" note="D3" />
        <Button stringNumber="5" note="A2" />
        <Button stringNumber="6" note="E2" />
      </div>
    </div>
  );
}

export default App;
