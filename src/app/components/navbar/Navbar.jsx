import React from "react";
import styles from "../../page.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoLogoAndroid } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className={styles.nav}>
        <h1>
          <IoLogoAndroid className={styles.logo} />
        </h1>

        <div className={styles.menu}>
          <a className={styles.link}>Home</a>
          <a className={styles.link}>Shop</a>
          <a className={styles.link}>Cart</a>
          <a className={styles.link}>Checkout</a>
        </div>

        <div>
          <CiMenuFries className={styles.menuico} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
