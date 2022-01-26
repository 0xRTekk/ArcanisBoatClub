import SocialCta from './social';
import styles from './Socials.module.css';
import Link from 'next/link';

import discord from "../../public/assets/images/discord.svg";
import twitter from "../../public/assets/images/twitter.svg";
import instagram from "../../public/assets/images/instagram.svg";
import youtube from "../../public/assets/images/youtube.svg";
import facebook from "../../public/assets/images/facebook.svg";
import tiktok from "../../public/assets/images/tiktok.svg";

export default function Socials() {
  return(
    <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.row, styles.socials}
    >
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
  )
}