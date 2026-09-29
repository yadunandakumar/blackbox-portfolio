'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  'BLACKBOX BIOS v2.4.1',
  'Initializing secure kernel...',
  'Loading cryptographic modules... OK',
  'Mounting encrypted volumes... OK',
  'Starting intrusion detection... OK',
  'Establishing secure channels... OK',
  'Loading operator profile: YADUNANDA',
  'Verifying integrity signatures... OK',
  'Access control: GRANTED',
  'Welcome to BLACKBOX // Cyber OS',
];

interface Props {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: Props) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [phase, setPhase] = useState<'logs' | 'grant'>('logs');

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    BOOT_LOGS.forEach((log, index) => {
      const timer = setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log]);

        if (index === BOOT_LOGS.length - 1) {
          setTimeout(() => setPhase('grant'), 500);
        }
      }, index * 380);

      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (phase === 'grant') {
      const timer = setTimeout(() => {
        onComplete();
      }, 1800);

      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-cyber-darker flex items-center justify-center font-mono">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 w-full max-w-xl px-6">
        <AnimatePresence mode="wait">
          {phase === 'logs' ? (
            <motion.div
              key="logs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-1.5 text-sm"
            >
              <div className="text-cyber-cyan text-xs tracking-[0.3em] mb-6 font-display">
                SYSTEM BOOT
              </div>

              {visibleLogs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-cyber-gray"
                >
                  <span className="text-cyber-green mr-2">›</span>
                  {log}
                </motion.div>
              ))}

              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-cyber-cyan"
              >
                █
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="grant"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <div className="inline-block border border-cyber-green px-10 py-6 shadow-green">
                <div className="text-cyber-green text-2xl md:text-3xl font-display tracking-[0.2em] text-glow-green">
                  ACCESS GRANTED
                </div>

                <div className="mt-2 text-cyber-gray text-xs tracking-widest">
                  OPERATOR AUTHENTICATED
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}