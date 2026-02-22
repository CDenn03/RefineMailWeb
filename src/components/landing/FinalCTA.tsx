export default function FinalCTA() {
  const trustBadges = [
    ['SSL Secured'],
    ['No credit card required'],
    ['30-day money back'],
    ['4.8 Chrome Web Store']
  ]

  return (
    <section className="px-[5%] py-32 bg-linear-to-br from-navy-4 via-navy to-navy-2 text-center relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gold opacity-[0.08] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold-2 mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-gold before:rounded-sm justify-center">
          Get Started
        </div>
        <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
          Ready to transform your<br />email communication?
        </h2>
        <p className="text-lg text-white/65 mb-10">
          Join 10,000+ professionals who write better emails every day.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap mb-10">
          <a href="#" className="bg-white text-navyblue text-[0.95rem] font-bold px-7 py-3.5 rounded-full border-none cursor-pointer no-underline inline-flex items-center gap-2 shadow-[0_6px_24px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] hover:bg-cream">
            Add to Chrome — Free
          </a>
          <a href="#demo" className="bg-white/10 text-white text-[0.95rem] font-medium px-7 py-3.5 rounded-full border border-white/30 cursor-pointer no-underline inline-flex items-center gap-2 backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50">
            View Demo First
          </a>
        </div>
        <div className="flex items-center justify-center gap-7 flex-wrap">
          {trustBadges.map(([label]) => (
            <div key={label} className="flex items-center gap-1.5 text-[0.82rem] text-white/50">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
