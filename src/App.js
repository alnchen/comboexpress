import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import HeaderMobile from './components/mobile/header-mobile';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './App.css';

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
      ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPad") != -1) || 
       (navigator.platform.indexOf("iPod") != -1))
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
          overlayClassName='mobile-popout'
          isOpen={ this.state.isBottomDialogOpen }
          from="right"
          onRequestClose={ () => {
            this.setState({ isBottomDialogOpen: false });
          }}>
          <div className="mobile-popout">
            <div className="mobile-popout-heading">Contact Us</div>
            <hr className="hori-line"/>
            <img  className="popout-image" src="https://res.cloudinary.com/ac31624/image/upload/v1553999152/combo_wkuqyh_ggwroq.jpg" />
            <div className="party-order-message">We are located at:</div>
            <address className="popout-address">
              42 Springstowne Ctr<br/>
              Vallejo, CA 94591<br/>
              <a href="_blank" onClick={this.openMobileMaps}>Click Here To Navigate</a>
            </address>
            <div className="party-order-message">Please call the number below to place an order, thank you!</div>
            <div className="mobile-popout-number"><span role="img">📞 : </span><a href="tel:707-648-1066">707-648-1066</a></div>
          </div>
        </SlidingPane>
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <MediaQuery minDeviceWidth={1224}>
          desktop in progress
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <HeaderMobile />
          {this.renderMobileContactDialog()}
        </MediaQuery>
      </div>
    );
  }
}

export default App;
