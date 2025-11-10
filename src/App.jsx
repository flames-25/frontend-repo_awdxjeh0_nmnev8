import NavBar from './components/NavBar.jsx';
import Hero3D from './components/Hero3D.jsx';
import MarketsCharts from './components/MarketsCharts.jsx';
import Strategies from './components/Strategies.jsx';
import PricingContact from './components/PricingContact.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#04050a]">
      {/* Global neon background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_90%_90%,rgba(217,70,239,0.06),transparent_60%)]" />
      </div>

      <NavBar />
      <main className="relative">
        <Hero3D />
        <MarketsCharts />
        <Strategies />
        <PricingContact />
      </main>

      <footer className="relative border-t border-white/10 bg-[#05060b] py-10 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p style={{ fontFamily: 'Inter, ui-sans-serif' }}>© {new Date().getFullYear()} NEONX — Elite Crypto Intelligence</p>
        </div>
      </footer>
    </div>
  );
}
