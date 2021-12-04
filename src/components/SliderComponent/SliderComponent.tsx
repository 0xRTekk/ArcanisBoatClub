import React, { useEffect } from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import boat_01 from "../../assets/images/1.png";
import boat_02 from "../../assets/images/2.png";
import boat_03 from "../../assets/images/3.png";
import boat_04 from "../../assets/images/4.png";
import boat_05 from "../../assets/images/5.png";
import boat_06 from "../../assets/images/6.png";
import boat_07 from "../../assets/images/7.png";
import boat_08 from "../../assets/images/8.png";
import boat_09 from "../../assets/images/9.png";
// import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
const data1: Array<string> = [
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

const SliderComponent: React.FC = () => {
  // useEffect(() => {
  //   AOS.init({});
  // }, []);
  const settings = {
    autoplay: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="slider-container"
    >
      <h2>Last minted NFTs</h2>
      <Slider className="slider-component" {...settings}>
        {data1?.map((item, index) => (
          <div className="each-slide" key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderComponent;
