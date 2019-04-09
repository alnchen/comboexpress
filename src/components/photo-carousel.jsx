import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class PhotoCarousel extends Component {
  render() {
    return (
      <Carousel 
        id="carousel-overrides"
        dynamicHeight={true} 
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        showStatus={false}
        // showIndicators={false}
      >
        <div>
          <img src="https://res.cloudinary.com/ac31624/image/upload/v1554845911/combo/combo_plate_3_u3uuvo.jpg" alt="food pic"/>
          {/* <div className="legend" id="carousel-caption"><div className="carousel-caption-text">2 Item Combo</div></div> */}
        </div>
        <div>
          <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790461/combo/potsticker2_ebukbe.jpg" alt="food pic"/>
        </div>
        <div>
          <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790464/combo/egg_rolls_nxdv96.jpg" alt="food pic"/>
          {/* <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Egg Rolls</div></div> */}
        </div>
        <div>
          <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790463/combo/potsticker1_julqgk.jpg" alt="food pic"/>
          {/* <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Potstickers</div></div> */}
        </div>
        <div>
          <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790467/combo/combo_plate_1_kdefwv.jpg" alt="food pic"/>
          {/* <div className="legend" id="carousel-caption"><div className="carousel-caption-text">2 Item Combo</div></div> */}
        </div>
        <div>
          <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790458/combo/party_salt_pepper_shrimp_z37bxt.jpg" alt="food pic"/>
          {/* <div className="legend" id="carousel-caption"><div className="carousel-caption-text">2 Item Combo</div></div> */}
        </div>
      </Carousel>
    )
  }
}