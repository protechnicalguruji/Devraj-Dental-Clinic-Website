import React from "react";
import { motion } from "motion/react";
import { CLINIC_CONFIG, CLINIC_REVIEWS } from "../data";
import { ClinicIcon } from "./ClinicIcon";

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-3.5 py-1 rounded-full text-amber-500 font-bold text-xs uppercase tracking-wider"
          >
            <ClinicIcon name="Star" className="w-3.5 h-3.5 fill-amber-500" />
            Patient Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-500 text-lg font-light"
          >
            Verified reviews from patients who experienced our professional, comfortable treatments.
          </motion.p>
        </div>

        {/* Aggregate trust badge */}
        <div className="bg-white max-w-lg mx-auto rounded-3xl p-6 border border-slate-100/80 shadow-premium hover:shadow-premium-large transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 glow-rating">
          <div className="flex items-center gap-4">
            {/* Google Logo Placeholder Representation */}
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-display font-black text-xl text-slate-700 select-none border border-slate-100">
              G
            </div>
            <div>
              <h3 className="font-display font-extrabold text-slate-800 text-base">Google Business</h3>
              <p className="text-xs text-slate-400 font-sans">Verified Customer Ratings</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="font-display font-black text-slate-800 text-2xl">5.0</span>
              <span className="text-xs text-slate-400 font-sans ml-1">/ 5.0</span>
              <div className="flex gap-0.5 mt-0.5 justify-end">
                {[...Array(5)].map((_, i) => (
                  <ClinicIcon key={i} name="Star" className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Individual Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-premium hover:shadow-premium-large transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars and Date */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <ClinicIcon key={i} name="Star" className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{review.date}</span>
                </div>

                {/* Content text */}
                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Patient info */}
              <div className="mt-6 pt-5 border-t border-slate-50 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-primary font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-slate-800 text-sm leading-tight">{review.name}</h4>
                  <p className="text-[10px] text-slate-400 font-sans">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href={CLINIC_CONFIG.googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-sm px-6 py-3 rounded-full shadow-premium hover:shadow-premium-large transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            View Google Reviews
            <ClinicIcon name="ExternalLink" className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
