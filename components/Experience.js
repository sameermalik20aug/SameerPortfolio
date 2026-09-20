import React from "react";
import Section from "./Section";
import userData from "@constants/data";

export default function Experience({ as = "h2", index = "02" }) {
  const RoleHeading = as === "h1" ? "h2" : "h3";
  return (
    <Section id="experience" title="Experience" as={as} index={index}>
      <div className="divide-y divide-line border-t border-line">
        {userData.experience.map((job) => (
          <article
            key={`${job.role}-${job.company}`}
            className="grid gap-2 py-block md:grid-cols-[11rem_1fr] md:gap-10"
          >
            <p className="font-mono text-meta text-muted md:pt-1">{job.dates}</p>
            <div>
              <RoleHeading className="font-display text-title font-semibold text-ink">
                {job.role}
              </RoleHeading>
              <a
                href={job.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-note text-muted underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
              >
                {job.company}
              </a>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-prose text-muted">
                    <span aria-hidden="true" className="text-accent-strong">
                      —
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
