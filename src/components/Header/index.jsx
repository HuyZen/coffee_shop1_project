import React, { useState } from 'react';
import logo from '../../assets/logo.png';

function Header(props) {
  let NavItem = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'News', link: '/news' },
    { name: 'community', link: '/community' },
    { name: 'About Us', link: '/about' },
    { name: 'Jobs', link: '/jobs' },
  ];

  const [check, setCheck] = useState('false');

  const handleShowMenu = (e) => {
    setCheck((current) => !current);
  };

  return (
    <header className=" bg-bg-coffee">
      
      <nav className=" flex justify-around items-center font-medium max-w-screen-xl mx-auto px-8">

        {/* Logo */}
        <div className='z-50 basis-2/4 md:basis-1/4 md:flex md:justify-center'>
            <img src={logo} alt="LAGOM COFFEE" className='logo md:cursor-pointer h-[95px] w-[120px] my-4'/>
        </div>

        {/* NavLink */}
        <ul
          className={'md:basis-2/4 basis-0 md:flex hidden md:items:center md:justify-around md:gap-8 uppercase text-base text-text-color font-medium'}
        >
          {NavItem.map((item) => (
            <li key={item.name} className="hz-top-menu-item">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <ul
          className={` ${
            check === true ? 'left-0' : 'left-[-100%]'
          } md:hidden absolute  z-10 w-full h-full bottom-0 py-24 pl-4 text-center bg-primary duration-500 `}
        >
          {NavItem.map((item) => (
            <li key={item.name} className="py-5 uppercase cursor-pointer text-white hover:text-rim">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Cart */}
        <ul className={`basis-1/4 md:basis-1/4 flex justify-end md:justify-center ml-16 leading-5 uppercase  md:text-text-color ${check === true ? 'text-white hover:text-rim' : 'text-text-color'} font-medium z-50 `}>
          <li className="hz-top-menu-item">
            <a href="#id" className="flex items-center">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="hz-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </i>
              <span className="mx-2">Cart</span>
              <span className="hz-amount-circle bg-rim text-white">7</span>
            </a>
          </li>
        </ul>
        
        {/* Button menu mobile */}
        <div
          className={`basis-1/4 menu-respon md:hidden ${check === true ? 'text-white' : 'text-text-color'} cursor-pointer flex justify-center z-50`}
          onClick={handleShowMenu}
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={check === true ? 'M6 18L18 6M6 6l12 12 ' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'} />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
