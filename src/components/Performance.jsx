import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function EquityCurve({ color = '#22d3ee' }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // background grid
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 24) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 24) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // equity line
      ctx.beginPath();
      const n = 200;
      for (let i = 0; i <= n; i++) {
        const x = (i / n) * w;
        const val = Math.sin(i * 0.12 + t) * 0.6 + Math.sin(i * 0.031 + t * 0.7) * 0.4 + i * 0.01;
        const y = h - ((val + 20) / 40) * h; // normalized
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 14;
      ctx.shadowColor = color;
      ctx.stroke();

      // gradient fill
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, `${color}33`);
      grad.addColorStop(1, '#00000000');
      ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
      ctx.fillStyle = grad; ctx.fill();

      t += 0.02;
      requestAnimationFrame(draw);
    };
    draw();
    return () => window.removeEventListener('resize', onResize);
  }, [color]);
  return <canvas ref={ref} className="h-56 w-full rounded-md" />;
}

function RadialGauge({ value = 72, color = '#a855f7' }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; draw(value); };
    window.addEventListener('resize', onResize);

    const draw = (val) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, r = Math.min(w, h) / 2 - 8;
      // track
      ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, 2 * Math.PI); ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 10; ctx.stroke();
      // progress
      const end = Math.PI + (val / 100) * Math.PI;
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, color); grad.addColorStop(1, '#22d3ee');
      ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, end); ctx.strokeStyle = grad; ctx.lineWidth = 10; ctx.shadowBlur = 18; ctx.shadowColor = color; ctx.stroke();
    };

    draw(value);
    return () => window.removeEventListener('resize', onResize);
  }, [value, color]);

  return <canvas ref={ref} className="h-36 w-full" />;
}

export default function Performance() {
  return (
    <section id="performance" className="relative w-full bg-[#05060b] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,211,238,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, Inter' }}>Performance</h2>
          <p className="mt-2 max-w-2xl text-white/70" style={{ fontFamily: 'Inter' }}>
            Live-simulated metrics that mirror real execution — transparent stats, glowing clarity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[{ label: 'Winrate', val: '71.6%', hint: '+ consistent' }, { label: 'Profit Factor', val: '2.41', hint: 'risk-adjusted' }, { label: 'Max Drawdown', val: '7.9%', hint: 'controlled' }, { label: 'CAGR (sim)', val: '38.2%', hint: 'compounded' }].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <div className="absolute -inset-px rounded-2xl opacity-30 blur" style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.2), rgba(217,70,239,0.2))' }} />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-white/60">{s.label}</div>
                <div className="mt-2 text-2xl font-semibold text-cyan-200" style={{ fontFamily: 'Orbitron, Inter' }}>{s.val}</div>
                <div className="text-xs text-white/50">{s.hint}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur md:col-span-2">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm text-white/80" style={{ fontFamily: 'Inter' }}>Equity Curve (sim)</div>
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_3px_rgba(16,185,129,0.7)]" />
            </div>
            <EquityCurve />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
            <div className="mb-3 text-sm text-white/80" style={{ fontFamily: 'Inter' }}>Winrate Gauge</div>
            <RadialGauge value={72} />
            <div className="mt-3 text-center text-sm text-white/60">72% 30D rolling</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
