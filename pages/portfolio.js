import Layout from "@components/layout";
import TextSection from "@components/textSection";
import Head from "next/head";
import { projects } from "lib/getAllProjects";
import ProjectTile from "@components/projectTile";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section>
        <div className="section-inner pb-12 grid md:grid-cols-3 3xl:grid-cols-5 grid-flow-row-dense gap-3">
          {projects.map((project)=> (
            <ProjectTile key={project.link} project={project}/>
          ))}
        </div>
      </section>
      <TextSection>
        <p>Since 2002, VERTICAL has completed hundreds of projects in Idaho and beyond. Our portfolio features projects that range from simple tenant improvements to complex remodels or ground-up construction.</p>
        <p>We are especially proud of the projects we have constructed for repeat clients.  These relationships are forged through mutual respect and trust and are a testament to the value we offer our building partners.</p>
        <p>With VERTICAL as your building partner, the challenge of balancing cost, quality and time is considered and calculated long before the dirt and nails fly.</p>
        <p>We are honored to have played a part in building the dreams of business and home owners throughout the region.</p>
      </TextSection>
    </Layout>
  )
}