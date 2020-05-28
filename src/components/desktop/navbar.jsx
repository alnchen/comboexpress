import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
        <nav className="navbar-tabs">
          <TabList className="navbar-tablist">
            <Tab className={`navbar-tab ${this.state.selectedTab === 0 ? "selected-tab" : ""}`} onClick={() => this.updateTab(0)}>
              Home
            </Tab>
            <Tab className={`navbar-tab ${this.state.selectedTab === 1 ? "selected-tab" : ""}`} onClick={() => this.updateTab(1)}>
              Order Online
            </Tab>
            <Tab className={`navbar-tab ${this.state.selectedTab === 2 ? "selected-tab" : ""}`} onClick={() => this.updateTab(2)}>
              Menu
            </Tab>
            <Tab className={`navbar-tab ${this.state.selectedTab === 3 ? "selected-tab" : ""}`} onClick={() => this.updateTab(3)}>
              About Us
            </Tab>
          </TabList>
        </nav>
        <TabPanel>
          <h2>Home</h2>
        </TabPanel>
        <TabPanel>
          <h2>Order Online</h2>
        </TabPanel>
        <TabPanel>
          <h2>Menu</h2>
        </TabPanel>
        <TabPanel className="tab-about-us">
          <h2>About Us</h2>
          <p>
            We are a friendly, family-owned Chinese restaurant that has been serving the city
            of Vallejo in California since 1994. Customer satisfaction has and always will be
            our biggest priority. Come by for a taste!
          </p>
        </TabPanel>
      </Tabs>
    );
  }
}

export default NavBar;