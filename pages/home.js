import Head from "next/head";
import HomeLayout from "../components/homeLayout";
import { siteTitle } from "../components/layout";


export default function Home1() {
  return (
    <HomeLayout>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
    </HomeLayout>
  )
}