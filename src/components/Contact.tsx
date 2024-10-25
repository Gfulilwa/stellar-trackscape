import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-black/40 backdrop-blur-lg" id="contact">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Contact Us
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-300">House No 34B Musasa Avenue, CEC Village, Kitwe</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-300">+260 771 922306</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-300">admin@packet-v.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;