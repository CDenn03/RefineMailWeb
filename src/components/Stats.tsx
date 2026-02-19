export default function Stats() {
  const stats = [
    ['10K+', 'Professionals using daily'],
    ['70%', 'Faster email writing'],
    ['7', 'AI writing styles'],
    ['4.8★', 'Chrome Store rating']
  ]

  return (
    <div className="bg-navy border-t border-b border-navy-3/50 px-[5%] py-8">
      <div className="grid grid-cols-4 gap-8 text-center max-md:grid-cols-2">
        {stats.map(([number, label], i) => (
          <div key={i} className={`reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
            <div className="font-heading text-[2.4rem] font-extrabold text-gold tracking-tight leading-none mb-1.5">
              {number}
            </div>
            <div className="text-[0.85rem] text-white/90 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
