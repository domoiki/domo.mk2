import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 text-xs text-[#6B7888]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span>Agentfolio — Andri A.W (Domoiki)</span>
        <a href="https://github.com/domoiki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#A7B1C2] transition-colors">
          <Github size={14} /> GitHub
        </a>
      </div>
    </footer>
  );
}
