import React from "react";
import homeHeaderLogo from "../assets/home-header-logo.png";
import headerLogo from "../assets/header-logo.png";
import styles from "./Header.module.css";

export default function Header({ variant = "home" }) {
  // Variant: 'home', 'login', 'dashboard', etc.
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img
          src={variant === "home" ? homeHeaderLogo : headerLogo}
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navLinks}>
        <a className={styles.link} href="#home">Home</a>
        <span className={styles.line} />
        <a className={styles.link} href="#feature">Feature</a>
        <span className={styles.line} />
        <a className={styles.link} href="#about">About</a>
      </nav>
      {variant === "home" && (
        <div className={styles.signupBtnWrapper}>
          <button className={styles.signupBtn}>SignUp</button>
        </div>
      )}
    </header>
  );
} 