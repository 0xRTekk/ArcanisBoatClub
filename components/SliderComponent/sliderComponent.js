import Slider from "react-slick";
import Image from 'next/image'
import styles from "./SliderComponent.module.css";
import boat_02 from "../../public/assets/images/2.png";
import boat_01 from "../../public/assets/images/1.png";
import boat_03 from "../../public/assets/images/3.png";
import boat_04 from "../../public/assets/images/4.png";
import boat_05 from "../../public/assets/images/5.png";
import boat_06 from "../../public/assets/images/6.png";
import boat_07 from "../../public/assets/images/7.png";
import boat_08 from "../../public/assets/images/8.png";
import boat_09 from "../../public/assets/images/9.png";


export default function SliderComponent() {
  const settings = {
    autoplay: true,
    atoplaySpeed: 1000,
    centerMode: true,
    infinite: true,
    dots: true,
    // centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const data1 = [
    boat_01,
    boat_02,
    boat_03,
    boat_04,
    boat_05,
    boat_06,
    boat_07,
    boat_08,
    boat_09,
  ];

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className={styles.slider_container}
    >
      <h2>La flotte</h2>
      <p>
        En <em>achetant un NFT</em> vous devenez <strong>membre du Arcanis Boat Club (A.B.C.)</strong>. <br />
        Vous naviguez dans un tout nouvel univers concocté par le Commandant Arcanis et une <strong>multitude d’avantages</strong> s’offrent à vous. <br />
        <strong>Plus qu’un simple club</strong>, en devenant capitaine de votre bateau vous faites partie d’<strong>une véritable communauté</strong>. 
      </p>
      <Slider className={styles.slider_component} {...settings}>
        {data1?.map((item, index) => (
          <div className={styles.each_slide} key={index}>
            <Image
              className={styles.picture}
              src={item}
              placeholder="blur"
              // layout='responsive'
              alt="Boat NFT"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
