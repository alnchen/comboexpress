import React, { Component } from "react";
import comboExpressMenu from "../menu-object";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null
    };
  }

  updateCategory(categoryName) {
    this.setState({
      selectedCategory: categoryName
    });
  }

  render() {
    let categoryItems = comboExpressMenu.getCategoryItems(this.state.selectedCategory);
    return this.state.selectedCategory ? (
      <div className="menu-body">
        <ul className="menu-items">
          {
            categoryItems.map((categoryItem, idx) => {
              let isSpicy = comboExpressMenu.getItemSpice(this.state.selectedCategory, categoryItem);
              let isSpicyItem = isSpicy ? (
                <strong className="menu-pepper">&#127798;</strong>
              ) : null;
              return (
                <li className="menu-item" key={`menu-item-${idx}`}>
                  <h6 className="menu-item-name">
                    {categoryItem}{isSpicyItem}
                  </h6>
                  <h6>{comboExpressMenu.getItemPrice(this.state.selectedCategory, categoryItem)}</h6>
                </li>
              );
            })
          }
        </ul>
      </div>
    ) : (
      <ul className="menu-select">
        <li onClick={() => this.updateCategory("Appetizers")}>Appetizers</li>
        <li onClick={() => this.updateCategory("Soup")}>Soup</li>
        <li onClick={() => this.updateCategory("Seafood")}>Seafood</li>
        <li onClick={() => this.updateCategory("Meat")}>Meat</li>
        <li onClick={() => this.updateCategory("Vegetables")}>Vegetables</li>
        <li onClick={() => this.updateCategory("Noodles")}>Noodles</li>
        <li onClick={() => this.updateCategory("Chow Mein")}>Chow Mein</li>
        <li onClick={() => this.updateCategory("Chow Fun")}>Chow Fun</li>
        <li onClick={() => this.updateCategory("Rice")}>Rice</li>
      </ul>
    );
  }
}

export default Menu;