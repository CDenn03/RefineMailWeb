import EmailDemo from "../EmailDemo";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center px-[5%] pt-[120px] pb-20 relative overflow-hidden bg-navy max-md:pt-[100px]" id="hero">
      <div className="absolute inset-0 bg-linear-to-br from-navy-4 via-navy to-navy-2 z-0" />
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[80px] opacity-20 pointer-events-none bg-gold top-[-200px] right-[-100px] animate-float1" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-15 pointer-events-none bg-[#5b9bd5] bottom-[-100px] left-[-80px] animate-float2" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-2 gap-12 items-center max-lg:grid-cols-1 max-lg:gap-8">
        <div className="max-lg:text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider uppercase mb-7 animate-fadeInDown backdrop-blur-sm max-md:text-[0.65rem] max-md:px-3 max-md:py-1">
            <span>AI-POWERED CHROME EXTENSION</span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-extrabold text-white leading-[1.05] tracking-tight mb-6 animate-fadeInUp [animation-delay:0.1s]">
            Stop Rewriting Emails.<br />Start <em className="not-italic text-gold">Refining</em> Them.
          </h1>
          <p className="text-[clamp(0.95rem,1.8vw,1.15rem)] font-normal text-white/90 leading-relaxed mb-10 animate-fadeInUp [animation-delay:0.2s] max-md:mb-8">
            Turn one draft into perfectly-toned messages in seconds. From formal authority to casual warmth, AI Email Refiner adapts your message for any situation.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-8 animate-fadeInUp [animation-delay:0.3s] max-lg:justify-center max-md:gap-2.5 max-md:mb-6">
            <a href="#" className="bg-white text-navyblue text-[0.95rem] font-bold px-7 py-3.5 rounded-full border-none cursor-pointer no-underline inline-flex items-center gap-2 shadow-[0_6px_24px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] hover:bg-cream max-md:text-[0.85rem] max-md:px-5 max-md:py-3">
              Add to Chrome — It&apos;s Free
            </a>
            <a href="#demo" className="bg-white/10 text-white text-[0.95rem] font-medium px-7 py-3.5 rounded-full border border-white/30 cursor-pointer no-underline inline-flex items-center gap-2 backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 max-md:text-[0.85rem] max-md:px-5 max-md:py-3">
              See it in action
            </a>
          </div>
          <div className="flex items-center gap-7 flex-wrap animate-fadeInUp [animation-delay:0.4s] max-lg:justify-center max-md:gap-4">
            <div className="flex items-center gap-1.5 text-[0.85rem] text-white/80 font-medium max-md:text-[0.75rem]">
              4.8 Rating
            </div>
            <span className="text-white/30 text-xl max-md:text-base">·</span>
            <div className="flex items-center gap-1.5 text-[0.85rem] text-white/80 font-medium max-md:text-[0.75rem]">
              10,000+ Users
            </div>
            <span className="text-white/30 text-xl max-md:text-base">·</span>
            <div className="flex items-center gap-1.5 text-[0.85rem] text-white/80 font-medium max-md:text-[0.75rem]">
              Privacy First
            </div>
          </div>
        </div>

        <EmailDemo />
      </div>
    </section>
  )
}
