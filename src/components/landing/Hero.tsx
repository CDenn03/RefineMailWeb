import EmailDemo from "../EmailDemo";

export default function Hero() {
  return (
    <section id="hero" className="border-b border-[#cbd5e1] bg-white px-[5%] pt-[132px] pb-18 max-md:pt-[104px]">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div>
          <p className="section-label">Email drafting, with a review step</p>
          <h1 className="mb-6 max-w-[630px] text-[clamp(2.7rem,5.4vw,4.65rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#0f172a]">
            Write the message. <span className="text-[#124170]">Control the tone.</span>
          </h1>
          <p className="mb-8 max-w-[570px] text-[1rem] leading-[1.75] text-[#475569] md:text-[1.1rem]">
            RefineMail is an open-source browser extension for drafting clearer emails in Gmail and Zimbra. Choose a writing style, review the revision, then decide whether to apply it.
          </p>
          <div className="flex flex-wrap gap-3 max-md:flex-col max-md:items-start">
            <a
              href="https://github.com/CDenn03/RefineMail"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center border border-[#0f2a44] bg-[#0f2a44] px-5 text-[0.875rem] font-bold text-white no-underline hover:bg-[#124170]"
            >
              View the source →
            </a>
            <a href="#demo" className="inline-flex min-h-12 items-center border border-[#94a3b8] bg-white px-5 text-[0.875rem] font-bold text-[#334155] no-underline hover:border-[#124170] hover:text-[#124170]">
              Review the workflow
            </a>
          </div>
          <dl className="mt-10 grid max-w-[560px] grid-cols-3 gap-4 border-t border-[#cbd5e1] pt-4 max-md:grid-cols-1">
            <div><dt className="text-[0.68rem] font-extrabold tracking-[0.11em] text-[#64748b] uppercase">Works in</dt><dd className="mt-1 text-[0.84rem] font-semibold text-[#0f172a]">Gmail and Zimbra</dd></div>
            <div><dt className="text-[0.68rem] font-extrabold tracking-[0.11em] text-[#64748b] uppercase">Control</dt><dd className="mt-1 text-[0.84rem] font-semibold text-[#0f172a]">Review before apply</dd></div>
            <div><dt className="text-[0.68rem] font-extrabold tracking-[0.11em] text-[#64748b] uppercase">Project</dt><dd className="mt-1 text-[0.84rem] font-semibold text-[#0f172a]">Open source</dd></div>
          </dl>
        </div>
        <EmailDemo />
      </div>
    </section>
  );
}
