import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.leftFooter}>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>

        <img src="/playstore.png" alt="playstore"/>
        <img src="/Appstore.png" alt="appstore"/>

      </div>

      <div  className={styles.midFooter} >
        <h1>PIZZA ITALIANO</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2021 &copy; mraza</p>
      </div>

      <div  className={styles.rightFooter}>
        <h4>Follow Us</h4>
        <Link href="/">Instagram</Link>
        <Link href="/">Youtube</Link>
        <Link href="/">Facebook</Link>
      </div>

    </footer>
  );
};

export default Footer;