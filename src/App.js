import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import HeaderMobile from './components/mobile/header-mobile';
import PartyOrdersMobile from './components/mobile/party-orders-mobile';
import PhotoCarousel from './components/photo-carousel';
import AboutUs from './components/about-us';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './App.css';

// Desktop Imports
import NavBar from "./components/desktop/navbar";
import GoogleMapReact from "google-map-react";
import GoogleMap from "./components/google-map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBottomDialogOpen: false,
    };
    this.openMobileMaps = this.openMobileMaps.bind(this);
  }

  openMobileMaps() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") !== -1) || 
       (navigator.platform.indexOf("iPad") !== -1) || 
       (navigator.platform.indexOf("iPod") !== -1))
      window.open("maps://maps.google.com/maps/dir/?daddr=38.1046864,-122.2159803&amp;ll=");
    else /* else use Google */
      window.open("https://maps.google.com/maps/dir/?daddr=38.1046864,-122.2159803&amp;ll=");
  }

  renderMobileContactDialog() {
    return (
      <>
        {!this.state.isBottomDialogOpen && (
          <div className='mobile-contact-trigger' onClick={ () => 
            this.setState({ isBottomDialogOpen: true }) 
          }>
            <div className='mobile-contract-trigger-text'>
              <div>Order</div>
              <div>Now</div>
            </div>
          </div>
        )}
        <SlidingPane
          className='mobile-popout'
          overlayClassName='mobile-popout-overlay'
          isOpen={ this.state.isBottomDialogOpen }
          from="right"
          onRequestClose={ () => {
            this.setState({ isBottomDialogOpen: false });
          }}>
          <div className="mobile-popout">
            <img  alt="combo restaurant front" className="popout-image" src="http://res.cloudinary.com/ac31624/image/upload/c_scale,w_832/v1554845685/combo/combo_front_hd6mi2.jpg" />
            <div className="party-order-message">We are located at:</div>
            <div className="popout-address">
              <address>
                42 Springstowne Ctr<br/>
                Vallejo, CA 94591<br/>
              </address>
              <div className="popout-maps-link" onClick={this.openMobileMaps}>Open in maps <span role="img" aria-label="emoji maps">📲</span></div>
            </div>
            <div className="party-order-message">Please call the number below to place an order, thank you!</div>
            <div className="mobile-popout-number"><span role="img"><span role="img" aria-label="emoji phone">📞</span> : </span><a href="tel:707-648-1066">707-648-1066</a></div>
          </div>
        </SlidingPane>
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <MediaQuery minDeviceWidth={1000}>
          <NavBar />
          {/* <div className="mobile-section-labels">Desktop site will be coming soon!</div> */}
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1000}>
          <HeaderMobile />
          <PhotoCarousel />
          <div className="mobile-divider"><img className="mobile-divider-image" src="https://res.cloudinary.com/ac31624/image/upload/v1554081007/combo/chopsticks_rotated_b1ft0x.png" alt="chopsticks divider"/></div>
          <div className="">
            <AboutUs />
          </div>   
          <div className="mobile-divider"><img className="mobile-divider-image" src="https://res.cloudinary.com/ac31624/image/upload/v1554081007/combo/chopsticks_rotated_b1ft0x.png" alt="chopsticks divider"/></div>
          <PartyOrdersMobile />
          <div className="mobile-divider"><img className="mobile-divider-image" src="https://res.cloudinary.com/ac31624/image/upload/v1554081007/combo/chopsticks_rotated_b1ft0x.png" alt="chopsticks divider"/></div>     
          {this.renderMobileContactDialog()}
        </MediaQuery>
        <GoogleMap />
      </div>
    );
  }
}

export default App;
