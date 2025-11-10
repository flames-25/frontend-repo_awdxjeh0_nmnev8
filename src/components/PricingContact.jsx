import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$79/mo',
    features: ['1 strategy', 'Email support', 'Monthly updates'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$229/mo',
    features: ['All strategies', 'Priority support', 'Weekly updates', 'Reporting pack'],
    highlight: true,
  },
  {
    name: 'Fund',
    price: 'Custom',
    features: ['Desk integration', 'SLAs', 'Dedicated channel'],
    highlight: false,
  },
];

export default function PricingContact() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Pricing & Contact
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className={`relative rounded-2xl border border-white/10 p-6 backdrop-blur-md ${
              t.highlight ? 'bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-400/10' : 'bg-white/[0.04]'
            }`}
          >
            <h3 className="text-white">{t.name}</h3>
            <div className="mt-2 text-2xl font-semibold text-white">{t.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-orange-500 px-5 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(244,63,94,0.35)]">
              Choose {t.name}
            </a>
          </motion.div>
        ))}
      </div>

      <div id="contact" className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
        <h3 className="text-white">Contact</h3>
        <form className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500 sm:col-span-1" placeholder="Name"/>
          <input type="email" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500 sm:col-span-1" placeholder="Email"/>
          <textarea rows={4} className="sm:col-span-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-rose-500" placeholder="Tell us what you need"></textarea>
          <div className="sm:col-span-2">
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(244,63,94,0.35)] active:scale-[0.98]">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
