import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProject, hasCaseStudy, PUBLISHED } from '../data/portfolio.js';
import { Icon } from '../components/Icon.jsx';
import { Media } from '../components/Media.jsx';
import { CompareBars } from '../components/charts.jsx';
import { UnionTabAnalytics } from '../components/case-studies/UnionTabAnalytics.jsx';
import { UnionTabTraffic } from '../components/case-studies/UnionTabTraffic.jsx';
import NotFound from './NotFound.jsx';

const EASE = [0.22, 1, 0.36, 1];

// Coded visuals a case study can drop in with { type: 'embed', component: '<key>' }.
const EMBEDS = {
  'uniontab-analytics': UnionTabAnalytics,
  'uniontab-traffic': UnionTabTraffic,
};

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-100';

function useDocumentTitle(title) {
  useEffect(() => {
    if (!title) return undefined;
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Figures                                                             */
/* ------------------------------------------------------------------ */

// `label` names what's shown; `caption` explains why (sentence-length is fine).
function Caption({ label, caption }) {
  if (!label && !caption) return null;
  return (
    <figcaption className="mt-3 max-w-2xl">
      {label && (
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-600">
          {label}
        </span>
      )}
      {caption && (
        <span className={`block text-sm leading-relaxed text-ink-600 ${label ? 'mt-1' : ''}`}>
          {caption}
        </span>
      )}
    </figcaption>
  );
}

function Figure({ image, aspect, className = '' }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-50">
        <Media
          src={image.src}
          alt={image.alt}
          label={image.placeholder ?? image.src?.replace('/media/', '')}
          aspect={aspect ?? image.aspect ?? 'aspect-[16/10]'}
          rounded=""
        />
      </div>
      <Caption label={image.label} caption={image.caption} />
    </figure>
  );
}

function Embed({ block }) {
  const Component = EMBEDS[block.component];
  if (!Component) return null;
  return (
    <figure>
      <Component />
      <Caption label={block.label} caption={block.caption} />
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

function StatBlocks({ items }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((s) => (
        <li key={s.label} className="flex flex-col rounded-2xl border border-ink-200 bg-ink-50 p-5 sm:p-6">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-600">
            {s.label}
          </p>
          <p className="mt-3 font-display text-4xl font-medium leading-none text-ink-900 sm:text-5xl">
            {s.value}
          </p>
          {s.headline && (
            <p className="mt-2 text-sm font-medium text-ink-800">{s.headline}</p>
          )}
          {s.compare && (
            <div className="mt-5">
              <CompareBars caption={s.compare.caption} rows={s.compare.rows} max={s.compare.max} />
            </div>
          )}
          {s.text && <p className="mt-5 text-sm leading-relaxed text-ink-600">{s.text}</p>}
        </li>
      ))}
    </ul>
  );
}

function ListBlock({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const { lead, text } = typeof item === 'string' ? { text: item } : item;
        return (
          <li key={i} className="flex gap-3 leading-relaxed text-ink-600">
            <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 flex-none rounded-full bg-clay-500" />
            <span>
              {lead && <strong className="font-medium text-ink-900">{lead} </strong>}
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

// Text blocks sit in a readable measure; visual blocks can go full width.
const WIDE = new Set(['embed', 'stats', 'images']);

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="leading-relaxed text-ink-600">{block.text}</p>;
    case 'h3':
      return (
        <h3 className="pt-4 font-display text-xl font-medium text-ink-900 sm:text-2xl">
          {block.text}
        </h3>
      );
    case 'list':
      return <ListBlock items={block.items} />;
    case 'quote':
      return (
        <p className="border-l-2 border-clay-500 pl-5 font-display text-xl leading-snug text-ink-900 sm:text-2xl">
          {block.text}
        </p>
      );
    case 'image':
      return <Figure image={block} />;
    case 'images':
      return (
        <div className="grid gap-6 sm:grid-cols-2">
          {block.items.map((image) => (
            <Figure key={image.src} image={image} />
          ))}
        </div>
      );
    case 'embed':
      return <Embed block={block} />;
    case 'stats':
      return <StatBlocks items={block.items} />;
    case 'note':
      return (
        <p className="rounded-xl border border-dashed border-ink-300 p-4 text-sm leading-relaxed text-ink-600">
          {block.text}
        </p>
      );
    default:
      return null;
  }
}

// Older case studies use { body: [...], image } — map them onto blocks.
function sectionBlocks(section) {
  if (section.blocks) return section.blocks;
  const blocks = [].concat(section.body ?? []).map((text) => ({ type: 'p', text }));
  if (section.image) blocks.push({ type: 'image', ...section.image });
  return blocks;
}

function sectionId(section, i) {
  return section.id ?? `section-${i + 1}`;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const study = hasCaseStudy(project) ? project.caseStudy : null;

  useDocumentTitle(study ? `${project.title} case study | builtbymax` : null);

  if (!study) return <NotFound />;

  const hero = study.hero ?? { src: project.image, alt: project.title };
  const sections = study.sections ?? [];
  const meta = [
    { label: 'Role', value: study.role },
    { label: 'Client', value: study.client },
    { label: 'Year', value: study.year },
    { label: 'Discipline', value: project.categories.join(', ') },
  ].filter((m) => m.value);

  const studies = PUBLISHED.filter(hasCaseStudy);
  const index = studies.findIndex((p) => p.slug === project.slug);
  const next = studies.length > 1 ? studies[(index + 1) % studies.length] : null;

  return (
    <article id="main" className="pt-32 pb-10 sm:pt-40">
      {/* ---------- Hero ---------- */}
      <header className="container-x">
        <nav aria-label="Breadcrumb">
          <Link
            to="/#work"
            className={`inline-flex items-center gap-2 rounded-full font-mono text-[0.7rem] uppercase tracking-label text-ink-600 transition hover:text-clay-700 ${FOCUS_RING}`}
          >
            <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" />
            All work
          </Link>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-8 max-w-3xl"
        >
          <span className="eyebrow">Case study</span>
          <h1 className="mt-6 heading-xl">
            {project.title}
            {study.tagline && (
              <span className="mt-3 block text-2xl leading-tight text-ink-700 sm:text-3xl lg:text-4xl">
                {study.tagline}
              </span>
            )}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            {study.summary ?? project.description}
          </p>
        </motion.div>

        {/* Headline metrics */}
        {study.metrics?.length > 0 && (
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <li key={m.label} className="bg-ink-50 p-5 sm:p-6">
                <p className="font-display text-4xl font-medium leading-none text-ink-900">
                  {m.value}
                </p>
                <p className="mt-3 text-sm leading-snug text-ink-600">{m.label}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Project facts */}
        <dl className="mt-6 grid gap-x-8 gap-y-5 border-t border-ink-200 pt-6 sm:grid-cols-2">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-600">
                {m.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-900">{m.value}</dd>
            </div>
          ))}
          {study.tools?.length > 0 && (
            <div className="sm:col-span-2">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-600">
                Tools
              </dt>
              <dd className="mt-2">
                <ul className="flex flex-wrap gap-2">
                  {study.tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs text-ink-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
        </dl>

        {(study.services?.length > 0 || project.url) && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            {study.services?.length > 0 && (
              <ul aria-label="Services" className="flex flex-wrap gap-2">
                {study.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-ink-200 px-3 py-1 text-xs text-ink-700"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Visit live site
                <Icon name="external" className="h-4 w-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </header>

      {/* ---------- Hero image ---------- */}
      <div className="container-x mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <Figure image={hero} aspect="aspect-[16/10] lg:aspect-[16/8]" />
        </motion.div>
      </div>

      {/* ---------- On this page ---------- */}
      {sections.length >= 3 && (
        <nav aria-label="On this page" className="container-x mt-12">
          <ol className="flex flex-wrap gap-2">
            {sections.map((section, i) => (
              <li key={sectionId(section, i)}>
                <a
                  href={`#${sectionId(section, i)}`}
                  className={`inline-flex items-center gap-2 rounded-full border border-ink-200 px-3.5 py-1.5 text-sm text-ink-700 transition hover:border-ink-400 hover:text-ink-900 ${FOCUS_RING}`}
                >
                  <span className="font-mono text-[0.65rem] text-ink-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.label ?? section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* ---------- Sections ---------- */}
      {sections.map((section, i) => {
        const id = sectionId(section, i);
        return (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className="container-x mt-20 scroll-mt-28 sm:mt-28"
          >
            <Reveal className="max-w-3xl">
              <span className="font-mono text-[0.7rem] uppercase tracking-label text-ink-600">
                <span aria-hidden="true" className="text-clay-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.label && <span aria-hidden="true"> · </span>}
                {section.label}
              </span>
              <h2 id={`${id}-heading`} className="mt-3 heading-lg">
                {section.heading}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {sectionBlocks(section).map((block, bi) => (
                <Reveal
                  key={bi}
                  className={WIDE.has(block.type) || block.wide ? '' : 'max-w-3xl'}
                >
                  <Block block={block} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      {/* ---------- Outcomes (simple value/label list) ---------- */}
      {study.outcomes?.length > 0 && (
        <section aria-labelledby="outcomes" className="section">
          <div className="container-x">
            <span className="eyebrow">Outcomes</span>
            <h2 id="outcomes" className="mt-5 heading-lg">
              What it <span className="gradient-text">changed</span>.
            </h2>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-3">
              {study.outcomes.map((o, i) => (
                <motion.li
                  key={`${o.label}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                  className="bg-ink-50 p-8"
                >
                  <p className="font-display text-4xl font-medium text-ink-900">{o.value}</p>
                  <p className="mt-2 text-sm text-ink-600">{o.label}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- Gallery ---------- */}
      {study.gallery?.length > 0 && (
        <section
          aria-labelledby="gallery"
          className={study.outcomes?.length > 0 ? 'pb-24 sm:pb-32' : 'section'}
        >
          <div className="container-x">
            <span className="eyebrow">Gallery</span>
            <h2 id="gallery" className="sr-only">
              Project gallery
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {study.gallery.map((image, i) => (
                <Reveal key={image.src} delay={i * 0.06}>
                  <Figure image={image} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Next / CTA ---------- */}
      <nav
        aria-label="More work"
        className={`container-x border-t border-ink-200 pt-12 ${
          study.outcomes?.length || study.gallery?.length ? '' : 'mt-24 sm:mt-32'
        }`}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {next ? (
            <Link to={`/work/${next.slug}`} className={`group rounded-2xl ${FOCUS_RING}`}>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-600">
                Next case study
              </span>
              <span className="mt-2 flex items-center gap-2 font-display text-2xl font-medium text-ink-900 transition group-hover:text-clay-700">
                {next.title}
                <Icon name="arrow" className="h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ) : (
            <Link to="/#work" className="btn-ghost self-start">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Back to all work
            </Link>
          )}
          <Link to="/contact" className="btn-primary self-start sm:self-auto">
            Start a project <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </article>
  );
}
