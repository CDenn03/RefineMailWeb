'use client'

import { useState } from 'react'

const demoStyles: Record<string, string> = {
  formal: `Dear <mark class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md font-semibold not-italic">[Name]</mark>, I hope this message finds you well. I am writing to kindly request that you send over the report at your earliest convenience, ideally by <mark class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md font-semibold not-italic">end of business tomorrow</mark>. Our client has been requesting status updates, and having the report available would greatly assist us in responding in a timely and professional manner. Thank you for your assistance.`,
  friendly: `Hi <mark class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md font-semibold not-italic">there</mark>! 😊 Hope you're having a good one! When you get a chance, could you send over the report by tomorrow? The client has been reaching out for updates, so it would really help us keep them in the loop. Really appreciate you — thanks so much!`,
  concise: `Please send the report by <mark class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md font-semibold not-italic">tomorrow EOD</mark>. Client is requesting updates and this is needed to respond.`,
  persuasive: `I'd greatly appreciate your help with something time-sensitive. Having the report by tomorrow would put us in a strong position to respond to our client's inquiries with confidence — which ultimately reflects well on <mark class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md font-semibold not-italic">our entire team</mark>. Your contribution here is key. Looking forward to it!`,
  apologetic: `I sincerely apologize for the short notice. If at all possible, could you send the report by tomorrow? The client has been asking for updates, and I want to make sure we can <mark class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md font-semibold not-italic">respond promptly</mark>. I truly appreciate your understanding and flexibility.`,
  casual: `Hey! Quick thing — any chance you could shoot me the report by tomorrow? Client's been bugging us for updates 😅 Would be a massive help. Cheers!`,
  neutral: `I'm writing to request the report by <mark class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md font-semibold not-italic">tomorrow</mark>. The client has been inquiring about updates, and having the report available will allow us to address their questions appropriately. Please let me know if you have any questions.`,
}

const styles = ['formal', 'friendly', 'concise', 'persuasive', 'apologetic', 'casual', 'neutral']

export default function StyleDemo() {
  const [activeStyle, setActiveStyle] = useState('formal')

  return (
    <section className="px-[5%] py-28 bg-white" id="demo">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">Live Demo</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-3 max-w-[460px]">
          Watch one email become seven
        </h2>
        <p className="text-[1rem] font-normal text-[#475569] leading-[1.7] max-w-[500px] mb-12">
          See how the same message transforms across different styles. Click each tab to explore.
        </p>

        <div className="card overflow-hidden reveal">
          {/* Original draft */}
          <div className="px-7 py-5 bg-[#f5f7ff] border-b border-[#e8ecf4]">
            <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#2563eb] mb-2">Original Draft</div>
            <div className="text-[0.9rem] font-normal text-[#334155] bg-white border border-[#e8ecf4] rounded-[12px] px-4 py-3 font-mono leading-relaxed">
              &ldquo;Hey, I need the report by tomorrow. Can you send it? Also the client is asking for updates.&rdquo;
            </div>
          </div>

          {/* Style tabs */}
          <div className="flex border-b border-[#e8ecf4] overflow-x-auto scrollbar-none bg-white px-2">
            {styles.map(s => (
              <button
                key={s}
                className={`px-4 py-3.5 text-[0.8rem] font-semibold cursor-pointer border-b-2 whitespace-nowrap transition-all bg-transparent border-none outline-none ${
                  activeStyle === s
                    ? 'text-[#2563eb] border-b-[#2563eb] border-b-2'
                    : 'text-[#94a3b8] border-b-transparent hover:text-[#475569]'
                }`}
                style={{ borderBottom: activeStyle === s ? '2px solid #2563eb' : '2px solid transparent' }}
                onClick={() => setActiveStyle(s)}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          {/* Output */}
          <div className="px-7 py-7 bg-white">
            <div
              className="text-[0.925rem] font-normal leading-[1.8] text-[#334155] min-h-[80px]"
              dangerouslySetInnerHTML={{ __html: demoStyles[activeStyle] }}
            />
            <div className="mt-5 pt-5 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-[0.75rem] font-medium text-[#94a3b8]">
                Style: <span className="text-[#2563eb] font-semibold">{activeStyle.charAt(0).toUpperCase() + activeStyle.slice(1)}</span>
              </span>
              <button className="bg-[#2563eb] text-white text-[0.8rem] font-semibold px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(37,99,235,0.3)] hover:bg-[#1d4ed8] transition-colors">
                Apply to Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
