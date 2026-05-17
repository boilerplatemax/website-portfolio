import { Link } from 'react-router-dom';
import { Icon } from './Icon.jsx';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white/60 py-14 dark:border-ink-800 dark:bg-ink-950/60">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />
                </svg>
              </span>
              Site<span className="gradient-text">Crafters</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-ink-600 dark:text-ink-300">
              Crafting web experiences that stand out — modern, fast, accessible sites for contractors, charities, brands and everyone in between.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+14165793253"
                  className="inline-flex items-center gap-2 text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 text-brand-500" />
                  (416) 579-3253
                </a>
              </li>
              <li>
                <a
                  href="mailto:maximsdev@gmail.com"
                  className="inline-flex items-center gap-2 text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4 text-brand-500" />
                  maximsdev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-500 dark:border-ink-800 dark:text-ink-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SiteCrafters Development. All rights reserved.</p>
          <p>Hand-built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
