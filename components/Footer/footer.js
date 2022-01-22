import Image from 'next/image'
import "./Footer.module.css";
import discord from "../../public/assets/images/discord.svg";
import twitter from "../../public/assets/images/twitter.svg";
import instagram from "../../public/assets/images/instagram.svg";
import youtube from "../../public/assets/images/youtube.svg";
import facebook from "../../public/assets/images/facebook.svg";
import tiktok from "../../public/assets/images/tiktok.svg";
import footerLogo from "../../public/assets/images/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <a className="footer-left-a" href="https://arcanis.design/ ">
         E-shop Acranis Design
        </a>
        <a className="footer-left-a" href="https://opensea.io/collection/arcanisboatclub ">
          Collection OpenSea
        </a>
        {/* <a className="footer-left-a" href="/">
          {t("footer.link.terms")}
        </a>
        <a className="footer-left-a" href="/">
          {t("footer.link.smartcontract")}
        </a> */}
      </div>
      <div className="footer-center">
        <div className="footer-logo">
          <Image src={footerLogo} alt="Arcanis Boat Club Logo" />
        </div>
        <span>©2021 Arcanis Boat Club. Tous droits résérvés.</span>
      </div>
      <div className="footer-right">
        <div className=" footer-icons">
          <div className="row">
            <a href="https://twitter.com/ArcanisDesign/">
              <Image
                src={twitter}
              />
            </a>
            <a href="https://www.instagram.com/arcanis.design/">
              <Image
                src={instagram}
              />
            </a>
            <a href="https://discord.gg/zmB9CHc2pp">
              <Image
                src={discord}
              />
            </a>
          </div>
          <div className="row">
            <a href="https://www.youtube.com/channel/UCeRwKsQfnLTtjk1fQD7Kedg/">
              <Image
                src={youtube}
              />
            </a>
            <a href="https://www.tiktok.com/@arcanis.design">
              <Image
                src={tiktok}
              />
            </a>
            <a href="https://www.facebook.com/Arcanis.design">
              <Image
                src={facebook}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}