export default function Testimonials() {
  const testimonials = [
    ['SK', 'Sarah K.', 'VP of Sales, TechCorp', '★★★★★', 'linear-gradient(135deg, #c8a96e, #a07840)', 'AI Email Refiner saved me at least 2 hours a day. I used to agonize over every email before sending — now I draft quickly, hit refine, and send confidently. It\'s become as essential as spell-check.'],
    ['MR', 'Marcus R.', 'Head of CX, SaaS Platform', '★★★★★', 'linear-gradient(135deg, #4a8c6f, #2d6e50)', 'Our customer support team uses it constantly. Response quality went up and customer satisfaction scores followed. The \'apologetic\' style alone has de-escalated so many difficult situations.'],
    ['PT', 'Priya T.', 'UX Consultant, Freelance', '★★★★☆', 'linear-gradient(135deg, #1a5a8a, #0f2a44)', 'As a freelancer working with international clients, matching the right tone was always stressful. Now I just pick the right style and go. Total game changer.'],
  ]

  return (
    <section className="px-[5%] py-32 bg-[#0a1e31]">
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold mb-4">
        Social Proof
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
        Loved by 10,000+<br />professionals
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-15 max-lg:grid-cols-2 max-md:grid-cols-1">
        {testimonials.map(([initials, name, title, stars, bg, text], i) => (
          <div key={i} className="bg-navy-4 rounded-[20px] px-7 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 relative transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] reveal reveal-delay-1">
            <div className="text-gold text-[0.9rem] tracking-[2px] mb-3.5">{stars}</div>
            <p className="text-[0.92rem] leading-[1.7] text-white/90 mb-5">&ldquo;{text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-heading text-base font-extrabold text-white" style={{ background: bg }}>
                {initials}
              </div>
              <div>
                <div className="font-semibold text-[0.9rem] text-white">{name}</div>
                <div className="text-xs text-white/70">{title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
