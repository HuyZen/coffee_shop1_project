import React from 'react';
import {AboutUs, CoffeeMagazine, FeatureMugs, LifestyleStories, Parallax, MenuCoffee} from '../components/Home/index'
import Slider from './Slider';
import Footer from './Footer';

function Home() {

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