import React, { useEffect } from "react";
import "./footer.css";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Opensea } from "../../assets/icons/opensea.svg";
import footerLogo from "../../assets/icons/vandal_white.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="footer">
      <div className="footer-left">
        <a className="footer-left-a" href="/">
          Home
        </a>
        <a className="footer-left-a" href="#/terms">
          Terms & Conditions
        </a>
        <a className="footer-left-a" href="/">
          Smart Contract
        </a>
      </div>
      <div className="footer-center">
        <div className="footer-logo">
          <img src={footerLogo} alt="Arcanis Boat Club Logo" />
        </div>
        <span>©2021 Arcanis Boats Club. All rights reserved.</span>
      </div>
      <div className="footer-right">
        <div className=" footer-icons">
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <Opensea />
          </a>
          <a href="">
            <Discord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
