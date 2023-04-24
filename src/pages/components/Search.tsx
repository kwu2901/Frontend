import { FunctionComponent } from "react";
import styles from "./Search.module.css";
const Divrow: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.selectarea}>
        <div className={styles.div}>
          <div className={styles.location}>Location</div>
        </div>
      </div>
      <div className={styles.selectsex}>
        <div className={styles.div1}>
          <div className={styles.gender}>Gender</div>
        </div>
      </div>
      <div className={styles.selectanimal}>
        <div className={styles.div1}>
          <div className={styles.gender}>Breed</div>
        </div>
      </div>
      <button className={styles.inputbtn} autoFocus>
        <div className={styles.search}>Search</div>
      </button>
      <button className={styles.inputbtn1} autoFocus>
        <div className={styles.search}>Add</div>
      </button>
    </div>
  );
};

export default Divrow;
