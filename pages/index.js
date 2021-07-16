import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'

const ImageComponent = () => (
  <Image
    src="/images/test.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)


export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
      <Head>
        <title>DH NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/intro/intro">
        <a className="Link_intro">go to intro page</a>
      </Link>

      <ImageComponent />


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        .Link_intro {
          font-size:30px;
        }
      `}</style>
    </Layout>
  </div>
  )
}
