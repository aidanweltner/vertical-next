import Head from "next/head";
import HomeLayout from "../components/homeLayout";
import HomeSection from "../components/homeSection";
import { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <HomeSection
        title="Portfolio"
        href="/"
        top="30+ years of experience of construction management experience makes VERTICAL"
        heading="The first step in your building journey"
        bg="bardenay-boise-vertical-construction.jpg"
      />
      <HomeSection
        title="Contact"
        href="/"
        top="Our unique process ensures that your project moves smoothly"
        heading="From the drawing board to reality"
        bg="Eagle-River-Vertical-Construction.jpg"
      />
    </HomeLayout>
  )
}