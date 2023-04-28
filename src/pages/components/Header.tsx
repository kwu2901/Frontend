import { FunctionComponent } from "react";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <div className={styles.headerpagetop}>
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
      <div className={styles.navnavbar}>
        <div className={styles.divcontainer}>
          <i className={styles.thePetShelter}>The Pet Shelter</i>
          <div className={styles.ulnavbarNav}>
            <div className={styles.anavLink}>
              <img className={styles.ifaEyeIcon} alt="" src="/ifaeye.svg" />
              <div className={styles.span}>
                <div className={styles.message}>message</div>
              </div>
            </div>
            <div className={styles.anavLink1}>
              <img className={styles.ifaEyeIcon} alt="" src="/ifaheart.svg" />
              <div className={styles.span1}>
                <div className={styles.message}>favourites</div>
              </div>
            </div>
            <div className={styles.anavLink2}>
              <img className={styles.ifaEyeIcon} alt="" src="/ifauser.svg" />
              <div className={styles.spanjumpText}>
                <div className={styles.signUp}>sign up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
