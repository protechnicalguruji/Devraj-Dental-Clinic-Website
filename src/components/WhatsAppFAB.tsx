import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_CONFIG } from "../data";

export const WhatsAppFAB: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  // Auto-show tooltip after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=Hi!%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20Devraj%20Dental%20Clinic.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 select-none pointer-events-none">
      {/* Tooltip Message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pointer-events-auto flex items-center gap-2 bg-white text-slate-800 text-xs font-medium py-2 px-3 rounded-xl shadow-premium border border-slate-100 max-w-xs mb-1"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Need help? Chat with us instantly!</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
                setHasDismissed(true);
              }}
              className="text-slate-400 hover:text-slate-600 transition-colors p-0.5 ml-1"
              aria-label="Dismiss message"
              id="whatsapp-tooltip-dismiss"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto relative group"
      >
        {/* Glowing Pulsing Outer Ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-35 blur-md scale-110 group-hover:scale-125 transition-transform duration-300 animate-pulse-subtle" />
        
        {/* Animated Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Link Anchor */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-floating-action-button"
          className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-premium-large transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          aria-label="Chat with Devraj Dental Clinic on WhatsApp"
          title="Chat with us on WhatsApp"
          onClick={() => {
            // Dismiss tooltip on click
            setShowTooltip(false);
          }}
        >
          {/* WhatsApp Custom High-Quality Vector SVG */}
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.115 1.01 11.487 1.01c-5.436 0-9.858 4.37-9.862 9.8-.001 1.803.493 3.568 1.431 5.124l-1.016 3.71 3.822-.99c1.52.83 3.111 1.267 4.793 1.267zm12.335-6.92c-.318-.159-1.885-.918-2.178-1.023-.294-.105-.508-.159-.723.159-.214.318-.83.105-1.017.318-.186.213-.372.264-.69.105-.318-.159-1.341-.49-2.55-1.558-.94-.83-1.574-1.855-1.759-2.173-.186-.318-.02-.49.139-.648.143-.142.318-.37.477-.556.159-.185.213-.318.318-.53.106-.212.053-.4-.027-.557-.08-.159-.723-1.722-.991-2.358-.26-.615-.527-.53-.723-.54-.187-.008-.401-.01-.615-.01s-.561.08-.854.4c-.294.318-1.121 1.085-1.121 2.647 0 1.561 1.147 3.07 1.305 3.282.159.212 2.257 3.411 5.467 4.778.763.325 1.36.52 1.824.666.767.241 1.465.207 2.016.126.615-.091 1.885-.762 2.152-1.46.267-.698.267-1.298.187-1.424-.079-.126-.293-.212-.611-.371z" />
          </svg>

          {/* Desktop Hover text label */}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-display font-semibold text-sm whitespace-nowrap hidden md:inline-block">
            Chat with us
          </span>
        </a>
      </motion.div>
    </div>
  );
};
