export default function UseCases() {
  const useCases = [
    ['Sales Teams', 'Close more deals with persuasive follow-ups that hit the right tone. Turn cold outreach into warm conversations.'],
    ['Customer Support', 'Respond with empathy and professionalism every time, even on high-volume days.'],
    ['Executives', 'Maintain the authority and clarity expected at the C-suite level with formal, precise communications.'],
    ['Remote Teams', 'Bridge cultural communication gaps across borders and time zones effortlessly.'],
    ['Freelancers', 'Impress clients with polished proposals and professional correspondence.'],
    ['Job Seekers', 'Stand out with professional correspondence that gets responses, from applications to thank-you notes.'],
  ]

  return (
    <section className="px-[5%] py-32 bg-[#0a1e31]">
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-teal mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-teal before:rounded-sm">
        Who it&apos;s for
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
        Built for every<br />professional
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-15 max-lg:grid-cols-2 max-md:grid-cols-1">
        {useCases.map(([title, desc], i) => {
          const delayClass = i % 3 > 0 ? `reveal-delay-${i % 3}` : ''
          return (
            <div key={i} className={`border border-teal/20 rounded-[20px] px-7 py-8 transition-all relative overflow-hidden bg-gradient-to-br from-teal/5 to-navy-4 hover:border-teal/40 hover:shadow-[0_8px_32px_rgba(20,184,166,0.2)] hover:-translate-y-1 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-teal before:to-teal-2 before:scale-x-0 before:origin-left before:transition-transform hover:before:scale-x-100 reveal ${delayClass}`}>
              <div className="w-12 h-12 bg-teal/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-teal rounded"></div>
              </div>
              <div className="font-heading text-base font-bold text-white mb-2">{title}</div>
              <p className="text-[0.88rem] text-white/80 leading-relaxed">{desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
