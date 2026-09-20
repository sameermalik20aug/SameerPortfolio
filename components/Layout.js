import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "./Nav";
import Footer from "./Footer";
import userData from "@constants/data";

export default function Layout({ children, title, description }) {
  const router = useRouter();
  const meta = {
    title: title || `${userData.name} — ${userData.designation}`,
    description:
      description ||
      "Sameer Malik — Cloud & AI Applications Engineer in Sydney. I build cloud and AI applications and get them running in production.",
  };
  const path = router.pathname === "/" ? "" : router.pathname;
  const canonical = `${userData.siteUrl}${path}`;
  const ogImage = `${userData.siteUrl}/og.png`;

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: userData.name,
    url: userData.siteUrl,
    jobTitle: userData.designation,
    email: `mailto:${userData.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    sameAs: [
      userData.socialLinks.github,
      userData.socialLinks.linkedin,
      userData.socialLinks.twitter,
    ],
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={userData.name} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={userData.name} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${userData.name} — ${userData.designation}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@SamyM98" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </Head>
      <div className="min-h-screen bg-paper">
        <Nav />
        <main className="mx-auto max-w-container px-gutter md:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
