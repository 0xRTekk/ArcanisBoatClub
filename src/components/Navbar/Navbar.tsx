import React, { useEffect } from "react";
import "./navbar.css";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Logo } from "../../assets/icons/vandal_white.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [t, i18n] = useTranslation("common");

  return (
    <div data-aos-duration="700" data-aos="fade-down" className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="ext-icons">
        <a href="https://twitter.com/ArcanisDesign/">
          <Twitter />
        </a>
        <a href="https://www.instagram.com/arcanis.design/">
          <Instagram />
        </a>
        <a href="">
          <Discord />
        </a>
        {/* <button onClick={() => i18n.changeLanguage("fr")}>fr</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button> */}
        {/* <button className="connect-btn">Connect</button> */}
      </div>
    </div>
  );
};

export default Navbar;
