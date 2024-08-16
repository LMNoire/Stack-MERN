import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import WorkoutSessions from "../src/components/WorkoutSessions";
import Gallery from "../src/components/Gallery";
import Pricing from "../src/components/Pricing";
import BMICalculator from "../src/components/BMICalculator";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
