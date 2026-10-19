"use client";

import { useEmailDemo } from "./demo/useEmailDemo";
import { useThinkingDots } from "./demo/useThinkingDots";
import { STYLES } from "./demo/demoData";

const EmailDemo = () => {
  const { demo, styleIndex, typedInput, output, phase } = useEmailDemo();
  const dots = useThinkingDots(phase === "thinking");
  const hasRevision = phase === "output" && output.trim().length > 0;

  return (
    <section aria-label="Illustrative RefineMail workflow" className="border border-[#cbd5e1] bg-white">
      <header className="flex items-center justify-between border-b border-[#cbd5e1] bg-[#f5f6f8] px-4 py-3">
        <span className="text-[0.68rem] font-extrabold tracking-[0.11em] text-[#475569] uppercase">Illustrative workflow</span>
        <span className="text-[0.72rem] font-semibold text-[#124170]">Review before apply</span>
      </header>

      <div className="grid min-h-[360px] grid-cols-[1fr_280px] max-md:grid-cols-1">
        <div className="p-5 max-md:p-4">
          <p className="mb-3 text-[0.72rem] font-extrabold tracking-[0.1em] text-[#c5221f] uppercase">Original draft</p>
          <div className="border border-[#cbd5e1]">
            <div className="border-b border-[#cbd5e1] bg-[#334155] px-3.5 py-2.5 text-[0.72rem] font-semibold text-white">New message</div>
            <div className="border-b border-[#e2e8f0] px-3 py-2 text-[0.75rem] text-[#64748b]">To: sarah@company.com</div>
            <div className="border-b border-[#e2e8f0] px-3 py-2 text-[0.75rem] text-[#64748b]">Subject: {demo.subject}</div>
            <div className="min-h-[132px] whitespace-pre-wrap p-3 text-[0.78rem] leading-relaxed text-[#334155]">
              {typedInput}
              {phase === "typing" && <span className="animate-blink ml-px inline-block h-[1em] w-px bg-[#334155] align-middle" />}
            </div>
          </div>
        </div>

        <div className="border-l border-[#cbd5e1] bg-[#0f2a44] p-5 text-white max-md:border-t max-md:border-l-0 max-md:p-4">
          <p className="mb-3 text-[0.68rem] font-extrabold tracking-[0.11em] text-blue-200 uppercase">RefineMail revision</p>
          <div className="mb-4 border-y border-white/20 py-2 text-[0.72rem] leading-relaxed text-white/75">
            <span className="font-bold text-white">Style: </span>{STYLES[styleIndex]}
          </div>
          <div className="mb-4 min-h-[136px] whitespace-pre-wrap border border-white/20 bg-white/5 p-3 text-[0.72rem] leading-relaxed text-white/90">
            {hasRevision ? <>{output}<span className="animate-blink ml-px inline-block h-[1em] w-px bg-white/70 align-middle" /></> : <span className="text-white/70">{phase === "thinking" ? `Preparing revision${dots}` : "Preparing a revision for review…"}</span>}
          </div>
          <button
            type="button"
            disabled={!hasRevision}
            className={`min-h-10 w-full border px-3 text-[0.75rem] font-extrabold ${hasRevision ? "border-white bg-white text-[#0f2a44] hover:bg-[#d6e4f0]" : "cursor-not-allowed border-white/25 bg-transparent text-white/50"}`}
          >
            Apply revision
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailDemo;
