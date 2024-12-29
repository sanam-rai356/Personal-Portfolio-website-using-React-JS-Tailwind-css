import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
