import NavBar from './components/NavBar';
import Hero3D from './components/Hero3D';
import Strategies from './components/Strategies';
import Reviews from './components/Reviews';

export default function App() {
  return (
    <div className="min-h-screen bg-[#04050a] text-white">
      <NavBar />
      <Hero3D />
      <Strategies />
      <Reviews />
      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} InfraTrader. All rights reserved.
      </footer>
    </div>
  );
}
