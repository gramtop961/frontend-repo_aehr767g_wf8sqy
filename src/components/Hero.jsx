import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Phone } from 'lucide-react';

const Hero = () => {
  const handleScrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Non-blocking gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-[50%] blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, #22d3ee55, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-28 pb-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-300" />
            <span className="text-white/80">Animation • VFX • ArchViz • Character</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Build a studio-ready reel in months, not years
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70">
            Learn 3D Animation, VFX, Architecture Visualization, and Character Modeling with hands-on, production-style projects.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={handleScrollToForm} className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-black font-semibold shadow-lg shadow-cyan-400/30 hover:brightness-95 active:brightness-90 transition">
              <Phone className="h-5 w-5" />
              Get a call back
            </button>
            <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">
              Explore courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
