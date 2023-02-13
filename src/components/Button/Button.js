import { useState } from "react";
import styles from "./Button.module.css";
import getStringOrdinalFromNumber from "../../utils/getStringOrdinalFromNumber";
import audioFile from "../../assets/sounds/test2.mp3";
import audioFile2 from "../../assets/sounds/test1.wav";

const E4 = new Audio(audioFile);
const B3 = new Audio(audioFile2);

function Button({ stringNumber, note }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioList = [E4, B3];
  const audioIndex = Number(stringNumber) - 1;
  const audio = audioList[audioIndex];

  function playSound() {
    audio.play();
    setIsPlaying(true);

    audio.onended = () => {
      setIsPlaying(false);
    };
  }

  function stopSound() {
    audio.pause();
    setIsPlaying(false);
  }

  return (
    <div>
      <button
        className={`${styles.button} ${isPlaying ? styles.active : ""}`}
        onClick={() => {
          if (isPlaying) {
            stopSound();
          } else {
            playSound();
          }
        }}
      >
        <p className={styles.stringNumber}>
          {getStringOrdinalFromNumber(stringNumber)} string
        </p>
        <p className={styles.note}>{note}</p>
      </button>
    </div>
  );
}

export default Button;
