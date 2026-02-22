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
    <section className="px-[5%] py-32 bg-[#124170]" id="faq">
      <div className="max-w-[720px]">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold mb-4">
          FAQ
        </div>
        <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
          Questions,<br />answered
        </h2>
      </div>
      <div className="max-w-[720px] mx-auto mt-15">
        {faqs.map((faq, i) => (
          <div key={i} className={`border-b border-white/10 ${openFaq === i ? 'open' : ''}`}>
            <button
              className="w-full bg-none border-none text-left py-5 font-body text-base font-semibold text-white cursor-pointer flex items-center justify-between gap-4 transition-colors hover:text-gold"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              {faq.q}
              <span className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs transition-all ${openFaq === i ? 'rotate-180 bg-gold text-navy' : 'text-white'}`}>
                ▾
              </span>
            </button>
            <div className={`overflow-hidden transition-all text-[0.92rem] text-white/80 leading-[1.7] ${openFaq === i ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
