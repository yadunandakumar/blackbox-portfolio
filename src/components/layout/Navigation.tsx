'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ModuleId } from '@/app/page';

interface Module {
  id: ModuleId;
  label: string;
  code: string;
}

interface Props {
  modules: Module[];
  active: ModuleId;
  onSelect: (id: ModuleId) => void;
}

export default function Navigation({ modules, active, onSelect }: Props) {
  return (
    <nav className="fixed left-0 top-10 bottom-0 z-40 w-16 md:w-52 border-r border-cyber-border bg-cyber-darker/80 backdrop-blur-md flex flex-col py-6">
      <div className="px-3 mb-6 hidden md:block">
        <div className="text-[10px] tracking-[0.25em] text-cyber-gray font-mono uppercase">
          Modules
        </div>
      </div>

      <ul className="flex-1 flex flex-col gap-1 px-2">
        {modules.map((mod) => {
          const isActive = active === mod.id;
          return (
            <li key={mod.id}>
              <button
                onClick={() => onSelect(mod.id)}
                className={cn(
                  'w-full text-left px-3 py-2.5 rounded-sm font-mono text-xs transition-all duration-200 group relative',
                  isActive
                    ? 'bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30'
                    : 'text-cyber-gray hover:text-cyber-white hover:bg-cyber-panel border border-transparent'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute left-0 top-1 bottom-1 w-0.5 bg-cyber-cyan"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="hidden md:inline tracking-wide">{mod.label}</span>
                <span className="md:hidden text-[10px]">{mod.code.split('-')[0]}</span>
                <span
                  className={cn(
                    'hidden md:block text-[10px] mt-0.5',
                    isActive ? 'text-cyber-cyan/60' : 'text-cyber-muted group-hover:text-cyber-gray'
                  )}
                >
                  {mod.code}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="px-3 pt-4 border-t border-cyber-border hidden md:block">
        <div className="text-[10px] text-cyber-muted font-mono">
          STATUS: <span className="text-cyber-green">ONLINE</span>
        </div>
      </div>
    </nav>
  );
}
