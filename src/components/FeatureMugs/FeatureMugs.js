import React from 'react';
import { mugs } from '../../constant/data';

const FeatureMugs = () => {
  return (
    <>
       
        <div className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1">
            <div className="hz-subhead-line">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label my-12">Featured Mugs</div>
              <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>
            <div className="row">
              {
                mugs.filter((item) => item.mug === 'Featured Mugs').map((item) => (
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
    </>
  )
}

export default FeatureMugs