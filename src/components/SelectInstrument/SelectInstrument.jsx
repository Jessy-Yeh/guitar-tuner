import styles from "../SelectInstrument/SelectInstrument.module.css";

export default function SelectInstrument() {
  return (
    <section className={styles["instrument-container"]}>
      <label className={styles.title} htmlFor="instrument">
        Instrument:
      </label>
      <select className={styles.select} name="instrument" id="instrument">
        <option>guitar</option>
        <option>bass</option>
      </select>
    </section>
  );
}
