import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('nav-root');
      if (!el) return;
      const scrolled = window.scrollY > 10;
      el.style.background = scrolled ? 'rgba(2,6,12,0.6)' : 'transparent';
      el.style.boxShadow = scrolled ? '0 10px 40px rgba(56,189,248,0.08)' : 'none';
      el.style.backdropFilter = scrolled ? 'blur(10px)' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { href: '#home', label: 'Home' },
    { href: '#markets', label: 'Live Markets' },
    { href: '#strategies', label: 'Strategies' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header id="nav-root" className="fixed inset-x-0 top-0 z-50 transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_6px_rgba(56,189,248,0.5)]" />
          <span className="font-semibold tracking-widest text-white" style={{ fontFamily: 'Orbitron, Inter' }}>NEONX</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-white/80 transition hover:text-cyan-300" style={{ fontFamily: 'Inter' }}>
              {it.label}
            </a>
          ))}
        </nav>
        <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#pricing" className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:bg-cyan-400/20">
          Get Access
        </motion.a>
      </div>
    </header>
  );
}
