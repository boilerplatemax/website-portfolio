const TAGS = [
  'Web Design',
  'Brand Identity',
  'Logo Design',
  'User Experience',
  'Graphic Design',
  'Custom Illustration',
  'Visual Storytelling',
  'Responsive Layouts',
  'Animation & Motion',
  'Photography',
  'Colour & Typography',
  'Print & Digital',
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-200 bg-white/60 py-6 dark:border-ink-800 dark:bg-ink-900/60">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: 'marquee 70s linear infinite' }}
      >
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
