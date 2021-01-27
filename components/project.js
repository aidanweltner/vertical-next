import Head from "next/head";
import ImageHeader from "./imageHeader";
import Layout from "./layout";
import TextSection from "./textSection";

export default function Project({meta, children}) {

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <ImageHeader
        image={meta.image}
        title={meta.title}
        description={meta.description}
        details={meta.details}
      />
      <TextSection>
        {children}
      </TextSection>
    </Layout>
  )
}