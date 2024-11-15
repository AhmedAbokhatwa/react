
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import Home from "./Pages/Home";
function App(props) {
  return (
    <section>
      <Header />
      <Home />
      {/* <h2 className="title text-3xl ">Content {props.title}</h2> */}
      <Footer  />
    </section>
  );
}

export default App;
