import React from 'react';
import FeatureMugs from '../../components/FeatureMugs/FeatureMugs';
import MoreMugs from '../../components/MoreMugs/MoreMugs';
import CoffeeMagazine from '../../components/CoffeeMagazine/CoffeeMagazine';
import Parallax from '../../components/Parallax/Parallax';
import LifestyleStories from '../../components/LifestyleStories/LifestyleStories';
import AboutUs from '../../components/AboutUs/AboutUs';

function Content(props) {
  return (
    <div className="content bg-bg-coffee pt-20">
      <div className="grid wide">
        <div className="row">
          
          {/* Story */}
          <AboutUs />

          {/* Featured Mugs */}
          <FeatureMugs />

          {/* More Products */}
          <MoreMugs />

          {/* Coffee Magazine */}
          <CoffeeMagazine />

          {/* Parallax */}
          <Parallax />

          {/* BEHIND THE MUGS, LIFESTYLE STORIES */}
          <LifestyleStories />
        </div>
      </div>
    </div>
  );
}

export default Content;
