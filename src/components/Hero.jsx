import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.height / 2) / rect.height;
    const layers = containerRef.current?.querySelectorAll('[data-parallax]');
    layers?.forEach((el) => {
      const depth = parseFloat(el.getAttribute('data-parallax')) || 10;
      el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[78vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950" />

      {/* Floating parallax accents */}
      <div
        data-parallax="12"
        className="pointer-events-none absolute top-20 left-10 w-28 h-28 rounded-full bg-fuchsia-600/20 blur-2xl"
      />
      <div
        data-parallax="-10"
        className="pointer-events-none absolute bottom-24 right-10 w-32 h-32 rounded-full bg-indigo-600/20 blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-white/80 text-sm mb-6">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>Animation • VFX • Architecture Viz • Character Modeling</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Turn Imagination into Impact
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
          Industry-ready programs in Animation, VFX and Design. Crafted for mobile-first experiences — quick to load, retina-sharp, and irresistibly engaging.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={scrollToForm} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white px-6 py-3 font-medium shadow-lg shadow-fuchsia-600/30 transition">
            <Rocket className="w-5 h-5" />
            Start Your Creative Journey
          </button>
          <a href="#courses" className="text-neutral-300 hover:text-white transition">
            Explore work & courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
