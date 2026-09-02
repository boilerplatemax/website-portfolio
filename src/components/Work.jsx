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
  const hero = featured.find((p) => p.collection) ?? featured[0];
  const supporting = featured.filter((p) => p.slug !== hero?.slug);

  return (
    <section id="work" className="section border-t border-ink-200 dark:border-ink-800">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Selected work</span>
          <h2 className="mt-5 heading-lg">
            Recent builds, <span className="gradient-text">shipped</span> and live.
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-300">
            A cross-section of work across unions, charities, contractors and
            brands — each one custom, fast and built to last.
          </p>
        </div>

        {/* Featured: brand-collection card spans full width */}
        {hero && <FeaturedCollectionCard item={hero} className="mt-12" />}

        {/* Two supporting featured cards */}
        {supporting.length > 0 && (
          <div className="mt-6 grid auto-rows-fr gap-6 sm:grid-cols-2">
            {supporting.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card hover:border-ink-300 dark:hover:border-ink-700"
                >
                  <div className="relative overflow-hidden border-b border-ink-200 dark:border-ink-800">
                    <Media
                      src={item.image}
                      alt={item.title}
                      label={item.image.replace('/media/', '')}
                      aspect="aspect-[16/10]"
                      rounded=""
                      className="transition duration-700 ease-soft group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink-900/90 px-3 py-1 text-xs font-medium text-ink-50 opacity-0 transition group-hover:opacity-100">
                      Visit <Icon name="external" className="h-3 w-3" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">
                      {item.tags.slice(0, 3).map((tag, ti) => (
                        <span key={tag} className="flex items-center gap-2">
                          {ti > 0 && <span className="text-ink-300 dark:text-ink-600">/</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-medium text-ink-900 dark:text-ink-50">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {item.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-800 dark:text-ink-200">
                      View live site
                      <Icon name="external" className="h-3.5 w-3.5 text-clay-600 transition group-hover:translate-x-0.5 dark:text-clay-400" />
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}

        {/* Filters */}
        <div className="mt-20 flex flex-wrap items-center gap-2">
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
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? 'border-ink-900 bg-ink-900 text-ink-50 dark:border-ink-50 dark:bg-ink-50 dark:text-ink-900'
                    : 'border-ink-200 bg-transparent text-ink-600 hover:border-ink-400 hover:text-ink-900 dark:border-ink-700 dark:text-ink-300 dark:hover:border-ink-600 dark:hover:text-ink-50'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Gallery — auto-rows-fr + h-full keeps every card in a row the same height */}
        <ul className="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.li
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card hover:border-ink-300 dark:hover:border-ink-700"
                >
                  <div className="relative overflow-hidden border-b border-ink-200 dark:border-ink-800">
                    <Media
                      src={item.image}
                      alt={item.title}
                      label={item.image.replace('/media/', '')}
                      aspect="aspect-[16/10]"
                      rounded=""
                      className="transition duration-700 ease-soft group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">
                      {item.tags.map((tag, ti) => (
                        <span key={tag} className="flex items-center gap-2">
                          {ti > 0 && <span className="text-ink-300 dark:text-ink-600">/</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 font-display text-lg font-medium text-ink-900 dark:text-ink-50">
                      {item.title}
                      <Icon name="external" className="h-4 w-4 text-clay-600 opacity-0 transition group-hover:opacity-100 dark:text-clay-400" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {item.description}
                    </p>
                  </div>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {count < filtered.length && (
          <div className="mt-12 flex justify-center">
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

function FeaturedCollectionCard({ item, className = '' }) {
  const collection = item.collection;
  const sites = collection?.sites ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900 ${className}`}
    >
      {/* Two-column grid with no outer padding; image bleeds to its cell edge */}
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Lead image — fills its cell edge-to-edge */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block self-stretch overflow-hidden border-b border-ink-200 bg-ink-100 dark:border-ink-800 dark:bg-ink-950 lg:border-b-0 lg:border-r"
        >
          <Media
            src={item.image}
            alt={item.title}
            label={item.image.replace('/media/', '')}
            aspect="aspect-[16/11] lg:aspect-auto"
            rounded=""
            className="h-full transition duration-700 ease-soft group-hover:scale-[1.03]"
          />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink-900/90 px-3 py-1 text-xs font-medium text-ink-50 opacity-0 transition group-hover:opacity-100">
            Visit live site <Icon name="external" className="h-3 w-3" />
          </span>
        </a>

        {/* Content column — owns all of the padding */}
        <div className="flex flex-col p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.14em]">
            <span className="inline-flex items-center gap-2 text-clay-600 dark:text-clay-400">
              <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
              Featured
            </span>
            {item.tags.map((tag) => (
              <span key={tag} className="text-ink-500 dark:text-ink-400">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-5 font-display text-2xl font-medium text-ink-900 sm:text-3xl dark:text-ink-50">
            {item.title}
          </h3>
          <p className="mt-3 text-ink-600 dark:text-ink-300">{item.description}</p>

          {collection && (
            <div className="mt-8 border-t border-ink-200 pt-6 dark:border-ink-800">
              <p className="font-mono text-[0.65rem] uppercase tracking-label text-ink-500 dark:text-ink-400">
                A {sites.length}-site brand family
              </p>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                {collection.label}
              </p>

              <ul className="mt-5 grid auto-rows-fr gap-3 sm:grid-cols-3">
                {sites.map((site, i) => (
                  <motion.li
                    key={site.url}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="h-full"
                  >
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-ink-200 bg-ink-100/60 p-4 transition hover:-translate-y-0.5 hover:border-clay-400 dark:border-ink-800 dark:bg-ink-950/40 dark:hover:border-clay-500"
                    >
                      <div className="flex items-center justify-between">
                        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-ink-300 bg-ink-50 font-mono text-xs font-medium tracking-wide text-ink-800 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100">
                          {site.initials}
                        </span>
                        <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400">
                          {site.role}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="font-display text-sm font-medium leading-snug text-ink-900 dark:text-ink-50">
                          {site.title}
                        </p>
                        <p className="mt-auto flex items-center gap-1 pt-2 text-xs text-ink-500 dark:text-ink-400">
                          <span className="truncate">{site.domain}</span>
                          <Icon name="external" className="h-3 w-3 flex-none opacity-0 transition group-hover:opacity-100" />
                        </p>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
