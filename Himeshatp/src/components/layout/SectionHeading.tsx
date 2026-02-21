
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-primary"></span>
      </h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
