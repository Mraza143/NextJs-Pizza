import Image from "next/image";
import styles from "../../styles/Welcome.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";




const Welcome = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [index, setIndex] = useState(0);
  const handleArrow = () =>{
    if(index==2){
        setIndex(0)
    } else{
        setIndex(index+1);
    }

}
  const images = [
    "/pizza4.jfif",
    "/pizza.jfif",
    "/pizza3.jfif",
  ];
  return (

        <div  className={styles.container}>
            <div className={styles.semitrans}  style={{ background:`url(${images[index]})` , backgroundRepeat:"no-repeat", backgroundSize:"auto"}}></div>

<div className={styles.hello}>
    <img src="/pizzalo1.jpg" alt="" />
    </div>
    <div className={styles.hello1} >
      <div className={styles.midmid}>
    <p  className={styles.text} >Home</p>
    <Link href="#menu" passHref>
    <p  className={styles.text} >Menu</p></Link>
    <Link href="#branches" passHref>
    <p  className={styles.text} >Branches</p>
    </Link>
    <Link href="#deals" passHref>
    <p  className={styles.text} >Deals</p>
    </Link>
    </div>

    
    <div className={styles.cart}>
    <Link href="/cart" passHref>
          <Image src="/cart.png" alt="" width="30px" height="30px" />
          </Link>
          <div className={styles.counter}>{quantity}</div>

        </div>

    </div>


    <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow()}>
        <Image src="/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
    <div className={styles.mid}>
   
        <p>Visit Us For the A amazing time You Would Not Forget</p>
        <h1>
            Unbelivable
        </h1>
        <button>
            Order Now
        </button>
       
    </div>
    <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow()}>
        <Image src="/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>


</div>

       
  );
};

export default Welcome;