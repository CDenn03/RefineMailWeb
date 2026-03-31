export default function Footer() {
  const footerLinks = [
    ['Product', ['Features', 'Pricing', 'Demo', 'FAQ', 'Changelog']],
    ['Company', ['About', 'Blog', 'Contact', 'Careers', 'Press Kit']],
    ['Legal', ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security']],
  ]

  return (
    <footer className="bg-[#0f172a] px-[5%] pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <a href="#" className="flex items-center gap-2.5 font-extrabold text-[1rem] text-white tracking-tight no-underline mb-4 w-fit" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <div className="w-8 h-8 bg-[#2563eb] rounded-[10px] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.4)]">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              AI Email Refiner
            </a>
            <p className="text-[0.85rem] font-normal text-white/40 leading-[1.7] max-w-[240px] mb-6">
              AI-powered email writing for professionals who value their time and reputation.
            </p>
            <div className="flex gap-2">
              {['X', 'in', 'f', '▶'].map((s, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/[0.07] rounded-lg flex items-center justify-center text-[0.8rem] text-white/40 cursor-pointer no-underline transition-all hover:bg-[#2563eb]/30 hover:text-blue-300">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map(([title, links]) => (
            <div key={title as string}>
              <div className="text-[0.72rem] font-bold tracking-widest uppercase text-[#475569] mb-5">
                {title}
              </div>
              <ul className="list-none flex flex-col gap-3">
                {(links as string[]).map(l => (
                  <li key={l}>
                    <a href="#" className="text-[0.85rem] font-normal text-white/40 no-underline transition-colors hover:text-white/75">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/6 pt-6 flex items-center justify-between max-md:flex-col max-md:gap-3 max-md:text-center">
          <div className="text-[0.78rem] font-normal text-white/25">
            © 2025 AI Email Refiner. All rights reserved.
          </div>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a key={l} href="#" className="text-[0.78rem] font-normal text-white/25 no-underline transition-colors hover:text-white/55">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
