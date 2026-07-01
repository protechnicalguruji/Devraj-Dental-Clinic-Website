import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_CONFIG } from "../data";
import { ClinicIcon } from "./ClinicIcon";

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Premium active link detection based on scroll position
      const sections = ["home", "about", "specialities", "services", "contact"];
      const scrollPosition = window.scrollY + 150; // offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(`#${section}`);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial call
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Specialities", href: "#specialities" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-premium border-b border-slate-200/40 py-3"
          : "bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Devraj Dental Clinic Home"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/25 group-hover:scale-105 group-hover:shadow-primary/45 transition-all duration-300">
              {/* Dental Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M12 6V18" />
                <path d="M6 12H18" />
              </svg>
            </div>
            <span className="font-display font-black text-xl tracking-tight text-slate-800">
              Devraj <span className="text-primary font-extrabold drop-shadow-[0_2px_8px_rgba(14,165,164,0.15)]">Dental</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`font-sans font-semibold text-sm py-2 px-1 relative transition-all duration-300 ${
                        isActive
                          ? "text-primary drop-shadow-[0_0_8px_rgba(14,165,164,0.35)]"
                          : "text-slate-600 hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_8px_rgba(14,165,164,0.6)] ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <button
              onClick={onBookClick}
              className="bg-primary hover:bg-primary-hover text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 glow-primary-hover cursor-pointer"
            >
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="bg-primary hover:bg-primary-hover text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md shadow-primary/25 transition-all glow-primary-hover"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <ClinicIcon name="X" className="w-6 h-6 animate-spin-once" /> : <ClinicIcon name="Menu" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-medium text-slate-600 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-lg text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold text-center py-3 rounded-xl shadow-md transition-all block"
                >
                  Book Appointment
                </button>
                <a
                  href={`tel:${CLINIC_CONFIG.phone}`}
                  className="mt-3 w-full border border-slate-200 text-slate-600 font-semibold text-center py-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <ClinicIcon name="Phone" className="w-4 h-4 text-primary" />
                  Call Clinic
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
