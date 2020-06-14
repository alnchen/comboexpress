class Menu {
  constructor() {
    this.menu = {};
  }

  addCategory(itemCategory) {
    this.menu[itemCategory] = {};
  }

  getAllCategories() {
    return Object.keys(this.menu);
  }

  hasCategory(itemCategory) {
    return this.menu[itemCategory] !== undefined;
  }

  getCategoryItems(category) {
    if (!category) return [];
    return Object.keys(this.menu[category]);
  }

  getItemPrice(itemCategory, itemName) {
    return this.menu[itemCategory][itemName]["Price"];
  }

  getItemSpice(itemCategory, itemName) {
    return this.menu[itemCategory][itemName]["Spicy"];
  }

  hasItem(itemCategory, itemName) {
    return this.menu[itemCategory][itemName] !== undefined;
  }

  addItem(itemCategory, itemName, itemPrice, isSpicy=false, itemQuantity=1) {
    if (!this.hasCategory(itemCategory)) this.addCategory(itemCategory);
    if (!this.hasItem(itemCategory, itemName)) {
      let currCategory = this.menu[itemCategory];
      currCategory[itemName] = {
        "Price": itemPrice,
        "Spicy": isSpicy,
        "Quantity": itemQuantity
      };
    }
  }

  showAllItems() {
    let categories = Object.keys(this.menu);
    categories.forEach(category => {
      let currCategory = this.menu[category];
      let items = Object.keys(currCategory);
      items.forEach(item => {
        let currItem = currCategory[item];
        let info = Object.keys(currItem).map(field => currItem[field]).join(", ");
        console.log(`${category}, ${item}, ${info}`);
      });
    });
  }
}

const comboExpressMenu = new Menu();

// Appetizers
comboExpressMenu.addItem("Appetizers", "Egg Roll", 2.15, false, 1);
comboExpressMenu.addItem("Appetizers", "Fried Wonton (12)", 5.25, false, 12);
comboExpressMenu.addItem("Appetizers", "Pot Sticker (6)", 7.15, false, 6);

// Soup
comboExpressMenu.addItem("Soup", "Egg Flower Soup", 7.25, false, 1);
comboExpressMenu.addItem("Soup", "Vegetable & Wonton Soup", 7.25, false, 1);
comboExpressMenu.addItem("Soup", "Hot & Sour Soup", 7.65, true, 1);
comboExpressMenu.addItem("Soup", "Chicken & Sweet Corn Soup", 7.65, false, 1);
comboExpressMenu.addItem("Soup", "Chicken & Wonton Soup", 7.65, false, 1);
comboExpressMenu.addItem("Soup", "Beef & Wonton Soup", 7.65, false, 1);
comboExpressMenu.addItem("Soup", "Shrimp & Wonton Soup", 8.45, false, 1);
comboExpressMenu.addItem("Soup", "Combination Wonton Soup", 8.45, false, 1);

// Seafood
comboExpressMenu.addItem("Seafood", "Walnut Prawns", 10.85, false, 1);
comboExpressMenu.addItem("Seafood", "Kung Pao Prawns", 10.85, true, 1);
comboExpressMenu.addItem("Seafood", "Prawns with Broccoli", 10.85, false, 1);
comboExpressMenu.addItem("Seafood", "Prawns with Spicy Salt", 10.85, true, 1);
comboExpressMenu.addItem("Seafood", "Prawns with Mixed Vegetables", 10.85, false, 1);
comboExpressMenu.addItem("Seafood", "Fish with Black Bean Sauce", 12.25, false, 1);
comboExpressMenu.addItem("Seafood", "Fish with Spicy Salt", 12.25, false, 1);

