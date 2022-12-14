import styles from "../../styles/Orders.module.css";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import axios from "axios";


const Orders = ({order}) => {
  //const status = 0;
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div>
      <Navbar/>

    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
        <div className={styles.table}>
            <div className={styles.trTitle}>
              <h2>Order ID</h2>
              <h2>Customer</h2>
              <h2>Address</h2>
              <h2>Total</h2>
            </div>
            <div className={styles.tr}>
              <p>
                <span className={styles.id}>{order._id}</span>
              </p>
              <p>
                <span className={styles.name}>{order.customer}</span>
              </p>
              <p>
                <span className={styles.address}>{order.address}</span>
              </p>
              <p>
                <span className={styles.total}>{order.total}</span>
              </p>
            </div>

          </div>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/paid.png" width={30} height={30} alt="" />
            <span className={styles.span} >Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/bake.png" width={30} height={30} alt="" />
            <span className={styles.span} >Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/bike.png" width={30} height={30} alt="" />
            <span className={styles.span}>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/delivered.png" width={30} height={30} alt="" />
            <span className={styles.span} >Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>{order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>{order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Orders;