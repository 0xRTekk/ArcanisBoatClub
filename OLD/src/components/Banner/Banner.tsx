import React from "react";
import "./banner.css";
import Timer from "../Timer/Timer";
// import Mint from "../Mint/Mint";
const Banner: React.FC = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="timer-cont">
      {/* <Mint /> */}
      <Timer mintStartAt={1645568542} />
      </div>
    </div>
  );
};

export default Banner;
