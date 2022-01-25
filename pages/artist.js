import Layout from '../components/Layout/layout.js'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import arcanis_pic from '../public/assets/images/arcanis_pic.webp'
import styles from '../public/assets/styles/Artist.module.css'

const meta = {
  'title': 'L\'artiste - Arcanis',
  'description': 'Au départ, Arcanis n’était pas voué à une carrière dans l’art, et pourtant... En combinant ses compétences en métallurgie et son ingéniosité, Arcanis trouve sa propre voie et développe son art.Il se lance dans la sculpture, le premier pas vers son positionnement d’artiste. C’est un des premiers français à ramener le style Low Poly Papercraft et à le retranscrire sur du métal: sa marque de fabrique est née.'
}

export default function Artist() {
  return(
    <Layout artist>
      <div className={styles.wrapper}>
        <h1>L&#39;artiste - Arcanis</h1>
        <div className={styles.artist}>
          <div className={styles.bio}>
            <p>
              Au départ, Arcanis n’était pas voué à une carrière dans l’art, et pourtant …
            </p>
            <p>
              Diplômé d’un simple BEP, il commence une profession de métallier. Il participe par la suite aux olympiades des métiers, organisées par les meilleurs ouvriers de France et en ressort doublement médaillé.
              C’est en travaillant en Suisse dans un palace situé à Gstaad que son talent artistique s’est éveillé. Il y rencontre de nombreuses œuvres d’art de tous genres confondus et tombe en admiration devant ce savoir-faire. Il se dit alors : Pourquoi pas moi ?
            </p>
            <p>
              En combinant ses compétences et son ingéniosité, Arcanis trouve sa propre voie et développe son art. Il utilise ses connaissances en métallurgie et se lance dans la sculpture, le premier pas vers son positionnement d’artiste.
              C’est un des premiers français à ramener le style Low Poly Papercraft et à le retranscrire sur du métal : sa marque de fabrique est née. Il associe un savoir-faire artisanal agrémenté d’un certain esthétisme qui aboutit à un savant mélange entre la dureté du métal et la douceur de l’art. Une conception osée et affirmée qui représente parfaitement Arcanis.
            </p>
            <p>
              Véritable produit des années 90, Arcanis retranscrit tout son héritage culturel, son histoire, et sa technique via son concept « Le Bateau ».
              Ses œuvres offrent une nouvelle élégance à des licences issues des univers manga et geek qui ont bercé son enfance. Il veut ensuite pouvoir admirer ses franchises de vêtements favorites dans son intérieur. Il commence donc à utiliser des marques haut de gamme telles que Hermès ou Louis Vuitton, qui subliment son concept. L’hégémonie du style marin et le raffinement de la haute couture trouvent ici un équilibre impeccable.
              Il s’attaque ensuite au monde de l’automobile, à la maroquinerie, et va jusqu’à faire un clin d’œil à de grands noms du design comme Charles et Ray Eames.
              L’engouement autour d’Arcanis en témoigne, « Le Bateau » se mêle à tous les milieux et met tout le monde d’accord.
            </p>
            <p>
              Arcanis raconte son évolution dans ses œuvres et démontre qu’avec de la passion et un certain savoir-faire, tout est possible.
              La richesse de ses influences, et sa volonté à se connecter au plus grand nombre lui assure un futur prometteur. Il vous invite dans un univers affirmé et novateur qui éblouit par la beauté du geste et la précision de l’exécution. Un renouveau qui ne cessera de vous étonner.
            </p>
          </div>
          <div className={styles.picture}>
            <Image
              src={arcanis_pic}
              alt="Photo d'Arcanis"
            />
          </div>
        </div>
        <div className={styles.actions}>
          <h2>Retrouvez les oeuvres d&#39;Arcanis sur ses différentes plateformes</h2>
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
                <a>Rencontrez l&#39;équipage</a>
              </Link>
            </div>
            <div>
              <a href='https://www.arcanis.design/' target="_blank" rel="noreferrer">Oeuvres physiques</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}