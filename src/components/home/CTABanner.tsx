import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const badges = ["Free Delivery", "24/7 Support", "Best Prices"];

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-24">
      {/* Darker overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/98 to-primary/15" />
      <div className="absolute inset-0 gold-shimmer opacity-20" />

      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4 tracking-tight drop-shadow-lg">
            Ready to Hit the Road?
          </h2>
          <p className="text-secondary-foreground/70 max-w-lg mx-auto mb-10 text-lg">
            Book your dream car today and enjoy free delivery across the UAE.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="gold-gradient text-secondary font-semibold px-10 py-6 text-base rounded-full shadow-[0_8px_24px_hsl(var(--primary)/0.4)] hover:scale-105 hover:opacity-95 transition-all"
              asChild
            >
              <Link to="/fleet">
                Browse Cars <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-secondary-foreground/30 text-secondary-foreground px-10 py-6 text-base rounded-full hover:bg-secondary-foreground hover:text-secondary transition-all"
              asChild
            >
              <a href="tel:+971501234567">
                <Phone className="w-5 h-5 mr-2" /> Call Us Now
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-1.5 text-sm text-secondary-foreground/70">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
