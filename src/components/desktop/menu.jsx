import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    let categoryMatch = this.props.match.params.category;
    let capitalizeFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
    let capitalizeMatch = categoryMatch ? categoryMatch.split("-").map(word => capitalizeFirst(word)).join(" ") : "";
    let categoryItems = comboExpressMenu.getCategoryItems(capitalizeMatch);
    return capitalizeMatch ? (
      <span className="menu">
        <h2>Menu</h2>
        <div className="menu-body">
          <ul className="menu-items">
            {
              categoryItems.map((categoryItem, idx) => {
                let isSpicy = comboExpressMenu.getItemSpice(capitalizeMatch, categoryItem);
                let isSpicyItem = isSpicy ? (
                  <strong className="menu-pepper">&#127798;</strong>
                ) : null;
                return (
                  <li className="menu-item" key={`menu-item-${idx}`}>
                    <h6 className="menu-item-name">
                      {categoryItem}{isSpicyItem}
                    </h6>
                    <h6>{comboExpressMenu.getItemPrice(capitalizeMatch, categoryItem)}</h6>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </span>
    ) : (
      <div className="menu">
        <h2>Menu</h2>
        <ul className="menu-select">
          <li onClick={() => this.updateCategory("Appetizers")}>
            <Link to={"/menu/appetizers"}>
              Appetizers
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Soup")}>
            <Link to={"/menu/soup"}>
              Soup
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Seafood")}>
            <Link to={"/menu/seafood"}>
              Seafood
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Meat")}>
            <Link to={"/menu/meat"}>
              Meat
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Vegetables")}>
            <Link to={"/menu/vegetables"}>
              Vegetables
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Noodles")}>
            <Link to={"/menu/noodles"}>
              Noodles
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Chow Mein")}>
            <Link to={"/menu/chow-mein"}>
              Chow Mein
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Chow Fun")}>
            <Link to={"/menu/chow-fun"}>
              Chow Fun
            </Link>
          </li>
          <li onClick={() => this.updateCategory("Rice")}>
            <Link to={"/menu/rice"}>
              Rice
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;