import Link from 'next/link';
import { ArrowRight, Github, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left: intro */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-xs font-mono text-[#A7B1C2] uppercase tracking-wide">Premium Developer Portfolio</span>
          </div>
          <h1 className="font-display text-5xl md:text-[5.5rem] leading-[0.88] tracking-tight text-[#F5F7FA] mb-4">
            Andri <span className="text-[#60A5FA]">A.W</span>
          </h1>
          <p className="text-xl md:text-2xl font-display text-[#22D3EE] mb-3">"I vibe-code things that actually run."</p>
          <p className="text-[#A6ADBB] text-sm md:text-base leading-relaxed mb-6 max-w-lg">
            Full-stack development with AI at the center — messaging gateways, workforce tools, automation, and clean interfaces that ship fast and run reliably.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full hover:bg-[#2563EB] transition-all shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a href="https://github.com/domoiki" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.10] text-[#F5F7FA] text-sm font-medium rounded-full hover:bg-white/[0.05] transition-colors">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Right: terminal panel */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050608]/90 backdrop-blur-2xl shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#090B10]/80">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBF2D]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-2 text-[10px] font-mono text-[#6B7888]">~/agentfolio — zsh</span>
              <Terminal size={12} className="ml-auto text-[#6B7888]" />
            </div>
            <div className="p-5 font-mono text-xs leading-6 text-[#A6ADBB]">
              <div><span className="text-[#8B5CF6]">$</span> <span className="text-[#F5F7FA]">npm run build</span></div>
              <div className="text-[#6B7888]">✓ Compiled successfully in 59s</div>
              <div className="text-[#6B7888]">✓ 8 static pages generated</div>
              <div className="text-[#6B7888]">✓ Zero runtime errors</div>
              <br />
              <div><span className="text-[#8B5CF6]">$</span> <span className="text-[#F5F7FA]">cat profile.md</span></div>
              <div className="text-[#22D3EE]">Andri A.W</div>
              <div className="text-[#A6ADBB]">Brand: Domoiki</div>
              <div className="text-[#A6ADBB]">Focus: AI-assisted dev, automation, practical apps</div>
              <br />
              <div><span className="text-[#8B5CF6]">$</span> <span className="text-[#F5F7FA]">echo $STATUS</span></div>
              <div className="text-[#28C840]">Live. Shipping. Running.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
