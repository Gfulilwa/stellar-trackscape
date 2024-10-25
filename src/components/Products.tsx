import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lock, Brain, Shield, Fingerprint, Smartphone, Cpu, Key, Wifi } from "lucide-react";

const Products = () => {
  return (
    <section className="py-24 bg-black/40 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Smart Security Solutions
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lock className="w-6 h-6 text-blue-400" />
                  Smart Locks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {smartLocks.map((lock, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <lock.icon className="w-6 h-6 text-blue-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{lock.name}</h4>
                        <p className="text-gray-400">{lock.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-6 h-6 text-blue-400" />
                  AI Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {aiSolutions.map((solution, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <solution.icon className="w-6 h-6 text-blue-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{solution.name}</h4>
                        <p className="text-gray-400">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const smartLocks = [
  {
    icon: Key,
    name: "JoinTech JT701 Smart Lock",
    description: "Premium fingerprint door lock with WiFi connectivity, supporting up to 100 fingerprints and featuring a sleek touchscreen keypad."
  },
  {
    icon: Wifi,
    name: "JT701 WiFi Gateway",
    description: "Connect your JT701 lock to the internet for remote access, real-time monitoring, and smartphone control via the TTLock app."
  },
  {
    icon: Smartphone,
    name: "TTLock Smart Access",
    description: "Manage your JT701 lock remotely, generate time-based access codes, and view access logs through our intuitive mobile app."
  }
];

const aiSolutions = [
  {
    icon: Brain,
    name: "Behavioral Analysis",
    description: "AI-powered system that learns and adapts to user patterns for enhanced security."
  },
  {
    icon: Shield,
    name: "Threat Detection",
    description: "Real-time threat assessment using machine learning algorithms to prevent unauthorized access."
  },
  {
    icon: Cpu,
    name: "Smart Integration",
    description: "Seamless integration with existing security systems through our advanced AI platform."
  }
];

export default Products;
