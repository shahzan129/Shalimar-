import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://crazzyhub.s3.amazonaws.com/media/slider/iphone-16-web-new2.webp" />
      </div>
      <div>
        <img src="https://crazzyhub.s3.amazonaws.com/media/slider/one-plus13s-680f4fe607b7d.webp" />
      </div>
      <div>
        <img src="https://crazzyhub.s3.amazonaws.com/media/slider/samsung-s25-ultra-offers-67f91953dcc27.webp" />
      </div>
      <div>
        <img src="https://crazzyhub.s3.amazonaws.com/media/slider/Xiaomi-15Series-Available-Now-at-Poorvika-67f361aeae3b9.webp" />
      </div>
      <div>
        <img src="https://crazzyhub.s3.amazonaws.com/media/slider/nothing-2a-680f76852a66b.webp" />
      </div>

    </Slider>
  );
}
