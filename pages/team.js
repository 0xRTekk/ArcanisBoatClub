import Layout from '../components/Layout/layout.js'
import TeamComponent from '../components/Team/team.js'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../public/assets/styles/Team.module.css'

const meta = {
  'title': 'Rencontrez l\'équipage',
  'description': 'L\'arcanis Boat Club est tenu par un équipage rassemblé autour de l\'oeuvre du capitaine Arcanis. Venez en apprendre plus sur eux !'
}

export default function Team() {
  return (
    <Layout team>
      <div className={styles.wrapper}>
        <h1>Rencontrez l'équipage</h1>
        <div className={styles.team}>
          <TeamComponent />
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