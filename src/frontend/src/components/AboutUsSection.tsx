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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            About Us.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl"
        >
          <p className="font-bold text-lg md:text-xl leading-relaxed text-primary mb-4">
            Empowering Success
          </p>
          <p className="font-bold text-base md:text-lg leading-relaxed text-primary">
            Ayan Tech Solutions engineers intelligent, future-ready solutions
            that fuel growth, streamline operations, and accelerate digital
            transformation. With over 16 years of deep expertise in SAP services
            and a growing portfolio of digital health solutions, Ayan Tech
            bridges technology with real-world outcomes. Whether you need an ERP
            solution, or precision billing or transformative healthcare systems.
            If you can envision it, Ayan Tech Solutions can build it.{" "}
            <strong>Empowering Success</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
