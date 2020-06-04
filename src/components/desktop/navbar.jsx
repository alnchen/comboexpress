import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "react-tabs";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.updateTab = this.updateTab.bind(this);
    this.state = {
      selectedTab: 0
    };
  }

  updateTab(tabId) {
    this.setState({
      selectedTab: tabId
    });
  }

  render() {
    return (

      <Tabs>
        <div className="desktop-header">

          <span className="desktop-header-spacer">
            <div className="desktop-header-address">
                42 Springstowne Ctr<br/>
                Vallejo, CA 94591<br/>
            </div>
            <div className="desktop-header-phone">
              <span role="img"><span role="img" aria-label="phone emoji">📞</span></span>
              <a className="mobile-header-phone-number" href="tel:707-648-1066">707-648-1066</a>
            </div>
          </span>

          <span className="desktop-logo-spacer">
            <Link to={"/"} onClick={() => this.updateTab(0)}>
              <img className="desktop-logo" alt="combo logo" src="https://res.cloudinary.com/ac31624/image/upload/v1554084288/combo/ComboExpress_Logo_xcakhb.png"/>
            </Link>
          </span>

          <span className="desktop-header-tabs-wrapper">
            <nav className="navbar-tabs">
              <hgroup className="navbar-tablist">
                <Link to={"/"} className={`navbar-tab ${this.state.selectedTab === 0 ? "selected-tab" : ""}`} onClick={() => this.updateTab(0)}>
                  Home
                </Link>
                <Link to={"/about-us"} className={`navbar-tab ${this.state.selectedTab === 1 ? "selected-tab" : ""}`} onClick={() => this.updateTab(1)}>
                  About Us
                </Link>
                <Link to={"/menu"} className={`navbar-tab ${this.state.selectedTab === 2 ? "selected-tab" : ""}`} onClick={() => this.updateTab(2)}>
                  Menu
                </Link>
                <Link to={"/party-orders"} className={`navbar-tab ${this.state.selectedTab === 3 ? "selected-tab" : ""}`} onClick={() => this.updateTab(3)}>
                  Party Orders
                </Link>
              </hgroup>
            </nav>
          </span>

        </div>
      </Tabs>
    );
  }
}

export default NavBar;