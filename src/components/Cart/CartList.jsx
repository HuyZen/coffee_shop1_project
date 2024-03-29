import { Link } from 'react-router-dom';
import { useCartContext } from '../../controller/cartContext';
import { IoIosTrash } from 'react-icons/io';
import Footer from '../../container/Footer';
import swal from 'sweetalert';

export const CartList = () => {
  const { cart, removeItem, clearALLItems } = useCartContext();
  const handleSuccess = () => {
    if (cart.length !== 0) {
      swal('Payment success!', 'Thank you for purchasing our product', 'success');
      setTimeout(() => {
        clearALLItems();
      }, 2000);
    }
  };

  const subTotalPrice = cart.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  const shippingFee = 5;
  const totalPrice = subTotalPrice + shippingFee;

  return (
    <div className="">
      <div className="text-center mt-[60px] mb-[100px]">
        <div className="col l-8 l-o-2 t-10 t-o-1 c-10 c-o-1">
          <div className="text-4xl">Your Cart</div>
          <p className="text-lg text-gray-500 my-7 w-[70%] mx-auto sm:w-full mb-[100px]">
            If your distance is less than 20km you will get a free shipping
          </p>
          <div className="row mb-14 font-semibold text-lg relative sm:hidden">
            <div className="col l-6 t-6">
              <div className="row">
                <div className="col l-6 t-6"></div>
                <div className="col l-6 t-6">Name</div>
              </div>
            </div>
            <div className="col l-2 t-2">Quantity</div>
            <div className="col l-2 t-2">Price</div>
            <div className="col l-2 t-2">Remove</div>
          </div>
          {cart?.map((item, index) => {
            return (
              <div className="row mb-12 text-lg" key={index}>
                <div className="col l-6 t-6 c-12">
                  <div className="row">
                    <div className="col l-6 t-6 c-6">
                      <img src={item.img} alt={item.name} className=" w-[120px] hz-img__product" />
                    </div>
                    <div className="col l-6 t-6 c-6">
                      {item.name}
                      <div className="hidden sm:block">
                        <div className="col c-12">
                          <div className="row">
                            <div className="col c-6">Q: {item.quantity}</div>
                          <div className="col c-6">P: {item.price} $</div>
                          </div>
                        </div>
                        <div
                          className="col c-12 px-3  cursor-pointer"
                          onClick={() => removeItem(item.id)}
                        >
                          <IoIosTrash className="mx-auto text-3xl sm:text-4xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-2 t-2 sm:hidden">{item.quantity}</div>
                <div className="col l-2 t-2 sm:hidden">{item.price} $</div>
                <div
                  className="col l-2 t-2 px-3  cursor-pointer sm:hidden"
                  onClick={() => removeItem(item.id)}
                >
                  <IoIosTrash className="mx-auto text-3xl" />
                </div>
              </div>
            );
          })}
          <div className="my-[100px] col l-12 t-12 c-12">
            <div className="row">
              <Link
                to="/products"
                className="col l-6 t-6 c-6 text-left p-0"
                style={{ padding: '0' }}
              >
                <button className="uppercase bg-primary w-[70%] sm:w-[70%] text-rim font-medium text-lg sm:text-base h-[45px] rounded">
                  Continue Shopping
                </button>
              </Link>
              <div className="col l-6 t-6 c-6 text-right">
                <button
                  onClick={() => clearALLItems()}
                  className="uppercase bg-red-500 w-[40%] md:w-[50%] sm:w-[80%] text-white font-medium text-lg sm:text-base h-[45px] rounded"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          <div className="col l-3 l-o-9 text-xl">
            <div className="flex flex-row justify-between mb-4">
              <div className="">SubTotal:</div>
              <div className="font-semibold">{subTotalPrice} $</div>
            </div>
            <div className="flex flex-row justify-between mb-6">
              <div className="">Shipping Fee:</div>
              <div className="font-semibold">{shippingFee} $</div>
            </div>
            <div className="flex flex-row justify-between mb-6">
              <div className="">Order Total:</div>
              <div className="font-semibold">{totalPrice} $</div>
            </div>
            <button
              onClick={handleSuccess}
              className="uppercase bg-primary w-full text-rim font-medium text-sm sm:text-base h-[45px] rounded"
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
