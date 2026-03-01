import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Fleet", path: "/fleet" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center">
            <KeyRound className="w-5 h-5 text-secondary" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm md:text-base font-bold text-secondary-foreground tracking-wide">
              GOLDEN KEY
            </span>
            <span className="text-[10px] md:text-xs text-primary font-medium tracking-[0.2em]">
              CAR RENTAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+971501234567" className="flex items-center gap-1.5 text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+971 50 123 4567</span>
          </a>
          <Button variant="default" size="sm" className="gold-gradient text-secondary font-semibold hover:opacity-90 transition-opacity" asChild>
            <Link to="/fleet">Book Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-secondary-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary/98 backdrop-blur-md border-t border-primary/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path ? "text-primary" : "text-secondary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full gold-gradient text-secondary font-semibold mt-4" asChild>
                <Link to="/fleet">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
