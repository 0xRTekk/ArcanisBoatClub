import Image from 'next/image'
import Cta from '../Cta/cta'
import styles from './Artist.module.css'
import arcanis_pic from '../../public/assets/images/arcanis_pic.jpg'
import Link from 'next/link'

export default function Artist() {
  return (
    <div 
      data-aos="fade-down"
      data-aos-duration="1000"
      date-aos-delay="1000"
      className={styles.artist}>
      <h2>Arcanis</h2>
      <section className={styles.about}>
        <section className={styles.bio}>
          <p>Au départ, <strong>Arcanis</strong> n’était pas voué à une carrière dans l’art, et pourtant …</p>
            <p>
              Véritable produit des années 90, Arcanis retranscrit tout son héritage culturel, son histoire, et sa technique via son concept <strong>« Le Bateau »</strong>.
            </p>
            <p>
              Arcanis étend la vision de son art en nous proposant une <strong>collection de NFTs basée sur le concept de ses oeuvres physiques</strong>.
            </p>
            <Link href="/artist" passHref>
            <Cta
              title="Rencontre avec l'artiste"
              className={styles.cta}
            />
            </Link>
            
        </section>
        <div className={styles.picture}>
          <Image 
            src={arcanis_pic}
            layout="responsive"
            alt="Photo de l'artiste Arcanis"
          />
        </div>
      </section>
    </div>
  )
}