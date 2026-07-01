import React from "react";
import { motion } from "motion/react";
import { CLINIC_CONFIG } from "../data";
import { ClinicIcon } from "./ClinicIcon";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-100 px-3.5 py-1 rounded-full text-primary font-bold text-xs uppercase tracking-wider"
          >
            <ClinicIcon name="MapPin" className="w-3.5 h-3.5" />
            Find Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight"
          >
            Contact & Location Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-lg font-light"
          >
            Visit our clinical premises in Gwalior or contact us online to coordinate your visit instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Top Left: Address & Timings side by side */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Address & Phone */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100/80 shadow-premium hover:shadow-premium-large transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-display font-black text-slate-900 text-xl tracking-tight">
                    Contact Info
                  </h3>
                  <p className="text-xs text-primary font-bold tracking-widest uppercase">{CLINIC_CONFIG.name}</p>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <ClinicIcon name="MapPin" className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Address</h4>
                      <p className="font-sans text-slate-500 text-sm leading-relaxed mt-0.5">
                        {CLINIC_CONFIG.address.line1},<br />
                        {CLINIC_CONFIG.address.line2},<br />
                        {CLINIC_CONFIG.address.city}, {CLINIC_CONFIG.address.state} - {CLINIC_CONFIG.address.pinCode}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <ClinicIcon name="Phone" className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Phone</h4>
                      <p className="font-sans text-slate-500 text-sm mt-0.5">
                        <a href={`tel:${CLINIC_CONFIG.phone}`} className="hover:text-primary transition-colors font-semibold">
                          {CLINIC_CONFIG.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <ClinicIcon name="Mail" className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-700 text-xs uppercase tracking-wider">Email</h4>
                      <p className="font-sans text-slate-500 text-sm mt-0.5">
                        <a href={`mailto:${CLINIC_CONFIG.email}`} className="hover:text-primary transition-colors">
                          {CLINIC_CONFIG.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card B: Business Hours */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100/80 shadow-premium hover:shadow-premium-large transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-display font-black text-slate-900 text-xl tracking-tight">
                    Business Hours
                  </h3>
                  <p className="text-xs text-teal-600 font-bold tracking-widest uppercase">Weekly Timings</p>
                </div>

                <div className="space-y-4 font-sans text-slate-500 text-sm">
                  {CLINIC_CONFIG.businessHours.map((hour, idx) => (
                    <div key={idx} className="border-b border-slate-200/50 pb-3 last:border-0 last:pb-0">
                      <h4 className="font-display font-bold text-slate-700 text-xs uppercase tracking-wider mb-1">{hour.days}</h4>
                      {hour.timings.map((time, tIdx) => (
                        <p key={tIdx} className="text-sm font-light text-slate-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          {time}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Right: Immediate Reach & Chat */}
          <div className="lg:col-span-4 bg-teal-50/50 p-6 sm:p-8 rounded-3xl border border-teal-100/60 shadow-premium hover:shadow-premium-large transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest px-2.5 py-1 bg-teal-50 border border-teal-100 rounded-full inline-block">Active Support</span>
              <h3 className="font-display font-black text-slate-900 text-xl tracking-tight">Need Instant Help?</h3>
              <p className="font-sans text-slate-500 text-sm leading-relaxed">
                Reach out directly via phone or WhatsApp to get your dental queries resolved or custom slot modifications done immediately.
              </p>
            </div>

            {/* CTA list */}
            <div className="space-y-3">
              <a
                href={`tel:${CLINIC_CONFIG.phone}`}
                className="w-full bg-primary hover:bg-primary-hover text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md text-center flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer glow-primary-hover"
              >
                <ClinicIcon name="Phone" className="w-4 h-4 text-white" />
                Call {CLINIC_CONFIG.phone}
              </a>

              <a
                href={`https://api.whatsapp.com/send?phone=${CLINIC_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#22C55E] hover:bg-[#16a34a] text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md text-center flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer glow-accent-hover"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.004 5.319 5.322.002 11.822.002c3.15 0 6.112 1.228 8.341 3.458 2.23 2.23 3.454 5.195 3.451 8.345-.003 6.502-5.322 11.82-11.82 11.82-2.004-.001-3.973-.513-5.714-1.492L0 24zm6.59-4.846c1.62.962 3.21 1.462 4.904 1.463 5.378 0 9.755-4.375 9.758-9.756.002-2.607-1.012-5.059-2.858-6.905C16.56 2.11 14.113.996 11.822.996 6.444.996 2.07 5.371 2.067 10.75c-.001 1.772.474 3.42 1.378 4.898L2.43 21.147l5.376-1.41.002.004-.162-.095z" />
                </svg>
                WhatsApp Chat
              </a>

              <a
                href={CLINIC_CONFIG.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md text-center flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ClinicIcon name="MapPin" className="w-4 h-4 text-teal-300" />
                Get Directions
              </a>
            </div>
          </div>

        </div>

        {/* Responsive Embedded Google Map (Full width on desktop) */}
        <div className="mt-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-[380px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white shadow-premium hover:shadow-premium-large transition-all duration-500 relative bg-slate-50"
          >
            <iframe
              title="Official Google Maps Location for Devraj Dental Clinic Gwalior"
              src={CLINIC_CONFIG.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>

          {/* Prominent Get Directions CTA button */}
          <div className="text-center pt-2">
            <motion.a
              href={CLINIC_CONFIG.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white text-base font-bold px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 cursor-pointer glow-primary-hover"
            >
              <ClinicIcon name="MapPin" className="w-5 h-5 text-teal-300" />
              Get Directions
            </motion.a>
            <p className="text-xs text-slate-400 mt-3 font-sans">
              Clicking will open the exact clinic location in Gwalior in a new browser tab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
