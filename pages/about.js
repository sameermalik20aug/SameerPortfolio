import React from "react";
import Layout from "../components/Layout";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

export default function About() {
  return (
    <Layout title="About — Sameer Malik">
      <AboutMe as="h1" index={null} />
      <Skills as="h2" index={null} />
    </Layout>
  );
}
