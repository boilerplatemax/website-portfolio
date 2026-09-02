import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from './Icon.jsx';
import { Media } from './Media.jsx';

export function CtaBanner() {
  return (
    <section className="section border-t border-ink-200 dark:border-ink-800">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-ink-900 bg-ink-900 text-ink-50 dark:border-ink-700"
        >
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-label text-clay-400">
                <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                Let&apos;s build
              </span>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] tracking-[-0.015em] sm:text-4xl">
                Let&apos;s make something worth keeping.
              </h2>
              <p className="mt-4 max-w-lg text-ink-300">
                From the first sketch to launch, I work with you the whole way —
                so the site that goes live is genuinely yours.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn inline-flex bg-ink-50 text-ink-900 hover:bg-white"
                >
                  Get in touch <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+14165793253"
                  className="btn inline-flex border border-ink-700 text-ink-100 hover:border-ink-500 hover:bg-ink-800"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  (416) 579-3253
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800">
                <Media
                  src="/media/hero/designer-juggling-tasks.png"
                  alt="Illustration of a designer at work"
                  label="hero/designer-juggling-tasks.png"
                  aspect="aspect-[4/3]"
                  rounded=""
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
