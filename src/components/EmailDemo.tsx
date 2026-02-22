import React from 'react'

const EmailDemo = () => {
  return (
            <div className="animate-fadeInUp [animation-delay:0.5s] max-lg:max-w-[600px] max-lg:mx-auto">
          <div className="bg-[#1e1e2e] rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] max-md:rounded-xl">
            <div className="bg-[#2a2a3e] px-4 py-3 flex items-center gap-3 max-md:px-3 max-md:py-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] max-md:w-2 max-md:h-2" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] max-md:w-2 max-md:h-2" />
                <div className="w-3 h-3 rounded-full bg-[#28ca42] max-md:w-2 max-md:h-2" />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_320px] min-h-[340px] max-md:grid-cols-1 max-md:min-h-auto">
              <div className="bg-[#f6f8fc] p-5 max-md:p-3">
                <span className="font-heading text-[0.95rem] font-bold text-[#c5221f] mb-4 block max-md:text-[0.8rem] max-md:mb-2">Compose Email</span>
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
  )
}

export default EmailDemo