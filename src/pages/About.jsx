import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon.jsx';
import { Media } from '../components/Media.jsx';

const VALUES = [
  {
    icon: 'check',
    title: 'Hand-built, not assembled',
    description:
      'Every project is custom. No page builders, no bloat — just clean code tuned for your audience.',
  },
  {
    icon: 'shield',
    title: 'Honest & accessible',
    description:
      'Plain language, fair pricing, and sites that work for everyone — including assistive tech.',
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
    <article className="pt-32 pb-10">
      <section className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">About</span>
            <h1 className="mt-4 heading-xl">
              A small studio with <span className="gradient-text">a big toolbox</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-600 dark:text-ink-300">
              SiteCrafters Development is an independent web studio building modern sites for organizations, charities, unions and small businesses. We&apos;ve shipped 100+ projects across WordPress and React — from single-page campaigns to full e-commerce stores and secure member portals.
            </p>
            <p className="mt-4 text-ink-600 dark:text-ink-300">
              We believe a great website is part craft and part conversation. So we keep things personal: you talk to the person building your site, every step of the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Let&apos;s talk <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/#work" className="btn-ghost">
                See the work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-500/20 via-accent-500/10 to-transparent blur-2xl" />
            <Media
              src="/media/about/portrait.jpg"
              alt="Portrait of the SiteCrafters team"
              label="about/portrait.jpg"
              aspect="aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What we value</span>
            <h2 className="mt-4 heading-lg">
              The way we <span className="gradient-text">work</span>.
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.li
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card p-7"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
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
