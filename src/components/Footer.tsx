import React from "react";
import { CLINIC_CONFIG, CLINIC_SPECIALITIES } from "../data";
import { ClinicIcon } from "./ClinicIcon";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Specialities", href: "#specialities" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Pitch */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 6V18" />
                  <path d="M6 12H18" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">
                Devraj <span className="text-primary">Dental</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Devraj Dental Clinic provides premium, patient-centric oral healthcare services in Birla Nagar, Gwalior. Our vision is safe, hygienic, and affordable treatments for every individual.
            </p>

            {/* Social Icons Placeholders */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.1-1.3 1.2-1.3h2.3V1H12C8.6 1 7 2.4 7 5.7V8z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Twitter Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.2 2.4h3.3L14.3 11l8.5 11.3H16.2L11 15.6l-5.9 6.7H1.8l7.6-9.1L1.2 2.4h6.8l4.7 6.4L18.2 2.4zm-1.2 17.3h1.8L7.1 4.1H5.1L17 19.7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary text-xs sm:text-sm transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialties / Services preview */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">Popular Specialties</h4>
            <ul className="space-y-2">
              {CLINIC_SPECIALITIES.slice(0, 5).map((spec) => (
                <li key={spec.id}>
                  <a
                    href="#specialities"
                    className="text-slate-400 hover:text-primary text-xs sm:text-sm transition-colors block py-0.5"
                  >
                    {spec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact info summary */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">Clinic & Location</h4>
            <div className="space-y-3.5">
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {CLINIC_CONFIG.address.line1}, {CLINIC_CONFIG.address.line2}, {CLINIC_CONFIG.address.city}, {CLINIC_CONFIG.address.state} - {CLINIC_CONFIG.address.pinCode}
              </p>

              <div className="space-y-1.5 font-sans text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ClinicIcon name="Phone" className="w-3.5 h-3.5 text-primary" />
                  <a href={`tel:${CLINIC_CONFIG.phone}`} className="hover:text-primary transition-colors">
                    {CLINIC_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ClinicIcon name="Mail" className="w-3.5 h-3.5 text-primary" />
                  <a href={`mailto:${CLINIC_CONFIG.email}`} className="hover:text-primary transition-colors">
                    {CLINIC_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-2">
                <a
                  href={CLINIC_CONFIG.googleReviewsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-xs text-slate-300 border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <ClinicIcon name="Star" className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>5.0 Verified Clinic</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {CLINIC_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
