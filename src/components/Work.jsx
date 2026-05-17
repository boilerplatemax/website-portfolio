import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FILTERS, PORTFOLIO } from '../data/portfolio.js';
import { Icon } from './Icon.jsx';
import { Media } from './Media.jsx';

const INITIAL_COUNT = 6;

export function Work() {
  const [filter, setFilter] = useState('All');
  const [count, setCount] = useState(INITIAL_COUNT);

  const filtered = useMemo(() => {
    if (filter === 'All') return PORTFOLIO;
    return PORTFOLIO.filter((p) => p.tags.includes(filter));
  }, [filter]);

  const visible = filtered.slice(0, count);
  const featured = PORTFOLIO.filter((p) => p.featured);

  return (
    <section id="work" className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-4 heading-lg">
              Sites we&apos;ve <span className="gradient-text">shipped</span>.
            </h2>
            <p className="mt-3 text-ink-600 dark:text-ink-300">
              Eleven recent builds across unions, charities, contractors and brands — each one custom, fast and built to last.
            </p>
          </div>
          <a
            href="https://sitecraftersdev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-ghost"
          >
            All projects <Icon name="external" className="h-4 w-4" />
          </a>
        </div>

        {/* Featured trio */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((item, i) => (
            <motion.a
              key={item.slug}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group card overflow-hidden ${i === 0 ? 'lg:row-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative overflow-hidden">
                <Media
                  src={item.image}
                  alt={item.title}
                  label={item.image.replace('/media/', '')}
                  aspect={i === 0 ? 'aspect-[4/5]' : 'aspect-[16/10]'}
                  className="rounded-none transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900 opacity-0 transition group-hover:opacity-100">
                  Visit <Icon name="external" className="h-3 w-3" />
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-16 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setCount(INITIAL_COUNT);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'border-brand-500 bg-brand-500 text-white shadow-glow'
                    : 'border-ink-200 bg-white/70 text-ink-700 hover:border-ink-300 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Gallery */}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.li
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="card group overflow-hidden"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden">
                    <Media
                      src={item.image}
                      alt={item.title}
                      label={item.image.replace('/media/', '')}
                      aspect="aspect-[16/10]"
                      className="rounded-none transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-600 dark:bg-ink-800 dark:text-ink-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
                      {item.title}
                      <Icon name="external" className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-ink-600 dark:text-ink-300">
                      {item.description}
                    </p>
                  </div>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {count < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setCount((c) => c + 3)}
              className="btn-ghost"
            >
              Load more
              <Icon name="arrow" className="h-4 w-4 rotate-90" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
