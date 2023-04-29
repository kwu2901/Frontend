import { FunctionComponent } from "react";
import styles from "./Login.module.css";

interface Props {
  onClose: () => void;
  onRegister: () => void;
  onSubmit: (email: string, password: string) => void;
}

const Login: FunctionComponent<Props> = ({ onClose, onRegister, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    onSubmit(email, password);
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
