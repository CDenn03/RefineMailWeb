'use client'

import { useEffect } from 'react'

export default function Navigation() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar')
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-100 px-[5%] py-5 flex items-center justify-between transition-all duration-300">
      <a href="#" className="flex items-center gap-2.5 font-heading font-extrabold text-lg text-white tracking-tight no-underline">
        <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-[10px] flex items-center justify-center text-base border border-white/20">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </div>
        AI Email Refiner
      </a>
      <ul className="flex items-center gap-9 list-none max-md:hidden">
        <li><a href="#features" className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white">Features</a></li>
        <li><a href="#how" className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white">How it works</a></li>
        <li><a href="#pricing" className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white">Pricing</a></li>
        <li><a href="#faq" className="text-sm font-medium text-white/80 no-underline transition-colors hover:text-white">FAQ</a></li>
        <li>
          <a href="#" className="bg-white text-[#0f2a44] px-5 py-2.5 rounded-full font-semibold shadow-[0_4px_14px_rgba(255,255,255,0.25)] transition-all hover:bg-cream hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(255,255,255,0.35)] no-underline">
            Add to Chrome
          </a>
        </li>
      </ul>
    </nav>
  )
}
