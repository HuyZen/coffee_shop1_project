import React from 'react';
import {AboutUs, CoffeeMagazine, FeatureMugs, LifestyleStories, MoreMugs, Parallax} from '../../components/index'
import MenuCoffee from '../../components/MenuCoffee/MenuCoffee';

function Content(props) {
  return (
    <div className="content bg-bg-coffee pt-20">
      <div className="grid wide">
        <div className="row">
          <AboutUs />
          <FeatureMugs />
          <MoreMugs />
          <CoffeeMagazine />
          <Parallax />
          <LifestyleStories />
          <MenuCoffee />
        </div>
      </div>
    </div>
  );
}

export default Content;
