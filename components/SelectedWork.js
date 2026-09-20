import React from "react";
import Section from "./Section";
import userData from "@constants/data";

function WorkVisual({ visual }) {
  if (visual.type === "screenshot") {
    return (
      <div className="overflow-hidden rounded-lg border border-line bg-surface">
        <img
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>
    );
  }

  if (visual.type === "diagram") {
    return (
      <div>
        <img
          src={visual.light}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          loading="lazy"
          className="block h-auto w-full dark:hidden"
        />
        <img
          src={visual.dark}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          loading="lazy"
          className="hidden h-auto w-full dark:block"
        />
      </div>
    );
  }

  return null;
}

function WorkText({ item, titleAs = "h3" }) {
  const Title = titleAs;
  return (
    <div>
      <Title className="font-display text-display-3 font-semibold text-ink">
        {item.title}
      </Title>
      <p className="mt-4 max-w-measure text-prose text-muted">{item.blurb}</p>
      <p className="mt-4 font-mono text-meta text-muted">{item.tech}</p>
      {item.link && (
        <a
          href={item.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-meta text-accent-strong underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          {item.link.label}
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function WorkItem({ item, index, titleAs }) {
  if (item.visual.type === "none") {
    return (
      <article className="border-t border-rule pt-block">
        <WorkText item={item} titleAs={titleAs} />
      </article>
    );
  }

  const visualRight = index % 2 === 1;
  return (
    <article className="grid items-center gap-block md:grid-cols-2 md:gap-12">
      <div className={visualRight ? "md:order-2" : "md:order-1"}>
        <WorkVisual visual={item.visual} />
      </div>
      <div className={visualRight ? "md:order-1" : "md:order-2"}>
        <WorkText item={item} titleAs={titleAs} />
      </div>
    </article>
  );
}

export default function SelectedWork({ as = "h2" }) {
  const titleAs = as === "h1" ? "h2" : "h3";
  return (
    <Section id="work" title="Selected Work" as={as}>
      <div className="space-y-section-sm">
        {userData.work.map((item, i) => (
          <WorkItem key={item.title} item={item} index={i} titleAs={titleAs} />
        ))}
      </div>
    </Section>
  );
}
