import React from "react";
import { motion } from "motion/react";
import { CLINIC_SPECIALITIES } from "../data";
import { ClinicIcon } from "./ClinicIcon";

export const Specialities: React.FC = () => {
  return (
    <section id="specialities" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 bg-teal-50 border border-teal-100 px-3.5 py-1 rounded-full text-primary font-bold text-xs uppercase tracking-wider"
          >
            <ClinicIcon name="Crown" className="w-3.5 h-3.5" />
            Areas of Practice
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight"
          >
            Our Dental Specialities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-lg font-light"
          >
            Specialized dental care services using advanced procedures in Gwalior.
          </motion.p>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CLINIC_SPECIALITIES.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group bg-white p-6 rounded-2xl border border-slate-100/80 hover:border-teal-100 shadow-premium hover:shadow-premium-large transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Plate */}
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-primary flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white glow-primary-hover">
                  <ClinicIcon name={spec.iconName} className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-800 text-base leading-snug group-hover:text-primary transition-colors">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-xs leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>

              {/* Decorative subtle dot */}
              <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end">
                <span className="text-[10px] text-slate-300 font-mono tracking-widest uppercase">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
