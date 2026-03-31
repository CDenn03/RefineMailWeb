'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    { q: 'How does AI Email Refiner work?', a: 'AI Email Refiner is a Chrome extension that integrates directly into your Gmail or Zimbra compose window. When you click "Refine," it sends your email draft to OpenAI\'s API along with your chosen style preference. The AI rewrites your email and shows you a preview. You can apply it with one click or dismiss it.' },
    { q: 'Is my email data secure and private?', a: 'Your privacy is our top priority. Email content is sent directly to OpenAI\'s API for real-time processing and is never stored on our servers. All transmissions are encrypted with SSL.' },
    { q: 'Which email platforms are supported?', a: 'Currently, AI Email Refiner supports Gmail and Zimbra. We\'re actively working on Outlook support.' },
    { q: 'Can I customize the AI\'s output?', a: 'Yes! Pro users can add custom instructions to guide the AI — specify length, tone details, recipient context, or any other requirement.' },
    { q: "What's the difference between Free and Pro?", a: 'Free gives you 50 refinements/month with all 7 styles. Pro gives you unlimited refinements, priority processing, custom instructions, and advanced customization.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. No long-term commitments. Cancel from your account settings anytime and your plan stays active until end of billing period.' },
    { q: 'Do you offer refunds?', a: 'Yes — 30-day money-back guarantee on all paid plans. Contact support within 30 days for a full refund, no questions asked.' },
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
                className="w-full bg-transparent border-none text-left py-5 text-[0.925rem] font-semibold text-[#0f172a] cursor-pointer flex items-center justify-between gap-4 transition-colors hover:text-[#2563eb] outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs transition-all ${openFaq === i ? 'bg-[#2563eb] text-white rotate-180' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
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
