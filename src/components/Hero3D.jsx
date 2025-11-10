import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#07090e]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gradient-to-r from-rose-300 via-red-400 to-orange-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          InfraTrader
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Cinematic crypto strategies and performance you can feel. Cleaner, faster, and smoother — now with an iridescent red aesthetic.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(244,63,94,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Get Access
          </a>
          <a href="#strategies" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
            Explore Strategies
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090e] to-transparent" />
    </section>
  );
}
