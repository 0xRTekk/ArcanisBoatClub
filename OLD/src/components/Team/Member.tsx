import React, { useEffect } from "react";
import "./team.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface ImgType {
  memberImg?: string;
  memberName?: string;
  memberRole?: string;
  fadeDirection?: string;
  fadeDuration?: string;
}

const Member: React.FC<ImgType> = ({
  memberImg,
  memberName,
  memberRole,
  fadeDirection,
  fadeDuration
}) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="team-member">
      <div data-aos-duration={fadeDuration} data-aos={fadeDirection} className="member-clone">
        <div className="member-details">
          <h3>
            {memberName}
            <span> / {memberRole}</span>
          </h3>
        </div>
        <img src={memberImg} alt="" />
      </div>
    </div>
  );
};

export default Member;
