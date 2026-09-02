import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon.jsx';
import { useTheme } from '../hooks/useTheme.js';

const LINKS = [
  { label: 'Work', to: '/#work' },
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

function Wordmark() {
  return (
    <Link
      to="/"
      className="font-display text-xl font-medium lowercase tracking-tight text-ink-900 dark:text-ink-50"
    >
      builtby<span className="text-clay-600 dark:text-clay-400">max</span>
    </Link>
  );
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

  // Scroll-spy: light up Work / Services when their section is in view
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
          ? 'border-b border-ink-200/80 bg-ink-100/85 backdrop-blur-md dark:border-ink-800/80 dark:bg-ink-950/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink-900 focus:px-3 focus:py-2 focus:text-ink-50"
      >
        Skip to content
      </a>
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <Wordmark />

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => {
            const active = isLinkActive(link.to, location, activeSection);
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-clay-500 after:transition-all after:duration-300 after:ease-soft ${
                    active
                      ? 'text-ink-900 after:w-full dark:text-ink-50'
                      : 'text-ink-600 after:w-0 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition hover:border-ink-300 hover:text-ink-900 dark:border-ink-700 dark:text-ink-300 dark:hover:border-ink-600 dark:hover:text-ink-50"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-[18px] w-[18px]" />
          </button>
          <Link to="/contact" className="hidden btn-primary px-5 py-2.5 lg:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-700 lg:hidden dark:border-ink-700 dark:text-ink-200"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-[18px] w-[18px]" />
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
                      className="block rounded-xl px-4 py-3 text-sm text-ink-800 hover:bg-ink-100 dark:text-ink-100 dark:hover:bg-ink-800"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="p-2">
                  <Link to="/contact" className="btn-primary w-full">
                    Get in touch
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
