import Image from 'next/image';
import Link from 'next/link';
import styles from "./Roadmap.module.css";
import nft_badge from '../../public/assets/images/nft_badge_small.png';

export default function Roadmap() {
  return (
    <section className={styles.roadmap}>

      <div className={styles.line}>
        <div className={styles.progression}></div>
      </div>

      <div className={styles.start_line}>
        <Image 
          src={nft_badge}
          className={styles.start_line_picture}
          alt="bagde nft coming soon"
        />
      </div>

      <article data-aos-duration="700" data-aos="fade-right" className={styles.card}>
        <div className={styles.progression_dot}>
          <div className={styles.inner_dot}></div>
        </div>
        <header className={styles.title}>
          <span>00%</span>
          <h2>L&#39;Arcanis Boat Club</h2>
        </header>
        <p className={styles.description}>
          Votre pseudo sera rajouté sur l&#39;oeuvre d&#39;art final qui representera l&#39;ArcanisBoatClub. 
          Plusieurs vidéos sur se réalisation vous seront partagés sera sur <Link href="https://www.youtube.com/channel/UCeRwKsQfnLTtjk1fQD7Kedg/" ><a>YouTube</a></Link> !
        </p>
      </article>

      <article data-aos-duration="700" data-aos="fade-left" className={styles.card}>
        <div className={styles.progression_dot}>
          <div className={styles.inner_dot}></div>
        </div>
        <header className={styles.title}>
          <span>20%</span>
          <h2>Radio LoFi</h2>
        </header>
        <p className={styles.description}>
          Creation de la radio Lofi qui diffusera H24 LES 10000 NFT et de la super musique
        </p>
      </article>

      <article data-aos-duration="700" data-aos="fade-right" className={styles.card}>
        <div className={styles.progression_dot}>
          <div className={styles.inner_dot}></div>
        </div>
        <header className={styles.title}>
          <span>40%</span>
          <h2>50 000€</h2>
        </header>
        <p className={styles.description}>
          Donnation de 50 000 € de cadeaux en tout genre (rolex,maroquinerie etc ) et 100 Pendentifs ABC
        </p>
      </article>

      <article data-aos-duration="700" data-aos="fade-left" className={styles.card}>
        <div className={styles.progression_dot}>
          <div className={styles.inner_dot}></div>
        </div>
        <header className={styles.title}>
          <span>60%</span>
          <h2>Merchandising</h2>
        </header>
        <p className={styles.description}>
          Creation du Merchandising
        </p>
      </article>

      <article data-aos-duration="700" data-aos="fade-right" className={styles.card}>
        <div className={styles.progression_dot}>
          <div className={styles.inner_dot}></div>
        </div>
        <header className={styles.title}>
          <span>80%</span>
          <h2>L&#39;Arcanis Boat Club</h2>
        </header>
        <p className={styles.description}>
          On devoile le projet secret aux membres du ABC
        </p>
      </article>

      <article data-aos-duration="700" data-aos="fade-left" className={styles.card}>
        <div className={styles.progression_dot}>
          <div className={styles.inner_dot}></div>
        </div>
        <header className={styles.title}>
          <span>100%</span>
          <h2>L&#39;Arcanis Boat Club</h2>
        </header>
        <p className={styles.description}>
          Un capitaine sera tiré au sort et gagnera 100 000€ de crypto de son choix
        </p>
      </article>

    </section>
  );
}
