import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layers, Compass } from 'lucide-react';

const strategies = [
  {
    icon: Shield,
    title: 'Alpha Guard',
    desc: 'Risk-weighted momentum with volatility capping and dynamic exposure.',
    tags: ['Volatility', 'Momentum', 'Risk Parity'],
  },
  {
    icon: Zap,
    title: 'Pulse Breaker',
    desc: 'Breakout engine with regime filters and adaptive cool-down windows.',
    tags: ['Breakout', 'Regime', 'Adaptive'],
  },
  {
    icon: Layers,
    title: 'Stacked Edge',
    desc: 'Multi-factor blend that stacks edges across trend, carry, and flow.',
    tags: ['Multi-factor', 'Trend', 'Carry'],
  },
  {
    icon: Compass,
    title: 'Vector Scout',
    desc: 'Mean-reversion scout with liquidity screens and micro-structure cues.',
    tags: ['Reversion', 'Liquidity', 'Micro-structure'],
  },
];

export default function Strategies() {
  return (
    <section id="strategies" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Strategies
      </motion.h2>
      <p className="mt-2 max-w-2xl text-white/70">Four focused systems engineered for robustness. Tap any card for a quick detail flip.</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {strategies.map((s, i) => (
          <FlipCard key={s.title} strategy={s} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ strategy, delay }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = strategy.icon;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
      onClick={() => setFlipped((f) => !f)}
      className="group relative h-48 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl p-4 [backface-visibility:hidden]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-[0_0_24px_rgba(244,63,94,0.35)]">
              <Icon size={20} />
            </span>
            <h3 className="text-base font-semibold text-white">{strategy.title}</h3>
          </div>
          <p className="text-sm text-white/70">{strategy.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {strategy.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl p-4 [backface-visibility:hidden]" style={{ transform: 'rotateY(180deg)' }}>
          <div className="h-full rounded-xl border border-white/10 bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-400/10 p-4">
            <p className="text-sm text-white/80">
              Designed for smoother equity curves and controlled risk. Click again to return.
            </p>
            <ul className="mt-3 list-disc pl-5 text-xs text-white/70">
              <li>Dynamic position sizing</li>
              <li>Regime-aware filters</li>
              <li>Latency-tolerant execution</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-rose-400/40" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-rose-500/0 via-rose-500/15 to-orange-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.button>
  );
}
