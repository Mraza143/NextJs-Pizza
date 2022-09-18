import Image from "next/image";
import styles from "../../styles/Card.module.css";

const LocationCard = () => {
  return (
    <div className={styles.container}>
  <Image src="/hut2.jfif" alt="" width="500" height="500"  style={{ backgroundSize: "cover" }}  />
      <div className={styles.header}>
      <h1 className={styles.title}>Safoora Branch</h1>
      <button className={styles.title2}>
      Visit Now
      </button>
      </div>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default LocationCard;