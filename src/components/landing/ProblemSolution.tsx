export default function ProblemSolution() {
  const problems = [
    ['Hours lost every week', 'The average professional spends 2.6 hours a day on email. Much of that is re-reading and rewriting.'],
    ['Tone anxiety is real', 'Worrying whether an email sounds too harsh, too casual, or unclear — leading to long editing sessions.'],
    ['Endless rewriting cycles', 'Drafting, deleting, starting over. The same message rewritten five times before you hit send.'],
    ['Cross-cultural missteps', 'Remote teams and global clients demand different communication styles that are hard to navigate.'],
  ]

  const solutions = [
    ['Instant AI transformation', 'One click refines your draft into a polished, professional message in any style you choose.'],
    ['7 styles at your fingertips', 'From formal board communications to friendly check-ins — match your tone perfectly every time.'],
    ['Preview before applying', 'See exactly how your email will read before applying the changes. Full control, zero surprises.'],
    ['Culturally intelligent writing', 'AI that understands communication nuances across professional and cultural contexts.'],
  ]

  return (
    <section className="px-[5%] py-28 bg-[#f5f7ff]" id="why">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">The Problem</div>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-14 max-w-[480px]">
          Email writing is surprisingly hard
        </h2>
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {/* Problems card */}
          <div className="card px-7 py-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-[10px] bg-red-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <span className="text-[0.875rem] font-bold text-red-500 tracking-[-0.01em]">The Struggle</span>
            </div>
            <div className="flex flex-col gap-4">
              {problems.map(([title, desc], i) => (
                <div key={i} className={`flex gap-3 items-start reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                  <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </div>
                  <div>
                    <div className="text-[0.875rem] font-semibold text-[#0f172a] mb-0.5">{title}</div>
                    <p className="text-[0.825rem] font-normal text-[#64748b] leading-[1.6]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions card */}
          <div className="card px-7 py-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-[10px] bg-emerald-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="text-[0.875rem] font-bold text-emerald-600 tracking-[-0.01em]">The Solution</span>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map(([title, desc], i) => (
                <div key={i} className={`flex gap-3 items-start reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[0.875rem] font-semibold text-[#0f172a] mb-0.5">{title}</div>
                    <p className="text-[0.825rem] font-normal text-[#64748b] leading-[1.6]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
