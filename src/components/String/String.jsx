import styles from "./String.module.css";
import getStringOrdinalFromNumber from "../../utils/getStringOrdinalFromNumber";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

function String({ stringNumber, note, playSound, stopSound, isPlaying }) {
  function toggleSound() {
    if (isPlaying) {
      stopSound();
    } else {
      playSound(note);
    }
  }

  return (
    <li>
      <button className={styles.stringContainer} onClick={toggleSound}>
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
          />
        ) : (
          <PlayArrowIcon className={styles.playPauseButton} />
        )}
      </button>
    </li>
  );
}

export default String;
