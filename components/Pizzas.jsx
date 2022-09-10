import styles from "../styles/Pizzas.module.css";
import Card from "./Card"

const Pizzas = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THESE ARE THE BEST PIZZAS YOU CAN EAT</h1>
     
      <div className={styles.wrapper}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  );
};

export default Pizzas;