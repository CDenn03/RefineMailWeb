import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] px-[5%] py-10 text-white">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-8">
        <div>
          <a href="#hero" className="flex items-center gap-2.5 text-[1.05rem] font-extrabold tracking-[-0.025em] text-white no-underline">
            <Image src="/RefineEmailLogo.webp" alt="RefineMail logo" width={34} height={34} className="rounded-[4px]" />
            RefineMail
          </a>
          <p className="mt-3 max-w-[430px] text-[0.84rem] leading-[1.65] text-white/70">
            An open-source email-refinement workflow built around tone selection, revision review, and sender control.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-[0.82rem] font-semibold">
          <a href="#demo" className="text-white/70 no-underline hover:text-white">Demo</a>
          <a href="#faq" className="text-white/70 no-underline hover:text-white">FAQ</a>
          <a href="https://github.com/CDenn03/RefineMail" target="_blank" rel="noopener noreferrer" className="text-white no-underline">GitHub ↗</a>
        </div>
      </div>
    </footer>
  );
}
