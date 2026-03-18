import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CareersBanner() {
  return (
    <section
      id="careers"
      className="section-navy py-24 relative overflow-hidden"
    >
      {/* Decorative element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at right center, oklch(0.55 0.22 25), transparent 70%)",
        }}
      />
      <div className="absolute -left-8 -bottom-8 w-48 h-48 border border-white/10 rotate-12" />
      <div className="absolute -right-12 top-12 w-64 h-64 border border-white/10 rotate-45" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Work With Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Come here for something different.
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
              We are always looking for consultants who put customers first,
              project managers who engage their team, and business experts who
              grow with us.
            </p>
            <Button
              data-ocid="careers.primary_button"
              className="bg-accent-gold hover:bg-red-700 text-white font-semibold px-8 py-6 text-base rounded-none group"
            >
              Join Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
