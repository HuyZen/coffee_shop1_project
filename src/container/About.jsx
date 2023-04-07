import React from 'react';
import * as dataImg from '../constant/dataImg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MemberList from '../components/MemberList';
import TimeLine from '../components/Timeline';
import Footer from './Footer';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="col l-12 t-12 c-12 mt-[60px]">
      <div className="overflow-hidden col l-8 l-o-2">
        <div className="text-center">
          <div className="text-center">
            <h1 className="text-4xl">About</h1>
            <p className="text-lg text-gray-500 my-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat.
            </p>
            <img
              className="h-[500px] my-[80px] w-full ndv__img"
              src={dataImg.BgAbout1}
              alt="about"
            />
          </div>
          <div data-aos="fade-down">
            <div className="hz-subhead-line">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label">INTRODUCTIONS</div>
              <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>
            <h1 className="text-3xl mt-7 w-[70%] m-auto">
              Overlaid the jeepers uselessly much excluding everyday life.
            </h1>
            <p className="text-gray-500 text-md my-7 ">
              It is a paradisematic country, in which roasted parts of sentences fly into your
              mouth. Even the all-powerful Pointing has no control about the blind texts it is an
              almost unorthographic life One day however a small line of blind text by the name of
              Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
          </div>
          <div
            className="flex my-[80px] text-left sm:flex-wrap md:flex-wrap"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={dataImg.About1}
              className="w-[460px] h-[380px] ndv__img shrink-0 md:w-full"
              alt="about_Img"
            />
            <div className="my-auto ml-16 sm:ml-0 sm:text-center md:w-full md:ml-0 md:text-center">
              <h1 className="m-auto text-2xl mt-7">
                Overlaid the jeepers uselessly much excluding everyday life.
              </h1>
              <p className="text-gray-500 text-md my-7 ">
                It is a paradisematic country, in which roasted parts of sentences fly into your
                mouth. Even the all-powerful Pointing has no control about the blind texts it is an
                almost unorthographic life One day however a small line of blind text by the name of
                Lorem Ipsum decided to leave for the far World of Grammar.
              </p>
            </div>
          </div>
          <div
            className="flex my-[80px] text-left flex-row-reverse sm:flex-col md:flex-wrap"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={dataImg.About2}
              className="w-[460px] h-[380px] ndv__img shrink-0 ml-16 sm:ml-0 md:w-full"
              alt="about_Img"
            />
            <div className="my-auto sm:text-center md:w-full md:ml-0 md:text-center">
              <h1 className="m-auto text-2xl mt-7">
                Overlaid the jeepers uselessly much excluding everyday life.
              </h1>
              <p className="text-gray-500 text-md my-7 ">
                It is a paradisematic country, in which roasted parts of sentences fly into your
                mouth. Even the all-powerful Pointing has no control about the blind texts it is an
                almost unorthographic life One day however a small line of blind text by the name of
                Lorem Ipsum decided to leave for the far World of Grammar.
              </p>
            </div>
          </div>
          <div className="hz-subhead-line mb-[80px]">
                <div className="hz-subhead-line_deco-line"></div>
                <div className="hz-subhead-line__label">TEAM MEMBERS</div>
                <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
          </div>
          <MemberList />
        </div>
      </div>
      {/* Parallax */}
      <div
        style={{ backgroundImage: `url(${dataImg.BgAbout2})` }}
        className="lg:h-[350px] h-[250px]  bg-cover bg-fixed bg-center w-[100vw] relative left-[calc(-50vw+50%)] mt-[40px] mb-[70px]"
      ></div>
      <TimeLine />
      <Footer/>
    </div>
  );
};

export default About;
