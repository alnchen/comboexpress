import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class PartyOrdersMobile extends Component {
  render() {
    return (
      <>
        <div className="mobile-section-labels">Party Orders</div>
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
            <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790456/combo/party_walnut_prawns_dcx5b9.jpg" alt="food pic"/>
            <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Walnut Prawns</div></div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790459/combo/party_fish_filet_mrajbf.jpg" alt="food pic"/>
            <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Fish Filet</div></div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790463/combo/party_fried_rice_isdu0n.jpg" alt="food pic"/>
            <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Fried Rice</div></div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790459/combo/party_broc_beef_zsyaxg.jpg" alt="food pic"/>
            <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Broccoli Beef</div></div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790457/combo/party_chow_mein_rijg52.jpg" alt="food pic"/>
            <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Chow Mein</div></div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790467/combo/party_salt_pepper_shrimp_2_cyibzp.jpg" alt="food pic"/>
            <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Salt and Pepper Shrimp</div></div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/ac31624/image/upload/v1554790455/combo/party_spareribs_h7cyew.jpg" alt="food pic"/>
            <div className="legend" id="carousel-caption"><div className="carousel-caption-text">Spareribs</div></div>
          </div>
        </Carousel>
      </>
    )
  }
}
