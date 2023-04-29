import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "./Header.module.css";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSubmit = (email: string, password: string) => {
    // Call API to log in user
    // ...
    // If successful, hide login modal
    setShowLogin(false);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

    const handleRegisterClose = () => {
    setShowRegister(false);
  };

  return (
    <div className={styles.headerpagetop}>
      <div className={styles.navnavbar}>
        <div className={styles.divcontainer}>
          <i className={styles.thePetShelter}>The Pet Shelter</i>
          <div className={styles.ulnavbarNav}>
            <div className={styles.anavLink}>
              <img
                className={styles.ifaEyeIcon}
                alt=""
                src="/ifaeye.svg"
              />
              <div className={styles.span}>
                <div className={styles.message}>message</div>
              </div>
            </div>
            <div className={styles.anavLink1}>
              <img
                className={styles.ifaEyeIcon}
                alt=""
                src="/ifaheart.svg"
              />
              <div className={styles.span1}>
                <div className={styles.message}>favourites</div>
              </div>
            </div>
            <div className={styles.anavLink2}>
              <img
                className={styles.ifaEyeIcon}
                alt=""
                src="/ifauser.svg"
                onClick={() => setShowLogin(true)}
              />
              <div className={styles.spanjumpText}>
                <div className={styles.signUp}>sign up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogin && (
        <Login
          onClose={handleLoginClose}
          onRegister={handleRegisterClick}
          onSubmit={handleLoginSubmit}
        />
      )}
      {showRegister && (
        <Register 
          onClose={handleRegisterClose}
        />
      )}
    </div>
  );
};

export default Header;
