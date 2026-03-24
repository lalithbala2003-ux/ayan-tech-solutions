import { motion } from "motion/react";

const stats = [
  { value: "18+", label: "Years of Experience" },
  { value: "60+", label: "Projects Delivered" },
  { value: "20+", label: "Enterprise Clients" },
  { value: "4", label: "Core Service Areas" },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center lg:px-8"
            >
              <p className="font-display text-5xl font-bold text-accent-gold mb-2">
                {stat.value}
              </p>
              <p className="text-foreground/60 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
