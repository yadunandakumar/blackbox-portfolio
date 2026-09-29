'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/utils';
import { ChevronDown, ExternalLink, Lock, Target, AlertTriangle, Wrench, Layers } from 'lucide-react';

export default function MissionLogs() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0]?.id ?? null);

  return (
    <section className="pl-16 md:pl-56 pr-4 md:pr-12 py-16">
      <div className="max-w-5xl">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs text-cyber-cyan tracking-widest">ML-03</span>
          <h2 className="font-display text-2xl md:text-3xl text-cyber-white">Mission Logs</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </div>

        <p className="text-sm text-cyber-gray mb-10 max-w-2xl">
          Classified operation files. Each mission documents objective, threat model, solution, and tooling.
        </p>

        <div className="space-y-4">
          {PROJECTS.map((mission, idx) => {
            const isOpen = openId === mission.id;
            return (
              <motion.article
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="panel overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : mission.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-cyber-panel/50 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="hidden sm:flex flex-col items-center justify-center w-14 h-14 border border-cyber-border bg-cyber-darker shrink-0">
                      <Lock size={14} className="text-cyber-cyan mb-1" />
                      <span className="text-[9px] font-mono text-cyber-muted">{mission.id}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-[10px] text-cyber-cyan tracking-wider">
                          {mission.codename}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 border border-cyber-green/40 text-cyber-green">
                          {mission.status}
                        </span>
                        <span className="text-[10px] font-mono text-cyber-muted">
                          {mission.classification}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg text-cyber-white font-medium mt-1 truncate">
                        {mission.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-cyber-gray shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-0 border-t border-cyber-border space-y-5">
                        <DossierRow icon={Target} label="Objective" color="text-cyber-cyan">
                          {mission.objective}
                        </DossierRow>
                        <DossierRow icon={AlertTriangle} label="Threat Model" color="text-cyber-red">
                          {mission.threat}
                        </DossierRow>
                        <DossierRow icon={Wrench} label="Solution" color="text-cyber-green">
                          {mission.solution}
                        </DossierRow>
                        <DossierRow icon={Layers} label="Architecture" color="text-cyber-amber">
                          {mission.architecture}
                        </DossierRow>

                        <div>
                          <div className="text-[10px] font-mono text-cyber-muted mb-2 tracking-wider">
                            TOOLS DEPLOYED
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {mission.tools.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-1 text-[11px] font-mono border border-cyber-border text-cyber-gray bg-cyber-darker"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-cyber-muted mb-2 tracking-wider">
                            KEY HIGHLIGHTS
                          </div>
                          <ul className="space-y-1.5">
                            {mission.highlights.map((h) => (
                              <li key={h} className="text-xs text-cyber-gray flex gap-2">
                                <span className="text-cyber-cyan">▸</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={mission.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-2 px-4 py-2 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono hover:bg-cyber-cyan/10 transition-colors"
                        >
                          <ExternalLink size={14} />
                          View Source on GitHub
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DossierRow({
  icon: Icon,
  label,
  color,
  children,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={`flex items-center gap-1.5 text-[10px] font-mono tracking-wider mb-1.5 ${color}`}>
        <Icon size={12} />
        {label}
      </div>
      <p className="text-sm text-cyber-gray leading-relaxed pl-5">{children}</p>
    </div>
  );
}
