import React, { Component } from "react";
import comboExpressMenu from "../menu-object";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let categories = comboExpressMenu.getAllCategories();
    return (
      <span className="mobile-menu">
        {
          categories.map((category, idx) => {
            let categoryItems = comboExpressMenu.getCategoryItems(category);
            return (
              <ul className="mobile-menu-category" key={`mobile-menu-category-${idx}`}>
                <h1>{category}</h1>
                {
                  categoryItems.map((categoryItem, jdx) => {
                    let isSpicy = comboExpressMenu.getItemSpice(category, categoryItem);
                    let isSpicyItem = isSpicy ? (
                      <strong className="mobile-menu-pepper">&#127798;</strong>
                    ) : null;
                    return (
                      <li className="mobile-menu-item" key={`mobile-menu-item-${jdx}`}>
                        <h6>{categoryItem}{isSpicyItem}</h6>
                        <h6>{comboExpressMenu.getItemPrice(category, categoryItem)}</h6>
                      </li>
                    );
                  })
                }
              </ul>
            );
          })
        }
      </span>
    );
  }
}

export default MobileMenu;