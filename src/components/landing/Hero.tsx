import EmailDemo from "../EmailDemo";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center px-[5%] pt-[110px] pb-20 relative overflow-hidden bg-white max-md:pt-[96px]" id="hero">
      {/* Soft background blobs */}
      <div className="absolute w-[640px] h-[640px] rounded-full blur-[140px] opacity-25 pointer-events-none bg-[#2563eb] top-[-180px] right-[-120px] animate-float1" />
      <div className="absolute w-[380px] h-[380px] rounded-full blur-[100px] opacity-15 pointer-events-none bg-[#7c3aed] bottom-[-80px] left-[-60px] animate-float2" />
      
      <div className="relative z-10 w-full max-w-[1320px] mx-auto grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
        <div className="max-lg:text-center">


          <h1 className="text-[clamp(2.1rem,5vw,3.75rem)] font-extrabold text-[#0f172a] leading-[1.08] tracking-[-0.03em] mb-5 animate-fadeInUp [animation-delay:0.1s]">
            Stop Rewriting Emails.<br />
            Start <span className="text-[#2563eb]">Refining</span> Them.
          </h1>

          <p className="text-[clamp(0.95rem,1.8vw,1.1rem)] font-normal text-[#475569] leading-[1.75] mb-9 animate-fadeInUp [animation-delay:0.2s] max-md:mb-7">
            Turn one draft into perfectly-toned messages in seconds. From formal authority to casual warmth, AI Email Refiner adapts your message for any situation.
          </p>

          <div className="flex gap-3 flex-wrap mb-8 animate-fadeInUp [animation-delay:0.3s] max-lg:justify-center max-md:gap-2.5 max-md:mb-6">
            <a href="#" className="bg-[#2563eb] text-white text-[0.9rem] font-semibold px-6 py-3 rounded-full border-none cursor-pointer no-underline inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.38)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,99,235,0.48)] hover:bg-[#1d4ed8] max-md:text-[0.85rem] max-md:px-5">
              Add to Chrome — It&apos;s Free
            </a>
            <a href="#demo" className="bg-white text-[#334155] text-[0.9rem] font-medium px-6 py-3 rounded-full border border-[#e8ecf4] cursor-pointer no-underline inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all hover:border-[#2563eb]/40 hover:shadow-[0_4px_16px_rgba(37,99,235,0.1)] max-md:text-[0.85rem] max-md:px-5">
              See it in action →
            </a>
          </div>

          <div className="flex items-center gap-6 flex-wrap animate-fadeInUp [animation-delay:0.4s] max-lg:justify-center max-md:gap-4">
            <div className="flex items-center gap-1.5 text-[0.82rem] font-medium text-[#64748b]">
              <span className="text-amber-400">★★★★★</span> 4.8 Rating
            </div>
            <span className="text-[#cbd5e1]">|</span>
            <div className="text-[0.82rem] font-medium text-[#64748b]">10,000+ Users</div>
            <span className="text-[#cbd5e1]">|</span>
            <div className="text-[0.82rem] font-medium text-[#64748b]">🔒 Privacy First</div>
          </div>
        </div>

        <EmailDemo />
      </div>
    </section>
  )
}
