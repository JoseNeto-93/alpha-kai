import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Differentials from "./components/Differentials";
import About from "./components/About";
import Structure from "./components/Structure";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import Counters from "./components/Counters";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic intro preloader screen */}
      <LoadingScreen onFinish={() => setIsLoading(false)} />

      {/* Main Premium Landing Layout rendered together */}
      {!isLoading && (
        <div id="alpha-kai-website" className="overflow-hidden bg-alpha-black text-white relative">
          <Navbar />
          
          <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Differentials Section */}
            <Differentials />

            {/* 3. About Section */}
            <About />

            {/* 4. Structure Slideshow Section */}
            <Structure />

            {/* 5. Animated Counters Section */}
            <Counters />

            {/* 6. Client Testimonials Section */}
            <Testimonials />

            {/* 7. Plans & Membership Prices Section */}
            <Plans />

            {/* 8. Call To Action (Transformation Block) */}
            <CTA />

            {/* 9. Map & Contacts Grid */}
            <Contact />
          </main>

          {/* 10. Footer info & copyrights */}
          <Footer />
        </div>
      )}
    </>
  );
}
