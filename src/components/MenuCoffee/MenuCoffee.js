import React from 'react';
import CoffeeImage from '../../assets/images/coffee-img.png';
import { coffee, coldBrew, sodas } from '../../constant/data';

const MenuCoffee = () => {
  return (
    <div className='col l-10 l-o-1 c-8 c-o-2' id='menu'>
        <div className="hz-subhead-line">
              <div className="hz-subhead-line_deco-line"></div>
              <div className="hz-subhead-line__label my-12">Menu Coffee</div>
              <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
            </div>
        <div className="row">
            <div className="col l-3">
                <h3 className='uppercase text-[32px]'>Coffee</h3>
                <div className='w-full h-[2px] bg-gray-800 mt-2 mb-4'></div>
                {coffee.map((item) => (
                    <div key={item.id} className="menu-coffee-name">
                        <div className='flex justify-around'>
                            <div>
                                <div className='text-lg hover:text-coffee-text-brown-400'>{item.name}</div>
                                <div className='text-gray-500 leading-6 text-[14px] mb-4'>{item.desc}</div>
                            </div>
                            <div>{item.price}</div>
                        </div>
                    </div>
                ) )}
            </div>
            <div className="col l-6">
                <img src={CoffeeImage} alt="coffee-img" className='h-[420px] sld3:h-[300px] mt-12 mb-6'></img>
            </div>
            <div className="col l-3">
                <h3 className='uppercase text-[32px]'>Cold Brew</h3>
                <div className='w-full h-[2px] bg-gray-800 mt-2 mb-4'></div>
                {coldBrew.map((item) => (
                    <div key={item.id} className="menu-coffee-name">
                        <div className='flex justify-around'>
                            <div>
                                <div className='text-lg hover:text-coffee-text-brown-400'>{item.name}</div>
                                <div className='text-gray-500 leading-6 text-[14px] mb-4'>{item.desc}</div>
                            </div>
                            <div>{item.price}</div>
                        </div>
                    </div>
                ) )}

                <h3 className='uppercase text-[32px] mt-6'>Sodas</h3>
                <div className='w-full h-[2px] bg-gray-800 mt-2 mb-4'></div>
                {sodas.map((item) => (
                    <div key={item.id} className="menu-coffee-name">
                        <div className='flex justify-around'>
                            <div>
                                <div className='text-lg hover:text-coffee-text-brown-400'>{item.name}</div>
                                <div className='text-gray-500 leading-6 text-[14px] mb-4'>{item.desc}</div>
                            </div>
                            <div>{item.price}</div>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    </div>
  )
}

export default MenuCoffee