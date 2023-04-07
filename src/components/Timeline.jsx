import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { timeline } from '../constant/dataAbout';

const TimeLine = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='col l-8 l-o-2 text-center mb-[100px]'>
            <div className="hz-subhead-line">
                <div className="hz-subhead-line_deco-line"></div>
                <div className="hz-subhead-line__label">HISTORY</div>
                <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>
            {
                
                timeline.map((item, _) => {
                    return (
                        <div className='mt-[40px]' key={item.id} data-aos="fade-up" data-aos-delay="50">
                            <h2 className='text-xs font-bold tracking-widest text-gray-500'>{item.date}</h2>
                            <h1 className='text-lg mt-3 w-[70%] m-auto'>{item.title}</h1>
                            <p className='text-gray-500 text-md my-7 w-[60%] sm:w-[85%] mx-auto text-justify'>{item.decs}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TimeLine;