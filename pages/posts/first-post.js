import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="text-red-600 font-bold text-2xl">First Post</h1>
      <p className="my-3">
        <Link href="/">
          <a className="text-red-400 underline">Back to home</a>
        </Link>
      </p>
    </Layout>
  )
}