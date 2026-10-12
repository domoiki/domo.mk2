import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Abstract decorative shapes */}
      <div className="absolute top-[-10%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/[0.07] blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#22D3EE]/[0.05] blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="text-[#22D3EE] text-sm font-mono tracking-wide uppercase mb-4">Premium Developer Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-tight text-[#F7F9FC] mb-6">
            Andri <span className="text-[#60A5FA]">A.W</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A7B1C2] leading-relaxed mb-2 max-w-xl">
            I vibe-code things that actually run.
          </p>
          <p className="text-[#6B7888] mb-8 max-w-xl leading-relaxed">
            Full-stack development with AI at the center — messaging gateways, workforce tools, automation, and clean interfaces that ship.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full hover:bg-[#2563EB] transition-colors shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a href="https://github.com/domoiki" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-[#F7F9FC] text-sm font-medium rounded-full hover:bg-white/[0.04] transition-colors">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl bg-gradient-to-br from-[#121A2A] to-[#0D111B] p-8">
            {/* Abstract code-like composition */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-2xl" />
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-[#22D3EE]/10 rounded-full blur-xl" />
            <div className="font-mono text-xs leading-loose text-[#6B7888] space-y-1 relative z-10">
              <div className="text-[#A7B1C2]"><span className="text-[#8B5CF6]">const</span> agent = <span className="text-[#F7F9FC]">new Agentfolio</span>;</div>
              <div className="text-[#A7B1C2]"><span className="text-[#8B5CF6]">await</span> agent.<span className="text-[#60A5FA]">build()</span>;</div>
              <div className="text-[#A7B1C2]"><span className="text-[#8B5CF6]">await</span> agent.<span className="text-[#60A5FA]">vibeCode()</span>;</div>
              <div className="text-[#A7B1C2]"><span className="text-[#8B5CF6]">await</span> agent.<span className="text-[#60A5FA]">ship()</span>;</div>
              <br />
              <div className="text-[#6B7888]">// Results: working apps, clean APIs, no fluff.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
