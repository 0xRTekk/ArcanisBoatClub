import styles from "./Roadmap.module.css";

export default function Roadmap() {
  return (
    <div className={styles.inner_wrapper}>
      <div className="unknown-div">
        <div className="vertical-line"></div>
        <div className="roadmap">
          <div>
            <p className="line-line"></p>
            <p className="diamond-raod">
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>00%</span>
              <h2>L&#39;Arcanis Boat Club</h2>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              Votre pseudo sera rajouter sur l&#39;oeuvre d&#39;art final qui representera le ArcanisBoatClub qui fera l&#39;oeuvre d&#39;une grande video en plusieur partie sur youtube
            </p>
          </div>
          <div>
            <p className="diamond-raod">
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>20%</span>
              <h2>Radio LoFi</h2>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              Creation de la radio Lofi qui diffusera H24 LES 10000 NFT et de la super musique
            </p>
          </div>
          <div>
            <p className="diamond-raod first-diamond">
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>40%</span>
              <h2>50 000€</h2>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              Donnation de 50 000 € de cadeaux en tout genre (rolex,maroquinerie etc ) et 100 Pendentifs ABC 
            </p>
          </div>
          <div>
            <p className="diamond-raod">
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>60%</span>
              <h2>Merchandising</h2>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              Creation du Merchandising
            </p>
          </div>
          <div>
            <p className="diamond-raod">
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>80%</span>
              <h2>Projet secret</h2>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              On devoile le projet secret aux membres du ABC 
            </p>
          </div>
          <div>
            <p className="diamond-raod">
            </p>
            <div data-aos-duration="700" data-aos="fade-left" style={{ display: "flex", alignItems: "center" }}>
              <span>100%</span>
              <h2>100 000 €</h2>
            </div>
            <p data-aos-duration="1000" data-aos="fade-left">
              Cn capitaine sera tiré au sort et gagnera 100 000€ de crypto de son choix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
