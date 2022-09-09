import Background from "../components/Background/Background";
import { Intro, Footer } from "../components/Content";
import { Projects, ProjectProps } from "../components/Projects";
import { loadProjects } from "../lib/loadProjects";

interface PageProps {
  projects: ProjectProps[];
}

export default function Home(props: PageProps) {
  return (
    <main className="relative max-w-screen-2xl mx-auto">
      <Background />
      <section className="max-w-screen-xl mx-auto p-10 md:p-20">
        <Intro />
        <Projects {...props} />
      </section>
      <Footer/>
    </main>
  );
}

export async function getStaticProps() {
  const projects = await loadProjects();
  return {
    props: {
      projects,
    },
  };
}
