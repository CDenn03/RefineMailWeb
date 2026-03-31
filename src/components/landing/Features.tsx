const icons = [
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="f" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
]

const iconColors = [
  { bg: '#eef3f8', color: '#124170' },
  { bg: '#f0fdf4', color: '#16a34a' },
  { bg: '#fdf4ff', color: '#9333ea' },
  { bg: '#fff7ed', color: '#ea580c' },
  { bg: '#f0fdfa', color: '#0d9488' },
  { bg: '#fef9c3', color: '#ca8a04' },
]

export default function Features() {
  const features = [
    ['7 Writing Styles', 'Formal, Friendly, Concise, Persuasive, Apologetic, Casual, and Neutral. A style for every situation.'],
    ['Custom Instructions', 'Add specific guidance — mention the recipient, context, or desired outcome to personalize AI output.'],
    ['Real-Time Preview', 'See the AI-refined version before you apply it. Compare with your original with zero commitment.'],
    ['Gmail & Zimbra Support', 'Works seamlessly inside both Gmail and Zimbra compose windows. One extension, two platforms.'],
    ['Privacy First', 'Email content is processed in real-time and never stored. Your data stays yours.'],
    ['One-Click Application', 'Apply refined text directly to your compose window instantly. Subject line preserved and improved.'],
  ]

  return (
    <section className="px-[5%] py-28 bg-white" id="features">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">Capabilities</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-3 max-w-[520px]">
          Everything you need for email excellence
        </h2>
        <p className="text-[1rem] font-normal text-[#475569] leading-[1.7] max-w-[500px] mb-14">
          A powerful toolkit built for busy professionals who refuse to compromise on communication quality.
        </p>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {features.map(([title, desc], i) => (
            <div key={i} className={`card px-6 py-7 reveal ${i % 3 > 0 ? `reveal-delay-${i % 3}` : ''}`}>
              <div className="icon-box" style={{ background: iconColors[i].bg }}>
                <span style={{ color: iconColors[i].color, width: 22, height: 22, display: 'flex' }}>
                  {icons[i]}
                </span>
              </div>
              <div className="text-[0.95rem] font-bold text-[#0f172a] mb-2 tracking-[-0.01em]">{title}</div>
              <p className="text-[0.85rem] font-normal text-[#64748b] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
