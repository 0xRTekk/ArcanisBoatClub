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
      <div className={styles.wrapper}>
        <h1>Carte au trésor</h1>
        <div className={styles.roadmap}>
          <p>
            Chaque nouveau capitaine participe à la quête vers le trésor. Chaque pourcentage de vente (*des 10 000 bateaux) effectué débloque un nouveau palier de la carte. À chaque objectif de vente rempli, de nouveaux cadeaux seront disponibles sur l’Arcanis Boat Club. Plus la flotte sera grande et plus vous obtenez d’avantages. Et puisque la traversée se fait en équipe, vous devenez aussi membre du mouvement OTE : Own to Earn. 
          </p>
          <RoadmapComponent />
        </div>
        <div className={styles.actions}>
          <h2>Retrouvez les oeuvres d&#39;Arcanis sur ses différentes plateformes</h2>
            <Socials />
        </div>
      </div>
    </Layout>
  )
}