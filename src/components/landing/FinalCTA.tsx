export default function FinalCTA() {
  return (
    <section className="bg-white px-[5%] py-24">
      <div className="mx-auto max-w-[1320px] border-t border-[#0f2a44] pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-label">Try the workflow</p>
            <h2 className="max-w-[620px] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#0f172a]">
              Make the draft yours before you send it.
            </h2>
            <p className="mt-4 max-w-[580px] text-[1rem] leading-[1.7] text-[#475569]">
              Inspect the extension source, configure your own API key, and use the original-versus-revision review step before replacing any email text.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="https://github.com/CDenn03/RefineMail" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center border border-[#0f2a44] bg-[#0f2a44] px-5 text-[0.875rem] font-bold text-white no-underline hover:bg-[#124170]">Open GitHub →</a>
            <a href="#demo" className="inline-flex min-h-12 items-center border border-[#94a3b8] bg-white px-5 text-[0.875rem] font-bold text-[#334155] no-underline hover:border-[#124170] hover:text-[#124170]">See the demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
