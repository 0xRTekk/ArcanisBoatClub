import styles from "./Banner.module.css";
import bannerPicture from '../../public/assets/images/9.png'
import Image from 'next/image'

export default function Banner() {
  return(
    <div className={styles.banner}>
      <div className={styles.intro}>
        <h1>ARCANIS BOAT CLUB <span>10 000 bateaux attendant leur capitaine.</span></h1>
        <p>
          Bienvenue à l’Arcanis Boat Club ! <br />
          Ici vous allez découvrir les premières œuvres d’art génératif d’Arcanis. <br />
          Qu’est-ce que l’art génératif ? <br />
          C’est une pratique utilisant des algorithmes pour générer de manière autonome une œuvre.
        </p>
        <p>
          Arcanis fait son entrée dans le monde de l’art digital par la grande porte et délivre une série de 10 000 bateaux exclusifs naviguant sur la blockchain Ethereum. <br />
          Ils attendent leur capitaine.
        </p>
        <p>
          Notre équipe vous permet de découvrir l’univers des NFT, quelle meilleure manière que d’y accoster à bord de votre propre navire ? <br />
          Ces NFTs s’inspirent de l’art physique déjà reconnu d’Arcanis. <br />
          Bientôt, de véritables bijoux numériques seront à votre disposition… Lequel aurez-vous la chance de posséder ? 
        </p>
        <button className={styles.cta}>Voir sur OpenSea</button>
      </div>

        <div className={styles.picture}>
          <Image 
            src={bannerPicture}
            placeholder="blur"
            layout='responsive'
            priority
          />
      </div>
    </div>
  )
}