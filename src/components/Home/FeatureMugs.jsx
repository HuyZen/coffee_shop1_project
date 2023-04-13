import React, { useEffect } from 'react';
import { mugs } from '../../constant/data';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../firebaseConfig';

const FeatureMugs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const currentUser = useAuth();
  return (
    <>
      <div
        className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1"
        data-aos="fade-down-left"
        data-aos-duration="700"
      >
        <div className="hz-subhead-line">
          <div className="hz-subhead-line_deco-line"></div>
          <div className="hz-subhead-line__label my-12">Featured Mugs</div>
          <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
        </div>
        <div className="row">
          {mugs
            .filter((item) => item.mug === 'Featured Mugs')
            .map((item) => (
              <div key={item.id} className="col l-4 t-6 c-12 mb-[120px]">
                <div>
                  <div className="w-full h-full relative">
                    <img src={item.img} alt={item.name} className="hz-img__product" />
                    {item.type === 'On Sale' ? (
                      <div className="absolute hz-tag__on-sale">{item.type}</div>
                    ) : null}
                    {/* <Link > */}
                    {currentUser ? (
                          <Link to={`/mug/${item.id}`}>
                            <div className="absolute hz-button__buy-coffee">Explore Mug</div>
                          </Link>
                        ) : (
                          <Link to="/sign-in">
                            <div className="absolute hz-button__buy-coffee">Explore Mug</div>
                          </Link>
                        )}
                    {/* </Link> */}
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

        <Link className="flex flex-row items-center justify-center mt-5 mb-[100px]" to='/products'>
          <div className="hz-read-full-story text-xl">
            See all our products
          </div>
        </Link>
      </div>
    </>
  );
};

export default FeatureMugs;
