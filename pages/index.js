import Head from 'next/head'
import Image from 'next/image'
import Branches from '../components/Branches'
import SpecialDeal from '../components/SpecialDeal'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'
import Pizzas from '../components/Pizzas'
import Menu from '../components/Menu'
import axios from 'axios'

export default function Home({pizzas}) {
  return (
    <div className={styles.container}>
       <Head>
        <title>Pizza Restaurant in Karachi</title>
        <meta name="description" content="Best pizza shop in Karachi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome/>
      <Branches/>      
      <Menu/>
      <Pizzas pizzas={pizzas}/>
      <SpecialDeal/>


      
    </div>
  );
}

export const getServerSideProps = async (ctx) => {


  const res = await axios.get("http://localhost:3000/api/pizzas");
  return {
    props: {
      pizzas: res.data,
    },
  };
};
