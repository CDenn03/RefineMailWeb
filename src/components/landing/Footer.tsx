export default function Footer() {
  const footerLinks = [
    ['Product', ['Features', 'Pricing', 'Demo', 'FAQ', 'Changelog']],
    ['Company', ['About', 'Blog', 'Contact', 'Careers', 'Press Kit']],
    ['Legal', ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security']],
  ]

  return (
    <footer className="bg-navy-4 px-[5%] pt-15 pb-8">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div>
          <a href="#" className="flex items-center gap-2.5 font-heading font-extrabold text-lg text-white tracking-tight no-underline mb-3.5 inline-flex">
            <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-[10px] flex items-center justify-center text-base border border-white/20">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            AI Email Refiner
          </a>
          <p className="text-[0.88rem] text-white/40 leading-relaxed max-w-[260px] mb-5">
            AI-powered email writing for professionals who value their time and reputation.
          </p>
          <div className="flex gap-2.5">
            {['X', 'LinkedIn', 'Facebook', 'YouTube'].map(s => (
              <a key={s} href="#" className="w-9 h-9 bg-white/[0.08] rounded-lg flex items-center justify-center text-[0.85rem] text-white/50 cursor-pointer no-underline transition-all hover:bg-gold/20 hover:text-gold-2">
                {s.charAt(0)}
              </a>
            ))}
          </div>
        </div>
        {footerLinks.map(([title, links]) => (
          <div key={title as string}>
            <div className="font-heading text-xs font-bold tracking-wider uppercase text-gold-2 mb-4.5">
              {title}
            </div>
            <ul className="list-none flex flex-col gap-2.5">
              {(links as string[]).map(l => (
                <li key={l}>
                  <a href="#" className="text-[0.88rem] text-white/45 no-underline transition-colors hover:text-white/85">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.07] pt-6 flex items-center justify-between max-md:flex-col max-md:gap-3 max-md:text-center">
        <div className="text-[0.82rem] text-white/30">
          © 2025 AI Email Refiner. All rights reserved.
        </div>
        <div className="flex gap-5">
          {['Privacy', 'Terms', 'Cookies'].map(l => (
            <a key={l} href="#" className="text-[0.82rem] text-white/30 no-underline transition-colors hover:text-white/60">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
