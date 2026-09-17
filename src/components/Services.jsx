import { motion } from 'framer-motion';
import { SERVICES } from '../data/portfolio.js';
import { Icon } from './Icon.jsx';

export function Services() {
  return (
    <section id="services" className="section border-t border-ink-200">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">What I do</span>
          <h2 className="mt-5 heading-lg">
            Design, build, and <span className="gradient-text">everything after</span>.
          </h2>
          <p className="mt-4 text-ink-600">
            One person across the whole stack, from the first sketch to launch
            and the upkeep that comes after.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-ink-50 p-8 transition-colors hover:bg-ink-100"
            >
              <div className="flex items-center justify-between">
                <span className="text-clay-600">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="font-mono text-[0.7rem] text-ink-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-medium text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {s.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
