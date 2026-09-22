import { ChartCard, ColumnChart, Meter, StatTile, formatNumber } from '../charts.jsx';

/*
 * A coded recreation of UnionTab's in-app Analytics dashboard.
 *
 * ILLUSTRATIVE SAMPLE DATA for a fictional demo local. It shows what the
 * product looks like with a busy local on it; these are NOT reported results.
 * The page labels it as such. Edit freely.
 */
const KPIS = [
  { label: 'Total members', value: '1,284', note: '1,262 approved' },
  { label: 'Pending approvals', value: '22', note: 'Awaiting review' },
  { label: 'Emails this month', value: '9,640', note: '14 campaigns' },
  { label: 'SMS this month', value: '1,870', note: '6 campaigns' },
];

const MEMBER_GROWTH = [
  { label: 'Apr', values: [38] },
  { label: 'May', values: [46] },
  { label: 'Jun', values: [52] },
  { label: 'Jul', values: [41] },
  { label: 'Aug', values: [63] },
  { label: 'Sep', values: [57] },
];

const COMMS = [
  { label: 'Apr', values: [5200, 640] },
  { label: 'May', values: [6100, 910] },
  { label: 'Jun', values: [4800, 520] },
  { label: 'Jul', values: [7400, 1350] },
  { label: 'Aug', values: [8900, 1620] },
  { label: 'Sep', values: [9640, 1870] },
];

const ELECTIONS = [
  { title: '2026 Executive Board Elections', status: 'Active', votes: 812, turnout: 64 },
  { title: 'Strike Authorization Vote', status: 'Closed', votes: 1179, turnout: 92 },
  { title: 'Bylaw Amendment Vote: Dues Increase', status: 'Closed', votes: 1065, turnout: 84 },
];

const TOP_POSTS = [
  { title: 'Contract Negotiations Update', likes: 214 },
  { title: 'Annual General Meeting Notice', likes: 187 },
  { title: 'Safety Alert: Winter Driving Conditions', likes: 132 },
];

function StatusPill({ status }) {
  const active = status === 'Active';
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${
        active ? 'border-pop-600/30 text-pop-600' : 'border-ink-200 text-ink-600'
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-pop-600' : 'bg-ink-400'}`}
      />
      {status}
    </span>
  );
}

export function UnionTabAnalytics() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 shadow-soft">
      {/* App chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-200 bg-ink-50 px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-semibold text-ink-900">Analytics Dashboard</p>
          <p className="text-xs text-ink-600">
            Comprehensive insights into your union&apos;s performance
          </p>
        </div>
        <span className="rounded-full border border-dashed border-ink-400 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-700">
          Sample data · demo local
        </span>
      </div>

      <div className="space-y-3 p-3 sm:space-y-4 sm:p-5">
        {/* KPIs */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((k) => (
            <StatTile key={k.label} {...k} />
          ))}
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
          <ChartCard title="Member growth" subtitle="New members over the last 6 months">
            <ColumnChart
              data={MEMBER_GROWTH}
              series={[{ label: 'New members', series: 'primary' }]}
              ticks={[0, 20, 40, 60, 80]}
              caption="New members per month, sample data"
            />
          </ChartCard>

          <ChartCard title="Communication history" subtitle="Emails and SMS sent over time">
            <ColumnChart
              data={COMMS}
              series={[
                { label: 'Emails', series: 'primary' },
                { label: 'SMS', series: 'secondary' },
              ]}
              ticks={[0, 2500, 5000, 7500, 10000]}
              caption="Emails and SMS sent per month, sample data"
            />
          </ChartCard>

          <ChartCard title="Election participation" subtitle="Recent election voter turnout">
            <ul className="space-y-4">
              {ELECTIONS.map((e) => (
                <li key={e.title}>
                  <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium text-ink-900">{e.title}</span>
                    <StatusPill status={e.status} />
                  </div>
                  <Meter
                    label={`Turnout, ${formatNumber(e.votes)} votes`}
                    value={e.turnout}
                  />
                </li>
              ))}
            </ul>
          </ChartCard>

          <div className="grid gap-3 sm:gap-4">
            <ChartCard title="Delivery & dues" subtitle="Campaign delivery and collection rate">
              <div className="space-y-4">
                <Meter label="Email delivery rate" value={99} detail="48,210 sent · 47,892 delivered" />
                <Meter label="SMS delivery rate" value={97} detail="7,340 sent · 7,120 delivered" />
                <Meter label="Dues collection rate" value={94} detail="$61,480 of $65,400 collected" />
              </div>
            </ChartCard>

            <ChartCard title="Top engaged posts" subtitle="Posts with the most likes">
              <ol className="space-y-2">
                {TOP_POSTS.map((p, i) => (
                  <li key={p.title} className="flex items-center gap-3 text-xs">
                    <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-ink-200 font-mono text-[0.6rem] text-ink-700">
                      {i + 1}
                    </span>
                    <span className="flex-1 truncate text-ink-800">{p.title}</span>
                    <span className="font-semibold text-ink-900">
                      {p.likes}
                      <span className="sr-only"> likes</span>
                      <span aria-hidden="true" className="ml-1 font-normal text-ink-500">♥</span>
                    </span>
                  </li>
                ))}
              </ol>
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
}
