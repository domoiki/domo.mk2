import Link from 'next/link';
import { ArrowUpRight, Code2, Sparkles, Zap, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function BentoOverview() {
  const featured = projects.find((p) => p.featured && p.slug === 'telegram-ai-gateway');

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-12 gap-4">
        {/* Intro card */}
        <div className="md:col-span-7 rounded-3xl border border-white/[0.08] bg-[#121A2A]/60 backdrop-blur-md p-7 hover:border-white/[0.14] transition-colors">
          <div className="flex items-center gap-2 mb-4 text-[#22D3EE] text-xs font-mono uppercase tracking-wider">
            <Sparkles size={14} /> About
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-[#F7F9FC] mb-5 leading-tight">Building practical software with AI at the center.</h2>
          {profile.bio.map((line, i) => (
            <p key={i} className="text-[#A7B1C2] text-sm md:text-base leading-relaxed mb-4">{line}</p>
          ))}
          <div className="flex flex-wrap gap-2 mt-4">
            {profile.interests.map((int) => (
              <span key={int} className="text-[11px] px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#A7B1C2]">{int}</span>
            ))}
          </div>
        </div>

        {/* Featured project */}
        <div className="md:col-span-5 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121A2A] to-[#0D111B] p-7 relative overflow-hidden hover:border-[#3B82F6]/30 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/[0.08] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="flex items-center gap-2 mb-3 text-[#60A5FA] text-xs font-mono uppercase tracking-wider">
            <Zap size={14} /> Featured Project
          </div>
          <h3 className="font-display text-xl text-[#F7F9FC] mb-2">{featured?.title}</h3>
          <p className="text-[#A7B1C2] text-sm mb-4 leading-relaxed">{featured?.tagline}</p>
          <Link href={`/projects/${featured?.slug || '#'}`} className="inline-flex items-center gap-1.5 text-sm text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-medium">
            View details <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Stack summary */}
        <div className="md:col-span-4 rounded-3xl border border-white/[0.08] bg-[#121A2A]/60 backdrop-blur-md p-7 hover:border-white/[0.14] transition-colors">
          <div className="flex items-center gap-2 mb-4 text-[#8B5CF6] text-xs font-mono uppercase tracking-wider">
            <Code2 size={14} /> Stack
          </div>
          <h3 className="font-display text-lg text-[#F7F9FC] mb-4">TypeScript, React, Next.js, Tailwind, Node.js</h3>
          <p className="text-[#A7B1C2] text-sm leading-relaxed mb-4">Modern frontend with server-rendered architecture, AI integrations, and clean component design.</p>
          <a href="#skills" className="text-xs text-[#6B7888] hover:text-[#A7B1C2] underline underline-offset-2">Full stack details →</a>
        </div>

        {/* AI & automation */}
        <div className="md:col-span-4 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0D111B] to-[#121A2A] p-7 hover:border-[#22D3EE]/30 transition-colors">
          <div className="flex items-center gap-2 mb-3 text-[#22D3EE] text-xs font-mono uppercase tracking-wider">
            <Sparkles size={14} /> AI & Automation
          </div>
          <h3 className="font-display text-lg text-[#F7F9FC] mb-2">AI-Assisted Development</h3>
          <p className="text-[#A7B1C2] text-sm leading-relaxed">Using AI to write, review, and refactor faster — without losing control over the architecture or the output quality.</p>
        </div>

        {/* Contact invitation */}
        <div className="md:col-span-4 rounded-3xl border border-white/[0.08] bg-[#121A2A]/60 backdrop-blur-md p-7 hover:border-[#8B5CF6]/30 transition-colors relative overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8B5CF6]/[0.08] rounded-full blur-2xl" />
          <div className="flex items-center gap-2 mb-3 text-[#8B5CF6] text-xs font-mono uppercase tracking-wider">
            <Mail size={14} /> Contact
          </div>
          <h3 className="font-display text-lg text-[#F7F9FC] mb-2">Open to interesting work</h3>
          <p className="text-[#A7B1C2] text-sm leading-relaxed mb-3">If you have a project that needs practical engineering — not fluff — let's talk.</p>
          <a href="#contact" className="inline-block text-sm text-[#8B5CF6] hover:text-[#A78BFA] font-medium">Get in touch →</a>
        </div>
      </div>
    </section>
  );
}
