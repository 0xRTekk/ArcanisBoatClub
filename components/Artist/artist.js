import Image from 'next/image'
import styles from './Artist.module.css'
import arcanis_pic from '../../public/assets/images/arcanis_pic.webp'

export default function Artist() {
  return (
    <div className={styles.artist}>
      <h2>L'artiste - Arcanis</h2>
      <div className={styles.about}>
        <div className={styles.bio}>
          <p>Au départ, Arcanis n’était pas voué à une carrière dans l’art, et pourtant …</p>
          <p>
            En combinant ses compétences en métallurgie et son ingéniosité, Arcanis trouve sa propre voie et développe son art. Il se lance dans la sculpture, le premier pas vers son positionnement d’artiste. <br />
            C’est un des premiers français à ramener le style Low Poly Papercraft et à le retranscrire sur du métal : sa marque de fabrique est née.
            </p>
            <p>
            Véritable produit des années 90, Arcanis retranscrit tout son héritage culturel, son histoire, et sa technique via son concept « Le Bateau ».
            </p>
            <p>
            Arcanis étend la vision de son art en nous proposant une collection de NFTs basée sur le concept du « Bateau ».
            </p>
            <button>Rencontrez le capitaine</button>
        </div>
        <div className={styles.picture}>
          <Image 
            src={arcanis_pic}
          />
        </div>
      </div>
    </div>
  )
}