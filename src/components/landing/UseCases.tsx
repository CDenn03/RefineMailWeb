const iconColors = [
  { bg: '#eef3f8', color: '#124170' },
  { bg: '#f0fdf4', color: '#16a34a' },
  { bg: '#fdf4ff', color: '#9333ea' },
  { bg: '#fff7ed', color: '#ea580c' },
  { bg: '#f0fdfa', color: '#0d9488' },
  { bg: '#fef9c3', color: '#ca8a04' },
]

export default function UseCases() {
  const useCases = [
    ['Sales Teams', 'Close more deals with persuasive follow-ups that hit the right tone. Turn cold outreach into warm conversations.'],
    ['Customer Support', 'Respond with empathy and professionalism every time, even on high-volume days.'],
    ['Executives', 'Maintain the authority and clarity expected at the C-suite level with formal, precise communications.'],
    ['Remote Teams', 'Bridge cultural communication gaps across borders and time zones effortlessly.'],
    ['Freelancers', 'Impress clients with polished proposals and professional correspondence.'],
    ['Job Seekers', 'Stand out with professional correspondence that gets responses, from applications to thank-you notes.'],
  ]

  const emojis = ['📈', '🎧', '💼', '🌍', '🧑‍💻', '📝']

  return (
    <section className="px-[5%] py-28 bg-[#f5f6f8]">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">Who it&apos;s for</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-3 max-w-[420px]">
          Built for every professional
        </h2>
        <p className="text-[1rem] font-normal text-[#475569] leading-[1.7] max-w-[480px] mb-14">
          Whether you&apos;re closing deals or writing thank-you notes, there&apos;s a style for you.
        </p>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {useCases.map(([title, desc], i) => (
            <div key={i} className={`card px-6 py-7 reveal ${i % 3 > 0 ? `reveal-delay-${i % 3}` : ''}`}>
              <div className="icon-box" style={{ background: iconColors[i].bg }}>
                <span className="text-xl">{emojis[i]}</span>
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
