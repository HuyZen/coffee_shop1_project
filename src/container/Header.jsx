import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../controller/cartContext';
import { useAuth } from '../firebaseConfig';

function Header(props) {
  let NavItem = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Products', link: '/products' },
    { name: 'Contact', link: '/contact' },
    { name: 'Story', link: '/story' },
  ];

  const { cart } = useCartContext();

  const [check, setCheck] = useState('false');

  const [quantity, setQuantity] = useState('0');

  const currentUser = useAuth();

  const imgProfile = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'

  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity;
      });
      setQuantity(total);
    }
  }, [cart]);

  const handleShowMenu = (e) => {
    setCheck((current) => !current);
  };

  return (
    <header className="bg-bg-coffee top-0 left-0 right-0 shadow-md">
      <nav className="flex justify-around items-center font-medium max-w-screen-xl mx-auto px-8">
        {/* Logo */}
        <Link to="/">
          <div className="z-10 basis-2/4 lg:basis-1/4 lg:flex lg:justify-center">
            <img
              src={logo}
              alt="LAGOM COFFEE"
              className="logo lg:cursor-pointer h-[95px] w-[120px] my-4"
            />
          </div>
        </Link>

        {/* NavLink */}
        <ul
          className={
            'lg:basis-2/4 ml-[50px] basis-0 lg:flex hidden lg:items:center lg:justify-around lg:gap-8 uppercase text-base text-gray-500 font-medium'
          }
        >
          {NavItem.map((item) => (
            <li key={item.name} className="hz-top-menu-item">
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <ul
          className={` ${
            check === true ? 'left-0' : 'left-[-100%]'
          } lg:hidden absolute z-50 w-full h-full top-0 right-0 bottom-0 py-24 pl-4 text-center bg-primary duration-500 `}
        >
          {NavItem.map((item) => (
            <li
              key={item.name}
              className="py-5 uppercase cursor-pointer text-white hover:text-rim text-xl"
            >
              <NavLink to={item.link} onClick={handleShowMenu}>
                {item.name}
              </NavLink>
            </li>
          ))}
          {currentUser ? (
            <li className="mt-10 text-xl uppercase cursor-pointer text-white hover:text-rim flex flex-row justify-center">
              <NavLink to="/user-profile" className="flex items-center" onClick={handleShowMenu}>
                <button className=" bg-rim rounded-lg px-7 py-3 text-text-color">Profile</button>
              </NavLink>
            </li>
          ) : (
            <li className="mt-10 text-xl uppercase cursor-pointer text-white hover:text-rim flex flex-row justify-center">
              <NavLink to="/sign-in" className="flex items-center" onClick={handleShowMenu}>
                <button className=" bg-rim rounded-lg px-7 py-3 text-text-color">SIGN IN</button>
              </NavLink>
            </li>
          )}
        </ul>

        {/* Cart */}
        <div
          className={`basis-1/4 lg:basis-1/4 flex justify-end lg:justify-center ml-16 leading-5 uppercase  lg:text-text-color ${
            check === true ? 'text-white hover:text-rim' : 'text-text-color'
          } font-medium z-20 `}
        >
          <div className=" mr-6">
            {currentUser ? (
              <Link to="/user-profile">
                <img
                  className="w-8 h-8 sm:w-5 sm:h-5 object-cover object-center rounded-full"
                  src={currentUser.photoURL ? currentUser.photoURL : imgProfile}
                  alt="profile"
                />
              </Link>
            ) : (
              <NavLink
                to="/sign-in"
                className="flex items-center text-gray-500 sm:hidden"
                onClick={handleShowMenu}
              >
                <button className=" bg-rim rounded-lg px-7 py-2.5 ">SIGN IN</button>
              </NavLink>
            )}
          </div>

          <div className="hz-top-menu-item text-base text-gray-500 font-medium sm:text-xs">
            <NavLink to="/cart" className="flex items-center">
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
              <span className="mx-2 uppercase">Cart</span>
              <span className="hz-amount-circle bg-rim text-white">{quantity}</span>
            </NavLink>
          </div>
        </div>

        {/* Button menu mobile */}
        <div
          className={`basis-1/4 lg:hidden ${
            check === true ? 'text-white' : 'text-text-color'
          } cursor-pointer flex justify-center z-50`}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                check === true
                  ? 'M6 18L18 6M6 6l12 12 '
                  : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              }
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
