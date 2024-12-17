import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Herosection = () => {
  return (
    <div>
      <Image
        src="/mtn.jpg"
        className={styles.herobg}
        alt="mtnlogo"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Herosection;
