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
      <div className="menu">
        <h2>Menu</h2>
        <div className="menu-body">
          <ul className="menu-items">
            <Link to={"/menu"}>
              <li onClick={() => this.updateCategory("Appetizers")}>
                {"<-- See all items"}
              </li>
            </Link>
            {
              categoryItems.map((categoryItem, idx) => {
                let isSpicy = comboExpressMenu.getItemSpice(capitalizeMatch, categoryItem);
                let isSpicyItem = isSpicy ? (
                  <strong className="mobile-menu-pepper">&#127798;</strong>
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
      </div>
    ) : (
      <div className="menu">
        <h2>Menu</h2>
        <ul className="menu-select">
          <Link to={"/menu/appetizers"}>
            <li onClick={() => this.updateCategory("Appetizers")}>
              Appetizers
            </li>
          </Link>
          <Link to={"/menu/soup"}>
            <li onClick={() => this.updateCategory("Soup")}>
              Soup
            </li>
          </Link>
          <Link to={"/menu/seafood"}>
            <li onClick={() => this.updateCategory("Seafood")}>
              Seafood
            </li>
          </Link>
          <Link to={"/menu/meat"}>
            <li onClick={() => this.updateCategory("Meat")}>
              Meat
            </li>
          </Link>
          <Link to={"/menu/vegetables"}>
            <li onClick={() => this.updateCategory("Vegetables")}>
              Vegetables
            </li>
          </Link>
          <Link to={"/menu/noodles"}>
            <li onClick={() => this.updateCategory("Noodles")}>
              Noodles
            </li>
          </Link>
          <Link to={"/menu/chow-mein"}>
            <li onClick={() => this.updateCategory("Chow Mein")}>
              Chow Mein
            </li>
          </Link>
          <Link to={"/menu/chow-fun"}>
            <li onClick={() => this.updateCategory("Chow Fun")}>
              Chow Fun
            </li>
          </Link>
          <Link to={"/menu/rice"}>
            <li onClick={() => this.updateCategory("Rice")}>
              Rice
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Menu;