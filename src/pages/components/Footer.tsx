import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footerfooterBgImg}>
      <div className={styles.divrow}>
        <div className={styles.divcol} />
        <div className={styles.divcol1} />
        <div className={styles.divcol2} />
        <div className={styles.divcol3} />
        <div className={styles.divcol4} />
        <div className={styles.divcol5} />
        <div className={styles.divcol} />
        <div className={styles.divcol1} />
        <div className={styles.divcol2} />
        <div className={styles.divcol3} />
        <div className={styles.divcol4} />
        <div className={styles.divcol5} />
      </div>
      <img
        className={styles.divcopyrightIcon}
        alt=""
        src="/divcopyright@2x.png"
      />
    </div>
  );
};

export default Footer;
