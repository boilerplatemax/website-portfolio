import { motion } from 'framer-motion';
import { PROCESS } from '../data/portfolio.js';

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 heading-lg">
            A simple, <span className="gradient-text">predictable</span> process.
          </h2>
          <p className="mt-3 text-ink-600 dark:text-ink-300">
            Four steps from first call to launched site — no surprises, no jargon.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block dark:via-ink-800" />
          {PROCESS.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card relative p-7"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-display text-sm font-bold text-white shadow-glow">
                {p.step}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
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
