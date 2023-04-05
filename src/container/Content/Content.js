import React, { useEffect } from 'react';
import {AboutUs, CoffeeMagazine, FeatureMugs, LifestyleStories, MoreMugs, Parallax} from '../../components/index'
import MenuCoffee from '../../components/MenuCoffee/MenuCoffee';
import axios from 'axios';

function Content(props) {
  // useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/todos/1',{
    //   method:'GET',
    // })
    //   .then(response => response.json())
    //   .then(response => console.log(response))

  //     axios({
  //       method: 'get',
  //       url: 'https://jsonplaceholder.typicode.com/todos/1',
  //       params:{
  //         query:"2"
  //       },
  //       http https
  //       headers:{
  //         "Authorization":"Bearer "
  //       }
  //     }).then(response => console.log(response));
  // },[])
  return (
    <div className="content bg-bg-coffee pt-20">
      <div className="grid wide">
        <div className="row">
          <AboutUs />
          <MenuCoffee />
          <FeatureMugs />
          <MoreMugs />
          <CoffeeMagazine />
          <Parallax />
          <LifestyleStories />
        </div>
      </div>
    </div>
  );
}

export default Content;


