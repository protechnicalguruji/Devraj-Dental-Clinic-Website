import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClinicIcon } from "./ClinicIcon";

interface GalleryItem {
  id: string;
  url: string;
  category: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    category: "Clinic",
    alt: "Modern bright operating room with advanced dental chair"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800",
    category: "Treatment",
    alt: "Professional dentist performing checkup on a patient"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    category: "Patient Care",
    alt: "Smiling happy patient in the dental chair"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=800",
    category: "Consultation",
    alt: "Dentist showing dental digital x-ray diagnosis"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    category: "Equipment",
    alt: "State of the art sterile dental instruments"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    category: "Clinic",
    alt: "Clean, professional, welcoming reception and waiting lobby"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    category: "Patient Care",
    alt: "Happy smile showing healthy white teeth"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    category: "Patient Care",
    alt: "Happy, healthy smiling family after dental checkup"
  }
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = ["All", "Clinic", "Treatment", "Patient Care", "Consultation", "Equipment"];

  const filteredItems = (selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory)
  ).filter(item => !failedImages[item.id]);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      {/* Decorative blurred accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-100 px-3.5 py-1 rounded-full text-primary font-bold text-xs uppercase tracking-wider">
            <ClinicIcon name="Sparkles" className="w-3.5 h-3.5" />
            Our Clinic Gallery
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Take a Look Inside
          </h2>
          <p className="font-sans text-slate-500 text-lg font-light leading-relaxed">
            A visual tour of our modern facilities, sterile treatment zones, and happy smiling patients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md glow-primary"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-large border border-slate-100 bg-slate-50 cursor-pointer transition-all duration-300"
                onClick={() => setLightboxImage(item)}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={() => setFailedImages(prev => ({ ...prev, [item.id]: true }))}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-display font-bold text-sm leading-snug">
                    {item.alt}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <ClinicIcon name="X" className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.url}
                alt={lightboxImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                onError={() => {
                  setFailedImages(prev => ({ ...prev, [lightboxImage.id]: true }));
                  setLightboxImage(null);
                }}
              />
              <div className="p-5 bg-slate-900 border-t border-slate-800 text-slate-300">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                  {lightboxImage.category}
                </span>
                <p className="text-white font-display font-bold text-base leading-snug">
                  {lightboxImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
