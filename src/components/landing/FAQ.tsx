'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    { q: 'How does RefineMail work?', a: 'RefineMail is a Chrome extension that integrates directly into Gmail or Zimbra compose windows. When you choose to refine a draft, it sends the text and selected style preference to OpenAI\'s API, then presents a revised version for review. You can apply it with one click or dismiss it.' },
    { q: 'What happens to my email draft?', a: 'The selected draft text and writing instruction are sent to OpenAI\'s API for processing. Review the project configuration and the API provider\'s terms before using the extension with sensitive information.' },
    { q: 'Which email platforms are supported?', a: 'The current extension supports Gmail and Zimbra compose windows.' },
    { q: 'Can I customise the revision?', a: 'Choose from the available writing styles and provide additional instructions when you need to set context, length, recipient expectations, or a desired outcome.' },
    { q: 'Do I have to use the suggested revision?', a: 'No. RefineMail keeps the decision with the sender: inspect the proposal, edit it further, dismiss it, or apply it only when it is suitable.' },
    { q: 'Is RefineMail a hosted subscription service?', a: 'No. The public project is open source. Review the repository instructions to configure and load the extension locally with your own API key.' },
  ]

  return (
    <section className="px-[5%] py-28 bg-white" id="faq">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">FAQ</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-14 max-w-[380px]">
          Questions, answered
        </h2>
        <div className="max-w-[720px]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#f1f5f9]">
              <button
                className="w-full bg-transparent border-none text-left py-5 text-[0.925rem] font-semibold text-[#0f172a] cursor-pointer flex items-center justify-between gap-4 transition-colors hover:text-[#124170] outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs transition-all ${openFaq === i ? 'bg-[#0f2a44] text-white rotate-180' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all text-[0.875rem] font-normal text-[#64748b] leading-[1.75] ${openFaq === i ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
