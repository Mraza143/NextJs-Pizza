import Image from "next/image";
import styles from "../styles/Welcome.module.css";
import { useState } from "react";

const Welcome = () => {
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
        <p  className={styles.text} >Home</p>
    <p  className={styles.text} >Menu</p>
    <p  className={styles.text} >Catering</p>
    <p  className={styles.text} >Location</p></div>
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