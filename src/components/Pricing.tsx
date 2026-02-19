'use client'

import { useState } from 'react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const proPrice = isAnnual ? '$7.99' : '$9.99'
  const teamPrice = isAnnual ? '$39.99' : '$49.99'
  const proPeriod = isAnnual ? 'per month, billed annually' : 'per month'
  const teamPeriod = isAnnual ? 'per month · 5 users, billed annually' : 'per month · 5 users'

  return (
    <section className="px-[5%] py-32 bg-[#0a1e31]" id="pricing">
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange mb-4 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-orange before:rounded-sm">
        Pricing
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
        Simple, honest<br />pricing
      </h2>
      <p className="text-lg text-white/90 leading-relaxed max-w-[560px]">
        Start free. Upgrade when you need more. No credit card required to get started.
      </p>
      <div className="flex items-center gap-3 my-6 text-[0.9rem] text-white/80">
        <span>Monthly</span>
        <div className="w-[50px] h-[26px] bg-white/20 rounded-full relative cursor-pointer" onClick={() => setIsAnnual(!isAnnual)}>
          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-[0_2px_6px_rgba(0,0,0,0.2)] ${isAnnual ? 'translate-x-6' : ''}`} />
        </div>
        <span>Annual</span>
        <span className="bg-orange/20 text-orange text-xs font-bold px-2.5 py-0.5 rounded-full border border-orange/30">Save 20%</span>
      </div>
      <div className="grid grid-cols-3 gap-6 items-start max-lg:grid-cols-1">
        <div className="border-2 border-white/20 rounded-[24px] px-7 py-9 relative transition-all bg-navy-4 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] reveal">
          <div className="font-heading text-base font-bold mb-1 text-white">Free</div>
          <div className="font-heading text-5xl font-extrabold tracking-tight leading-none my-4 text-white">$0</div>
          <div className="text-[0.85rem] text-white/60 mb-6">Forever free, no card needed</div>
          <ul className="list-none mb-8">
            {['50 email refinements/month', 'All 7 writing styles', 'Gmail & Zimbra support', 'Real-time preview', 'One-click apply'].map(f => (
              <li key={f} className="flex items-start gap-2.5 text-[0.88rem] text-white/70 py-1.5 border-b border-white/10">
                <span className="text-teal font-bold shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full px-3.5 py-3.5 rounded-xl font-bold text-[0.9rem] cursor-pointer border-2 border-white bg-transparent text-white tracking-wide transition-all hover:bg-white hover:border-white hover:text-[#0f2a44]">
            Start Free
          </button>
        </div>

        <div className="bg-gradient-to-br from-orange to-orange-2 border-2 border-orange rounded-[24px] px-7 py-9 relative scale-[1.04]   max-lg:scale-100">
          <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-white text-[#0f2a44] text-[0.72rem] font-extrabold px-4 py-1 rounded-full tracking-wider uppercase whitespace-nowrap shadow-lg">
            Most Popular
          </div>
          <div className="font-heading text-base font-bold mb-1 text-white">Pro</div>
          <div className="font-heading text-5xl font-extrabold tracking-tight leading-none my-4 text-white">{proPrice}</div>
          <div className="text-[0.85rem] text-white/90 mb-6">{proPeriod}</div>
          <ul className="list-none mb-8">
            {['Unlimited refinements', 'Priority AI processing', 'Custom instructions', 'Advanced style customization', 'Priority support', 'Everything in Free'].map(f => (
              <li key={f} className="flex items-start gap-2.5 text-[0.88rem] text-white py-1.5 border-b border-white/20">
                <span className="text-white font-bold shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full px-3.5 py-3.5 rounded-xl font-bold text-[0.9rem] cursor-pointer border-none bg-white text-[#0f2a44] tracking-wide shadow-[0_6px_20px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] hover:scale-105">
            Get Pro Now
          </button>
        </div>

        <div className="border-2 border-white/20 rounded-[24px] px-7 py-9 relative transition-all bg-navy-4 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] reveal reveal-delay-2">
          <div className="font-heading text-base font-bold mb-1 text-white">Team</div>
          <div className="font-heading text-5xl font-extrabold tracking-tight leading-none my-4 text-white">{teamPrice}</div>
          <div className="text-[0.85rem] text-white/60 mb-6">{teamPeriod}</div>
          <ul className="list-none mb-8">
            {['Everything in Pro', 'Team style templates', 'Usage analytics', 'Centralized billing', 'Dedicated support', 'Onboarding assistance'].map(f => (
              <li key={f} className="flex items-start gap-2.5 text-[0.88rem] text-white/70 py-1.5 border-b border-white/10">
                <span className="text-teal font-bold shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full px-3.5 py-3.5 rounded-xl font-bold text-[0.9rem] cursor-pointer border-2 border-white bg-transparent text-white tracking-wide transition-all hover:bg-white hover:border-white hover:text-[#0f2a44]">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
