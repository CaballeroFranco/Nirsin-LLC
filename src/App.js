/* import { gsap } from "gsap"; */
import { BrowserRouter as Router } from "react-router-dom";

/* STYLES */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* COMPONENTS */
/* import Header from "./components/Header"; */
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <AboutUs />
        <Cards />
        <Services />
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
