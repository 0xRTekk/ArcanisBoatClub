import { CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CContainer, CCollapse, CNavItem, CNavLink } from '@coreui/react';
import Link from 'next/link'
import Image from 'next/image'
import styles from "./navbar.module.css";
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

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
  // const { visible, setVisible } = false;
  // return (
  //   <>
  //     <CNavbar expand="md">
  //       <CContainer fluid>
  //         <CNavbarToggler
  //           aria-label="Toggle navigation"
  //           aria-expanded={visible}
  //           onClick={() => setVisible(!visible)}
  //         />
  //         <CCollapse className="navbar-collapse" visible={visible}>
  //           <CNavbarBrand href="/">
  //             <Image
  //               src="/assets/images/logo.png"
  //               width="100px"
  //               height="100px"
  //               alt='Arcanis Boat Club Logo'
  //             />
  //           </CNavbarBrand>
  //           <CNavbarNav className="me-auto mb-2 mb-lg-0">
  //             <CNavItem>
  //               <Link href="/">
  //                 <a>Home</a>
  //               </Link>
  //             </CNavItem>
  //             <CNavItem>
  //               <Link href="/artist">
  //                 <a>Artist</a>
  //               </Link>
  //             </CNavItem>
  //             <CNavItem>
  //               <Link href="/roadmap">
  //                 <a>Roadmap</a>
  //               </Link>
  //             </CNavItem>
  //             <CNavItem>
  //               <Link href="/team">
  //                 <a>Team</a>
  //               </Link>
  //             </CNavItem>
  //           </CNavbarNav>
  //         </CCollapse>
  //       </CContainer>
  //     </CNavbar>
  //   </>
  // )
}
