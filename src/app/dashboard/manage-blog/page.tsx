const draftCards = [
  {
    title: "April product update",
    state: "Ready for review",
    excerpt:
      "The main narrative is in place. Finish the call-to-action and schedule publish.",
  },
  {
    title: "Onboarding checklist revamp",
    state: "Draft",
    excerpt:
      "A tighter walkthrough with less cognitive load and stronger first-run guidance.",
  },
  {
    title: "Case study spotlight",
    state: "Queued",
    excerpt:
      "Polish the customer metrics block, then move it into the Friday release queue.",
  },
];

const workflowSteps = [
  "Write",
  "Edit",
  "Review",
  "Schedule",
];

export default function ManageBlogPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-4">
        <div className="dashboard-panel rounded-[30px] p-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
            Editorial
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-white">
            Manage content with a calmer flow
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            This route is designed as a content workspace: drafts are visible at a glance,
            the next actions are obvious, and publishing stays one click away.
          </p>
        </div>

        <div className="grid gap-4">
          {draftCards.map((card) => (
            <article
              key={card.title}
              className="dashboard-panel rounded-[28px] p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.excerpt}</p>
                </div>
                <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
                  {card.state}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="space-y-6">
        <article className="dashboard-panel rounded-[30px] p-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
            Workflow
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">
            Publishing ladder
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {workflowSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-300 text-[0.7rem] font-bold text-slate-950">
                  {index + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </article>

        <article className="dashboard-panel rounded-[30px] p-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
            Queue
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">
            Next actions
          </h3>
          <div className="mt-5 space-y-3">
            {[
              "Finalize SEO titles and metadata",
              "Confirm hero imagery across breakpoints",
              "Move approved drafts into scheduled release",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </aside>
    </div>
  );
}
