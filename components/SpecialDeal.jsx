import styles from "../styles/SpecialDeal.module.css";

const SpecialDeal = () => {
  return (

        <section className={styles.container} id="deals">
           <div className={styles.uppertext}>
            <h2>Special Offers</h2>
           
           </div>

           <div className={styles.container1}>
           <div className={styles.card}>
    <div className={styles.cardheader}>
      <img src="/pizza4.jfif" alt="rover" />
    </div>
    <div className={styles.cardbody}>
      <span className={styles.tag}>2 Large  Fajita Pizza + 3 sauces + Drinks + Chicken Wings</span>
      <h4>

        Well Well Well deal
      </h4>
      <h3>
        1200 pkr
      </h3>
     
    </div>
  </div>
           <div className={styles.card}>
    <div className={styles.cardheader}>
      <img src="/pizza2.jpg" alt="rover" />
    </div>
    <div className={styles.cardbody}>
      <span className={styles.tag}>3 Regular  Tikka Pizza + 3 sauces + Drinks</span>
      <h4>
        Dhani  Deal

      </h4>
      <h3>
        1200 pkr
      </h3>

    
      
    </div>
  </div>
  <div className={styles.card}>
    <div className={styles.cardheader}>
      <img src="pizza.jfif" alt="rover" />
    </div>
    <div className={styles.cardbody}>
      <span className={styles.tag}>1 Jumbo Arabic Ranch + 3 sauces + Drinks</span>
      <h4>
        WLovin it deal
      </h4>
      <h3>
        1200 pkr
      </h3>

     
    </div>
  </div>
  
 
  </div>

</section>

       
  );
};

export default SpecialDeal;