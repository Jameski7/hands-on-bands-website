import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { useEffect } from "react";

export default function App() {
  // Set document title and meta description for SEO
  useEffect(() => {
    document.title = "Hands on Bands | Mobile Chiropractic, Physical Therapy & Massage for Touring Musicians UK & Ireland";
    
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/logo.png';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen">
      <header role="banner">
        <Hero />
      </header>
      <main role="main">
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster 
        position="top-center"
        richColors
        closeButton
      />
    </div>
  );
}