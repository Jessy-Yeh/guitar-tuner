import { useState } from "react";
import styles from "./Button.module.css";
import getStringOrdinalFromNumber from "../../utils/getStringOrdinalFromNumber";
import audioFile from "../../assets/sounds/test2.mp3";
import audioFile2 from "../../assets/sounds/test1.wav";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

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
    <div className={styles.stringContainer}>
      <div className={styles.stringSet}>
        <p className={styles.stringNumber}>
          {getStringOrdinalFromNumber(stringNumber)} string {note}
        </p>
        <div className={styles.string}></div>
      </div>
      {isPlaying ? (
        <PauseIcon
          className={styles.button}
          onClick={() => {
            if (isPlaying) {
              stopSound();
            } else {
              playSound();
            }
          }}
        ></PauseIcon>
      ) : (
        <PlayArrowIcon
          className={styles.button}
          onClick={() => {
            if (isPlaying) {
              stopSound();
            } else {
              playSound();
            }
          }}
        ></PlayArrowIcon>
      )}
      {/* <button
        className={`${styles.button} ${isPlaying ? styles.active : ""}`}
        onClick={() => {
          if (isPlaying) {
            stopSound();
          } else {
            playSound();
          }
        }}
      > */}
      {/* <p className={styles.note}>{note}</p> */}
      {/* </button> */}
    </div>
  );
}

export default Button;
