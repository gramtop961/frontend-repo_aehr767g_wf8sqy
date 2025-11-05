import React from 'react';
import { Film, Sparkles, Home, Cube } from 'lucide-react';

const courses = [
  {
    title: '3D Animation',
    desc: 'Timing, posing, and polish across shots that match studio workflows.',
    icon: Cube,
    color: 'from-cyan-400/30 to-transparent',
  },
  {
    title: 'VFX & Compositing',
    desc: 'Tracking, keying, and simulations with production-grade techniques.',
    icon: Sparkles,
    color: 'from-fuchsia-400/30 to-transparent',
  },
  {
    title: 'Architecture Visualization',
    desc: 'Lighting, materials, and photoreal scenes for real-world clients.',
    icon: Home,
    color: 'from-emerald-400/30 to-transparent',
  },
  {
    title: 'Character Modeling',
    desc: 'Sculpting forms, retopo, and texturing for animation-ready assets.',
    icon: Film,
    color: 'from-amber-400/30 to-transparent',
  },
];

const Card = ({ title, desc, icon: Icon, color }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur transition hover:bg-white/10">
    <div className={`pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
    <div className="relative z-10 flex items-start gap-4">
      <div className="rounded-xl bg-white/10 p-3 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </div>
);

const CourseGrid = () => {
  return (
    <section id="courses" className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Choose your path</h2>
          <p className="mt-2 text-white/70 text-sm sm:text-base">Four focused tracks to build portfolio-ready work.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {courses.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
