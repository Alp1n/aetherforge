import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navigation = [
    { name: 'Domov', path: '/' },
    { name: 'Služby', path: '/services' },
    { name: 'Kontakt', path: '/contact' }
  ];

  const services = [
    { name: 'Vlastní AI Asistenti', path: '/services/ai-assistants' },
    { name: 'Špecializovaní AI Agenti', path: '/services/specialized-agents' },
    { name: 'Profesionálny Vývoj Webu', path: '/services/web-development' },
    { name: 'Vývoj AI Chatbotov', path: '/services/chatbots' },
    { name: 'Automatizácia Procesov', path: '/services/automation' }
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    const createParticle = () => {
      const particles = document.querySelector('.particles');
      if (particles) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
        particles.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 4000);
      }
    };

    const particleInterval = setInterval(createParticle, 200);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(particleInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-darker flex flex-col">
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-darker/80 backdrop-blur-xl z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-darker/80 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Link 
                to="/"
                className="group"
                aria-label="Domov"
              >
                <img 
                  src="data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 2L37.3205 11V29L20 38L2.67949 29V11L20 2Z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='2.67949' y1='20' x2='37.3205' y2='20' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFD700'/%3E%3Cstop offset='1' stop-color='%23FFA500'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                  alt="AetherForge Logo"
                  className="h-8 w-8 transition-all duration-500 transform group-hover:scale-110"
                />
              </Link>
              <Link 
                to="/about"
                className="text-2xl font-bold logo-gradient hover:opacity-80 transition-opacity"
              >
                AETHERFORGE
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                    ${currentPath === item.path 
                      ? 'text-darker bg-gradient-to-r from-gold via-orange to-coral shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5 overflow-hidden group'
                    }
                  `}
                >
                  {currentPath !== item.path && (
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold/20 via-orange/20 to-coral/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  )}
                  {item.name}
                </Link>
              ))}
            </div>

            <button 
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div 
            className={`md:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            } overflow-hidden relative z-50`}
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPath === item.path 
                      ? 'bg-gradient-to-r from-gold via-orange to-coral text-darker font-medium shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className={`${currentPath === '/' ? '' : 'pt-20'} flex-grow`}>
        <div className="particles"></div>
        {children}
      </main>

      <footer className="bg-dark/95 border-t border-gold/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-reveal">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 2L37.3205 11V29L20 38L2.67949 29V11L20 2Z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='2.67949' y1='20' x2='37.3205' y2='20' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFD700'/%3E%3Cstop offset='1' stop-color='%23FFA500'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                  alt="AetherForge Logo"
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold logo-gradient">AETHERFORGE</span>
              </div>
              <p className="text-gray-400">
                Kujeme budúcnosť s pokročilými AI riešeniami.
              </p>
            </div>
            <div className="scroll-reveal">
              <h4 className="text-lg font-bold text-gold mb-4">Navigácia</h4>
              <ul className="space-y-2 text-gray-400">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-gold transition-colors duration-300 nav-link"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="scroll-reveal">
              <h4 className="text-lg font-bold text-gold mb-4">Služby</h4>
              <ul className="space-y-2 text-gray-400">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className="hover:text-gold transition-colors duration-300 nav-link"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gold/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AetherForge. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}