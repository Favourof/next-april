const preferenceRows = [
  { label: "Email summaries", status: "On" },
  { label: "Security alerts", status: "On" },
  { label: "Dark editorial mode", status: "Default" },
  { label: "Publishing reminders", status: "2 per week" },
];

const sections = [
  {
    title: "Notifications",
    body: "Keep alerts focused on approvals, logins, and content milestones.",
  },
  {
    title: "Access",
    body: "Manage password updates, session history, and account recovery.",
  },
  {
    title: "Appearance",
    body: "Use the same visual language across the content and account surfaces.",
  },
];

export default function Settings() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <article className="dashboard-panel rounded-[30px] p-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
          Preferences
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-white">
          Control the workspace
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          The settings view is intentionally calm and scannable, with clear hierarchy
          for notifications, access, and appearance controls.
        </p>

        <div className="mt-6 space-y-3">
          {preferenceRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-3xl border border-white/8 bg-white/[0.03] px-4 py-4"
            >
              <span className="text-sm font-medium text-white">{row.label}</span>
              <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </article>

      <aside className="space-y-6">
        {sections.map((section) => (
          <article key={section.title} className="dashboard-panel rounded-[30px] p-6">
            <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
              {section.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{section.body}</p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                className="dashboard-link rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-200"
              >
                Edit
              </button>
              <button
                type="button"
                className="dashboard-link rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
              >
                Review
              </button>
            </div>
          </article>
        ))}
      </aside>
    </div>
  );
}
