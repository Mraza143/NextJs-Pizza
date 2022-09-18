
import Footer from "./Layout/Footer";



//      <Navbar />

const Layout = ({ children }) => {
  return (
    <>

      {children}

    <Footer/>
    </>
  );
};

export default Layout;