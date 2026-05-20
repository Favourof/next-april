const profileDetails = [
  { label: "Display name", value: "Amina Johnson" },
  { label: "Role", value: "Content lead" },
  { label: "Email", value: "amina@northstar.dev" },
  { label: "Location", value: "Lagos, Nigeria" },
];

const accessDetails = [
  "Password last updated 28 days ago",
  "Two-factor authentication enabled",
  "Login alerts routed to email",
];

export default function ProfilePage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <article className="dashboard-panel rounded-[30px] p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300 text-2xl font-black text-slate-950">
              AJ
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
                Profile
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">
                Amina Johnson
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                A polished identity surface for account details and access control.
              </p>
            </div>
          </div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
            Verified
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {profileDetails.map((detail) => (
            <div
              key={detail.label}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-4"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                {detail.label}
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </article>

      <aside className="space-y-6">
        <article className="dashboard-panel rounded-[30px] p-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
            Access
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">
            Security posture
          </h3>
          <div className="mt-5 space-y-3">
            {accessDetails.map((detail) => (
              <div
                key={detail}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
              >
                {detail}
              </div>
            ))}
          </div>
        </article>

        <article className="dashboard-panel rounded-[30px] p-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-200 uppercase">
            Bio
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">
            Quick summary
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            This profile view is set up as a calm, high-contrast workspace for identity,
            permissions, and session history.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-white/8 bg-slate-950/40 p-4">
              <p className="text-slate-500">Posts reviewed</p>
              <p className="mt-2 text-xl font-semibold text-white">74</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-slate-950/40 p-4">
              <p className="text-slate-500">Sessions</p>
              <p className="mt-2 text-xl font-semibold text-white">03</p>
            </div>
          </div>
        </article>
      </aside>
    </div>
  );
}
