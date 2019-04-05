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
          <img src="https://timesofindia.indiatimes.com/thumb/msid-56401712,imgsize-61375,width-800,height-600,resizemode-4/56401712.jpg" alt="food pic"/>
          <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Noods</div></div>
        </div>
        <div>
          <img src="https://s3.amazonaws.com/studio-me/system/photos/photos/000/772/700/large/orange_chicken.jpg?1411766642" alt="food pic"/>
          <div className="legend" id="carousel-caption"><div className="carousel-caption-text">OJ Chicken</div></div>
        </div>
        <div>
          <img src="https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Fried-Rice-Fifteen-Spatulas-8-640x427.jpg" alt="food pic"/>
          <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Fly Rice</div></div>
        </div>
      </Carousel>
    )
  }
}