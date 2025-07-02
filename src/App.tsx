import "./App.css";
import About from "./About/About";
import Hero from "./pages/hero";
import Navbar from "./navbar/Navbar";
import Services from "./pages/Services";
import Integrations from "./integrations/Integrations";
import Riview from "./riview/Riview";

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
      </div>
    </>
  );
}

export default App;
