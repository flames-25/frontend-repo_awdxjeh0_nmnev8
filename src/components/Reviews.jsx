import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ava K.',
    role: 'Quant PM',
    quote: 'The consistency is what stands out — smooth curves, low heat. Exactly what we wanted.',
  },
  {
    name: 'Marco T.',
    role: 'Crypto Desk Lead',
    quote: 'Clean execution and robust filters. Drawdown control is best-in-class.',
  },
  {
    name: 'Serena L.',
    role: 'Investor',
    quote: 'Finally a premium product that feels premium. The experience matches the results.',
  },
  {
    name: 'Noah R.',
    role: 'Algo Trader',
    quote: 'Latency-tolerant logic that still finds edges. Strong engineering.',
  },
  {
    name: 'Iris M.',
    role: 'Research',
    quote: 'Clear, concise reporting. Great for stakeholder updates.',
  },
  {
    name: 'Daniel P.',
    role: 'Fund Ops',
    quote: 'Onboarding and support were fast and smart. Worth the switch.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Reviews
      </motion.h2>
      <p className="mt-2 max-w-2xl text-white/70">A growing set of voices from desks and funds using InfraTrader.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, idx) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
          >
            <div className="mb-3 flex items-center gap-1 text-rose-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-rose-400/90 text-rose-400" />
              ))}
            </div>
            <p className="text-sm text-white/80">“{r.quote}”</p>
            <div className="mt-4 flex items-center justify-between text-white/70">
              <span className="text-sm font-medium text-white">{r.name}</span>
              <span className="text-xs">{r.role}</span>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-rose-400/40" />
            <div className="pointer-events-none absolute -inset-px -z-[0] rounded-2xl bg-gradient-to-r from-rose-500/0 via-rose-500/15 to-orange-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
