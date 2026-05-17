const TAGS = [
  'WordPress',
  'React',
  'Next.js',
  'WooCommerce',
  'Tailwind CSS',
  'Framer Motion',
  'Headless CMS',
  'SEO',
  'A11y',
  'Performance',
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-200 bg-white/60 py-6 dark:border-ink-800 dark:bg-ink-900/60">
      <div className="flex animate-[gradient-x_30s_linear_infinite] gap-12 whitespace-nowrap [animation-name:marquee] motion-safe:[animation:marquee_28s_linear_infinite]">
        {[...TAGS, ...TAGS].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-display text-xl font-semibold text-ink-400 dark:text-ink-500"
          >
            {t} <span className="px-4 text-brand-500">/</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
