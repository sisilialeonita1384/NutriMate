import Image from "next/image";
import Hero from "./components/Hero";
import HealthyLifestyle from "./components/HealthyLifestyle";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HealthyLifestyle />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
