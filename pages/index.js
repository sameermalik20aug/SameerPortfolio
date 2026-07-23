import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Sameer Malik - Developer, Writer, Creator"
      description="This is it"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode />
    </ContainerBlock>
  );
}
