'use client'

import { useState } from 'react'

const demoStyles: Record<string, string> = {
  formal: `Dear <span class="bg-linear-to-r from-gold/25 to-gold/15 px-1.5 py-0.5 rounded font-medium">[Name]</span>, I hope this message finds you well. I am writing to kindly request that you send over the report at your earliest convenience, ideally by <span class="bg-linear-to-r from-gold/25 to-gold/15 px-1.5 py-0.5 rounded font-medium">end of business tomorrow</span>. Additionally, our client has been requesting status updates, and having the report available would greatly assist us in responding to their inquiries in a timely and professional manner. Thank you for your assistance with this matter.`,
  friendly: `Hi <span class="bg-linear-to-r from-gold/25 to-gold/15 px-1.5 py-0.5 rounded font-medium">there</span>! 😊 Hope you're having a good one! When you get a chance, could you send over the report by tomorrow? The client has been reaching out for updates, so it would really help us keep them in the loop. Really appreciate you — thanks so much!`,
  concise: `Please send the report by <span class="bg-linear-to-r from-gold/25 to-gold/15 px-1.5 py-0.5 rounded font-medium">tomorrow EOD</span>. Client is requesting updates and this is needed to respond.`,
  persuasive: `I'd greatly appreciate your help with something time-sensitive. Having the report by tomorrow would put us in a strong position to respond to our client's inquiries with confidence — which ultimately reflects well on <span class="bg-linear-to-r from-gold/25 to-gold/15 px-1.5 py-0.5 rounded font-medium">our entire team</span>. Your contribution here is key to maintaining that great relationship we've built. Looking forward to it!`,
  apologetic: `I sincerely apologize for the short notice on this request. I realize this may be inconvenient, but if at all possible, could you send the report by tomorrow? The client has been asking for updates, and I want to make sure we can <span class="bg-linear-to-r from-gold/25 to-gold/15 px-1.5 py-0.5 rounded font-medium">respond promptly</span>. I truly appreciate your understanding and flexibility.`,
  casual: `Hey! Quick thing — any chance you could shoot me the report by tomorrow? Client's been bugging us for updates 😅 Would be a massive help. Cheers!`,
  neutral: `I'm writing to request the report by <span class="bg-linear-to-r from-gold/25 to-gold/15 px-1.5 py-0.5 rounded font-medium">tomorrow</span>. The client has been inquiring about updates, and having the report available will allow us to address their questions appropriately. Please let me know if you have any questions.`,
}

export default function StyleDemo() {
  const [activeStyle, setActiveStyle] = useState('formal')

  return (
    <section className="px-[5%] py-32 bg-[#124170]" id="demo">
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-gold before:rounded-sm">
        Live Demo
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
        Watch one email<br />become seven
      </h2>
      <p className="text-lg text-white/90 leading-relaxed max-w-[560px]">
        See how the same message transforms across different styles. Click each tab to explore.
      </p>
      <div className="mt-15 bg-navy-4 rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)] border border-white/10 reveal">
        <div className="bg-navy px-8 py-6">
          <div className="text-xs font-bold tracking-wider uppercase text-gold mb-2">Original Draft</div>
          <div className="font-mono text-[0.95rem] text-white/90 bg-white/8 border border-white/15 rounded-[10px] px-5 py-4">
            &ldquo;Hey, I need the report by tomorrow. Can you send it? Also the client is asking for updates.&rdquo;
          </div>
        </div>
        <div className="flex border-b border-white/10 overflow-x-auto scrollbar-none bg-navy-4">
          {['formal', 'friendly', 'concise', 'persuasive', 'apologetic', 'casual', 'neutral'].map(s => (
            <div
              key={s}
              className={`px-5 py-3.5 text-[0.82rem] font-semibold cursor-pointer border-b-[3px] whitespace-nowrap transition-all ${
                activeStyle === s ? 'text-white border-gold' : 'text-white/60 border-transparent hover:text-white/90'
              }`}
              onClick={() => setActiveStyle(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </div>
          ))}
        </div>
        <div className="px-8 py-8 bg-navy-4">
          <div
            className="text-base leading-[1.7] text-white min-h-[80px]"
            dangerouslySetInnerHTML={{ __html: demoStyles[activeStyle] }}
          />
        </div>
      </div>
    </section>
  )
}
