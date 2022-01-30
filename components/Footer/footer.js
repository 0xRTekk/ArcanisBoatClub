import Image from 'next/image';
import Link from 'next/link';
import styles from "./Footer.module.css";
import footerLogo from "../../public/assets/images/logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <Link href='/'>  
          <a>
            <Image
              src={footerLogo}
              width="100px"
              height="100px"
              alt="Arcanis Boat Club Logo" />
          </a>
        </Link>
      </div>
      <span>©2021 Arcanis Boat Club. Tous droits résérvés.</span>
    </div>
  )
}