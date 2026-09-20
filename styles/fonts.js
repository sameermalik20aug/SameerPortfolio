import localFont from "next/font/local";

export const display = localFont({
  src: "../fonts/self/bricolage-grotesque-var.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-display",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
});

export const body = localFont({
  src: [
    { path: "../fonts/self/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/self/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/self/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
});

export const mono = localFont({
  src: "../fonts/self/jetbrains-mono-var.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});
