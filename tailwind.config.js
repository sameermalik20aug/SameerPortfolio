/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "on-accent": "var(--on-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        hero: ["clamp(3.25rem, 8vw, 6rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-1": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-2": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-3": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        title: ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        lead: ["1.25rem", { lineHeight: "1.6" }],
        prose: ["1.0625rem", { lineHeight: "1.7" }],
        note: ["0.9375rem", { lineHeight: "1.6" }],
        meta: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      spacing: {
        section: "var(--space-section)",
        "section-sm": "var(--space-section-sm)",
        block: "var(--space-block)",
        stack: "var(--space-stack)",
        gutter: "var(--space-gutter)",
      },
      maxWidth: {
        container: "var(--container)",
        measure: "var(--measure)",
      },
    },
  },
  plugins: [],
};
