import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import HeaderMobile from './components/mobile/header-mobile';
import PartyOrdersGallery from './components/party-orders-gallery';
import PhotoCarousel from './components/photo-carousel';
import CovidMessage from './components/covid-message';
import AboutUs from './components/about-us';
import Modal from 'react-awesome-modal';
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
        <Modal visible={this.state.isBottomDialogOpen} effect="fadeInUp" onClickAway={ () => {
            this.setState({ isBottomDialogOpen: false });
          }}>
          <div className="mobile-popout">
            <div className="popout-address">
              <address>
                42 Springstowne Ctr<br/>
                Vallejo, CA 94591<br/>
              </address>
              <div className="popout-maps-link" onClick={this.openMobileMaps}>Open in maps <span role="img" aria-label="emoji maps">📲</span></div>
            </div>
            <div className="phone-button-wrapper">
              <a href="tel:707-648-1066" className="mobile-popout-number">
                <img alt="phone-icon" src="https://res.cloudinary.com/ac31624/image/upload/v1590560559/combo/phone_icon.png"  className="mobile-popout-phone-icon" />
                <span id='phone-number'>(707)648-1066</span>
              </a>
            </div>
          </div>
        </Modal>
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <MediaQuery minDeviceWidth={800}>
          <NavBar />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={800}>
          <HeaderMobile />
          <CovidMessage classes="side-margin mobile-font"/>
          <PhotoCarousel />
          <div className="mobile-divider"><img className="mobile-divider-image" src="https://res.cloudinary.com/ac31624/image/upload/v1554081007/combo/chopsticks_rotated_b1ft0x.png" alt="chopsticks divider"/></div>
          <div className="">
            <AboutUs />
          </div>   
          <div className="mobile-divider"><img className="mobile-divider-image" src="https://res.cloudinary.com/ac31624/image/upload/v1554081007/combo/chopsticks_rotated_b1ft0x.png" alt="chopsticks divider"/></div>
          <PartyOrdersGallery />
          <div className="mobile-divider"><img className="mobile-divider-image" src="https://res.cloudinary.com/ac31624/image/upload/v1554081007/combo/chopsticks_rotated_b1ft0x.png" alt="chopsticks divider"/></div>     
          {this.renderMobileContactDialog()}
          <img  alt="combo restaurant front" className="popout-image" src="http://res.cloudinary.com/ac31624/image/upload/c_scale,w_832/v1554845685/combo/combo_front_hd6mi2.jpg" />
        </MediaQuery>
        <GoogleMap />
      </div>
    );
  }
}

export default App;
