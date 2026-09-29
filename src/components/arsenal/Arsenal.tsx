'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/utils';
import { Crosshair, Shield, Code2, BookOpen } from 'lucide-react';

const CATEGORIES = [
  {
    key: 'recon' as const,
    title: 'Recon Kit',
    icon: Crosshair,
    color: 'text-cyber-cyan',
    border: 'hover:border-cyber-cyan/40',
    glow: 'group-hover:shadow-cyber',
  },
  {
    key: 'defense' as const,
    title: 'Defense Kit',
    icon: Shield,
    color: 'text-cyber-green',
    border: 'hover:border-cyber-green/40',
    glow: 'group-hover:shadow-green',
  },
  {
    key: 'programming' as const,
    title: 'Programming',
    icon: Code2,
    color: 'text-cyber-magenta',
    border: 'hover:border-cyber-magenta/40',
    glow: 'group-hover:shadow-magenta',
  },
  {
    key: 'concepts' as const,
    title: 'Security Concepts',
    icon: BookOpen,
    color: 'text-cyber-amber',
    border: 'hover:border-cyber-amber/40',
    glow: '',
  },
];

const LEVEL_COLOR: Record<string, string> = {
  strong: 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
  operational: 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30',
  learning: 'bg-cyber-amber/20 text-cyber-amber border-cyber-amber/30',
  exploring: 'bg-cyber-magenta/20 text-cyber-magenta border-cyber-magenta/30',
};

export default function Arsenal() {
  return (
    <section className="pl-16 md:pl-56 pr-4 md:pr-12 py-16">
      <div className="max-w-5xl">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs text-cyber-cyan tracking-widest">AR-02</span>
          <h2 className="font-display text-2xl md:text-3xl text-cyber-white">Cyber Arsenal</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </div>

        <p className="text-sm text-cyber-gray mb-10 max-w-2xl">
          Tools and concepts currently loaded into the operator&apos;s kit. Inventory is actively expanded through labs, CTFs, and coursework.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, catIdx) => {
            const Icon = cat.icon;
            const items = SKILLS[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08 }}
                className={`group panel p-5 transition-all duration-300 ${cat.border} ${cat.glow}`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon size={16} className={cat.color} />
                  <h3 className={`font-mono text-sm tracking-wide ${cat.color}`}>{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-3 py-2 border-b border-cyber-border/50 last:border-0"
                    >
                      <div>
                        <span className="text-sm text-cyber-white font-medium">{item.name}</span>
                        <p className="text-[11px] text-cyber-muted mt-0.5">{item.desc}</p>
                      </div>
                      <span
                        className={`shrink-0 text-[10px] font-mono px-2 py-0.5 border rounded-sm uppercase ${
                          LEVEL_COLOR[item.level] || LEVEL_COLOR.learning
                        }`}
                      >
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
