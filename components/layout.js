import Head from 'next/head'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'Vertical Construction | Boise, ID'
export const siteDescription = "VERTICAL Corporation is a small general contracting company based in Boise, Idaho. We offer clients a high level of personal attention and customer service."
export const siteImage = './VerticalDefaultSocialImage.jpg'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Favicon.ico" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <main>
        <Header dark/>
        {children}
        {!home && (
          <div className="section-inner font-bold">
            <Link href="/">
              <a className="text-white">← Back to home</a>
            </Link>
          </div>
        )}
        <Footer dark></Footer>
      </main>
      
    </>
  )
}
