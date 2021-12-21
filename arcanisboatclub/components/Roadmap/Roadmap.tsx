import React, { useEffect } from "react";
import "./roadmap.css";
import { BsDiamondFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const { t, i18n } = useTranslation("common");
  return (
    <div className="roadmap-container">
      <div className="road-intro">
        <h2 data-aos-duration="700" data-aos="fade-down">
          {t("roadmap.title")}
        </h2>
        <p data-aos-duration="1000" data-aos="fade-down">
          {t("roadmap.desc")}
        </p>
      </div>
      <div className="unknown-div">
        <div className="vertical-line"></div>
        <div className="roadmap">
          <div>
            <p className="line-line"></p>
            <p className="diamond-raod">
              <BsDiamondFill size="21" color="#CE4B2A" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>15%</span>
              <h3>{t("roadmap.step.1.title")}</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              {t("roadmap.step.1.desc")}
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>30%</span>
              <h3>{t("roadmap.step.2.title")}</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              {t("roadmap.step.2.desc")}
            </p>
          </div>
          <div>
            <p className="diamond-raod first-diamond">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>45%</span>
              <h3>{t("roadmap.step.3.title")}</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              {t("roadmap.step.3.desc")}
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>60%</span>
              <h3>{t("roadmap.step.4.title")}</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              {t("roadmap.step.4.desc")}
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>75%</span>
              <h3>{t("roadmap.step.5.title")}</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              {t("roadmap.step.5.desc")}
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>90%</span>
              <h3>{t("roadmap.step.6.title")}</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              {t("roadmap.step.6.desc")}
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>100%</span>
              <h3>{t("roadmap.step.7.title")}</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              {t("roadmap.step.7.desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
