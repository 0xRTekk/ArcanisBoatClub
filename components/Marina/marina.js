import Link from 'next/link'
import Cta from '../Cta/cta'
import SocialCta from '../Cta/social'
import styles from './Marina.module.css'
import discord from "../../public/assets/images/discord.svg";
import twitter from "../../public/assets/images/twitter.svg";
import instagram from "../../public/assets/images/instagram.svg";
import youtube from "../../public/assets/images/youtube.svg";
import facebook from "../../public/assets/images/facebook.svg";
import tiktok from "../../public/assets/images/tiktok.svg";

export default function Marina() {
  return (
    <div className={styles.marina}>
      <div className={styles.manifesto}>
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
      </div>

      <div className={styles.row, styles.socials}>
        <Link href="https://discord.gg/zmB9CHc2pp" passHref>
          <SocialCta
            title="Discord"
            image={discord}
          />
        </Link>
        <Link href="https://www.youtube.com/channel/UCeRwKsQfnLTtjk1fQD7Kedg/" passHref>
          <SocialCta
            title="Youtube"
            image={youtube}
          />
        </Link>
        <Link href="https://www.tiktok.com/@arcanis.design" passHref>
          <SocialCta
            title="Tik Tok"
            image={tiktok}
          />
        </Link>
        <Link href="https://www.instagram.com/arcanis.design/" passHref>
          <SocialCta
            title="Instagram"
            image={instagram}
          />
        </Link>
        <Link href="https://twitter.com/ArcanisDesign/" passHref>
          <SocialCta
            title="Twitter"
            image={twitter}
          />
        </Link>
        <Link href="https://twitter.com/ArcanisDesign/" passHref>
          <SocialCta
            title="Facebook"
            image={facebook}
          />
        </Link>
      </div>

      <div className={styles.manifesto}>
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
      </div>
    </div>
  )
}