import Image from "next/image";
import styles from "../styles/Welcome.module.css";
import { useState } from "react";

const BranchesHeading = () => {
  return (

        <div  className={styles.container} id="menu">
            <div className={styles.semitrans}></div>

    <div className={styles.midmenu}>

        <h1 style={{ marginRight: "25rem" }}>
            Branches
        </h1>

       
    </div>
</div>       
  );
};

export default BranchesHeading;