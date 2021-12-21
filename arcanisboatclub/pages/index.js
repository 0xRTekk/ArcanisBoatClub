import Head from 'next/head'
import Image from 'next/image'
import styles from '../assets//styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar.tsx'

const schemaData = 
{
  "@context" : "http://schema.org",
    "@type" : "Product",
    "name" : "Arcanis Boat Club",
    "image" : "https://www.arcanisboatclub.com/static/media/presentation_gif.ed1b8ad4.gif",
    "description" : "10,000 boats await their captain.</P><P>The Arcanis Boat Club is Arcanis&#39; first project based on generative art. Generative art is a practice using algorithms to autonomously generate a work. First, you create rules that set limits on the creation process. Then a computer follows these rules to produce new works.</P><P>Arcanis plans to deliver a series of 10,000 unique boats sailing on the ethereum blockchain.</P><P>Each NFT is unique and is based on the physical art of Arcanis Design !",
    "url" : "https://www.arcanisboatclub.com/",
    "brand" : {
      "@type" : "Brand",
      "name" : "Arcanis Boat Club",
      "logo" : "/static/media/vandal_white.0d2d9e82.svg"
    }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arcanis Boat Club - NFT collectibles from Ethereum blockchain</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Tekky" />
        <meta name="theme-color" content="#333333" />
        <meta name="description" content="The Arcanis Boat Club is a series of 10,000 uniquely generated boats sailing the etehreum blockchain. Each NFTs is unique and is based on the physical artwork of Arcanis Design." />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ArcanisDesign" />
        <meta name="twitter:creator" content="@ArcanisDesign" />
        <meta name="twitter:title" content="Arcanis Boat Club - NFT collectibles from Ethereum blockchain" />
        <meta name="twitter:description" content="The Arcanis Boat Club is a series of 10,000 uniquely generated boats sailing the etehreum blockchain. Each NFTs is unique and is based on the physical artwork of Arcanis Design." />
        <meta name="twitter:image" content="https://arcanisboatclub.com/static/media/15.6b753ab2.png" />
  
        <meta property="og:title" content="Arcanis Boat Club - NFT collectibles from Ethereum blockchain" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arcanisboatclub.com/" />
        <meta property="og:image" content="https://arcanisboatclub.com/static/media/15.6b753ab2.png" />
        <meta property="og:description" content="The Arcanis Boat Club is a series of 10,000 uniquely generated boats sailing the etehreum blockchain. Each NFTs is unique and is based on the physical artwork of Arcanis Design." />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="es_ES" />

        <link rel="canonical" href="https://arcanisboatclub.com/" key="canonical" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <header>
        
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
