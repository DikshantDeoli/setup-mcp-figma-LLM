import React from "react";
import Header from "../components/Header";
import mainImg from "../assets/main-img.png";
import arrow1 from "../assets/arrow-1.svg";
import styles from "./Home.module.css";
import StatsBlock from "../components/StatsBlock";
import image8 from "../assets/image8.png";
import image7 from "../assets/image7.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";

export default function Home() {
  return (
    <div className={styles.homeBg}>
      <Header variant="home" />
      <main className={styles.mainSection}>
        <section className={styles.heroSection}>
          <div className={styles.heroTextBlock}>
            <h1 className={styles.heroTitle}>
              Straight-Forward <br />Way to financial
            </h1>
            <p className={styles.heroSubtitle}>
              Meet capital, a wonderful and straightforward way of banking. Always track your expenses, insight, and everythings - All in one for free
            </p>
            <div className={styles.ctaRow}>
              <button className={styles.getStartedBtn}>Get Started...</button>
              <a className={styles.seeHowItWorks} href="#how-it-works">
                See how it works <img src={arrow1} alt="Arrow" />
              </a>
            </div>
          </div>
          <div className={styles.heroImageBlock}>
            <img src={mainImg} alt="Main visual" className={styles.heroImage} />
          </div>
        </section>
        <section className={styles.statsSection}>
          <StatsBlock value="1.5 M+" label="Total Download" image={image8} />
          <StatsBlock value="4.35 M+" label="Positive Review" image={image7} />
          <StatsBlock value="0.5 M+" label="Notified Mail" image={image9} />
          <StatsBlock value="0.55 M+" label="Users Worldwide" image={image10} />
        </section>
      </main>
    </div>
  );
} 