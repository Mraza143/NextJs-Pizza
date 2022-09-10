import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <Image src="/pizza2.jpg" alt="" width="500" height="500" />
      <div className={styles.header}>
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <button className={styles.title2}>
      Order Now
      </button>
      </div>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Card;