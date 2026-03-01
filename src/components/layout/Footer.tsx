import { Link } from "react-router-dom";
import { KeyRound, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center">
                <KeyRound className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-wide">GOLDEN KEY</span>
                <span className="text-[10px] text-primary font-medium tracking-[0.2em]">CAR RENTAL</span>
              </div>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Premium car rentals across the UAE. Drive your dreams with confidence, comfort, and style.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Our Fleet", "About Us", "Contact", "FAQ"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Categories */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary tracking-wider uppercase">Our Cars</h4>
            <ul className="space-y-2.5">
              {["Economy Cars", "Luxury Sedans", "Premium SUVs", "Sports Cars"].map((l) => (
                <li key={l}>
                  <Link to="/fleet" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: "Dubai, United Arab Emirates" },
                { icon: Phone, text: "+971 50 123 4567" },
                { icon: Mail, text: "info@goldenkeyrentals.ae" },
                { icon: Clock, text: "24/7 Available" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-secondary-foreground/60">
                  <Icon className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-custom px-4 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-secondary-foreground/40">
            © 2024 Golden Key Car Rental L.L.C. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-secondary-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
