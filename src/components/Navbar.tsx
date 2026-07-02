import { useState, useEffect } from 'react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-petrol rounded-lg flex items-center justify-center text-white group-hover:bg-petrol-light transition-colors">
              <HeartPulse size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl leading-none tracking-tight ${isScrolled ? 'text-petrol' : 'text-white'}`}>CAVET</span>
              <span className={`text-[10px] font-medium tracking-wider ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>HOSPITAL 24H</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-watergreen ${
                  isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+552141132350"
              className={`flex items-center gap-2 text-sm font-bold transition-colors hover:text-watergreen ${
                isScrolled ? 'text-petrol' : 'text-white'
              }`}
            >
              <Phone size={18} />
              (21) 4113-2350
            </a>
            <a
              href="https://wa.me/5521986679262"
              target="_blank"
              rel="noreferrer"
              className="bg-watergreen hover:bg-watergreen-light text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-watergreen/20"
            >
              Emergência 24h
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-petrol' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 font-medium text-lg px-2 py-2 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-2 border-slate-100" />
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+552141132350"
                  className="flex items-center justify-center gap-2 text-petrol font-bold py-3 bg-slate-50 rounded-lg"
                >
                  <Phone size={20} />
                  (21) 4113-2350
                </a>
                <a
                  href="https://wa.me/5521986679262"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center bg-watergreen text-white py-3 rounded-lg font-bold shadow-md"
                >
                  Emergência 24h WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
