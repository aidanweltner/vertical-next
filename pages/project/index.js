import Layout from "@components/layout";
import TextSection from "@components/textSection";
import Head from "next/head";
import { projects } from "lib/getAllProjects";
import ProjectTile from "@components/projectTile";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <section>
        <div className="section-inner pb-12 max-w-screen-sm xl:max-w-screen-md grid md:grid-cols-3 grid-flow-row-dense gap-3">
          {projects.map((project)=> (
            <ProjectTile key={project.link} project={project}/>
          ))}
        </div>
      </section>
    </Layout>
  )
}