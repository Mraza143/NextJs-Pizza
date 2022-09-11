import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { reset } from "../../redux/cartSlice";
import axios from "axios";
import { useRouter } from "next/router";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div>
        <Navbar/>
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.table}>
          <div className={styles.trTitle}>
            <h2 >Product</h2>
            <h2>Name</h2>
            <h2>Extras</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Total</h2>
          </div>
          {cart.pizzas.map((pizza)=>(
          <div className={styles.tr} key={pizza._id}>
            <p>
              <div className={styles.imgContainer}>
                <Image
                  src={pizza.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </p>
            <p>
              <span className={styles.name}>{pizza.title}</span>
            </p>
            <p>
            <span className={styles.extras}>
                    {pizza.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
            </p>
            <p>
              <span className={styles.price}>{pizza.price}</span>
            </p>
            <p>
              <span className={styles.quantity}>{pizza.quantity}</span>
            </p>
            <p>
              <span className={styles.total}>${pizza.price*pizza.quantity}</span>
            </p>
          </div>
          ))}
          
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