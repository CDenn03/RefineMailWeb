export default function Testimonials() {
  const testimonials = [
    ['SK', 'Sarah K.', 'VP of Sales, TechCorp', 5, 'linear-gradient(135deg, #0f2a44, #124170)', 'AI Email Refiner saved me at least 2 hours a day. I used to agonize over every email before sending — now I draft quickly, hit refine, and send confidently. It\'s become as essential as spell-check.'],
    ['MR', 'Marcus R.', 'Head of CX, SaaS Platform', 5, 'linear-gradient(135deg, #10b981, #059669)', 'Our customer support team uses it constantly. Response quality went up and customer satisfaction scores followed. The \'apologetic\' style alone has de-escalated so many difficult situations.'],
    ['PT', 'Priya T.', 'UX Consultant, Freelance', 4, 'linear-gradient(135deg, #7c3aed, #6d28d9)', 'As a freelancer working with international clients, matching the right tone was always stressful. Now I just pick the right style and go. Total game changer.'],
  ]

  return (
    <section className="px-[5%] py-28 bg-white">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">Social Proof</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-14 max-w-[440px]">
          Loved by 10,000+ professionals
        </h2>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {testimonials.map(([initials, name, title, stars, bg, text], i) => (
            <div key={i} className={`card px-6 py-7 reveal reveal-delay-${i}`}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className={`w-4 h-4 ${s < (stars as number) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[0.9rem] font-normal leading-[1.75] text-[#334155] mb-5">&ldquo;{text as string}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#f1f5f9]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[0.85rem] text-white shrink-0" style={{ background: bg as string }}>
                  {initials as string}
                </div>
                <div>
                  <div className="text-[0.875rem] font-semibold text-[#0f172a]">{name as string}</div>
                  <div className="text-[0.75rem] font-normal text-[#94a3b8]">{title as string}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
