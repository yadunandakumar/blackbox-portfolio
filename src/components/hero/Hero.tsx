'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ExternalLink, Shield } from 'lucide-react';
import { PROFILE } from '@/lib/utils';
import type { ModuleId } from '@/app/page';
import { useState, useEffect } from 'react';

interface Props {
  onNavigate: (id: ModuleId) => void;
}

export default function Hero({ onNavigate }: Props) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % PROFILE.roles.length);
    }, 2800);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative pl-16 md:pl-56 pr-4 md:pr-12 pt-16 md:pt-24 pb-12">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-cyber-cyan/30 bg-cyber-cyan/5 text-[11px] font-mono text-cyber-cyan tracking-widest"
        >
          <Shield size={12} />
          CLASSIFIED PROFILE // CLEARANCE LEVEL: OPERATOR
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cyber-white leading-[1.1]"
        >
          <span className="text-cyber-cyan text-glow">YADUNANDA</span>
          <br />
          <span className="text-cyber-white">KUMAR MURARI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-4 h-8 overflow-hidden"
        >
          <motion.p
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-mono text-lg md:text-xl text-cyber-green"
          >
            // {PROFILE.roles[roleIndex]}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 max-w-2xl text-cyber-gray text-sm md:text-base leading-relaxed"
        >
          {PROFILE.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href={PROFILE.links.resume}
            download
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-cyan text-cyber-black font-mono text-sm font-semibold hover:bg-cyber-green transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>

          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyber-border text-cyber-white font-mono text-sm hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyber-border text-cyber-white font-mono text-sm hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href={PROFILE.links.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyber-border text-cyber-white font-mono text-sm hover:border-cyber-green hover:text-cyber-green transition-colors"
          >
            <ExternalLink size={16} />
            TryHackMe
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {(['arsenal', 'missions', 'certs', 'contact'] as ModuleId[]).map((id) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider border border-cyber-muted text-cyber-gray hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
            >
              {id}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}