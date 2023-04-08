import React from 'react';
import ImgSlider from '../assets/images/slider1.png';

function Slider(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${ImgSlider})`,
      }}
      className="bg-cover bg-top bg-no-repeat h-[680px] md:h-[380px] sm:h-[240px]"
    ></div>
  );
}

export default Slider;
