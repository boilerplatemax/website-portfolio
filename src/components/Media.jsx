import { useState } from 'react';

/**
 * Image with built-in fallback placeholder so the layout looks polished
 * before the real media files are dropped into /public/media.
 */
export function Media({
  src,
  alt,
  className = '',
  label,
  aspect = 'aspect-[16/10]',
  rounded = 'rounded-2xl',
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`media-placeholder relative flex items-center justify-center overflow-hidden ${rounded} ${aspect} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center text-ink-600 dark:text-ink-300">
          <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 shadow-sm dark:bg-ink-900/70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="9" cy="11" r="2" />
              <path d="m5 19 5-5 4 4 3-3 4 4" />
            </svg>
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em]">
            {label || 'Image placeholder'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${aspect} w-full ${rounded} object-cover ${className}`}
    />
  );
}
