import React from 'react';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-white">Craft Creative</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
            <a className="hover:text-white" href="#courses">Courses</a>
            <a className="hover:text-white" href="#lead-form">Talk to us</a>
          </nav>
          <a href="#lead-form" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm px-3 py-1.5">Contact</a>
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
