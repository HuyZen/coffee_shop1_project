import React, { useEffect } from 'react';
import * as dataImg from '../../constant/dataImg'
import AOS from "aos";
import "aos/dist/aos.css";

const Parallax = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
        <div className="col l-12 t-12 c-12">
            <div
              style={{
                backgroundImage: `url(${dataImg.Parallax})`,
              }}
              className="lg:h-[350px] h-[250px]  bg-cover bg-fixed bg-center w-[100vw] relative left-[calc(-50vw+50%)] mt-[40px]"
            ></div>
        </div>
    </>
  )
}

export default Parallax