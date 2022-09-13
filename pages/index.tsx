import Head from "next/head";
import Background from "../components/Background/Background";
import { Intro, Footer } from "../components/Content";
import { Projects, ProjectProps } from "../components/Projects";
import { loadProjects } from "../lib/loadProjects";

interface PageProps {
  projects: ProjectProps[];
}

export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="My Personal Website"/>
        <meta name="keywords" content="personal, projects, lashdid"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lashdid.vercel.app"/>
        <meta property="og:title" content="Lashdid | Personal Website"/>
        <meta property="og:description" content="My Personal Website"/>
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
        <title>Lashdid | Personal Website</title>
      </Head>
      <main className="relative max-w-screen-2xl mx-auto">
        <Background />
        <section className="max-w-screen-xl mx-auto p-10 md:p-20">
          <Intro />
          <Projects {...props} />
        </section>
        <Footer />
      </main>
    </>
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
