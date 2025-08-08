import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container ">
      <Slider  {...settings}>
        <div className='flex  bg-white gap-3  '>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/One-Plus.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/xiaomi_6ErGXLc.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/portronics.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/Oppo.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/boat.png"/>
        </div>
        <div>
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/jbl.png"/>
        </div>
        <div>
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/motorola.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/fire-bolt.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/Redme.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/xiaomi.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/lava.png"/>
        </div>
        <div className="rounded-full border border-gray-400">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/lenovo.png"/>
        </div>
        <div>
          <img src=''/>
        </div>
      </div>
    
      </Slider>
    </div>
  );
}

export default AutoPlay;
