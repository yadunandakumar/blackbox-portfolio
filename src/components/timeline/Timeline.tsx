'use client';

import { motion } from 'framer-motion';
import { TIMELINE } from '@/lib/utils';

const TYPE_STYLES: Record<string, string> = {
  education: 'border-cyber-cyan text-cyber-cyan',
  cert: 'border-cyber-green text-cyber-green',
  skill: 'border-cyber-amber text-cyber-amber',
  project: 'border-cyber-magenta text-cyber-magenta',
  ctf: 'border-cyber-cyan text-cyber-cyan',
  goal: 'border-cyber-green text-cyber-green',
};

export default function Timeline() {
  return (
    <section className="pl-16 md:pl-56 pr-4 md:pr-12 py-16">
      <div className="max-w-3xl">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs text-cyber-cyan tracking-widest">TL-05</span>
          <h2 className="font-display text-2xl md:text-3xl text-cyber-white">Mission Timeline</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyber-cyan via-cyber-border to-cyber-green" />

          <ul className="space-y-8">
            {TIMELINE.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cyber-cyan bg-cyber-black" />
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-cyber-cyan">
                    {item.year} · {item.quarter}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase px-1.5 py-0.5 border ${
                      TYPE_STYLES[item.type] || TYPE_STYLES.skill
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-cyber-white">{item.event}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
