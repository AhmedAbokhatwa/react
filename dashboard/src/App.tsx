
import Header from "./Component/Header"
function App(props) {
  return (
    <section>
      <Header />
    
      <h2 className="title">Content {props.title}</h2>
    </section>
  );
}

export default App;
