import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Insight } from "../backend.d";

const blogImages = [
  "/assets/uploads/Image-4--1.jpg",
  "/assets/uploads/Image-3--2.jpg",
  "/assets/uploads/Image-2--3.jpg",
  "/assets/uploads/Image-1--4.jpg",
];

const seedInsights: Insight[] = [
  {
    id: "1",
    category: "White Paper",
    title: "Smart warehousing: Integrating robotics for next-level efficiency.",
    summary:
      "This whitepaper explores market trends fueling robotics adoption in modern distribution centers.",
    date: BigInt(Date.now()) * 1000000n,
  },
  {
    id: "2",
    category: "Article",
    title: "Top 5 highlights of the latest ERP release.",
    summary:
      "Key features driving better planning and supply chain decisions in the newest platform update.",
    date: BigInt(Date.now() - 5 * 86400000) * 1000000n,
  },
  {
    id: "3",
    category: "Article",
    title: "Public Cloud vs. Private Cloud: How to choose.",
    summary:
      "An SAP-centric lens on making the right model decision for your business infrastructure.",
    date: BigInt(Date.now() - 10 * 86400000) * 1000000n,
  },
  {
    id: "4",
    category: "Article",
    title: "From data to decisions: How AI reshapes demand planning.",
    summary:
      "POS and retail-level data as primary demand signals for smarter forecasting.",
    date: BigInt(Date.now() - 15 * 86400000) * 1000000n,
  },
];

function formatDate(ts: bigint): string {
  const ms = Number(ts / 1000000n);
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface Props {
  insights: Insight[];
}

export default function InsightsSection({ insights }: Props) {
  const items = insights.length > 0 ? insights : seedInsights;

  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Knowledge Hub
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Blogs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((insight, i) => (
            <motion.article
              key={insight.id}
              data-ocid={`insights.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col border border-border hover:border-primary transition-all duration-300"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={blogImages[i % blogImages.length]}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="h-1 bg-accent-gold w-full" />
              <div className="p-6 flex flex-col flex-1">
                <Badge
                  variant="secondary"
                  className="self-start mb-3 text-xs uppercase tracking-wider rounded-none"
                >
                  {insight.category}
                </Badge>
                <h3 className="font-display text-base font-bold text-primary leading-snug mb-3 flex-1 group-hover:text-accent-gold transition-colors duration-200">
                  {insight.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {insight.summary}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(insight.date)}
                  </span>
                  <button
                    type="button"
                    className="text-primary hover:text-accent-gold transition-colors"
                    aria-label="Read more"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
