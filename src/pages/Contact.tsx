import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin, Phone, Mail, Clock, MessageCircle, Send, AlertCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const locations = [
  { city: "Dubai Office (Headquarters)", address: "Sheikh Zayed Road, Business Bay, Dubai, UAE", phone: "+971 4 123 4567" },
  { city: "Abu Dhabi Office", address: "Al Maryah Island, Abu Dhabi, UAE", phone: "+971 2 987 6543" },
  { city: "Sharjah Office", address: "Corniche Street, Sharjah, UAE", phone: "+971 6 555 8888" },
];

const emails = [
  { label: "General", email: "info@goldenkeyrentals.ae" },
  { label: "Support", email: "support@goldenkeyrentals.ae" },
  { label: "Corporate", email: "corporate@goldenkeyrentals.ae" },
];

const contactFaqs = [
  { q: "What documents do I need to rent a car?", a: "Valid driver's license, passport/Emirates ID, and credit card." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 24 hours before pickup. Full refund guaranteed." },
  { q: "Do you offer airport pickup?", a: "Yes! Free airport delivery across all UAE airports." },
  { q: "Is insurance included in the rental price?", a: "Yes, comprehensive insurance is included in all our rentals." },
  { q: "Can I extend my rental period?", a: "Absolutely! Contact us 24 hours before return to extend." },
  { q: "Do you offer monthly rentals?", a: "Yes, with special discounted rates for long-term rentals." },
  { q: "What payment methods do you accept?", a: "Credit/debit cards, PayPal, cash, and bank transfer." },
  { q: "Is there a minimum age requirement?", a: "Drivers must be at least 21 years old with 1 year driving experience." },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 2 hours." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="container-custom relative z-10 text-center px-4 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-3 mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-secondary-foreground/70 text-lg">We're here to help 24/7. Reach out anytime!</p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="gold-gradient py-3">
        <div className="container-custom flex items-center justify-center gap-3 px-4">
          <Phone className="w-5 h-5 text-secondary animate-pulse" />
          <a href="tel:+971800465336" className="text-secondary font-semibold text-sm md:text-base hover:underline">
            Need Immediate Assistance? Call +971 800 GOLDEN (465336)
          </a>
        </div>
      </div>

      {/* Contact Form + Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form - 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-16 bg-muted rounded-xl">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We typically respond within 2 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+971 50 123 4567" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={(v) => setFormData({...formData, subject: v})}>
                        <SelectTrigger><SelectValue placeholder="Select a subject" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Booking Support</SelectItem>
                          <SelectItem value="corporate">Corporate Rentals</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us how we can help..." rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <Button type="submit" className="w-full gold-gradient text-secondary font-semibold hover:opacity-90">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We typically respond within 2 hours</p>
                </form>
              )}
            </motion.div>

            {/* Contact Info - 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Contact Information</h2>
              
              {/* Locations */}
              {locations.map((loc) => (
                <div key={loc.city} className="p-4 bg-muted rounded-xl space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{loc.city}</p>
                      <p className="text-sm text-muted-foreground">{loc.address}</p>
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-sm text-primary hover:underline">{loc.phone}</a>
                      <p className="text-xs text-muted-foreground mt-1"><Clock className="w-3 h-3 inline mr-1" /> 24/7</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emails */}
              <div className="p-4 bg-muted rounded-xl">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground text-sm mb-2">Email Us</p>
                    {emails.map((e) => (
                      <a key={e.label} href={`mailto:${e.email}`} className="block text-sm text-primary hover:underline">
                        {e.label}: {e.email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-success/10 rounded-xl border border-success/20 hover:bg-success/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+971 50 123 4567 — Chat instantly!</p>
                </div>
              </a>

              {/* Hours */}
              <div className="p-4 bg-muted rounded-xl">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Business Hours</p>
                    <p className="text-sm text-muted-foreground">24/7 Customer Support</p>
                    <p className="text-sm text-muted-foreground">Office: 8 AM – 8 PM (Sun–Thu)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground tracking-tight">Frequently Asked Questions</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactFaqs.map((f, i) => (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value={`q-${i}`} className="bg-card rounded-xl border border-border px-5">
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
