import React from 'react';
import Slider from 'react-slick/lib/slider';

const TextSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: 'linear',
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {data.map((item, idx) => (
        <div className="my-4 text-center" key={idx}>
          <p style={{ fontSize: '30px' }}>{item.one}</p>
          <p style={{ fontSize: '30px', marginBottom: '2em' }}>{item.two}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TextSlider;
