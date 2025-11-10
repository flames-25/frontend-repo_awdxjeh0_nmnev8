import { motion } from 'framer-motion';

const quotes = [
  {
    name: 'Alex M.',
    role: 'Quant Trader',
    quote: 'InfraTrader’s momentum stack outperformed my desk model the first week. Clean risk, tight execution.',
  },
  {
    name: 'Priya K.',
    role: 'Crypto Fund PM',
    quote: 'The strategy signals are razor sharp. The transparency and tooling are a level above.',
  },
  {
    name: 'Diego R.',
    role: 'Algo Researcher',
    quote: 'Backtests matched my shadow fills within 0.3%. That accuracy builds real trust.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative w-full bg-[#060712] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(217,70,239,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, Inter' }}>Reviews</h2>
          <p className="mt-2 text-white/70" style={{ fontFamily: 'Inter' }}>Real feedback from operators who demand results.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure key={q.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="absolute -inset-px rounded-2xl opacity-30 blur transition group-hover:opacity-60" style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.25), rgba(217,70,239,0.25))' }} />
              <blockquote className="relative text-white/85" style={{ fontFamily: 'Inter' }}>
                “{q.quote}”
              </blockquote>
              <figcaption className="relative mt-4 text-sm text-white/60">
                <span className="font-medium text-white/90">{q.name}</span> — {q.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
