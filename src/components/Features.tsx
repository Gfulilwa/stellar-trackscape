import { motion } from "framer-motion";
import { Satellite, Shield, Map, Car, Cloud, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 bg-black/40 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Advanced Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10 hover:border-white/20 transition-colors"
            >
              <feature.icon className="w-12 h-12 mb-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Satellite,
    title: "Global Coverage",
    description: "Worldwide satellite coverage ensuring your assets are tracked anywhere on the planet."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Military-grade encryption and security protocols to protect your data."
  },
  {
    icon: Map,
    title: "Real-time Tracking",
    description: "Live location updates and route optimization with precision accuracy."
  },
  {
    icon: Car,
    title: "Fleet Management",
    description: "Comprehensive fleet management system with predictive maintenance."
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    description: "Secure cloud-based platform for seamless data access and management."
  },
  {
    icon: Zap,
    title: "Quick Alerts",
    description: "Instant notifications for critical events and status updates."
  }
];

export default Features;