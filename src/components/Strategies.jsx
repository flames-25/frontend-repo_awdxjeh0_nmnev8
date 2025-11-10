import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Quant Momentum',
    desc: 'Multi-timeframe momentum with adaptive volatility filters and dynamic risk parity.',
  },
  {
    title: 'Arbitrage Mesh',
    desc: 'Cross-venue latency scouting with spread capture and liquidity-aware routing.',
  },
  {
    title: 'Mean Reversion AI',
    desc: 'Regime-switching mean reversion with anomaly detection and ML signal stacking.',
  },
];

export default function Strategies() {
  return (
    <section id="strategies" className="relative w-full bg-[#060712] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, Inter' }}>Strategies</h2>
          <p className="mt-2 max-w-2xl text-white/70" style={{ fontFamily: 'Inter' }}>
            Engineered for precision with glowing glass panels and subtle motion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset, 0 10px 50px rgba(147,51,234,0.08)' }}
            >
              <div className="absolute -inset-px rounded-2xl opacity-40 blur transition group-hover:opacity-70" style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.25), rgba(217,70,239,0.25))' }} />
              <div className="relative">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70" style={{ fontFamily: 'Inter' }}>{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">View playbook</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
