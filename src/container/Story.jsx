import React from 'react';
import { Link } from 'react-router-dom';
import MemberList from '../components/MemberList';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { story } from '../constant/dataStory';
import StoryItem from '../components/StoryItem';
import Footer from './Footer';
const Story = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="col l-10 l-o-1 mb-24 mt-[60px]">
        <div className="text-center">
          <h1 className="text-4xl">Read coffee stories on our Blog</h1>
          <p className="text-lg text-gray-500 my-7 w-[60%] mx-auto sm:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique.
          </p>
        </div>
        <div className="flex sm:flex-col md:flex-col md:text-center md:flex-wrap">
          <div className="basis-4/6">
            <h2 className="hz-title">Latest Posts</h2>
            {story.map((blog, index) => {
              return <StoryItem blog={blog} key={index} />;
            })}
          </div>
          <div className="basis-2/6 sm:text-center">
            <h2 className="hz-title">About Us</h2>
            <Link to="/" className="text-xl font-semibold text-center cursor-pointer">
              Lagom Coffee
            </Link>
            <p className="my-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
            <Link to="/about">
              <p className="hz-read-full-story">Read the full Story</p>
            </Link>
            <h2 className="hz-title mb[-20px]">Authors</h2>
            <MemberList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Story;
