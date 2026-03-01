import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, User, Package, CreditCard, PartyPopper, ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cars } from "@/data/cars";
import { toast } from "sonner";

const steps = [
  { label: "Personal Info", icon: User },
  { label: "Add-ons", icon: Package },
  { label: "Payment", icon: CreditCard },
  { label: "Confirmation", icon: Check },
];

const addons = [
  { id: "baby_seat", name: "Baby Seat", price: 25 },
  { id: "gps", name: "GPS Navigator", price: 20 },
  { id: "extra_driver", name: "Extra Driver", price: 50 },
  { id: "wifi", name: "Portable WiFi", price: 30 },
];

export default function Booking() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", license: "" });
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const days = 3;

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p>Car not found. <Link to="/fleet" className="text-primary underline">Back to Fleet</Link></p>
      </div>
    );
  }

  const basePrice = car.pricePerDay * days;
  const addonsTotal = selectedAddons.reduce((sum, id) => sum + (addons.find((a) => a.id === id)?.price || 0), 0) * days;
  const subtotal = basePrice + addonsTotal;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const vat = (subtotal - discount) * 0.05;
  const total = subtotal - discount + vat;

  const bookingRef = `GK-${Date.now().toString(36).toUpperCase()}`;

  const toggleAddon = (id: string) =>
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "golden10") {
      setPromoApplied(true);
      toast.success("Promo code applied! 10% discount.");
    } else {
      toast.error("Invalid promo code.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 container-custom px-4 md:px-8 pb-16 max-w-4xl">
        <Link to={`/car/${car.id}`} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to {car.name}
        </Link>

        {/* Progress */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                i <= step ? "gold-gradient text-secondary" : "bg-muted text-muted-foreground"
              }`}>
                {i < step ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
              </div>
              {i < steps.length - 1 && (
                <div className={`hidden sm:block w-16 md:w-24 h-0.5 mx-2 ${
                  i < step ? "bg-primary" : "bg-border"
                }`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 0: Personal Info */}
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 50 123 4567" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Driver's License</label>
                    <Input value={form.license} onChange={(e) => setForm({ ...form, license: e.target.value })} placeholder="License number" />
                  </div>
                </div>
                <Button className="gold-gradient text-secondary font-semibold" onClick={() => setStep(1)}>
                  Continue to Add-ons
                </Button>
              </div>
            )}

            {/* Step 1: Add-ons */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-foreground">Add-ons & Extras</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {addons.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedAddons.includes(addon.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{addon.name}</span>
                        <span className="text-sm text-primary font-semibold">+AED {addon.price}/day</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(0)}>Back</Button>
                  <Button className="gold-gradient text-secondary font-semibold" onClick={() => setStep(2)}>
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <h2 className="text-2xl font-bold text-foreground">Payment</h2>

                  {/* Promo */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Promo Code</label>
                    <div className="flex gap-2">
                      <Input value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Enter code (try GOLDEN10)" />
                      <Button variant="outline" onClick={applyPromo} disabled={promoApplied}>Apply</Button>
                    </div>
                  </div>

                  {/* Card fields (mock) */}
                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Card Number</label>
                      <Input placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Expiry</label>
                        <Input placeholder="MM/YY" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">CVC</label>
                        <Input placeholder="123" />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                    <Button className="gold-gradient text-secondary font-semibold" onClick={() => setStep(3)}>
                      Pay AED {total.toFixed(0)}
                    </Button>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-muted rounded-xl p-5 h-fit space-y-3">
                  <h3 className="font-semibold text-foreground">Order Summary</h3>
                  <div className="text-sm space-y-2 text-muted-foreground">
                    <div className="flex justify-between"><span>{car.name} × {days} days</span><span>AED {basePrice}</span></div>
                    {selectedAddons.map((id) => {
                      const a = addons.find((x) => x.id === id)!;
                      return <div key={id} className="flex justify-between"><span>{a.name} × {days} days</span><span>AED {a.price * days}</span></div>;
                    })}
                    {promoApplied && <div className="flex justify-between text-success"><span>Discount (10%)</span><span>-AED {discount.toFixed(0)}</span></div>}
                    <div className="flex justify-between"><span>VAT (5%)</span><span>AED {vat.toFixed(0)}</span></div>
                    <div className="flex justify-between font-bold text-foreground text-base pt-2 border-t border-border">
                      <span>Total</span><span className="text-primary">AED {total.toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="text-center py-10 space-y-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto"
                >
                  <PartyPopper className="w-10 h-10 text-secondary" />
                </motion.div>
                <h2 className="text-3xl font-bold text-foreground">Booking Confirmed!</h2>
                <p className="text-muted-foreground">Your reservation has been successfully processed.</p>

                <div className="bg-muted rounded-xl p-5 max-w-sm mx-auto">
                  <p className="text-xs text-muted-foreground mb-1">Booking Reference</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xl font-bold text-foreground tracking-wider">{bookingRef}</span>
                    <button onClick={() => { navigator.clipboard.writeText(bookingRef); toast.success("Copied!"); }}>
                      <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">A confirmation email has been sent to {form.email || "your email"}.</p>

                <div className="flex justify-center gap-3 pt-4">
                  <Button className="gold-gradient text-secondary font-semibold" asChild>
                    <Link to="/">Back to Home</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/fleet">Browse More Cars</Link>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
