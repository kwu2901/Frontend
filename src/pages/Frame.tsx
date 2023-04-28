import { FunctionComponent } from "react";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";
import Footer from "./components/Footer";
import styles from "./Frame.module.css";

type Cat = {
  cat_name: string;
  age: number;
  breed: string;
  gender: string;
  location: string;
  describe: string;
  image: string;
}

async function fetchFilteredCats(location: string, gender: string, breed: string) {
  const response = await fetch(`https://backend.kwu2901.repl.co/catList?location=${location}&gender=${gender}&breed=${breed}`);
  const data = await response.json();
  return data;
}

const Frame: FunctionComponent = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  function handleSearch(location: string, gender: string, breed: string) {
    fetchFilteredCats(location, gender, breed).then((data) => {
      setCats(data);
    });
  }
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://backend.kwu2901.repl.co/catList');
      const data = await response.json();
      setCats(data);
    }
    fetchData();
  }, []);

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
        <Search onSearch={handleSearch} />
          {cats.map((cat, index) => (
        <Card key={index} cats={cat} />
      ))}
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
