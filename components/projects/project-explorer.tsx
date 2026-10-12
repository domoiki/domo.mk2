'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectExplorer() {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      return matchesQuery && matchesCategory;
    });
  }, [query, categoryFilter]);

  return (
    <section id="project-explorer" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-[#F7F9FC] mb-1">Project Explorer</h2>
          <p className="text-[#6B7888] text-sm">Search, filter, and explore the portfolio.</p>
        </div>
        <div className="flex items-center gap-2 relative max-w-sm w-full md:w-auto">
          <Search size={16} className="absolute left-3 text-[#6B7888]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full md:w-72 pl-9 pr-9 py-2.5 rounded-xl bg-[#121A2A]/60 border border-white/[0.08] text-sm text-[#F7F9FC] placeholder:text-[#6B7888] focus:outline-none focus:border-[#3B82F6]/40 transition-colors"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-3 text-[#6B7888] hover:text-[#F7F9FC]" aria-label="Clear search"><X size={14} /></button>
          )}
        </div>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`text-xs px-3.5 py-1.5 rounded-full border transition-all whitespace-nowrap ${
              categoryFilter === cat
                ? 'bg-[#3B82F6]/10 text-[#60A5FA] border-[#3B82F6]/30'
                : 'bg-white/[0.03] text-[#A7B1C2] border-white/[0.08] hover:border-white/[0.16] hover:text-[#F7F9FC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <Link key={p.id} href={`/projects/${p.slug}`} className="group block rounded-3xl border border-white/[0.08] bg-[#121A2A]/40 backdrop-blur-md p-6 hover:border-white/[0.16] transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/15">{p.category}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${p.status === 'Live' ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20' : 'bg-amber-400/10 text-amber-300 border-amber-400/20'}`}>{p.status}</span>
            </div>
            <h3 className="font-display text-lg text-[#F7F9FC] mb-2">{p.title}</h3>
            <p className="text-[#A7B1C2] text-sm mb-4">{p.tagline}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.stack.slice(0, 3).map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-[#6B7888] border border-white/[0.06]">{s}</span>
              ))}
            </div>
            <span className="text-xs text-[#3B82F6] group-hover:text-[#60A5FA] font-medium inline-flex items-center gap-1">Details <ArrowUpRight size={10} /></span>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#6B7888] text-sm">No projects match your search or filter. Try adjusting the filters.</div>
      )}
    </section>
  );
}
