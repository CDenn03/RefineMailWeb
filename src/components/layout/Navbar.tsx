import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-100 border-b border-[#cbd5e1] bg-white px-[5%] py-3">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-[1.05rem] font-extrabold tracking-[-0.025em] text-[#0f172a] no-underline"
        >
          <Image
            src="/RefineEmailLogo.webp"
            alt="RefineMail logo"
            width={34}
            height={34}
            className="rounded-[4px]"
            priority
          />
          RefineMail
        </a>
        <ul className="flex list-none items-center gap-6 max-md:hidden">
          <li><a href="#demo" className="text-[0.825rem] font-semibold text-[#475569] no-underline hover:text-[#124170]">Demo</a></li>
          <li><a href="#how" className="text-[0.825rem] font-semibold text-[#475569] no-underline hover:text-[#124170]">Workflow</a></li>
          <li><a href="#features" className="text-[0.825rem] font-semibold text-[#475569] no-underline hover:text-[#124170]">Capabilities</a></li>
          <li><a href="#faq" className="text-[0.825rem] font-semibold text-[#475569] no-underline hover:text-[#124170]">FAQ</a></li>
          <li>
            <a
              href="https://github.com/CDenn03/RefineMail"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta inline-flex min-h-10 items-center border border-[#0f2a44] bg-[#0f2a44] px-4 text-[0.825rem] font-bold text-white no-underline hover:bg-[#124170]"
            >
              View source
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
