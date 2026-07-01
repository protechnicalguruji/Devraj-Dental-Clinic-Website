import React from "react";
import { motion } from "motion/react";
import { ClinicIcon } from "./ClinicIcon";

interface TrustMetric {
  id: string;
  iconName: string;
  value: string;
  label: string;
  colorClass: string;
  bgClass: string;
}

const TRUST_METRICS: TrustMetric[] = [
  {
    id: "t1",
    iconName: "Star",
    value: "5.0 ★ Rating",
    label: "Google Business Verified",
    colorClass: "text-amber-500 fill-amber-500",
    bgClass: "bg-amber-50"
  },
  {
    id: "t2",
    iconName: "Smile",
    value: "5,000+ Happy Patients",
    label: "Joyful Smiling Families",
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-50"
  },
  {
    id: "t3",
    iconName: "Award",
    value: "Quality Care First",
    label: "Premium Dental Standards",
    colorClass: "text-blue-500",
    bgClass: "bg-blue-50"
  },
  {
    id: "t4",
    iconName: "Sparkles",
    value: "100% Sterile & Hygienic",
    label: "Strict Sanity Control",
    colorClass: "text-teal-500",
    bgClass: "bg-teal-50"
  },
  {
    id: "t5",
    iconName: "UserRoundCheck",
    value: "Experienced Staff",
    label: "Certified Dental Surgeons",
    colorClass: "text-indigo-500",
    bgClass: "bg-indigo-50"
  }
];

export const TrustBadgeSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Curved Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-stretch">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center justify-between transition-all duration-300 group"
            >
              {/* Icon area */}
              <div className={`w-12 h-12 rounded-full ${metric.bgClass} flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110`}>
                <ClinicIcon name={metric.iconName} className={`w-6 h-6 ${metric.colorClass}`} />
              </div>

              {/* Text content */}
              <div className="space-y-1 mt-auto">
                <h4 className="font-display font-black text-base text-slate-900 tracking-tight leading-tight">
                  {metric.value}
                </h4>
                <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-slate-400">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
