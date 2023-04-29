import { FunctionComponent, useState } from "react";
import styles from "./Login.module.css";
import { User } from "../model/UserModel";

interface Props {
  onClose: () => void;
  onRegister: () => void;
  onLoginSucc: (user: User, token: string) => void;
}

interface LoginResponse {
  token: string;
  user: User;
}

const Login: FunctionComponent<Props> = ({ onClose, onRegister, onLoginSucc }) => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      const response = await fetch("https://backend.kwu2901.repl.co/Login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           email,
           password
         }),
       });
      if (!response.ok) {
        alert("Invalid email or password.");
        return;
      }
      const { token, user }: LoginResponse = await response.json();

      alert("Login Succ!");
      onLoginSucc(user, token);
    } catch (err) {
      console.log(err.message);
      alert("Authentication failed");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h3 className={styles.title}>Login</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className={styles.register}>
          <button onClick={onRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
