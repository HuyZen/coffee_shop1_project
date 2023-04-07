import { Link } from 'react-router-dom';
import * as dataImg from '../../constant/dataImg';
import Footer from '../../container/Footer';

export const EmptyCart = () => {
  return (
    <div className="">
      <div className="text-center">
        <img
          src={dataImg.EmptyCart}
          alt="emptyCart"
          className=" w-[600px] mx-auto mt-[60px] mb-[100px]"
        />
        <div>
          <div className="flex items-center justify-center gap-x-3">
            <p>Looks like you have not added anything to your cart.</p>
            {/* <img src={images.sadGif} alt="sad" width={30} /> */}
          </div>
          <Link to="/products" className="col l-6 l-o-3 t-10 t-o-1 c-10 c-o-1 mb-[100px]">
            <button className=" mt-5 bg-black w-[60%] md:w-[60%] sm:w-full text-white font-medium text-lg sm:text-base h-[58px] rounded">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
