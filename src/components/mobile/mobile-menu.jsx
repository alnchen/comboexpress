import React, { Component } from "react";
import comboExpressMenu from "../menu-object";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var collapsibleButtons = document.getElementsByClassName("collapsible-button");
    for (let idx = 0; idx < collapsibleButtons.length; idx++) {
      collapsibleButtons[idx].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  render() {
    let categories = comboExpressMenu.getAllCategories();
    return (
      <span className="mobile-menu-wrapper">
        {
          categories.map((category, idx) => {
            let categoryItems = comboExpressMenu.getCategoryItems(category);
            return (
              <div className="mobile-menu">
                <button className="collapsible-button">{category}</button>
                <ul className="mobile-menu-category collapsible-content" key={`mobile-menu-category-${idx}`}>
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
              </div>
            );
          })
        }
      </span>
    );
  }
}

export default MobileMenu;