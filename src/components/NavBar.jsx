import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'backdrop-blur-lg bg-black/40 border-b border-white/10'
    : 'bg-transparent';

  const linkClass =
    'text-sm md:text-[15px] text-white/80 hover:text-white transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${navClasses}`}>
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white">
          <span className="text-white">Infra</span>
          <span className="bg-gradient-to-r from-rose-400 via-red-500 to-orange-400 bg-clip-text text-transparent">Trader</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a className={linkClass} href="#strategies">Strategies</a>
          <a className={linkClass} href="#reviews">Reviews</a>
          <a className={linkClass} href="#contact">Contact</a>
          <a className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(244,63,94,0.35)] hover:shadow-[0_0_32px_rgba(251,113,133,0.45)] transition-shadow" href="#pricing">Get Access</a>
        </div>

        <button aria-label="Open Menu" className="md:hidden text-white" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute right-4 top-4">
            <button aria-label="Close Menu" className="text-white" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <div className="absolute left-0 right-0 top-16 mx-4 rounded-2xl border border-white/10 bg-zinc-900/90 p-6">
            <div className="flex flex-col gap-4">
              <a className={linkClass} href="#strategies" onClick={() => setOpen(false)}>Strategies</a>
              <a className={linkClass} href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
              <a className={linkClass} href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2 text-sm font-medium text-white text-center" href="#pricing" onClick={() => setOpen(false)}>Get Access</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
