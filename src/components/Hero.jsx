import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/8bQm0QM1rglfdJkq/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/30 to-neutral-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-white/80 text-sm mb-6">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>Animation • VFX • Graphics • Motion Design</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Turn Imagination into Impact
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
          Join industry-ready programs in Animation, VFX and Creative Design. Our landing page is crafted to inspire—share your number and we’ll guide you to the perfect course.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={scrollToForm} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white px-6 py-3 font-medium shadow-lg shadow-fuchsia-600/30 transition">
            <Rocket className="w-5 h-5" />
            Start Your Creative Journey
          </button>
          <a href="#courses" className="text-neutral-300 hover:text-white transition">
            Explore courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
