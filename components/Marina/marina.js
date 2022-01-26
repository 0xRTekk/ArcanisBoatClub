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
      <section className={styles.manifesto}>
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
      </section>

      <Socials />

      <section className={styles.manifesto}>
        <p>
          Au sein de la communauté de l’A.B.C. vous retrouvez :
        </p>
        <ul>
          <li><strong>10 000 bateaux</strong> – et leurs capitaines.</li>
          <li>Un lancement et une distribution équitable : tous les bateaux coûtent <strong>0.02 ETH</strong>.</li>
          <li>Un accès au <strong>Discord VIP du Arcanis Boat Club</strong>. Vous y échangez librement avec d’autres capitaines de tous horizons.</li>
          <li>Un accès aux coulisses. Vous découvrez le <strong>processus de création des œuvres Arcanis Design</strong>.</li>
          <li>Encore plus d’avantages à découvrir en franchissant les paliers de la <strong>carte au trésor…</strong></li>
        </ul>
        <Link href="https://www.arcanis.design/" passHref>
          <Cta
            title="Les oeuvres Arcanis Design"
          />
        </Link>
      </section>
    </div>
  )
}