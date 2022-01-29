import Head from 'next/head';
import Layout from '../components/Layout/layout.js'
import RoadmapComponent from '../components/Roadmap/roadmap'
import Socials from '../components/Cta/socials'

import styles from '../public/assets/styles/Roadmap.module.css'

const meta = {
  'title': 'Carte au trésor',
  'description': 'Chaque nouveau capitaine participe à la quête vers le trésor. Chaque pourcentage de vente (*des 10 000 bateaux) effectué débloque un nouveau palier de la carte. À chaque objectif de vente rempli, de nouveaux cadeaux seront disponibles sur l’Arcanis Boat Club. Plus la flotte sera grande et plus vous obtenez d’avantages. Et puisque la traversée se fait en équipe, vous devenez aussi membre du mouvement OTE : Own to Earn. '
}

export default function Roadmap() {
  return (
    <Layout roadmap>

      <Head>
        <title>{meta.title}</title>
        <meta property='description' content={meta.description} />
      </Head>
      
      <div data-aos-duration="700" data-aos="fade-down" className={styles.wrapper}>
        <h1>Carte au trésor</h1>
        <section className={styles.description}>
          <p>
            Chaque nouveau capitaine participe à <strong>la quête vers le trésor</strong>. Chaque pourcentage de vente (*des 10 000 bateaux) effectué débloque un nouveau palier de la carte. À chaque objectif de vente rempli, de <strong>nouveaux cadeaux seront disponibles sur l’Arcanis Boat Club</strong>. Plus la flotte sera grande et plus vous obtenez d’avantages. Et puisque la traversée se fait en équipe, vous devenez aussi membre du <strong>mouvement OTE : Own to Earn</strong>. 
          </p>
        </section>
        <RoadmapComponent />
        <section data-aos-duration="700" data-aos="fade-down" className={styles.actions}>
            <Socials />
        </section>
      </div>
    </Layout>
  )
}