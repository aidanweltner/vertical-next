import Head from "next/head";
import Layout from "../components/layout";
import Testimonial from "../components/testimonial";
import TextSection from "../components/textSection";

export default function Testimonials() {
  return (
    <Layout>
      <Head>
        <title>Testimonials</title>
      </Head>
      <TextSection>
        <h1>Testimonials</h1>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
      </TextSection>
      <section>
        <div className="max-w-screen-sm xl:max-w-screen-md px-4 lg:px-12 mx-auto py-6">
          <Testimonial
            project="/"
            quote="Todd runs a tight ship and he took our vision to the next level."
            source="Kevin Settles"
            sourcePosition="Owner, Bardenay"
            projectTitle="Bardenday Boise"
            projectImage="/images/bardenay-boise-vertical-construction.jpg"
          />
          <Testimonial
            project="/"
            quote="Todd runs a tight ship and he took our vision to the next level."
            source="Kevin Settles"
            sourcePosition="Owner, Bardenay"
            projectTitle="Bardenday Boise"
            projectImage="/images/Eagle-River-Vertical-Construction.jpg"
          />
          <Testimonial
            project="/"
            quote="Todd runs a tight ship and he took our vision to the next level."
            source="Kevin Settles"
            sourcePosition="Owner, Bardenay"
            projectTitle="Bardenday Boise"
            projectImage="/images/bardenay-boise-vertical-construction.jpg"
          />
        </div>
      </section>
    </Layout>
  )
}