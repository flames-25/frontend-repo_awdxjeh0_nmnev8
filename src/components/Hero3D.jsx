import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const particlesRef = useRef(null);

  // Inject Orbitron font link once
  useEffect(() => {
    const id = 'orbitron-font-link';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Simple particle system for background energy
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      c: Math.random() > 0.5 ? 'rgba(56, 189, 248, 0.5)' : 'rgba(168, 85, 247, 0.5)',
    }));

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.6);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
      grad.addColorStop(1, 'rgba(147, 51, 234, 0.02)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.c;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const headline = 'InfraTrader';
  const sub = 'Institutional-grade crypto strategies — simplified. Proven edges, clear risk, automated execution.';

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#07090e] text-white">
      {/* 3D Spline Scene (full-width cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient sheen overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.18),transparent_60%)]" />
      </div>

      {/* Particles layer */}
      <canvas ref={particlesRef} className="pointer-events-none absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-36 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 backdrop-blur"
          style={{ boxShadow: '0 0 30px rgba(56,189,248,0.15)' }}
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_3px_rgba(56,189,248,0.6)]" />
          <span className="text-xs uppercase tracking-[0.25em] text-cyan-300/90">Crypto Strategy Suite</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
          className="text-center text-4xl font-extrabold leading-tight text-white sm:text-6xl"
          style={{ fontFamily: 'Orbitron, Inter, ui-sans-serif, system-ui' }}
        >
          {headline.split('').map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.02 }}
              className="inline-block"
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 max-w-2xl text-center text-white/85 text-lg"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          {sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#strategies" className="group relative overflow-hidden rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 text-cyan-200 backdrop-blur transition hover:bg-cyan-500/20" style={{ boxShadow: '0 0 40px rgba(56,189,248,0.15)' }}>
            <span className="relative z-10">View Strategies</span>
            <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-cyan-400/30 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
          </a>
          <a href="#performance" className="group relative overflow-hidden rounded-xl border border-fuchsia-500/40 bg-fuchsia-500/10 px-6 py-3 text-fuchsia-200 backdrop-blur transition hover:bg-fuchsia-500/20" style={{ boxShadow: '0 0 40px rgba(217,70,239,0.15)' }}>
            <span className="relative z-10">See Performance</span>
            <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-fuchsia-400/30 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </motion.div>
      </div>

      {/* Floating neon coins */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-6 w-6 rounded-full"
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              background: 'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.9), rgba(147,51,234,0.85))',
              boxShadow: '0 0 20px rgba(147,51,234,0.6), 0 0 40px rgba(56,189,248,0.3) inset',
              animation: `float${i} ${6 + Math.random() * 6}s ease-in-out infinite alternate`,
              filter: 'blur(0.2px)'
            }}
          />
        ))}
        <style>{`
          ${Array.from({ length: 10 })
            .map((_, i) => `@keyframes float${i}{from{transform:translateY(0) translateX(0) rotate(0)}to{transform:translateY(${10 + i}% ) translateX(${i % 2 === 0 ? 8 : -8}% ) rotate(${i * 13}deg)}}`)
            .join('\n')}
        `}</style>
      </div>
    </section>
  );
}
