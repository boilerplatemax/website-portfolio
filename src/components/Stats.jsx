import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data/portfolio.js';
import { Icon } from './Icon.jsx';

function Counter({ to, durationMs = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, durationMs]);

  return <span ref={ref}>{n}</span>;
}

export function Stats() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-8"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <p className="mt-6 font-display text-5xl font-bold text-ink-900 dark:text-ink-50">
                <Counter to={s.value} />
                <span className="gradient-text">{s.suffix}</span>
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
