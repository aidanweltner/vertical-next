import ImageHeader from "./imageHeader";
import Layout from "./layout";
import { siteUrl } from "./layout";
import { NextSeo } from 'next-seo';
import TextSection from "./textSection";

export default function Project({meta, children}) {

  return (
    <Layout>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          url: `${siteUrl + '/project/' + meta.slug}`,
          title: `${meta.title}`,
          description: `${meta.description}`,
          images: [
            {
              url:`${siteUrl + meta.image}`,
              alt: `${meta.title}`,
            }
          ]
        }}
      />
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