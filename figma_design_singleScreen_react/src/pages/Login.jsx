import React from "react";
import Header from "../components/Header";
import loginImage from "../assets/login-image1.png";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginBg}>
      <Header variant="login" />
      <main className={styles.mainSection}>
        <div className={styles.leftImageBlock}>
          <img src={loginImage} alt="Login Visual" className={styles.loginImage} />
        </div>
        <div className={styles.formBlock}>
          <h1 className={styles.welcomeTitle}>Welcome To ксарыянт</h1>
          <p className={styles.subtitle}>Log in to access your account</p>
          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="email">Email</label>
              <input className={styles.input} id="email" type="email" placeholder="Email" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="password">Password</label>
              <input className={styles.input} id="password" type="password" placeholder="Password" />
            </div>
            <button className={styles.loginBtn} type="submit">Login</button>
            <a className={styles.cantLogin} href="#">Can’t Login?</a>
          </form>
        </div>
      </main>
    </div>
  );
} 