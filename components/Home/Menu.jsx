import Image from "next/image";
import styles from "../../styles/Welcome.module.css";
import { useState } from "react";

const Menu = () => {
  return (

        <div  className={styles.container} id="menu">
            <div className={styles.semitrans}></div>

    <div className={styles.midmenu}>

        <h1>
            Menu
        </h1>

       
    </div>
</div>       
  );
};

export default Menu;