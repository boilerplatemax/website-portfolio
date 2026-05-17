import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon.jsx';
import { useTheme } from '../hooks/useTheme.js';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const SECTION_IDS = ['work', 'services'];

function isLinkActive(to, location, activeSection) {
  const { pathname, hash } = location;
  if (to.startsWith('/#')) {
    if (pathname !== '/') return false;
    const target = to.slice(2);
    if (hash === `#${target}`) return true;
    return activeSection === target;
  }
  if (to === '/') return pathname === '/' && !activeSection;
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Scroll-spy: light up Portfolio / Services when their section is in view
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return undefined;
    }
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
        else if (window.scrollY < 200) setActiveSection(null);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm dark:bg-ink-950/80'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />
            </svg>
          </span>
          <span>
            Site<span className="gradient-text">Crafters</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const active = isLinkActive(link.to, location, activeSection);
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-ink-900/5 text-ink-900 dark:bg-white/10 dark:text-white'
                      : 'text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-700 transition hover:bg-white dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:bg-ink-800"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-5 w-5" />
          </button>
          <Link to="/contact" className="hidden btn-primary lg:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-700 lg:hidden dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="container-x pb-4">
              <ul className="card flex flex-col gap-1 p-2">
                {LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink-800 hover:bg-ink-50 dark:text-ink-100 dark:hover:bg-ink-800"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="p-2">
                  <Link to="/contact" className="btn-primary w-full">
                    Start a project
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
