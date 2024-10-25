import { motion } from "framer-motion";
import { Satellite, Map, Shield, Car } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-white rounded-full"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.img
            src={logo}
            alt="IO Technologies Logo"
            className="w-full max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Advanced GPS tracking solutions powered by cutting-edge satellite technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white"
            >
              <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Map,
    title: "Real-Time Tracking",
    description: "Monitor your assets in real-time with precise GPS technology",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Protect your vehicles with cutting-edge security features",
  },
  {
    icon: Satellite,
    title: "Satellite Coverage",
    description: "Global coverage with advanced satellite technology",
  },
  {
    icon: Car,
    title: "Fleet Management",
    description: "Comprehensive fleet management and analytics",
  },
];

export default Hero;