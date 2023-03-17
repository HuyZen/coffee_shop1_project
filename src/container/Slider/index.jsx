import React from 'react';
import ImgSlider from '../../assets/slider1.png';

function Slider(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${ImgSlider})`,
      }}
      className="bg-cover bg-top bg-no-repeat h-[680px] sld:h-[500px] sld2:h-[380px] sld3:h-[240px]"
    ></div>
  );
}

export default Slider;
