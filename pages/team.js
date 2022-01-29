import Head from 'next/head';
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

      <Head>
        <title>{meta.title}</title>
        <meta property='description' content={meta.description} />
      </Head>

      <div 
        data-aos="fade-down"
        data-aos-duration="1000"
        className={styles.wrapper}
      >
        <h1>Rencontre avec l&#39;équipage</h1>
        <section className={styles.team}>
          <TeamComponent />
        </section>
        <section className={styles.actions}>
          <Socials />
        </section>
      </div>
    </Layout>
  )
}