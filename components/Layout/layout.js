import { useEffect } from "react";

import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../public/assets/styles/utils.module.css'

import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const siteTitle = 'Arcanis Boat Club - NFT collectibles from Ethereum blockchain'
export const siteDescription = 'The Arcanis Boat Club is a series of 10,000 uniquely generated boats sailing the etehreum blockchain. Each NFTs is unique and is based on the physical artwork of Arcanis Design.'

export default function Layout({ children, meta }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Tekkz" />
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arcanisboatclub.com/" />
        <meta property="og:image" content="https://www.arcanisboatclub.com/static/media/15.6b753ab2.png" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="es_ES" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ArcanisDesign" />
        <meta name="twitter:creator" content="@ArcanisDesign" />

        <link rel="canonical" href="https://www.arcanisboatclub.com/" key="canonical" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}