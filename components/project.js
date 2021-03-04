import ImageHeader from "./imageHeader";
import Layout from "./layout";
import { siteUrl } from "./layout";
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';
import TextSection from "./textSection";
import Link from "next/link";

export default function Project({meta, children}) {

  return (
    <Layout project>
      <NextSeo
        title={meta.title + ' | ' + meta.details[1] + ' | Construction Portfolio'}
        description={meta.description}
        openGraph={{
          type: 'article',
          url: `${siteUrl + '/project/' + meta.slug}`,
          title: `${meta.title + ' | ' + meta.details[1] + ' | Construction Portfolio'}`,
          description: `${meta.description}`,
          article: {
            publishedTime: '2021-03-03T23:16:00Z',
            modifiedTime: '2021-03-03T23:16:00Z',
            section: 'Project Portfolio',
            authors: [
              'Todd Weltner',
              'Jennie Weltner',
            ],
          },
          images: [
            {
              url:`${siteUrl + meta.image}`,
              alt: `${meta.title}`,
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        url={`${siteUrl + '/project/' + meta.slug}`}
        title={`${meta.title}`}
        images={[
          `${siteUrl + meta.image}`,
        ]}
        datePublished="2021-03-03T23:16:00Z"
        dateModified="2021-03-03T23:16:00Z"
        authorName={['Todd Weltner', 'Jennie Weltner']}
        description={`${meta.description}`}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: `${siteUrl}`,
          },
          {
            position: 2,
            name: 'Projects',
            item: `${siteUrl + '/portfolio'}`,
          },
          {
            position: 3,
            name: `${meta.title}`,
            item: `${siteUrl + '/portfolio/' + meta.slug}`,
          },
        ]}
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
      <div className="section-inner font-bold">
        <Link href="/portfolio">
          <a className="text-white">← Back to portfolio</a>
        </Link>
      </div>
    </Layout>
  )
}