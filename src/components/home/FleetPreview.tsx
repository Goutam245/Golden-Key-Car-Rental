import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";
import CarCard from "@/components/fleet/CarCard";

export default function FleetPreview() {
  const featured = cars.filter((c) => c.available).slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-foreground">
            Choose Your Perfect Car
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From economy to luxury — find the ideal vehicle for every journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary font-medium" asChild>
            <Link to="/fleet">
              View All Cars <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
