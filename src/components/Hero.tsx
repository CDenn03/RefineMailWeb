export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-[5%] pt-[120px] pb-20 relative overflow-hidden bg-navy max-md:pt-[100px]" id="hero">
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
            <a href="#" className="bg-white text-[#0f2a44] text-[0.95rem] font-bold px-7 py-3.5 rounded-full border-none cursor-pointer no-underline inline-flex items-center gap-2 shadow-[0_6px_24px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] hover:bg-cream max-md:text-[0.85rem] max-md:px-5 max-md:py-3">
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

        <div className="animate-fadeInUp [animation-delay:0.5s] max-lg:max-w-[600px] max-lg:mx-auto">
          <div className="bg-[#1e1e2e] rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] max-md:rounded-xl">
            <div className="bg-[#2a2a3e] px-4 py-3 flex items-center gap-3 max-md:px-3 max-md:py-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] max-md:w-2 max-md:h-2" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] max-md:w-2 max-md:h-2" />
                <div className="w-3 h-3 rounded-full bg-[#28ca42] max-md:w-2 max-md:h-2" />
              </div>
              <div className="flex-1 bg-white/6 rounded-md px-3.5 py-1.5 font-mono text-[0.72rem] text-white/45 max-md:px-2 max-md:py-1 max-md:text-[0.6rem]">
                mail.google.com/mail/u/0/#inbox
              </div>
            </div>
            <div className="grid grid-cols-[1fr_320px] min-h-[340px] max-md:grid-cols-1 max-md:min-h-auto">
              <div className="bg-[#f6f8fc] p-5 max-md:p-3">
                <span className="font-heading text-[0.95rem] font-bold text-[#c5221f] mb-4 block max-md:text-[0.8rem] max-md:mb-2">Gmail</span>
                <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.12)] overflow-hidden">
                  <div className="bg-[#404040] text-white px-3.5 py-2.5 text-xs font-medium max-md:px-2 max-md:py-1.5 max-md:text-[0.65rem]">New Message</div>
                  <div className="border-b border-[#e0e0e0] px-3 py-1.5 text-xs text-[#555] max-md:px-2 max-md:py-1 max-md:text-[0.65rem]">To: sarah@company.com</div>
                  <div className="border-b border-[#e0e0e0] px-3 py-1.5 text-xs text-[#555] max-md:px-2 max-md:py-1 max-md:text-[0.65rem]">Subject: Project Update</div>
                  <div className="p-3 text-[0.78rem] text-[#333] min-h-[100px] leading-relaxed max-md:p-2 max-md:text-[0.7rem] max-md:min-h-[80px]">
                    Hey, I need the report by tomorrow. Can you send it? Also the client is asking for updates.<span className="animate-blink">|</span>
                  </div>
                </div>
              </div>
              <div className="bg-linear-to-b from-navy-4 to-[#0a1e31] p-5 text-white max-md:p-3">
                <div className="font-heading text-xs font-bold tracking-wider uppercase text-gold-2 mb-3.5 max-md:text-[0.65rem] max-md:mb-2">AI EMAIL REFINER</div>
                <div className="flex flex-wrap gap-1.5 mb-4 max-md:gap-1 max-md:mb-3">
                  {['Formal','Friendly','Concise','Persuasive','Casual','Apologetic','Neutral'].map(s => (
                    <div key={s} className={`px-3 py-1 rounded-full text-[0.7rem] font-semibold border border-white/18 cursor-pointer transition-all max-md:px-2 max-md:py-0.5 max-md:text-[0.6rem] ${s === 'Friendly' ? 'bg-gold border-gold text-navy-4' : 'text-white/70'}`}>
                      {s}
                    </div>
                  ))}
                </div>
                <div className="bg-white/6 border border-white/12 rounded-lg p-3 text-[0.72rem] leading-relaxed text-white/85 mb-3 min-h-[80px] max-md:p-2 max-md:text-[0.65rem] max-md:min-h-[60px] max-md:mb-2">
                  Hi Sarah! Hope you&apos;re having a great day. Would it be possible to get the report over by tomorrow? The client has been checking in for updates, so having it ready would be super helpful. Thanks so much!
                </div>
                <button className="w-full bg-linear-to-br from-gold to-[#d4a855] text-navy-4 border-none rounded-lg px-2.5 py-2.5 text-xs font-bold cursor-pointer max-md:py-2 max-md:text-[0.65rem]">
                  Apply to Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
