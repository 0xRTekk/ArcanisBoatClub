import Image from 'next/image'
import styles from "./Footer.module.css";
import footerLogo from "../../public/assets/images/logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <Image 
        src={footerLogo}
        width="100px"
        height="100px"
        alt="Arcanis Boat Club Logo" />
      </div>
      <span>©2021 Arcanis Boat Club. Tous droits résérvés.</span>
    </div>
  )
}