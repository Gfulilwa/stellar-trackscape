import { motion } from "framer-motion";
import { Camera, Play, Globe, Monitor } from "lucide-react";
import vision247Img from "../assets/vision247.png";

const Vision247 = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-900/50 to-indigo-950/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Vision 247
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={vision247Img}
              alt="Vision 247 Security System"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Secure Your Environment
              </h3>
              <p className="text-gray-300">
                A good level of assurance of a secure environment - be it for personal or for your business
                allows you to have a clear mind to focus on other aspects of your life or business.
                The vision 247 service can also be monitored by our mission control centre.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <feature.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Monitor,
    title: "Secure Web Visibility",
    description: "Automated Snapshots for enhanced monitoring"
  },
  {
    icon: Play,
    title: "Playback Capability",
    description: "Automated Reports for detailed analysis"
  },
  {
    icon: Globe,
    title: "Deploy at any Location",
    description: "Flexible geographical deployment options"
  },
  {
    icon: Camera,
    title: "24/7 Monitoring",
    description: "Continuous surveillance and security"
  }
];

export default Vision247;