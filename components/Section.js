import React from "react";

export default function Section({ id, title, as = "h2", children }) {
  const Heading = as;
  return (
    <section id={id} className="scroll-mt-10 border-t border-line py-section-sm">
      <Heading className="mb-block font-display text-display-2 font-semibold text-ink">
        {title}
      </Heading>
      {children}
    </section>
  );
}
