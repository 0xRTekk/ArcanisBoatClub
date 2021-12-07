import React, { useEffect } from "react";
import "./gif.css";
import gif from "../../assets/images/presentation_gif.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Gif = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const { t, i18n } = useTranslation("common");
  return (
    <div className="gif-component">
      <div data-aos="fade-down" data-aos-duration="800" className="gif-left-side">
        <h1>{t("presentation.title")}</h1>
        <p className="h1-class">{t("presentation.subtitle")}</p>
        <p>{t("presentation.desc1")}</p>
        <p>{t("presentation.desc2")}</p>
        <p>{t("presentation.desc3")}</p>
      </div>
      <div data-aos="fade-down" data-aos-duration="1000" className="gif-pyramid">
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Gif;
