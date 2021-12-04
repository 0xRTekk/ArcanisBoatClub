import React, { useEffect } from "react";
import "./roadmap.css";
import { BsDiamondFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="roadmap-container">
      <div className="road-intro">
        <h2 data-aos-duration="700" data-aos="fade-down">
          Roadmap
        </h2>
        <p data-aos-duration="1000" data-aos="fade-down">
          To thank you for blowing your wind on our sails, we have prepared a magnificent roadmap full of beautiful surprises and gifts !  With each percentage of sales reached, exclusive offers and gifts await you! Join this adventure and be part of the OTE movement: Own To Earn
        </p>
      </div>
      <div className="unknown-div">
        <div className="vertical-line"></div>
        <div className="roadmap">
          <div>
            <p className="line-line"></p>
            <p className="diamond-raod">
              {/* <BsDiamondFill size="21" color="#c70d4e" /> */}
              <BsDiamondFill size="21" color="#CE4B2A" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>15%</span>
              <h3>Physical artwork Giveaway</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              <strong>50 owners will be offered a physical work ! </strong>
              <br />
              These works, real piece of art, will be the <strong>physical representation</strong> of one of the NFT
              possessed by the owner. You will have the chance to have an original work of art handmade representing
              your NFT !
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>30%</span>
              <h3>Radio LoFi</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              <strong>The Arcanis Boat Club</strong> gets its own lofi radio on YouTube and twitch which broadcasts it
              24 hours a day ! Come and enjoy the creative atmosphere of the Club and let yourself be inspired.
            </p>
          </div>
          <div>
            <p className="diamond-raod first-diamond">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>45%</span>
              <h3>Luxury accessories Giveaway</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              Members of the <strong>Arcanis Boat Club</strong> will be selected at random in order to be{" "}
              <strong>offered luxury accessories</strong> such as rolex (value 10 k), Dior, Chanel, Louis Vuitton,
              Hermes accessories in connection with the boat creations !
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>60%</span>
              <h3>Youtube artwork Giveaway</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              <strong>Very special masterpieces will be produced by Arcanis</strong>
              and you will be able to see it at work on Youtube. And guess what, they'll be{" "}
              <strong>gifted to a random member of the club !</strong>
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>75%</span>
              <h3>Merchandising line</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              <strong>Arcanis Boat Club's e-shop openig ! </strong>
              <br />
              Come and discover exclusively the line of merchandise specially reserved for the{" "}
              <strong>Arcanis Boat Club's members</strong> !
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>90%</span>
              <h3>Physical NFTs</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              Each NFT will be released in a <strong>physical version</strong> at a price of 150$ purchasable{" "}
              <strong>only by the Arcanis Boat Club's members.</strong>
              <br />
              Each table will be accompanied by an nfc chip !
            </p>
          </div>
          <div>
            <p className="diamond-raod">
              <BsDiamondFill size="21" />
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>100%</span>
              <h3>Final Giveaway</h3>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              A <strong>final 100,000$</strong> giveaway will be reserved for a random member of the{" "}
              <strong>Arcanis Boat Club</strong> !<br />
              It's worth finishing this <strong>roadmap</strong>, isn't it?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
