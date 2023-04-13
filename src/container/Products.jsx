import React, { useEffect, useState } from 'react';
import { mugs } from '../constant/data';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import { useAuth } from '../firebaseConfig';

const Products = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const currentUser = useAuth();
  return (
    <>
      <div className="my-[60px]">
        <div className="text-center mb-[100px]">
          <div className="text-4xl">Our Products</div>
          <div className="text-lg text-gray-500 my-7 w-[70%] mx-auto sm:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div className="grid wide">
          <div className="row">
            <div
              className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1"
              data-aos="fade-down"
              data-aos-duration="700"
            >
              <div className="row">
                {mugs.map((item) => (
                  <div key={item.id} className="col l-4 t-6 c-12 mb-[120px]">
                    <div>
                      <div className="w-full h-full relative">
                        <img src={item.img} alt={item.name} className="hz-img__product" />
                        {item.type === 'On Sale' ? (
                          <div className="absolute hz-tag__on-sale">{item.type}</div>
                        ) : null}
                        {currentUser ? (
                          <Link to={`/mug/${item.id}`}>
                            <div className="absolute hz-button__buy-coffee">Explore Mug</div>
                          </Link>
                        ) : (
                          <Link to="/sign-in">
                            <div className="absolute hz-button__buy-coffee">Explore Mug</div>
                          </Link>
                        )}
                        <div className="hz-mug-decs">
                          <div className="hz-mug-name">{item.name}</div>
                          <div className="hz-mug-price">
                            {item.type === 'On Sale' ? (
                              <div className="hz-mug-price__old">{`${item.priceCurrent}$`} </div>
                            ) : (
                              <></>
                            )}
                            <div className="hz-mug-price__sale">{`${item.priceSale}$`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
