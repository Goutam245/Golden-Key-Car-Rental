import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Trophy, DollarSign, Car, Shield, ArrowRight,
  Smile, MapPin, Star, Award, CheckCircle,
  Linkedin
} from "lucide-react";

const stats = [
  { icon: Car, value: "200+", label: "Vehicles in Fleet" },
  { icon: Smile, value: "50K+", label: "Happy Customers" },
  { icon: MapPin, value: "15+", label: "Pickup Locations" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
];

const whyCards = [
  {
    icon: Trophy,
    title: "Quality Fleet",
    subtitle: "200+ Premium Vehicles",
    desc: "All cars are regularly maintained and sanitized. From economy to luxury, we have the perfect ride for every occasion.",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    subtitle: "Guaranteed Lowest Rates",
    desc: "Price match guarantee and transparent pricing with no hidden fees. Early payment discounts up to 15%.",
  },
  {
    icon: Car,
    title: "Free Delivery",
    subtitle: "Doorstep Delivery & Pickup",
    desc: "We deliver cars to your location across UAE — airport, hotel, or home. Completely free of charge.",
  },
  {
    icon: Shield,
    title: "Full Insurance",
    subtitle: "Comprehensive Coverage",
    desc: "All rentals include full insurance coverage and 24/7 roadside assistance for complete peace of mind.",
  },
];

const team = [
  { name: "Ahmed Al Rashid", position: "Founder & CEO", quote: "Customer satisfaction is our driving force" },
  { name: "Fatima Hassan", position: "Operations Manager", quote: "Excellence in every detail" },
  { name: "Mohammed Saleh", position: "Customer Success Lead", quote: "Your journey is our priority" },
];

const certifications = [
  "ISO 9001:2015 Certified",
  "UAE Ministry of Tourism Approved",
  "Best Car Rental Service 2024",
  "Customer Choice Award 2023",
];

const partners = [
  "Dubai Tourism Board", "Abu Dhabi Airports", "Emirates Airlines",
  "Etihad Airways", "Burj Al Arab", "Atlantis The Palm",
  "Visa", "Mastercard", "PayPal",
];

const milestones = [
  "50,000+ Happy Customers",
  "4.9/5 Average Rating",
  "98% Customer Retention Rate",
  "24/7 Customer Support",
  "ISO 9001:2015 Certified",
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl px-4 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-3 mb-4 tracking-tight">
              Driving Excellence Since 2015
            </h1>
            <p className="text-secondary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Your Trusted Partner for Premium Car Rentals in UAE
            </p>
            <p className="text-secondary-foreground/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Golden Key Car Rental has been serving the UAE with premium vehicle rental services since 2015. 
              With a fleet of over 200 vehicles and 50,000+ satisfied customers, we've become the most trusted 
              name in car rentals across Dubai, Abu Dhabi, and Sharjah.
            </p>
            <Button className="gold-gradient text-secondary font-semibold px-8 hover:opacity-90" asChild>
              <Link to="/fleet">Explore Our Fleet <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[3/2] bg-gradient-to-br from-secondary/80 to-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <Car className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-secondary-foreground/70 text-sm">Premium Car Showroom</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 tracking-tight">
                From 5 Cars to 200+
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as a small family business with just 5 cars has grown into the UAE's leading car rental service. 
                Our commitment to quality, transparency, and customer satisfaction has earned us:
              </p>
              <ul className="space-y-3 mb-6">
                {milestones.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{m}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-4 p-5 bg-muted rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Our Mission:</p>
                  <p className="text-sm text-muted-foreground italic">
                    "To provide seamless, affordable, and premium car rental experiences that exceed expectations every single time."
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Our Vision:</p>
                  <p className="text-sm text-muted-foreground italic">
                    "To become the Middle East's most customer-centric car rental company by 2030."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Golden Key */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-foreground tracking-tight">
              Why Choose Golden Key
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-luxury p-6 text-center"
              >
                <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{c.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Statistics */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <s.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-4xl md:text-5xl font-bold gold-gradient-text mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-secondary-foreground tracking-tight">
              Meet Our Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-secondary-foreground/5 rounded-xl p-6 text-center border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary mx-auto mb-4 flex items-center justify-center group-hover:from-primary/50 transition-all">
                  <span className="text-3xl font-bold text-secondary-foreground/60">{t.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-secondary-foreground mb-1">{t.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{t.position}</p>
                <p className="text-sm text-secondary-foreground/50 italic">"{t.quote}"</p>
                <Linkedin className="w-5 h-5 text-secondary-foreground/30 hover:text-primary mx-auto mt-4 cursor-pointer transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground tracking-tight">
              Our Trusted Partners
            </h2>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-4 bg-muted rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all cursor-default"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Recognition</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground tracking-tight">
              Certifications & Awards
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
