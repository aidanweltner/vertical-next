import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <h2 className="text-xl font-bold">{postData.title}</h2>
      <p className="text-sm font-grey-400 bg-blue-100 rounded-sm">{postData.id}</p>
      <p className="text-sm font-semibold">{postData.date}</p>
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
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
