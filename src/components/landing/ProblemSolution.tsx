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
    <section className="px-[5%] py-32 bg-[#0a1e31]" id="why">
      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold mb-4 ">
        The Problem
      </div>
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight mb-4.5">
        Email writing is<br />surprisingly hard
      </h2>
      <div className="grid grid-cols-2 gap-15 mt-15 max-lg:grid-cols-1">
        <div>
          <div className="font-heading text-lg font-bold mb-7 pb-3.5 border-b-2 border-coral text-coral">
            The Struggle
          </div>
          {problems.map(([title, desc], i) => (
            <div key={i} className={`flex gap-3.5 items-start mb-5 reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
              <div className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0" />
              <div>
                <strong className="block text-[0.95rem] font-semibold text-white mb-0.5">{title}</strong>
                <p className="text-[0.95rem] text-white/80 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="font-heading text-lg font-bold mb-7 pb-3.5 border-b-2 border-sage text-sage">
            The Solution
          </div>
          {solutions.map(([title, desc], i) => (
            <div key={i} className={`flex gap-3.5 items-start mb-5 reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
              <div className="w-2 h-2 rounded-full bg-sage mt-2 shrink-0" />
              <div>
                <strong className="block text-[0.95rem] font-semibold text-white mb-0.5">{title}</strong>
                <p className="text-[0.95rem] text-white/80 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
