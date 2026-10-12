'use client';
import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../ui/theme-provider';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolved } = useTheme();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const cycleTheme = () => {
    if (theme === 'system') setTheme('dark');
    else if (theme === 'dark') setTheme('light');
    else setTheme('system');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080A0F]/70 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight text-[#F7F9FC] hover:text-[#60A5FA] transition-colors">
          Agentfolio
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A7B1C2]">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#F7F9FC] transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="https://github.com/domoiki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#F7F9FC] transition-colors" aria-label="GitHub">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <button
            onClick={cycleTheme}
            className="ml-2 text-xs px-3 py-1 rounded-full border border-white/10 hover:border-white/20 hover:text-[#F7F9FC] bg-white/[0.03] hover:bg-white/[0.06] transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </nav>
        <button
          className="md:hidden text-[#F7F9FC]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#080A0F]/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-[#A7B1C2] hover:text-[#F7F9FC] py-1">{l.label}</a>
          ))}
          <a href="https://github.com/domoiki" target="_blank" rel="noopener noreferrer" className="block text-[#A7B1C2] hover:text-[#F7F9FC] py-1">GitHub</a>
          <button onClick={() => { cycleTheme(); setMobileOpen(false); }} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
            Theme: {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>
      )}
    </header>
  );
}
