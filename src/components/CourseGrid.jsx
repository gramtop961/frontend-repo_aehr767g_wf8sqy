import React from 'react';
import { Film, Palette, Sparkles, Layers } from 'lucide-react';

const courses = [
  {
    title: '3D Animation',
    desc: 'Character animation, rigging, lighting and storytelling fundamentals for film and games.',
    icon: Sparkles,
    color: 'from-amber-500 to-pink-500',
  },
  {
    title: 'VFX & Compositing',
    desc: 'Green screen, motion tracking, particle FX and professional compositing workflows.',
    icon: Film,
    color: 'from-cyan-500 to-violet-600',
  },
  {
    title: 'Graphic Design',
    desc: 'Branding, typography, layout systems and the craft of powerful visual communication.',
    icon: Palette,
    color: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Motion Design',
    desc: 'Tell stories with kinetic type, transitions and micro-animations that captivate.',
    icon: Layers,
    color: 'from-green-500 to-emerald-600',
  },
];

const CourseCard = ({ title, desc, icon: Icon, color }) => (
  <div className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 overflow-hidden hover:scale-[1.02] transition">
    <div className={`absolute -right-10 -top-10 w-36 h-36 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${color}`} />
    <div className="relative">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg shadow-black/20`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const CourseGrid = () => {
  return (
    <section id="courses" className="relative bg-neutral-950 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Creative Courses</h2>
            <p className="mt-2 text-neutral-300 max-w-2xl">
              Industry-vetted paths that take you from fundamentals to production-ready. Explore options inspired by leading programs like Craft Creative.
            </p>
          </div>
          <a
            href="https://craftedu.in/craft-courses/craft-creative/graphics-animation/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-fuchsia-300 hover:text-fuchsia-200"
          >
            See reference curriculum ↗
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
