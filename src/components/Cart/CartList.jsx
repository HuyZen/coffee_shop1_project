import { mugs } from '../../constant/data';

export const CartList = () => {
  return (
    <div className="text-center mt-[60px]">
      <div className="col l-8 l-o-2 ">
        <div className="text-4xl">Your Cart</div>
        <p className="text-lg text-gray-500 my-7 w-[70%] mx-auto sm:w-full mb-[100px]">
          If your distance is less than 20km you will get a free shipping
        </p>
            <div className='row mb-14 font-semibold'>
                    <div className="col l-6">
                    <div className="row">
                        <div className="col l-6"></div>
                        <div className="col l-6">Name</div>
                    </div>
                    </div>
                    <div className="col l-2">Quantity</div>
                    <div className="col l-2">Price</div>
                    <div className="col l-2">Remove</div>
            </div>
          {mugs.map((item, _) => {
            return (
                <div className='row mb-12' key={item.id}>
                    <div className="col l-6">
                    <div className="row">
                        <div className="col l-6">
                        <img src={item.img} alt={item.name} className=' w-[120px]' />
                        </div>
                        <div className="col l-6">{item.name}</div>
                    </div>
                    </div>
                    <div className="col l-2">1</div>
                    <div className="col l-2">{item.priceSale}</div>
                    <div className="col l-2">Remove</div>
                </div>
            );
          })}
      </div>
    </div>
  );
};
