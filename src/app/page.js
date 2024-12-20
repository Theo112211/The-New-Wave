import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Herosection from "./components/herosection/Herosection";
import Packages from "./components/packages/Packages";

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <div className={styles.text}>
          {" "}
          <b>We are open.</b>{" "}
          <p>
            For support, WhatsApp <br />
            <b>
              {" "}
              <em> +233 53 130 6402 OR +233 54 597 3939</em>
            </b>{" "}
          </p>
          Thank you.
        </div>
      </div>
        <div className={styles.navbardiv}>
          <Navbar />
        </div>
        <div className={styles.herodiv}>
          <Herosection />
        </div>
      <div className={styles.holder}>
        <div className={styles.wrapper}>
          <div className={styles.label}>Home / Data / MTN</div>
          <div className={styles.label1}>Data</div>
          <h2 className={styles.label2}>MTN</h2>
          <h3 className={styles.range}>₵4.50 - ₵395.00</h3>
        </div>
        <div className={styles.packages}>
          <Packages />
        </div>
      </div>
      
    </div>
  );
}
