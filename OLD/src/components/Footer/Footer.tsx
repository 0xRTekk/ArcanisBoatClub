import React, { useEffect } from "react";
import "./footer.css";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Tiktok } from "../../assets/icons/tiktok.svg";

import footerLogo from "../../assets/icons/vandal_white.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const { t, i18n } = useTranslation("common");
  return (
    <div className="footer">
      <div className="footer-left">
        <a className="footer-left-a" href="https://arcanis.design/ ">
          {t("footer.link.shop")}
        </a>
        <a className="footer-left-a" href="https://opensea.io/collection/arcanisboatclub ">
          {t("footer.link.opensea")}
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
          <img src={footerLogo} alt="Arcanis Boat Club Logo" />
        </div>
        <span>{t("footer.copyright")}</span>
      </div>
      <div className="footer-right">
        <div className=" footer-icons">
          <div className="row">
            <a href="https://twitter.com/ArcanisDesign/">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/arcanis.design/">
              <Instagram />
            </a>
            <a href="https://discord.gg/zmB9CHc2pp">
              <Discord />
            </a>
          </div>
          <div className="row">
            <a href="https://www.youtube.com/channel/UCeRwKsQfnLTtjk1fQD7Kedg/">
              <Youtube />
            </a>
            <a href="https://www.tiktok.com/@arcanis.design">
              <Tiktok />
            </a>
            <a href="https://www.facebook.com/Arcanis.design">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
