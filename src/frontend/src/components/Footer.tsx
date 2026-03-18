import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { toast } from "sonner";

const serviceLinks = [
  "SAP Solutions",
  "EMR Systems",
  "ERP Services",
  "RCM",
  "System Integration",
  "IT Consulting",
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Customer Review", href: "#references" },
  { label: "Blogs", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    Icon: SiLinkedin,
    href: "https://www.linkedin.com/company/ayan-tech-solution",
    label: "LinkedIn",
  },
  {
    Icon: SiYoutube,
    href: "https://www.youtube.com/@AyantechSolutions",
    label: "YouTube",
  },
  {
    Icon: SiInstagram,
    href: "https://www.instagram.com/ayantechsolutions/",
    label: "Instagram",
  },
  {
    Icon: SiFacebook,
    href: "https://www.facebook.com/profile.php?id=61586409788086",
    label: "Facebook",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You've subscribed to our newsletter!");
    setEmail("");
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-dark" id="contact">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/assets/generated/logo-transparent.png"
                alt="Ayan Tech Solutions"
                className="h-12 w-auto object-contain mb-2"
                style={{ background: "transparent" }}
              />
              <span className="text-accent-gold text-xs font-semibold uppercase tracking-widest block mt-1">
                IT Solutions
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              SAP · EMR · ERP · RCM — technology that works for you.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">
                  No: 184-187, Temple steps, Block 3, 9th Floor,
                  <br />
                  Anna Salai, Little Mount, Saidapet,
                  <br />
                  Chennai - 600 015
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent-gold flex-shrink-0" />
                <a
                  href="tel:+918754495604"
                  className="text-white/60 hover:text-accent-gold text-sm transition-colors duration-200"
                >
                  +91875-449-5604
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent-gold flex-shrink-0" />
                <a
                  href="mailto:info@ayantech.com"
                  className="text-white/60 hover:text-accent-gold text-sm transition-colors duration-200"
                >
                  info@ayantech.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-accent-gold hover:text-accent-gold text-white/60 transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-white/55 hover:text-accent-gold text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(l.href)}
                    className="text-white/55 hover:text-accent-gold text-sm transition-colors duration-200 text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Stay Updated
            </h4>
            <p className="text-white/55 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest IT insights and
              updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-0">
              <Input
                type="email"
                data-ocid="footer.input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-accent-gold flex-1"
              />
              <Button
                type="submit"
                data-ocid="footer.submit_button"
                className="rounded-none bg-accent-gold hover:bg-red-700 text-white px-3 flex-shrink-0"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {year} Ayan Tech Solutions. All rights reserved.
            <span className="mx-1">|</span>
            <button
              type="button"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="mx-1">|</span>
            <button
              type="button"
              className="hover:text-white/70 transition-colors"
            >
              Imprint
            </button>
          </p>
          <p className="text-white/30 text-xs">
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
