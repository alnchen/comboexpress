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
    // let selectedTab = document.getElementsByClassName("selected-tab")[0];
    // selectedTab.classList.remove("selected-tab");
    // event.currentTarget.classList.add("selected-tab");
    // console.log(event);
  }

  componentDidUpdate() {
    console.log("hi");
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
              The Story
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
        <TabPanel>
          <h2>The Story</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default NavBar;