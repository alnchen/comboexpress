import React, { Component } from 'react';

export default class HeaderMobile extends Component {
  render() {
    return (
      <div className="mobile-header">
        <div className="mobile-logo-container"><img className="mobile-logo" alt="combo logo" src="https://res.cloudinary.com/ac31624/image/upload/v1554084288/ComboExpress_Logo_xcakhb.png"/></div>
        <div className="mobile-header-address">
          <div className="">
            42 Springstowne Ctr<br/>
            Vallejo, CA 94591<br/>
            <div className="mobile-header-phone"><span role="img"><span role="img" aria-label="phone emoji">📞</span> : </span><a className="mobile-header-phone-number" href="tel:707-648-1066">707-648-1066</a></div>
          </div>
        </div>
      </div>
    );
  }
}
