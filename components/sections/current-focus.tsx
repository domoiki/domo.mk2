import { currentFocus } from '@/data/current-focus';

export default function CurrentFocus() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-r from-[#121A2A]/60 to-[#0D111B]/60 backdrop-blur-md p-7 md:p-10">
        <h2 className="font-display text-2xl md:text-3xl text-[#F5F7FA] mb-8">Current Focus</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {currentFocus.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/[0.06] bg-[#121A2A]/30 p-5 hover:border-white/[0.12] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg text-[#F5F7FA]">{item.title}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/15">{item.stage}</span>
              </div>
              <p className="text-[#A7B1C2] text-sm leading-relaxed mb-3">{item.description}</p>
              <span className="text-[10px] text-[#6B7888] font-mono">Updated {item.updatedAt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
