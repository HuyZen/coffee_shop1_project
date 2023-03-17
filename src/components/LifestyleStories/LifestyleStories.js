import React from 'react';
import * as dataImg from '../../constant/dataImg';

const LifestyleStories = () => {
  return (
    <>
        <div className="col l-12 t-12 c-12 my-24">
            <div className="hz-subhead-line mb-12">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label">BEHIND THE MUGS, LIFESTYLE STORIES</div>
              <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>

            <div className="coffee-life-story">
              <div className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1">
                <div className="row">
                  <div className="col l-4">
                    <a href="#id">
                      <div className="">
                        <div className="overflow-hidden inline-block">
                          <img
                            src={dataImg.LifeStory1}
                            alt=""
                            className="cursor-context-menu w-full block transition-all transform hover:scale-110"
                          />
                        </div>
                        <div className="">
                          <div className="text-lg my-4 hover:text-coffee-text-brown-400">
                            Health Check: why do I get a headache when I haven't had my coffee?
                          </div>
                          <div className="text-gray-500 leading-6 text-[14px] mb-3">
                            It is a paradisematic country, in which roasted parts of sentences fly
                            into your mouth.
                          </div>
                          <div className="text-gray-500 leading-7 uppercase text-[12px] font-semibold tracking-widest mb-4">
                            october 9, 2018
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col l-4">
                    <a href="#id">
                      <div className="overflow-hidden">
                        <div className="overflow-hidden inline-block">
                          <img
                            src={dataImg.LifeStory2}
                            alt=""
                            className="cursor-context-menu w-full block transition-all transform hover:scale-110"
                          />
                        </div>
                        <div className="">
                          <div className="text-lg my-4 hover:text-coffee-text-brown-400">
                            How long does a cup of coffee keep you awake?
                          </div>
                          <div className="text-gray-500 leading-6 text-[14px] mb-3">
                            It is a paradisematic country, in which roasted parts. Vel qui et ad
                            voluptatem.
                          </div>
                          <div className="text-gray-500 leading-7 uppercase text-[12px] font-semibold tracking-widest mb-4">
                            october 9, 2018
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col l-4">
                    <a href="#id">
                      <div className="overflow-hidden">
                        <div className="overflow-hidden inline-block">
                          <img
                            src={dataImg.LifeStory3}
                            alt=""
                            className="cursor-context-menu w-full block transition-all transform hover:scale-110"
                          />
                        </div>
                        <div className="">
                          <div className="text-lg my-4 hover:text-coffee-text-brown-400">
                            Recent research suggests that heavy coffee drinkers may reap health
                            benefits.
                          </div>
                          <div className="text-gray-500 leading-6 text-[14px] mb-3">
                            It is a paradisematic country, in which roasted parts of sentences fly
                            into your mouth.
                          </div>
                          <div className="text-gray-500 leading-7 uppercase text-[12px] font-semibold tracking-widest">
                            october 9, 2022
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default LifestyleStories