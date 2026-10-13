import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-[#F5F7FA] mb-3">Skills & Tools</h2>
        <p className="text-[#A7B1C2] text-sm max-w-lg">Categorized technologies used across projects — without arbitrary percentages or progress bars.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((cat) => (
          <div key={cat.title} className="rounded-3xl border border-white/[0.08] bg-[#0F131A]/40 backdrop-blur-md p-5 hover:border-white/[0.12] transition-colors">
            <h3 className="text-xs font-mono text-[#6B7888] uppercase tracking-wider mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item.label}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${
                    item.accent === 'blue' ? 'bg-[#3B82F6]/10 text-[#60A5FA] border-[#3B82F6]/20' :
                    item.accent === 'cyan' ? 'bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/20' :
                    item.accent === 'violet' ? 'bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/20' :
                    item.accent === 'teal' ? 'bg-[#14B8A6]/10 text-[#2DD4BF] border-[#14B8A6]/20' :
                    item.accent === 'indigo' ? 'bg-[#6366F1]/10 text-[#818CF8] border-[#6366F1]/20' :
                    item.accent === 'yellow' ? 'bg-amber-400/10 text-amber-300 border-amber-400/20' :
                    item.accent === 'magenta' ? 'bg-[#E879F9]/10 text-[#F0ABFC] border-[#E879F9]/20' :
                    'bg-white/[0.04] text-[#A7B1C2] border-white/[0.08]'
                  }`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
