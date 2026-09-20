import React from "react";
import Section from "./Section";
import userData from "@constants/data";

export default function Skills({ as = "h2", index = "03" }) {
  return (
    <Section id="skills" title="Skills" as={as} index={index}>
      <dl className="grid gap-block sm:grid-cols-2">
        {userData.skills.map((group) => (
          <div key={group.category}>
            <dt className="font-mono text-label uppercase text-muted">
              {group.category}
            </dt>
            <dd className="mt-2 text-prose text-ink">{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
