'use client'

import { useEffect } from 'react'

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
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-100 px-[5%] py-3.5 flex items-center justify-between transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-[#e8ecf4]">
      <a href="#" className="flex items-center gap-2.5 font-extrabold text-[1.05rem] text-[#0f172a] tracking-tight no-underline" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <div className="w-8 h-8 bg-[#2563eb] rounded-[10px] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.35)]">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </div>
        AI Email Refiner
      </a>
      <ul className="flex items-center gap-7 list-none max-md:hidden">
        <li><a href="#features" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#2563eb]">Features</a></li>
        <li><a href="#how" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#2563eb]">How it works</a></li>
        <li><a href="#pricing" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#2563eb]">Pricing</a></li>
        <li><a href="#faq" className="text-[0.875rem] font-medium text-[#475569] no-underline transition-colors hover:text-[#2563eb]">FAQ</a></li>
        <li>
          <a href="#" className="nav-cta bg-[#2563eb] text-white px-5 py-2 rounded-full text-[0.875rem] font-semibold shadow-[0_2px_12px_rgba(37,99,235,0.3)] transition-all hover:bg-[#1d4ed8] hover:-translate-y-px no-underline">
            Add to Chrome
          </a>
        </li>
      </ul>
    </nav>
  )
}
