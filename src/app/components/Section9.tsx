"use client";

import styles from "./Section9.module.css";

export default function Section9() {
  return (
    <section className={styles.citiesSection}>
      <p className={styles.title}>
        <strong>Operational Cities :</strong>
      </p>
      <div className={styles.citiesList}>
        <span>Lucknow</span>
        <span>Ayodhya</span>
        <span>Gorakhpur</span>
        <span>Varanasi</span>
        <span>Allahabad (Prayagraj)</span>
        <span>Kanpur</span>
      </div>
    </section>
  );
}
