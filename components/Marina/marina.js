import Link from 'next/link'
import styles from './Marina.module.css'

export default function Marina() {
  return (
    <div className={styles.marina}>
      <div className={styles.manifesto}>
        <h2>La marina</h2>
        <p>
          « Le Bateau » est un concept créé par Arcanis. <br />
          Il veut transmettre son histoire et permettre au plus grand nombre de se connecter avec le domaine de l’art, et maintenant avec celui des NFTs. <br />
          Il vous invite à bord, embarquez dès maintenant ! Personne ne doit rester à quai … <br />
          Rejoignez la flotte de l’Arcanis Boat Club.
        </p>
        <p>
          Au sein de la communauté de l’A.B.C. vous retrouvez :
        </p>
        <ul>
          <li>10 000 bateaux – et leurs capitaines.</li>
          <li>Un lancement et une distribution équitable : tous les bateaux coûtent 0.02 ETH.</li>
          <li>Un accès au Discord VIP du Arcanis Boat Club. Vous y échangez librement avec d’autres capitaines de tous horizons.</li>
          <li>Un accès aux coulisses. Vous découvrez le processus de création des œuvres Arcanis Design.</li>
          <li>Encore plus d’avantages à découvrir en franchissant les paliers de la carte au trésor…</li>
        </ul>
      </div>
      <div className={styles.actions}>
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
  )
}