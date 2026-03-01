import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  { name: "Ahmed Al Mansouri", role: "Business Executive, Dubai", text: "Golden Key provided an exceptional S-Class for my Dubai meetings. Flawless service from booking to return. Highly recommended!", rating: 5 },
  { name: "Sarah Johnson", role: "Tourist, UK", text: "Rented a Land Cruiser for our desert safari trip. The car was spotless and the team was incredibly helpful. Best rental experience in UAE!", rating: 5 },
  { name: "Mohammed Al Rashid", role: "Regular Customer, Abu Dhabi", text: "I've been using Golden Key for over two years. Their fleet quality, competitive pricing, and customer service are unmatched.", rating: 5 },
  { name: "Rajesh Kumar", role: "CEO, Tech Company", text: "Needed a car urgently for a business trip. Golden Key delivered a Mercedes E-Class to my hotel within 2 hours. Outstanding!", rating: 5 },
  { name: "Maria Santos", role: "Resident, Sharjah", text: "Rented an economy car for a month. Great rates, clean vehicle, and hassle-free process. Will definitely use again!", rating: 5 },
  { name: "David & Emma Wilson", role: "Tourists, Australia", text: "The luxury convertible I rented was perfect for celebrating my anniversary. Staff went above and beyond!", rating: 5 },
  { name: "Lee Chen", role: "HR Manager, Singapore", text: "Corporate rental for our team of 20. Golden Key provided excellent vehicles and flexible terms. Highly professional!", rating: 5 },
  { name: "Michael Brown", role: "Business Traveler, USA", text: "Airport pickup was seamless. Car was ready, paperwork took 5 minutes. This is how car rental should be!", rating: 5 },
  { name: "The Al-Farsi Family", role: "UAE Residents", text: "Best family car for our vacation! Spacious SUV with child seats included. Golden Key made our trip stress-free.", rating: 5 },
  { name: "Khalid Mohammed", role: "Car Enthusiast, Dubai", text: "Rented sports cars multiple times for events. Always pristine condition and fair pricing. My go-to rental!", rating: 5 },
  { name: "James Robinson", role: "Expat Resident, Dubai", text: "Long-term rental for 6 months while my car was being repaired. Transparent pricing and excellent maintenance support.", rating: 5 },
  { name: "Aisha & Ali Khan", role: "Dubai Residents", text: "Exceptional service! Last-minute booking for a wedding, they delivered a luxury sedan within 3 hours. Lifesavers!", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Show 3 on desktop, 1 on mobile
  const getVisible = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) return 3;
    return 1;
  };
  const [visible, setVisible] = useState(getVisible());

  useEffect(() => {
    const handleResize = () => setVisible(getVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - visible;

  const next = useCallback(() => setCurrent((p) => (p >= maxIndex ? 0 : p + 1)), [maxIndex]);
  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="section-padding bg-background" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2 text-foreground tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-primary font-semibold text-lg">4.9 out of 5 <span className="text-muted-foreground font-normal text-sm">based on 2,547 reviews</span></p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${current * (100 / visible)}% - ${current * 24 / visible}px)` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ width: `calc(${100 / visible}% - ${(visible - 1) * 24 / visible}px)` }}
                >
                  <div className="card-luxury p-6 relative h-full">
                    <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-secondary">{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Nav buttons */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:border-primary transition-colors hidden md:flex">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:border-primary transition-colors hidden md:flex">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border hover:bg-primary/50"}`}
            />
          ))}
        </div>

        <p className="text-center mt-4 text-sm text-muted-foreground">
          2,500+ 5-Star Reviews · <a href="#" className="text-primary hover:underline">See all reviews on Google</a>
        </p>
      </div>
    </section>
  );
}
