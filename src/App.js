import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Mock from "./components/Mock";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
