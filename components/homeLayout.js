import Head from "next/head";
import { siteTitle } from "../components/layout";
import Footer from "./footer";
import Header from "./header";

export default function HomeLayout({ children }) {
  return (
    <div className="bg-red-900">
      <Head>
        <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="VERTICAL Corporation is a small general contracting company based in Boise, Idaho. We offer clients a high level of personal attention and customer service."
          />
          {/* <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          /> */}
          <meta name="og:title" content={siteTitle} />
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <Header dark></Header>
      <main>{children}</main>
      <Footer dark></Footer>
    </div>
  )
}