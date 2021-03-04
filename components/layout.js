import Head from 'next/head'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'Vertical Construction | Boise, ID'
export const siteDescription = "VERTICAL Corporation is a small general contracting company based in Boise, Idaho. We offer clients a high level of personal attention and customer service."
export const siteImage = '/VerticalDefaultSocialImage.jpg'
export const siteUrl = 'https://vertical-corp.com'

export default function Layout({ children, home, project }) {
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
      
      <main>
        <Header dark/>
        {children}
        <Footer dark></Footer>
      </main>
      
    </>
  )
}
