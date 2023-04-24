import { FunctionComponent } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";
import Footer from "./components/Footer";
import styles from "./Frame.module.css";
const Frame: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <Header />
      <div className={styles.divmainWrapper}>
        <div className={styles.sectionbreadcrumbBg}>
          <div className={styles.div}>
            <div className={styles.petAdoption}>Pet Adoption</div>
          </div>
        </div>
        <div className={styles.divcontainer}>
          <Search />
          <Card />
        </div>
        <div className={styles.ulpagination}>
          <div className={styles.spanpageLinkParent}>
            <div className={styles.spanpageLink}>
              <div className={styles.div1}>‹</div>
            </div>
            <div className={styles.div2}>1</div>
            <div className={styles.div3}>2</div>
            <div className={styles.div4}>3</div>
            <div className={styles.div5}>4</div>
            <div className={styles.div6}>5</div>
            <div className={styles.div7}>6</div>
            <div className={styles.div8}>7</div>
            <div className={styles.div9}>8</div>
            <div className={styles.div10}>9</div>
            <div className={styles.div11}>10</div>
            <div className={styles.div12}>
              <div className={styles.div1}>›</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Frame;
