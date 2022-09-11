import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";

const Card = ({pizza}) => {
  return (
    <div className={styles.container}>
       <Link href={`/pizza/${pizza._id}`} passHref>
      <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <div className={styles.header}>
      <h1 className={styles.title}>{pizza.title}</h1>
      <button className={styles.title2}>
      Order Now
      </button>
      </div>
      <span className={styles.price}>{pizza.prices[0]}</span>
      <p className={styles.desc}>
        {pizza.desc}
      </p>
    </div>
  );
};

export default Card;