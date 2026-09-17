import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from './Icon.jsx';
import { Media } from './Media.jsx';

export function Hero() {
  return (
    <section
      id="main"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 grid-bg"
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Web design &amp; development</span>
          <h1 className="mt-6 heading-xl text-ink-900">
            Custom websites that{' '}
            <span className="gradient-text">pull their weight</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            I&apos;m Max. I design and code fast, accessible sites for
            organizations, unions, charities and small businesses. No page
            builders, no bloat, just clean work tuned to your audience.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/#work" className="btn-primary">
              See the work
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Start a conversation
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-ink-200 bg-ink-50">
            <Media
              src="/media/hero/ux-designer-illustration.png"
              alt="Illustration of a designer building a website"
              label="hero/ux-designer-illustration.png"
              aspect="aspect-[4/3]"
              rounded=""
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
