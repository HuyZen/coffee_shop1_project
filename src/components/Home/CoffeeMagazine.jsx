import React, { useEffect } from 'react';
import * as dataImg from '../../constant/dataImg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CoffeeMagazine = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
        <div className="col l-12 t-12 c-12" data-aos="fade-up-right" data-aos-duration="1000">
            <div className="hz-subhead-line">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label my-12 sm:mt-0">
                BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
              </div>
              <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>

            <div className="coffee-magazine">
              <div className="row">
                <div className="col l-8 l-o-2 t-8 t-o-2 c-10 c-o-1">
                  <div className="row">
                    <div className="hz-magazine__images col l-7 t-7 c-12">
                      <div className="row">
                        <div className="hz-magazine__images-big col l-8 t-8 c-8">
                          <img src={dataImg.Magazine1} alt="" className="h-full" />
                        </div>
                        <div className="hz-magazine__images-small col l-4 t-4 c-4">
                          <div className="hz-magazine__images-small-01 mb-5">
                            <img src={dataImg.Magazine2} alt="" />
                          </div>
                          <div className="hz-magazine__images-small-02">
                            <img src={dataImg.Magazine3} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hz-magazine__post col l-5 t-5 c-12">
                      <div className="pl-5">
                        <div className="text-[12px] text-coffee-text-grey-100 font-semibold tracking-wider mt-6 mb-5">
                          PREMIUM OFFER
                        </div>
                        <div className="text-4xl mb-5 md:mb-3">Get our Coffee Magazine</div>
                        <div className="text-gray-500 leading-7 mb-5 md:mb-3">
                          The most versatile furniture system ever created. Designed to fit your
                          life.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default CoffeeMagazine