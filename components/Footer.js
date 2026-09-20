import React from "react";
import userData from "@constants/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-4 px-gutter py-block font-mono text-meta text-muted md:px-8">
        <span>© {year} Sameer Malik</span>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`mailto:${userData.email}`}
            className="underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
          >
            Email
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
          <a
            href={userData.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-transparent underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
          >
            X
          </a>
        </nav>
      </div>
    </footer>
  );
}
