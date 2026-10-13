import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectsOverview() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-[#F5F7FA] mb-2">Projects</h2>
          <p className="text-[#A7B1C2] text-sm">Selected work — actual applications, not mockups.</p>
        </div>
        <Link href="#projects" className="hidden md:inline-flex text-sm text-[#3B82F6] hover:text-[#60A5FA] font-medium">View all →</Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl border border-white/[0.08] bg-[#0F131A]/50 backdrop-blur-md p-5 hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/15">{project.category}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${project.status === 'Live' ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20' : 'bg-amber-400/10 text-amber-300 border-amber-400/20'}`}>{project.status}</span>
            </div>
            <h3 className="font-display text-xl text-[#F5F7FA] mb-1">{project.title}</h3>
            <p className="text-[#A7B1C2] text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-[#6B7888] border border-white/[0.06]">{s}</span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#F5F7FA] bg-[#3B82F6] hover:bg-[#2563EB] px-3 py-1.5 rounded-lg transition-colors">
                  Demo <ExternalLink size={10} />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#A7B1C2] border border-white/[0.10] hover:text-[#F5F7FA] hover:border-white/[0.20] px-3 py-1.5 rounded-lg transition-colors">
                  Source
                </a>
              )}
              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-xs text-[#3B82F6] hover:text-[#60A5FA] px-3 py-1.5 transition-colors ml-auto">
                Details <ArrowUpRight size={10} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
