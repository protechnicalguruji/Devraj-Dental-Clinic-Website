import React, { useState } from "react";
import { motion } from "motion/react";
import { CLINIC_CONFIG } from "../data";
import { ClinicIcon } from "./ClinicIcon";

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-br from-white via-teal-50/30 to-blue-50/20 overflow-hidden"
    >
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-primary/8 blur-3xl backdrop-blur-xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 rounded-full bg-secondary/6 blur-3xl backdrop-blur-lg transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Left */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm"
            >
              <ClinicIcon name="Sparkles" className="w-3.5 h-3.5" />
              Trusted Dental Care in Gwalior
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-none"
            >
              Healthy Smile <br className="hidden sm:block" />
              <span className="text-primary relative inline-block mt-2">
                Begins Here
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-primary/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0,7 C30,2 70,2 100,7" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-slate-600 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Professional, pain-free dental care with a patient-first approach. We provide comfortable and premium treatments for all ages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onBookClick}
                className="bg-primary hover:bg-primary-hover text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 glow-primary-hover cursor-pointer"
              >
                Book Appointment
                <ClinicIcon name="ArrowRight" className="w-5 h-5" />
              </button>

              <a
                href={CLINIC_CONFIG.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/85 backdrop-blur-sm border border-slate-200/80 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-base px-8 py-3.5 rounded-full shadow-sm hover:shadow-premium transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ClinicIcon name="MapPin" className="w-5 h-5 text-secondary" />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Image Content Right */}
          <div className="lg:col-span-5 relative">
            {/* Soft decorative background circles and rings */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-teal-200/40 animate-pulse -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-blue-500/5 blur-xl -z-10"></div>
            <div className="absolute -top-12 -right-4 w-48 h-48 rounded-full bg-teal-500/5 blur-2xl -z-10"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md md:max-w-lg mx-auto aspect-4/3 sm:aspect-square md:aspect-4/3 rounded-3xl overflow-visible shadow-premium-large border-4 border-white bg-white group transition-all duration-500 hover:shadow-premium-large"
            >
              {/* Main Premium Dental Image */}
              <div className="w-full h-full rounded-[20px] overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50/50 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                    alt="Devraj Dental Clinic Modern Interior and High Tech Operatory"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    loading="eager"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-primary/40 p-6 text-center gap-3">
                    <ClinicIcon name="Sparkles" className="w-12 h-12 text-primary" />
                    <span className="font-display font-extrabold text-sm tracking-wide text-slate-500">Devraj Dental Clinic</span>
                  </div>
                )}
              </div>

              {/* Float Card 1: ⭐ 5.0 Google Rating Badge */}
              <motion.a
                href={CLINIC_CONFIG.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-premium border border-amber-100/50 flex items-center gap-2.5 hover:scale-105 hover:shadow-premium-large hover:border-amber-200 transition-all duration-300 cursor-pointer glow-rating"
              >
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                  <ClinicIcon name="Star" className="w-5 h-5 fill-amber-500 text-amber-500 animate-pulse-subtle" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs text-slate-800">5.0 ★ Rating</h4>
                  <p className="text-[9px] text-slate-400 font-sans tracking-wider uppercase font-semibold">Verified Google Reviews</p>
                </div>
              </motion.a>

              {/* Float Card 2: Book Appointment Floating Badge */}
              <motion.button
                onClick={onBookClick}
                initial={{ y: 0 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-5 bg-primary text-white px-5 py-3.5 rounded-2xl shadow-premium-large border border-teal-400/20 flex items-center gap-2.5 hover:scale-105 hover:bg-primary-hover transition-all duration-300 cursor-pointer text-left glow-primary"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <ClinicIcon name="Calendar" className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs">Book Appointment</h4>
                  <p className="text-[9px] text-teal-100 font-sans uppercase tracking-wider font-semibold">Instant Slots</p>
                </div>
              </motion.button>

              {/* Float Card 3: Satisfied Patients (Centered overlay at bottom left) */}
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-[8px] font-black">⭐</div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-black">✓</div>
                </div>
                <span className="text-[10px] font-bold text-slate-700">100% Sterile Clinic</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-8 border-t border-slate-100/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Badge 1: Google Rating */}
            <a
              href={CLINIC_CONFIG.googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-100/40 transition-colors justify-center md:justify-start"
            >
              <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                <ClinicIcon name="Star" className="w-6 h-6 fill-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  <span className="font-display font-extrabold text-slate-800 text-sm">⭐ 5.0</span>
                </div>
                <p className="text-xs text-slate-500 font-sans">Google Rating</p>
              </div>
            </a>

            {/* Badge 2: Experienced Dental Care */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl justify-center md:justify-start">
              <div className="w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center text-primary shrink-0">
                <ClinicIcon name="Award" className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-slate-800 text-sm">Experienced Care</span>
                <p className="text-xs text-slate-500 font-sans">Patient-first experts</p>
              </div>
            </div>

            {/* Badge 3: Friendly Environment */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl justify-center md:justify-start">
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-secondary shrink-0">
                <ClinicIcon name="Heart" className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <span className="font-display font-bold text-slate-800 text-sm">Friendly Vibe</span>
                <p className="text-xs text-slate-500 font-sans">Comfortable rooms</p>
              </div>
            </div>

            {/* Badge 4: Affordable Treatment */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl justify-center md:justify-start">
              <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center text-accent shrink-0">
                <ClinicIcon name="IndianRupee" className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="font-display font-bold text-slate-800 text-sm">Affordable Treatment</span>
                <p className="text-xs text-slate-500 font-sans">Transparent pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
