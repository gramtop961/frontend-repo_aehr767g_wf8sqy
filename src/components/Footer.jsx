import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Craft Creative — Animation • VFX • Design</p>
        <div className="flex items-center gap-4 text-neutral-400 text-sm">
          <a className="hover:text-white" href="#courses">Courses</a>
          <a className="hover:text-white" href="#lead-form">Talk to us</a>
          <a className="hover:text-white" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
