'use client';

import { motion } from 'framer-motion';
import { CERTS } from '@/lib/utils';
import { Award, BadgeCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="pl-16 md:pl-56 pr-4 md:pr-12 py-16">
      <div className="max-w-5xl">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs text-cyber-cyan tracking-widest">CF-04</span>
          <h2 className="font-display text-2xl md:text-3xl text-cyber-white">Certifications</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </div>

        <p className="text-sm text-cyber-gray mb-10 max-w-2xl">
          Verified credentials collected during the operator&apos;s training pipeline.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative panel p-5 cursor-default perspective-1000"
            >
              {/* Holographic shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-green/5 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 border border-cyber-cyan/30 flex items-center justify-center bg-cyber-cyan/5">
                  <Award size={18} className="text-cyber-cyan" />
                </div>
                <span className="text-[10px] font-mono text-cyber-muted">{cert.id}</span>
              </div>

              <h3 className="text-sm font-medium text-cyber-white leading-snug group-hover:text-cyber-cyan transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-cyber-green mt-2 font-mono">{cert.issuer}</p>
              <p className="text-[11px] text-cyber-muted mt-1">{cert.date}</p>

              <p className="text-xs text-cyber-gray mt-4 leading-relaxed">{cert.description}</p>

              <div className="mt-4 pt-3 border-t border-cyber-border flex items-center gap-1.5 text-[10px] font-mono text-cyber-muted">
                <BadgeCheck size={12} className="text-cyber-green" />
                ID: {cert.credentialId.slice(0, 12)}…
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
