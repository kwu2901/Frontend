import { FunctionComponent } from "react";
import styles from "./Add.module.css";
import { User } from "../model/UserModel";
import Button from "./Button";

interface Props {
  onClose: () => void;
}

const Add: FunctionComponent<Props> = ({ onClose }) => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const image = event.currentTarget.email.value;
    const name = event.currentTarget.password.value;
    const age = event.currentTarget.email.value;
    const gender = event.currentTarget.password.value;
    const location = event.currentTarget.email.value;
    const breed = event.currentTarget.password.value;
    const describe = event.currentTarget.email.value;

    try {
      //const response = await fetch("https://backend.kwu2901.repl.co/Login", {
      //  method: "POST",
      //  headers: { "Content-Type": "application/json" },
      //  body: JSON.stringify({
      //    email,
      //    password
      //  }),
      //});
      //if (!response.ok) {
      //  alert("Invalid email or password.");
      //  return;
      //}
      //const { token, user }: LoginResponse = await response.json();
      //localStorage.setItem("token", token);
      //localStorage.setItem("user", JSON.stringify(user));
      //alert("Login Succ!");
      //onLoginSucc();
    } catch (err) {
      //console.log(err.message);
      //alert("Authentication failed");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h3 className={styles.title}>Edit</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="image">Image:</label>
            <input type="image" id="image" name="image" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Cat Name:</label>
            <input type="name" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="age">Age:</label>
            <input type="age" id="age" name="age" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="gender">Gender:</label>
            <input type="gender" id="gender" name="gender" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="location">Location:</label>
            <input type="location" id="location" name="location" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="breed">Breed:</label>
            <input type="breed" id="breed" name="breed" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="describe">Describe:</label>
            <input type="describe" id="describe" name="describe" required />
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>

        <div className={styles.register}>
          <button >Del</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
