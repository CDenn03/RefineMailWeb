export default function HowItWorks() {
  const steps = [
    ['01', 'Write Your Draft', 'Start typing your email naturally in Gmail or Zimbra. Don\'t worry about polish — just get your thoughts down.'],
    ['02', 'Pick Your Style', 'Open the extension panel and choose from 7 AI-powered styles. Add custom instructions if needed.'],
    ['03', 'Apply & Send', 'Hit "Apply" and your polished email replaces the draft. Review, tweak if needed, and send with confidence.'],
  ]

  return (
    <section className="px-[5%] py-28 bg-[#f5f6f8]" id="how">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">Process</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-3 max-w-[420px]">
          Three steps. Better emails.
        </h2>
        <p className="text-[1rem] font-normal text-[#475569] leading-[1.7] max-w-[480px] mb-14">
          No learning curve. No complex settings. Start refining your emails in under a minute.
        </p>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {steps.map(([num, title, desc], i) => (
            <div key={i} className={`card px-7 py-8 relative reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
              <div className="text-[3.5rem] font-extrabold text-[#0f2a44]/8 leading-none absolute top-5 right-6 select-none tracking-[-0.04em]">
                {num}
              </div>
              <div className="w-11 h-11 rounded-[12px] bg-[#0f2a44] flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(15,42,68,0.3)]">
                <span className="text-white font-extrabold text-[0.95rem]">{num}</span>
              </div>
              <div className="text-[1rem] font-bold text-[#0f172a] mb-2.5 tracking-[-0.01em]">{title}</div>
              <p className="text-[0.875rem] font-normal text-[#64748b] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
