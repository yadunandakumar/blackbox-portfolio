'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Server, ShieldAlert, Globe } from 'lucide-react';

export default function ThreatDashboard() {
  const [uptime, setUptime] = useState(0);
  const [clock, setClock] = useState('');

  useEffect(() => {
    const start = Date.now();
    const t = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
      setClock(
        new Date().toLocaleTimeString('en-IN', {
          hour12: false,
          timeZone: 'Asia/Kolkata',
        })
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const formatUptime = (s: number) => {
    const h = Math.floor(s / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((s % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  return (
    <section className="pl-16 md:pl-56 pr-4 md:pr-12 py-16">
      <div className="max-w-5xl">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-xs text-cyber-cyan tracking-widest">TI-06</span>
          <h2 className="font-display text-2xl md:text-3xl text-cyber-white">
            Threat Intelligence
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Widget icon={Clock} label="System Clock" value={clock || '--:--:--'} sub="IST" />
          <Widget icon={Server} label="Session Uptime" value={formatUptime(uptime)} sub="ACTIVE" />
          <Widget icon={ShieldAlert} label="Security Status" value="SECURE" sub="NO ALERTS" green />
          <Widget icon={Activity} label="Modules Online" value="07 / 07" sub="NOMINAL" />
        </div>

        {/* Decorative widgets */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel p-5"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan mb-4">
              <Globe size={14} />
              GLOBAL ACTIVITY FEED (SIMULATED)
            </div>
            <div className="space-y-2 font-mono text-[11px] text-cyber-gray h-40 overflow-hidden">
              {[
                '[INFO] Port scan detected — 203.0.113.x blocked',
                '[OK] Integrity check passed on /etc/shadow',
                '[INFO] New CTF room completed on TryHackMe',
                '[WARN] Brute-force attempt rate-limited',
                '[OK] TLS certificate valid — 89 days remaining',
                '[INFO] Operator logged mission VAULTKEEPER',
                '[OK] Firewall rules synchronized',
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="truncate"
                >
                  <span className="text-cyber-muted mr-2">
                    {new Date().toLocaleTimeString('en-IN', { hour12: false })}
                  </span>
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="panel p-5"
          >
            <div className="text-xs font-mono text-cyber-green mb-4">LINUX TERMINAL WIDGET</div>
            <div className="bg-cyber-darker border border-cyber-border p-3 font-mono text-[11px] h-40 overflow-auto">
              <p className="text-cyber-green">operator@blackbox:~$</p>
              <p className="text-cyber-gray mt-1">uname -a</p>
              <p className="text-cyber-muted">
                Linux blackbox 6.8.0-cyber #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
              </p>
              <p className="text-cyber-green mt-2">operator@blackbox:~$</p>
              <p className="text-cyber-gray">whoami</p>
              <p className="text-cyber-muted">yadunanda</p>
              <p className="text-cyber-green mt-2">operator@blackbox:~$</p>
              <p className="text-cyber-gray">cat /etc/motd</p>
              <p className="text-cyber-cyan">BLACKBOX // Stay curious. Stay sharp.</p>
              <p className="text-cyber-green mt-2 cursor-blink">operator@blackbox:~$</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Widget({
  icon: Icon,
  label,
  value,
  sub,
  green,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  green?: boolean;
}) {
  return (
    <div className="panel p-4">
      <div className="flex items-center gap-2 text-[10px] font-mono text-cyber-muted mb-2">
        <Icon size={12} />
        {label}
      </div>
      <div className={`text-lg font-mono font-semibold ${green ? 'text-cyber-green' : 'text-cyber-white'}`}>
        {value}
      </div>
      <div className="text-[10px] font-mono text-cyber-muted mt-1">{sub}</div>
    </div>
  );
}
