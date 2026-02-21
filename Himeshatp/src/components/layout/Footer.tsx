
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Himesha Pathirana. Built with Integrity.
        </p>
        <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-brand-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
