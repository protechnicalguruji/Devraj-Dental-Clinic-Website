import React, { useState } from "react";
import { motion } from "motion/react";
import { CLINIC_CONFIG, CLINIC_SPECIALITIES } from "../data";
import { ClinicIcon } from "./ClinicIcon";

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    treatment: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (min 10 digits)";
    }
    if (!formData.date) newErrors.date = "Preferred Date is required";
    if (!formData.time) newErrors.time = "Preferred Time is required";
    if (!formData.treatment) newErrors.treatment = "Please select a treatment";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const optionalMessage = formData.message.trim() ? `\nMessage: ${formData.message.trim()}` : "";

    const textMessage = `Hello Devraj Dental Clinic,

I would like to book an appointment.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Treatment: ${formData.treatment}${optionalMessage}

Please confirm my appointment.`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CLINIC_CONFIG.whatsappNumber}&text=${encodedText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="appointment" className="py-16 md:py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-72 h-72 rounded-full bg-teal-500/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Copy and Trust Badges */}
          <div className="lg:col-span-5 space-y-6 lg:pr-4 text-center lg:text-left">
            <div className="space-y-3">
              <span className="text-primary font-bold text-sm uppercase tracking-widest block">Quick Booking</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight" id="booking-title">
                Book Your Appointment
              </h2>
              <p className="font-sans text-slate-500 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                Schedule your dental visit in less than a minute.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start justify-center gap-4 sm:gap-6 lg:gap-4 pt-2">
              {/* Badge 1: 5.0 Google Rating */}
              <div id="badge-google" className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-100 shadow-sm shrink-0">
                <div className="flex items-center gap-1 text-amber-500">
                  <ClinicIcon name="Star" className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <span className="font-sans font-bold text-sm text-slate-800">⭐ 5.0 Google Rating</span>
              </div>

              {/* Badge 2: Quick Response */}
              <div id="badge-response" className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-100 shadow-sm shrink-0">
                <div className="p-1 rounded-full bg-teal-50 text-teal-600">
                  <ClinicIcon name="Zap" className="w-4 h-4 fill-teal-600 text-teal-600" />
                </div>
                <span className="font-sans font-bold text-sm text-slate-800">Quick Response</span>
              </div>

              {/* Badge 3: Easy WhatsApp Booking */}
              <div id="badge-whatsapp" className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-100 shadow-sm shrink-0">
                <div className="p-1 rounded-full bg-emerald-50 text-emerald-600">
                  <ClinicIcon name="Phone" className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="font-sans font-bold text-sm text-slate-800">Easy WhatsApp Booking</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form Inside Premium Card */}
          <div className="lg:col-span-7">
            <motion.div
              id="appointment-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-premium hover:shadow-premium-large border border-slate-100/80 transition-all duration-300"
            >
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-600 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Mishra"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/10 ${
                        errors.name ? "border-red-500 bg-red-50/10 focus:ring-red-500/10" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-600 block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9425112345"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/10 ${
                        errors.phone ? "border-red-500 bg-red-50/10 focus:ring-red-500/10" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1">
                    <label htmlFor="date" className="text-xs font-semibold text-slate-600 block">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/10 ${
                        errors.date ? "border-red-500 bg-red-50/10 focus:ring-red-500/10" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                    {errors.date && <p className="text-red-500 text-[11px] font-medium">{errors.date}</p>}
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1">
                    <label htmlFor="time" className="text-xs font-semibold text-slate-600 block">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans bg-white focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/10 ${
                        errors.time ? "border-red-500 bg-red-50/10 focus:ring-red-500/10" : "border-slate-200 focus:border-primary"
                      }`}
                    >
                      <option value="">-- Select time slot --</option>
                      <option value="Morning (09:30 AM - 11:30 AM)">Morning (09:30 AM - 11:30 AM)</option>
                      <option value="Midday (11:30 AM - 01:30 PM)">Midday (11:30 AM - 01:30 PM)</option>
                      <option value="Evening (05:00 PM - 07:00 PM)">Evening (05:00 PM - 07:00 PM)</option>
                      <option value="Late Evening (07:00 PM - 08:30 PM)">Late Evening (07:00 PM - 08:30 PM)</option>
                    </select>
                    {errors.time && <p className="text-red-500 text-[11px] font-medium">{errors.time}</p>}
                  </div>
                </div>

                {/* Treatment Required */}
                <div className="space-y-1">
                  <label htmlFor="treatment" className="text-xs font-semibold text-slate-600 block">
                    Treatment Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-sans bg-white focus:outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/10 ${
                      errors.treatment ? "border-red-500 bg-red-50/10 focus:ring-red-500/10" : "border-slate-200 focus:border-primary"
                    }`}
                  >
                    <option value="">-- Select treatment --</option>
                    {CLINIC_SPECIALITIES.map((spec) => (
                      <option key={spec.id} value={spec.title}>
                        {spec.title}
                      </option>
                    ))}
                    <option value="General Consultation">General Consultation</option>
                    <option value="Emergency Treatment">Emergency Dental Support</option>
                    <option value="Other">Other Procedure</option>
                  </select>
                  {errors.treatment && <p className="text-red-500 text-[11px] font-medium">{errors.treatment}</p>}
                </div>

                {/* Message (Optional) */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-600 block">
                    Message <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Any special request or dental issue details"
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm font-sans focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="btn-whatsapp-book"
                  type="submit"
                  className="w-full bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer text-base mt-2 glow-accent-hover"
                >
                  {/* WhatsApp SVG representation */}
                  <svg
                    className="w-5 h-5 text-white fill-current shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.825 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
