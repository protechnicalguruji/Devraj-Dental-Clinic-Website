import React, { useState } from "react";
import { motion } from "motion/react";
import { ClinicIcon } from "./ClinicIcon";

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [secondaryImageError, setSecondaryImageError] = useState(false);
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Back decorative pattern */}
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-teal-50 rounded-3xl -z-10"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-4/3 bg-gradient-to-br from-teal-50 to-blue-50/50 flex items-center justify-center"
              >
                {!imageError ? (
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
                    alt="Modern Dental Consultation Room at Devraj Dental Clinic"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-primary/40 p-6 text-center gap-3">
                    <ClinicIcon name="Sparkles" className="w-12 h-12 text-primary animate-pulse-subtle" />
                    <span className="font-display font-extrabold text-sm tracking-wide text-slate-500">Sterilized Treatment Room</span>
                  </div>
                )}
              </motion.div>

              {/* Overlapping Secondary Image showing patient care */}
              {!secondaryImageError && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-10 -left-10 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden md:flex aspect-square bg-slate-50 items-center justify-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&q=80&w=500"
                    alt="Experienced Dentist at Devraj Dental Clinic Gwalior"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => setSecondaryImageError(true)}
                  />
                </motion.div>
              )}

              {/* Smaller overlay card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-8 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[260px] z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-primary shrink-0">
                  <ClinicIcon name="ShieldAlert" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">100% Sterile</h4>
                  <p className="text-xs text-slate-500 font-sans">Hygienic standard clinic space</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Copy & Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-primary font-bold text-sm uppercase tracking-widest block">About Our Clinic</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                About Devraj Dental Clinic
              </h2>
            </div>

            <p className="font-sans text-slate-600 text-lg leading-relaxed">
              Devraj Dental Clinic is dedicated to providing high-quality dental care in a comfortable and hygienic environment. Our focus is on patient satisfaction, advanced treatment methods, and maintaining healthy smiles for families and individuals.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ClinicIcon name="Check" className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-800">Advanced Diagnosis</h4>
                  <p className="text-sm text-slate-500 font-sans">High precision digital examination</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ClinicIcon name="Check" className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-800">Hygienic Space</h4>
                  <p className="text-sm text-slate-500 font-sans">Fully sanitized clinical gear</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ClinicIcon name="Check" className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-800">Prompt Treatments</h4>
                  <p className="text-sm text-slate-500 font-sans">Quick pain relief procedures</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ClinicIcon name="Check" className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-800">Patient Comfort</h4>
                  <p className="text-sm text-slate-500 font-sans">Gentle, trust-driven processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
