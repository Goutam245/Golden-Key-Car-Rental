import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What documents do I need to rent a car?", a: "You'll need a valid driver's license (UAE license or international driving permit), passport or Emirates ID, and a credit card for the security deposit." },
  { q: "Is there a minimum age requirement?", a: "Yes, the minimum age is 21 years old for standard vehicles and 25 for luxury and sports cars." },
  { q: "Do you offer delivery and pick-up services?", a: "Absolutely! We offer free delivery and pick-up anywhere in Dubai and across the UAE for rentals of 3 days or more." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 24 hours before pick-up. Cancellations within 24 hours may incur a one-day rental charge." },
  { q: "Is insurance included in the rental price?", a: "Basic comprehensive insurance is included with every rental. We also offer premium insurance options for additional peace of mind." },
  { q: "Can I rent a car with a foreign driver's license?", a: "Yes, visitors can rent with a valid international driving permit (IDP) or a driving license from select countries recognized by the UAE." },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
