import React from "react";

export default function Section({ id, index = null, title, as = "h2", children }) {
  const Heading = as;
  return (
    <section id={id} className="scroll-mt-10 border-t border-line py-section-sm">
      <div className="mb-block flex items-baseline gap-4">
        {index && (
          <span className="font-mono text-meta text-accent-strong" aria-hidden="true">
            {index}
          </span>
        )}
        <Heading className="font-display text-display-2 font-semibold text-ink">
          {title}
        </Heading>
      </div>
      {children}
    </section>
  );
}
