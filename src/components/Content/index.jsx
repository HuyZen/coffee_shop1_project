import React from 'react';
import * as dataImg from '../../constant/dataImg';

const mugs = {};

const listItem = [
  {
    id: 1,
    img: dataImg.FeaturedMug1,
    priceCurrent: 39,
    priceSale: 29,
    name: 'Premium Lagom Mug',
    mug: 'Featured Mugs',
    type: 'On Sale',
  },
  {
    id: 2,
    img: dataImg.FeaturedMug2,
    priceCurrent: 27,
    priceSale: 27,
    name: 'Black Designers Mug',
    mug: 'Featured Mugs',
    type: 'None',
  },
  {
    id: 3,
    img: dataImg.MoreMug1,
    priceCurrent: 32,
    priceSale: 32,
    name: 'Red Love Cup',
    mug: 'Featured Mugs',
    type: 'None',
  },
  {
    id: 4,
    img: dataImg.MoreMug2,
    priceCurrent: 32,
    priceSale: 26,
    name: 'Black Designers Mug',
    mug: 'Normal',
    type: 'On Sale',
  },
  {
    id: 5,
    img: dataImg.MoreMug3,
    priceCurrent: 22,
    priceSale: 22,
    name: 'B&W Essentials Mug',
    mug: 'Normal',
    type: 'None',
  },
  {
    id: 6,
    img: dataImg.MoreMug4,
    priceCurrent: 24,
    priceSale: 24,
    name: 'Winter Style Mug',
    mug: 'Normal',
    type: 'None',
  },
  {
    id: 7,
    img: dataImg.MoreMug5,
    priceCurrent: 24,
    priceSale: 18,
    name: 'Ceramic Tea',
    mug: 'Normal',
    type: 'On Sale',
  },
  {
    id: 8,
    img: dataImg.MoreMug6,
    priceCurrent: 18,
    priceSale: 12,
    name: 'No Handle Bar Cup',
    mug: 'Normal',
    type: 'On Sale',
  },
  {
    id: 9,
    img: dataImg.MoreMug7,
    priceCurrent: 40,
    priceSale: 32,
    name: 'Espresso Cup by Mugs.co',
    mug: 'Normal',
    type: 'None',
  },
  {
    id: 10,
    img: dataImg.MoreMug8,
    priceCurrent: 35,
    priceSale: 29,
    name: 'Lagom Mug',
    mug: 'Normal',
    type: 'On Sale',
  },
  {
    id: 11,
    img: dataImg.MoreMug9,
    priceCurrent: 16,
    priceSale: 16,
    name: 'Summer Designer Cup',
    mug: 'Normal',
    type: 'None',
  },
  
];

function Content(props) {

  return (
    <div className="content bg-bg-coffee pt-20">
      <div className="grid wide">
        <div className="row">
          <div className="col l-6 l-o-3 t-8 t-o-2 c-10 c-o-1">
            {/* Story */}
            <div className="flex flex-col justify-center items-center">
              <div className="story-heading font-normal text-[28px] text-center">
                What is your most special coffee?
              </div>
              <div className="story-decs text-center text-coffee-text-grey-100 my-6 leading-7">
                The French Press is a brewing method that comes closest to cupping. Cupping is the
                prescribed method by which coffee should be judged. Nothing separates the water from
                the coffee. To properly discover the flavours, it is best to drink the coffee this
                way. Everyone has their favourite brewing method.
              </div>
              <div
                className="story-footer text-coffee-text-brown-400 hover:text-coffee-text-brown-600 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:bg-coffee-text-brown-100 hover:after:bg-coffee-text-brown-200
                after:h-0.5 after:w-full after:md:transition-all after:md:ease-in-out after:md:duration-300;"
              >
                Read the full story
              </div>
            </div>
          </div>

          

          {/* Featured Mugs */}
          <div className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1">
            <div className="hz-subhead-line">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label my-12">Featured Mugs</div>
              <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>
            <div className="row">
              {
                listItem.filter((item) => item.mug === 'Featured Mugs').map((item) => (
                  <div key={item.id} className="col l-4 t-6 c-12 mb-[120px]">
                    <a href="#id">
                      <div className="w-full h-full relative">
                        <img src={item.img} alt={item.name} className="hz-img__product" />
                        {item.type === 'On Sale' ? <div className="absolute hz-tag__on-sale">{item.type}</div> : null}
                        <div className="absolute hz-button__buy-coffee">Add to Cart</div>

                        <div className="hz-mug-decs">
                          <div className="hz-mug-name">{item.name}</div>
                          <div className="hz-mug-price">
                            {item.type === 'On Sale' ? <div className="hz-mug-price__old">{`${item.priceCurrent}$`} </div> : <></>}
                            <div className="hz-mug-price__sale">{`${item.priceSale}$`}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>

          {/* More Products */}

          <div className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1">
            <div className="hz-subhead-line">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label my-12">More Products</div>
              <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>
            <div className="row">
              {
                listItem.filter((item) => item.mug === 'Normal').map((item) => (
                  <div key={item.id} className="col l-4 t-6 c-12 mb-[120px]">
                    <a href="#id">
                      <div className="w-full h-full relative">
                        <img src={item.img} alt={item.name} className="hz-img__product" />
                        {item.type === 'On Sale' ? <div className="absolute hz-tag__on-sale">{item.type}</div> : null}
                        <div className="absolute hz-button__buy-coffee">Add to Cart</div>

                        <div className="hz-mug-decs">
                          <div className="hz-mug-name">{item.name}</div>
                          <div className="hz-mug-price">
                            {item.type === 'On Sale' ? <div className="hz-mug-price__old">{`${item.priceCurrent}$`} </div> : <></>}
                            <div className="hz-mug-price__sale">{`${item.priceSale}$`}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Coffee Magazine */}
          <div className="col l-12 t-12 c-12">
            <div className="hz-subhead-line">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label my-12">
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

          {/* Parallax */}
          <div className="col l-12 t-12 c-12">
            <div
              style={{
                backgroundImage: `url(${dataImg.Parallax})`,
              }}
              className="parallax bg-cover bg-center mt-[128px] bg-no-repeat h-[400px] w-[100vw] relative left-[calc(-50vw+50%)] bg-fixed"
            ></div>
          </div>

          {/* BEHIND THE MUGS, LIFESTYLE STORIES */}
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
        </div>
      </div>
    </div>
  );
}

export default Content;
