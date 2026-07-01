import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Specialities } from "./components/Specialities";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AppointmentForm } from "./components/AppointmentForm";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TrustBadgeSection } from "./components/TrustBadgeSection";
import { Gallery } from "./components/Gallery";
import { WhatsAppFAB } from "./components/WhatsAppFAB";

export default function App() {
  const handleScrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-primary/20 selection:text-slate-900">
      {/* Sticky Header Navigation */}
      <Navbar onBookClick={handleScrollToAppointment} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner Area */}
        <Hero onBookClick={handleScrollToAppointment} />

        {/* WhatsApp-integrated Instant Booking Form */}
        <AppointmentForm />

        {/* Multi-Badge visual trust section */}
        <TrustBadgeSection />

        {/* Detailed Clinic Introduction */}
        <About />

        {/* Practice Areas / Specialities Grid */}
        <Specialities />

        {/* Core Dental Facilities / Services Grid */}
        <Services />

        {/* Why Choose Us trust features */}
        <WhyChooseUs />

        {/* Visual tour of the clinical premises */}
        <Gallery />

        {/* Aggregate Stars & Verified Patient Testimonials */}
        <Reviews />

        {/* Direct Phone / Mail / Map Contact Panel */}
        <Contact />
      </main>

      {/* Structured Footer Map & Social Handles */}
      <Footer />

      {/* Floating Action Button (FAB) for WhatsApp quick support */}
      <WhatsAppFAB />
    </div>
  );
}
