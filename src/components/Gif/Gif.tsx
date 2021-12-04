import React, { useEffect } from "react";
import "./gif.css";
import gif from "../../assets/images/presentation_gif.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Gif = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="gif-component">
      <div data-aos="fade-down" data-aos-duration="800" className="gif-left-side">
        <h1>Arcanis Boat Club</h1>
        <p className="h1-class">10,000 generated boats waiting for their captain.</p>
        <p>The Arcanis Boat Club is a series of 10,000 uniquely generated boats sailing the etehreum blockchain.</p>
        <p>Each NFTs is unique and is based on the physical artwork of Arcanis Design.</p>
        <p>Each boat's part are physically used on a real piece of art signed Arcanis Design !</p>
      </div>
      <div data-aos="fade-down" data-aos-duration="1000" className="gif-pyramid">
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Gif;
