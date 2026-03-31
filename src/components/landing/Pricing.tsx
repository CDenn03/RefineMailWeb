'use client'

import { useState } from 'react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const proPrice = isAnnual ? '$7.99' : '$9.99'
  const teamPrice = isAnnual ? '$39.99' : '$49.99'
  const proPeriod = isAnnual ? 'per month, billed annually' : 'per month'
  const teamPeriod = isAnnual ? 'per month · 5 users, billed annually' : 'per month · 5 users'

  return (
    <section className="px-[5%] py-28 bg-[#f5f6f8]" id="pricing">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">Pricing</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-3 max-w-[380px]">
          Simple, honest pricing
        </h2>
        <p className="text-[1rem] font-normal text-[#475569] leading-[1.7] max-w-[460px] mb-8">
          Start free. Upgrade when you need more. No credit card required.
        </p>

        {/* Toggle */}
        <div className="flex items-center gap-3 mb-12 text-[0.875rem]">
          <span className={`font-medium ${!isAnnual ? 'text-[#0f172a]' : 'text-[#94a3b8]'}`}>Monthly</span>
          <button
            className="w-12 h-6 rounded-full relative cursor-pointer border-none outline-none transition-colors"
            style={{ background: isAnnual ? '#0f2a44' : '#e2e8f0' }}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${isAnnual ? 'translate-x-6' : ''}`} />
          </button>
          <span className={`font-medium ${isAnnual ? 'text-[#0f172a]' : 'text-[#94a3b8]'}`}>Annual</span>
          <span className="bg-emerald-50 text-emerald-600 text-[0.72rem] font-bold px-2.5 py-1 rounded-full border border-emerald-200">Save 20%</span>
        </div>

        <div className="grid grid-cols-3 gap-5 items-start max-lg:grid-cols-1">
          {/* Free */}
          <div className="card px-7 py-8 reveal">
            <div className="text-[0.8rem] font-bold text-[#64748b] uppercase tracking-[0.08em] mb-1">Free</div>
            <div className="text-[2.75rem] font-extrabold text-[#0f172a] tracking-[-0.04em] leading-none my-4">$0</div>
            <div className="text-[0.825rem] font-normal text-[#94a3b8] mb-7">Forever free, no card needed</div>
            <ul className="list-none mb-8 flex flex-col gap-3">
              {['50 email refinements/month', 'All 7 writing styles', 'Gmail & Zimbra support', 'Real-time preview', 'One-click apply'].map(f => (
                <li key={f} className="flex items-center gap-2.5 text-[0.875rem] font-normal text-[#475569]">
                  <span className="w-4 h-4 rounded-full bg-[#eef3f8] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#124170]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl font-semibold text-[0.875rem] cursor-pointer border-2 border-[#dde3ea] bg-white text-[#334155] tracking-[-0.01em] transition-all hover:border-[#124170] hover:text-[#124170]">
              Start Free
            </button>
          </div>

          {/* Pro — featured */}
          <div className="relative rounded-[22px] overflow-hidden shadow-[0_8px_40px_rgba(15,42,68,0.22)]" style={{ transform: 'scale(1.03)' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#0f2a44] to-[#1a5a8a]" />
            <div className="bg-[#0f2a44] px-7 py-8">
              <div className="absolute top-4 right-5 bg-white/15 text-white text-[0.68rem] font-bold px-3 py-1 rounded-full tracking-[0.06em] uppercase">
                Most Popular
              </div>
              <div className="text-[0.8rem] font-bold text-blue-300 uppercase tracking-[0.08em] mb-1">Pro</div>
              <div className="text-[2.75rem] font-extrabold text-white tracking-[-0.04em] leading-none my-4">{proPrice}</div>
              <div className="text-[0.825rem] font-normal text-blue-200 mb-7">{proPeriod}</div>
              <ul className="list-none mb-8 flex flex-col gap-3">
                {['Unlimited refinements', 'Priority AI processing', 'Custom instructions', 'Advanced style customization', 'Priority support', 'Everything in Free'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[0.875rem] font-normal text-blue-100">
                    <span className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl font-bold text-[0.875rem] cursor-pointer border-none bg-white text-[#0f2a44] tracking-[-0.01em] shadow-[0_4px_16px_rgba(255,255,255,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]">
                Get Pro Now
              </button>
            </div>
          </div>

          {/* Team */}
          <div className="card px-7 py-8 reveal reveal-delay-2">
            <div className="text-[0.8rem] font-bold text-[#64748b] uppercase tracking-[0.08em] mb-1">Team</div>
            <div className="text-[2.75rem] font-extrabold text-[#0f172a] tracking-[-0.04em] leading-none my-4">{teamPrice}</div>
            <div className="text-[0.825rem] font-normal text-[#94a3b8] mb-7">{teamPeriod}</div>
            <ul className="list-none mb-8 flex flex-col gap-3">
              {['Everything in Pro', 'Team style templates', 'Usage analytics', 'Centralized billing', 'Dedicated support', 'Onboarding assistance'].map(f => (
                <li key={f} className="flex items-center gap-2.5 text-[0.875rem] font-normal text-[#475569]">
                  <span className="w-4 h-4 rounded-full bg-[#eef3f8] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#124170]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl font-semibold text-[0.875rem] cursor-pointer border-2 border-[#dde3ea] bg-white text-[#334155] tracking-[-0.01em] transition-all hover:border-[#124170] hover:text-[#124170]">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
