'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootSequence from '@/components/hero/BootSequence';
import Hero from '@/components/hero/Hero';
import Navigation from '@/components/layout/Navigation';
import Identity from '@/components/identity/Identity';
import Arsenal from '@/components/arsenal/Arsenal';
import MissionLogs from '@/components/missions/MissionLogs';
import Certifications from '@/components/certs/Certifications';
import Timeline from '@/components/timeline/Timeline';
import ThreatDashboard from '@/components/threat/ThreatDashboard';
import ContactTerminal from '@/components/contact/ContactTerminal';
import CursorSpotlight from '@/components/effects/CursorSpotlight';
import MatrixRain from '@/components/effects/MatrixRain';
import { EASTER_EGGS } from '@/lib/utils';

export type ModuleId =
  | 'boot'
  | 'identity'
  | 'arsenal'
  | 'missions'
  | 'certs'
  | 'timeline'
  | 'threat'
  | 'contact';

const MODULES: { id: ModuleId; label: string; code: string }[] = [
  { id: 'identity', label: 'Identity', code: 'ID-01' },
  { id: 'arsenal', label: 'Arsenal', code: 'AR-02' },
  { id: 'missions', label: 'Mission Logs', code: 'ML-03' },
  { id: 'certs', label: 'Certifications', code: 'CF-04' },
  { id: 'timeline', label: 'Timeline', code: 'TL-05' },
  { id: 'threat', label: 'Threat Intel', code: 'TI-06' },
  { id: 'contact', label: 'Contact Terminal', code: 'CT-07' },
];

export default function BlackboxOS() {
  const [booted, setBooted] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleId>('identity');
  const [matrixMode, setMatrixMode] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState<string[]>([]);
  const [showFlag, setShowFlag] = useState(false);

  // Boot complete
  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      setKonamiProgress((prev) => {
        const next = [...prev, key].slice(-10);
        if (next.join(',') === sequence.join(',')) {
          setMatrixMode(true);
          setShowFlag(true);
          setTimeout(() => setShowFlag(false), 8000);
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Sudo easter egg via console
  useEffect(() => {
    // @ts-expect-error intentional global
    window.sudo = () => {
      console.log('%c' + EASTER_EGGS.sudo, 'color: #00ff9d; font-size: 14px; font-family: monospace;');
      console.log('%cFlag: ' + EASTER_EGGS.flag, 'color: #00f0ff; font-family: monospace;');
      setMatrixMode(true);
    };
    console.log(
      '%cBLACKBOX // Cyber OS\n%cType sudo() for elevated access.',
      'color: #00f0ff; font-size: 16px; font-weight: bold;',
      'color: #8a8aa3; font-size: 12px;'
    );
  }, []);

  if (!booted) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
      <CursorSpotlight />
      {matrixMode && <MatrixRain onClose={() => setMatrixMode(false)} />}

      {/* Ambient grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      {/* Top status bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-10 border-b border-cyber-border bg-cyber-darker/90 backdrop-blur-md flex items-center justify-between px-4 text-[11px] font-mono text-cyber-gray">
        <div className="flex items-center gap-4">
          <span className="text-cyber-cyan font-semibold tracking-widest">BLACKBOX</span>
          <span className="text-cyber-muted">//</span>
          <span>CYBER OS v1.0</span>
          <span className="hidden sm:inline text-cyber-green">● SECURE</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">OPERATOR: YADUNANDA</span>
          <span className="text-cyber-cyan">
            {new Date().toLocaleTimeString('en-IN', { hour12: false })} IST
          </span>
        </div>
      </header>

      <Navigation
        modules={MODULES}
        active={activeModule}
        onSelect={setActiveModule}
      />

      <main className="relative z-10 pt-10 pb-20 min-h-screen">
        <AnimatePresence mode="wait">
          {activeModule === 'identity' && (
            <ModuleWrapper key="identity">
              <Hero onNavigate={setActiveModule} />
              <Identity />
            </ModuleWrapper>
          )}
          {activeModule === 'arsenal' && (
            <ModuleWrapper key="arsenal">
              <Arsenal />
            </ModuleWrapper>
          )}
          {activeModule === 'missions' && (
            <ModuleWrapper key="missions">
              <MissionLogs />
            </ModuleWrapper>
          )}
          {activeModule === 'certs' && (
            <ModuleWrapper key="certs">
              <Certifications />
            </ModuleWrapper>
          )}
          {activeModule === 'timeline' && (
            <ModuleWrapper key="timeline">
              <Timeline />
            </ModuleWrapper>
          )}
          {activeModule === 'threat' && (
            <ModuleWrapper key="threat">
              <ThreatDashboard />
            </ModuleWrapper>
          )}
          {activeModule === 'contact' && (
            <ModuleWrapper key="contact">
              <ContactTerminal />
            </ModuleWrapper>
          )}
        </AnimatePresence>
      </main>

      {/* Flag toast */}
      <AnimatePresence>
        {showFlag && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] panel px-6 py-4 border-cyber-green shadow-green font-mono text-sm"
          >
            <span className="text-cyber-green">FLAG CAPTURED:</span>{' '}
            <span className="text-cyber-cyan">{EASTER_EGGS.flag}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden CTF flag in source */}
      {/* BLACKBOX{y0u_f0und_th3_s3cr3t_fl4g_0f_th3_0s} */}
    </div>
  );
}

function ModuleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
