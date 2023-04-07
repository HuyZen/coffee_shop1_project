import React, { useEffect } from 'react';
import coffeeStoryVideo from '../assets/videos/video.mp4';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1" id='about'>
        <div className="row">
          <div className="col l-6 t-12 c-12">
            <video autoPlay loop muted className='rounded-lg mb-5'>
              <source src={coffeeStoryVideo} type="video/mp4" />
            </video>
          </div>
          <div className="col l-6 t-12 c-12">
            <div className="flex flex-col justify-center items-center">
              <div className="story-heading font-normal text-[28px] text-center">
                What is your most special coffee?
              </div>
              <div className="story-decs text-center text-coffee-text-grey-100 my-8 leading-7">
                The French Press is a brewing method that comes closest to cupping. Cupping is the
                prescribed method by which coffee should be judged. Nothing separates the water from
                the coffee. To properly discover the flavours, it is best to drink the coffee this
                way. Everyone has their favourite brewing method.
              </div>
              <Link role='link' to='/story'>
                <div
                  className="hz-read-full-story"
                >
                  Read the full story
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
