import Head from 'next/head'
import Image from 'next/image'
import Branches from '../components/Home/Branches'
import SpecialDeal from '../components/SpecialDeal'
import Welcome from '../components/Home/Welcome'
import styles from '../styles/Home.module.css'
import Pizzas from '../components/Pizzas'
import Menu from '../components/Home/Menu'
import AddButton from "../components/AddButton";
import axios from 'axios'
import { useState } from 'react'
import AddPizza from '../components/AddPizza'
import BranchesHeading from '../components/Home/BranchesHeading'

export default function Home({pizzas ,admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
       <Head>
        <title>Pizza Restaurant in Karachi</title>
        <meta name="description" content="Best pizza shop in Karachi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome/>
      <SpecialDeal/> 
      <Menu/>
      {<AddButton setClose={setClose} />}
      <Pizzas pizzas={pizzas}/>
      {!close && <AddPizza setClose={setClose} />}
      <BranchesHeading/>
      <Branches/>


      
    </div>
  );
}

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }


  const res = await axios.get("http://localhost:3000/api/pizzas");
  return {
    props: {
      pizzas: res.data,
      admin
    },
  };
};
