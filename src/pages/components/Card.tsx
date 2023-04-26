import { FunctionComponent } from "react";
import styles from "./Card.module.css";

type Cat = {
  cat_name: string;
  age: number;
  breed: string;
  gender: string;
  location: string;
  describe: string;
  image: string;
}

type Props = {
  cats: Cat[];
};

const Card: FunctionComponent<Props> = ({ cats }) => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divmedia}>
        <img
          className={styles.adopt23042300010630881324253Icon}
          alt=""
          src="/adopt-230423000106308813242-5386079266jpg@2x.png"
        />
        <div className={styles.divmediaBody}>
          <div className={styles.atextWhite}>
            <a className={styles.a} target="_blank">
              {cats.cat_name}
            </a>
          </div>
          <div className={styles.ullistUnstyled}>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
              <div className={styles.div}>
                {cats.age}
              </div>
            </div>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
              <div className={styles.div}>
                {cats.gender}
              </div>
            </div>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
              <div className={styles.div2}>
                {cats.location}
              </div>
            </div>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon2} alt="" src="/frame3.svg" />
              <div className={styles.div3}>
                {cats.breed}
              </div>
            </div>
          </div>
          <div className={styles.ptextWhite}>
            <div className={styles.div4}>
              {cats.describe}
            </div>
          </div>
          <div className={styles.abtn}>
            <div className={styles.div6}>
              <div className={styles.contactUs}>contact us</div>
            </div>
          </div>
          <button className={styles.inputbtn} autoFocus>
            <div className={styles.edit}>Edit</div>
          </button>
          <button className={styles.inputbtn} autoFocus>
            <img className={styles.inputbtnChild} alt="" src="/star-1.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
