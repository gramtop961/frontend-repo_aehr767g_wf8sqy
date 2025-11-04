import React from 'react';
import { Film, Cube, Home, User } from 'lucide-react';

const showcases = [
  {
    title: '3D Animation Reel',
    desc: 'Cinematic sequences, lighting, rigging, and storytelling brought to life.',
    icon: Cube,
    color: 'from-amber-500 to-pink-500',
  },
  {
    title: 'VFX & Compositing',
    desc: 'Keying, tracking, particles and seamless integrations for film & ads.',
    icon: Film,
    color: 'from-cyan-500 to-violet-600',
  },
  {
    title: 'Architecture Visualization',
    desc: 'Photo-real interiors, exteriors and walkthroughs for real estate & design.',
    icon: Home,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Character Modeling',
    desc: 'Stylized and realistic characters optimized for animation & games.',
    icon: User,
    color: 'from-rose-500 to-orange-500',
  },
];

const ShowcaseCard = ({ title, desc, icon: Icon, color }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
    <div className={`absolute -right-10 -top-10 w-36 h-36 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${color}`} />
    <div className="relative">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg shadow-black/20`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
      <div className="mt-5 h-28 rounded-xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-inset ring-white/10 group-hover:scale-[1.02] transition transform" />
    </div>
  </div>
);

const CourseGrid = () => {
  return (
    <section id="courses" className="relative bg-neutral-950 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Showcase & Courses</h2>
            <p className="mt-2 text-neutral-300 max-w-2xl">
              Explore featured work across 3D Animation, VFX, ArchViz and Character Modeling. Get inspired, then talk to us for the right path.
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
          {showcases.map((c) => (
            <ShowcaseCard key={c.title} {...c} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/5">
            <h4 className="text-white font-semibold">Fast-track Programs</h4>
            <p className="text-sm text-neutral-300 mt-1">12–24 week paths to get studio-ready quickly.</p>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/5">
            <h4 className="text-white font-semibold">Career Mentorship</h4>
            <p className="text-sm text-neutral-300 mt-1">Portfolio reviews, interview prep and placement support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
