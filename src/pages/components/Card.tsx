import { FunctionComponent } from "react";
import styles from "./Card.module.css";
const Divrow1: FunctionComponent = () => {
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
            <a
              className={styles.a}
              href="https://wepet.tw/%E9%A0%98%E9%A4%8A%E8%B3%87%E8%A8%8A-230423000106308813242"
              target="_blank"
            >
              初一
            </a>
          </div>
          <div className={styles.ullistUnstyled}>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
              <div className={styles.div}>貓</div>
            </div>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
              <div className={styles.div}>母</div>
            </div>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
              <div className={styles.div2}>彰化縣</div>
            </div>
            <div className={styles.litextWhite}>
              <img className={styles.frameIcon2} alt="" src="/frame3.svg" />
              <div className={styles.div3}>幼年小型米克斯</div>
            </div>
          </div>
          <div className={styles.ptextWhite}>
            <div className={styles.div4}>
              眼睛一眼有感染但已看獸醫健康狀況良
            </div>
            <div className={styles.div}>好</div>
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

export default Divrow1;
