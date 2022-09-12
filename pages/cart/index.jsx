import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { reset } from "../../redux/cartSlice";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { useRouter } from "next/router";
import OrderDetail from "../../components/OrderDetail";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  //const [amount, setAmount] = useState(10);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    let c= 0;
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=AWfVQ9Bf0JHlNHN2a7E13dKNqs-pAneiIDS7nd8qFVt-0NMJgTHCuySCWntgk9yI8W90NiyNBsw1JdQ7&disable-funding=credit,card`;
    script.async = true;
    //script.id = 'butttono';

    script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    
// access all elements by class
    //lastEle.parentNode.removeChild(lastEle);
  }, []);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();



  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  
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
            <p  className={styles.imgContainer}>
            
                <Image
                  src={pizza.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
           
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
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          { (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              {scriptLoaded ? (
            <PayPalButton
            
              amount={amount}
              
              onSuccess={(details, data) => {
                //save the transaction
                // console.log(details);
                //addDonationInDB(details.payer.name.given_name);
                const shipping = details.purchase_units[0].shipping;
                createOrder({
                  customer: shipping.name.full_name,
                  address: shipping.address.address_line_1,
                  total: cart.total,
                  method: 1,
                });
              }}
            />
            ) : (
              <span>Loading...</span>
            )}{" "}
            </div>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
    </div>
  );
};

export default Cart;