import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Users, Settings2, Fuel, DoorOpen, Briefcase, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cars } from "@/data/cars";

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Car not found</h2>
          <Button variant="link" className="text-primary" asChild>
            <Link to="/fleet">Back to Fleet</Link>
          </Button>
        </div>
      </div>
    );
  }

  const specs = [
    { icon: Users, label: "Seats", value: car.seats },
    { icon: Settings2, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel", value: car.fuel },
    { icon: Zap, label: "Power", value: car.specs.power },
    { icon: DoorOpen, label: "Doors", value: car.specs.doors },
    { icon: Briefcase, label: "Luggage", value: `${car.specs.luggage} bags` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 container-custom px-4 md:px-8 pb-16">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold gold-gradient text-secondary">
                {car.category}
              </span>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{car.name}</h1>
              <p className="text-muted-foreground mt-1">{car.brand} · {car.year} · {car.specs.engine}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(car.rating) ? "fill-primary text-primary" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {car.rating} ({car.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted rounded-xl p-5">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-primary">AED {car.pricePerDay}</span>
                <span className="text-muted-foreground">/day</span>
              </div>
              <p className="text-xs text-success mt-1">Early booking discount: Save 10%</p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3">
              {specs.map((s) => (
                <div key={s.label} className="text-center p-3 rounded-lg border border-border">
                  <s.icon className="w-5 h-5 mx-auto text-primary mb-1" />
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-medium text-foreground">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {car.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-success shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <Button
                className="flex-1 gold-gradient text-secondary font-semibold h-12 text-base hover:opacity-90"
                disabled={!car.available}
                asChild
              >
                <Link to={`/booking/${car.id}`}>
                  {car.available ? "Reserve Now" : "Currently Unavailable"}
                </Link>
              </Button>
            </div>

            {/* Includes */}
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground font-medium mb-2">Rental Includes:</p>
              <div className="flex flex-wrap gap-2">
                {["Unlimited Mileage", "24/7 Assistance", "Basic Insurance", "Free Delivery"].map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
