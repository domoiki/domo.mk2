import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="#projects" className="inline-flex items-center gap-1.5 text-sm text-[#3B82F6] hover:text-[#60A5FA] mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121A2A] to-[#0D111B] p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
          <h1 className="font-display text-3xl md:text-5xl text-[#F7F9FC] mb-4 relative z-10">{project.title}</h1>
          <p className="text-[#A7B1C2] text-lg leading-relaxed mb-6 relative z-10">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {project.stack.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-[#A7B1C2] border border-white/[0.08]">{s}</span>
            ))}
          </div>
          <div className="flex gap-3 relative z-10">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-[#3B82F6] text-white rounded-full hover:bg-[#2563EB] transition-colors shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                Demo <ExternalLink size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-4 py-2 border border-white/[0.10] text-[#F7F9FC] rounded-full hover:bg-white/[0.04] transition-colors">
                Source <Github size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/[0.08] bg-[#121A2A]/30 p-6">
            <h2 className="font-display text-xl text-[#F7F9FC] mb-3">Purpose</h2>
            <p className="text-[#A7B1C2] text-sm leading-relaxed">{project.purpose}</p>
          </div>
          <div className="rounded-3xl border border-white/[0.08] bg-[#121A2A]/30 p-6">
            <h2 className="font-display text-xl text-[#F7F9FC] mb-3">Solution</h2>
            <p className="text-[#A7B1C2] text-sm leading-relaxed">{project.solution}</p>
          </div>
          <div className="md:col-span-2 rounded-3xl border border-white/[0.08] bg-[#121A2A]/30 p-6">
            <h2 className="font-display text-xl text-[#F7F9FC] mb-4">Features</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <li key={f} className="text-[#A7B1C2] text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
