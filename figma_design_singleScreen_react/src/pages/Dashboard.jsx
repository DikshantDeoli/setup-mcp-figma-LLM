import React from "react";
import Header from "../components/Header";
import dashboardImage1 from "../assets/dashboard-image1.png";
import dashboardImage2 from "../assets/dashboard-image2.png";
import dashboardSecurity1 from "../assets/dashboard-security1.png";
import dashboardGlobe from "../assets/dashboard-globe.png";
import dashboardBillPayment from "../assets/dashboard-bill-payment.png";
import dashboard1134983 from "../assets/dashboard-1134983.png";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardBg}>
      <Header variant="dashboard" />
      <main className={styles.mainSection}>
        <div className={styles.imagesRow}>
          <img src={dashboardImage1} alt="Dashboard Visual 1" className={styles.dashboardImage} />
          <img src={dashboardImage2} alt="Dashboard Visual 2" className={styles.dashboardImage} />
          <img src={dashboardSecurity1} alt="Security" className={styles.dashboardImage} />
          <img src={dashboardGlobe} alt="Globe" className={styles.dashboardImage} />
          <img src={dashboardBillPayment} alt="Bill Payment" className={styles.dashboardImage} />
          <img src={dashboard1134983} alt="1134983" className={styles.dashboardImage} />
        </div>
      </main>
    </div>
  );
} 