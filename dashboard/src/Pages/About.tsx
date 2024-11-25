import Header from "../Component/Header";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
function About() {
  return (
    <section>
    <Navbar />  
    <Home />
    <Shop />
    <Cart />
    <Footer  />
  </section>
  );
}
export default About;
