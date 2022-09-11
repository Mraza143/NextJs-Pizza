import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/pizzalo1.jpg" alt="" width="100" height="100" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
          <li className={styles.listItem}>Homepage</li></Link>
          <li className={styles.listItem}>Pizzas</li>
          <li className={styles.listItem}>Deals</li>

        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;