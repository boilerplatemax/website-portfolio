import { motion } from 'framer-motion';
import { SERVICES } from '../data/portfolio.js';
import { Icon } from './Icon.jsx';

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 heading-lg">
            End-to-end <span className="gradient-text">web craftsmanship</span>.
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-300">
            One team, the full stack — design, build, launch and the ongoing care that keeps your site fast and friendly.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card group relative overflow-hidden p-7 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {s.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
