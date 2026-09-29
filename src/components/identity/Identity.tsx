'use client';

import { motion } from 'framer-motion';
import { PROFILE } from '@/lib/utils';
import { MapPin, GraduationCap, Target, Brain, Terminal } from 'lucide-react';

const FACTS = [
  'Prefers attacking a system to understand how to defend it',
  'Believes clean code is a security feature',
  'Runs CTFs like they are production incidents',
  'Documents everything — future self is the first customer',
  'Linux is home. Windows is a target. Cloud is the frontier.',
];

export default function Identity() {
  return (
    <section className="pl-16 md:pl-56 pr-4 md:pr-12 py-12">
      <div className="max-w-5xl">
        <SectionHeader code="ID-01" title="Intelligence Profile" />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 panel p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 blur-3xl rounded-full" />
            <div className="flex items-center gap-2 text-cyber-cyan text-xs font-mono mb-4">
              <Brain size={14} />
              BIOGRAPHY
            </div>
            <p className="text-cyber-gray leading-relaxed text-sm md:text-base">
              {PROFILE.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-cyber-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-cyber-cyan" />
                {PROFILE.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal size={12} className="text-cyber-green" />
                Operator ID: YM-2024
              </span>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="panel p-6"
          >
            <div className="flex items-center gap-2 text-cyber-green text-xs font-mono mb-4">
              <GraduationCap size={14} />
              EDUCATION
            </div>
            <h3 className="font-display text-lg text-cyber-white">
              {PROFILE.education.university}
            </h3>
            <p className="text-sm text-cyber-cyan mt-1">{PROFILE.education.degree}</p>
            <p className="text-xs text-cyber-muted mt-2 font-mono">{PROFILE.education.period}</p>
            <ul className="mt-4 space-y-1">
              {PROFILE.education.focus.map((f) => (
                <li key={f} className="text-xs text-cyber-gray flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyber-cyan rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Philosophy + Facts */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel p-6"
          >
            <div className="flex items-center gap-2 text-cyber-magenta text-xs font-mono mb-4">
              <Target size={14} />
              CYBER PHILOSOPHY
            </div>
            <blockquote className="text-cyber-white text-sm leading-relaxed border-l-2 border-cyber-magenta pl-4">
              &ldquo;You cannot defend what you do not understand. Build the attacker&apos;s mindset,
              then use it to harden every system you touch.&rdquo;
            </blockquote>
            <p className="mt-4 text-xs text-cyber-gray">
              Focus areas: Offensive security • Defensive monitoring • Secure software development •
              Cloud security foundations • SIEM & detection engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="panel p-6"
          >
            <div className="text-cyber-amber text-xs font-mono mb-4">OPERATOR NOTES</div>
            <ul className="space-y-2.5">
              {FACTS.map((fact, i) => (
                <li key={i} className="text-xs text-cyber-gray flex gap-2">
                  <span className="text-cyber-cyan font-mono shrink-0">0{i + 1}</span>
                  {fact}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ code, title }: { code: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-cyber-cyan tracking-widest">{code}</span>
      <h2 className="font-display text-2xl md:text-3xl text-cyber-white tracking-wide">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
    </div>
  );
}
