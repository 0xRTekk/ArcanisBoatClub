import React, { useEffect } from "react";
import "./team.css";
import arcanis from "../../assets/images/9.png";
import tekky from "../../assets/images/15.png";
import darnom from "../../assets/images/17.png";
import Member from "./Member";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const { t, i18n } = useTranslation("common");
  return (
    <div className="team" data-aos="fade-down" data-aos-duration="1200">
      <h2>{t("team.title")}</h2>
      <div className="team-list">
        <Member
          memberName="Arcanis"
          memberRole={t("team.artist")}
          memberImg={arcanis}
          fadeDirection="fade-right"
          fadeDuration="800"
        />
        <Member
          memberName="Tekky"
          memberRole={t("team.dev")}
          memberImg={tekky}
          fadeDirection="fade-down"
          fadeDuration="1500"
        />
        <Member
          memberName="Darnom"
          memberRole={t("team.gallery")}
          memberImg={darnom}
          fadeDirection="fade-left"
          fadeDuration="800"
        />
      </div>
    </div>
  );
};

export default Team;
