import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProject, hasCaseStudy, PUBLISHED } from '../data/portfolio.js';
import { Icon } from '../components/Icon.jsx';
import { Media } from '../components/Media.jsx';
import NotFound from './NotFound.jsx';

const EASE = [0.22, 1, 0.36, 1];

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

function Figure({ image, aspect = 'aspect-[16/10]', className = '' }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-50">
        <Media
          src={image.src}
          alt={image.alt}
          label={image.src?.replace('/media/', '')}
          aspect={aspect}
          rounded=""
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-600">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const study = project?.caseStudy;

  useDocumentTitle(study ? `${project.title} | builtbymax` : null);

  if (!project || !hasCaseStudy(project)) return <NotFound />;

  const hero = study.hero ?? { src: project.image, alt: project.title };
  const meta = [
    { label: 'Client', value: study.client },
    { label: 'Year', value: study.year },
    { label: 'Role', value: study.role },
    { label: 'Discipline', value: project.categories.join(', ') },
  ].filter((m) => m.value);

  const studies = PUBLISHED.filter(hasCaseStudy);
  const index = studies.findIndex((p) => p.slug === project.slug);
  const next = studies.length > 1 ? studies[(index + 1) % studies.length] : null;

  return (
    <article id="main" className="pt-32 pb-10 sm:pt-40">
      {/* Intro */}
      <header className="container-x">
        <nav aria-label="Breadcrumb">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 rounded-full font-mono text-[0.7rem] uppercase tracking-label text-ink-600 transition hover:text-clay-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-100"
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
          <h1 className="mt-6 heading-xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            {study.summary ?? project.description}
          </p>
        </motion.div>

        {/* Project facts */}
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="bg-ink-50 p-5 sm:p-6">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-600">
                {m.label}
              </dt>
              <dd className="mt-2 text-sm text-ink-900">{m.value}</dd>
            </div>
          ))}
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
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Visit live site
                <Icon name="external" className="h-4 w-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </header>

      {/* Hero image */}
      <div className="container-x mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <Figure image={hero} aspect="aspect-[16/10] lg:aspect-[16/8]" />
        </motion.div>
      </div>

      {/* Narrative sections */}
      {study.sections?.length > 0 && (
        <div className="container-x mt-20 space-y-16 sm:mt-24 sm:space-y-20">
          {study.sections.map((section, i) => (
            <Reveal key={section.heading}>
              <section
                aria-labelledby={`section-${i}`}
                className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12"
              >
                <div>
                  <span className="font-mono text-[0.7rem] text-ink-500" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2
                    id={`section-${i}`}
                    className="mt-2 font-display text-2xl font-medium text-ink-900 sm:text-3xl"
                  >
                    {section.heading}
                  </h2>
                </div>
                <div>
                  {[].concat(section.body ?? []).map((para, pi) => (
                    <p
                      key={pi}
                      className={`leading-relaxed text-ink-600 ${pi > 0 ? 'mt-4' : ''}`}
                    >
                      {para}
                    </p>
                  ))}
                  {section.image && <Figure image={section.image} className="mt-8" />}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      )}

      {/* Outcomes */}
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

      {/* Gallery */}
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

      {/* Next / CTA */}
      <nav aria-label="More work" className="container-x border-t border-ink-200 pt-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-100"
            >
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
