import React, { Component } from 'react';

class CreatureItem extends Component {
  render() {
    return (
      <li className="UniWhal"> 
        <h2> UniWhal </h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"/>
        <p> Description: A unicorn and a narwhal nuzzling their horns </p>
        <p> Keyword: Narwhal </p>
        <p> Horns: 2</p>
      </li>
            
    );
  }
}

export default CreatureItem;