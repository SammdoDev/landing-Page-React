import "./App.css";
import About from "./About/About";
import Hero from "./pages/Header";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import Integrations from "./pages/Integrations";
import Riview from "./pages/Riview";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <div
        style={{ fontFamily: "'Roboto', Sans-Serif" }}
        className="w-full h-screen"
      >
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Integrations />
        <Riview />
        <Footer/>
      </div>
    </>
  );
}

export default App;