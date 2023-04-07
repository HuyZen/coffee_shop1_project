import React, { useEffect } from 'react';
import {AboutUs, CoffeeMagazine, FeatureMugs, LifestyleStories, Parallax} from '../components/Home'
import MenuCoffee from '../components/MenuCoffee';
import Slider from './Slider';
import Footer from './Footer';

function Home(props) {

  return (
    <div>
        <Slider/>
        <div className="content bg-bg-coffee pt-20">
            <div className="grid wide">
                <div className="row">
                <AboutUs />
                <MenuCoffee />
                <FeatureMugs />
                <Parallax />
                <CoffeeMagazine />
                <LifestyleStories />
                </div>
        </div>
        <Footer/>
    </div>
    </div>
  );
}

export default Home;