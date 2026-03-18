import { Button } from "@/components/ui/button";
import { Calendar, Globe, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { Event } from "../backend.d";

const seedEvents: Event[] = [
  {
    id: "1",
    title:
      "Webinar — Digital Transformation: Where Technology Meets Excellence",
    date: BigInt(new Date("2026-03-19").getTime()) * 1000000n,
    location: "Online",
    language: "English",
    registrationUrl: "#",
  },
  {
    id: "2",
    title: "Event — LogiMAT 2026: Focus on Supply Chain Management",
    date: BigInt(new Date("2026-03-24").getTime()) * 1000000n,
    location: "Germany",
    language: "German",
    registrationUrl: "#",
  },
  {
    id: "3",
    title: "Webinar — Accelerate your Cloud ERP Journey",
    date: BigInt(new Date("2026-03-26").getTime()) * 1000000n,
    location: "Online",
    language: "English",
    registrationUrl: "#",
  },
];

function formatEventDate(ts: bigint): string {
  const ms = Number(ts / 1000000n);
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface Props {
  events: Event[];
}

export default function EventsSection({ events }: Props) {
  const items = events.length > 0 ? events : seedEvents;

  return (
    <section id="events" className="py-24 section-alt">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Stay Connected
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Events & Webinars.
          </h2>
        </motion.div>

        <div className="border border-border divide-y divide-border">
          {items.map((event, i) => (
            <motion.div
              key={event.id}
              data-ocid={`events.item.${i + 1}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 bg-white hover:bg-primary/5 transition-colors duration-200"
            >
              <div className="flex items-center gap-2 min-w-[130px] text-accent-gold">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm font-semibold">
                  {formatEventDate(event.date)}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-primary group-hover:text-primary leading-snug">
                  {event.title}
                </p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground min-w-[120px]">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground min-w-[100px]">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{event.language}</span>
              </div>
              <Button
                asChild
                className="rounded-none bg-primary hover:bg-accent-gold hover:text-primary text-white font-semibold transition-all duration-200 flex-shrink-0"
              >
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
