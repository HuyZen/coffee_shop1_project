import React, { useState } from 'react';
import { HiEnvelope, HiMapPin, HiPaperAirplane, HiPhone } from 'react-icons/hi2';
import * as dataImg from '../constant/dataImg';
// import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { OfficeFirst, OfficeSecond } from '../components/Office';
import Footer from './Footer';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const handleSuccess = () => {
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      swal('Sent error!', 'Please insert information', 'error');
    } else {
      swal('Sent success!', "I'll contact you soon", 'success');
    }
  };
  // const form = useRef();
  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_lresqpq', 'template_bwaw89h', form.current, 'DNPyauJxcGQMc9ZOa')
  //     e.target.reset();
  // };
  return (
    <div className="overflow-hidden">
      <div className="text-center mt-[60px]">
        <div className="col l-8 l-o-2" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-4xl">Let's Connect</h1>
          <p className="text-lg text-gray-500 my-7 w-[70%] mx-auto sm:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis.
          </p>
          <div className="hz-subhead-line mb-[80px]">
            <div className="hz-subhead-line_deco-line"></div>
            <div className="hz-subhead-line__label">OUR OFFICES</div>
            <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
          </div>
          <div className="row">
            <div className="col l-6">
              <OfficeFirst images={dataImg.Contact1} />
            </div>
            <div className="col l-6">
              <OfficeSecond images={dataImg.Contact2} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="hz-subhead-line mb-[80px]">
            <div className="hz-subhead-line_deco-line"></div>
            <div className="hz-subhead-line__label">CONTACT US</div>
            <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
          </div>
          <div className="col l-8 l-o-2">
            <div className="row">
              <div className="text-left l-6" data-aos="fade-right">
                <h3 className="pb-3 text-2xl font-semibold">Talk to me</h3>
                <div className="flex items-center my-6 ">
                  <div className="text-2xl text-second_color">
                    <HiEnvelope />
                  </div>
                  <div className="pl-6">
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="py-2 text-sm">I am here to help you</p>
                    <a
                      href="mailto:nguyendangvu137@gmail.com"
                      className="text-sm text-second_color"
                    >
                      zen12112000@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center my-6">
                  <div className="text-2xl text-second_color">
                    <HiPhone />
                  </div>
                  <div className="pl-6 ">
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href="tel:+0379015026" className="text-sm text-second_color">
                      0703651448
                    </a>
                  </div>
                </div>
                <div className="flex items-center my-6">
                  <div className="text-2xl text-second_color">
                    <HiMapPin />
                  </div>
                  <div className="pl-6 ">
                    <h4 className="text-lg font-medium">Address</h4>
                    <p className="py-2 text-sm">Service clients 24/24</p>
                    <p className="text-sm text-second_color">
                      39 Canary Wharf, London, UK
                    </p>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="col l-6" data-aos="fade-left">
                <h3 className="pb-3 text-2xl font-semibold">Write me something</h3>
                <form>
                  <div className="relative my-6">
                    <label className="hz-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Insert your name"
                      className="hz-input"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="relative my-6">
                    <label className="hz-label">Email</label>
                    <input
                      type="email"
                      name="mail"
                      value={email}
                      placeholder="Insert your mail"
                      className="hz-input"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="relative my-6">
                    <label className="hz-label">Message</label>
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      value={message}
                      className="resize-none hz-input"
                      placeholder="Write some thing"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-black hz-button__send"
                    onClick={() => {
                      handleSuccess();
                    }}
                  >
                    Send
                    <HiPaperAirplane className="ml-2 inline-block" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div data-aos="fade-up" data-aos-duration="1000" className="my-[70px]">
        <iframe
          src="https://www.google.com/maps/embed/v1/directions?origin=Canary+Wharf,+London,+UK&destination=Canary+Wharf,+London,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          className="w-full sm:h-[280px] h-[380px]"
          style={{ border: '0px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>

      <div
        className="text-center mb-[100px] sm:mb-[50px]"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="hz-subhead-line mb-[80px]">
          <div className="hz-subhead-line_deco-line"></div>
          <div className="hz-subhead-line__label">DIRECTORY</div>
          <div className="hz-subhead-line_deco-line w-9 h-[1px] bg-gray-300"></div>
        </div>
        <div className="col l-8 l-o-2">
          <div className="row">
            <div className="col l-4">
              <h2 className="text-xs font-bold tracking-widest text-gray-500 ">PRESS</h2>
              <p className="my-[20px] text-xl">Robb Kohler</p>
              <ul className="text-gray-500">
                <li>086-374-4962</li>
                <li>robb.kohler@coffeestyle.com</li>
              </ul>
            </div>
            <div className="col l-4">
              <h2 className="text-xs font-bold tracking-widest text-gray-500 ">MANAGEMENT</h2>
              <p className="my-[20px] text-xl">Roob Dayana</p>
              <ul className="text-gray-500">
                <li>354-341-2750</li>
                <li>roob.dayana@coffeestyle.com</li>
              </ul>
            </div>
            <div className="col l-4">
              <h2 className="text-xs font-bold tracking-widest text-gray-500 ">SUPPORT</h2>
              <p className="my-[20px] text-xl">Warren Marsh</p>
              <ul className="text-gray-500">
                <li>531-403-0376</li>
                <li>warren.marsh@coffeestyle.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
