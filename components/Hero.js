import React, { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import userData from "@constants/data";

function AccentUnderline({ children }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [color, setColor] = useState("#9b2d33");
  const [nonce, setNonce] = useState(0);

  // Draw only after web fonts load, else the underline is mis-measured.
  useEffect(() => {
    let cancelled = false;
    const draw = () =>
      requestAnimationFrame(() => !cancelled && setMounted(true));
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(draw);
    } else {
      draw();
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);

    let t;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(() => !cancelled && setNonce((n) => n + 1), 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      clearTimeout(t);
      mq.removeEventListener?.("change", sync);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const c = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    if (c) setColor(c);
  }, [mounted, resolvedTheme]);

  return (
    <RoughNotation
      key={`${resolvedTheme}-${color}-${nonce}`}
      type="underline"
      show={mounted}
      color={color}
      strokeWidth={2}
      padding={2}
      iterations={2}
      animate={!reduce}
      animationDuration={reduce ? 0 : 700}
    >
      <span className="whitespace-nowrap">{children}</span>
    </RoughNotation>
  );
}

function MetaRow({ label, children }) {
  return (
    <div>
      <dt className="font-mono text-label uppercase text-muted">{label}</dt>
      <dd className="mt-1 font-mono text-meta text-ink">{children}</dd>
    </div>
  );
}

export default function Hero() {
  const current = userData.experience?.[0];

  return (
    <section className="flex min-h-[72vh] flex-col justify-center pt-section pb-section-sm">
      <div className="grid gap-block md:grid-cols-[minmax(0,1fr)_16rem] md:items-center md:gap-14">
        <div>
          <h1 className="font-display text-hero font-bold text-ink">
            {userData.name}
          </h1>

          <p className="mt-6 max-w-measure text-lead text-ink md:mt-8">
            I build cloud and AI applications and get them running{" "}
            <AccentUnderline>in production</AccentUnderline>.
          </p>

          <div className="mt-block flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-meta text-muted">
            <a
              href={userData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong focus-visible:text-accent-strong"
            >
              GitHub
            </a>
            <a
              href={userData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong focus-visible:text-accent-strong"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${userData.email}`}
              className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong focus-visible:text-accent-strong"
            >
              Email
            </a>
          </div>
        </div>

        <dl className="mt-block space-y-6 border-t border-line pt-block md:mt-0 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          {current && (
            <MetaRow label="Now">
              {current.role}, {current.company}
            </MetaRow>
          )}
          <MetaRow label="Focus">Cloud &amp; AI applications</MetaRow>
          <MetaRow label="Based in">Sydney, Australia</MetaRow>
        </dl>
      </div>
    </section>
  );
}
