const stats = [
  {
    label: "Engagement",
    value: "84%",
    change: "+12.4%",
    tone: "text-emerald-300",
  },
  {
    label: "Published posts",
    value: "128",
    change: "+8 this month",
    tone: "text-amber-200",
  },
  {
    label: "Draft pipeline",
    value: "07",
    change: "3 ready today",
    tone: "text-sky-300",
  },
  {
    label: "Team response",
    value: "11m",
    change: "Avg. turnaround",
    tone: "text-fuchsia-200",
  },
];

const activity = [
  "Draft review completed for the April product update.",
  "Homepage feature card got a 9% uplift after copy adjustments.",
  "Two content items scheduled for Friday morning publish.",
  "Profile settings were synced to the latest auth session.",
];

const tasks = [
  "Finish the new onboarding article",
  "Refresh profile avatar and bio",
  "Review notification preferences",
  "Approve content scheduled for release",
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="dashboard-panel rounded-[26px] p-5"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <h3 className={`text-3xl font-semibold tracking-tight ${stat.tone}`}>
                {stat.value}
              </h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {stat.change}
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="dashboard-panel rounded-[30px] p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
                Activity
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                What changed today
              </h3>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
              Live feed
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {activity.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-300/12 text-sm font-bold text-amber-100">
                  0{index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <article className="dashboard-panel rounded-[30px] p-6">
            <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
              Focus
            </p>
            <h3 className="mt-1 text-xl font-semibold text-white">
              Launch checklist
            </h3>

            <div className="mt-5 space-y-3">
              {tasks.map((task) => (
                <label
                  key={task}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/30 bg-amber-200/10 text-[0.7rem] text-amber-100">
                    OK
                  </span>
                  {task}
                </label>
              ))}
            </div>
          </article>

          <article className="dashboard-panel rounded-[30px] p-6">
            <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
              Insight
            </p>
            <h3 className="mt-1 text-xl font-semibold text-white">
              Release rhythm
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              This layout keeps the high-value actions above the fold, with clear route
              shortcuts and a focused editorial path for content work.
            </p>
            <div className="mt-5 rounded-3xl border border-white/8 bg-slate-950/40 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">This week</span>
                <span className="text-white">72% complete</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300" />
              </div>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
}
