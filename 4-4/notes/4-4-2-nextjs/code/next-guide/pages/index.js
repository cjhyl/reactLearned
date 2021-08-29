import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <div>
        Index Page Works
        <Link href="/list">
          <a className="link">to list page</a>
        </Link>
        <img src="/images/vercel.svg" />
      </div>

      <style jsx>{`
        .link {
          color: red;
          text-decoration: underline;
        }
      `}</style>
    </>
    
  )
}
