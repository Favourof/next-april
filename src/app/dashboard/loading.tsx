export default function Loading() {
  return (
    <main className="relative min-h-screen px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="dashboard-panel-strong hidden min-h-[70vh] rounded-[28px] p-5 lg:block">
          <div className="h-8 w-36 animate-pulse rounded-full bg-white/10" />
          <div className="mt-6 h-28 animate-pulse rounded-3xl bg-white/8" />
          <div className="mt-6 space-y-3">
            <div className="h-20 animate-pulse rounded-3xl bg-white/8" />
            <div className="h-20 animate-pulse rounded-3xl bg-white/8" />
            <div className="h-20 animate-pulse rounded-3xl bg-white/8" />
          </div>
        </aside>

        <section className="space-y-6">
          <div className="dashboard-panel-strong rounded-[28px] p-6">
            <div className="h-5 w-24 animate-pulse rounded-full bg-white/10" />
            <div className="mt-3 h-10 w-60 animate-pulse rounded-full bg-white/10" />
            <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded-full bg-white/8" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="dashboard-panel rounded-[26px] p-5"
              >
                <div className="h-4 w-24 animate-pulse rounded-full bg-white/10" />
                <div className="mt-4 h-10 w-20 animate-pulse rounded-full bg-white/10" />
                <div className="mt-4 h-8 w-full animate-pulse rounded-full bg-white/8" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
