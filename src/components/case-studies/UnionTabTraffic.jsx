import { ChartCard, ColumnChart, SplitBar, StatTile } from '../charts.jsx';

/*
 * UnionTab marketing-site traffic, from Vercel Analytics (busy season vs the
 * previous period). Current values and % changes are the real reported
 * figures. "Previous period" values are back-calculated from those changes
 * (e.g. 331 ÷ 1.54 ≈ 215), so they're rounded approximations.
 */
const KPIS = [
  {
    label: 'Visitors',
    value: '331',
    delta: { direction: 'up', good: true, label: '54% vs previous period' },
  },
  {
    label: 'Page views',
    value: '1,006',
    delta: { direction: 'up', good: true, label: '218% vs previous period' },
  },
  {
    label: 'Bounce rate',
    value: '34%',
    delta: { direction: 'down', good: true, label: '43% vs previous period' },
  },
];

const PERIODS = [
  { label: 'Visitors', values: [215, 331] },
  { label: 'Page views', values: [316, 1006] },
];

export function UnionTabTraffic() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-200 bg-ink-50 px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-semibold text-ink-900">Traffic & reach</p>
          <p className="text-xs text-ink-600">uniontab.com · busy season vs previous period</p>
        </div>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-600">
          Source: Vercel Analytics
        </span>
      </div>

      <div className="space-y-3 p-3 sm:space-y-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {KPIS.map((k) => (
            <StatTile key={k.label} {...k} />
          ))}
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.2fr_1fr]">
          <ChartCard
            title="Growth over the busy season"
            subtitle="Previous period values are approximate, derived from the % change"
          >
            <ColumnChart
              data={PERIODS}
              series={[
                { label: 'Previous period (approx.)', series: 'muted' },
                { label: 'Busy season', series: 'primary' },
              ]}
              ticks={[0, 250, 500, 750, 1000, 1250]}
              height="h-44"
              caption="Visitors and page views, previous period versus busy season"
            />
          </ChartCard>

          <div className="grid gap-3 sm:gap-4">
            <ChartCard title="Where visitors are" subtitle="Share of visitors by country">
              <SplitBar
                caption="Visitors by country"
                parts={[
                  { label: 'Canada', value: 82, series: 'primary' },
                  { label: 'Elsewhere', value: 18, series: 'muted' },
                ]}
              />
            </ChartCard>
            <ChartCard title="Devices" subtitle="Share of visitors by device">
              <SplitBar
                caption="Visitors by device"
                parts={[
                  { label: 'Desktop', value: 64, series: 'primary' },
                  { label: 'Mobile', value: 36, series: 'secondary' },
                ]}
              />
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
}
