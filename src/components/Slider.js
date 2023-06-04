import React from 'react';
import Slider from 'react-slick';

const CustomSlider = ({ sliderImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  };

  return (
    <Slider {...settings}>
      {sliderImages.map(sliderImage => (
        <div key={sliderImage.id} >
          <img
            src={sliderImage.image}
            alt={""}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
