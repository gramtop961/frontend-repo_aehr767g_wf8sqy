import React from 'react';
import { Phone } from 'lucide-react';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

function App() {
  const handleScrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white">Flames Academy</a>
          <div className="flex items-center gap-2">
            <button onClick={handleScrollToForm} className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-3 py-2 text-black font-semibold hover:brightness-95 active:brightness-90 transition">
              <Phone className="h-4 w-4" />
              Call me back
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <CourseGrid />
        <LeadCapture />
      </main>

      <Footer />
    </div>
  );
}

export default App;
