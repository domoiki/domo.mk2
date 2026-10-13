'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Command, ArrowRight, Github, Sparkles, Code2, Mail, Home, User, Wrench, Phone } from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    {
      id: 'home',
      label: 'Go to Home',
      description: 'Navigate to top of portfolio',
      icon: <Home size={16} />,
      action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false); },
    },
    {
      id: 'about',
      label: 'Go to About',
      description: 'Navigate to the about section',
      icon: <User size={16} />,
      action: () => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
    },
    {
      id: 'projects',
      label: 'Open Projects',
      description: 'Navigate to project explorer',
      icon: <Wrench size={16} />,
      action: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
    },
    {
      id: 'skills',
      label: 'Go to Skills',
      description: 'Navigate to skills section',
      icon: <Code2 size={16} />,
      action: () => { document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
    },
    {
      id: 'contact',
      label: 'Go to Contact',
      description: 'Navigate to contact section',
      icon: <Phone size={16} />,
      action: () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); },
    },
    {
      id: 'github',
      label: 'Open GitHub',
      description: 'Open domoiki profile on GitHub',
      icon: <Github size={16} />,
      action: () => { window.open('https://github.com/domoiki', '_blank'); setOpen(false); },
    },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#121A2A]/90 border border-white/[0.10] text-sm text-[#A7B1C2] shadow-2xl backdrop-blur-xl hover:text-[#F5F7FA] hover:border-white/[0.20] transition-all"
        aria-label="Open command palette (Ctrl+K)"
      >
        <Command size={14} /> <span className="hidden sm:inline">Command</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[#080A0F]/70 backdrop-blur-md" onClick={() => setOpen(false)}>
          <div
            className="absolute top-[20vh] left-1/2 -translate-x-1/2 w-[92%] max-w-xl rounded-2xl bg-[#0D111B]/95 border border-white/[0.10] shadow-2xl overflow-hidden backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
              <Search size={16} className="text-[#6B7888]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-sm text-[#F5F7FA] placeholder:text-[#6B7888] outline-none"
              />
              <button onClick={() => setOpen(false)} className="text-[#6B7888] hover:text-[#F5F7FA]" aria-label="Close"><X size={16} /></button>
            </div>
            <div className="max-h-[50vh] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-6 text-sm text-[#6B7888] text-center">No commands found.</div>
              ) : (
                filtered.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={() => cmd.action()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
                      idx === selectedIndex ? 'bg-[#3B82F6]/10 text-[#F5F7FA]' : 'text-[#A7B1C2] hover:bg-white/[0.03] hover:text-[#F5F7FA]'
                    }`}
                  >
                    <span className="text-[#6B7888]">{cmd.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{cmd.label}</div>
                      <div className="text-xs text-[#6B7888] truncate">{cmd.description}</div>
                    </div>
                    <ArrowRight size={12} className="text-[#6B7888] opacity-40" />
                  </button>
                ))
              )}
            </div>
            <div className="px-4 py-2 border-t border-white/[0.06] text-[10px] text-[#6B7888] flex gap-4">
              <span>↑ ↓ Navigate</span>
              <span>↵ Execute</span>
              <span>Esc Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
