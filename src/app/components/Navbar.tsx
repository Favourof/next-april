"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext)!;
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  const links = [
    { title: "Blog", route: "/" },
    { title: "Dashboard", route: "/dashboard" },
    { title: "About", route: "/about" },
  ];

  return (
    <div className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4">
      <div className="dashboard-panel flex w-full items-center justify-between rounded-full px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Northstar
        </Link>

        <ul className="flex items-center gap-2">
        {links.map((link, i) => (
          <Link
            href={link.route}
            className="dashboard-link rounded-full border border-transparent px-4 py-2 text-sm text-slate-300 hover:border-white/10 hover:bg-white/8 hover:text-white"
            key={i}
          >
            {link.title}
          </Link>
        ))}
        </ul>

        <ul className="flex items-center gap-2">
        {!isAuthenticated ? (
            <>
              <Link
                href="/login"
                className="dashboard-link rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-amber-200/40 hover:text-amber-100"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="dashboard-link rounded-full bg-amber-300 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-200"
              >
                Register
              </Link>
            </>
        ) : (
          <button
            className="dashboard-link rounded-full border border-amber-200/20 px-4 py-2 text-sm text-amber-100 hover:border-amber-200/40 hover:bg-amber-200/10"
            onClick={logout}
          >
            Logout
          </button>
        )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
