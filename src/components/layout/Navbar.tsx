'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar')
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-100 px-[5%] py-3.5 flex items-center justify-between transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-[#dde3ea]">
      <a href="#" className="flex items-center gap-2.5 font-extrabold text-[1.25rem] text-[#0f172a] tracking-tight no-underline" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <Image
            src="/RefineEmailLogo.webp"
            alt="AI Email Refiner logo"
            width={40}
            height={40}
            className="rounded-[10px]"
            priority
          />
        AI Email Refiner
      </a>
      <ul className="flex items-center gap-7 list-none max-md:hidden">
        <li><a href="#features" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#124170]">Features</a></li>
        <li><a href="#how" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#124170]">How it works</a></li>
        <li><a href="#pricing" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#124170]">Pricing</a></li>
        <li><a href="#faq" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#124170]">FAQ</a></li>
        <li>
          <a href="https://github.com/CDenn03/RefineMail" target="_blank" rel="noopener noreferrer" className="nav-cta bg-[#0f2a44] text-white px-5 py-2 rounded-full text-[0.875rem] font-semibold shadow-[0_2px_12px_rgba(15,42,68,0.3)] transition-all hover:bg-[#124170] hover:-translate-y-px no-underline inline-flex items-center gap-2">
            Early Access
            <span className="bg-white/20 text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full tracking-wide">FREE</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
