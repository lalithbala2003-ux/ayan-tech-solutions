import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface NavigationProps {
  onContactOpen: () => void;
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blogs", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ onContactOpen }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2 bg-transparent"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/assets/generated/logo-transparent.png"
            alt="Ayan Tech Solutions"
            className="h-12 w-auto object-contain"
            style={{ background: "transparent" }}
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent-gold ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            data-ocid="nav.primary_button"
            onClick={onContactOpen}
            className="bg-accent-gold hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-none transition-all duration-200"
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-foreground" : "text-white"}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-primary text-white border-none"
            >
              <div className="flex items-center justify-between mb-10 mt-2">
                <img
                  src="/assets/generated/logo-transparent.png"
                  alt="Ayan Tech Solutions"
                  className="h-10 w-auto object-contain"
                  style={{ background: "transparent" }}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium text-white/80 hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  data-ocid="nav.primary_button"
                  onClick={() => {
                    onContactOpen();
                    setMobileOpen(false);
                  }}
                  className="mt-4 bg-accent-gold hover:bg-red-700 text-white font-semibold rounded-none w-full"
                >
                  Get in Touch
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
