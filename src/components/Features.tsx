export default function Features() {
  const features = [
    ['7 Writing Styles', 'Formal, Friendly, Concise, Persuasive, Apologetic, Casual, and Neutral/Professional. A style for every situation.'],
    ['Custom Instructions', 'Add specific guidance — mention the recipient, context, desired outcome, or any detail to personalize AI output.'],
    ['Real-Time Preview', 'See the AI-refined version before you apply it. Compare with your original with zero commitment.'],
    ['Gmail & Zimbra Support', 'Works seamlessly inside both Gmail and Zimbra compose windows. One extension, two platforms.'],
    ['Privacy First', 'Email content is processed in real-time and never stored. Your data stays yours.'],
    ['One-Click Application', 'Apply refined text directly to your compose window instantly. Your subject line is preserved and improved.'],
  ]

  return (
    <section className="px-[5%] py-32 bg-[#0a1e31] relative overflow-hidden" id="features">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-teal opacity-[0.08] blur-[100px] top-[-100px] right-[-100px]" />
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-teal before:rounded-sm">
        Capabilities
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
        Everything you need<br />for email excellence
      </h2>
      <p className="text-lg text-white/90 leading-relaxed max-w-[560px]">
        A powerful toolkit built for busy professionals who refuse to compromise on communication quality.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-15 max-lg:grid-cols-2 max-md:grid-cols-1">
        {features.map(([title, desc], i) => {
          const delayClass = i % 3 > 0 ? `reveal-delay-${i % 3}` : ''
          return (
            <div key={i} className={`bg-gradient-to-br from-teal/10 to-navy-4 border border-teal/20 rounded-[20px] px-7 py-8 transition-all hover:bg-teal/10 hover:border-teal/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(20,184,166,0.2)] reveal ${delayClass}`}>
              <div className="w-12 h-12 bg-teal/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-teal rounded"></div>
              </div>
              <div className="font-heading text-base font-bold text-white mb-2.5">{title}</div>
              <p className="text-[0.88rem] text-white/70 leading-relaxed">{desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
