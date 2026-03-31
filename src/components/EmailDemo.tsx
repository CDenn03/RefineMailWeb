import React from 'react'

const EmailDemo = () => {
  return (
        <div className="animate-fadeInUp [animation-delay:0.5s] max-lg:max-w-[600px] max-lg:mx-auto">
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(30,58,138,0.1)] border border-[#e8ecf4]">
            {/* Window chrome */}
            <div className="bg-[#f5f7ff] px-4 py-3 flex items-center gap-3 border-b border-[#e8ecf4] max-md:px-3 max-md:py-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] max-md:w-2 max-md:h-2" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] max-md:w-2 max-md:h-2" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28ca42] max-md:w-2 max-md:h-2" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-[0.7rem] text-[#94a3b8] border border-[#e8ecf4] text-center">
                mail.google.com
              </div>
            </div>
            <div className="grid grid-cols-[1fr_300px] min-h-[340px] max-md:grid-cols-1 max-md:min-h-auto">
              <div className="bg-white p-5 max-md:p-3">
                <span className="font-bold text-[0.875rem] text-[#c5221f] mb-4 block max-md:text-[0.8rem] max-md:mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Compose Email</span>
                <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden border border-[#e8ecf4]">
                  <div className="bg-[#334155] text-white px-3.5 py-2.5 text-[0.72rem] font-semibold max-md:px-2 max-md:py-1.5 max-md:text-[0.65rem]">New Message</div>
                  <div className="border-b border-[#f1f5f9] px-3 py-1.5 text-[0.75rem] text-[#64748b] max-md:px-2 max-md:py-1 max-md:text-[0.65rem]">To: sarah@company.com</div>
                  <div className="border-b border-[#f1f5f9] px-3 py-1.5 text-[0.75rem] text-[#64748b] max-md:px-2 max-md:py-1 max-md:text-[0.65rem]">Subject: Project Update</div>
                  <div className="p-3 text-[0.78rem] text-[#334155] min-h-[100px] leading-relaxed max-md:p-2 max-md:text-[0.7rem] max-md:min-h-[80px]">
                    Hey, I need the report by tomorrow. Can you send it? Also the client is asking for updates.<span className="animate-blink">|</span>
                  </div>
                </div>
              </div>
              <div className="bg-linear-to-b from-[#1a3a6b] to-[#0f2654] p-5 text-white max-md:p-3">
                <div className="text-[0.68rem] font-bold tracking-widest uppercase text-blue-300 mb-3.5 max-md:text-[0.65rem] max-md:mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>AI EMAIL REFINER</div>
                <div className="flex flex-wrap gap-1.5 mb-4 max-md:gap-1 max-md:mb-3">
                  {['Formal','Friendly','Concise','Persuasive','Casual','Apologetic','Neutral'].map(s => (
                    <div key={s} className={`px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border cursor-pointer transition-all max-md:px-2 max-md:py-0.5 max-md:text-[0.6rem] ${s === 'Friendly' ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'border-white/20 text-white/60 hover:border-white/40'}`}>
                      {s}
                    </div>
                  ))}
                </div>
                <div className="bg-white/8 border border-white/12 rounded-[10px] p-3 text-[0.72rem] leading-relaxed text-white/85 mb-3 min-h-[80px] max-md:p-2 max-md:text-[0.65rem] max-md:min-h-[60px] max-md:mb-2">
                  Hi Sarah! Hope you&apos;re having a great day. Would it be possible to get the report over by tomorrow? The client has been checking in for updates, so having it ready would be super helpful. Thanks so much!
                </div>
                <button className="w-full bg-[#2563eb] text-white border-none rounded-[10px] px-2.5 py-2.5 text-[0.72rem] font-bold cursor-pointer hover:bg-[#1d4ed8] transition-colors shadow-[0_2px_10px_rgba(37,99,235,0.4)] max-md:py-2 max-md:text-[0.65rem]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Apply to Email
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default EmailDemo