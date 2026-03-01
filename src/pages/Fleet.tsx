import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CarCard from "@/components/fleet/CarCard";
import FilterSidebar from "@/components/fleet/FilterSidebar";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";

export default function Fleet() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 1500] as [number, number],
    transmissions: [] as string[],
    fuels: [] as string[],
  });

  const filtered = useMemo(() => {
    return cars.filter((car) => {
      if (filters.categories.length && !filters.categories.includes(car.category)) return false;
      if (car.pricePerDay < filters.priceRange[0] || car.pricePerDay > filters.priceRange[1]) return false;
      if (filters.transmissions.length && !filters.transmissions.includes(car.transmission)) return false;
      if (filters.fuels.length && !filters.fuels.includes(car.fuel)) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-8 bg-secondary">
        <div className="container-custom px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-secondary-foreground"
          >
            Our <span className="gold-gradient-text">Fleet</span>
          </motion.h1>
          <p className="text-secondary-foreground/60 mt-2">
            {filtered.length} vehicles available
          </p>
        </div>
      </div>

      <div className="container-custom px-4 md:px-8 py-8">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <Button variant="outline" size="sm" onClick={() => setMobileFiltersOpen(true)}>
            <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            mobileOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No cars match your filters.</p>
                <Button variant="link" className="text-primary mt-2" onClick={() => setFilters({ categories: [], priceRange: [0, 1500], transmissions: [], fuels: [] })}>
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((car, i) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <CarCard car={car} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
