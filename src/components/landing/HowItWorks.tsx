export default function HowItWorks() {
  const steps = [
    ['1', 'Write Your Draft', 'Start typing your email naturally in Gmail or Zimbra. Don\'t worry about polish — just get your thoughts down. AI Email Refiner works directly inside your compose window.'],
    ['2', 'Pick Your Style', 'Open the extension panel and choose from 7 AI-powered styles. Add custom instructions if needed. Preview the result instantly before committing.'],
    ['3', 'Apply & Send', 'Hit "Apply" and your polished email replaces the draft in your compose window. Review, tweak if needed, and send with confidence. Done.'],
  ]

  return (
    <section className="px-[5%] py-32 bg-[#124170]" id="how">
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold mb-4 ">
        Process
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
        Three steps.<br />Better emails.
      </h2>
      <p className="text-lg text-white/90 leading-relaxed max-w-[560px]">
        No learning curve. No complex settings. Start refining your emails in under a minute.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-15 relative max-lg:grid-cols-1">
        {steps.map(([num, title, desc], i) => (
          <div key={i} className={`bg-navy-4 rounded-[20px] px-7 py-9 relative z-10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] border border-white/10 reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
            <div className="w-[52px] h-[52px] bg-gold rounded-[14px] flex items-center justify-center font-heading text-[1.3rem] font-extrabold text-navy mb-5 shadow-[0_4px_14px_rgba(200,169,110,0.3)]">
              {num}
            </div>
            <div className="font-heading text-lg font-bold text-white mb-2.5">{title}</div>
            <p className="text-[0.92rem] text-white/80 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
