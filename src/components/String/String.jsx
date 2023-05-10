import { useState } from "react";
import styles from "./String.module.css";
import getStringOrdinalFromNumber from "../../utils/getStringOrdinalFromNumber";
import getFrequency from "../../utils/getFrequency";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

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

function String({ stringNumber, note }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const frequency = getFrequency(note);

  function stopSound() {
    if (oscillator) oscillator.stop();
    oscillator = null;
    setIsPlaying(false);
  }

  function playSound() {
    stopSound();
    play(frequency, 1e3);
    setIsPlaying(true);
  }

  function playAndStopSound() {
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  }

  return (
    <button className={styles.stringContainer} onClick={playAndStopSound}>
      <div className={styles.stringSet}>
        <p className={styles.stringNumber}>
          {getStringOrdinalFromNumber(stringNumber)} string{" "}
          <span className={styles.note}>{note}</span>
        </p>
        <div
          className={`${styles.string} ${isPlaying ? styles.activeString : ""}`}
        ></div>
      </div>
      {isPlaying ? (
        <PauseIcon
          className={`${styles.playPauseButton} ${styles.playButton}`}
        ></PauseIcon>
      ) : (
        <PlayArrowIcon className={styles.playPauseButton}></PlayArrowIcon>
      )}
    </button>
  );
}

export default String;
