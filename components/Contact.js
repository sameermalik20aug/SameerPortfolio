import React from "react";
import Section from "./Section";
import userData from "@constants/data";

export default function Contact({ as = "h1" }) {
  return (
    <Section id="contact" title="Contact" as={as}>
      <p className="max-w-measure text-prose text-muted">
        The best way to reach me is by email.
      </p>
      <div className="mt-block flex flex-wrap gap-x-6 gap-y-2 font-mono text-meta text-muted">
        <a
          href={`mailto:${userData.email}`}
          className="underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
        >
          {userData.email}
        </a>
        <a
          href={userData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
        >
          GitHub
        </a>
        <a
          href={userData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
