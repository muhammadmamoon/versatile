import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Services from "./components/Services";
import Vision2030 from "./components/Vision2030";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      <Vision2030 />
      <Contact />
      {/* <Footer /> */}
      <FloatingWA />
    </main>
  );
}