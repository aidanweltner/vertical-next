import Layout from "@components/layout";
import { siteTitle, siteImage, siteUrl } from "@components/layout";
import { projects } from "lib/getAllProjects";
import ProjectTile from "@components/projectTile";
import { NextSeo } from "next-seo";

export default function Projects() {
  return (
    <Layout>
      <NextSeo
        title="All Projects | Vertical Construction"
        description="View all projects completed by Vertical Construction in Idaho."
        openGraph={{
          url: `${siteUrl + '/project/'}`,
          title: "All Projects | Vertical Construction",
          description: "View all projects completed by Vertical Construction in Idaho.",
          images: [
            {
              url:`${siteUrl + siteImage}`,
              width:1600,
              height:900,
              alt: `${siteTitle}`,
            }
          ]
        }}
      />
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