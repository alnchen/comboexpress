import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    const { desktop=true } = this.props;
    return (
      <div>
        <div className="mobile-section-labels">About Us</div>
        <div className={`about-us-body ${desktop ? 'about-us-body-desktop' : ''}`}>
          {desktop && 
            <div className="about-us-image">
              <img  alt="combo restaurant front" className="popout-image" src="http://res.cloudinary.com/ac31624/image/upload/c_scale,w_832/v1554845685/combo/combo_front_hd6mi2.jpg" />
            </div>
          }
          <div className={`about-us ${desktop ? 'about-us-desktop' : ''}`}>We are a friendly, family-owned Chinese restaurant that has been serving the city of Vallejo in California since 1994. Customer satisfaction has and always will be our biggest priority. Come by for a taste!</div>
        </div>
        {!desktop && 
          <div className="about-us-image">
            <img  alt="combo restaurant front" className="popout-image" src="http://res.cloudinary.com/ac31624/image/upload/c_scale,w_832/v1554845685/combo/combo_front_hd6mi2.jpg" />
          </div>}
      </div>
    );
  }
}
