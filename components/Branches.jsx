import styles from "../styles/Branches.module.css";
import LocationCard from "./LocationCard";


const Branches = () => {
  return (

    <div className={styles.container}>
    <h1 className={styles.title}>OUR BRANCHES</h1>
   
    <div className={styles.wrapper}>
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
    </div>
  </div>
       
  );
};

export default Branches;