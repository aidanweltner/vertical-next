import Head from "next/head";
import { siteTitle } from "../components/layout";
import Footer from "./footer";
import Header from "./header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/Favicon.ico" />
        <meta property="author" content="Todd Weltner"/>
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="en_US" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129292435-4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-129292435-4');
            `,
          }}
        />
      </Head>
      <Header dark></Header>
      <main>{children}</main>
      <Footer dark></Footer>
    </>
  )
}