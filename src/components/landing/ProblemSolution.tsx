export default function ProblemSolution() {
  const problems = [
    ["Tone is contextual", "A message to a client, manager, or teammate needs a different level of formality and detail."],
    ["Drafts can lose the point", "Re-reading and rewriting can bury the actual request, context, or next step."],
    ["High-stakes messages need care", "An apology, follow-up, or escalation benefits from a deliberate second pass before sending."],
    ["The sender stays accountable", "A rewrite is useful only when the person sending it can inspect and change it."],
  ];

  const solutions = [
    ["Choose an intended tone", "Select a writing style that gives the revision a clear communication goal."],
    ["Keep the original visible", "The workflow starts from the existing draft instead of asking you to start over."],
    ["Review the revision", "Compare the proposed wording before it replaces any text in the compose window."],
    ["Apply only when it is right", "Use the revised text as a starting point, edit it further, or keep the original."],
  ];

  return (
    <section className="bg-[#f5f6f8] px-[5%] py-24" id="why">
      <div className="mx-auto max-w-[1320px]">
        <p className="section-label">The product decision</p>
        <h2 className="mb-12 max-w-[650px] text-[clamp(2rem,4vw,3.35rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#0f172a]">
          A revision should make the next sentence clearer, not make the sender disappear.
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <article className="border-t border-[#94a3b8] pt-5">
            <p className="mb-6 text-[0.72rem] font-extrabold tracking-[0.11em] text-[#64748b] uppercase">What gets in the way</p>
            <div className="divide-y divide-[#cbd5e1]">
              {problems.map(([title, description]) => <div key={title} className="py-4"><h3 className="text-[0.94rem] font-bold text-[#0f172a]">{title}</h3><p className="mt-1 text-[0.875rem] leading-[1.65] text-[#64748b]">{description}</p></div>)}
            </div>
          </article>
          <article className="border-t border-[#0f2a44] pt-5">
            <p className="mb-6 text-[0.72rem] font-extrabold tracking-[0.11em] text-[#124170] uppercase">How RefineMail responds</p>
            <div className="divide-y divide-[#cbd5e1]">
              {solutions.map(([title, description]) => <div key={title} className="py-4"><h3 className="text-[0.94rem] font-bold text-[#0f172a]">{title}</h3><p className="mt-1 text-[0.875rem] leading-[1.65] text-[#64748b]">{description}</p></div>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
