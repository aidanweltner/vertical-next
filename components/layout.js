import Head from 'next/head'
import Link from 'next/link'

const name = 'Aidan'
export const siteTitle = 'Vertical Construction'

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="max-w-screen-md mx-auto px-4 text-center">
        {home ? (
          <>
            <img
              src="/images/aidan.jpg"
              className="rounded-full mx-auto p-6 h-48"
              alt={name}
            />
            <h1 className="text-2xl text-primary font-bold pb-6 pt-2">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/aidan.jpg"
                  className="rounded-full mx-auto p-6 h-48"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl text-primary font-bold pb-6 pt-2">
              <Link href="/">
                <a className="text-primary">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="max-w-screen-md mx-auto px-4">{children}</main>
      {!home && (
        <div className="max-w-screen-md mx-auto px-4 text-primary font-bold">
          <Link href="/">
            <a className="text-primary">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
