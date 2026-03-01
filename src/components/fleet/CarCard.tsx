import { Link } from "react-router-dom";
import { Users, Fuel, Settings2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="card-luxury overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase gold-gradient text-secondary">
            {car.category}
          </span>
        </div>
        {car.available ? (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/90 text-success-foreground text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-success-foreground animate-pulse" />
            Available
          </div>
        ) : (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-destructive/90 text-destructive-foreground text-[10px] font-medium">
            Booked
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-foreground">{car.name}</h3>
            <p className="text-xs text-muted-foreground">{car.brand} · {car.year}</p>
          </div>
          <div className="flex items-center gap-0.5 text-xs text-muted-foreground">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="font-medium">{car.rating}</span>
          </div>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 py-3 border-y border-border text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{car.seats}</span>
          <span className="flex items-center gap-1"><Settings2 className="w-3.5 h-3.5" />{car.transmission}</span>
          <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5" />{car.fuel}</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-lg font-bold text-primary">AED {car.pricePerDay}</span>
            <span className="text-xs text-muted-foreground">/day</span>
          </div>
          <Button
            size="sm"
            className="gold-gradient text-secondary text-xs font-semibold hover:opacity-90 transition-opacity"
            asChild
            disabled={!car.available}
          >
            <Link to={`/car/${car.id}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
