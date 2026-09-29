'use client';

import { useState, useRef, useEffect } from 'react';
import { PROFILE } from '@/lib/utils';

const COMMANDS: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '  help       — show this list',
    '  whoami     — operator identity',
    '  resume     — download resume link',
    '  linkedin   — open LinkedIn',
    '  github     — open GitHub',
    '  tryhackme  — open TryHackMe',
    '  contact    — email address',
    '  clear      — clear terminal',
    '  sudo       — elevated access (easter egg)',
  ],
  whoami: [
    `Name:     ${PROFILE.name}`,
    `Role:     ${PROFILE.title}`,
    `Location: ${PROFILE.location}`,
    `Focus:    Cybersecurity · SOC · VAPT · CTF`,
  ],
  resume: `Resume: ${PROFILE.links.resume} (or use the Download button in Identity)`,
  linkedin: PROFILE.links.linkedin,
  github: PROFILE.links.github,
  tryhackme: PROFILE.links.tryhackme,
  contact: `Email: ${PROFILE.email}`,
  sudo: 'Nice try. Elevation requires the Konami code or console sudo(). Access denied... for now.',
  clear: '__CLEAR__',
};

export default function ContactTerminal() {
  const [history, setHistory] = useState<{ type: 'in' | 'out'; text: string }[]>([
    { type: 'out', text: 'BLACKBOX Contact Terminal v1.0' },
    { type: 'out', text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((h) => [...h, { type: 'in', text: cmd }]);

    const result = COMMANDS[trimmed];
    if (result === '__CLEAR__') {
      setHistory([]);
      return;
    }
    if (result) {
      const lines = Array.isArray(result) ? result : [result];
      setHistory((h) => [...h, ...lines.map((text) => ({ type: 'out' as const, text }))]);

      // Open links
      if (['linkedin', 'github', 'tryhackme'].includes(trimmed) && typeof result === 'string') {
        window.open(result, '_blank', 'noopener,noreferrer');
      }
    } else {
      setHistory((h) => [
        ...h,
        { type: 'out', text: `Command not found: ${trimmed}. Type "help".` },
      ]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(input);
    setInput('');
  };

  return (
    <section className="pl-16 md:pl-56 pr-4 md:pr-12 py-16">
      <div className="max-w-3xl">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs text-cyber-cyan tracking-widest">CT-07</span>
          <h2 className="font-display text-2xl md:text-3xl text-cyber-white">Contact Terminal</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </div>

        <div
          className="panel border-cyber-cyan/20 overflow-hidden"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-cyber-border bg-cyber-darker">
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-red/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-amber/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-green/80" />
            <span className="ml-2 text-[10px] font-mono text-cyber-muted">
              operator@blackbox — contact
            </span>
          </div>

          <div className="p-4 h-80 overflow-y-auto font-mono text-sm">
            {history.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === 'in' ? (
                  <span>
                    <span className="text-cyber-green">operator@blackbox:~$</span>{' '}
                    <span className="text-cyber-white">{line.text}</span>
                  </span>
                ) : (
                  <span className="text-cyber-gray whitespace-pre-wrap">{line.text}</span>
                )}
              </div>
            ))}
            <form onSubmit={onSubmit} className="flex items-center gap-2 mt-1">
              <span className="text-cyber-green shrink-0">operator@blackbox:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-cyber-white caret-cyber-cyan"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </div>

        <p className="mt-4 text-xs text-cyber-muted font-mono">
          Prefer traditional channels?{' '}
          <a href={`mailto:${PROFILE.email}`} className="text-cyber-cyan hover:underline">
            {PROFILE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
