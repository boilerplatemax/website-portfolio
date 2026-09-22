import { useState } from 'react';

/**
 * Small, dependency-free chart primitives for case-study dashboards.
 * Built from plain HTML + Tailwind so they reuse the site's tokens.
 *
 * Accessibility: every chart's visual layer is aria-hidden and paired with a
 * visually-hidden <table> carrying the same numbers, so nothing is gated
 * behind hover or colour.
 */

// Series colours, in fixed order. Validated for colour-blind separation
// against the ink-50 card surface (coral → violet → teal).
export const SERIES = {
  primary: { bar: 'bg-clay-500', key: 'bg-clay-500' },
  secondary: { bar: 'bg-accent-500', key: 'bg-accent-500' },
  tertiary: { bar: 'bg-pop-600', key: 'bg-pop-600' },
  muted: { bar: 'bg-ink-400', key: 'bg-ink-400' },
};

export function formatNumber(n) {
  return new Intl.NumberFormat('en-CA').format(n);
}

/* ------------------------------------------------------------------ */
/* Chrome                                                              */
/* ------------------------------------------------------------------ */

export function ChartCard({ title, subtitle, children, className = '' }) {
  return (
    <div className={`rounded-xl border border-ink-200 bg-ink-50 p-4 sm:p-5 ${className}`}>
      <p className="text-sm font-semibold text-ink-900">{title}</p>
      {subtitle && <p className="mt-0.5 text-xs text-ink-600">{subtitle}</p>}
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function Legend({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-600" aria-hidden="true">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-sm ${SERIES[item.series].key}`} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export function DataTable({ caption, columns, rows }) {
  return (
    // Wrapped: tables ignore sr-only's 1px box and can cause horizontal scroll.
    <div className="sr-only">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={i}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stat tile                                                           */
/* ------------------------------------------------------------------ */

export function StatTile({ label, value, note, delta }) {
  return (
    <div className="rounded-xl border border-ink-200 bg-ink-50 p-4">
      <p className="text-xs text-ink-600">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-ink-900">{value}</p>
      {delta && (
        <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-ink-800">
          <span
            aria-hidden="true"
            className={`inline-block ${delta.good ? 'text-pop-600' : 'text-clay-600'}`}
          >
            {delta.direction === 'down' ? '▼' : '▲'}
          </span>
          {delta.label}
        </p>
      )}
      {note && <p className="mt-1 text-xs text-ink-600">{note}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Column chart (single or grouped series)                             */
/* ------------------------------------------------------------------ */

/**
 * @param data    [{ label, values: [n, n?] }]
 * @param series  [{ label, series: 'primary' | 'secondary' | ... }]
 * @param ticks   y-axis ticks, ascending, last one is the max
 */
export function ColumnChart({ data, series, ticks, caption, height = 'h-40', valueSuffix = '' }) {
  const [hover, setHover] = useState(null);
  const max = ticks[ticks.length - 1];

  return (
    <figure>
      {series.length > 1 && (
        <div className="mb-3">
          <Legend items={series} />
        </div>
      )}
      <div className="relative" aria-hidden="true">
        {/* Gridlines + y ticks */}
        <div className={`relative ${height} ml-9`}>
          {ticks.map((t) => (
            <div
              key={t}
              className="absolute inset-x-0 border-t border-ink-200"
              style={{ bottom: `${(t / max) * 100}%` }}
            >
              <span className="absolute -left-9 -translate-y-1/2 text-[0.65rem] tabular-nums text-ink-500">
                {t >= 1000 ? `${t / 1000}k` : t}
              </span>
            </div>
          ))}

          {/* Columns */}
          <div className="absolute inset-0 flex items-end justify-around gap-1">
            {data.map((d, di) => (
              <div
                key={d.label}
                className="relative flex h-full flex-1 items-end justify-center gap-0.5"
                onPointerEnter={() => setHover(di)}
                onPointerLeave={() => setHover(null)}
              >
                {d.values.map((v, si) => (
                  <div
                    key={si}
                    className={`w-full max-w-[1.5rem] rounded-t transition-opacity ${SERIES[series[si].series].bar} ${
                      hover !== null && hover !== di ? 'opacity-50' : ''
                    }`}
                    style={{ height: `${(v / max) * 100}%` }}
                  />
                ))}

                {hover === di && (
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-xs shadow-soft">
                    <p className="text-ink-600">{d.label}</p>
                    {d.values.map((v, si) => (
                      <p key={si} className="mt-0.5 flex items-center gap-2">
                        <span className={`h-0.5 w-3 rounded ${SERIES[series[si].series].key}`} />
                        <span className="font-semibold text-ink-900">
                          {formatNumber(v)}
                          {valueSuffix}
                        </span>
                        <span className="text-ink-600">{series[si].label}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* X labels */}
        <div className="ml-9 mt-2 flex justify-around gap-1">
          {data.map((d) => (
            <span key={d.label} className="flex-1 text-center text-[0.65rem] text-ink-600">
              {d.label}
            </span>
          ))}
        </div>
      </div>

      <DataTable
        caption={caption}
        columns={['', ...series.map((s) => s.label)]}
        rows={data.map((d) => [d.label, ...d.values.map((v) => `${formatNumber(v)}${valueSuffix}`)])}
      />
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Meter (0–100%)                                                      */
/* ------------------------------------------------------------------ */

export function Meter({ label, value, detail }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-xs">
        <span className="text-ink-600">{label}</span>
        <span className="font-semibold text-ink-900">{value}%</span>
      </div>
      <div
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        className="mt-1.5 h-2 overflow-hidden rounded-full bg-clay-500/15"
      >
        <div className="h-full rounded-full bg-clay-500" style={{ width: `${value}%` }} />
      </div>
      {detail && <p className="mt-1 text-[0.7rem] text-ink-500">{detail}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Split bar (parts of a whole, 2–3 segments)                          */
/* ------------------------------------------------------------------ */

export function SplitBar({ caption, parts }) {
  return (
    <figure>
      <div className="flex h-7 gap-[2px]" aria-hidden="true">
        {parts.map((p, i) => (
          <div
            key={p.label}
            className={`flex items-center px-2 text-[0.7rem] font-semibold ${SERIES[p.series].bar} ${
              p.series === 'muted' ? 'text-ink-900' : 'text-white'
            } ${i === 0 ? 'rounded-l-md' : ''} ${i === parts.length - 1 ? 'rounded-r-md' : ''}`}
            style={{ width: `${p.value}%` }}
          >
            {p.value >= 15 && `${p.value}%`}
          </div>
        ))}
      </div>
      <div className="mt-2">
        <Legend items={parts.map((p) => ({ label: `${p.label} ${p.value}%`, series: p.series }))} />
      </div>
      <DataTable
        caption={caption}
        columns={['Segment', 'Share']}
        rows={parts.map((p) => [p.label, `${p.value}%`])}
      />
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Before / after comparison bars                                      */
/* ------------------------------------------------------------------ */

/**
 * Horizontal before/after bars on one shared scale.
 * rows: [{ label, value, display, min?, highlight? }]
 * `min` draws a lighter band from min→value to show a range (e.g. "2 to 5 hrs").
 */
export function CompareBars({ caption, rows, max }) {
  return (
    <figure>
      <ul className="space-y-3" aria-hidden="true">
        {rows.map((r) => (
          <li key={r.label}>
            <div className="flex items-baseline justify-between gap-3 text-xs">
              <span className={r.highlight ? 'font-medium text-ink-900' : 'text-ink-600'}>
                {r.label}
              </span>
              <span className="font-semibold text-ink-900">{r.display}</span>
            </div>
            <div className="mt-1.5 flex h-2.5 overflow-hidden rounded-full bg-ink-200/60">
              {r.min !== undefined && (
                <div
                  className={r.highlight ? 'bg-clay-500' : 'bg-ink-400'}
                  style={{ width: `${(r.min / max) * 100}%` }}
                />
              )}
              <div
                className={`rounded-r-full ${
                  r.min !== undefined
                    ? r.highlight
                      ? 'bg-clay-500/40'
                      : 'bg-ink-300'
                    : r.highlight
                      ? 'bg-clay-500'
                      : 'bg-ink-400'
                }`}
                style={{
                  width: `${(Math.max(r.value - (r.min ?? 0), 0) / max) * 100}%`,
                  minWidth: r.value > 0 ? '0.375rem' : 0,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <DataTable caption={caption} columns={['', 'Value']} rows={rows.map((r) => [r.label, r.display])} />
    </figure>
  );
}
