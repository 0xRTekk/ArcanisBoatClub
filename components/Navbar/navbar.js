import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import Image from 'next/image';
import Socials from '../Cta/socials';
import styles from "./navbar.module.css";

export default function Navbar() {

  const burgerMenuStyles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: '0',
      height: '100%',
      width: '80%',

    },
    bmMenu: {
      background: '#272727',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between',
      padding: '1em',

      color: '#b8b7ad',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  };


  return (
    <div data-aos-duration="500" data-aos="fade-down" className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
              <Image
                src="/assets/images/logo.png"
                width="150px"
                height="150px"
                alt='Arcanis Boat Club Logo'
              />
          </a>
        </Link>
        
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/roadmap">
              <a>Carte au trésor</a>
            </Link>
          </li>
          <li>
            <Link href="/artist">
              <a>Artiste</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Equipage</a>
            </Link>
          </li>
        </ul>
        <div className={styles.actions}>
          <button>Connect Wallet</button>
          {/* <button onClick={() => i18n.changeLanguage("fr")}>fr</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button> */}
          {/* <button className="connect-btn">Connect</button> */}
        </div>
      </nav>

      <Menu 
        styles={burgerMenuStyles} 
        right
        disableAutoFocus
        className={styles.burgerMenu}
      >
        <ul className={styles.burgerMenu__navList}>
          <li className={styles.burgerMenu__navListItemLogo}>
            <Link href="/">
              <a>
                <Image
                  src="/assets/images/logo.png"
                  width="150px"
                  height="150px"
                  alt='Arcanis Boat Club Logo'
                />
              </a>
              </Link>
          </li>
          <li className={styles.burgerMenu__navListItem}>
            <Link href="/roadmap">
              <a>Carte au trésor</a>
            </Link>
          </li>
          <li className={styles.burgerMenu__navListItem}>
            <Link href="/artist">
              <a>Artiste</a>
            </Link>
          </li>
          <li className={styles.burgerMenu__navListItem}>
            <Link href="/team">
              <a>Equipage</a>
            </Link>
          </li>
        </ul>
        <div className={styles.socials} >
          <Socials />
        </div>
      </Menu>
    </div>
  )
}
