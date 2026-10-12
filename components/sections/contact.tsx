import { Github, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121A2A] to-[#0D111B] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B5CF6]/[0.08] rounded-full blur-3xl -translate-y-1/4 translate-x-1/3" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-[#F7F9FC] mb-4">Let's work together</h2>
          <p className="text-[#A7B1C2] text-base leading-relaxed mb-8">
            If you have an interesting project that needs practical engineering — messaging integrations, automation, clean interfaces, or AI-enhanced tools — reach out. No unnecessary meetings, no fluff.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/domoiki" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121A2A] border border-white/[0.10] text-[#F7F9FC] text-sm font-medium rounded-full hover:border-white/[0.25] transition-colors">
              <Github size={16} /> GitHub
            </a>
            <a href="mailto:hello@agentfolio.dev" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full hover:bg-[#2563EB] transition-colors shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <Mail size={16} /> Email <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
