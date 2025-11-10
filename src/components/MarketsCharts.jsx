import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Lightweight animated area chart using canvas
function AreaChart({ colorA = '#22d3ee', colorB = '#a855f7' }) {
  const ref = useRef(null);
  const [seed] = useState(() => Math.random() * 1000);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      draw(0);
    };
    window.addEventListener('resize', onResize);

    const n = 80;
    let t = 0;

    const noise = (x) => {
      return (
        Math.sin(x * 0.9 + seed) * 0.6 +
        Math.sin(x * 0.5 + seed * 1.3) * 0.3 +
        Math.sin(x * 1.7 + seed * 0.7) * 0.1
      );
    };

    const draw = (dt) => {
      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, `${colorA}33`);
      grad.addColorStop(1, `${colorB}05`);

      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const x = (i / n) * w;
        const y = h * 0.5 + (noise(i * 0.3 + t) * h) / 4;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = colorA;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 12;
      ctx.shadowColor = colorA;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const x = (i / n) * w;
        const y = h * 0.5 + (noise(i * 0.3 + t) * h) / 4;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      t += 0.01;
      requestAnimationFrame(draw);
    };

    draw(0);
    return () => window.removeEventListener('resize', onResize);
  }, [colorA, colorB, seed]);

  return <canvas ref={ref} className="h-40 w-full" />;
}

export default function MarketsCharts() {
  return (
    <section id="markets" className="relative w-full bg-[#05060b] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(147,51,234,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Orbitron, Inter' }}>Live Markets</h2>
            <p className="mt-2 text-white/70" style={{ fontFamily: 'Inter' }}>
              Animated charts with neon glow and fluid transitions.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10">1H</button>
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10">24H</button>
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10">7D</button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'BTC/USDT', ca: '#22d3ee', cb: '#a855f7' },
            { title: 'ETH/USDT', ca: '#06b6d4', cb: '#9333ea' },
            { title: 'SOL/USDT', ca: '#67e8f9', cb: '#d946ef' },
          ].map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02), 0 10px 50px rgba(56,189,248,0.06)' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-white/80" style={{ fontFamily: 'Inter' }}>{c.title}</div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_3px_rgba(16,185,129,0.7)]" />
              </div>
              <AreaChart colorA={c.ca} colorB={c.cb} />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(650px 100px at 50% 100%, rgba(56,189,248,0.15), transparent 60%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
