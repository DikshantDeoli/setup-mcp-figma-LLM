import React from "react";
import styles from "./StatsBlock.module.css";

export default function StatsBlock({ value, label, image }) {
  return (
    <div className={styles.statsBlock}>
      {image && <img src={image} alt="" className={styles.statsImage} />}
      <div className={styles.statsTextBlock}>
        <div className={styles.statsValue}>{value}</div>
        <div className={styles.statsLabel}>{label}</div>
      </div>
    </div>
  );
} 