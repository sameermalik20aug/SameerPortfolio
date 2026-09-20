import React from "react";
import Section from "./Section";
import userData from "@constants/data";

const PARAGRAPHS = [
  "Hey, I'm Sameer. I'm a software engineer who likes turning messy problems into software that actually makes people's lives easier.",
  "Over the last 5+ years, I've worked across full-stack development, cloud systems and AI-powered applications, building with React, TypeScript, Node.js, Python and AWS.",
  "But code is only one part of me. I'm the kind of person who can spend way too long comparing tech gadgets, recognise a song in a few seconds, experiment in the kitchen, play something on the piano, or somehow end up deep in Hollywood gossip. I'm curious about a lot of things, a little sarcastic, and usually have something to talk about once I get going.",
  "If you're building something interesting, want to talk tech, music, food, or just want to say hi, come find me on my socials. I'm always happy to connect.",
];

const linkClass =
  "underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong focus-visible:text-accent-strong";

export default function AboutMe({ as = "h2" }) {
  return (
    <Section id="about" title="About" as={as}>
      <div className="max-w-measure space-y-5 text-prose text-muted">
        {PARAGRAPHS.map((p, i) => (
          <p key={i} className={i === 0 ? "text-ink" : undefined}>
            {p}
          </p>
        ))}
      </div>

      <div className="mt-block flex flex-wrap gap-x-6 gap-y-2 font-mono text-meta text-muted">
        <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          GitHub
        </a>
        <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          LinkedIn
        </a>
        <a href={userData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={linkClass}>
          X
        </a>
        <a href={`mailto:${userData.email}`} className={linkClass}>
          Email
        </a>
      </div>
    </Section>
  );
}
