import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Flames Academy. All rights reserved.</div>
        <nav className="flex items-center gap-5 text-sm text-white/80">
          <a href="#courses" className="hover:text-white">Courses</a>
          <a href="#lead-form" className="hover:text-white">Get a call</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
