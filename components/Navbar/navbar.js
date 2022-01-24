import Link from 'next/link'
import Image from 'next/image'
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div data-aos-duration="700" data-aos="fade-down" className={styles.navbar}>
      <div className={styles.logo}>
        <Image 
          src="/assets/images/logo.png"
          width="150px"
          height="150px"
          alt='Arcanis Boat Club Logo'
        />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">
              <a><span>01.</span>Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="/artist">
              <a><span>02.</span>Artiste</a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a><span>03.</span>Carte au trésor</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a><span>04.</span>Equipe</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <button>Connect Wallet</button>
        {/* <button onClick={() => i18n.changeLanguage("fr")}>fr</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button> */}
        {/* <button className="connect-btn">Connect</button> */}
      </div>
    </div>
  )
}
