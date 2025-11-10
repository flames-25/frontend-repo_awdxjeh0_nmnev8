import { motion } from 'framer-motion';

export default function PricingContact() {
  return (
    <section id="pricing" className="relative w-full bg-[#05060b] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,70,239,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, Inter' }}>Pricing</h2>
            <p className="mt-2 text-white/70" style={{ fontFamily: 'Inter' }}>Transparent tiers with premium research and real-time market intelligence.</p>
          </div>
          <a href="#contact" className="rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-5 py-2 text-fuchsia-200 shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:bg-fuchsia-400/20">Talk to sales</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'Scout', price: 'Free', features: ['Live chart demo', 'Daily snapshots', 'Community access'] },
            { name: 'Pro', price: '$49/mo', features: ['Realtime streams', 'Strategy backtests', 'Priority support'] },
            { name: 'Institution', price: 'Custom', features: ['Dedicated analyst', 'API firehose', 'White-glove onboarding'] },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="absolute -inset-px rounded-2xl opacity-30 blur transition group-hover:opacity-60" style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.25), rgba(217,70,239,0.25))' }} />
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: 'Orbitron, Inter' }}>{p.name}</h3>
                  <div className="text-2xl text-cyan-300">{p.price}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/80" style={{ fontFamily: 'Inter' }}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.6)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-400/20">Choose</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="contact" className="mt-24">
          <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Orbitron, Inter' }}>Contact</h3>
          <p className="mt-2 text-white/70" style={{ fontFamily: 'Inter' }}>We respond within 24 hours.</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input required placeholder="Name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-400/30 focus:ring-2" />
            <input type="email" required placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-fuchsia-400/30 focus:ring-2" />
            <textarea required placeholder="Your message" className="md:col-span-2 min-h-[120px] rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-400/30 focus:ring-2" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-cyan-200 hover:bg-cyan-400/20">Send</motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
