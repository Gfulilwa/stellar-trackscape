import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Vision247 from "@/components/Vision247";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 overflow-hidden">
      <Hero />
      <Features />
      <Products />
      <Vision247 />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;