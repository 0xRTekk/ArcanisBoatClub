import Link from 'next/link'
import Cta from '../Cta/cta'
import Socials from '../Cta/socials'
import styles from './Marina.module.css'


export default function Marina() {
  return (
    <div 
      data-aos="fade-down"
      data-aos-duration="1000"
      className={styles.marina}>
      <section className={styles.actions}>
        <h2>La marina</h2>
        <p>
          <strong>« Le Bateau »</strong> est un concept créé par Arcanis.
        </p>
        <p>
          Il veut transmettre son histoire et permettre au plus grand nombre de se connecter avec le domaine de l’art, et maintenant avec celui des <strong>NFTs</strong>.
        </p>
        <p>
          Il vous invite à bord, embarquez dès maintenant ! Personne ne doit rester à quai … <br />
          Rejoignez la flotte de <strong>l’Arcanis Boat Club</strong>.
        </p>

        <Socials />

        <Link href="https://www.arcanis.design/" passHref>
          <Cta
            title="Les oeuvres Arcanis Design"
          />
        </Link>

      </section>
    </div>
  )
}