import { motion } from 'framer-motion';
import { PROCESS } from '../data/portfolio.js';

export function Process() {
  return (
    <section id="process" className="section border-t border-ink-200 dark:border-ink-800">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 heading-lg">
            A simple, <span className="gradient-text">predictable</span> process.
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-300">
            Four steps from first call to launched site — no surprises, no jargon.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-ink-300 pt-5 dark:border-ink-700"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl font-medium text-clay-600 dark:text-clay-400">
                  {p.step}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-label text-ink-400 dark:text-ink-500">
                  Step
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-ink-900 dark:text-ink-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {p.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
