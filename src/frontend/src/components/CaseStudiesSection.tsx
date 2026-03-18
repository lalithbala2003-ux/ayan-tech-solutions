import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { CaseStudy } from "../backend.d";

const seedCaseStudies: CaseStudy[] = [
  {
    id: "1",
    client: "Regional Health Network",
    category: "EMR & RCM",
    title: "Streamlining patient data with a unified EMR and revenue cycle.",
    summary:
      "Integrated EMR implementation with RCM automation, reducing billing errors by 35% and accelerating collections.",
  },
  {
    id: "2",
    client: "MedCenter Group",
    category: "SAP S/4HANA",
    title: "MedCenter's finance transformation with SAP S/4HANA.",
    summary:
      "End-to-end SAP migration delivering real-time financial visibility across 12 hospital locations.",
  },
  {
    id: "3",
    client: "Enterprise Logistics Co.",
    category: "ERP & Integration",
    title: "Unifying operations with a modern ERP platform.",
    summary:
      "Custom ERP rollout integrating supply chain, HR, and finance — cutting operational overhead by 28%.",
  },
];

interface Props {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: Props) {
  const items = caseStudies.length > 0 ? caseStudies : seedCaseStudies;

  return (
    <section id="references" className="py-24 section-alt">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="text-accent-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Client Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Customer Review.
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((cs, i) => (
            <motion.div
              key={cs.id}
              data-ocid={`references.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Badge
                variant="outline"
                className="self-start mb-4 text-xs font-semibold uppercase tracking-wider text-primary border-primary/30 rounded-none"
              >
                {cs.category}
              </Badge>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {cs.client}
              </p>
              <h3 className="font-display text-lg font-bold text-primary leading-snug mb-4 flex-1">
                {cs.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {cs.summary}
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent-gold transition-colors duration-200 self-start"
              >
                Full story <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
