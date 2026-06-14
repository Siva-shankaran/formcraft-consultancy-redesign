import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Features from "../components/Features";

function Home() {
  return (
 <>
  <Navbar />
  <Hero />
  <About />
  <Features />

  <Services />
  <Portfolio />
  <Contact />
  <Footer />
</>
  );
}

export default Home;