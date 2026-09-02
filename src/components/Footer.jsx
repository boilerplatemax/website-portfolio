import { Link } from 'react-router-dom';
import { Icon } from './Icon.jsx';

const LINKS = [
  { label: 'Work', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 py-16 dark:border-ink-800">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-xl font-medium lowercase tracking-tight text-ink-900 dark:text-ink-50"
            >
              builtby<span className="text-clay-600 dark:text-clay-400">max</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Hand-coded websites for organizations, unions, charities and small
              businesses — modern, fast and accessible, built to last.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[0.65rem] font-medium uppercase tracking-label text-ink-500 dark:text-ink-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.65rem] font-medium uppercase tracking-label text-ink-500 dark:text-ink-400">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+14165793253"
                  className="inline-flex items-center gap-2 text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                >
                  <Icon name="phone" className="h-4 w-4 text-clay-600 dark:text-clay-400" />
                  (416) 579-3253
                </a>
              </li>
              <li>
                <a
                  href="mailto:maximsdev@gmail.com"
                  className="inline-flex items-center gap-2 text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                >
                  <Icon name="mail" className="h-4 w-4 text-clay-600 dark:text-clay-400" />
                  maximsdev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-500 dark:border-ink-800 dark:text-ink-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} builtbymax</p>
          <p>Hand-coded with React &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
