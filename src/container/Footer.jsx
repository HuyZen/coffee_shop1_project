import React from 'react';
import QrCode from '../assets/images/qr_code.png'

function Footer(props) {
  return (
    <div className="">
      <div className="border-t-4 border-solid border-primary"></div>
      <div className="mt-12 bg-bg-coffee">
        <div className="grid wide">
          <div className="col l-10 l-o-1 t-10 t-o-1 c-10 c-o-1">
            <div className="row">
              <div className="col l-2-4 t-4 c-6">
                <div className="hz-footer-heading">Introduce</div>
                <ul className="footer-list">
                  <li className="hz-footer-item">
                    <a href="#id">About</a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id">Product</a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id">Promotion</a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id">Coffee Stories</a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id">Store</a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id">Career</a>
                  </li>
                </ul>
              </div>

              <div className="col l-2-4 t-4 c-6">
                <div className="hz-footer-heading">Terms</div>
                <ul className="footer-list">
                  <li className="hz-footer-item">
                    <a href="#id">Terms of use</a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col l-2-4 t-4 c-6">
                <div className="hz-footer-heading">Service</div>
                <ul className="footer-list">
                  <li className="hz-footer-item">
                    <a href="#id" className="flex items-center">
                      <i className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </i>
                      <span className="font-semibold">Hotline: 1800 3979</span>
                    </a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id" className="flex items-center">
                      <i className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </i>
                      <span className="font-semibold">Location:</span>
                    </a>
                    <p className="mt-2">
                      Canary Wharf, London, United Kingdom
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col l-2-4 t-4 c-6">
                <div className="hz-footer-heading">Social Media</div>
                <ul className="footer-list">
                  <li className="hz-footer-item">
                    <a href="#id" className="flex items-center">
                      <i className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="w-4 h-4 opacity-60"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id" className='flex items-center'>
                      <i className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-4 h-4 opacity-60'>
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </i>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li className="hz-footer-item">
                    <a href="#id" className="flex items-center">
                      <i className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-4 h-4 opacity-60"
                        >
                          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg>
                      </i>
                      <span>Tiktok</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col l-2-4 t-4 c-6">
                <div className="hz-footer-heading">Download App</div>
                
                <div className="flex items-center">
                  <img src={QrCode} alt="QR Code App" className='w-20 border-2 border-solid border-inherit' />
                  <div className="ml-4 flex-1">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="App Store" className='h-[14px] mb-3' />
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="Google Play" className='h-[14px] mb-3' />
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="AppGallery" className='h-[14px] mb-3' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
