import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const LINKS = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["Skills", "/#skills"],
  ["About", "/#about"],
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded text-ink"
    >
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          {isDark ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </>
          ) : (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          )}
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  return (
    <header className="mx-auto flex max-w-container items-center justify-between gap-4 px-gutter py-8 md:px-8">
      <Link
        href="/"
        className="group font-display text-title font-bold lowercase tracking-tight text-ink"
      >
        samy
        <span className="text-accent-strong transition-colors group-hover:text-ink">
          .
        </span>
        <span className="sr-only"> — Sameer Malik, home</span>
      </Link>
      <nav className="flex items-center gap-x-5">
        <div className="hidden gap-x-5 font-mono text-meta text-muted sm:flex">
          {LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
            >
              {label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
