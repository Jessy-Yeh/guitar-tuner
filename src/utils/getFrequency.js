// const audioList = [
//   { note: "E4", freq: "329.63" },
//   { note: "B3", freq: "246.94" },
//   { note: "G3", freq: "196.0" },
//   { note: "D3", freq: "146.83" },
//   { note: "A2", freq: "110.0" },
//   { note: "E2", freq: "82.41" },
// ];

const noteFrequencyMap = {
  E4: 329.63,
  B3: 246.94,
  G3: 196.0,
  D3: 146.83,
  A2: 110.0,
  E2: 82.41,
};

export default function getFrequency(note) {
  return noteFrequencyMap[note] || 0;
}
