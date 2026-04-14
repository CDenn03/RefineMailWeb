import Image from 'next/image'

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
            <a href="#" className="flex items-center gap-2.5 font-extrabold text-[1.25rem] text-white/80 tracking-tight no-underline" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
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
            <p className="text-[0.85rem] font-normal text-white/75 leading-[1.7] max-w-[240px] mb-6">
              AI-powered email writing for professionals who value their time and reputation.
            </p>
            <div className="flex gap-2">
              {['X', 'in', 'f', '▶'].map((s, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/[0.07] rounded-lg flex items-center justify-center text-[0.8rem] text-white/60 cursor-pointer no-underline transition-all hover:bg-[#124170]/50 hover:text-blue-300">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map(([title, links]) => (
            <div key={title as string}>
              <div className="text-[0.72rem] font-bold tracking-widest uppercase text-white/40 mb-5">
                {title}
              </div>
              <ul className="list-none flex flex-col gap-3">
                {(links as string[]).map(l => (
                  <li key={l}>
                    <a href="#" className="text-[0.85rem] font-normal text-white/75 no-underline transition-colors hover:text-white/75">
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
