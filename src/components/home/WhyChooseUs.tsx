import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Headphones, CreditCard, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Full Insurance", desc: "Comprehensive coverage for peace of mind on every trip." },
  { icon: Clock, title: "24/7 Availability", desc: "Book anytime, pick up or drop off around the clock." },
  { icon: MapPin, title: "Free Delivery", desc: "We deliver your car to any location across the UAE." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support team ready whenever you need help." },
  { icon: CreditCard, title: "Best Prices", desc: "Competitive rates with no hidden fees or surprises." },
  { icon: Award, title: "Premium Fleet", desc: "Well-maintained, late-model vehicles in every category." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-secondary-foreground">
            Why Choose Golden Key
          </h2>
          <p className="text-secondary-foreground/60 max-w-lg mx-auto">
            We combine premium quality with unbeatable service and value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-xl border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 hover:bg-secondary-foreground/5"
            >
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-secondary-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-secondary-foreground/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
