import styles from "../styles/Pizzas.module.css";
import Card from "./Card"

const Pizzas = ({pizzas}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THESE ARE THE BEST PIZZAS YOU CAN EAT</h1>
     
      <div className={styles.wrapper}>

          {pizzas.map((pizza) => (
          <Card key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Pizzas;