// Meat
comboExpressMenu.addItem("Meat", "Chicken with Spicy Salt", 9.45, true, 1);
comboExpressMenu.addItem("Meat", "Sweet & Sour Chicken", 9.45, false, 1);
comboExpressMenu.addItem("Meat", "Kung Pao Chicken", 9.45, true, 1);
comboExpressMenu.addItem("Meat", "Pepper & Garlic Chicken", 9.45, false, 1);
comboExpressMenu.addItem("Meat", "Chicken with Broccoli", 9.45, false, 1);
comboExpressMenu.addItem("Meat", "Curry Chicken", 9.45, true, 1);
comboExpressMenu.addItem("Meat", "Orange Chicken", 9.45, false, 1);
comboExpressMenu.addItem("Meat", "BBQ Chicken", 9.85, false, 1);
comboExpressMenu.addItem("Meat", "Sweet & Sour Pork", 9.45, false, 1);
comboExpressMenu.addItem("Meat", "Fried Spareribs", 9.45, false, 1);
comboExpressMenu.addItem("Meat", "Beef with Broccoli", 9.85, false, 1);
comboExpressMenu.addItem("Meat", "Mongolian Beef", 9.85, true, 1);

// Vegetables
comboExpressMenu.addItem("Vegetables", "Mixed Vegetables", 8.45, false, 1);
comboExpressMenu.addItem("Vegetables", "Broccoli with Garlic Sauce", 8.45, false, 1);
comboExpressMenu.addItem("Vegetables", "Tofu with Black Mushrooms", 8.45, false, 1);
comboExpressMenu.addItem("Vegetables", "Tofu with Spicy Salt", 8.45, true, 1);

// Noodles
comboExpressMenu.addItem("Noodles", "Chicken Rice Noodles", 7.95, false, 1);
comboExpressMenu.addItem("Noodles", "Beef Rice Noodles", 7.95, false, 1);
comboExpressMenu.addItem("Noodles", "Shrimp Rice Noodles", 8.65, false, 1);
comboExpressMenu.addItem("Noodles", "Combination Rice Noodles (Beef, Chicken, Shrimp)", 8.65, false, 1);
comboExpressMenu.addItem("Noodles", "Chicken Pan Fried Noodles", 8.95, false, 1);
comboExpressMenu.addItem("Noodles", "Beef Pan Fried Noodles", 8.95, false, 1);
comboExpressMenu.addItem("Noodles", "Shrimp Pan Fried Noodles", 8.95, false, 1);
comboExpressMenu.addItem("Noodles", "Combination Pan Fried Noodles (Beef, Chicken, Shrimp)", 9.35, false, 1);

// Chow Mein
comboExpressMenu.addItem("Chow Mein", "Vegetable Chow Mein", 7.25, false, 1);
comboExpressMenu.addItem("Chow Mein", "Chicken Chow Mein", 7.95, false, 1);
comboExpressMenu.addItem("Chow Mein", "Beef Chow Mein", 7.95, false, 1);
comboExpressMenu.addItem("Chow Mein", "BBQ Pork Chow Mein", 7.95, false, 1);
comboExpressMenu.addItem("Chow Mein", "Shrimp Chow Mein", 8.65, false, 1);
comboExpressMenu.addItem("Chow Mein", "Combination Chow Mein", 8.65, false, 1);

// Chow Fun
comboExpressMenu.addItem("Chow Fun", "Vegetable Chow Fun", 7.55, false, 1);
comboExpressMenu.addItem("Chow Fun", "Chicken Chow Fun", 8.25, false, 1);
comboExpressMenu.addItem("Chow Fun", "Beef Chow Fun", 8.25, false, 1);
comboExpressMenu.addItem("Chow Fun", "BBQ Pork Chow Fun", 8.25, false, 1);
comboExpressMenu.addItem("Chow Fun", "Shrimp Chow Fun", 8.85, false, 1);
comboExpressMenu.addItem("Chow Fun", "Combination Chow Fun", 8.85, false, 1);

// Rice
comboExpressMenu.addItem("Rice", "Vegetable Fried Rice", 7.25, false, 1);
comboExpressMenu.addItem("Rice", "Chicken Fried Rice", 7.95, false, 1);
comboExpressMenu.addItem("Rice", "Beef Fried Rice", 7.95, false, 1);
comboExpressMenu.addItem("Rice", "BBQ Pork Fried Rice", 7.95, false, 1);
comboExpressMenu.addItem("Rice", "Shrimp Fried Rice", 8.65, false, 1);
comboExpressMenu.addItem("Rice", "Combination Fried Rice", 8.65, false, 1);
comboExpressMenu.addItem("Rice", "Steamed Rice", 4.25, false, 1);

export default comboExpressMenu;