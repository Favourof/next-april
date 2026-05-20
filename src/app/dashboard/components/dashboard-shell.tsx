"use client";

import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, type ReactNode } from "react";

const navigation = [
  {
    title: "Overview",
    href: "/dashboard",
    description: "Snapshot of activity and health",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    description: "Personal details and access",
  },
  {
    title: "Content",
    href: "/dashboard/manage-blog",
    description: "Drafts, publishing, and cadence",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    description: "Security, preferences, and alerts",
  },
];

function getInitial(name?: string | null, email?: string | null) {
  const source = name?.trim() || email?.trim() || "U";
  return source[0]?.toUpperCase() ?? "U";
}

export default function DashboardShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const { user, logout } = useContext(AuthContext)!;
  const activeItem =
    navigation.find((item) =>
      item.href === "/dashboard"
        ? pathname === item.href
        : pathname.startsWith(item.href),
    ) ?? navigation[0];

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div className="dashboard-grid pointer-events-none absolute inset-0 opacity-[0.22]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">
        <aside className="dashboard-panel-strong sticky top-6 hidden h-[calc(100vh-3rem)] flex-col rounded-[30px] p-5 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300 text-sm font-black text-slate-950 shadow-lg shadow-amber-400/20">
              N
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.34em] text-amber-200 uppercase">
                Northstar
              </p>
              <h1 className="text-lg font-semibold text-white">Dashboard</h1>
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/15 text-sm font-bold text-amber-100 ring-1 ring-amber-200/20">
                {getInitial(user?.name, user?.email)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {user?.name || "Guest user"}
                </p>
                <p className="truncate text-xs text-slate-400">
                  {user?.email || "No active session"}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                <p className="text-slate-400">Status</p>
                <p className="mt-1 font-semibold text-emerald-300">Active</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                <p className="text-slate-400">Plan</p>
                <p className="mt-1 font-semibold text-white">Creator</p>
              </div>
            </div>
          </div>

          <nav className="mt-6 space-y-2">
            {navigation.map((item) => {
              const active =
                item.href === "/dashboard"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`dashboard-link block rounded-[22px] border px-4 py-3 transition ${
                    active
                      ? "border-amber-200/30 bg-amber-200/10 text-white shadow-[0_0_0_1px_rgba(251,191,36,0.12)]"
                      : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/14 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.description}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                        active
                          ? "bg-amber-300 text-slate-950"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {active ? "Now" : "Go"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-[26px] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-4">
            <p className="text-sm font-medium text-white">Session control</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Keep the workspace tidy by logging out when you are done reviewing content.
            </p>
            <button
              type="button"
              onClick={logout}
              className="dashboard-link mt-4 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-100"
            >
              Log out
            </button>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="dashboard-panel-strong rounded-[30px] p-4 sm:p-5 lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.34em] text-amber-200 uppercase">
                  Northstar
                </p>
                <h1 className="mt-1 text-lg font-semibold text-white">
                  Dashboard
                </h1>
              </div>
              <Link
                href="/dashboard/profile"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                Profile
              </Link>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {navigation.map((item) => {
                const active =
                  item.href === "/dashboard"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm ${
                      active
                        ? "border-amber-200/30 bg-amber-200/10 text-amber-100"
                        : "border-white/10 bg-white/5 text-slate-300"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <header className="dashboard-panel-strong rounded-[30px] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-amber-200 uppercase">
                  Workspace
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  {activeItem.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  A sidebar-led dashboard built for clear navigation, fast scanning, and focused actions.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                  {user?.name || "Guest"} - {user ? "Signed in" : "Session needed"}
                </div>
                <Link
                  href="/dashboard/manage-blog"
                  className="dashboard-link rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-200"
                >
                  Open content flow
                </Link>
              </div>
            </div>
          </header>

          {children}
        </section>
      </div>
    </main>
  );
}
