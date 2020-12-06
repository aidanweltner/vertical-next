import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h2 className="text-xl font-bold">{postData.title}</h2>
      <p className="inline-flex py-1 px-2 my-1 text-sm font-grey-400 bg-blue-100 rounded-sm"><Date dateString={postData.date}></Date></p>
      <div className="py-3 prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
