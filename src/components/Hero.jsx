import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter.js';
import { Icon } from './Icon.jsx';
import { Media } from './Media.jsx';

const ROTATOR = ['Contractors', 'Charities', 'Brands', 'Restaurants', 'Just About Anyone'];

export function Hero() {
  const typed = useTypewriter(ROTATOR, {
    typeSpeed: 130,
    deleteSpeed: 70,
    pauseMs: 2400,
  });

  return (
    <section
      id="main"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 grid-bg"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Available for new projects
          </span>
          <h1 className="mt-5 heading-xl text-ink-900 dark:text-ink-50">
            Building Professional Websites for{' '}
            <span className="block gradient-text">
              {typed}
              <span className="ml-1 inline-block w-[2px] -translate-y-1 bg-current align-middle animate-blink" style={{ height: '0.9em' }} />
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-600 dark:text-ink-300">
            Crafting web experiences that stand out — fast, accessible and built around your audience. From custom WordPress builds to full React platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#work" className="btn-primary">
              See the work
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Reach out
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-200 pt-8 dark:border-ink-800">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">Clients</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-ink-50">100+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">Traffic lift</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-ink-50">+50%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">Build time</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-ink-50">~14d</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-500/20 via-accent-500/10 to-transparent blur-2xl" />
          <div className="relative animate-float">
            <Media
              src="/media/hero/ux-designer-illustration.png"
              alt="A designer crafting a website"
              label="hero/ux-designer-illustration.png"
              aspect="aspect-[4/3]"
              className="shadow-card"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden sm:block"
          >
            <div className="card flex items-center gap-3 p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-600">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">Live now</p>
                <p className="text-sm font-semibold text-ink-900 dark:text-ink-50">11 sites in production</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
