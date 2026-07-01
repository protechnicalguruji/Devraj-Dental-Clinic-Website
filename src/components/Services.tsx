import React from "react";
import { motion } from "motion/react";
import { CLINIC_SERVICES } from "../data";
import { ClinicIcon } from "./ClinicIcon";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full text-secondary font-bold text-xs uppercase tracking-wider"
          >
            <ClinicIcon name="Activity" className="w-3.5 h-3.5" />
            Core Facilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight"
          >
            Premium Patient Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-lg font-light"
          >
            Experience complete dental wellness. Precision diagnosis, gentle procedures, and custom comfort are standard.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-100 shadow-premium hover:shadow-premium-large transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Upper row: Icon & Badge */}
                <div className="flex items-center justify-between gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-secondary flex items-center justify-center transition-all group-hover:bg-secondary group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-secondary/25 duration-300 glow-accent-hover">
                    <ClinicIcon name={service.iconName} className="w-7 h-7" />
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold bg-blue-50 text-secondary px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-slate-800 text-lg sm:text-xl group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom decorative action block */}
              <div className="mt-6 pt-5 border-t border-slate-50/80 flex items-center justify-between">
                <span className="text-xs text-secondary font-bold group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                  Professional Care
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all flex items-center justify-center">
                  <ClinicIcon name="ChevronRight" className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
