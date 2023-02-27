import { useState } from "react";
import styles from "./String.module.css";
import getStringOrdinalFromNumber from "../../utils/getStringOrdinalFromNumber";
import audioFile from "../../assets/sounds/test2.mp3";
import audioFile2 from "../../assets/sounds/test1.wav";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const E4 = new Audio(audioFile);
const B3 = new Audio(audioFile2);

function String({ stringNumber, note }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioList = [E4, B3, E4, B3, E4, B3];
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

  function playAndStopSound() {
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  }

  return (
    <li>
      <button className={styles.stringContainer} onClick={playAndStopSound}>
        <div className={styles.stringSet}>
          <p className={styles.stringNumber}>
            {getStringOrdinalFromNumber(stringNumber)} string{" "}
            <span className={styles.note}>{note}</span>
          </p>
          <div
            className={`${styles.string} ${
              isPlaying ? styles.activeString : ""
            }`}
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
    </li>
  );
}

export default String;
