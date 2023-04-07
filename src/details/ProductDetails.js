import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mugs } from '../constant/data';
import { HiCheck } from "react-icons/hi2";
import { useCartContext } from '../controller/cartContext.js';

const ProductDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (id) {
      setDetail(mugs.find((item) => item.id.toString() === id));
    }
    return () => {
      setDetail(undefined);
    };
  }, [id]);

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };


  const { addToCart } = useCartContext()

  

  return (
    <>
      <div className="col l-10 l-o-1 t-12 c-12 mt-12">
        <div className="row">
          <div className="col l-6">
            <img src={detail?.img} alt={detail?.name} className="h-[500px] sld3:h-[350px] sld3:ml-4 hz-img__product" />
          </div>

          <div className="col l-6">
            <div className="ml-8 mt-4 sld2:ml-[80px] sld2:mt-9 sld3:ml-[60px]">
              <div className="text-[36px] font-medium">{detail?.name}</div>
              <div className="mt-7 flex flex-row">
                {detail?.type === 'On Sale' ? (
                  <div className=" text-[30px] text-gray-400  line-through mr-5">
                    {`${detail?.priceCurrent}$`}{' '}
                  </div>
                ) : (
                  <></>
                )}
                <div className=" text-[30px] font-medium text-coffee-text-brown-400">{`${detail?.priceSale}$`}</div>
              </div>

              <div className="flex flex-row mt-5">
                <button
                  className="flex items-center justify-center w-[30px] h-[40px] bg-primary text-[1.12rem] text-rim cursor-pointer font-semibold"
                  onClick={handleRemoveQuantity}
                >
                  -
                </button>
                <div className="flex items-center justify-center w-[30px] h-[40px] text-[1.2rem]">
                  {quantity}
                </div>
                <button
                  className="flex items-center justify-center w-[30px] h-[40px] bg-primary text-[1.12rem] text-rim cursor-pointer font-semibold"
                  onClick={handleAddQuantity}
                >
                  +
                </button>
              </div>

              <button className="mt-5 flex items-center justify-center w-[50%] h-[40px] bg-primary font-semibold text-rim text-[16px] shadow-xl hover:translate-y-[-2px] hover:shadow-2xl rounded-sm text-center"
                onClick={() => addToCart(detail, quantity)}
              >
                Add to Cart
              </button>

              <div className="mt-9">
                <div className="text-[28px] font-bold mb-10">Details</div>
                <div className='flex flex-col'>
                  <span className='mb-4 flex flex-row'><HiCheck/> <p className='ml-3 text-[20px]'>DESIGNED IN STOCKHOLM</p></span>
                  <span className='mb-4 flex flex-row'><HiCheck/> <p className='ml-3 text-[20px]'>PLAYER APPROVED</p></span>
                  <span className='mb-4 flex flex-row'><HiCheck/> <p className='ml-3 text-[20px]'>SUPPORTING NIP #GONINJAS</p></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
