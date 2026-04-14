export default function FinalCTA() {
  return (
    <section className="px-[5%] py-28 bg-white relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#0f2a44] opacity-[0.05] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="card px-12 py-16 text-center max-w-[760px] mx-auto max-md:px-7 max-md:py-10">
          <div className="section-label justify-center">Early Access</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-4">
            Ready to transform your email communication?
          </h2>
          <p className="text-[1rem] font-normal text-[#475569] leading-[1.7] mb-9 max-w-[480px] mx-auto">
            Install in under 2 minutes. Clone the repo, add your OpenAI key, and load it into Chrome — no store listing required.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-9">
            <a href="https://github.com/CDenn03/RefineMail" target="_blank" rel="noopener noreferrer" className="bg-[#0f2a44] text-white text-[0.9rem] font-semibold px-7 py-3.5 rounded-full border-none cursor-pointer no-underline inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(15,42,68,0.38)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(15,42,68,0.48)] hover:bg-[#124170]">
              Get Early Access
              <span className="bg-white/20 text-[0.65rem] font-bold px-1.5 py-0.5 rounded-full tracking-wide">FREE</span>
            </a>
            <a href="#demo" className="bg-white text-[#334155] text-[0.9rem] font-medium px-7 py-3.5 rounded-full border border-[#dde3ea] cursor-pointer no-underline inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all hover:border-[#124170]/40 hover:shadow-[0_4px_16px_rgba(18,65,112,0.1)]">
              View Demo First
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {['🔒 Your key, your data', '⚡ 2-min install', '🛠 Open source', '⭐ MIT License'].map(label => (
              <div key={label} className="text-[0.78rem] font-medium text-[#94a3b8]">{label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
