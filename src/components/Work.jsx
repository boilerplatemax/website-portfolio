import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FILTERS, PUBLISHED } from '../data/portfolio.js';
import { Icon } from './Icon.jsx';
import { Media } from './Media.jsx';
import { ProjectLink, projectLinkType } from './ProjectLink.jsx';

const INITIAL_COUNT = 6;

// Only offer categories that have at least one published project.
const AVAILABLE_FILTERS = FILTERS.filter(
  (f) => f === 'All' || PUBLISHED.some((p) => p.categories.includes(f)),
);

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-100';

// Lift-on-hover only for cards that actually go somewhere.
function cardClasses(item) {
  const linked = projectLinkType(item) !== 'none';
  return `card group flex h-full flex-col overflow-hidden ${
    linked ? `hover:-translate-y-1 hover:shadow-card hover:border-ink-300 ${FOCUS_RING}` : ''
  }`;
}

export function Work() {
  const [filter, setFilter] = useState('All');
  const [count, setCount] = useState(INITIAL_COUNT);

  const filtered = useMemo(() => {
    if (filter === 'All') return PUBLISHED;
    return PUBLISHED.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const visible = filtered.slice(0, count);
  const featured = PUBLISHED.filter((p) => p.featured);
  const hero = featured.find((p) => p.collection) ?? featured[0];
  const supporting = featured.filter((p) => p.slug !== hero?.slug);

  return (
    <section id="work" className="section border-t border-ink-200">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Selected work</span>
          <h2 className="mt-5 heading-lg">
            Recent builds, <span className="gradient-text">shipped</span> and live.
          </h2>
          <p className="mt-4 text-ink-600">
            A cross-section of work across unions, charities, contractors and
            brands. Each one custom, fast and built to last.
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
                <ProjectLink item={item} className={cardClasses(item)}>
                  <div className="relative overflow-hidden border-b border-ink-200">
                    <Media
                      src={item.image}
                      alt={item.title}
                      label={item.image.replace('/media/', '')}
                      aspect="aspect-[16/10]"
                      rounded=""
                      className="transition duration-700 ease-soft group-hover:scale-[1.04]"
                    />
                    {projectLinkType(item) === 'external' && (
                      <span aria-hidden="true" className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink-900/90 px-3 py-1 text-xs font-medium text-ink-50 opacity-0 transition group-hover:opacity-100">
                        Visit <Icon name="external" className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-500">
                      {item.tags.slice(0, 3).map((tag, ti) => (
                        <span key={tag} className="flex items-center gap-2">
                          {ti > 0 && <span className="text-ink-300">/</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-medium text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                    <CardAction item={item} />
                  </div>
                </ProjectLink>
              </motion.div>
            ))}
          </div>
        )}

        {/* Filters */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-20 flex flex-wrap items-center gap-2"
        >
          {AVAILABLE_FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter(f);
                  setCount(INITIAL_COUNT);
                }}
                className={`rounded-full border px-4 py-2 text-sm transition ${FOCUS_RING} ${
                  active
                    ? 'border-ink-900 bg-ink-900 text-ink-50'
                    : 'border-ink-200 bg-transparent text-ink-600 hover:border-ink-400 hover:text-ink-900'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {filter === 'All'
            ? `Showing all ${filtered.length} projects`
            : `Showing ${filtered.length} ${filter} project${filtered.length === 1 ? '' : 's'}`}
        </p>

        {filtered.length === 0 && (
          <p className="mt-8 rounded-2xl border border-dashed border-ink-300 p-8 text-center text-ink-600">
            Nothing in {filter} just yet. New work is on the way.
          </p>
        )}

        {/* Gallery: auto-rows-fr + h-full keeps every card in a row the same height */}
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
                <ProjectLink item={item} className={cardClasses(item)}>
                  <div className="relative overflow-hidden border-b border-ink-200">
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
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-500">
                      {item.tags.map((tag, ti) => (
                        <span key={tag} className="flex items-center gap-2">
                          {ti > 0 && <span className="text-ink-300">/</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 flex items-center gap-2 font-display text-lg font-medium text-ink-900">
                      {item.title}
                      {projectLinkType(item) === 'external' && (
                        <Icon name="external" className="h-4 w-4 text-clay-600 opacity-0 transition group-hover:opacity-100" />
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                    {projectLinkType(item) === 'case' && <CardAction item={item} />}
                  </div>
                </ProjectLink>
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

// Footer label on a card: "Read case study" / "View live site" / nothing.
function CardAction({ item }) {
  const type = projectLinkType(item);
  if (type === 'none') return null;
  const isCase = type === 'case';
  return (
    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-800">
      {isCase ? 'Read case study' : 'View live site'}
      <Icon
        name={isCase ? 'arrow' : 'external'}
        className="h-3.5 w-3.5 text-clay-600 transition group-hover:translate-x-0.5"
      />
    </span>
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
      className={`overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 ${className}`}
    >
      {/* Two-column grid with no outer padding; image bleeds to its cell edge */}
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Lead image fills its cell edge-to-edge */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block self-stretch overflow-hidden border-b border-ink-200 bg-ink-100 lg:border-b-0 lg:border-r"
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

        {/* Content column owns all of the padding */}
        <div className="flex flex-col p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.14em]">
            <span className="inline-flex items-center gap-2 text-clay-600">
              <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
              Featured
            </span>
            {item.tags.map((tag) => (
              <span key={tag} className="text-ink-500">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-5 font-display text-2xl font-medium text-ink-900 sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-3 text-ink-600">{item.description}</p>

          {collection && (
            <div className="mt-8 border-t border-ink-200 pt-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-label text-ink-500">
                A {sites.length}-site brand family
              </p>
              <p className="mt-2 text-sm text-ink-600">
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
                      className="group flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-ink-200 bg-ink-100/60 p-4 transition hover:-translate-y-0.5 hover:border-clay-400"
                    >
                      <div className="flex items-center justify-between">
                        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-ink-300 bg-ink-50 font-mono text-xs font-medium tracking-wide text-ink-800">
                          {site.initials}
                        </span>
                        <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink-500">
                          {site.role}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="font-display text-sm font-medium leading-snug text-ink-900">
                          {site.title}
                        </p>
                        <p className="mt-auto flex items-center gap-1 pt-2 text-xs text-ink-500">
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
