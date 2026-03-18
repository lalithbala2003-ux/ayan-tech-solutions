import {
  Activity,
  BarChart3,
  Database,
  FileText,
  Link2,
  Server,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Server,
    title: "SAP Solutions",
    desc: "End-to-end SAP implementation, migration, S/4HANA upgrades, and managed services tailored for enterprise needs.",
  },
  {
    icon: Activity,
    title: "EMR Systems",
    desc: "Electronic Medical Records implementation and integration to digitize patient data and streamline clinical workflows.",
  },
  {
    icon: Database,
    title: "ERP Services",
    desc: "Enterprise Resource Planning solutions that unify finance, HR, supply chain, and operations on a single platform.",
  },
  {
    icon: BarChart3,
    title: "RCM (Revenue Cycle Management)",
    desc: "Optimize billing, coding, claims processing, and collections to maximize revenue and reduce denials.",
  },
  {
    icon: Link2,
    title: "System Integration",
    desc: "Seamless integration of SAP, ERP, and EMR platforms with existing IT ecosystems for unified data flow.",
  },
  {
    icon: FileText,
    title: "IT Consulting",
    desc: "Strategic IT advisory, digital transformation roadmaps, and technology assessments for modern enterprises.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Our Capabilities.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                data-ocid={`services.card.${i + 1}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-8 border-b border-r border-border hover:bg-primary transition-colors duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-border group-hover:border-accent-gold transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-accent-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
