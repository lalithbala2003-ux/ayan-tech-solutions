import { motion } from "motion/react";

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-accent-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Who We Are
          </p>
          <h2 className="font-display text-[36px] font-bold text-primary leading-tight">
            About Us.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
