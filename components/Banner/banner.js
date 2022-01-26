import Cta from '../Cta/cta'
import styles from "./Banner.module.css"
import bannerPicture from '../../public/assets/images/9.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return(
    <div 
      data-aos="fade-down"
      data-aos-duration="1000"
      className={styles.banner}>

      <header className={styles.intro_heading}>
        <h1>ARCANIS BOAT CLUB <span>10 000 bateaux attendant leur capitaine.</span></h1>
      </header>

      <section className={styles.intro_text}>
        <p>
          <strong>Bienvenue à l’Arcanis Boat Club !</strong> <br />
          Ici vous allez découvrir les premières <strong>œuvres d’art génératif d’Arcanis</strong>. <br />
          Qu’est-ce que l’art génératif ? <br />
          C’est une pratique utilisant des algorithmes pour générer de manière autonome une œuvre.
        </p>
        <p>
          Arcanis fait son entrée dans le <strong>monde de l’art digital</strong> par la grande porte et délivre une série de <strong>10 000 bateaux exclusifs</strong> naviguant sur la <strong>blockchain Ethereum</strong>. <br />
          Ils attendent leur capitaine.
        </p>
        <p>
          Notre équipe vous permet de découvrir <strong>l’univers des NFT</strong>, quelle meilleure manière que d’y accoster à bord de votre propre navire ? <br />
          Ces NFTs s’inspirent de <strong>l’art physique déjà reconnu d’Arcanis</strong>. <br />
          Bientôt, de véritables bijoux numériques seront à votre disposition… Lequel aurez-vous la chance de posséder ?
        </p>
        <Link href="https://opensea.io/collection/arcanisboatclub/" passHref>
          <Cta
            title='Mint à venir'
          />
        </Link>
      </section>

        <div className={styles.picture}>
          <Image 
            src={bannerPicture}
            placeholder="blur"
            layout='responsive'
            priority
            alt='Image NFT Arcanis Boat Club'
          />
      </div>
    </div>
  )
}