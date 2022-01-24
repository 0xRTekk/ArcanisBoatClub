import Layout from '../components/Layout/layout.js'
import RoadmapComponent from '../components/Roadmap/roadmap'
import Link from 'next/link'

import styles from '../public/assets/styles/Roadmap.module.css'

const meta = {
  'title': 'Carte au trésor',
  'description': 'Chaque nouveau capitaine participe à la quête vers le trésor. Chaque pourcentage de vente (*des 10 000 bateaux) effectué débloque un nouveau palier de la carte. À chaque objectif de vente rempli, de nouveaux cadeaux seront disponibles sur l’Arcanis Boat Club. Plus la flotte sera grande et plus vous obtenez d’avantages. Et puisque la traversée se fait en équipe, vous devenez aussi membre du mouvement OTE : Own to Earn. '
}

export default function Roadmap() {
  return (
    <Layout roadmap>
      <div className={styles.wrapper}>
        <h1>Carte au trésor</h1>
        <div className={styles.roadmap}>
          <RoadmapComponent />
        </div>
        <div className={styles.actions}>
          <h2>Retrouvez les oeuvres d'Arcanis sur ses différentes plateformes</h2>
          <div className={styles.row, styles.socials}>
            <div>Discord</div>
            <div>Youtube</div>
            <div>Tik Tok</div>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Facebook</div>
          </div>
          <div className={styles.links}>
            <div>
              <Link href="/team">
                <a>Rencontrez l'équipage</a>
              </Link>
            </div>
            <div>
              <a href='https://www.arcanis.design/' target="_blank">Oeuvres physiques</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}