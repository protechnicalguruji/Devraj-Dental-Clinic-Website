import React from "react";
import { motion } from "motion/react";
import { CLINIC_FEATURES } from "../data";
import { ClinicIcon } from "./ClinicIcon";

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative side accent blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-500/5 blur-3xl -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Pitch Header */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-primary font-bold text-sm uppercase tracking-widest block">Why Choose Us</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                Crafting Perfect Smiles Safely
              </h2>
            </div>
            
            <p className="font-sans text-slate-500 text-base leading-relaxed">
              At Devraj Dental Clinic, we provide premier healthcare with compassion, stellar hygiene, and clinical expertise.
            </p>
          </div>

          {/* Right Side: Feature Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CLINIC_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-5 items-start cursor-default"
                >
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-primary flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                    <ClinicIcon name={feature.iconName} className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                        <ClinicIcon name="Check" className="w-3 h-3" />
                      </div>
                      <h3 className="font-display font-bold text-slate-800 text-base sm:text-lg">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Curved Wave SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-8 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,151.43,38.74,223.71,51.84,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
