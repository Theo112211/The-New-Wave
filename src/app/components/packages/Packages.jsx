"use client";

import React, { useState } from "react";
// import styles from "../../../app/page.module.css";
import styles from "./packages.module.css";

const Packages = () => {
  const [price, setPrice] = useState("0.00");
  const [size, setSize] = useState("0GB");

  return (
    <div>
      <div className={styles.tray}>
        <h3>Size: {size} </h3>

        <div className={styles.list}>
          <div className={styles.option}>1GB</div>
          <div className={styles.option}>2GB</div>
          <div className={styles.option}>3GB</div>
          <div className={styles.option}>4GB</div>
          <div className={styles.option}>5GB</div>
          <div className={styles.option}>6GB</div>
          <div className={styles.option}>7GB</div>
          <div className={styles.option}>8GB</div>
          <div className={styles.option}>10GB</div>
          <div className={styles.option}>12GB</div>
          <div className={styles.option}>15GB</div>
          <div className={styles.option}>20GB</div>
          <div className={styles.option}>25GB</div>
          <div className={styles.option}>30GB</div>
          <div className={styles.option}>40GB</div>
          <div className={styles.option}>50GB</div>
          <div className={styles.option}>100GB</div>
        </div>

        <h2>₵ {price} </h2>
      </div>
    </div>
  );
};

export default Packages;
