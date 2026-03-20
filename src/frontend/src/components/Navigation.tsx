import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 shadow-md"
      style={{ backgroundColor: "#0a1628" }}
    >
      <div className="container max-w-7xl mx-auto px-6 py-3 flex items-start justify-between">
        <button
          type="button"
          className="flex items-start gap-2 bg-transparent mt-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/assets/generated/logo-transparent.png"
            alt="Ayan Tech Solutions"
            className="h-14 w-auto object-contain"
            style={{ background: "transparent", display: "block" }}
          />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-bold tracking-wide text-white/90 transition-colors hover:text-red-500"
              style={{ fontSize: "42px" }}
            >
              {link.label}
            </a>
          ))}
          <Button
            data-ocid="nav.primary_button"
            onClick={onContactOpen}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-none transition-all duration-200"
          >
            Get in Touch
          </Button>
        </nav>

        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 text-white border-none"
              style={{ backgroundColor: "#0a1628" }}
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
                    className="font-bold text-white/80 hover:text-red-500 transition-colors"
                    style={{ fontSize: "42px" }}
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
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-none w-full"
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
