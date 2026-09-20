import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SelectedWork />
      <Experience />
      <Skills />
      <AboutMe />
    </Layout>
  );
}
