import React, { useEffect } from "react";
import "./team.css";
import arcanis from "../../assets/images/9.png";
import tekky from "../../assets/images/15.png";
import darnom from "../../assets/images/17.png";
import Member from "./Member";
import AOS from "aos";
import "aos/dist/aos.css";

const Team: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="team" data-aos="fade-down" data-aos-duration="1200">
      <h2>Meet the Team</h2>
      <div className="team-list">
        <Member
          memberName="Arcanis"
          memberRole="Artist"
          memberImg={arcanis}
          fadeDirection="fade-right"
          fadeDuration="800"
        />
        <Member
          memberName="Tekky"
          memberRole="Developper"
          memberImg={tekky}
          fadeDirection="fade-down"
          fadeDuration="1500"
        />
        <Member
          memberName="Darnom"
          memberRole="Gallery owner"
          memberImg={darnom}
          fadeDirection="fade-left"
          fadeDuration="800"
        />
      </div>
    </div>
  );
};

export default Team;
