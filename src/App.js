import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skils from "./components/Skils";

function App() {
  return (
    <div className="container mx-auto pt-10 bg-gradient-to-tr from-gray-800 to-gray-900">
      <Navbar />
      <Banner />
      <About />
      <Skils />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
