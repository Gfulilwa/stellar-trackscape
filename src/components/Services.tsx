import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-950/50 to-purple-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Basic Tracking",
    description: "Essential GPS tracking features for small businesses",
    features: [
      "Real-time location tracking",
      "Basic reporting",
      "Mobile app access",
      "Email support"
    ]
  },
  {
    title: "Professional Fleet",
    description: "Advanced fleet management solution for medium businesses",
    features: [
      "All Basic features",
      "Fleet optimization",
      "Fuel monitoring",
      "24/7 support"
    ]
  },
  {
    title: "Enterprise Solution",
    description: "Complete tracking and management system for large organizations",
    features: [
      "All Professional features",
      "Custom integration",
      "Advanced analytics",
      "Dedicated account manager"
    ]
  }
];

export default Services;