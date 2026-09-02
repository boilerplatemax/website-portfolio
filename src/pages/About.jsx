import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon.jsx';
import { Media } from '../components/Media.jsx';

const VALUES = [
  {
    icon: 'check',
    title: 'Hand-built, not assembled',
    description:
      'Every project is custom — no page builders, no bloat. Just clean code tuned to your audience.',
  },
  {
    icon: 'shield',
    title: 'Honest & accessible',
    description:
      'Plain language, fair pricing, and sites that work for everyone — assistive tech included.',
  },
  {
    icon: 'gauge',
    title: 'Built for the long run',
    description:
      'Performance, SEO and maintainability baked in from day one, so the site keeps paying for itself.',
  },
];

export default function About() {
  return (
    <article className="pt-32 pb-10 sm:pt-40">
      <section className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">About</span>
            <h1 className="mt-6 heading-xl">
              One person, <span className="gradient-text">a big toolbox</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              I&apos;m Max — an independent web developer building modern sites for
              organizations, charities, unions and small businesses. I&apos;ve shipped
              100+ projects across WordPress and React, from single-page campaigns
              to full e-commerce stores and secure member portals.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
              A great website is part craft and part conversation, so I keep things
              personal: you talk to the person actually building your site, every
              step of the way.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Let&apos;s talk <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/#work" className="btn-ghost">
                See the work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900">
              <Media
                src="/media/hero/ux-designer-illustration.png"
                alt="Illustration representing Max at work"
                label="hero/ux-designer-illustration.png"
                aspect="aspect-[4/3]"
                rounded=""
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What I value</span>
            <h2 className="mt-5 heading-lg">
              The way I <span className="gradient-text">work</span>.
            </h2>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 dark:border-ink-800 dark:bg-ink-800 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.li
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ink-50 p-8 dark:bg-ink-900"
              >
                <div className="flex items-center justify-between">
                  <span className="text-clay-600 dark:text-clay-400">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-[0.7rem] text-ink-400 dark:text-ink-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-medium text-ink-900 dark:text-ink-50">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {v.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
