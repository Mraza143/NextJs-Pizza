import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Navbar from "../../components/Navbar";


const Cart = () => {
  return (
    <div>
        <Navbar/>
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.table}>
          <div className={styles.trTitle}>
            <h2>Product</h2>
            <h2>Name</h2>
            <h2>Extras</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Total</h2>
          </div>
          <div className={styles.tr}>
            <p>
              <div className={styles.imgContainer}>
                <Image
                  src="/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </p>
            <p>
              <span className={styles.name}>CORALZO</span>
            </p>
            <p>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </p>
            <p>
              <span className={styles.price}>$19.90</span>
            </p>
            <p>
              <span className={styles.quantity}>2</span>
            </p>
            <p>
              <span className={styles.total}>$39.80</span>
            </p>
          </div>
          <div className={styles.tr}>
            <p>
              <div className={styles.imgContainer}>
                <Image
                  src="/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </p>
            <p>
              <span className={styles.name}>CORALZO</span>
            </p>
            <p>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </p>
            <p>
              <span className={styles.price}>$19.90</span>
            </p>
            <p>
              <span className={styles.quantity}>2</span>
            </p>
            <p>
              <span className={styles.total}>$39.80</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;