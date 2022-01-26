import Layout from '../components/Layout/layout.js'
import TeamComponent from '../components/Team/team.js'
import Socials from '../components/Cta/socials'

import styles from '../public/assets/styles/Team.module.css'

const meta = {
  'title': 'Rencontrez l\'équipage',
  'description': 'L\'arcanis Boat Club est tenu par un équipage rassemblé autour de l\'oeuvre du capitaine Arcanis. Venez en apprendre plus sur eux !'
}

export default function Team() {
  return (
    <Layout team>
      <div 
        data-aos="fade-down"
        data-aos-duration="1000"
        className={styles.wrapper}
      >
        <h1>Rencontrez l&#39;équipage</h1>
        <div className={styles.team}>
          <TeamComponent />
        </div>
        <div className={styles.actions}>
          <h2>Retrouvez les oeuvres d&#39;Arcanis sur ses différentes plateformes</h2>
          <Socials />
        </div>
      </div>
    </Layout>
  )
}