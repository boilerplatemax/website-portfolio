import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from './Icon.jsx';
import { Media } from './Media.jsx';

export function CtaBanner() {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-ink-200 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-700 p-8 text-white shadow-card dark:border-ink-800 sm:p-12 lg:p-16"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Let&apos;s build
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Let&apos;s create your perfect website together.
              </h2>
              <p className="mt-4 max-w-lg text-white/80">
                From concept to creation, we work with you every step of the way to ensure your vision becomes reality.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Contact us <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a href="tel:+14165793253" className="btn-ghost border-white/30 bg-white/5 text-white hover:bg-white/10 dark:border-white/30 dark:bg-white/5 dark:text-white">
                  <Icon name="phone" className="h-4 w-4" />
                  (416) 579-3253
                </a>
              </div>
            </div>

            <div className="relative">
              <Media
                src="/media/hero/designer-juggling-tasks.png"
                alt="A designer juggling tasks"
                label="hero/designer-juggling-tasks.png"
                aspect="aspect-[4/3]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
